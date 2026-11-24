"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import SectionHeading from "@/components/SectionHeading";
import { projects, type Project } from "@/data/projects";

const filters = ["All", "DevOps & Systems", "Developer Tools", "AI & LLM", "OSS Contributions", "Web & API"] as const;
type Filter = (typeof filters)[number];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable */
    }
  };
  return (
    <button
      type="button"
      onClick={copy}
      className="shrink-0 text-xs font-mono text-zinc-500 hover:text-accent transition-colors"
      aria-label="Copy command"
    >
      {copied ? "copied" : "copy"}
    </button>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.25 }}
      className="group flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 hover:border-zinc-600 transition-colors"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-white">{project.name}</h3>
          <p className="mt-1 text-sm text-accent">{project.headline}</p>
        </div>
        {project.stars !== undefined && (
          <span className="shrink-0 font-mono text-xs text-zinc-400 border border-zinc-800 rounded-full px-2.5 py-1">
            ★ {project.stars}
          </span>
        )}
      </div>

      <p className="mt-4 text-sm text-zinc-400 leading-relaxed">{project.description}</p>

      <ul className="mt-4 space-y-1.5 text-sm text-zinc-300">
        {project.highlights.slice(0, 3).map((h) => (
          <li key={h} className="flex gap-2">
            <span className="text-accent font-mono">›</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>

      {project.installCmd && (
        <div className="mt-5 flex items-center justify-between gap-3 rounded-md bg-zinc-950 border border-zinc-800 px-3 py-2 font-mono text-xs text-zinc-300">
          <code className="truncate">
            <span className="text-zinc-600">$ </span>
            {project.installCmd}
          </code>
          <CopyButton text={project.installCmd} />
        </div>
      )}

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tags.slice(0, 5).map((t) => (
          <span key={t} className="text-xs font-mono text-zinc-500 bg-zinc-800/50 rounded px-2 py-0.5">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-6 flex items-center justify-between gap-4 text-sm">
        <span className="flex items-center gap-2 text-zinc-400">
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: project.languageColor }} />
          {project.language}
        </span>
        <div className="flex items-center gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-accent transition-colors"
            >
              {project.liveLabel ?? "Live"} ↗
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 hover:text-accent transition-colors"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectShowcase() {
  const [filter, setFilter] = useState<Filter>("All");
  const [showAll, setShowAll] = useState(false);

  const visible = useMemo(() => {
    const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);
    if (filter === "All" && !showAll) return list.filter((p) => p.featured);
    return list;
  }, [filter, showAll]);

  const hiddenCount = projects.length - projects.filter((p) => p.featured).length;

  return (
    <section id="projects" className="py-24 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          command="ls ./projects"
          title="Selected work"
          subtitle="Open-source tools, ML platforms and contributions I've built and shipped."
        />

        <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 text-sm rounded-full border transition-colors ${
                filter === f
                  ? "bg-accent text-zinc-950 border-accent font-medium"
                  : "border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filter === "All" && hiddenCount > 0 && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAll((s) => !s)}
              className="px-5 py-2.5 rounded-md border border-zinc-700 text-zinc-200 hover:border-accent hover:text-accent transition-colors text-sm"
            >
              {showAll ? "Show fewer" : `Show ${hiddenCount} more`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
