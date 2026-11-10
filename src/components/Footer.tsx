"use client";

import { portfolioData } from "@/data/portfolio";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const { profile } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-stroke py-12 px-6 sm:px-10 bg-canvas text-xs text-muted">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Brand & Tagline */}
        <div className="space-y-1.5">
          <div className="flex items-center space-x-3">
            <span className="font-serif text-lg sm:text-xl text-charcoal font-medium">
              MUZAIN SHEHZADE V M
            </span>
            <span className="text-copper">•</span>
            <span className="text-[11px] font-mono uppercase tracking-wider text-muted hidden sm:inline">
              Minimal Black Portfolio
            </span>
          </div>
          <p className="text-[11px] font-mono text-muted/70">
            First-year B.Tech CS (AI) • Inaugural Batch • Thejus Engineering College, Thrissur, Kerala
          </p>
        </div>

        {/* Right Nav Links & Back to Top */}
        <div className="flex flex-wrap items-center gap-6 sm:gap-8 font-mono text-[11px] uppercase tracking-wider">
          <a
            href={`mailto:${profile.contact.email}`}
            className="hover:text-charcoal transition-colors"
            data-cursor="pointer"
          >
            Email
          </a>
          <a
            href={profile.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-charcoal transition-colors"
            data-cursor="pointer"
          >
            GitHub
          </a>
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-charcoal transition-colors"
            data-cursor="pointer"
          >
            LinkedIn
          </a>
          <a
            href={profile.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-charcoal transition-colors"
            data-cursor="pointer"
          >
            Instagram
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-surface hover:bg-surface-elevated border border-stroke text-muted hover:text-copper transition-colors flex items-center justify-center ml-2"
            title="Return to peak"
            aria-label="Back to top"
            data-cursor="pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-stroke/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-muted/60">
        <p>© {new Date().getFullYear()} Muzain Shehzade V M. Noir &amp; Lumen Design System.</p>
        <p>Built with Next.js, TypeScript, Tailwind CSS &amp; Framer Motion.</p>
      </div>
    </footer>
  );
}

