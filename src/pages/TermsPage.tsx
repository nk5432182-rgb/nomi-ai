import React from 'react';
import { FileText, CheckCircle2 } from 'lucide-react';

interface TermsPageProps {
  navigate: (path: string) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ navigate }) => {
  return (
    <div className="w-full min-h-screen py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold mb-3 border border-indigo-500/20">
            <FileText className="w-3.5 h-3.5" />
            <span>Usage Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Last Updated: January 2026 • Editable template for website owner
          </p>
        </div>

        {/* Content Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0e1424] border border-slate-800 text-slate-300 text-xs sm:text-sm leading-relaxed space-y-6">
          <section>
            <h2 className="text-base sm:text-lg font-bold text-white mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using Nomi AI ("the website", "service"), you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service. If you do not agree to these terms, please discontinue use of the website.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-white mb-2">
              2. Use of Services & Free Access
            </h2>
            <p>
              Nomi AI provides free tools for prompt engineering, copywriting, and creative ideation. You agree to use the service in compliance with all applicable local, national, and international laws. You agree not to use the tools to generate harmful, illegal, defamatory, or abusive material.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>3. Commercial Ownership of Output</span>
            </h2>
            <p>
              To the fullest extent permitted by applicable law, you own the creative outputs, prompts, titles, captions, and texts generated through your use of Nomi AI. You are free to publish, monetize, commercialize, or adapt this content for personal or commercial projects without royalty fees or attribution.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-white mb-2">
              4. Disclaimer of Warranties
            </h2>
            <p>
              The service and generated materials are provided on an "as is" and "as available" basis without warranties of any kind. While we strive to provide high-quality and reliable outputs, we do not guarantee that the generated prompts will always meet your specific aesthetic requirements in external third-party software.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-white mb-2">
              5. Limitation of Liability
            </h2>
            <p>
              In no event shall Nomi AI, its developers, or affiliates be liable for any direct, indirect, incidental, or consequential damages resulting from your use or inability to use the platform.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-white mb-2">
              6. Modifications to Service
            </h2>
            <p>
              We reserve the right to improve, update, or temporarily modify aspects of the tools to enhance speed and reliability without prior notice.
            </p>
          </section>

          <section className="pt-4 border-t border-slate-800">
            <h2 className="text-base sm:text-lg font-bold text-white mb-2">
              7. Inquiries
            </h2>
            <p>
              For any questions regarding these terms, please visit our{' '}
              <button
                type="button"
                onClick={() => navigate('/contact')}
                className="text-indigo-400 hover:text-indigo-300 underline font-medium"
              >
                Contact Page
              </button>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
