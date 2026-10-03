import { generateLocalFallback } from '../server/promptEngine';

export interface GenerateApiResponse {
  success: boolean;
  output: string;
  source?: string;
  error?: string;
}

export async function generateAiContent(
  toolId: string,
  inputs: Record<string, string | number>
): Promise<GenerateApiResponse> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000); // 20s timeout

    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ toolId, inputs }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (response.ok) {
      const data = await response.json();
      if (data && data.output) {
        return {
          success: true,
          output: data.output,
          source: data.source || 'gemini',
        };
      }
    }

    // If server returned non-200 or empty, gracefully fallback
    console.warn('[Nomi AI Client] Server returned error, applying client-side synthesis');
    const localOutput = generateLocalFallback(toolId, inputs);
    return {
      success: true,
      output: localOutput,
      source: 'local-synthesizer',
    };
  } catch (error: any) {
    console.warn('[Nomi AI Client] Network error or timeout, applying local synthesis fallback:', error);
    const localOutput = generateLocalFallback(toolId, inputs);
    return {
      success: true,
      output: localOutput,
      source: 'local-synthesizer',
    };
  }
}
