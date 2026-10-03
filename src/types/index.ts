export type ToolCategory =
  | 'Writing Tools'
  | 'Image Tools'
  | 'Video Tools'
  | 'YouTube Tools'
  | 'Social Media Tools'
  | 'Creator Tools';

export interface ToolField {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'select' | 'number';
  placeholder?: string;
  options?: string[];
  defaultValue?: string | number;
  description?: string;
  required?: boolean;
}

export interface ToolDefinition {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: ToolCategory;
  iconName: string;
  isPopular?: boolean;
  fields: ToolField[];
  samplePreset: Record<string, string | number>;
  outputType: 'text' | 'multi-titles' | 'sections' | 'story' | 'hashtags';
}

export interface GenerationResult {
  toolId: string;
  timestamp: number;
  output: string;
  parsedOutput?: {
    titles?: { category: string; title: string }[];
    scenes?: { number: number; heading: string; description: string; actions: string; dialogue: string }[];
    sections?: { title: string; content: string }[];
    hashtags?: { platform: string; tags: string[] }[];
    consistencyNotes?: string;
  };
}

export interface HistoryItem {
  id: string;
  toolId: string;
  toolName: string;
  timestamp: number;
  inputs: Record<string, string | number>;
  output: string;
}
