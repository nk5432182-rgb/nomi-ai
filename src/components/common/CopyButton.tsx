import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyButtonProps {
  text: string;
  label?: string;
  copiedLabel?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'pill';
  size?: 'sm' | 'md' | 'lg';
}

export const CopyButton: React.FC<CopyButtonProps> = ({
  text,
  label = 'Copy',
  copiedLabel = 'Copied!',
  className = '',
  variant = 'secondary',
  size = 'md',
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!text) return;

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for older browsers or restricted environments
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }

      // Android haptic feedback if supported
      if (typeof window !== 'undefined' && 'vibrate' in navigator) {
        try {
          navigator.vibrate(35);
        } catch {
          // ignore
        }
      }

      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  const sizeClasses = {
    sm: 'px-2.5 py-1 text-xs gap-1.5 min-h-[34px]',
    md: 'px-3.5 py-2 text-sm gap-2 min-h-[42px]',
    lg: 'px-4.5 py-2.5 text-base gap-2.5 min-h-[48px]',
  }[size];

  const variantClasses = {
    primary: copied
      ? 'bg-emerald-600 text-white border-emerald-500 shadow-md shadow-emerald-900/30'
      : 'bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white border-indigo-500 shadow-md shadow-indigo-900/30',
    secondary: copied
      ? 'bg-emerald-950/80 text-emerald-300 border-emerald-600/60 shadow-sm'
      : 'bg-slate-800/90 hover:bg-slate-700 active:bg-slate-800 text-slate-200 hover:text-white border-slate-700/80',
    ghost: copied
      ? 'bg-emerald-950/60 text-emerald-300 border-emerald-700/50'
      : 'bg-transparent hover:bg-white/5 text-slate-300 hover:text-white border-transparent',
    pill: copied
      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 rounded-full'
      : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border-white/10 rounded-full',
  }[variant];

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline-flex items-center justify-center font-medium rounded-xl border transition-all duration-150 select-none active:scale-[0.97] touch-manipulation ${sizeClasses} ${variantClasses} ${className}`}
      title={copied ? 'Copied to clipboard' : 'Copy to clipboard'}
      aria-label={copied ? 'Copied to clipboard' : 'Copy to clipboard'}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 text-emerald-400 shrink-0 stroke-[2.5]" />
          <span className="font-semibold text-emerald-300">{copiedLabel}</span>
        </>
      ) : (
        <>
          <Copy className="w-4 h-4 shrink-0 opacity-80" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
};
