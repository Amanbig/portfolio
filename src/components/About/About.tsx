"use client";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const highlights = [
  {
    title: "Backend Engineer",
    desc: "Specialize in FastAPI, RAG pipelines, and Dockerized ML platforms for production.",
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  {
    title: "OSS Contributor",
    desc: "Merged PRs in deepset-ai/haystack and haystack-core-integrations.",
    badge: "bg-green-500/10 text-green-400 border-green-500/20",
  },
  {
    title: "Full-Stack Capable",
    desc: "Build end-to-end with Next.js, Flutter, NestJS on top of strong backends.",
    badge: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  },
  {
    title: "Developer Tooling",
    desc: "Creator of RunAPI (PyPI) & backTool (npm) — frameworks used by real developers.",
    badge: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  },
];

const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Shipped", value: "15+" },
  { label: "OSS PRs Merged", value: "4" },
  { label: "Docker Pulls", value: "350+" },
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
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="text-primary text-sm font-mono uppercase tracking-widest mb-2">About</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Who I Am</h2>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Main bio */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex-1 space-y-5"
        >
          <p className="text-foreground leading-relaxed">
            Hi there! I&apos;m{" "}
            <span className="font-semibold text-primary">Amanpreet Singh</span> — a{" "}
            <span className="font-semibold">Backend Engineer</span> specializing in FastAPI,
            scalable systems, and applied AI with over{" "}
            <span className="font-semibold">3 years of experience</span>.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I&apos;ve built RAG pipelines for government clients, published open-source frameworks
            like{" "}
            <a
              href="https://github.com/Amanbig/runapi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline underline-offset-4"
            >
              RunAPI
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/Amanbig/MLCore"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline underline-offset-4"
            >
              MLCore
            </a>
            , and contributed merged PRs to{" "}
            <span className="text-foreground font-medium">deepset-ai/haystack</span>.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            When not building backends, I craft mobile apps with Flutter, explore game development,
            and enjoy working on developer tooling that makes engineers&apos; lives easier.
          </p>

          <Separator />

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Interests</h3>
            <ul className="space-y-2">
              {interests.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:w-72 space-y-4"
        >
          {/* Avatar card */}
          <Card className="border-border">
            <CardContent className="pt-6 text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-cyan-500/30 border-2 border-primary/20 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary">
                AS
              </div>
              <p className="font-semibold text-foreground">Amanpreet Singh</p>
              <p className="text-sm text-muted-foreground mt-0.5">Backend Engineer</p>
              <p className="text-xs text-muted-foreground mt-0.5">Chandigarh, India</p>

              <div className="flex justify-center gap-4 mt-4">
                {[
                  { label: "GH", href: "https://github.com/Amanbig" },
                  { label: "LI", href: "https://www.linkedin.com/in/amanpreet-singh-9a1929211" },
                  { label: "Mail", href: "mailto:amanpreetsinghjhiwant7@gmail.com" },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Stats */}
          <Card className="border-border">
            <CardContent className="pt-5 pb-4">
              <div className="grid grid-cols-2 gap-4">
                {stats.map(({ label, value }) => (
                  <div key={label} className="text-center">
                    <p className="text-xl font-bold text-foreground">{value}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Highlight cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
        {highlights.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
          >
            <Card className="border-border h-full hover:bg-accent/30 transition-colors">
              <CardContent className="pt-5">
                <Badge variant="outline" className={`text-xs mb-3 ${h.badge}`}>
                  {h.title}
                </Badge>
                <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
