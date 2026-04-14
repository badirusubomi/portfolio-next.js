"use client";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Subtle background gradient ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,166,35,0.04)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-32">
        <div className="max-w-4xl">
          {/* ── Eyebrow ── */}
          <div className="animate-fade-up mb-8">
            <span className="inline-flex items-center gap-3 font-mono text-xs tracking-widest text-foreground-muted uppercase">
              <span className="w-8 h-px bg-accent" />
              AI, Analytics & Web Developer
            </span>
          </div>

          {/* ── Name ── */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tighter leading-[0.9] animate-fade-up delay-100">
            <span className="block">Olasubomi</span>
            <span className="block text-foreground-muted">Badiru</span>
          </h1>

          {/* ── Bio ── */}
          <p className="mt-8 text-lg md:text-xl text-foreground-muted leading-relaxed max-w-2xl animate-fade-up delay-300">
            Building scalable AI-driven systems, RAG pipelines, and high-performance
            web applications. Turning complex problems into elegant, production-ready
            solutions.
          </p>

          {/* ── CTA Row ── */}
          <div className="mt-12 flex flex-wrap items-center gap-6 animate-fade-up delay-500">
            <a
              href="#projects"
              id="cta-view-work"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-full hover:bg-accent hover:text-background transition-all duration-300 text-sm"
            >
              View Work
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M8 3v10M4 9l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="mailto:badirusubomi@icloud.com"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full text-foreground-muted hover:text-accent hover:border-accent transition-all duration-300 text-sm"
            >
              Get in Touch
            </a>
          </div>

          {/* ── Scroll indicator ── */}
          <div className="absolute bottom-12 left-6 hidden md:flex items-center gap-3 animate-fade-in delay-800">
            <div className="w-px h-12 bg-border relative overflow-hidden">
              <div className="absolute top-0 w-full h-4 bg-accent animate-[scrollPulse_2s_ease-in-out_infinite]" />
            </div>
            <span className="text-xs text-foreground-dim font-mono tracking-wider uppercase vertical-text">
              Scroll
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollPulse {
          0%, 100% { transform: translateY(-100%); }
          50% { transform: translateY(300%); }
        }
        .vertical-text {
          writing-mode: vertical-lr;
        }
      `}</style>
    </section>
  );
}
