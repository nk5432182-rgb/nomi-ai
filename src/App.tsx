/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TOOLS_DATA } from './data/toolsData';
import { ToolDefinition } from './types';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MobileBottomNav } from './components/layout/MobileBottomNav';
import { SearchModal } from './components/common/SearchModal';
import { HomePage } from './pages/HomePage';
import { ToolsPage } from './pages/ToolsPage';
import { ToolDetailPage } from './pages/ToolDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Sync route on popstate (browser back/forward)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path.split('?')[0]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Keyboard shortcut for search (/ or Ctrl/Cmd + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      } else if (e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Sync document title and meta for SEO
  useEffect(() => {
    let title = 'Nomi AI - Free AI Tools for Creators';
    let desc = 'Free AI tools for creators. Generate AI prompts, video prompts, YouTube titles, captions, stories and more with Nomi AI.';

    if (currentPath === '/tools') {
      title = 'AI Tools Directory - Nomi AI';
      desc = 'Browse 12 free AI tools for YouTube, prompts, video generation, captions, and blogging.';
    } else if (currentPath.startsWith('/tools/')) {
      const slug = currentPath.replace('/tools/', '');
      const tool = TOOLS_DATA.find((t) => t.slug === slug);
      if (tool) {
        title = `${tool.name} - Free AI Tool | Nomi AI`;
        desc = `${tool.description} Free, fast, mobile-friendly creator tool.`;
      }
    } else if (currentPath === '/about') {
      title = 'About Nomi AI - Smart AI Tools for Creators';
      desc = 'Learn about Nomi AI mission to provide free creator tools for prompt engineering, video creation, and storytelling.';
    } else if (currentPath === '/contact') {
      title = 'Contact Support - Nomi AI';
      desc = 'Get in touch with Nomi AI team for feedback, suggestions, or tool requests.';
    } else if (currentPath === '/faq') {
      title = 'Frequently Asked Questions - Nomi AI';
      desc = 'Everything you need to know about Nomi AI free creator tools, privacy, and commercial use.';
    } else if (currentPath === '/privacy') {
      title = 'Privacy Policy - Nomi AI';
      desc = 'Nomi AI privacy policy and commitment to creator data privacy.';
    } else if (currentPath === '/terms') {
      title = 'Terms of Service - Nomi AI';
      desc = 'Nomi AI terms of service and commercial ownership policy for creators.';
    }

    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', desc);
  }, [currentPath]);

  // Route resolver
  const renderCurrentPage = () => {
    // Tool Detail Page: /tools/:slug
    if (currentPath.startsWith('/tools/')) {
      const slug = currentPath.replace('/tools/', '');
      const tool = TOOLS_DATA.find((t) => t.slug === slug);
      if (tool) {
        return <ToolDetailPage tool={tool} navigate={navigate} />;
      }
      // If tool slug not found, redirect to tools directory
      return <ToolsPage navigate={navigate} onSelectTool={(t) => navigate(`/tools/${t.slug}`)} />;
    }

    // Tools Directory: /tools
    if (currentPath === '/tools') {
      const searchParams = new URLSearchParams(window.location.search);
      const categoryParam = searchParams.get('cat') || 'All Tools';
      return (
        <ToolsPage
          navigate={navigate}
          onSelectTool={(tool) => navigate(`/tools/${tool.slug}`)}
          initialCategory={categoryParam}
        />
      );
    }

    // About Page: /about
    if (currentPath === '/about') {
      return <AboutPage navigate={navigate} />;
    }

    // Contact Page: /contact
    if (currentPath === '/contact') {
      return <ContactPage navigate={navigate} />;
    }

    // FAQ Page: /faq
    if (currentPath === '/faq') {
      return <FaqPage navigate={navigate} />;
    }

    // Privacy Policy: /privacy
    if (currentPath === '/privacy') {
      return <PrivacyPolicyPage navigate={navigate} />;
    }

    // Terms: /terms
    if (currentPath === '/terms') {
      return <TermsPage navigate={navigate} />;
    }

    // Default: Home Page /
    return (
      <HomePage
        navigate={navigate}
        onSelectTool={(tool) => navigate(`/tools/${tool.slug}`)}
      />
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#080c14] text-slate-100 overflow-x-hidden">
      {/* Top Header */}
      <Header
        currentPath={currentPath}
        navigate={navigate}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content View */}
      <main className="flex-1 w-full pb-14 md:pb-0">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer navigate={navigate} />

      {/* Mobile Android Bottom Navigation */}
      <MobileBottomNav
        currentPath={currentPath}
        navigate={navigate}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Global Tool Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        navigate={navigate}
      />
    </div>
  );
}
