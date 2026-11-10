"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/data/portfolio";
import { X, ExternalLink, CheckCircle2, Tag, Trophy, Gift, Swords } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { sound } from "@/utils/sound";
import Image from "next/image";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-surface rounded-2xl overflow-hidden shadow-2xl border border-copper/30 flex flex-col md:flex-row max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={() => {
                sound.playBlip(400);
                onClose();
              }}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-canvas/80 hover:bg-surface-elevated text-charcoal flex items-center justify-center transition border border-stroke shadow-md"
              aria-label="Close dialog"
              data-cursor="pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Left Image Section */}
            <div className="md:w-1/2 relative bg-canvas flex items-center justify-center overflow-hidden min-h-[240px] md:min-h-full">
              <div className="relative w-full h-full min-h-[260px] md:min-h-[420px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-canvas/90 via-transparent to-transparent md:hidden" />
              </div>

              {/* Overlaid Tech Chip */}
              <div className="absolute bottom-4 left-4 bg-canvas/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] font-mono tracking-wider text-charcoal uppercase border border-stroke shadow-sm">
                {project.techChip}
              </div>

              {/* Quest Code Badge Top-Left */}
              <div className="absolute top-4 left-4 bg-canvas/90 backdrop-blur-md px-3 py-1 rounded text-[10px] font-mono tracking-wider text-copper font-medium uppercase border border-copper/40 shadow-sm flex items-center gap-1.5">
                <Swords className="w-3.5 h-3.5 text-copper" />
                <span>{project.questCode} • {project.difficulty}</span>
              </div>
            </div>

            {/* Right Content & Telemetry Panel */}
            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-surface space-y-6">
              <div className="space-y-5">
                {/* Header Metadata */}
                <div>
                  <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider mb-2">
                    <span className="text-copper font-medium flex items-center gap-1.5">
                      <Tag className="w-3 h-3" />
                      {project.categoryLabel}
                    </span>
                    <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                      <Trophy className="w-3 h-3" />
                      {project.expReward}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-charcoal leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-muted/80 mt-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* Mission Briefing */}
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-copper block">
                    [ MISSION BRIEFING ]
                  </span>
                  <p className="text-sm text-muted font-light leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                {/* Loot Drops / Quest Rewards */}
                <div className="border border-stroke/80 rounded-xl p-3 bg-canvas/60 space-y-2">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-copper">
                    <Gift className="w-3.5 h-3.5" />
                    <span>Loot Drops &amp; Deliverables</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.lootDrops.map((drop, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 rounded bg-surface border border-stroke text-[10px] font-mono text-charcoal"
                      >
                        💎 {drop}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technical Highlights */}
                <div className="space-y-2 pt-2 border-t border-stroke">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted block">
                    Engineering Benchmarks
                  </span>
                  <ul className="space-y-2">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-charcoal/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-copper mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics / Telemetry Sheet */}
                {project.metrics && (
                  <div className="border border-stroke/80 rounded-xl p-3.5 bg-canvas/50 space-y-2 text-xs">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted block">
                      Runtime Telemetry
                    </span>
                    <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                      {project.metrics.map((m, idx) => (
                        <div key={idx} className="p-2 rounded bg-surface border border-stroke/60">
                          <p className="text-copper font-mono font-medium text-sm">
                            {m.value}
                          </p>
                          <p className="text-[10px] text-muted font-mono uppercase mt-0.5">
                            {m.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Actions */}
              <div className="pt-5 border-t border-stroke flex items-center justify-between gap-3 text-xs">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playConfirm()}
                  className="px-4 py-2 rounded-lg bg-surface-elevated hover:bg-white hover:text-black border border-stroke text-charcoal font-mono flex items-center gap-2 transition-all"
                  data-cursor="pointer"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Inspect Source</span>
                </a>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playConfirm()}
                    className="px-4 py-2 rounded-lg bg-copper hover:bg-copper-light text-black font-mono font-medium flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(201,138,94,0.3)]"
                    data-cursor="pointer"
                  >
                    <span>Launch Mission</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
