export function Contact() {
  return (
    <section id="contact" className="py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        {/* ── Section Header ── */}
        <div className="flex items-center gap-6 mb-4">
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            03
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Let&apos;s work
              <br />
              <span className="text-foreground-muted">together.</span>
            </h2>
            <p className="text-foreground-muted max-w-md leading-relaxed">
              Always open to interesting projects, collaborations, or
              conversations about AI, data, and technology.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-6">
            <a
              href="mailto:badirusubomi@icloud.com"
              id="contact-email"
              className="group flex items-center gap-3 text-lg md:text-xl font-medium hover:text-accent transition-colors duration-300"
            >
              badirusubomi@icloud.com
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7v10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <div className="flex items-center gap-6">
              {/* GitHub */}
              <a
                href="https://github.com/badirusubomi"
                target="_blank"
                rel="noopener noreferrer"
                id="social-github"
                className="text-foreground-dim hover:text-foreground transition-colors duration-300"
                aria-label="GitHub profile"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/badirusubomi"
                target="_blank"
                rel="noopener noreferrer"
                id="social-linkedin"
                className="text-foreground-dim hover:text-foreground transition-colors duration-300"
                aria-label="LinkedIn profile"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* Phone */}
              <a
                href="tel:+17802009763"
                className="text-foreground-dim hover:text-foreground transition-colors duration-300"
                aria-label="Phone number"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="mt-24 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs text-foreground-dim">
            © {new Date().getFullYear()} Olasubomi Badiru
          </span>
          <span className="font-mono text-xs text-foreground-dim">
            Built with Next.js · Designed with intention
          </span>
        </div>
      </div>
    </section>
  );
}
