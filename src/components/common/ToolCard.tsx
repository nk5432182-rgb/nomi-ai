import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ToolDefinition } from '../../types';
import { IconHelper } from './IconHelper';

interface ToolCardProps {
  tool: ToolDefinition;
  onSelect: (tool: ToolDefinition) => void;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(tool)}
      className="group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-[#0e1424]/90 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-[#11192e] hover:shadow-xl hover:shadow-indigo-950/30 cursor-pointer"
    >
      {/* Popular badge */}
      {tool.isPopular && (
        <div className="absolute top-3.5 right-3.5 flex items-center gap-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 px-2 py-0.5 text-[10px] font-semibold text-indigo-300">
          <Sparkles className="w-3 h-3 text-indigo-400" />
          <span>Popular</span>
        </div>
      )}

      <div>
        {/* Icon & Category */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-950/80 to-slate-900 border border-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-indigo-400/40 transition-all duration-300 shadow-sm">
            <IconHelper name={tool.iconName} className="w-6 h-6 stroke-[1.8]" />
          </div>
          <div>
            <span className="text-[11px] font-medium tracking-wide uppercase text-indigo-400/90 font-mono">
              {tool.category}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-indigo-200 transition-colors tracking-tight line-clamp-1">
          {tool.name}
        </h3>

        {/* Description */}
        <p className="mt-2 text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
          {tool.description}
        </p>
      </div>

      {/* Action Footer */}
      <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between">
        <span className="text-[11px] text-slate-400 group-hover:text-slate-400 transition-colors">
          Free Creator Tool
        </span>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(tool);
          }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-600/20 hover:bg-indigo-600 active:bg-indigo-700 text-indigo-300 hover:text-white border border-indigo-500/30 hover:border-indigo-500 text-xs font-semibold transition-all group-hover:bg-indigo-600 group-hover:text-white"
        >
          <span>Use Tool</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};
