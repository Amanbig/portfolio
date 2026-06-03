"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const roles = [
  "Backend Engineer",
  "OSS Contributor",
  "API Developer",
  "Systems Builder",
];

const topSkills = ["FastAPI", "Python", "Next.js", "Docker", "RAG"];

const stats = [
  { value: "3+",   label: "Years" },
  { value: "15+",  label: "Projects" },
  { value: "4",    label: "OSS PRs" },
  { value: "769+", label: "Docker" },
];

const socials = [
  { label: "GitHub",   href: "https://github.com/Amanbig" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/amanpreet-singh-9a1929211" },
  { label: "Email",    href: "mailto:amanpreetsinghjhiwant7@gmail.com" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex(i => (i + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div
        className="absolute -top-20 -right-20 w-[480px] h-[480px] rounded-full blur-3xl pointer-events-none animate-orb-1"
        style={{ background: "radial-gradient(circle, oklch(0.60 0.18 241 / 18%), transparent 70%)" }}
      />
      <div
        className="absolute -bottom-32 -left-20 w-[520px] h-[520px] rounded-full blur-3xl pointer-events-none animate-orb-2"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.20 280 / 14%), transparent 70%)" }}
      />
      <div
        className="absolute top-1/2 -left-16 w-[320px] h-[320px] rounded-full blur-3xl pointer-events-none animate-orb-3"
        style={{ background: "radial-gradient(circle, oklch(0.72 0.15 200 / 10%), transparent 70%)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/80 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Main copy ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            <Badge variant="secondary" className="text-xs tracking-wide px-3 py-1">
              Open to new opportunities
            </Badge>

            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-none">
                Hi, I&apos;m
              </h1>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-none bg-gradient-to-r from-primary via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Amanpreet
              </h1>
            </div>

            {/* Animated role */}
            <div className="h-9 flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl sm:text-2xl font-semibold text-muted-foreground"
                >
                  {roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            <p className="text-muted-foreground text-base leading-relaxed max-w-md">
              Building scalable backends with{" "}
              <span className="text-foreground font-medium">FastAPI & Python</span>,
              contributing to open-source AI frameworks, and shipping tools that
              developers actually use.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>

            <div className="flex items-center gap-5 pt-1">
              {socials.map(({ href, label }) => (
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

          {/* ── Right: Profile card ──────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="hidden lg:flex justify-center"
          >
            <div className="w-full max-w-sm rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-6 space-y-5">
              {/* Avatar + name */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/40 to-cyan-500/30 border border-primary/20 flex items-center justify-center text-xl font-bold text-primary flex-shrink-0">
                  AS
                </div>
                <div>
                  <p className="font-semibold text-foreground">Amanpreet Singh</p>
                  <p className="text-sm text-muted-foreground">Backend Engineer</p>
                  <p className="text-xs text-muted-foreground mt-0.5">📍 Chandigarh, India</p>
                </div>
              </div>

              <Separator />

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3">
                {stats.map(({ value, label }) => (
                  <div
                    key={label}
                    className="rounded-lg bg-background/60 border border-border/50 px-3 py-2.5 text-center"
                  >
                    <p className="text-xl font-bold text-foreground">{value}</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">{label}</p>
                  </div>
                ))}
              </div>

              <Separator />

              {/* Top skills */}
              <div>
                <p className="text-xs text-muted-foreground mb-2 uppercase tracking-widest font-mono">
                  Top Skills
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {topSkills.map(s => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20 font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Social links */}
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1 text-xs" asChild>
                  <a href="https://github.com/Amanbig" target="_blank" rel="noopener noreferrer">
                    GitHub ↗
                  </a>
                </Button>
                <Button size="sm" variant="outline" className="flex-1 text-xs" asChild>
                  <a href="/resume/Amanpreet_s_Resume.pdf" target="_blank" rel="noopener noreferrer">
                    Resume ↓
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
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
