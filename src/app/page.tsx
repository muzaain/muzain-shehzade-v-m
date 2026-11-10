"use client";

import { useState } from "react";
import { PageIntro } from "@/components/PageIntro";
import { GameHUD } from "@/components/GameHUD";
import { ArcadeMiniGame } from "@/components/ArcadeMiniGame";
import { KeyboardShortcuts } from "@/components/KeyboardShortcuts";
import { KonamiCode } from "@/components/KonamiCode";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { PhilosophyAbout } from "@/components/PhilosophyAbout";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [arcadeOpen, setArcadeOpen] = useState(false);

  return (
    <main className="min-h-screen bg-canvas text-charcoal flex flex-col relative selection:bg-copper selection:text-black">
      {/* Editorial Page Load Intro Animation */}
      <PageIntro />

      {/* Top Game HUD Status Bar with HP/MP/EXP & CRT Toggle */}
      <GameHUD onOpenArcade={() => setArcadeOpen(true)} />

      {/* Playable Retro Arcade Mini-Game Overlay */}
      <ArcadeMiniGame
        isOpen={arcadeOpen}
        onClose={() => setArcadeOpen(false)}
      />

      {/* Keyboard Shortcuts Navigation HUD */}
      <KeyboardShortcuts />

      {/* Secret Konami Code Easter Egg */}
      <KonamiCode />

      {/* Sticky Smart Navigation */}
      <Navbar onOpenArcade={() => setArcadeOpen(true)} />

      {/* Hero Section with Player RPG Attributes */}
      <Hero onOpenArcade={() => setArcadeOpen(true)} />

      {/* Selected Work Grid (Guild Quest Archive) */}
      <SelectedWork />

      {/* Philosophy & Lore Codex */}
      <PhilosophyAbout />

      {/* RPG Skill Tree Matrix */}
      <SkillsSection />

      {/* Guild Transmission Channel & Dispatch Form */}
      <ContactSection />

      {/* Minimal Monochrome Footer */}
      <Footer />
    </main>
  );
}
