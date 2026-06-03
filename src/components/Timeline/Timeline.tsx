"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const events = [
  {
    id: "1",
    role: "Backend Developer",
    company: "Code Samdevx",
    type: "work",
    date: "Dec 2025 – Present",
    current: true,
    description:
      "Architecting the Mr. Manager backend using FastAPI and SQLAlchemy, integrating Grafana for real-time monitoring, and implementing automated CI/CD pipelines for high availability.",
    tags: ["FastAPI", "SQLAlchemy", "Grafana", "CI/CD"],
  },
  {
    id: "2",
    role: "Full Stack Developer Intern",
    company: "Vexocore",
    type: "work",
    date: "Sep 2025 – Dec 2025",
    current: false,
    description:
      "Spearheaded Prishigo, a Rapido-style ride-sharing platform (Flutter + ExpressJS) with real-time GPS tracking and scalable request matching. Built Meetgrow event platform with ticketing, payments, and Admin/Organizer panels.",
    tags: ["Flutter", "ExpressJS", "Next.js", "Supabase"],
  },
  {
    id: "3",
    role: "Full Stack Developer Intern",
    company: "Lafleurtech",
    type: "work",
    date: "Mar 2025 – Sep 2025",
    current: false,
    description:
      "Engineered end-to-end RAG systems for government clients (JAC, NDMC). Built a scalable platform enabling users to ingest and query custom datasets into AI pipelines, reducing response times by over 40%.",
    tags: ["RAG", "Python", "FastAPI", "AI"],
  },
  {
    id: "4",
    role: "Flutter Developer Intern",
    company: "Celebrare",
    type: "work",
    date: "Dec 2024 – Mar 2025",
    current: false,
    description:
      "Launched 5+ major features across Celebrare and WowInvite iOS apps using Flutter, optimizing UI performance and driving a 15% increase in user engagement.",
    tags: ["Flutter", "iOS", "Dart"],
  },
  {
    id: "5",
    role: "B.E. Computer Science & Engineering",
    company: "CCET, Chandigarh",
    type: "education",
    date: "Dec 2021 – June 2025",
    current: false,
    description:
      "Bachelor's degree from Chandigarh College of Engineering and Technology. CGPA: 8.0/10. Specialized in web development, AI, and distributed systems.",
    tags: ["Education", "CSE", "CGPA: 8.0"],
  },
];

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

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-border to-border" />

        <div className="space-y-4">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="relative pl-9"
            >
              {/* Dot */}
              <button
                onClick={() => setExpanded(expanded === event.id ? null : event.id)}
                className={`absolute left-0 top-3.5 w-[22px] h-[22px] rounded-full border-2 border-background z-10 flex items-center justify-center transition-all ${
                  event.current
                    ? "bg-primary shadow-[0_0_10px_oklch(0.604_0.173_241.3_/_40%)]"
                    : event.type === "education"
                    ? "bg-amber-500"
                    : "bg-muted-foreground/60 hover:bg-primary/60"
                }`}
              >
                {event.current && (
                  <span className="w-2 h-2 rounded-full bg-primary-foreground" />
                )}
              </button>

              <Card
                className={`border-border cursor-pointer hover:bg-accent/30 transition-colors ${
                  expanded === event.id ? "bg-accent/20" : ""
                }`}
                onClick={() => setExpanded(expanded === event.id ? null : event.id)}
              >
                <CardContent className="pt-4 pb-3">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-foreground text-sm">{event.role}</span>
                        {event.current && (
                          <Badge className="text-[10px] py-0 px-1.5 bg-primary/20 text-primary border-primary/30 hover:bg-primary/20">
                            Current
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-primary mt-0.5 font-medium">{event.company}</p>
                    </div>
                    <span className="text-xs text-muted-foreground flex-shrink-0">{event.date}</span>
                  </div>

                  <div className="flex flex-wrap gap-1 mt-2">
                    {event.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <AnimatePresence>
                    {expanded === event.id && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-sm text-muted-foreground mt-3 leading-relaxed overflow-hidden"
                      >
                        {event.description}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <p className="text-[11px] text-muted-foreground/50 mt-2">
                    {expanded === event.id ? "▾ collapse" : "▸ expand"}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
