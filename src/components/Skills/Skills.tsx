"use client";
import { motion } from "motion/react";
import SectionHeading from "@/components/SectionHeading";

const skillGroups: Record<string, string[]> = {
  Languages: ["Python", "Go", "TypeScript", "JavaScript", "Rust", "Dart", "C/C++", "SQL", "Bash", "HCL"],
  "Backend & Frameworks": ["FastAPI", "RunAPI", "Node.js", "Express.js", "NestJS", "SQLAlchemy", "Next.js", "React", "Tauri", "Flutter"],
  "DevOps, Cloud & Infra": ["Docker", "Podman", "Kubernetes", "Nomad", "Prometheus", "Grafana", "Loki", "AWS", "GCP", "CI/CD", "Linux / SSH"],
  "AI, Agents & Data": ["RAG Systems", "AI Agents", "Haystack", "Multi-LLM Orchestration", "PyTorch", "TensorFlow", "VLMs", "PostgreSQL", "MongoDB", "Supabase"],
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading command="cat skills.json" title="Tech stack" />

        <div className="grid sm:grid-cols-2 gap-6">
          {Object.entries(skillGroups).map(([group, skills], i) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6"
            >
              <h3 className="font-mono text-sm text-accent mb-4">{group}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="text-sm text-zinc-300 border border-zinc-800 bg-zinc-950 rounded-md px-3 py-1.5 hover:border-zinc-600 transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
