"use client";

import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import { Gamepad2, Volume2, VolumeX, Monitor, Shield, Zap, Heart } from "lucide-react";
import { sound } from "@/utils/sound";

export function GameHUD({ onOpenArcade }: { onOpenArcade: () => void }) {
  const { player } = portfolioData;
  const [soundActive, setSoundActive] = useState(false);
  const [crtActive, setCrtActive] = useState(false);

  const toggleSound = () => {
    const active = sound.toggle();
    setSoundActive(active);
  };

  const toggleCRT = () => {
    const next = !crtActive;
    setCrtActive(next);
    if (next) {
      document.documentElement.classList.add("crt-mode");
    } else {
      document.documentElement.classList.remove("crt-mode");
    }
  };

  useEffect(() => {
    // Quick keyboard shortcut 'g' or 'G' to trigger arcade
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = document.activeElement?.tagName.toLowerCase();
      if (activeTag === "input" || activeTag === "textarea") return;

      if (e.key === "g" || e.key === "G") {
        onOpenArcade();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onOpenArcade]);

  return (
    <div className="w-full bg-[#0a0a0c]/90 border-b border-stroke py-2 px-6 sm:px-10 text-[11px] font-mono select-none">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: Player ID & Level */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-copper font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>PLAYER 1: MUZAIN</span>
            <span className="px-1.5 py-0.5 rounded bg-surface border border-stroke text-[9px] text-charcoal">
              LVL {player.level}
            </span>
          </div>

          <span className="text-white/20 hidden sm:inline">•</span>

          <span className="text-muted hidden md:inline">
            CLASS: <strong className="text-charcoal font-normal">{player.classTitle}</strong>
          </span>
        </div>

        {/* Center: RPG Health & Mana Gauges */}
        <div className="hidden lg:flex items-center gap-6">
          {/* HP Bar */}
          <div className="flex items-center gap-1.5">
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500/20" />
            <span className="text-muted text-[10px]">HP</span>
            <div className="w-20 h-2 bg-surface rounded-full overflow-hidden border border-stroke">
              <div className="h-full bg-gradient-to-r from-rose-600 to-rose-400 w-full" />
            </div>
            <span className="text-charcoal text-[10px]">100%</span>
          </div>

          {/* MP Bar */}
          <div className="flex items-center gap-1.5">
            <Zap className="w-3 h-3 text-cyan-400 fill-cyan-400/20" />
            <span className="text-muted text-[10px]">MP</span>
            <div className="w-20 h-2 bg-surface rounded-full overflow-hidden border border-stroke">
              <div className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400 w-[92%]" />
            </div>
            <span className="text-charcoal text-[10px]">92%</span>
          </div>

          {/* EXP Bar */}
          <div className="flex items-center gap-1.5">
            <Shield className="w-3 h-3 text-copper" />
            <span className="text-muted text-[10px]">EXP</span>
            <div className="w-20 h-2 bg-surface rounded-full overflow-hidden border border-stroke">
              <div className="h-full bg-copper w-full" />
            </div>
            <span className="text-copper text-[10px]">THEJUS &apos;26</span>
          </div>
        </div>

        {/* Right: Tactical Toggles & Arcade Button */}
        <div className="flex items-center gap-2">
          {/* CRT Filter Toggle */}
          <button
            onClick={toggleCRT}
            className={`px-2.5 py-1 rounded-md text-[10px] font-mono flex items-center gap-1 transition-all border ${
              crtActive
                ? "bg-copper/20 border-copper text-copper"
                : "bg-surface border-stroke text-muted hover:text-charcoal"
            }`}
            title="Toggle Retro CRT Scanlines"
          >
            <Monitor className="w-3 h-3" />
            <span className="hidden sm:inline">CRT:</span>
            <span>{crtActive ? "ON" : "OFF"}</span>
          </button>

          {/* Audio Synthesizer Toggle */}
          <button
            onClick={toggleSound}
            className={`px-2.5 py-1 rounded-md text-[10px] font-mono flex items-center gap-1 transition-all border ${
              soundActive
                ? "bg-copper/20 border-copper text-copper shadow-[0_0_10px_rgba(201,138,94,0.3)]"
                : "bg-surface border-stroke text-muted hover:text-charcoal"
            }`}
            title="Toggle Procedural WebAudio SFX"
          >
            {soundActive ? <Volume2 className="w-3 h-3 text-copper" /> : <VolumeX className="w-3 h-3" />}
            <span className="hidden sm:inline">SFX:</span>
            <span>{soundActive ? "ON" : "OFF"}</span>
          </button>

          {/* Play Arcade Trigger */}
          <button
            onClick={onOpenArcade}
            className="px-3 py-1 rounded-md bg-copper hover:bg-copper-light text-black font-medium text-[10px] font-mono flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(201,138,94,0.25)]"
            title="Launch Retro Neural Defender Mini Game"
          >
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>PLAY ARCADE [G]</span>
          </button>
        </div>
      </div>
    </div>
  );
}

