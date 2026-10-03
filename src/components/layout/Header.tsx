import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Search, ChevronRight, Zap } from 'lucide-react';
import { CATEGORIES } from '../../data/toolsData';

interface HeaderProps {
  currentPath: string;
  navigate: (path: string) => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, navigate, onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'AI Tools', path: '/tools' },
    { label: 'About', path: '/about' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleNav = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          scrolled
            ? 'bg-[#090d16]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30 py-2.5'
            : 'bg-[#090d16]/80 backdrop-blur-sm border-b border-white/5 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand */}
          <button
            type="button"
            onClick={() => handleNav('/')}
            className="flex items-center gap-3 text-left group focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-xl p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-sky-400 p-[1.5px] shadow-lg shadow-indigo-600/25 group-hover:shadow-indigo-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[#0d1322] rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-indigo-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-indigo-200 transition-colors">
                  Nomi<span className="text-indigo-400"> AI</span>
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                  FREE
                </span>
              </div>
              <p className="text-[11px] text-slate-400 leading-tight hidden xs:block">
                Smart AI Tools for Creators
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive =
                item.path === '/'
                  ? currentPath === '/'
                  : currentPath.startsWith(item.path);

              return (
                <button
                  key={item.path}
                  type="button"
                  onClick={() => handleNav(item.path)}
                  className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 shadow-inner'
                      : 'text-slate-300 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Header Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger */}
            <button
              type="button"
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/90 border border-slate-700/80 text-slate-300 hover:text-white hover:border-slate-600 transition-all text-xs sm:text-sm active:scale-95"
              aria-label="Search AI tools"
            >
              <Search className="w-4 h-4 text-indigo-400" />
              <span className="hidden sm:inline text-slate-400">Search tools...</span>
              <kbd className="hidden sm:inline px-1.5 py-0.5 text-[10px] font-mono bg-slate-800 text-slate-400 rounded border border-slate-700">
                /
              </kbd>
            </button>

            {/* Quick Create CTA (Desktop) */}
            <button
              type="button"
              onClick={() => handleNav('/tools')}
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 text-white text-sm font-semibold shadow-md shadow-indigo-900/30 active:scale-95 transition-all"
            >
              <Zap className="w-4 h-4" />
              <span>Explore Tools</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col justify-start">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative w-full max-w-sm ml-auto bg-[#0d1322] border-l border-white/10 shadow-2xl h-full flex flex-col overflow-y-auto">
            {/* Drawer Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="font-bold text-white text-base">Nomi AI</span>
                  <p className="text-[10px] text-slate-400">Smart AI Tools</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Links */}
            <div className="p-4 space-y-1">
              <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-3 mb-2">
                Navigation
              </p>
              {navItems.map((item) => {
                const isActive =
                  item.path === '/'
                    ? currentPath === '/'
                    : currentPath.startsWith(item.path);

                return (
                  <button
                    key={item.path}
                    type="button"
                    onClick={() => handleNav(item.path)}
                    className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-indigo-600 text-white font-semibold'
                        : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 opacity-70" />
                  </button>
                );
              })}
            </div>

            {/* Quick Category Jump */}
            <div className="p-4 border-t border-white/10 mt-auto">
              <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-1 mb-2">
                Popular Categories
              </p>
              <div className="grid grid-cols-2 gap-2">
                {CATEGORIES.slice(1, 5).map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => {
                      handleNav(`/tools?cat=${encodeURIComponent(cat)}`);
                    }}
                    className="p-2 text-xs text-left bg-slate-900/80 hover:bg-indigo-950/60 border border-slate-800 rounded-lg text-slate-300 truncate"
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-center">
                <span className="text-[11px] text-slate-400">
                  100% Free • No Sign-up Required
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
