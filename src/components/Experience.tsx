"use client";

import { useRef, useEffect, useState } from "react";
import {
  experiences,
  education,
  certifications,
  type Experience as ExperienceType,
} from "@/lib/mockData";

function TimelineEntry({
  experience,
  index,
}: {
  experience: ExperienceType;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative pl-8 pb-16 last:pb-0 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-accent bg-background" />
      {/* Timeline line */}
      <div className="absolute left-[5px] top-5 bottom-0 w-px bg-border" />

      <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4 mb-2">
        <h3 className="text-lg font-semibold tracking-tight">
          {experience.role}
        </h3>
        <span className="text-foreground-muted text-sm">
          {experience.company}
        </span>
      </div>

      <span className="inline-block font-mono text-xs text-foreground-dim tracking-wide mb-4">
        {experience.period}
      </span>

      <ul className="space-y-2">
        {experience.description.map((item, i) => (
          <li
            key={i}
            className="text-foreground-muted text-sm leading-relaxed pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-foreground-dim"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* ── Section Header ── */}
        <div className="flex items-center gap-6 mb-4">
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            02
          </span>
          <div
            className={`h-px flex-1 bg-border transition-transform duration-1000 origin-left ${
              sectionVisible ? "scale-x-100" : "scale-x-0"
            }`}
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Experience
          </h2>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-mono text-foreground-muted hover:text-accent transition-colors duration-300"
          >
            <span className="relative">
              View Full Resume
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
            </span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path
                d="M4.5 11.5l7-7M5 4h7v7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* ── Timeline ── */}
          <div className="lg:col-span-3">
            {experiences.map((exp, i) => (
              <TimelineEntry key={exp.id} experience={exp} index={i} />
            ))}
          </div>

          {/* ── Sidebar: Education & Certs ── */}
          <div className="lg:col-span-2 space-y-12">
            {/* Education */}
            <div className="glass-card p-8">
              <h3 className="font-mono text-xs text-accent tracking-widest uppercase mb-6">
                Education
              </h3>
              <h4 className="text-base font-semibold tracking-tight mb-1">
                {education.degree}
              </h4>
              <p className="text-foreground-muted text-sm mb-1">
                {education.institution} — {education.location}
              </p>
              <p className="font-mono text-xs text-foreground-dim mb-4">
                {education.period} · GPA {education.gpa}
              </p>
              <div className="flex flex-wrap gap-2">
                {education.honors.map((h) => (
                  <span key={h} className="tag-pill">
                    {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="glass-card p-8">
              <h3 className="font-mono text-xs text-accent tracking-widest uppercase mb-6">
                Certifications
              </h3>
              <ul className="space-y-3">
                {certifications.map((cert) => (
                  <li
                    key={cert}
                    className="text-sm text-foreground-muted flex items-start gap-2"
                  >
                    <span className="text-accent mt-1 flex-shrink-0">✦</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
