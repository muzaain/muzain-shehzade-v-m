"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ArrowUpRight, Menu, X, Gamepad2 } from "lucide-react";
import { sound } from "@/utils/sound";

export function Navbar({ onOpenArcade }: { onOpenArcade?: () => void }) {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 40);

      // Hide when scrolling down past 150px, show when scrolling up
      if (currentScrollY > 150 && currentScrollY > lastScrollY) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "QUESTS", href: "#work", number: "01" },
    { label: "CODEX", href: "#about", number: "02" },
    { label: "SKILLS", href: "#skills", number: "03" },
    { label: "DISPATCH", href: "#contact", number: "04" },
  ];

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
          scrolled
            ? "bg-canvas/85 backdrop-blur-md border-b border-stroke py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
            : "bg-transparent py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            onMouseEnter={() => sound.playBlip(750, 0.02)}
            onClick={() => sound.playConfirm()}
            className="flex items-center space-x-3 group"
            data-cursor="pointer"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-copper group-hover:scale-125 transition-transform duration-300" />
            <span className="font-serif text-xl sm:text-2xl tracking-tight font-medium text-charcoal">
              MUZAIN
            </span>
            <span className="text-[10px] font-mono tracking-widest text-muted uppercase hidden sm:inline pl-2.5 border-l border-stroke">
              GAME HUD // VOL. I
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-mono uppercase tracking-widest">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onMouseEnter={() => sound.playBlip(600, 0.02)}
                onClick={() => sound.playConfirm()}
                className="text-muted hover:text-charcoal transition-colors duration-200 flex items-center gap-1.5 group py-1"
                data-cursor="pointer"
              >
                <span className="text-[10px] text-copper/70 font-mono">
                  {item.number}
                </span>
                <span className="group-hover:text-charcoal transition-colors">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>

          {/* Right Action & Status */}
          <div className="hidden sm:flex items-center space-x-4">
            {onOpenArcade && (
              <button
                onClick={() => {
                  sound.playConfirm();
                  onOpenArcade();
                }}
                className="px-3 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-wider text-copper bg-copper/10 hover:bg-copper/20 border border-copper/30 transition-all flex items-center gap-1.5"
                title="Launch Retro Arcade Mini-Game"
              >
                <Gamepad2 className="w-3.5 h-3.5" />
                <span>ARCADE</span>
              </button>
            )}

            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-surface-subtle border border-stroke text-[11px] font-mono text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>1ST YEAR CS (AI) // THEJUS</span>
            </div>

            <a
              href="#contact"
              onMouseEnter={() => sound.playBlip(700, 0.02)}
              onClick={() => sound.playConfirm()}
              className="px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider text-charcoal bg-surface hover:bg-surface-elevated border border-stroke hover:border-copper/40 transition-all duration-200 flex items-center gap-1.5 group"
              data-cursor="pointer"
            >
              <span>CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-copper group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-muted hover:text-charcoal focus:outline-none"
            aria-label="Toggle menu"
            data-cursor="pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 bg-canvas/98 backdrop-blur-xl pt-24 px-8 flex flex-col justify-between pb-12 md:hidden"
          >
            <div className="space-y-6">
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted border-b border-stroke pb-3">
                Index Navigation
              </p>
              <nav className="flex flex-col space-y-5">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      sound.playConfirm();
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-baseline justify-between py-2 border-b border-stroke/40 text-xl font-serif text-charcoal hover:text-copper transition-colors"
                  >
                    <span>{item.label}</span>
                    <span className="text-xs font-mono text-muted">{item.number}</span>
                  </a>
                ))}
                {onOpenArcade && (
                  <button
                    onClick={() => {
                      sound.playConfirm();
                      setMobileMenuOpen(false);
                      onOpenArcade();
                    }}
                    className="flex items-center gap-2 py-2 text-copper font-mono text-base"
                  >
                    <Gamepad2 className="w-5 h-5" />
                    <span>LAUNCH ARCADE MINI-GAME</span>
                  </button>
                )}
              </nav>
            </div>

            <div className="space-y-4 pt-6 border-t border-stroke">
              <p className="text-xs font-mono text-muted uppercase tracking-wider">
                {portfolioData.profile.status}
              </p>
              <div className="flex gap-4 text-xs font-mono text-copper">
                <a
                  href={portfolioData.profile.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  GITHUB
                </a>
                <a
                  href={portfolioData.profile.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  LINKEDIN
                </a>
                <a
                  href={`mailto:${portfolioData.profile.contact.email}`}
                  className="hover:underline"
                >
                  EMAIL
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
