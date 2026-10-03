import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  RotateCcw,
  Trash2,
  AlertCircle,
  CheckCircle2,
  ArrowLeft,
  Wand2,
  Share2,
  Lightbulb,
  FileCheck
} from 'lucide-react';
import { ToolDefinition } from '../types';
import { generateAiContent } from '../services/api';
import { IconHelper } from '../components/common/IconHelper';
import { CopyButton } from '../components/common/CopyButton';
import { AdBanner } from '../components/common/AdBanner';

interface ToolDetailPageProps {
  tool: ToolDefinition;
  navigate: (path: string) => void;
}

export const ToolDetailPage: React.FC<ToolDetailPageProps> = ({ tool, navigate }) => {
  const [formData, setFormData] = useState<Record<string, string | number>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [resultSource, setResultSource] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  // Initialize form default values
  useEffect(() => {
    const initial: Record<string, string | number> = {};
    tool.fields.forEach((f) => {
      if (f.defaultValue !== undefined) {
        initial[f.id] = f.defaultValue;
      } else {
        initial[f.id] = '';
      }
    });
    setFormData(initial);
    setResult(null);
    setErrorMessage(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [tool.id]);

  const handleInputChange = (fieldId: string, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [fieldId]: value,
    }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleClear = () => {
    const cleared: Record<string, string | number> = {};
    tool.fields.forEach((f) => {
      cleared[f.id] = f.defaultValue !== undefined ? f.defaultValue : '';
    });
    setFormData(cleared);
    setResult(null);
    setErrorMessage(null);
  };

  const handleLoadSample = () => {
    setFormData({ ...tool.samplePreset });
    setErrorMessage(null);
  };

  const handleGenerate = async () => {
    // Validate required fields
    const missingField = tool.fields.find(
      (f) => f.required && (!formData[f.id] || String(formData[f.id]).trim() === '')
    );
    if (missingField) {
      setErrorMessage(`Please provide a value for "${missingField.label}" to proceed.`);
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await generateAiContent(tool.id, formData);
      if (response.success && response.output) {
        setResult(response.output);
        setResultSource(response.source || 'gemini');

        // Smooth scroll to result on mobile
        setTimeout(() => {
          resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      } else {
        setErrorMessage(response.error || 'Failed to generate content. Please try again.');
      }
    } catch (err: any) {
      setErrorMessage(err?.message || 'A network error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Helper to render special structured result blocks (e.g. YouTube titles, Story scenes, Hashtags)
  const renderStructuredResult = (content: string) => {
    if (tool.id === 'youtube-title') {
      // Split into categories
      const lines = content.split('\n');
      return (
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs text-slate-400 font-medium">
              Copy any title with one tap or copy the entire set.
            </span>
            <CopyButton text={content} label="Copy All Titles" size="sm" />
          </div>

          <div className="space-y-4">
            {lines.map((line, idx) => {
              const trimmed = line.trim();
              if (trimmed.startsWith('###')) {
                return (
                  <h4
                    key={idx}
                    className="text-sm font-bold text-indigo-300 pt-3 border-t border-slate-800/80 first:border-0 first:pt-0 uppercase tracking-wider font-mono"
                  >
                    {trimmed.replace(/^###\s*/, '')}
                  </h4>
                );
              }
              if (/^[0-9]+\.\s+/.test(trimmed)) {
                const titleText = trimmed.replace(/^[0-9]+\.\s+/, '').replace(/^["']|["']$/g, '');
                return (
                  <div
                    key={idx}
                    className="flex items-center justify-between gap-3 p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/30 transition-all"
                  >
                    <p className="text-sm text-slate-100 font-medium leading-snug flex-1">
                      {titleText}
                    </p>
                    <CopyButton text={titleText} label="Copy" size="sm" variant="secondary" />
                  </div>
                );
              }
              if (trimmed.length === 0) return null;
              return (
                <p key={idx} className="text-xs text-slate-400">
                  {trimmed}
                </p>
              );
            })}
          </div>
        </div>
      );
    }

    if (tool.id === 'story-generator') {
      return (
        <div className="space-y-5">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs text-slate-400">Complete Multi-Scene Narrative</span>
            <CopyButton text={content} label="Copy Complete Story" size="sm" />
          </div>
          <div className="prose prose-invert max-w-none text-slate-200 text-sm leading-relaxed whitespace-pre-wrap font-sans">
            {content}
          </div>
        </div>
      );
    }

    if (tool.id === 'hashtag-generator') {
      const sections = content.split('###').filter(Boolean);
      return (
        <div className="space-y-5">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs text-slate-400">Platform Optimized Hashtag Clusters</span>
            <CopyButton text={content} label="Copy All Hashtags" size="sm" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sections.map((sec, idx) => {
              const [header, ...bodyLines] = sec.split('\n');
              const body = bodyLines.join('\n').trim();
              if (!body) return null;
              return (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-wider mb-2 font-mono">
                      {header.trim()}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-mono">
                      {body}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-800 flex justify-end">
                    <CopyButton text={body} label="Copy Tags" size="sm" variant="pill" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    // Default formatting (Tool 1, 2, 3, 5, 6, 7, 9, 10, 11)
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <span className="text-xs text-slate-400 font-medium">Generated Output</span>
          <CopyButton text={content} label="Copy Result" size="sm" variant="primary" />
        </div>
        <div className="p-4 sm:p-5 rounded-xl bg-[#090d16] border border-slate-800/90 text-slate-200 text-sm sm:text-base leading-relaxed whitespace-pre-wrap font-mono select-all">
          {content}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full min-h-screen py-6 sm:py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <button
          type="button"
          onClick={() => navigate('/tools')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-indigo-300 mb-6 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Tools</span>
        </button>

        {/* Tool Header Card */}
        <div className="p-5 sm:p-8 rounded-2xl bg-[#0d1322] border border-slate-800 mb-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-950 to-slate-900 border border-indigo-500/30 text-indigo-400 flex items-center justify-center shrink-0 shadow-md">
                <IconHelper name={tool.iconName} className="w-6 h-6 stroke-[1.8]" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400 font-semibold">
                  {tool.category}
                </span>
                <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  {tool.name}
                </h1>
              </div>
            </div>

            {/* Quick Sample Button */}
            <button
              type="button"
              onClick={handleLoadSample}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/25 text-xs font-semibold active:scale-95 transition-all self-start sm:self-auto touch-manipulation"
              title="Auto-fill form with a realistic sample prompt"
            >
              <Lightbulb className="w-4 h-4 text-amber-400" />
              <span>Load Example</span>
            </button>
          </div>

          <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
            {tool.description}
          </p>
        </div>

        {/* Input Form */}
        <div className="p-5 sm:p-8 rounded-2xl bg-[#0e1424] border border-slate-800 shadow-xl mb-8">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-5 font-mono flex items-center gap-2">
            <span>Input Parameters</span>
            <span className="text-[10px] normal-case font-normal text-slate-400">
              (Fill required fields below)
            </span>
          </h2>

          <div className="space-y-4 sm:space-y-5">
            {tool.fields.map((field) => {
              const value = formData[field.id] !== undefined ? formData[field.id] : '';

              if (field.type === 'textarea') {
                return (
                  <div key={field.id} className="space-y-1.5">
                    <label className="block text-xs sm:text-sm font-semibold text-slate-200">
                      {field.label}
                      {field.required && <span className="text-rose-400 ml-1">*</span>}
                    </label>
                    <textarea
                      rows={3}
                      value={value}
                      onChange={(e) => handleInputChange(field.id, e.target.value)}
                      placeholder={field.placeholder}
                      className="w-full rounded-xl bg-[#080c14] border border-slate-700/80 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all resize-y"
                    />
                  </div>
                );
              }

              if (field.type === 'select' && field.options) {
                return (
                  <div key={field.id} className="space-y-1.5">
                    <label className="block text-xs sm:text-sm font-semibold text-slate-200">
                      {field.label}
                    </label>
                    <select
                      value={value}
                      onChange={(e) => handleInputChange(field.id, e.target.value)}
                      className="w-full rounded-xl bg-[#080c14] border border-slate-700/80 px-3.5 py-2.5 text-xs sm:text-sm text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all cursor-pointer"
                    >
                      {field.options.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#0b0f19] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              }

              return (
                <div key={field.id} className="space-y-1.5">
                  <label className="block text-xs sm:text-sm font-semibold text-slate-200">
                    {field.label}
                    {field.required && <span className="text-rose-400 ml-1">*</span>}
                  </label>
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => handleInputChange(field.id, e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full rounded-xl bg-[#080c14] border border-slate-700/80 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
                  />
                </div>
              );
            })}
          </div>

          {/* Form Action Buttons */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleClear}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 active:scale-95 text-slate-300 hover:text-white border border-slate-700 text-xs sm:text-sm font-medium transition-all"
            >
              <Trash2 className="w-4 h-4 text-slate-400" />
              <span>Clear</span>
            </button>

            <button
              type="button"
              disabled={isLoading}
              onClick={handleGenerate}
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-600 hover:from-indigo-500 hover:to-sky-500 active:scale-95 text-white font-bold text-sm sm:text-base shadow-lg shadow-indigo-600/30 disabled:opacity-60 disabled:cursor-not-allowed transition-all touch-manipulation"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Generating AI Content...</span>
                </>
              ) : (
                <>
                  <Wand2 className="w-5 h-5" />
                  <span>Generate with AI</span>
                </>
              )}
            </button>
          </div>

          {/* Error Message Box */}
          {errorMessage && (
            <div className="mt-4 p-4 rounded-xl bg-rose-950/50 border border-rose-800/60 text-rose-200 text-xs sm:text-sm flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-semibold text-rose-300">Notice</p>
                <p className="mt-0.5 text-rose-200/90">{errorMessage}</p>
              </div>
            </div>
          )}
        </div>

        {/* Loading Skeleton / Animation */}
        {isLoading && (
          <div className="p-8 rounded-2xl bg-[#0e1424] border border-indigo-500/30 text-center animate-pulse mb-8">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto mb-4 animate-bounce">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-1">
              Synthesizing Optimal Creator Content...
            </h3>
            <p className="text-xs text-slate-400">
              Applying advanced creator prompts, parameters, and formatting.
            </p>
          </div>
        )}

        {/* Result Section */}
        {result && (
          <div ref={resultRef} className="scroll-mt-20 mb-8">
            <div className="p-5 sm:p-8 rounded-2xl bg-[#0e1424] border border-indigo-500/40 shadow-2xl shadow-indigo-950/40">
              {/* Result Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white leading-tight">
                      Result Ready
                    </h3>
                    <span className="text-[10px] text-slate-400">
                      Optimized for 1-tap clipboard copying
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleGenerate}
                    disabled={isLoading}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-all active:scale-95"
                    title="Regenerate with fresh ideas"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Regenerate</span>
                  </button>

                  <CopyButton text={result} label="Copy All" size="sm" variant="primary" />
                </div>
              </div>

              {/* Render Structured Output */}
              {renderStructuredResult(result)}
            </div>

            {/* Reserved Tool Result Page Advertisement Area */}
            <AdBanner placement="tool-result" className="my-6" />
          </div>
        )}
      </div>
    </div>
  );
};
