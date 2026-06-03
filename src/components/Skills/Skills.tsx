"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

/* ─── Brand colours for skill badges ─────────────────────────── */
const brandColor: Record<string, { bg: string; text: string; border: string }> = {
  Python:        { bg: "rgba(55,118,171,0.15)",  text: "#4da6ff", border: "rgba(55,118,171,0.35)" },
  TypeScript:    { bg: "rgba(49,120,198,0.15)",  text: "#5ba3f5", border: "rgba(49,120,198,0.35)" },
  JavaScript:    { bg: "rgba(241,224,90,0.12)",  text: "#f1e05a", border: "rgba(241,224,90,0.30)" },
  Rust:          { bg: "rgba(222,165,132,0.15)", text: "#dea584", border: "rgba(222,165,132,0.35)" },
  Dart:          { bg: "rgba(0,180,171,0.15)",   text: "#00c4bb", border: "rgba(0,180,171,0.30)" },
  "C / C++":     { bg: "rgba(243,75,125,0.12)",  text: "#f06292", border: "rgba(243,75,125,0.30)" },
  Java:          { bg: "rgba(176,114,25,0.15)",  text: "#e6a83a", border: "rgba(176,114,25,0.30)" },
  FastAPI:       { bg: "rgba(5,150,105,0.15)",   text: "#34d399", border: "rgba(5,150,105,0.30)" },
  "Next.js":     { bg: "rgba(255,255,255,0.08)", text: "#e5e7eb", border: "rgba(255,255,255,0.15)" },
  NestJS:        { bg: "rgba(232,53,87,0.12)",   text: "#f87171", border: "rgba(232,53,87,0.25)" },
  React:         { bg: "rgba(97,218,251,0.12)",  text: "#61dafb", border: "rgba(97,218,251,0.25)" },
  Docker:        { bg: "rgba(13,183,237,0.12)",  text: "#38bdf8", border: "rgba(13,183,237,0.25)" },
  Flutter:       { bg: "rgba(84,202,228,0.12)",  text: "#54cae4", border: "rgba(84,202,228,0.25)" },
  TensorFlow:    { bg: "rgba(255,111,0,0.12)",   text: "#fb923c", border: "rgba(255,111,0,0.25)" },
  PyTorch:       { bg: "rgba(238,76,44,0.12)",   text: "#f87171", border: "rgba(238,76,44,0.25)" },
  AWS:           { bg: "rgba(255,153,0,0.12)",   text: "#fbbf24", border: "rgba(255,153,0,0.25)" },
  GCP:           { bg: "rgba(66,133,244,0.12)",  text: "#60a5fa", border: "rgba(66,133,244,0.25)" },
  MongoDB:       { bg: "rgba(71,162,72,0.15)",   text: "#4ade80", border: "rgba(71,162,72,0.25)" },
  PostgreSQL:    { bg: "rgba(51,103,145,0.15)",  text: "#7dd3fc", border: "rgba(51,103,145,0.30)" },
};

const defaultStyle = { bg: "rgba(255,255,255,0.06)", text: "#94a3b8", border: "rgba(255,255,255,0.12)" };

type Skill = { name: string; note?: string };

const skillGroups: Record<string, Skill[]> = {
  Languages: [
    { name: "Python", note: "Primary language" },
    { name: "TypeScript" },
    { name: "JavaScript" },
    { name: "Rust", note: "Systems & desktop" },
    { name: "Dart", note: "Flutter" },
    { name: "C / C++" },
    { name: "Java" },
  ],
  "Web & Backend": [
    { name: "FastAPI", note: "Primary framework" },
    { name: "Next.js" },
    { name: "NestJS" },
    { name: "Express.js" },
    { name: "React" },
    { name: "RunAPI", note: "Own framework" },
    { name: "Flask" },
  ],
  "AI / ML": [
    { name: "TensorFlow" },
    { name: "PyTorch" },
    { name: "Scikit-learn" },
    { name: "RAG Systems", note: "Haystack, LangChain" },
    { name: "Pandas" },
    { name: "NumPy" },
    { name: "XGBoost" },
  ],
  "Cloud & Mobile": [
    { name: "Docker", note: "350+ MLCore pulls" },
    { name: "Flutter", note: "iOS & Android" },
    { name: "PostgreSQL" },
    { name: "MongoDB" },
    { name: "AWS" },
    { name: "GCP" },
    { name: "Appwrite" },
  ],
};

