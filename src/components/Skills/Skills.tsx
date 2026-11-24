"use client";
import { motion } from "motion/react";
import SectionHeading from "@/components/SectionHeading";

const skillGroups: Record<string, string[]> = {
  Languages: ["Python", "JavaScript", "TypeScript", "Rust", "C/C++", "Java", "Dart"],
  "Web & Backend": ["FastAPI", "Next.js", "NestJS", "Express.js", "React", "RunAPI", "Flask"],
  "AI/ML & Data": ["TensorFlow", "PyTorch", "Scikit-learn", "RAG Systems", "Pandas", "NumPy", "XGBoost"],
  "Mobile & Cloud": ["Flutter", "Docker", "AWS", "GCP", "PostgreSQL", "MongoDB", "Appwrite"],
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
