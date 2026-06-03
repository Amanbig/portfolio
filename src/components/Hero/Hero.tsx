"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const roles = [
  "Backend Engineer",
  "OSS Contributor",
  "API Developer",
  "Systems Builder",
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Amanbig" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/amanpreet-singh-9a1929211" },
  { label: "Email", href: "mailto:amanpreetsinghjhiwant7@gmail.com" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      {/* Orb 1 — blue, top-right */}
      <div
        className="absolute -top-20 -right-20 w-[480px] h-[480px] rounded-full blur-3xl pointer-events-none animate-orb-1"
        style={{ background: "radial-gradient(circle, oklch(0.60 0.18 241 / 18%), transparent 70%)" }}
      />
      {/* Orb 2 — purple, bottom-left */}
      <div
        className="absolute -bottom-32 -left-20 w-[520px] h-[520px] rounded-full blur-3xl pointer-events-none animate-orb-2"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.20 280 / 14%), transparent 70%)" }}
      />
      {/* Orb 3 — cyan, mid-left */}
      <div
        className="absolute top-1/2 -left-16 w-[320px] h-[320px] rounded-full blur-3xl pointer-events-none animate-orb-3"
        style={{ background: "radial-gradient(circle, oklch(0.72 0.15 200 / 10%), transparent 70%)" }}
      />

      {/* Vignette fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/80 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6"
        >
          <Badge variant="secondary" className="text-xs tracking-wide px-3 py-1">
            Open to new opportunities
          </Badge>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-none">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-primary via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Amanpreet
            </span>
          </h1>

          {/* Animated role */}
          <div className="h-10 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35 }}
                className="text-2xl sm:text-3xl font-semibold text-muted-foreground"
              >
                {roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Building scalable backends with{" "}
            <span className="text-foreground font-medium">FastAPI & Python</span>, contributing to
            open-source AI frameworks, and shipping tools that developers actually use.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Button size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-8 pt-2">
            {socialLinks.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-border rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-muted-foreground rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
