import React, { useState, useMemo } from 'react';
import { Search, X, SlidersHorizontal, Sparkles } from 'lucide-react';
import { ToolCategory, ToolDefinition } from '../types';
import { CATEGORIES, TOOLS_DATA } from '../data/toolsData';
import { ToolCard } from '../components/common/ToolCard';
import { AdBanner } from '../components/common/AdBanner';

interface ToolsPageProps {
  navigate: (path: string) => void;
  onSelectTool: (tool: ToolDefinition) => void;
  initialCategory?: string;
}

export const ToolsPage: React.FC<ToolsPageProps> = ({
  navigate,
  onSelectTool,
  initialCategory = 'All Tools',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = useMemo(() => {
    let result = TOOLS_DATA;

    if (selectedCategory !== 'All Tools') {
      result = result.filter((t) => t.category === selectedCategory);
    }

    const q = searchQuery.toLowerCase().trim();
    if (q) {
      result = result.filter((tool) => {
        return (
          tool.name.toLowerCase().includes(q) ||
          tool.description.toLowerCase().includes(q) ||
          tool.tagline.toLowerCase().includes(q) ||
          tool.category.toLowerCase().includes(q) ||
          tool.slug.toLowerCase().includes(q) ||
          (q.includes('video') && tool.category === 'Video Tools') ||
          (q.includes('image') && tool.category === 'Image Tools') ||
          (q.includes('youtube') && tool.category === 'YouTube Tools') ||
          (q.includes('story') && tool.id.includes('story')) ||
          (q.includes('caption') && tool.id.includes('caption')) ||
          (q.includes('prompt') && tool.name.toLowerCase().includes('prompt')) ||
          (q.includes('urdu') && tool.id.includes('urdu')) ||
          (q.includes('tag') && tool.id.includes('hashtag'))
        );
      });
    }

    return result;
  }, [selectedCategory, searchQuery]);

  return (
    <div className="w-full min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold mb-3 border border-indigo-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete AI Tool Suite</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Free AI Tools for Creators
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-2">
            Explore 12 specialized tools designed to generate prompts, captions, titles, stories, and social content.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="relative flex items-center bg-[#0d1322] border border-slate-700/80 rounded-2xl shadow-lg focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20 transition-all p-1.5">
            <Search className="w-5 h-5 text-indigo-400 shrink-0 ml-3 mr-2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search AI tools... (e.g. video, youtube, image, story, caption)"
              className="w-full bg-transparent text-white placeholder-slate-400 text-sm sm:text-base outline-none py-2 pr-3"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white mr-1"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Categories Bar - Mobile horizontal scrollable with subtle indicators */}
        <div className="mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold shrink-0 transition-all active:scale-95 touch-manipulation ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 border border-indigo-400/40'
                      : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tools Page Advertisement Area */}
        <AdBanner placement="tools-page" className="my-4" />

        {/* Results Info */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-6 px-1">
          <span>
            Showing <strong className="text-white">{filteredTools.length}</strong> of {TOOLS_DATA.length} tools
            {selectedCategory !== 'All Tools' && ` in ${selectedCategory}`}
          </span>
          {(selectedCategory !== 'All Tools' || searchQuery) && (
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All Tools');
                setSearchQuery('');
              }}
              className="text-indigo-400 hover:text-indigo-300 font-medium"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Tools Grid */}
        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} onSelect={onSelectTool} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center rounded-2xl bg-slate-900/40 border border-slate-800 p-8 max-w-lg mx-auto">
            <Search className="w-10 h-10 text-slate-500 mx-auto mb-3 opacity-60" />
            <h3 className="text-lg font-bold text-white mb-1">No AI tools matched your search</h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-5">
              Try searching for "video", "youtube", "image", "story" or reset your category filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All Tools');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold transition-all"
            >
              Show All 12 Tools
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
