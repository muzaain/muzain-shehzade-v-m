"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Terminal, BrainCircuit, Code2, Server } from "lucide-react";
import { sound } from "@/utils/sound";

export function SkillsSection() {
  const { skills, marqueeSkills } = portfolioData;

  const categoryIcons = [
    <BrainCircuit key="ai" className="w-4 h-4 text-copper" />,
    <Terminal key="sys" className="w-4 h-4 text-copper" />,
    <Code2 key="web" className="w-4 h-4 text-copper" />,
    <Server key="infra" className="w-4 h-4 text-copper" />,
  ];

  return (
    <section id="skills" className="py-24 sm:py-32 px-6 sm:px-10 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted">
          <span className="text-copper font-medium">{"// 03"}</span>
          <span>RPG SKILL TREE MATRIX</span>
          <span className="text-white/20">—</span>
          <span>TECH SPELLS &amp; BUFFS</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] text-charcoal">
          Skills &amp; Learning Roadmap.
        </h2>

        <p className="text-sm sm:text-base text-muted font-light leading-relaxed">
          My first-year technical toolkit: core C programming discipline, Python data &amp; AI libraries,
          responsive web styling, and essential command-line tools.
        </p>
      </div>

      {/* 4-Category Grid */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {skills.map((category, catIdx) => (
          <motion.div
            key={category.number}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: catIdx * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            className="p-6 sm:p-7 rounded-2xl bg-surface border border-stroke hover:border-copper/40 shadow-card transition-all flex flex-col justify-between"
          >
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-stroke">
                <div className="flex items-center gap-2.5">
                  <span className="p-2 rounded-lg bg-surface-elevated border border-stroke/60">
                    {categoryIcons[catIdx % categoryIcons.length]}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-charcoal font-normal">
                    {category.title}
                  </h3>
                </div>
                <span className="font-mono text-xs text-copper font-medium">
                  {category.number}
                </span>
              </div>

              <p className="text-xs text-muted font-light mt-3 mb-5">
                {category.description}
              </p>

              {/* RPG Skills Nodes */}
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    onMouseEnter={() => sound.playBlip(700, 0.02)}
                    className="group p-2.5 rounded-xl bg-surface-subtle hover:bg-surface-elevated border border-stroke hover:border-copper/40 transition-all flex items-center justify-between gap-3 text-xs font-mono"
                    data-cursor="pointer"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span className={`px-1.5 py-0.5 rounded flex items-center justify-center text-[9px] font-bold ${
                        skill.rank === "S"
                          ? "bg-copper/20 text-copper border border-copper/40"
                          : skill.rank === "A"
                          ? "bg-surface text-charcoal border border-stroke"
                          : "bg-surface-elevated text-muted border border-stroke"
                      }`}>
                        {skill.rank}
                      </span>
                      <span className="text-charcoal group-hover:text-copper transition-colors truncate">
                        {skill.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      {/* Stat Bar */}
                      <div className="w-16 h-1.5 bg-canvas rounded-full overflow-hidden border border-stroke/70 hidden sm:block">
                        <div
                          className="h-full bg-gradient-to-r from-copper-dark to-copper"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <span className="text-[10px] text-copper font-medium">
                        LVL {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom mini-metric */}
            <div className="mt-6 pt-4 border-t border-stroke/60 flex items-center justify-between text-[11px] font-mono text-muted">
              <span>Skill Specialization</span>
              <span className="text-copper">S-Rank Validated</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Infinite Seamless Monospace Marquee */}
      <div className="mt-16 pt-8 border-t border-stroke overflow-hidden marquee-container">
        <div className="flex whitespace-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <div className="flex animate-marquee gap-8 marquee-track">
            {marqueeSkills.concat(marqueeSkills).map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 text-xs sm:text-sm font-mono uppercase tracking-widest text-muted/70 hover:text-copper transition-colors cursor-default"
              >
                <span>{item}</span>
                <span className="text-copper/40">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
