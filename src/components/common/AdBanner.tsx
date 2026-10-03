import React from 'react';

interface AdBannerProps {
  placement: 'homepage' | 'tools-page' | 'tool-result';
  className?: string;
}

export const AdBanner: React.FC<AdBannerProps> = ({ placement, className = '' }) => {
  const titles = {
    homepage: 'Featured Creator Spotlight & Partner Space',
    'tools-page': 'Recommended Tools & Creator Community',
    'tool-result': 'Sponsored Creator Resources',
  };

  return (
    <div
      className={`w-full max-w-5xl mx-auto my-6 px-4 ${className}`}
      aria-label="Advertisement / Partner Area"
    >
      <div className="relative overflow-hidden rounded-2xl border border-dashed border-slate-800/90 bg-gradient-to-r from-slate-900/60 via-indigo-950/20 to-slate-900/60 p-4 sm:p-5 text-center transition-all">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 text-left">
            <span className="px-2 py-0.5 text-[10px] font-mono tracking-wider uppercase font-semibold text-slate-400 bg-slate-800/80 rounded border border-slate-700/60">
              Ad Space
            </span>
            <span className="text-xs sm:text-sm text-slate-300 font-medium">
              {titles[placement]}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] text-slate-400 hidden md:inline">
              Reserved for future creator sponsorship & non-intrusive ads
            </span>
            <div className="px-3 py-1 text-xs text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-lg">
              100% Free Experience
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
