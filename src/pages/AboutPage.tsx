import React from 'react';
import { Sparkles, Target, Zap, Shield, Smartphone, Heart, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  navigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigate }) => {
  return (
    <div className="w-full min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Badge */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold mb-3 border border-indigo-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Nomi AI</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Empowering Modern Creators With AI
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Nomi AI is a creator-focused AI tools platform designed to help creators generate prompts, content ideas, captions, stories, titles and other creative material faster.
          </p>
        </div>

        {/* Mission Statement Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-[#0e1424] border border-indigo-500/30 mb-10 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white">
              <Target className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-white">Our Mission</h2>
          </div>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
            Content creation shouldn't require battling complicated AI syntax, dealing with expensive paywalls, or wasting hours on repetitive copywriting. Our mission is to democratize high-grade AI creative power for every YouTuber, TikToker, blogger, indie hacker, and visual artist worldwide—completely free, right from their phone.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          <div className="p-5 rounded-2xl bg-[#0d1322] border border-slate-800">
            <div className="w-9 h-9 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-3">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-1.5">Mobile-First Android Engineering</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Most creators manage their channels, reels, and stories on their smartphones. Nomi AI is engineered specifically for fast thumb-reach, fluid transitions, and zero horizontal scrolling on mobile displays.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0d1322] border border-slate-800">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-1.5">Free-First & Privacy Conscious</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              You do not need to enter a credit card or create an account to start generating. Your creative inputs and prompts remain in your session, completely unmonitored.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0d1322] border border-slate-800">
            <div className="w-9 h-9 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center mb-3">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-1.5">Instant 1-Tap Copying</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Every tool comes equipped with clipboard copy helpers, formatted outputs, and fast regeneration capabilities to keep your production velocity high.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0d1322] border border-slate-800">
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-1.5">Multilingual Creativity</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              From English to Urdu and Roman Urdu, Nomi AI respects cultural context and linguistic nuances so your authentic story is never lost in translation.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-8 border-t border-slate-800">
          <h3 className="text-xl font-bold text-white mb-3">Ready to create your next viral piece?</h3>
          <button
            type="button"
            onClick={() => navigate('/tools')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-600/30"
          >
            <span>Explore All AI Tools</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
