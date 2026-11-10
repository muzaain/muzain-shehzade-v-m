import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-serif)", "Newsreader", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      colors: {
        canvas: "#0a0a0a",
        surface: "#111113",
        "surface-elevated": "#161619",
        "surface-subtle": "#131316",
        stroke: "rgba(255, 255, 255, 0.06)",
        "stroke-light": "rgba(255, 255, 255, 0.12)",
        charcoal: "#f2f2f2",
        muted: "#8b93a8",
        "muted-dark": "#505668",
        copper: {
          DEFAULT: "#c98a5e",
          light: "#dcb08e",
          dark: "#a66d45",
          glow: "rgba(201, 138, 94, 0.18)",
          subtle: "rgba(201, 138, 94, 0.08)",
        },
      },
      boxShadow: {
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.7)",
        "card-hover": "0 20px 40px -15px rgba(0, 0, 0, 0.85), 0 0 25px -5px rgba(201, 138, 94, 0.12)",
        glow: "0 0 50px -10px rgba(201, 138, 94, 0.25)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        marquee: "marquee 35s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
