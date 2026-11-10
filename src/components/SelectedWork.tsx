"use client";

import { useState, useMemo } from "react";
import { portfolioData, type Project } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { AnimatePresence } from "framer-motion";
import { Swords } from "lucide-react";
import { sound } from "@/utils/sound";

export function SelectedWork() {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterCategories = [
    { id: "all", label: "All Quests" },
    { id: "ai", label: "AI & Neural Quests" },
    { id: "systems", label: "Distributed Raids" },
    { id: "web", label: "Web & Knowledge" },
    { id: "creative", label: "Creative Shaders" },
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [projects, activeFilter]);

  return (
    <section id="work" className="py-24 sm:py-32 px-6 sm:px-10 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted">
          <span className="text-copper font-medium">{"// 01"}</span>
          <span>GUILD QUEST ARCHIVE</span>
          <span className="text-white/20">—</span>
          <span>COMPLETED CAMPAIGNS</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] text-charcoal">
          Guild Quest Board &amp; Deployed Models.
        </h2>

        <p className="text-sm sm:text-base text-muted font-light leading-relaxed">
          Tactical mission archive of deep learning prototypes, low-latency C pipelines, and
          distributed federated clients engineered with mathematical rigor and game-engine fluidity.
        </p>
      </div>

      {/* Filter Bar & Telemetry */}
      <div className="mt-10 sm:mt-12 pt-6 border-t border-stroke flex flex-wrap items-center justify-between gap-4">
        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {filterCategories.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => {
                  sound.playBlip(650);
                  setActiveFilter(filter.id);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? "bg-charcoal text-canvas font-medium shadow-sm"
                    : "text-muted hover:text-charcoal bg-surface border border-stroke hover:border-copper/40"
                }`}
                data-cursor="pointer"
              >
                <span>{filter.label}</span>
              </button>
            );
          })}
        </div>

        {/* Counter */}
        <div className="text-xs font-mono text-muted flex items-center gap-2">
          <Swords className="w-3.5 h-3.5 text-copper" />
          <span>
            Active: <strong className="text-charcoal">{filteredProjects.length}</strong> of {projects.length} Quests
          </span>
        </div>
      </div>

      {/* Projects Grid (3 cols desktop, 2 cols tablet, 1 col mobile) */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpenModal={setSelectedProject}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Blueprint / Spec Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
