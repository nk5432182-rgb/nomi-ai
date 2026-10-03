import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles, ArrowRight } from 'lucide-react';

interface FaqPageProps {
  navigate: (path: string) => void;
}

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const FaqPage: React.FC<FaqPageProps> = ({ navigate }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'What is Nomi AI?',
      answer:
        'Nomi AI is a creator-focused AI tools website designed to help creators, YouTubers, bloggers, social media managers, and filmmakers generate prompts, content ideas, captions, stories, titles, and creative assets faster. It runs smoothly on mobile phones, tablets, and desktop browsers.',
      category: 'General',
    },
    {
      question: 'Are the tools really free to use?',
      answer:
        'Yes! All 12 tools on Nomi AI are 100% free to use. There are no hidden fees, recurring subscriptions, credit card requirements, or paywalls.',
      category: 'Pricing',
    },
    {
      question: 'Do I need to create an account or sign in?',
      answer:
        'No. You do not need to sign up, provide an email address, or remember passwords. Simply open any tool in your browser and start generating immediately.',
      category: 'Access',
    },
    {
      question: 'Can I use the generated content commercially?',
      answer:
        'Yes! All generated prompts, titles, captions, scripts, and stories are 100% yours to use commercially in your YouTube videos, social media channels, client projects, books, blogs, and brand campaigns without attribution required.',
      category: 'Licensing',
    },
    {
      question: 'Does Nomi AI store or track my prompts?',
      answer:
        'No. Your prompts and generated text are processed ephemerally during your session and are not stored in any permanent personal database. Your creative ideas and confidential concepts remain entirely private to you.',
      category: 'Privacy',
    },
    {
      question: 'How do I use the AI tools?',
      answer:
        'Using any tool takes just three simple steps: 1) Select a tool from the directory or search bar. 2) Fill in your concept or click "Load Example" for an instant preset. 3) Click "Generate with AI" and tap the "Copy" button to paste your result into Midjourney, Sora, YouTube Studio, or your social media app!',
      category: 'Usage',
    },
    {
      question: 'Does Nomi AI work on Android phones and tablets?',
      answer:
        'Yes, Nomi AI was architected mobile-first specifically for Android mobile devices, iPhones, and tablets. It features thumb-friendly buttons, clear inputs, fast load times, and zero horizontal scrolling.',
      category: 'Mobile',
    },
    {
      question: 'Can I convert Urdu or Roman Urdu into AI prompts?',
      answer:
        'Yes! Our "Urdu / Roman Urdu to English Prompt" tool specifically allows you to type your concepts in Urdu script (اردو) or Roman Urdu phrasing. Nomi AI translates and enriches the description with professional cinematography and rendering terminology without altering your original story.',
      category: 'Tools',
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full min-h-screen py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold mb-3 border border-indigo-500/20">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-sm text-slate-300 mt-2">
            Clear, honest answers about Nomi AI tools, features, privacy, and commercial use.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-800 bg-[#0e1424] overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-white hover:text-indigo-200 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg bg-slate-800/80 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-indigo-600/30 text-indigo-400' : 'text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3 animate-in fade-in-0 duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 text-center">
          <h3 className="text-lg font-bold text-white mb-2">Still have questions?</h3>
          <p className="text-xs sm:text-sm text-slate-300 mb-4">
            Our creator support team is always eager to help. Reach out directly anytime.
          </p>
          <button
            type="button"
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-indigo-600/30"
          >
            <span>Contact Support</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
