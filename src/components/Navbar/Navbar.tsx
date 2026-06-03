"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About",      index: 1 },
  { label: "Skills",     index: 2 },
  { label: "Projects",   index: 3 },
  { label: "Experience", index: 4 },
  { label: "Contact",    index: 5 },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-8 h-8" />;
  const isDark = theme === "dark";
  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="w-8 h-8 flex items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-accent/60 transition-colors"
    >
      {isDark ? (
        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

interface NavbarProps {
  currentPage?: number;
  onNavigate?: (i: number) => void;
}

export default function Navbar({ currentPage = 0, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = (index: number) => {
    onNavigate?.(index);
    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || currentPage !== 0
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => navigate(0)} className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
            AS
          </div>
          <span className="font-semibold text-foreground hidden sm:block tracking-tight">
            Amanpreet Singh
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, index }) => (
            <button
              key={label}
              onClick={() => navigate(index)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                currentPage === index
                  ? "text-foreground bg-accent"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/60"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="/resume/Amanpreet_s_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "sm" }), "hidden md:inline-flex")}
          >
            Resume
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/60 transition-colors"
            onClick={() => setMenuOpen(v => !v)}
          >
            <span className="block w-4 h-0.5 bg-current mb-1" />
            <span className="block w-4 h-0.5 bg-current mb-1" />
            <span className="block w-4 h-0.5 bg-current" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-4 pb-4">
          {NAV_LINKS.map(({ label, index }) => (
            <button
              key={label}
              onClick={() => navigate(index)}
              className="block w-full text-left py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {label}
            </button>
          ))}
          <a
            href="/resume/Amanpreet_s_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "sm" }), "mt-3 w-full justify-center")}
          >
            Resume
          </a>
        </div>
      )}
    </motion.header>
  );
}
