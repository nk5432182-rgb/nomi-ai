import React from 'react';
import {
  Sparkles,
  ArrowRight,
  Zap,
  Smartphone,
  Copy,
  CheckCircle2,
  ShieldCheck,
  Flame,
  Video,
  Youtube,
  BookOpen,
  Languages,
  PenTool
} from 'lucide-react';
import { ToolDefinition } from '../types';
import { TOOLS_DATA } from '../data/toolsData';
import { ToolCard } from '../components/common/ToolCard';
import { AdBanner } from '../components/common/AdBanner';

interface HomePageProps {
  navigate: (path: string) => void;
  onSelectTool: (tool: ToolDefinition) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate, onSelectTool }) => {
  const popularTools = TOOLS_DATA.filter((t) => t.isPopular);

  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-16 sm:pt-16 sm:pb-24 border-b border-white/5 bg-glow-radial">
        {/* Ambient subtle glow background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[450px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
            <span>Smart AI Tools for Creators • 100% Free</span>
          </div>

          {/* Brand & Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
            Nomi<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-indigo-300"> AI</span>
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-200 mb-5 tracking-tight">
            "Smart AI Tools for Creators"
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-normal">
            Create powerful AI prompts, captions, stories, titles and creative content faster with Nomi AI.
            Built mobile-first for seamless one-handed creator workflows.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-md mx-auto">
            <button
              type="button"
              onClick={() => {
                navigate('/tools');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 active:scale-95 text-white font-semibold text-base shadow-lg shadow-indigo-600/30 transition-all duration-200"
            >
              <span>Explore Free Tools</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={() => {
                // Navigate directly to the first popular tool (Image Prompt Generator)
                navigate('/tools/image-prompt');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 active:scale-95 text-slate-200 hover:text-white border border-slate-700 font-semibold text-base transition-all duration-200"
            >
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>Start Creating</span>
            </button>
          </div>

          {/* Fast Feature Highlights */}
          <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-left">
            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <Zap className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <p className="text-xs font-bold text-white">Instant Results</p>
                <p className="text-[11px] text-slate-400">Under 2 seconds</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <Smartphone className="w-4 h-4 text-indigo-400 shrink-0" />
              <div>
                <p className="text-xs font-bold text-white">Mobile Optimized</p>
                <p className="text-[11px] text-slate-400">Made for Android</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <Copy className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <p className="text-xs font-bold text-white">1-Click Copy</p>
                <p className="text-[11px] text-slate-400">Direct to clipboard</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
              <div>
                <p className="text-xs font-bold text-white">100% Free</p>
                <p className="text-[11px] text-slate-400">No account required</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reserved Homepage Advertisement Area */}
      <AdBanner placement="homepage" />

      {/* Popular AI Tools Section */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400 text-xs font-semibold mb-2">
              <Flame className="w-3.5 h-3.5" />
              <span>Trending Worldwide</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Popular AI Tools
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Top creator-tested tools used by YouTubers, bloggers, and prompt engineers.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              navigate('/tools');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors shrink-0 group self-start sm:self-auto"
          >
            <span>View All 12 Tools</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Popular Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {popularTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} onSelect={onSelectTool} />
          ))}
        </div>
      </section>

      {/* Section: Why Nomi AI? */}
      <section className="py-14 sm:py-20 bg-slate-900/40 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Why Nomi AI?
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2">
              We built Nomi AI with one purpose: helping creators go from idea to finished prompt in seconds without friction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* 1. Easy to use */}
            <div className="p-5 rounded-2xl bg-[#0c1220] border border-slate-800/90 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-3.5">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">Easy to Use</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Simple, straightforward input forms with smart defaults and instant presets. No complicated prompting syntax to memorize.
              </p>
            </div>

            {/* 2. Mobile friendly */}
            <div className="p-5 rounded-2xl bg-[#0c1220] border border-slate-800/90 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center mb-3.5">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">Mobile Friendly</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Architected primarily for Android mobile screens. Zero horizontal scrolling, huge touch targets, and effortless one-hand control.
              </p>
            </div>

            {/* 3. Free creator tools */}
            <div className="p-5 rounded-2xl bg-[#0c1220] border border-slate-800/90 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3.5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">Free Creator Tools</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                No credit cards, no subscriptions, and no paywalls. Every single tool is completely free for your creative projects.
              </p>
            </div>

            {/* 4. Fast results */}
            <div className="p-5 rounded-2xl bg-[#0c1220] border border-slate-800/90 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3.5">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">Fast Results</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Generates production-grade prompts and copy in seconds with blazing speed and server-side acceleration.
              </p>
            </div>

            {/* 5. Copy results instantly */}
            <div className="p-5 rounded-2xl bg-[#0c1220] border border-slate-800/90 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-3.5">
                <Copy className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">Copy Results Instantly</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Dedicated one-tap copy button on every output with clear "Copied!" confirmation and haptic feedback.
              </p>
            </div>

            {/* 6. No complicated setup */}
            <div className="p-5 rounded-2xl bg-[#0c1220] border border-slate-800/90 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center mb-3.5">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">No Complicated Setup</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Open the website and start creating immediately. No registration forms, password resets, or API key configuration needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Create Better Content With AI */}
      <section className="py-14 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Create Better Content With AI
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            See how Nomi AI helps modern creators save 10+ hours every week across video, writing, visual art, and social media.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: YouTubers */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#11192e] to-[#0c1220] border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center mb-4">
              <Youtube className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">For YouTubers & Streamers</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
              Stop guessing video titles. Generate high-CTR titles split by Catchy, SEO-rich, and Curiosity hooks, plus complete descriptions with timestamps and hashtags.
            </p>
            <button
              type="button"
              onClick={() => {
                navigate('/tools/youtube-title');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1"
            >
              <span>Try YouTube Title Generator</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2: AI Artists & Filmmakers */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#11192e] to-[#0c1220] border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4">
              <Video className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">For AI Filmmakers & Artists</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
              Craft multi-parameter prompts for Midjourney, FLUX, Sora, Runway, and Luma. Keep your character consistent across scenes with precise wardrobe and face anchors.
            </p>
            <button
              type="button"
              onClick={() => {
                navigate('/tools/video-prompt');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1"
            >
              <span>Try AI Video Prompt Generator</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 3: Bloggers & Urdu Creators */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#11192e] to-[#0c1220] border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
              <Languages className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">For Multilingual & Urdu Creators</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
              Write your ideas freely in Urdu or Roman Urdu. Nomi AI transforms your cultural concept into world-class cinematic English prompts without losing your story.
            </p>
            <button
              type="button"
              onClick={() => {
                navigate('/tools/urdu-to-english');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1"
            >
              <span>Try Urdu to English Prompt</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-indigo-950/30 via-slate-900/50 to-[#080c14] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600/30 border border-indigo-500/40 text-indigo-400 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-indigo-600/20">
            <Sparkles className="w-6 h-6" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Start Creating For Free
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
            Join thousands of creators using Nomi AI every day to generate stunning prompts, catchy titles, and viral captions.
          </p>

          <button
            type="button"
            onClick={() => {
              navigate('/tools');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 active:scale-95 text-white font-bold text-base shadow-xl shadow-indigo-600/30 transition-all duration-200"
          >
            <span>Start Creating For Free</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};
