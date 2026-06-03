"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const events = [
  {
    id: "1",
    role: "Backend Developer",
    company: "Code Samdevx",
    type: "work" as const,
    date: "Dec 2025 – Present",
    duration: "6 mo",
    current: true,
    description:
      "Architecting the Mr. Manager backend using FastAPI and SQLAlchemy, integrating Grafana for real-time monitoring, and implementing automated CI/CD pipelines for high availability.",
    tags: ["FastAPI", "SQLAlchemy", "Grafana", "CI/CD"],
  },
  {
    id: "2",
    role: "Full Stack Developer Intern",
    company: "Vexocore",
    type: "work" as const,
    date: "Sep 2025 – Dec 2025",
    duration: "3 mo",
    current: false,
    description:
      "Spearheaded Prishigo, a Rapido-style ride-sharing platform (Flutter + ExpressJS) with real-time GPS tracking and scalable request matching. Built Meetgrow event platform with ticketing, payments, and Admin/Organizer panels.",
    tags: ["Flutter", "ExpressJS", "Next.js", "Supabase"],
  },
  {
    id: "3",
    role: "Full Stack Developer Intern",
    company: "Lafleurtech",
    type: "work" as const,
    date: "Mar 2025 – Sep 2025",
    duration: "6 mo",
    current: false,
    description:
      "Engineered end-to-end RAG systems for government clients (JAC, NDMC). Built a scalable platform enabling users to ingest and query custom datasets into AI pipelines, reducing response times by over 40%.",
    tags: ["RAG", "Python", "FastAPI", "AI"],
  },
  {
    id: "4",
    role: "Flutter Developer Intern",
    company: "Celebrare",
    type: "work" as const,
    date: "Dec 2024 – Mar 2025",
    duration: "3 mo",
    current: false,
    description:
      "Launched 5+ major features across Celebrare and WowInvite iOS apps using Flutter, optimizing UI performance and driving a 15% increase in user engagement.",
    tags: ["Flutter", "iOS", "Dart"],
  },
  {
    id: "5",
    role: "B.E. Computer Science & Engineering",
    company: "CCET, Chandigarh",
    type: "education" as const,
    date: "Dec 2021 – June 2025",
    duration: "3.5 yr",
    current: false,
    description:
      "Bachelor's degree from Chandigarh College of Engineering and Technology. CGPA: 8.0/10. Specialized in web development, AI, and distributed systems.",
    tags: ["Education", "CSE", "CGPA: 8.0"],
  },
];

/* total months for proportional bar */
const totalMonths = 42; // ~3.5 years span

const durationMonths: Record<string, number> = {
  "1": 6, "2": 3, "3": 6, "4": 3, "5": 42,
};

const typeStyle = {
  work:      { dot: "bg-primary",   line: "bg-primary/60",   badge: "bg-primary/10 text-primary border-primary/20",     label: "Work" },
  education: { dot: "bg-amber-400", line: "bg-amber-400/60", badge: "bg-amber-400/10 text-amber-400 border-amber-400/20", label: "Education" },
};

export default function Timeline() {
  const [expanded, setExpanded] = useState<string | null>("1");

  return (
    <section id="timeline" className="scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="text-primary text-sm font-mono uppercase tracking-widest mb-2">Experience</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Where I&apos;ve Worked</h2>
      </motion.div>

      {/* Experience duration bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 rounded-xl border border-border bg-card p-5"
      >
        <p className="text-xs font-mono text-muted-foreground mb-3 uppercase tracking-widest">
          Career Timeline · 3+ years
        </p>
        <div className="flex h-3 rounded-full overflow-hidden gap-px bg-muted">
          {events.map((e, i) => {
            const months = durationMonths[e.id] ?? 3;
            const pct = Math.round((months / totalMonths) * 100);
            const colors = [
              "#3b82f6", "#6366f1", "#8b5cf6", "#0ea5e9", "#f59e0b",
            ];
            return (
              <motion.div
                key={e.id}
                className="h-full first:rounded-l-full last:rounded-r-full"
                style={{ backgroundColor: colors[i], width: `${pct}%` }}
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
                title={`${e.role} @ ${e.company} (${e.duration})`}
              />
            );
          })}
        </div>
        <div className="flex flex-wrap gap-3 mt-3">
          {events.map((e, i) => {
            const colors = ["#3b82f6", "#6366f1", "#8b5cf6", "#0ea5e9", "#f59e0b"];
            return (
              <div key={e.id} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: colors[i] }} />
                {e.company}
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Timeline items */}
      <div className="relative">
        <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-border to-border" />

        <div className="space-y-4">
          {events.map((event, i) => {
            const ts = typeStyle[event.type];
            const isOpen = expanded === event.id;

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="relative pl-9"
              >
                {/* Dot */}
                <button
                  onClick={() => setExpanded(isOpen ? null : event.id)}
                  className={`absolute left-0 top-4 w-[22px] h-[22px] rounded-full border-2 border-background z-10 flex items-center justify-center transition-all ${ts.dot} ${
                    event.current ? "shadow-[0_0_12px_oklch(0.604_0.173_241.3_/_50%)]" : ""
                  }`}
                >
                  {event.current && (
                    <span className="w-2 h-2 rounded-full bg-primary-foreground" />
                  )}
                </button>

                {/* Card */}
                <div
                  onClick={() => setExpanded(isOpen ? null : event.id)}
                  className={`rounded-xl border cursor-pointer transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "border-border/80 bg-card/80"
                      : "border-border bg-card hover:bg-accent/20"
                  }`}
                  style={{
                    borderLeft: `3px solid ${event.type === "work" ? "oklch(0.604 0.173 241.3)" : "#fbbf24"}`,
                  }}
                >
                  <div className="px-5 pt-4 pb-3">
                    {/* Top row */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-0.5">
                          <span className="font-semibold text-foreground text-sm leading-tight">
                            {event.role}
                          </span>
                          {event.current && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/25 font-medium">
                              Current
                            </span>
                          )}
                          <span className={`text-[10px] px-1.5 py-0.5 rounded-full border font-medium ${ts.badge}`}>
                            {ts.label}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-primary">{event.company}</p>
                      </div>

                      <div className="text-right flex-shrink-0">
                        <p className="text-xs text-muted-foreground">{event.date}</p>
                        <p className="text-xs font-mono text-muted-foreground/70 mt-0.5">
                          {event.duration}
                        </p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {event.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Expand toggle */}
                    <p className="text-[11px] text-muted-foreground/40 mt-2 select-none">
                      {isOpen ? "▾ collapse" : "▸ expand"}
                    </p>
                  </div>

                  {/* Expandable details */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-muted-foreground leading-relaxed px-5 pb-4 pt-1 border-t border-border/50">
                          {event.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
