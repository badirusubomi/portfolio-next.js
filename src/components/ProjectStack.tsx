"use client";

import { useRef } from "react";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "@/lib/mockData";

interface ProjectStackProps {
  projects: Project[];
}

export function ProjectStack({ projects }: ProjectStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="projects" className="relative">
      {/* ── Section Header ── */}
      <div className="mx-auto max-w-6xl px-6 pt-32 pb-12">
        <div className="flex items-center gap-6 mb-4">
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            01
          </span>
          <div className="h-px flex-1 bg-border animate-line-expand" />
        </div>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Selected Work
        </h2>
        <p className="text-foreground-muted mt-3 max-w-xl">
          A curated collection of projects spanning AI systems, data engineering,
          and community impact.
        </p>
      </div>

      {/* ── Sticky Scroll Container ── */}
      <div ref={containerRef} className="mx-auto max-w-6xl px-6">
        {projects.map((project, i) => (
          <ProjectCard
            key={project._id}
            project={project}
            index={i}
            total={projects.length}
            containerRef={containerRef}
          />
        ))}
      </div>
    </section>
  );
}
