"use client";
import { useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { gsap } from "gsap";
import { Separator } from "@/components/ui/separator";

function CountStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const num = parseInt(value);
  const suffix = value.replace(/\d+/, "");

  useEffect(() => {
    if (!isInView || !ref.current || isNaN(num)) return;
    const obj = { val: 0 };
    gsap.to(obj, {
      val: num,
      duration: 1.4,
      ease: "power2.out",
      onUpdate() {
        if (ref.current) ref.current.textContent = Math.floor(obj.val) + suffix;
      },
    });
  }, [isInView, num, suffix]);

  return (
    <div className="rounded-xl border border-border bg-card px-4 py-4 text-center hover:bg-accent/30 transition-colors">
      <p ref={ref} className="text-2xl font-bold text-foreground">0{suffix}</p>
      <p className="text-xs text-muted-foreground mt-1 leading-tight">{label}</p>
    </div>
  );
}

const highlights = [
  {
    icon: "⚙️",
    title: "Backend Engineering",
    desc: "FastAPI, RAG pipelines, Dockerized ML platforms for production at scale.",
    accent: "from-blue-500/20 to-blue-500/5",
    border: "border-blue-500/20",
    tag: "text-blue-400",
  },
  {
    icon: "🌐",
    title: "OSS Contributor",
    desc: "Merged PRs in deepset-ai/haystack and haystack-core-integrations.",
    accent: "from-green-500/20 to-green-500/5",
    border: "border-green-500/20",
    tag: "text-green-400",
  },
  {
    icon: "🚀",
    title: "Full-Stack Capable",
    desc: "End-to-end with Next.js, Flutter, NestJS on top of strong backend foundations.",
    accent: "from-purple-500/20 to-purple-500/5",
    border: "border-purple-500/20",
    tag: "text-purple-400",
  },
  {
    icon: "🛠️",
    title: "Developer Tooling",
    desc: "Creator of RunAPI (PyPI) & backTool (npm) — frameworks used by real developers.",
    accent: "from-amber-500/20 to-amber-500/5",
    border: "border-amber-500/20",
    tag: "text-amber-400",
  },
];

const stats = [
  { value: "3+",    label: "Years Experience" },
  { value: "15+",   label: "Projects Shipped" },
  { value: "4",     label: "OSS PRs Merged" },
  { value: "769+",  label: "Docker Pulls" },
];

const interests = [
  "Backend Engineering & System Design",
  "AI/ML & RAG Systems",
  "Developer Tooling & CLI Frameworks",
  "Mobile Apps (Flutter iOS/Android)",
  "Open Source Contributions",
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="text-primary text-sm font-mono uppercase tracking-widest mb-2">About</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Who I Am</h2>
      </motion.div>

      {/* Bio + Stats row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2 space-y-4"
        >
          <p className="text-foreground leading-relaxed text-base">
            Hi! I&apos;m{" "}
            <span className="font-semibold text-primary">Amanpreet Singh</span> — a{" "}
            <span className="font-semibold">Backend Engineer</span> specializing in FastAPI,
            scalable systems, and applied AI with over{" "}
            <span className="font-semibold text-foreground">3 years of experience</span>.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I&apos;ve built RAG pipelines for government clients (JAC, NDMC), published
            open-source frameworks like{" "}
            <a href="https://github.com/Amanbig/runapi" target="_blank" rel="noopener noreferrer"
              className="text-primary hover:underline underline-offset-4">RunAPI</a>{" "}
            and{" "}
            <a href="https://github.com/Amanbig/MLCore" target="_blank" rel="noopener noreferrer"
              className="text-primary hover:underline underline-offset-4">MLCore</a>
            , and contributed merged PRs to{" "}
            <span className="text-foreground font-medium">deepset-ai/haystack</span>.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            When not building backends, I craft mobile apps with Flutter, explore game development,
            and enjoy working on developer tooling that makes engineers&apos; lives easier.
          </p>

          <Separator className="my-2" />

          {/* Interests */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
            {interests.map(item => (
              <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 gap-3 content-start"
        >
          {stats.map(({ value, label }) => (
            <CountStat key={label} value={value} label={label} />
          ))}
        </motion.div>
      </div>

      {/* Highlight cards */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <p className="text-xs text-muted-foreground uppercase tracking-widest font-mono mb-4">
          What I bring
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className={`relative rounded-xl border ${h.border} bg-gradient-to-b ${h.accent} p-5 hover:scale-[1.02] transition-transform`}
            >
              <span className="text-2xl mb-3 block">{h.icon}</span>
              <p className={`text-sm font-semibold mb-1.5 ${h.tag}`}>{h.title}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
