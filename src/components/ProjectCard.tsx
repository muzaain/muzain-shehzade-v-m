"use client";

import { useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { Project } from "@/data/portfolio";
import { ArrowUpRight, Trophy } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { sound } from "@/utils/sound";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
  index: number;
}

export function ProjectCard({ project, onOpenModal, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D Tilt calculation
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), {
    damping: 20,
    stiffness: 150,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), {
    damping: 20,
    stiffness: 150,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const xPct = (e.clientX - rect.left) / width - 0.5;
    const yPct = (e.clientY - rect.top) / height - 0.5;

    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => sound.playBlip(500, 0.03)}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
      className="group relative flex flex-col bg-surface rounded-xl p-3 sm:p-3.5 border border-stroke shadow-card hover:border-copper/50 hover:shadow-card-hover transition-all duration-300"
    >
      {/* Top Media / Thumbnail container */}
      <div
        onClick={() => {
          sound.playConfirm();
          onOpenModal(project);
        }}
        className="relative w-full aspect-[16/10] overflow-hidden rounded-lg bg-[#0F0F11] cursor-pointer"
        data-cursor="pointer"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover filter brightness-[0.88] contrast-[1.05] group-hover:brightness-100 group-hover:scale-105 transition-all duration-500 ease-out"
        />

        {/* Subtle Vignette & Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

        {/* Quest Code & Difficulty Overlaid Top */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className="bg-canvas/90 backdrop-blur-md px-2 py-0.5 rounded text-[9px] font-mono tracking-wider text-copper font-medium uppercase border border-stroke shadow-sm">
            {project.questCode}
          </span>
          <span className={`px-2 py-0.5 rounded text-[9px] font-mono tracking-wider font-medium uppercase border backdrop-blur-md shadow-sm ${
            project.difficulty === "S-CLASS"
              ? "bg-rose-950/80 border-rose-500/40 text-rose-300"
              : "bg-amber-950/80 border-amber-500/40 text-amber-300"
          }`}>
            {project.difficulty}
          </span>
        </div>

        {/* EXP Reward Badge Top-Right */}
        <div className="absolute top-3 right-3 bg-canvas/90 backdrop-blur-md px-2 py-0.5 rounded text-[9px] font-mono tracking-wider text-emerald-400 border border-stroke shadow-sm flex items-center gap-1">
          <Trophy className="w-2.5 h-2.5 text-emerald-400" />
          <span>{project.expReward}</span>
        </div>

        {/* Tech Chip Overlaid Bottom-Left */}
        <div className="absolute bottom-3 left-3 bg-canvas/85 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono tracking-wider text-charcoal uppercase border border-stroke shadow-sm">
          {project.techChip}
        </div>
      </div>

      {/* Card Body */}
      <div className="pt-3.5 pb-1 px-1 flex flex-col justify-between flex-grow">
        <div>
          {/* Category & Year */}
          <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider">
            <span className="text-copper font-medium">{project.categoryLabel}</span>
            <span className="text-muted">{project.year}</span>
          </div>

          {/* Title */}
          <h3
            onClick={() => {
              sound.playConfirm();
              onOpenModal(project);
            }}
            className="font-serif text-lg sm:text-xl font-normal text-charcoal group-hover:text-copper transition-colors mt-1.5 cursor-pointer line-clamp-1"
            data-cursor="pointer"
          >
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-xs text-muted font-light leading-relaxed mt-1.5 line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Loot Drops Preview */}
        <div className="mt-3 pt-2.5 border-t border-stroke/50 flex flex-wrap gap-1 text-[9px] font-mono text-muted/80">
          <span className="text-copper/90">DROPS:</span>
          {project.lootDrops.slice(0, 2).map((item, idx) => (
            <span key={idx} className="bg-surface-elevated px-1.5 py-0.5 rounded border border-stroke/70">
              {item}
            </span>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="pt-3 mt-2 border-t border-stroke/70 flex items-center justify-between text-xs">
          {/* Tech tags preview */}
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-muted/80">
            <span>{project.techStack.slice(0, 2).join(" • ")}</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 text-muted hover:text-charcoal transition-colors"
              title="GitHub Repository"
              aria-label="GitHub Repository"
              data-cursor="pointer"
              onClick={(e) => {
                e.stopPropagation();
                sound.playConfirm();
              }}
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => {
                sound.playConfirm();
                onOpenModal(project);
              }}
              className="font-mono text-[11px] text-charcoal group-hover:text-copper font-medium flex items-center gap-1 transition-colors"
              data-cursor="pointer"
            >
              <span>Briefing</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-copper transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
