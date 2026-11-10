# Muzain Shehzade V M — Game-Themed Noir & Lumen Portfolio

A cyberpunk, tactical RPG-themed personal portfolio website crafted for **Muzain Shehzade V M**, first-batch B.Tech CS (AI) student at Thejus Engineering College, Thrissur, Kerala.

Combines the restrained elegance of the **Noir & Lumen** visual archive with an interactive **Cyberpunk / Tactical RPG HUD** aesthetic.

---

## 🎮 Game Theme & Features

### 1. Player Status HUD
- **Player Stats**: `PLAYER 1: MUZAIN [LVL 22]`
- **Class**: `NEURAL ARCHITECT & SYSTEMS DEVELOPER`
- **Guild**: `Thejus Engineering College // CS (AI) Inaugural Batch`
- **Cadet Rank**: `S-CLASS CADET`
- **Live Status Gauges**: Dynamic Health Points (`HP 100%`), Mana Gauge (`MP 92%`), and Cohort EXP (`THEJUS '26`).

### 2. Procedural WebAudio SFX Engine (`src/utils/sound.ts`)
- **Zero MP3 / Asset Dependencies**: Procedurally synthesizes sound waves in real time via the Web Audio API.
- **Audio Effects**:
  - Tactical UI blips on link and button hovers
  - Confirm chirps on navigation clicks
  - Power-up fanfare on transmission submission and game start
  - Laser blasts and 8-bit explosions in the arcade module
- **Audio Toggle**: One-click mute/unmute control in the top Game HUD.

### 3. Retro CRT Phosphor Scanlines (`[ 📺 CRT: ON/OFF ]`)
- One-click CRT monitor mode with authentic horizontal scanlines and phosphor bloom.

### 4. Playable Retro Arcade Mini-Game (`[ 🎮 PLAY ARCADE [G] ]`)
- **Game**: *Neural Defender // Muzain AI*
- Built natively with HTML5 Canvas and 60 FPS animation loop.
- **Controls**:
  - **Move**: `A` / `D` or `←` / `→` arrow keys
  - **Fire**: `Spacebar` or mouse click
  - **Objective**: Blast runtime memory leaks, null pointers, and latency bugs!
  - **Shortcut**: Press **`G`** anywhere on the page to launch instantly!

### 5. Guild Quest Board (Selected Work)
- Projects reframed as **Active Quests & Completed Missions**:
  - Quest codes (`QUEST_01`, `QUEST_02`, etc.)
  - Quest difficulty ranks (`S-CLASS`, `A-CLASS`)
  - Experience rewards (`+4,500 EXP`, `+3,200 EXP`)
  - Loot drops & deliverables (e.g. `4-Bit Quantized Weights`, `SQLite-Wasm Engine`)
  - Interactive **Mission Briefing Modal** with runtime telemetry and GitHub repository access.

### 6. RPG Skill Tree Matrix (Technical Skills)
- 4-Tier Skill Tree (Neural Core, Systems & Memory in C, 60fps UI Engines, DevOps & Tooling).
- Interactive skill nodes with mastery level (`LVL 96`), rank badges (`S`, `A`), and stat bars.

### 7. Character Lore & Codex (Philosophy / About)
- Full RPG attribute matrix:
  - *Intelligence (96/100)*
  - *Systems Craft (92/100)*
  - *Vision & Architecture (94/100)*
  - *Agility (88/100)*
- Character Passives: *Deep Focus (+50% Flow State)*, *Algorithmic Precision (+40% Efficiency)*, and *Noir & Lumen Aura (-80% Friction)*.
- Campaign progression timeline tracking completed and active raid milestones.

### 8. Guild Transmission Terminal (Contact Section)
- 256-bit encrypted transmission dispatch form with automatic `mailto:` fallback.
- One-click copy email button with feedback tooltip.
- Real-time IST clock indicator (`Thrissur Grid • UTC+5:30`).

---

## ⌨️ Tactical Hotkeys

| Key | Action |
| :--- | :--- |
| **`G`** | Launch Retro Arcade Mini-Game (*Neural Defender*) |
| **`1`** | Warp to Guild Quest Archive (`#work`) |
| **`2`** | Warp to Character Lore & Codex (`#about`) |
| **`3`** | Warp to RPG Skill Tree (`#skills`) |
| **`4`** | Warp to Guild Dispatch Terminal (`#contact`) |
| **`T`** | Return to peak of archive |
| **`C`** | Copy direct email address |
| **`?`** | Toggle Keyboard Shortcuts HUD |
| **`Esc`** | Dismiss open modals / Return to HUD |

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Server
```bash
npm run dev
# or for production performance:
npm run build && npm run start
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## ✏️ Customizing Your Content

All data (player stats, quests, skills, socials, education) lives in a single typed configuration file: **[`src/data/portfolio.ts`](file:///c:/Users/user/Desktop/muzain%20shehzade/src/data/portfolio.ts)**.

Edit this file to tweak your level, add new quests, or update your contact frequencies.

---

## 🌐 Deploy for Free on Vercel or Netlify

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "feat: game-themed noir & lumen portfolio"
   git push origin main
   ```
2. Log into [vercel.com](https://vercel.com) and click **"Add New..."** -> **"Project"**.
3. Select your repository and click **"Deploy"**. Vercel will automatically build and deploy with free global CDN and SSL.

---

© 2026 Muzain Shehzade V M. Noir & Lumen Game Edition.
