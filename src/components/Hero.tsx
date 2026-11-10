"use client";

import { motion, type Variants } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ArrowDown, ArrowUpRight, Gamepad2, Swords } from "lucide-react";
import { useEffect, useState } from "react";
import { sound } from "@/utils/sound";

export function Hero({ onOpenArcade }: { onOpenArcade: () => void }) {
  const { profile, player } = portfolioData;

  // Real-time IST clock indicator
  const [timeStr, setTimeStr] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTimeStr(new Intl.DateTimeFormat("en-GB", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Split headline for staggered word reveal
  const headlineWords = profile.headline.split(" ");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { y: "115%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 sm:pt-36 pb-16 px-6 sm:px-10 max-w-7xl mx-auto w-full">
      {/* Top Hero Body */}
      <div className="space-y-8 sm:space-y-10 max-w-5xl">
        {/* Eyebrow Line / Game Quest HUD */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono uppercase tracking-widest text-muted"
        >
          <span className="w-2 h-2 rounded-full bg-copper animate-copper-pulse" />
          <span className="text-copper font-medium">PLAYER: {profile.name.toUpperCase()}</span>
          <span className="text-white/20">•</span>
          <span className="text-emerald-400 font-medium">LVL {player.level} {player.classTitle.toUpperCase()}</span>
          <span className="text-white/20">•</span>
          <span>THEJUS &apos;26 CS (AI)</span>
          <span className="text-white/20 hidden sm:inline">—</span>
          <span className="hidden sm:inline text-muted/70">ARCHIVE VOL. 01</span>
        </motion.div>

        {/* Huge Serif Headline with Word Mask Animation */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.06] tracking-tight text-charcoal"
        >
          {headlineWords.map((word, index) => (
            <span
              key={index}
              className="inline-block overflow-hidden pb-1 sm:pb-2 mr-[0.26em] last:mr-0 align-bottom"
            >
              <motion.span
                variants={wordVariants}
                className={`inline-block ${
                  word.toLowerCase().includes("game-engine") || word.toLowerCase().includes("precision")
                    ? "italic font-light text-copper"
                    : ""
                }`}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        {/* Sub-paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-base sm:text-lg md:text-xl text-muted font-light leading-relaxed max-w-2xl"
        >
          {profile.bio[1]}
        </motion.p>

        {/* Character Passives & Buff Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] as const }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 max-w-3xl"
        >
          {player.passives.map((p, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-surface/70 border border-stroke hover:border-copper/40 transition-colors text-xs font-mono space-y-1"
            >
              <div className="flex items-center gap-1.5 text-copper font-medium">
                <span>{p.icon}</span>
                <span>{p.title}</span>
              </div>
              <p className="text-[11px] text-muted font-light leading-snug">
                {p.effect}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] as const }}
          className="flex flex-wrap items-center gap-4 pt-3 sm:pt-5"
        >
          <a
            href="#work"
            onMouseEnter={() => sound.playBlip(550)}
            onClick={() => sound.playConfirm()}
            className="px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-mono uppercase tracking-wider text-black bg-charcoal hover:bg-white transition-all duration-300 flex items-center gap-2 group shadow-[0_0_25px_rgba(255,255,255,0.1)]"
            data-cursor="pointer"
          >
            <Swords className="w-4 h-4 text-black group-hover:rotate-45 transition-transform" />
            <span>View Active Quests</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <a
            href="#contact"
            onMouseEnter={() => sound.playBlip(600)}
            onClick={() => sound.playConfirm()}
            className="px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-mono uppercase tracking-wider text-charcoal bg-surface hover:bg-surface-elevated border border-stroke hover:border-copper/40 transition-all duration-300 flex items-center gap-2 group"
            data-cursor="pointer"
          >
            <span>Initiate Guild Transmission</span>
            <ArrowUpRight className="w-4 h-4 text-copper group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <button
            onClick={() => {
              sound.playConfirm();
              onOpenArcade();
            }}
            onMouseEnter={() => sound.playBlip(700)}
            className="px-5 py-3 rounded-full text-xs font-mono uppercase tracking-wider text-copper bg-copper/10 hover:bg-copper/20 border border-copper/30 hover:border-copper transition-all flex items-center gap-2"
            title="Launch Retro Arcade Mini-Game"
            data-cursor="pointer"
          >
            <Gamepad2 className="w-4 h-4 text-copper animate-bounce" />
            <span>Play Arcade Mini-Game [G]</span>
          </button>
        </motion.div>
      </div>

      {/* Bottom Telemetry Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-16 pt-8 border-t border-stroke/70 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-xs"
      >
        <div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted block mb-1">
            Status
          </span>
          <div className="flex items-center gap-1.5 text-charcoal font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Seeking Guild Quests</span>
          </div>
        </div>

        <div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted block mb-1">
            Guild Base
          </span>
          <p className="text-charcoal font-medium truncate" title="Thejus Engineering College, Thrissur">
            Thejus Engg College
          </p>
        </div>

        <div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted block mb-1">
            Telemetry (IST)
          </span>
          <p className="font-mono text-copper font-medium">
            {timeStr || "14:40:22"} UTC+5:30
          </p>
        </div>

        <div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted block mb-1">
            Cadet Rank
          </span>
          <p className="text-charcoal font-medium">
            {player.rank}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
