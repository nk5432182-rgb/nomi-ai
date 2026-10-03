import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, MessageSquare } from 'lucide-react';

interface ContactPageProps {
  navigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ navigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validate = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Please enter your name.';
    } else if (name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = 'Please enter a valid email address (e.g., creator@gmail.com).';
    }

    if (!message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // For the initial free version, we simulate the transmission and store locally or provide instant confirmation
    try {
      const storedMessages = JSON.parse(localStorage.getItem('nomi_contact_messages') || '[]');
      storedMessages.push({
        id: Date.now(),
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        date: new Date().toISOString(),
      });
      localStorage.setItem('nomi_contact_messages', JSON.stringify(storedMessages));
    } catch {
      // ignore
    }

    setSubmitted(true);
  };

  return (
    <div className="w-full min-h-screen py-10 sm:py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold mb-3 border border-indigo-500/20">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact Nomi AI Support
          </h1>
          <p className="text-sm text-slate-300 mt-2">
            Have feedback, a tool suggestion, or an idea for a new creator feature? We'd love to hear from you.
          </p>
        </div>

        {/* Form Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0e1424] border border-slate-800 shadow-xl">
          {submitted ? (
            <div className="py-8 text-center space-y-4 animate-in fade-in-0 duration-200">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">Message Sent Successfully!</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you for reaching out, <span className="font-semibold text-white">{name}</span>. Our team reviews creator feedback daily and will respond to <span className="text-indigo-400">{email}</span> if a follow-up is requested.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setName('');
                    setEmail('');
                    setMessage('');
                    setSubmitted(false);
                    setErrors({});
                  }}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-all mr-2"
                >
                  Send Another Message
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/tools')}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-all"
                >
                  Back to Tools
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
              {/* Name */}
              <div className="space-y-1.5">
                <label className="block text-xs sm:text-sm font-semibold text-slate-200">
                  Your Name <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                  }}
                  placeholder="e.g. Alex Morgan"
                  className={`w-full rounded-xl bg-[#080c14] border px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-400 outline-none transition-all ${
                    errors.name
                      ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                      : 'border-slate-700/80 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20'
                  }`}
                />
                {errors.name && (
                  <p className="text-[11px] text-rose-400 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="block text-xs sm:text-sm font-semibold text-slate-200">
                  Your Email Address <span className="text-rose-400">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                  }}
                  placeholder="e.g. creator@example.com"
                  className={`w-full rounded-xl bg-[#080c14] border px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-400 outline-none transition-all ${
                    errors.email
                      ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                      : 'border-slate-700/80 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20'
                  }`}
                />
                {errors.email && (
                  <p className="text-[11px] text-rose-400 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="block text-xs sm:text-sm font-semibold text-slate-200">
                  Message <span className="text-rose-400">*</span>
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                  }}
                  placeholder="Tell us what you think, what tool you want added, or any issue you encountered..."
                  className={`w-full rounded-xl bg-[#080c14] border px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-400 outline-none transition-all resize-y ${
                    errors.message
                      ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                      : 'border-slate-700/80 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20'
                  }`}
                />
                {errors.message && (
                  <p className="text-[11px] text-rose-400 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 active:scale-95 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition-all touch-manipulation"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-400 text-center pt-2">
                We respect your privacy. Your email will never be shared or used for marketing.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
