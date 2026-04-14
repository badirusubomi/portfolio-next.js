"use client";

import { skills } from "@/lib/mockData";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-background relative border-t border-border/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(245,166,35,0.02)_0%,_transparent_50%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <div className="mb-12">
          <span className="inline-flex items-center gap-3 font-mono text-xs tracking-widest text-foreground-muted uppercase mb-4">
            <span className="w-8 h-px bg-accent" />
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Skills & Technologies
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCategory title="Languages" items={skills.languages} />
          <SkillCategory title="Frameworks" items={skills.frameworks} />
          <SkillCategory title="AI & Data" items={skills.aiData} />
          <SkillCategory title="DevOps" items={skills.devops} />
          <SkillCategory title="Networking" items={skills.networking} />
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="p-6 border border-border/50 rounded-2xl bg-foreground/[0.02] hover:bg-foreground/[0.04] transition-all duration-300 group">
      <h3 className="text-xl font-medium mb-6 text-foreground group-hover:text-accent transition-colors">{title}</h3>
      <ul className="flex flex-wrap gap-2 mt-auto">
        {items.map((item) => (
          <li
            key={item}
            className="px-3 py-1.5 bg-background text-foreground-muted rounded-full text-xs font-mono tracking-wider border border-border/50 shadow-sm"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
