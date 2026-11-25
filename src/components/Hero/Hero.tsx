"use client";
import { motion } from "motion/react";

const metrics = [
  { value: "3+", label: "Years building" },
  { value: "15+", label: "Projects shipped" },
  { value: "4", label: "Merged OSS PRs" },
  { value: "350+", label: "Docker pulls (MLCore)" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/Amanbig" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/amanpreet-singh-9a1929211" },
  { label: "Email", href: "mailto:amanpreetsinghjhiwant7@gmail.com" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16">
      <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none"
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="inline-flex items-center gap-2 font-mono text-xs md:text-sm text-zinc-400 border border-zinc-800 rounded-full px-3 py-1.5 bg-zinc-900/60">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Backend Developer @ Code Samdevx
          </p>

          <h1 className="mt-8 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05]">
            Hi, I&apos;m Amanpreet.
            <br />
            <span className="text-zinc-500">I build backends that </span>
            <span className="text-accent">scale.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-zinc-400 leading-relaxed">
            Backend &amp; systems engineer specializing in Python, Go, Kubernetes observability, and applied AI. I build
            scalable APIs, developer tooling, and contribute to{" "}
            <a
              href="https://github.com/deepset-ai/haystack"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-200 underline decoration-zinc-700 underline-offset-4 hover:decoration-accent"
            >
              deepset-ai/haystack
            </a>
            .
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-md bg-accent text-zinc-950 font-semibold hover:brightness-110 transition"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-md border border-zinc-700 text-zinc-200 hover:border-zinc-500 transition"
            >
              Get in touch
            </a>
            <div className="flex items-center gap-4 ml-1 font-mono text-sm text-zinc-500">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-800 border border-zinc-800 rounded-xl overflow-hidden"
        >
          {metrics.map((m) => (
            <div key={m.label} className="bg-zinc-950 p-6">
              <dt className="sr-only">{m.label}</dt>
              <dd className="text-3xl md:text-4xl font-bold text-white">{m.value}</dd>
              <p className="mt-1 text-sm text-zinc-500">{m.label}</p>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
