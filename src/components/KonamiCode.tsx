"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, X } from "lucide-react";
import { sound } from "@/utils/sound";

const KONAMI_SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function KonamiCode() {
  const [active, setActive] = useState(false);
  const [inputIndex, setInputIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = document.activeElement?.tagName.toLowerCase();
      if (activeTag === "input" || activeTag === "textarea") return;

      const key = e.key.toLowerCase();
      const expected = KONAMI_SEQUENCE[inputIndex].toLowerCase();

      if (key === expected) {
        sound.playBlip(700 + inputIndex * 50, 0.03);
        const nextIndex = inputIndex + 1;
        if (nextIndex === KONAMI_SEQUENCE.length) {
          // Cheat code unlocked!
          sound.playPowerUp();
          setActive(true);
          setInputIndex(0);
        } else {
          setInputIndex(nextIndex);
        }
      } else {
        setInputIndex(0);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [inputIndex]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActive(false)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-lg w-full bg-[#0d0d12] border-2 border-copper p-8 rounded-2xl shadow-[0_0_60px_rgba(201,138,94,0.4)] text-center space-y-5"
          >
            {/* Close button */}
            <button
              onClick={() => setActive(false)}
              className="absolute top-4 right-4 text-muted hover:text-charcoal p-1.5 rounded-lg border border-stroke"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Achievement Badge */}
            <div className="w-16 h-16 rounded-2xl bg-copper/20 border border-copper mx-auto flex items-center justify-center text-copper shadow-[0_0_25px_rgba(201,138,94,0.3)]">
              <Trophy className="w-8 h-8 animate-bounce" />
            </div>

            <div className="space-y-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400">
                [ KONAMI SECRET SEQUENCE UNLOCKED ]
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-charcoal">
                GOD MODE ACTIVATED
              </h3>
              <p className="text-xs font-mono text-muted max-w-sm mx-auto">
                You entered the legendary sequence: <br />
                <code className="text-copper bg-canvas px-2 py-1 rounded border border-stroke mt-1 inline-block">
                  ↑ ↑ ↓ ↓ ← → ← → B A
                </code>
              </p>
            </div>

            {/* Stat Overrides */}
            <div className="grid grid-cols-3 gap-3 p-3 rounded-xl bg-canvas border border-stroke text-xs font-mono">
              <div className="p-2 rounded bg-surface border border-stroke">
                <span className="text-muted block text-[10px]">NEW LEVEL</span>
                <span className="text-copper font-bold text-sm">LVL 99</span>
              </div>
              <div className="p-2 rounded bg-surface border border-stroke">
                <span className="text-muted block text-[10px]">ALL STATS</span>
                <span className="text-emerald-400 font-bold text-sm">100 / 100</span>
              </div>
              <div className="p-2 rounded bg-surface border border-stroke">
                <span className="text-muted block text-[10px]">BONUS EXP</span>
                <span className="text-cyan-400 font-bold text-sm">+99,999</span>
              </div>
            </div>

            <p className="text-[11px] font-mono text-muted/80">
              Muzain Shehzade&apos;s first-year cadet stats have been boosted with maximum learning velocity and infinite curiosity!
            </p>

            <button
              onClick={() => setActive(false)}
              className="px-6 py-2.5 rounded-full bg-copper hover:bg-copper-light text-black font-mono text-xs uppercase tracking-wider font-medium transition-all shadow-glow"
            >
              RESUME GAMEPLAY
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
