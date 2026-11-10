# Muzain Shehzade V M — 1st Year B.Tech CS (AI) Portfolio

A cyberpunk, tactical game-themed personal portfolio website crafted for **Muzain Shehzade V M**, a passionate **first-year Computer Science & Engineering (Artificial Intelligence)** student at Thejus Engineering College, Thrissur, Kerala (Inaugural CS-AI Batch 2024–2028).

Combines the restrained, high-contrast **"Noir & Lumen"** dark aesthetic with an interactive **Cyberpunk / Tactical RPG HUD** and playable retro arcade module.

---

## 👨‍💻 About Muzain Shehzade

- **Discipline**: 1st Year B.Tech in Computer Science & Engineering (Artificial Intelligence)
- **Institution**: Thejus Engineering College, Thrissur, Kerala (Inaugural Batch)
- **Core Focus**: C Programming discipline, Python scripting, foundational Data Structures & Algorithms, Computer Vision basics, and modern web interfaces.
- **Interests**: AI/ML foundations, algorithm visualizers, game development in C, and open-source collaboration.

---

## 🎮 Game-Themed Features

- **Player 1 HUD**: `ROOKIE INITIATE [LVL 01]` with real-time HP/MP/EXP gauges and custom passives (*Freshman Curiosity*, *C Language Discipline*, *Late Night Build Sessions*).
- **Procedural WebAudio SFX Engine**: Real-time synthesized sci-fi sound effects (blips, chimes, laser blasts) with zero external audio file dependencies.
- **Retro CRT Scanlines**: One-click vintage phosphor CRT scanline filter.
- **Playable Arcade Mini-Game** (*Neural Defender // Muzain AI*): Built with HTML5 Canvas; pilot a tactical neon ship to blast runtime memory leaks and bugs (press **`G`** to play).
- **Secret Konami Code Easter Egg**: Enter `↑ ↑ ↓ ↓ ← → ← → B A` anywhere on the page to unlock **God Mode (LVL 99)**!
- **First-Year Projects**:
  1. **Pathfinder** — Algorithm Visualizer in Python (A*, BFS, DFS grid exploration with Pygame)
  2. **VisionCount** — Hand Landmark & Gesture Tracker (Real-time OpenCV & MediaPipe)
  3. **JarvisLite** — Python Desktop Voice Assistant (Offline pyttsx3 speech companion)
  4. **GradeSync** — KTU / Thejus SGPA & CGPA Tracker (Clean student grade calculator)
  5. **DungeonCrawler** — Text RPG in Pure C (Pointers, structs & save states in standard C99)
  6. **FocusArc** — Minimalist Study Session Timer (Pomodoro companion for exam prep)
- **Tactical Hotkeys**:
  - `1` → Projects Archive
  - `2` → Character Lore & Codex
  - `3` → Skills Tree
  - `4` → Contact Channel
  - `G` → Arcade Mini-Game
  - `T` → Top of Page
  - `C` → Copy Direct Email

---

## 📁 Project Structure

```text
muzain-shehzade/
├── src/
│   ├── app/
│   │   ├── globals.css           # Noir tokens, film grain, retro CRT scanline mode
│   │   ├── icon.svg              # Geometric monogram SVG favicon
│   │   ├── layout.tsx            # SEO, OpenGraph tags, Google Fonts, global providers
│   │   └── page.tsx              # Main single-page application with arcade & HUD
│   ├── components/
│   │   ├── AmbientGlow.tsx       # Cursor-following radial light & subtle grain
│   │   ├── ArcadeMiniGame.tsx    # Playable retro canvas arcade game (Neural Defender)
│   │   ├── ContactSection.tsx    # Student dispatch & collaboration form
│   │   ├── CustomCursor.tsx      # Fluid desktop cursor with magnetic expansion
│   │   ├── Footer.tsx            # Monochrome footer with back-to-top trigger
│   │   ├── GameHUD.tsx           # Top status bar with HP/MP/EXP, CRT & SFX toggles
│   │   ├── Hero.tsx              # Word-mask headline reveal & real-time telemetry
│   │   ├── Icons.tsx             # Inline SVG icons (GitHub, LinkedIn, Instagram)
│   │   ├── KeyboardShortcuts.tsx # Keyboard navigation HUD & quick jumps
│   │   ├── KonamiCode.tsx        # Secret Konami Easter egg (↑ ↑ ↓ ↓ ← → ← → B A)
│   │   ├── Navbar.tsx            # Sticky blurred glass navbar
│   │   ├── PageIntro.tsx         # Initial load calibration preloader
│   │   ├── PhilosophyAbout.tsx   # Character lore, attribute sheet & Dennis Ritchie quote
│   │   ├── ProjectCard.tsx       # 3D tilt cards with loot drops & difficulty badges
│   │   ├── ProjectModal.tsx      # Mission briefing & telemetry inspection modal
│   │   ├── ScrollProgressBar.tsx # Top copper progress bar
│   │   ├── SelectedWork.tsx      # Responsive project grid with category filters
│   │   ├── SkillsSection.tsx     # 4-tier skill tree & infinite marquee
│   │   └── SmoothScroll.tsx      # Lenis 60fps smooth scrolling wrapper
│   ├── data/
│   │   └── portfolio.ts          # ⚡ SINGLE DATA FILE for all student info & projects
│   └── utils/
│       └── sound.ts              # Web Audio API procedural sound synthesizer
├── next.config.mjs
├── tailwind.config.ts
└── package.json
```

---

## 🚀 Quick Start (Local Run)

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev
```

Visit **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 🌐 Deploy to Vercel or Netlify (Free)

This repository is already configured for instant static hosting:
1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New..."** -> **"Project"**.
3. Select `muzaain/muzain-shehzade-v-m`.
4. Click **"Deploy"**.

---

© 2026 Muzain Shehzade V M. First-Year B.Tech CS (AI) • Thejus Engineering College.
