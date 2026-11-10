"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PageIntro() {
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Check if user prefers reduced motion or already saw intro this session
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const hasSeenIntro = sessionStorage.getItem("noir_intro_seen");

    if (prefersReducedMotion || hasSeenIntro) {
      setLoading(false);
      return;
    }

    // Smooth counter progression
    const duration = 1200; // ms
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCounter(Math.floor(easedProgress * 100));

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setTimeout(() => {
          setLoading(false);
          sessionStorage.setItem("noir_intro_seen", "true");
        }, 200);
      }
    };

    const rafId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            opacity: 0.9,
            transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] as const },
          }}
          className="fixed inset-0 z-50 bg-[#0a0a0a] flex flex-col justify-between p-8 sm:p-12 pointer-events-auto"
        >
          {/* Top mono telemetry */}
          <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-muted">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-copper animate-pulse" />
              <span>INITIALIZING ARCHIVE</span>
            </div>
            <span>1ST YEAR • CS (AI) INITIATE</span>
          </div>

          {/* Center Brand Title */}
          <div className="space-y-3">
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-charcoal font-normal">
              MUZAIN SHEHZADE
            </h1>
            <p className="text-xs font-mono uppercase tracking-widest text-muted">
              Noir &amp; Lumen Visual Portfolio — Volume 01
            </p>
          </div>

          {/* Bottom Counter & Loading Track */}
          <div className="space-y-3">
            <div className="flex items-baseline justify-between text-xs font-mono">
              <span className="text-muted uppercase tracking-wider">
                System Calibration
              </span>
              <span className="text-copper font-medium text-sm sm:text-base">
                {String(counter).padStart(3, "0")}%
              </span>
            </div>
            <div className="w-full h-[1px] bg-white/[0.08] relative overflow-hidden">
              <div
                className="h-full bg-copper transition-all duration-75 ease-out shadow-[0_0_10px_#c98a5e]"
                style={{ width: `${counter}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

