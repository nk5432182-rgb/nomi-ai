import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ChevronRight } from 'lucide-react';
import { TOOLS_DATA } from '../../data/toolsData';
import { IconHelper } from './IconHelper';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  navigate: (path: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, navigate }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();
  const filteredTools = TOOLS_DATA.filter((tool) => {
    if (!normalizedQuery) return true;
    return (
      tool.name.toLowerCase().includes(normalizedQuery) ||
      tool.description.toLowerCase().includes(normalizedQuery) ||
      tool.tagline.toLowerCase().includes(normalizedQuery) ||
      tool.category.toLowerCase().includes(normalizedQuery) ||
      tool.slug.toLowerCase().includes(normalizedQuery) ||
      // Match common search words
      (normalizedQuery.includes('video') && tool.category === 'Video Tools') ||
      (normalizedQuery.includes('image') && tool.category === 'Image Tools') ||
      (normalizedQuery.includes('youtube') && tool.category === 'YouTube Tools') ||
      (normalizedQuery.includes('story') && tool.id.includes('story')) ||
      (normalizedQuery.includes('caption') && tool.id.includes('caption')) ||
      (normalizedQuery.includes('prompt') && tool.name.toLowerCase().includes('prompt')) ||
      (normalizedQuery.includes('urdu') && tool.id.includes('urdu')) ||
      (normalizedQuery.includes('tag') && tool.id.includes('hashtag'))
    );
  });

  const popularSearches = ['Image Prompt', 'Video', 'YouTube Title', 'Story', 'TikTok', 'Urdu to English'];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-8 sm:pt-20 px-3 sm:px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-2xl bg-[#0f172a] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-in fade-in-0 zoom-in-95 duration-150">
        {/* Search Input Bar */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-slate-800 bg-slate-900/90">
          <Search className="w-5 h-5 text-indigo-400 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search AI tools (e.g. video, youtube, image, story, caption)..."
            className="w-full bg-transparent text-white placeholder-slate-400 text-sm sm:text-base outline-none pr-8"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 rounded-lg text-slate-400 hover:text-white mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 text-xs px-2"
          >
            ESC
          </button>
        </div>

        {/* Popular Tags */}
        <div className="px-4 py-2.5 bg-slate-900/50 border-b border-slate-800/60 flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs">
          <span className="text-slate-400 text-[11px] shrink-0 font-medium mr-1">
            Quick:
          </span>
          {popularSearches.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setQuery(tag)}
              className="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-indigo-600/30 text-slate-300 hover:text-indigo-200 border border-slate-700/60 shrink-0 transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="p-2 sm:p-3 overflow-y-auto flex-1 space-y-1">
          {filteredTools.length > 0 ? (
            filteredTools.map((tool) => (
              <button
                key={tool.id}
                type="button"
                onClick={() => {
                  navigate(`/tools/${tool.slug}`);
                  onClose();
                }}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-800/70 border border-transparent hover:border-slate-700 text-left transition-all group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-indigo-950/70 border border-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <IconHelper name={tool.iconName} className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white text-sm group-hover:text-indigo-300 transition-colors">
                        {tool.name}
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                        {tool.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 truncate mt-0.5">
                      {tool.tagline}
                    </p>
                  </div>
                </div>

                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
              </button>
            ))
          ) : (
            <div className="py-12 text-center text-slate-400">
              <Search className="w-8 h-8 mx-auto mb-2 text-slate-500 opacity-60" />
              <p className="text-sm font-medium text-slate-300">No matching AI tools found</p>
              <p className="text-xs text-slate-500 mt-1">
                Try searching for "video", "youtube", "image", "story" or "caption"
              </p>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-slate-900/90 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
          <span>{filteredTools.length} tools available</span>
          <span>100% Free Forever</span>
        </div>
      </div>
    </div>
  );
};
