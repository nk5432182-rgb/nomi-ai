import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { TOOLS_DATA } from '../../data/toolsData';

interface FooterProps {
  navigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  const handleNav = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#070a12] border-t border-white/5 pt-12 pb-24 md:pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 pb-10 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-3">
            <button
              type="button"
              onClick={() => handleNav('/')}
              className="flex items-center gap-2.5 text-left group"
            >
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-600/30">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                Nomi<span className="text-indigo-400"> AI</span>
              </span>
            </button>
            <p className="text-sm font-medium text-slate-300">
              "Smart AI Tools for Creators"
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Free AI-powered tools for creators, YouTubers, bloggers and social media users. Create prompts, scripts, titles and viral content faster.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                ● 100% Free Forever
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3.5">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('/')}
                  className="hover:text-indigo-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('/tools')}
                  className="hover:text-indigo-400 transition-colors"
                >
                  AI Tools Directory
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('/about')}
                  className="hover:text-indigo-400 transition-colors"
                >
                  About Nomi AI
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('/faq')}
                  className="hover:text-indigo-400 transition-colors"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('/contact')}
                  className="hover:text-indigo-400 transition-colors"
                >
                  Contact & Support
                </button>
              </li>
            </ul>
          </div>

          {/* Popular Tools */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3.5">
              Popular Tools
            </h4>
            <ul className="space-y-2 text-sm">
              {TOOLS_DATA.filter((t) => t.isPopular)
                .slice(0, 5)
                .map((tool) => (
                  <li key={tool.id}>
                    <button
                      type="button"
                      onClick={() => handleNav(`/tools/${tool.slug}`)}
                      className="hover:text-indigo-400 transition-colors text-left truncate max-w-full block"
                    >
                      {tool.name}
                    </button>
                  </li>
                ))}
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3.5">
              Legal & Policy
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('/privacy')}
                  className="hover:text-indigo-400 transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('/terms')}
                  className="hover:text-indigo-400 transition-colors"
                >
                  Terms of Service
                </button>
              </li>
              <li className="pt-2 text-xs text-slate-400 leading-normal">
                Designed for high performance on Android mobile, iOS, tablet and desktop screens.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Nomi AI. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Built for creators worldwide with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>& AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
