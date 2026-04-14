"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/lib/mockData";

interface ProjectCardProps {
  project: Project;
  index: number;
  total: number;
  containerRef: React.RefObject<HTMLElement | null>;
}

export function ProjectCard({
  project,
  index,
  total,
  containerRef,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    container: containerRef,
    offset: ["start end", "start start"],
  });

  /* ── Scale & opacity transforms ── */
  const targetScale = 1 - (total - index) * 0.02;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  const stickyTop = 80 + index * 24;

  return (
    <div
      ref={cardRef}
      style={{ height: "100vh" }}
    >
      <motion.div
        style={{
          scale,
          opacity,
          top: `${stickyTop}px`,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 30,
        }}
        className="sticky glass-card overflow-hidden"
      >
        <Link
          href={`/project/${project.slug.current}`}
          id={`project-card-${project.slug.current}`}
          className="block group"
        >
          <div className="flex flex-col lg:flex-row">
            {/* ── Image ── */}
            <div className="relative lg:w-3/5 aspect-video lg:aspect-auto overflow-hidden">
              <div
                className="w-full h-full min-h-[280px] lg:min-h-[420px] bg-surface transition-transform duration-700 ease-out group-hover:-translate-y-1"
                style={{
                  backgroundImage: `url(${project.thumbnail})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* ── Content ── */}
            <div className="flex flex-col justify-center p-8 lg:p-12 lg:w-2/5">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight mb-4 group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-foreground-muted leading-relaxed text-sm lg:text-base mb-6">
                {project.summary}
              </p>

              <span className="inline-flex items-center gap-2 text-sm text-accent font-mono group-hover:gap-3 transition-all duration-300">
                View Project
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