/* ─── GitHub language colour map (for bar chart) ─────────────── */
const langBarColor: Record<string, string> = {
  Python:     "#3572A5",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Rust:       "#dea584",
  Dart:       "#00B4AB",
  "C++":      "#f34b7d",
  Java:       "#b07219",
  HTML:       "#e34c26",
  CSS:        "#563d7c",
  Shell:      "#89e051",
};

interface GithubRepo { name: string; stars: number; forks: number; language: string | null }

export default function Skills() {
  const [langStats, setLangStats] = useState<{ lang: string; count: number; pct: number }[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/github/repos")
      .then((r) => r.json())
      .then((data: { repos: GithubRepo[] }) => {
        const counts: Record<string, number> = {};
        data.repos.forEach((r) => {
          if (r.language) counts[r.language] = (counts[r.language] ?? 0) + 1;
        });
        const sorted = Object.entries(counts)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 8);
        const total = sorted.reduce((s, [, c]) => s + c, 0);
        setLangStats(sorted.map(([lang, count]) => ({ lang, count, pct: Math.round((count / total) * 100) })));
        setLoaded(true);
      })
      .catch(() => setLoaded(true));
  }, []);

  return (
    <section id="skills" className="scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="text-primary text-sm font-mono uppercase tracking-widest mb-2">Skills</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Tech Stack</h2>
        <p className="text-muted-foreground mt-3 text-sm max-w-lg">
          Tools and technologies I work with regularly.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* ── Skill tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-3"
        >
          <Tabs defaultValue="Languages">
            <TabsList className="flex flex-wrap h-auto gap-1 bg-muted/40 p-1 mb-6 w-fit">
              {Object.keys(skillGroups).map((group) => (
                <TabsTrigger
                  key={group}
                  value={group}
                  className="text-xs sm:text-sm data-[state=active]:bg-background data-[state=active]:shadow-sm"
                >
                  {group}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(skillGroups).map(([group, skills]) => (
              <TabsContent key={group} value={group} className="mt-0">
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => {
                    const style = brandColor[skill.name] ?? defaultStyle;
                    const badge = (
                      <motion.span
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.04, duration: 0.2 }}
                        className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium border cursor-default transition-all hover:scale-105"
                        style={{
                          background: style.bg,
                          color: style.text,
                          borderColor: style.border,
                        }}
                      >
                        {skill.name}
                      </motion.span>
                    );

                    return skill.note ? (
                      <Tooltip key={skill.name}>
                        <TooltipTrigger asChild>{badge}</TooltipTrigger>
                        <TooltipContent side="top" className="text-xs">{skill.note}</TooltipContent>
                      </Tooltip>
                    ) : (
                      <span key={skill.name}>{badge}</span>
                    );
                  })}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* ── GitHub Language Chart ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <div className="rounded-xl border border-border bg-card p-5 h-full">
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                GitHub · Languages
              </p>
              <a
                href="https://github.com/Amanbig"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                @Amanbig ↗
              </a>
            </div>

            {!loaded ? (
              <div className="space-y-3">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="h-3 bg-muted rounded mb-1 w-24" />
                    <div className="h-2 bg-muted/60 rounded" style={{ width: `${70 - i * 8}%` }} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                {langStats.map(({ lang, pct }, i) => (
                  <div key={lang}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-foreground">{lang}</span>
                      <span className="text-xs text-muted-foreground">{pct}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: langBarColor[lang] ?? "#6366f1" }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: i * 0.07, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}

                {/* Stacked colour legend */}
                <div className="mt-4 pt-3 border-t border-border">
                  <div className="flex h-2 rounded-full overflow-hidden gap-px">
                    {langStats.map(({ lang, pct }) => (
                      <motion.div
                        key={lang}
                        className="h-full"
                        style={{ backgroundColor: langBarColor[lang] ?? "#6366f1", width: `${pct}%` }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
