import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { buildGeminiPrompt, generateLocalFallback } from './src/server/promptEngine.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
const isProd = process.env.NODE_ENV === 'production';

app.use(express.json({ limit: '5mb' }));

// Initialize Gemini SDK with User-Agent telemetry as mandated by guidelines
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey && apiKey.trim() !== '' && apiKey !== 'MY_GEMINI_API_KEY') {
  try {
    ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
    console.log('[Nomi AI] Gemini AI initialized successfully with gemini-3.8-flash');
  } catch (err) {
    console.warn('[Nomi AI] Failed to initialize GoogleGenAI client, will use intelligent fallback:', err);
  }
} else {
  console.log('[Nomi AI] No active GEMINI_API_KEY detected in env; utilizing high-grade generative fallback engine.');
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    hasGeminiKey: Boolean(ai),
    timestamp: Date.now(),
    model: 'gemini-3.8-flash'
  });
});

// Main AI Generation endpoint
app.post('/api/generate', async (req, res) => {
  try {
    const { toolId, inputs } = req.body;
    if (!toolId) {
      return res.status(400).json({ error: 'Missing required field: toolId' });
    }

    const toolInputs = (inputs && typeof inputs === 'object') ? inputs : {};

    // Try Gemini if available
    if (ai) {
      try {
        const { systemInstruction, userPrompt } = buildGeminiPrompt(toolId, toolInputs);
        const response = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: userPrompt,
          config: {
            systemInstruction,
            temperature: 0.75,
            topP: 0.95,
          },
        });

        // Use direct .text property as required by @google/genai guidelines
        const outputText = response.text;
        if (outputText && outputText.trim().length > 0) {
          return res.json({
            success: true,
            output: outputText.trim(),
            source: 'gemini-3.8-flash',
          });
        }
      } catch (geminiError: any) {
        console.warn('[Nomi AI] Gemini generation error, gracefully falling back to local engine:', geminiError?.message || geminiError);
      }
    }

    // High quality deterministic fallback generator
    const fallbackOutput = generateLocalFallback(toolId, toolInputs);
    return res.json({
      success: true,
      output: fallbackOutput,
      source: 'local-synthesizer',
    });
  } catch (error: any) {
    console.error('[Nomi AI] Critical generation error:', error);
    return res.status(500).json({
      error: 'Generation failed. Please try again.',
      details: error?.message || 'Unknown error'
    });
  }
});

// Vite Middleware or Static Production Serving
if (!isProd) {
  const { createServer: createViteServer } = await import('vite');
  const vite = await createViteServer({
    server: {
      middlewareMode: true,
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    appType: 'spa',
  });
  app.use(vite.middlewares);
} else {
  app.use(express.static(path.resolve(__dirname, 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  });
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`[Nomi AI] Server listening on http://0.0.0.0:${PORT}`);
});
