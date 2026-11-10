"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { GraduationCap, MapPin, Quote } from "lucide-react";

export function PhilosophyAbout() {
  const { profile, philosophy, milestones, player } = portfolioData;

  const statItems = [
    { label: "INTELLIGENCE", val: player.stats.intelligence },
    { label: "SYSTEMS CRAFT", val: player.stats.systemsCraft },
    { label: "VISION & ARCHITECTURE", val: player.stats.architecturalVision },
    { label: "AGILITY (60 FPS)", val: player.stats.agility },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 border-t border-stroke bg-surface/50 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading, Character Sheet & Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted">
              <span className="text-copper font-medium">{"// 02"}</span>
              <span>CHARACTER LORE &amp; CODEX</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] text-charcoal">
              The calm of deep focus.
            </h2>
          </div>

          {/* RPG Character Attribute Sheet Card */}
          <div className="p-6 rounded-2xl bg-surface border border-copper/30 shadow-card space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-stroke">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-surface-elevated border border-copper/40 flex items-center justify-center font-serif text-xl text-copper font-medium shadow-sm">
                  {profile.monogram}
                </div>
                <div>
                  <h3 className="font-serif text-lg text-charcoal leading-snug">
                    {profile.name}
                  </h3>
                  <p className="text-xs font-mono text-copper">
                    LVL {player.level} • {player.classTitle}
                  </p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded bg-copper/10 border border-copper/30 text-[10px] font-mono text-copper">
                {player.rank}
              </span>
            </div>

            {/* RPG Skill Gauges */}
            <div className="space-y-2.5 pt-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted block">
                Attribute Matrix
              </span>
              {statItems.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <div className="flex justify-between text-[10px] font-mono">
                    <span className="text-muted">{stat.label}</span>
                    <span className="text-copper font-medium">{stat.val}/100</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-canvas overflow-hidden border border-stroke/70">
                    <div
                      className="h-full bg-gradient-to-r from-copper-dark via-copper to-copper-light"
                      style={{ width: `${stat.val}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-stroke/70 space-y-2 text-xs text-muted">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-copper shrink-0" />
                <span>
                  Guild: <strong className="text-charcoal font-medium">Thejus Engineering College</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-copper shrink-0" />
                <span>Location: Thrissur Grid, Kerala, India</span>
              </div>
            </div>
          </div>

          {/* Philosophy Quote */}
          <div className="relative p-6 rounded-2xl bg-canvas/60 border border-stroke/80 space-y-3">
            <Quote className="w-5 h-5 text-copper/60" />
            <blockquote className="font-serif italic text-base sm:text-lg text-charcoal/90 leading-snug">
              &ldquo;{philosophy.quote}&rdquo;
            </blockquote>
            <p className="text-[11px] font-mono uppercase tracking-widest text-muted">
              — {philosophy.quoteAuthor}
            </p>
          </div>
        </motion.div>

        {/* Right Column: Narrative & Campaign Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
          className="lg:col-span-7 space-y-10"
        >
          {/* Narrative Essay */}
          <div className="space-y-5 text-sm sm:text-base text-muted font-light leading-relaxed">
            {philosophy.paragraphs.map((p, idx) => (
              <p key={idx} className="first-letter:font-serif first-letter:text-2xl first-letter:text-charcoal">
                {p}
              </p>
            ))}
          </div>

          {/* Campaign Progression Milestones */}
          <div className="space-y-6 pt-6 border-t border-stroke">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                Campaign Progression &amp; Raid History
              </span>
              <span className="text-[11px] font-mono text-copper">
                CHAPTER LOG
              </span>
            </div>

            <div className="space-y-5">
              {milestones.map((m, index) => (
                <div
                  key={index}
                  className="group relative pl-6 border-l border-stroke hover:border-copper/70 transition-colors py-1"
                >
                  <span className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-surface-elevated border border-stroke group-hover:border-copper group-hover:bg-copper transition-colors" />

                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <h4 className="font-serif text-base sm:text-lg text-charcoal font-normal">
                        {m.role}
                      </h4>
                      <span className={`px-2 py-0.5 rounded text-[9px] font-mono uppercase ${
                        m.questStatus === "ACTIVE IN PROGRESS"
                          ? "bg-emerald-950/80 border border-emerald-500/30 text-emerald-300"
                          : "bg-surface border border-stroke text-muted"
                      }`}>
                        {m.questStatus}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-copper">
                      {m.period}
                    </span>
                  </div>

                  <p className="text-xs font-mono text-muted/80 mt-0.5">
                    {m.organization} • {m.location}
                  </p>

                  <p className="text-xs text-muted font-light mt-2 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
