"use client";
import { motion } from "motion/react";
import SectionHeading from "@/components/SectionHeading";

const highlights = [
  {
    title: "Backend & Systems",
    desc: "FastAPI, Go microservices, RAG pipelines, and observability tooling built for production.",
  },
  {
    title: "Open Source Contributor",
    desc: "Merged PRs in deepset-ai/haystack and haystack-core-integrations.",
  },
  {
    title: "DevOps & Infrastructure",
    desc: "Container orchestration (Docker, Podman, Kubernetes), Grafana/Prometheus monitoring & secrets management.",
  },
  {
    title: "Developer Tooling",
    desc: "Creator of PhantomOps, dockit, termlet, ManUp, DevOrch, and RunAPI.",
  },
];

const interests = [
  "Backend engineering & system design",
  "DevOps, containers & observability",
  "AI/ML, RAG & agentic systems",
  "Developer tooling & CLIs",
  "Flutter & cross-platform apps",
  "Open source",
];

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading command="whoami" title="About me" />

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-5 text-zinc-400 leading-relaxed text-lg"
          >
            <p>
              I&apos;m <span className="text-white font-medium">Amanpreet Singh</span>, a backend &amp; systems engineer with over
              three years of experience building scalable APIs, DevOps tooling, and applied AI, based in Chandigarh, India.
            </p>
            <p>
              I&apos;ve built RAG pipelines for government clients, and published open-source tools such as{" "}
              <a href="https://github.com/Amanbig/PhantomOps" target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:text-accent">PhantomOps</a>,{" "}
              <a href="https://github.com/Amanbig/dockit" target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:text-accent">dockit</a>,{" "}
              <a href="https://github.com/Amanbig/termlet" target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:text-accent">termlet</a>,{" "}
              <a href="https://github.com/Amanbig/ManUp" target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:text-accent">ManUp</a>,{" "}
              <a href="https://github.com/Amanbig/DevOrch" target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:text-accent">DevOrch</a> and{" "}
              <a href="https://github.com/Amanbig/runapi" target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:text-accent">RunAPI</a>.
            </p>
            <p>
              Outside of backends I build mobile apps with Flutter, explore game development, and work on tools that
              make other engineers&apos; lives easier. I hold a B.E. in Computer Science from CCET (CGPA 8.0/10).
            </p>

            <ul className="pt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-base">
              {interests.map((i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-accent font-mono">›</span>
                  <span className="text-zinc-300">{i}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="lg:col-span-2 grid gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 hover:border-zinc-700 transition-colors"
              >
                <h3 className="font-semibold text-white">{h.title}</h3>
                <p className="mt-1 text-sm text-zinc-400 leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
