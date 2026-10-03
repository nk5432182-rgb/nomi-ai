import React from 'react';
import { Home, Grid, Search, HelpCircle } from 'lucide-react';

interface MobileBottomNavProps {
  currentPath: string;
  navigate: (path: string) => void;
  onOpenSearch: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentPath,
  navigate,
  onOpenSearch,
}) => {
  const isHome = currentPath === '/';
  const isTools = currentPath.startsWith('/tools');
  const isFaq = currentPath === '/faq';

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#090d16]/95 backdrop-blur-xl border-t border-white/10 px-2 py-1.5 shadow-2xl safe-area-pb"
      aria-label="Mobile Bottom Navigation"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {/* Home */}
        <button
          type="button"
          onClick={() => {
            navigate('/');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
            isHome
              ? 'text-indigo-400 font-semibold scale-105'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Home className="w-5 h-5 mb-0.5 stroke-[2.2]" />
          <span className="text-[11px]">Home</span>
        </button>

        {/* AI Tools */}
        <button
          type="button"
          onClick={() => {
            navigate('/tools');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
            isTools
              ? 'text-indigo-400 font-semibold scale-105'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Grid className="w-5 h-5 mb-0.5 stroke-[2.2]" />
          <span className="text-[11px]">Tools</span>
        </button>

        {/* Search */}
        <button
          type="button"
          onClick={onOpenSearch}
          className="flex flex-col items-center justify-center py-1 px-3 rounded-xl text-slate-400 hover:text-slate-200 active:scale-95 transition-all"
        >
          <div className="w-7 h-7 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-0.5">
            <Search className="w-4 h-4 stroke-[2.2]" />
          </div>
          <span className="text-[11px] text-slate-300">Search</span>
        </button>

        {/* FAQ */}
        <button
          type="button"
          onClick={() => {
            navigate('/faq');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
            isFaq
              ? 'text-indigo-400 font-semibold scale-105'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <HelpCircle className="w-5 h-5 mb-0.5 stroke-[2.2]" />
          <span className="text-[11px]">FAQ</span>
        </button>
      </div>
    </nav>
  );
};
