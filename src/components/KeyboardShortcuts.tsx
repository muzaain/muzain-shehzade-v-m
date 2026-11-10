"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Command, X, Check } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function KeyboardShortcuts() {
  const [isOpen, setIsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept when user is typing in form inputs
      const activeTag = document.activeElement?.tagName.toLowerCase();
      if (activeTag === "input" || activeTag === "textarea" || activeTag === "select") {
        return;
      }

      switch (e.key) {
        case "1":
          e.preventDefault();
          document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
          showToast("Jumped to [1] Selected Work");
          break;
        case "2":
          e.preventDefault();
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          showToast("Jumped to [2] Philosophy & About");
          break;
        case "3":
          e.preventDefault();
          document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
          showToast("Jumped to [3] Technical Taxonomy");
          break;
        case "4":
          e.preventDefault();
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          showToast("Jumped to [4] Communication Channel");
          break;
        case "t":
        case "T":
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
          showToast("Returned to Top of Archive");
          break;
        case "c":
        case "C":
          e.preventDefault();
          navigator.clipboard.writeText(portfolioData.profile.contact.email);
          showToast("Copied email: " + portfolioData.profile.contact.email);
          break;
        case "?":
          e.preventDefault();
          setIsOpen((prev) => !prev);
          break;
        case "Escape":
          setIsOpen(false);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const shortcuts = [
    { key: "1", label: "Jump to Active Quests", target: "#work" },
    { key: "2", label: "Jump to Codex / Lore", target: "#about" },
    { key: "3", label: "Jump to RPG Skill Tree", target: "#skills" },
    { key: "4", label: "Jump to Guild Dispatch", target: "#contact" },
    { key: "G", label: "Launch Retro Arcade Mini-Game" },
    { key: "T", label: "Scroll to Top of Archive", target: "#" },
    { key: "C", label: "Copy Direct Email Address" },
    { key: "?", label: "Toggle This Telemetry HUD" },
    { key: "Esc", label: "Dismiss Open Overlays" },
  ];

  return (
    <>
      {/* Floating Bottom-Left HUD Button */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:block">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group px-3 py-1.5 rounded-full bg-surface/90 hover:bg-surface-elevated border border-stroke hover:border-copper/40 backdrop-blur-md text-[11px] font-mono text-muted hover:text-charcoal transition-all shadow-card flex items-center gap-2"
          title="Toggle Keyboard Shortcuts (?)"
          data-cursor="pointer"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-copper" />
          <span>CMD / HOTKEYS</span>
          <kbd className="px-1.5 py-0.5 rounded bg-canvas border border-stroke text-[9px] text-copper font-mono">
            ?
          </kbd>
        </button>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 bg-[#161619] border border-stroke shadow-2xl px-4 py-2.5 rounded-xl text-xs font-mono text-charcoal flex items-center gap-2 pointer-events-none"
          >
            <Check className="w-3.5 h-3.5 text-copper" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Keyboard Shortcuts Dialog */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md w-full bg-surface border border-stroke rounded-2xl p-6 shadow-2xl space-y-5"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-stroke">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted">
                  <Command className="w-3.5 h-3.5 text-copper" />
                  <span>Telemetry Hotkeys</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-md text-muted hover:text-charcoal hover:bg-surface-elevated transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* List of shortcuts */}
              <div className="space-y-2 text-xs">
                {shortcuts.map((item) => (
                  <div
                    key={item.key}
                    onClick={() => {
                      if (item.target) {
                        setIsOpen(false);
                        if (item.target === "#") {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        } else {
                          document.querySelector(item.target)?.scrollIntoView({ behavior: "smooth" });
                        }
                      } else if (item.key === "C") {
                        navigator.clipboard.writeText(portfolioData.profile.contact.email);
                        showToast("Copied email: " + portfolioData.profile.contact.email);
                        setIsOpen(false);
                      }
                    }}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-elevated cursor-pointer transition-colors group"
                  >
                    <span className="text-muted group-hover:text-charcoal transition-colors">
                      {item.label}
                    </span>
                    <kbd className="px-2 py-1 rounded bg-canvas border border-stroke text-copper font-mono text-[10px] font-medium shadow-sm">
                      {item.key}
                    </kbd>
                  </div>
                ))}
              </div>

              {/* Footer info */}
              <div className="pt-3 border-t border-stroke flex items-center justify-between text-[10px] font-mono text-muted/70">
                <span>Press any key to execute</span>
                <span className="text-copper">ESC to close</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
