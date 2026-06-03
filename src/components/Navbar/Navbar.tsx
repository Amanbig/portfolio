"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#timeline", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    links.forEach(({ href }) => {
      const el = document.getElementById(href.slice(1));
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => { if (e.isIntersecting) setActiveSection(href.slice(1)); }),
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
            AS
          </div>
          <span className="font-semibold text-foreground hidden sm:block tracking-tight">
            Amanpreet Singh
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                activeSection === href.slice(1)
                  ? "text-foreground bg-accent"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/60"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button size="sm" className="hidden md:inline-flex" asChild>
            <a href="/resume/Amanpreet_s_Resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/60 transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="block w-4 h-0.5 bg-current mb-1 transition-all" />
            <span className="block w-4 h-0.5 bg-current mb-1 transition-all" />
            <span className="block w-4 h-0.5 bg-current transition-all" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-4 pb-4">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {label}
            </a>
          ))}
          <Button size="sm" className="mt-3 w-full" asChild>
            <a href="/resume/Amanpreet_s_Resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
        </div>
      )}
    </motion.header>
  );
}
