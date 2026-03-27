"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const events = [
  {
    hash: "a0b1c2d",
    type: "feat",
    label: "HEAD → main",
    labelColor: "text-green-400",
    message: "role: Backend Developer @ Code Samdevx",
    date: "Dec 2025 – Present",
    author: "Amanpreet <aman@portfolio>",
    details: "Architected the Mr. Manager backend using FastAPI and SQLAlchemy, integrating Grafana for real-time monitoring and implementing automated CI/CD pipelines for high availability.",
    tags: ["fastapi", "sqlalchemy", "grafana", "ci/cd"],
  },
  {
    hash: "f4g5h6i",
    type: "feat",
    label: "origin/main",
    labelColor: "text-orange-400",
    message: "feat: Full Stack Developer Intern @ Vexocore",
    date: "Sep 2025 – Dec 2025",
    author: "Amanpreet <aman@portfolio>",
    details: "Spearheaded Prishigo, a Rapido-style ride-sharing platform (Flutter + ExpressJS) with real-time GPS tracking and scalable request matching. Also built Meetgrow event platform (Next.js, Flutter, Supabase) with ticketing, payments, and Admin/Organizer panels.",
    tags: ["flutter", "expressjs", "next.js", "supabase", "real-time"],
  },
  {
    hash: "e5f6a7b",
    type: "feat",
    label: null,
    labelColor: null,
    message: "feat: Full Stack Developer Intern @ Lafleurtech",
    date: "Mar 2025 – Sep 2025",
    author: "Amanpreet <aman@portfolio>",
    details: "Engineered end-to-end RAG systems for government clients (JAC, NDMC) and a scalable platform enabling users to ingest and query custom datasets into AI pipelines, reducing response times by over 40%.",
    tags: ["rag", "python", "fastapi", "ai"],
  },
  {
    hash: "i8j9k0l",
    type: "feat",
    label: null,
    labelColor: null,
    message: "feat: Flutter Developer Intern @ Celebrare",
    date: "Dec 2024 – Mar 2025",
    author: "Amanpreet <aman@portfolio>",
    details: "Launched 5+ major features across Celebrare and WowInvite iOS apps using Flutter, optimizing UI performance and driving a 15% increase in user engagement.",
    tags: ["flutter", "ios", "dart"],
  },
  {
    hash: "z9y8x7w",
    type: "chore",
    label: null,
    labelColor: null,
    message: "chore: Graduated B.E. Computer Science & Engineering",
    date: "Dec 2021 – June 2025",
    author: "Amanpreet <aman@portfolio>",
    details: "Bachelor's degree from Chandigarh College of Engineering and Technology (CCET). CGPA: 8.0/10. Specialized in web development, AI, and distributed systems.",
    tags: ["education", "cse", "cgpa:8.0"],
  },
];

const typeColor = (type: string) => {
  if (type === "feat") return "text-green-400";
  if (type === "chore") return "text-yellow-400";
  if (type === "fix") return "text-red-400";
  return "text-[#8b949e]";
};

export default function Timeline() {
  const [expanded, setExpanded] = useState<string | null>("a0b1c2d");

  return (
    <section id="timeline" className="py-20 max-w-4xl mx-auto w-full px-4 font-mono">
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg overflow-hidden shadow-xl">
        <div className="bg-[#161b22] px-4 py-2 border-b border-[#30363d] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#8b949e] text-xs">git-log</span>
          </div>
          <div className="text-[#8b949e] text-xs">bash</div>
        </div>

        <div className="p-6 md:p-10">
          <div className="mb-6 text-[#c9d1d9] text-sm md:text-base">
            <span className="text-green-400">➜</span> <span className="text-blue-400">~</span>{" "}
            git log --oneline --decorate --graph
          </div>

          <div className="space-y-0 relative">
            {/* Git branch line */}
            <div className="absolute left-[9px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-green-400/60 via-[#30363d] to-[#30363d]" />

            {events.map((event, index) => (
              <motion.div
                key={event.hash}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 }}
                className="relative pl-8 pb-6 last:pb-0"
              >
                {/* Commit dot */}
                <div
                  className={`absolute left-0 top-1.5 w-5 h-5 rounded-full border-2 border-[#0d1117] z-10 flex items-center justify-center cursor-pointer transition-all ${
                    index === 0
                      ? "bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]"
                      : "bg-[#238636] hover:bg-green-500"
                  }`}
                  onClick={() => setExpanded(expanded === event.hash ? null : event.hash)}
                />

                <div
                  className="cursor-pointer group"
                  onClick={() => setExpanded(expanded === event.hash ? null : event.hash)}
                >
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-1">
                    <span className="text-[#e0af68] text-xs font-mono">{event.hash}</span>
                    {event.label && (
                      <span className={`text-[10px] px-1.5 py-0.5 rounded border border-current/30 bg-current/10 ${event.labelColor}`}>
                        {event.label}
                      </span>
                    )}
                    <span className="text-[#8b949e] text-xs ml-auto">({event.date})</span>
                  </div>

                  <h3 className="text-sm md:text-base font-bold mb-1 group-hover:text-white transition-colors">
                    <span className={typeColor(event.type)}>{event.type}: </span>
                    <span className="text-[#7aa2f7]">{event.message.split(": ").slice(1).join(": ")}</span>
                  </h3>

                  <div className="text-[#484f58] text-xs mb-2">
                    Author: {event.author}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-2">
                    {event.tags.map(tag => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-[#21262d] text-[#8b949e] border border-[#30363d]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Expand indicator */}
                  <div className="text-[#484f58] text-xs">
                    {expanded === event.hash ? "▾ collapse" : "▸ expand details"}
                  </div>
                </div>

                <AnimatePresence>
                  {expanded === event.hash && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#c9d1d9] mt-3 text-sm border-l-2 border-green-400/40 pl-3 py-2 bg-[#161b22]/60 rounded-r leading-relaxed">
                        {event.details}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
