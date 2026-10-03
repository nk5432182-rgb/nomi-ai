import React from 'react';
import { Shield, Lock, Eye, Database } from 'lucide-react';

interface PrivacyPolicyPageProps {
  navigate: (path: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ navigate }) => {
  return (
    <div className="w-full min-h-screen py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold mb-3 border border-indigo-500/20">
            <Shield className="w-3.5 h-3.5" />
            <span>Transparency & Trust</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Last Updated: January 2026 • Editable template for website owner
          </p>
        </div>

        {/* Content Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0e1424] border border-slate-800 text-slate-300 text-xs sm:text-sm leading-relaxed space-y-6">
          <section>
            <h2 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Eye className="w-4 h-4 text-indigo-400" />
              <span>1. Overview</span>
            </h2>
            <p>
              Welcome to <strong>Nomi AI</strong> ("we", "our", or "the platform"). We value the privacy of our visitors and creators. This Privacy Policy outlines what information is collected, how it is used, and how your privacy is protected when using our web application.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Database className="w-4 h-4 text-indigo-400" />
              <span>2. Information We Do NOT Collect</span>
            </h2>
            <p>
              Nomi AI is built with a <strong>Free-First, Privacy-Conscious</strong> philosophy. We do not require you to create an account, register your phone number, or input payment credentials. You may use our AI generation tools anonymously.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Lock className="w-4 h-4 text-indigo-400" />
              <span>3. Prompt Data & Creative Input Handling</span>
            </h2>
            <p>
              When you submit ideas, parameters, or text to any Nomi AI tool, this information is processed strictly for the purpose of generating your requested output. We do not sell, rent, or trade your creative text or personal ideas to third-party data brokers.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-white mb-2">
              4. Cookies and Local Device Storage
            </h2>
            <p>
              We may utilize local browser storage (such as localStorage) solely to store non-sensitive preferences (e.g., your recent prompt session or theme settings) on your own device. You can clear this data at any time via your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-white mb-2">
              5. Third-Party Services & Links
            </h2>
            <p>
              Our website may contain links to external creator platforms (such as YouTube, TikTok, Instagram, Midjourney, etc.). We do not control and are not responsible for the privacy practices or terms of external websites.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-white mb-2">
              6. Policy Updates
            </h2>
            <p>
              We may update this Privacy Policy periodically to reflect improvements in our tools or regulatory standards. The updated date will always be visible at the top of this document.
            </p>
          </section>

          <section className="pt-4 border-t border-slate-800">
            <h2 className="text-base sm:text-lg font-bold text-white mb-2">
              7. Contact Us
            </h2>
            <p>
              If you have any questions or feedback regarding this Privacy Policy, please contact us via our{' '}
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
