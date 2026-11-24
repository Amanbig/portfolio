"use client";
import { motion } from "motion/react";
import SectionHeading from "@/components/SectionHeading";

const events = [
  {
    role: "Backend Developer",
    org: "Code Samdevx",
    date: "Dec 2025 – Present",
    details:
      "Architected the Mr. Manager backend using FastAPI and SQLAlchemy, integrating Grafana for real-time monitoring and implementing automated CI/CD pipelines for high availability.",
    tags: ["FastAPI", "SQLAlchemy", "Grafana", "CI/CD"],
  },
  {
    role: "Full Stack Developer Intern",
    org: "Vexocore",
    date: "Sep 2025 – Dec 2025",
    details:
      "Spearheaded Prishigo, a Rapido-style ride-sharing platform (Flutter + ExpressJS) with real-time GPS tracking and scalable request matching. Also built the Meetgrow event platform (Next.js, Flutter, Supabase) with ticketing, payments, and Admin/Organizer panels.",
    tags: ["Flutter", "ExpressJS", "Next.js", "Supabase"],
  },
  {
    role: "Full Stack Developer Intern",
    org: "Lafleurtech",
    date: "Mar 2025 – Sep 2025",
    details:
      "Engineered end-to-end RAG systems for government clients (JAC, NDMC) and a scalable platform enabling users to ingest and query custom datasets into AI pipelines, reducing response times by over 40%.",
    tags: ["RAG", "Python", "FastAPI", "AI"],
  },
  {
    role: "Flutter Developer Intern",
    org: "Celebrare",
    date: "Dec 2024 – Mar 2025",
    details:
      "Launched 5+ major features across the Celebrare and WowInvite iOS apps using Flutter, optimizing UI performance and driving a 15% increase in user engagement.",
    tags: ["Flutter", "iOS", "Dart"],
  },
  {
    role: "B.E. Computer Science & Engineering",
    org: "Chandigarh College of Engineering and Technology",
    date: "Dec 2021 – Jun 2025",
    details: "CGPA 8.0/10. Specialized in web development, AI, and distributed systems.",
    tags: ["Education"],
  },
];

export default function Timeline() {
  return (
    <section id="experience" className="py-24 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading command="git log --oneline" title="Experience" />

        <ol className="relative border-l border-zinc-800 ml-2 space-y-10 max-w-3xl">
          {events.map((e, i) => (
            <motion.li
              key={e.org + e.date}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="pl-8 relative"
            >
              <span
                className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full ${
                  i === 0 ? "bg-accent ring-4 ring-accent/20" : "bg-zinc-600"
                }`}
              />
              <p className="font-mono text-xs text-zinc-500">{e.date}</p>
              <h3 className="mt-1 text-lg font-semibold text-white">
                {e.role} <span className="text-zinc-500 font-normal">· {e.org}</span>
              </h3>
              <p className="mt-2 text-zinc-400 leading-relaxed">{e.details}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {e.tags.map((t) => (
                  <span key={t} className="text-xs font-mono text-zinc-400 bg-zinc-800/50 rounded px-2 py-0.5">
                    {t}
                  </span>
                ))}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
