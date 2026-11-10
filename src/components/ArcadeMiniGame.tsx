"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, RotateCcw, Volume2, VolumeX, Trophy, Gamepad2 } from "lucide-react";
import { sound } from "@/utils/sound";

interface Entity {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  text?: string;
  type?: "enemy" | "powerup" | "bullet";
}

const ENEMY_LABELS = ["NULL_PTR", "OOM_ERROR", "LATENCY", "DEADLOCK", "OVERFIT"];

export function ArcadeMiniGame({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(sound.enabled);

  const gameState = useRef<{
    player: { x: number; y: number; width: number; height: number };
    bullets: Entity[];
    enemies: Entity[];
    keys: { [key: string]: boolean };
    animationId: number | null;
    score: number;
    spawnTimer: number;
  }>({
    player: { x: 200, y: 350, width: 28, height: 28 },
    bullets: [],
    enemies: [],
    keys: {},
    animationId: null,
    score: 0,
    spawnTimer: 0,
  });

  const spawnEnemy = useCallback((canvasWidth: number) => {
    const label = ENEMY_LABELS[Math.floor(Math.random() * ENEMY_LABELS.length)];
    gameState.current.enemies.push({
      x: Math.random() * (canvasWidth - 70) + 10,
      y: -20,
      width: 60,
      height: 20,
      speed: 1.5 + Math.random() * 1.5,
      text: label,
      type: "enemy",
    });
  }, []);

  const startGame = useCallback(() => {
    setScore(0);
    setGameOver(false);
    setIsPlaying(true);
    gameState.current.score = 0;
    gameState.current.bullets = [];
    gameState.current.enemies = [];
    gameState.current.spawnTimer = 0;
    gameState.current.player.x = 220;
    gameState.current.player.y = 350;
    sound.playPowerUp();
  }, []);

  const shoot = useCallback(() => {
    const { player, bullets } = gameState.current;
    bullets.push({
      x: player.x + player.width / 2 - 2,
      y: player.y - 8,
      width: 4,
      height: 12,
      speed: 7,
      type: "bullet",
    });
    sound.playLaser();
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      gameState.current.keys[e.key] = true;
      if (e.code === "Space") {
        e.preventDefault();
        shoot();
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      gameState.current.keys[e.key] = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Main Game Loop
    const loop = () => {
      if (!ctx || !canvas) return;

      // Clear with CRT phosphor trail
      ctx.fillStyle = "rgba(10, 10, 12, 0.35)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Starfield / Grid lines
      ctx.strokeStyle = "rgba(201, 138, 94, 0.08)";
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      const { player, keys, bullets, enemies } = gameState.current;

      // Handle Player Input
      if ((keys["ArrowLeft"] || keys["a"] || keys["A"]) && player.x > 5) {
        player.x -= 4.5;
      }
      if ((keys["ArrowRight"] || keys["d"] || keys["D"]) && player.x < canvas.width - player.width - 5) {
        player.x += 4.5;
      }

      // Draw Player Ship (Tactical Neon Jet)
      ctx.fillStyle = "#c98a5e";
      ctx.shadowColor = "#c98a5e";
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.moveTo(player.x + player.width / 2, player.y);
      ctx.lineTo(player.x + player.width, player.y + player.height);
      ctx.lineTo(player.x + player.width / 2, player.y + player.height - 6);
      ctx.lineTo(player.x, player.y + player.height);
      ctx.closePath();
      ctx.fill();
      ctx.shadowBlur = 0;

      // Draw Thruster Glow
      ctx.fillStyle = "#ff6b4a";
      ctx.fillRect(player.x + player.width / 2 - 2, player.y + player.height - 4, 4, 8 + Math.random() * 6);

      // Update & Draw Bullets
      ctx.fillStyle = "#00f0ff";
      ctx.shadowColor = "#00f0ff";
      ctx.shadowBlur = 8;
      for (let i = bullets.length - 1; i >= 0; i--) {
        const b = bullets[i];
        b.y -= b.speed;
        ctx.fillRect(b.x, b.y, b.width, b.height);

        if (b.y < -10) bullets.splice(i, 1);
      }
      ctx.shadowBlur = 0;

      // Spawn Enemies
      gameState.current.spawnTimer++;
      if (gameState.current.spawnTimer % 55 === 0) {
        spawnEnemy(canvas.width);
      }

      // Update & Draw Enemies
      for (let i = enemies.length - 1; i >= 0; i--) {
        const en = enemies[i];
        en.y += en.speed;

        // Draw Enemy Box
        ctx.fillStyle = "rgba(255, 60, 60, 0.15)";
        ctx.strokeStyle = "#ff4444";
        ctx.lineWidth = 1;
        ctx.strokeRect(en.x, en.y, en.width, en.height);
        ctx.fillRect(en.x, en.y, en.width, en.height);

        // Enemy Label
        ctx.fillStyle = "#ffaaaa";
        ctx.font = "9px 'JetBrains Mono', monospace";
        ctx.fillText(en.text || "BUG", en.x + 4, en.y + 13);

        // Check Collision with Bullets
        for (let j = bullets.length - 1; j >= 0; j--) {
          const b = bullets[j];
          if (
            b.x > en.x &&
            b.x < en.x + en.width &&
            b.y > en.y &&
            b.y < en.y + en.height
          ) {
            // Hit!
            sound.playExplosion();
            enemies.splice(i, 1);
            bullets.splice(j, 1);
            gameState.current.score += 100;
            setScore(gameState.current.score);
            if (gameState.current.score > highScore) {
              setHighScore(gameState.current.score);
            }
            break;
          }
        }

        // Check Collision with Player
        if (
          en &&
          en.x < player.x + player.width &&
          en.x + en.width > player.x &&
          en.y < player.y + player.height &&
          en.y + en.height > player.y
        ) {
          sound.playExplosion();
          setGameOver(true);
          setIsPlaying(false);
          return;
        }

        // Remove if off-screen
        if (en && en.y > canvas.height + 20) {
          enemies.splice(i, 1);
        }
      }

      gameState.current.animationId = requestAnimationFrame(loop);
    };

    if (isPlaying && !gameOver) {
      gameState.current.animationId = requestAnimationFrame(loop);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      const activeAnim = gameState.current.animationId;
      if (activeAnim) {
        cancelAnimationFrame(activeAnim);
      }
    };
  }, [isOpen, isPlaying, gameOver, highScore, shoot, spawnEnemy]);

  const toggleSound = () => {
    const next = sound.toggle();
    setSoundEnabled(next);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[#0d0d10] border border-copper/40 rounded-2xl p-6 shadow-[0_0_50px_rgba(201,138,94,0.2)] max-w-lg w-full flex flex-col items-center"
          >
            {/* Header */}
            <div className="w-full flex items-center justify-between pb-3 border-b border-stroke">
              <div className="flex items-center gap-2">
                <Gamepad2 className="w-4 h-4 text-copper" />
                <span className="font-mono text-xs uppercase tracking-widest text-charcoal font-medium">
                  NEURAL DEFENDER // ARCADE MODULE
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleSound}
                  className="p-1.5 rounded-lg bg-surface border border-stroke text-muted hover:text-copper transition-colors"
                  title="Toggle SFX"
                >
                  {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg bg-surface border border-stroke text-muted hover:text-charcoal transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Telemetry Bar */}
            <div className="w-full flex items-center justify-between py-2 text-xs font-mono text-muted">
              <span>SCORE: <strong className="text-copper">{score}</strong></span>
              <span className="flex items-center gap-1">
                <Trophy className="w-3 h-3 text-copper" />
                BEST: <strong className="text-charcoal">{highScore}</strong>
              </span>
              <span>LIVES: <strong className="text-emerald-400">███</strong></span>
            </div>

            {/* Game Canvas Container with CRT Frame */}
            <div className="relative rounded-xl overflow-hidden border border-stroke bg-canvas shadow-inner mt-2">
              <canvas
                ref={canvasRef}
                width={440}
                height={400}
                className="w-full max-w-[440px] h-[340px] block"
              />

              {/* Start / Game Over Overlay */}
              {(!isPlaying || gameOver) && (
                <div className="absolute inset-0 bg-canvas/90 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center space-y-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-copper">
                    [ MUZAIN NEURAL DEFENSE PROTOCOL ]
                  </p>
                  <h3 className="font-serif text-3xl text-charcoal">
                    {gameOver ? "SYSTEM FAULT (GAME OVER)" : "Eliminate Server Bugs"}
                  </h3>
                  <p className="text-xs font-mono text-muted max-w-xs">
                    Steer your ship with <strong>A / D</strong> or <strong>← / →</strong>. Tap <strong>SPACEBAR</strong> to blast runtime latency &amp; memory bugs!
                  </p>
                  <button
                    onClick={startGame}
                    className="px-6 py-2.5 rounded-full bg-copper hover:bg-copper-light text-black font-mono text-xs uppercase tracking-wider font-medium flex items-center gap-2 transition-all shadow-glow"
                  >
                    {gameOver ? (
                      <>
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>REBOOT MISSION</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5" />
                        <span>START ARCADE</span>
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Footer Controls Tip */}
            <div className="w-full pt-3 mt-2 flex items-center justify-between text-[10px] font-mono text-muted/70 border-t border-stroke/60">
              <span>CONTROLS: [←] [→] MOVE • [SPACE] FIRE</span>
              <span className="text-copper">ESC TO RETURN</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
