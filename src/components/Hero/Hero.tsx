"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const roles = ["Backend Engineer", "OSS Contributor", "API Developer", "Systems Builder"];

const topSkills = ["FastAPI", "Python", "Next.js", "Docker", "RAG"];

const stats = [
  { value: "3+",   label: "Years Exp." },
  { value: "15+",  label: "Projects" },
  { value: "4",    label: "OSS PRs" },
  { value: "769+", label: "Docker Pulls" },
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
      <div className="absolute -top-20 -right-20 w-[480px] h-[480px] rounded-full blur-3xl pointer-events-none animate-orb-1"
        style={{ background: "radial-gradient(circle, oklch(0.60 0.18 241 / 18%), transparent 70%)" }} />
      <div className="absolute -bottom-32 -left-20 w-[520px] h-[520px] rounded-full blur-3xl pointer-events-none animate-orb-2"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.20 280 / 14%), transparent 70%)" }} />
      <div className="absolute top-1/2 -left-16 w-[320px] h-[320px] rounded-full blur-3xl pointer-events-none animate-orb-3"
        style={{ background: "radial-gradient(circle, oklch(0.72 0.15 200 / 10%), transparent 70%)" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/80 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-center">

          {/* ── Left ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div>
              <Badge variant="secondary" className="text-xs tracking-wide px-3 py-1 mb-6">
                Open to new opportunities
              </Badge>

              <h1 className="text-6xl sm:text-7xl font-bold tracking-tight leading-[1.05]">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-primary via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Amanpreet
                </span>
              </h1>
            </div>

            {/* Animated role — clearly visible */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-primary/60 flex-shrink-0" />
              <div className="h-8 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={roleIndex}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.3 }}
                    className="text-xl sm:text-2xl font-semibold text-foreground/80"
                  >
                    {roles[roleIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-lg">
              Building scalable backends with{" "}
              <span className="text-foreground font-semibold">FastAPI & Python</span>,
              contributing to open-source AI frameworks, and shipping tools that
              developers actually use.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="text-sm px-6" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button size="lg" variant="outline" className="text-sm px-6" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-6 pt-1">
              {socials.map(({ href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Profile card ──────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="rounded-2xl border border-border/60 bg-card/50 backdrop-blur-md overflow-hidden"
              style={{ boxShadow: "0 0 40px oklch(0.60 0.18 241 / 8%), 0 1px 0 oklch(1 0 0 / 5%) inset" }}
            >
              {/* Card top gradient bar */}
              <div className="h-1 w-full bg-gradient-to-r from-primary via-blue-400 to-cyan-400" />

              <div className="p-6 space-y-5">
                {/* Avatar + name */}
                <div className="flex items-center gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center text-lg font-bold text-white">
                      AS
                    </div>
                    {/* Online indicator */}
                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-400 border-2 border-card" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-base">Amanpreet Singh</p>
                    <p className="text-sm text-muted-foreground">Backend Engineer</p>
                    <p className="text-xs text-muted-foreground/70 mt-0.5">📍 Chandigarh, India</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-border" />

                {/* Stats */}
                <div className="grid grid-cols-2 gap-2">
                  {stats.map(({ value, label }) => (
                    <div key={label}
                      className="rounded-lg bg-background/60 border border-border/50 px-3 py-3 text-center hover:border-primary/30 transition-colors">
                      <p className="text-xl font-bold text-foreground">{value}</p>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-border" />

                {/* Top skills */}
                <div>
                  <p className="text-[10px] text-muted-foreground/60 mb-2.5 uppercase tracking-widest font-mono">
                    Top Skills
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {topSkills.map(s => (
                      <span key={s}
                        className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20 font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-border" />

                {/* Action buttons */}
                <div className="grid grid-cols-2 gap-2">
                  <a href="https://github.com/Amanbig" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 text-xs font-medium py-2 px-3 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground transition-all">
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    GitHub ↗
                  </a>
                  <a href="/resume/Amanpreet_s_Resume.pdf" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 text-xs font-medium py-2 px-3 rounded-lg bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-all">
                    Resume ↓
                  </a>
                </div>
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
          className="w-5 h-8 border-2 border-border/50 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
