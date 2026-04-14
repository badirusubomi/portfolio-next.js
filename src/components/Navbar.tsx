"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        {/* ── Logo ── */}
        <Link
          href="/"
          className="font-mono text-sm tracking-widest text-foreground-muted hover:text-accent transition-colors duration-300 uppercase"
        >
          OB.
        </Link>

        {/* ── Desktop Nav ── */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-sm text-foreground-muted hover:text-foreground transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:badirusubomi@icloud.com"
              className="group relative inline-flex items-center justify-center -m-1 p-1"
            >
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative px-5 py-2 bg-background border border-border rounded-full text-sm font-medium text-foreground-muted hover:text-accent hover:border-accent shadow-[0_0_15px_rgba(245,166,35,0.05)] hover:shadow-[0_0_20px_rgba(245,166,35,0.15)] transition-all duration-300 overflow-hidden transform group-hover:scale-[1.02] active:scale-[0.98]">
                {/* ── Shimmer Effect ── */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-accent/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] transition-transform" />
                <span className="relative z-10">Say Hello</span>
              </div>
            </a>
          </li>
        </ul>

        {/* ── Mobile Toggle ── */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          <span
            className={`block w-5 h-px bg-foreground transition-transform duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[4px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-foreground transition-opacity duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-foreground transition-transform duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[4px]" : ""
            }`}
          />
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-6 pb-6 space-y-4 border-t border-border pt-4">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-foreground-muted hover:text-foreground transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:badirusubomi@icloud.com"
              className="group relative inline-flex items-center justify-center p-1 w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-full px-5 py-2.5 bg-background border border-border rounded-full text-sm font-medium text-foreground-muted hover:text-accent hover:border-accent text-center shadow-[0_0_15px_rgba(245,166,35,0.05)] transition-all duration-300 overflow-hidden transform group-hover:scale-[1.01] active:scale-[0.98]">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-accent/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] transition-transform" />
                <span className="relative z-10">Say Hello</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
