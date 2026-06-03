"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

/* ─── Brand colours ──────────────────────────────────────────── */
const brand: Record<string, { bg: string; text: string; border: string }> = {
  Python:        { bg: "rgba(55,118,171,.15)",   text: "#4da6ff", border: "rgba(55,118,171,.35)"  },
  TypeScript:    { bg: "rgba(49,120,198,.15)",   text: "#5ba3f5", border: "rgba(49,120,198,.35)"  },
  JavaScript:    { bg: "rgba(241,224,90,.12)",   text: "#f1e05a", border: "rgba(241,224,90,.30)"  },
  Rust:          { bg: "rgba(222,165,132,.15)",  text: "#dea584", border: "rgba(222,165,132,.35)" },
  Dart:          { bg: "rgba(0,180,171,.15)",    text: "#00c4bb", border: "rgba(0,180,171,.30)"   },
  "C / C++":     { bg: "rgba(243,75,125,.12)",   text: "#f06292", border: "rgba(243,75,125,.30)"  },
  Java:          { bg: "rgba(176,114,25,.15)",   text: "#e6a83a", border: "rgba(176,114,25,.30)"  },
  FastAPI:       { bg: "rgba(5,150,105,.15)",    text: "#34d399", border: "rgba(5,150,105,.30)"   },
  "Next.js":     { bg: "rgba(255,255,255,.07)",  text: "#e5e7eb", border: "rgba(255,255,255,.15)" },
  NestJS:        { bg: "rgba(232,53,87,.12)",    text: "#f87171", border: "rgba(232,53,87,.25)"   },
  "Express.js":  { bg: "rgba(255,255,255,.06)",  text: "#9ca3af", border: "rgba(255,255,255,.12)" },
  React:         { bg: "rgba(97,218,251,.12)",   text: "#61dafb", border: "rgba(97,218,251,.25)"  },
  RunAPI:        { bg: "rgba(5,150,105,.12)",    text: "#6ee7b7", border: "rgba(5,150,105,.20)"   },
  Flask:         { bg: "rgba(255,255,255,.06)",  text: "#9ca3af", border: "rgba(255,255,255,.12)" },
  TensorFlow:    { bg: "rgba(255,111,0,.12)",    text: "#fb923c", border: "rgba(255,111,0,.25)"   },
  PyTorch:       { bg: "rgba(238,76,44,.12)",    text: "#f87171", border: "rgba(238,76,44,.25)"   },
  "Scikit-learn":{ bg: "rgba(249,115,22,.12)",   text: "#fdba74", border: "rgba(249,115,22,.25)"  },
  "RAG Systems": { bg: "rgba(139,92,246,.12)",   text: "#c4b5fd", border: "rgba(139,92,246,.25)"  },
  Pandas:        { bg: "rgba(49,120,198,.10)",   text: "#7dd3fc", border: "rgba(49,120,198,.25)"  },
  NumPy:         { bg: "rgba(74,144,226,.12)",   text: "#93c5fd", border: "rgba(74,144,226,.25)"  },
  XGBoost:       { bg: "rgba(71,162,72,.12)",    text: "#86efac", border: "rgba(71,162,72,.25)"   },
  Docker:        { bg: "rgba(13,183,237,.12)",   text: "#38bdf8", border: "rgba(13,183,237,.25)"  },
  Flutter:       { bg: "rgba(84,202,228,.12)",   text: "#67e8f9", border: "rgba(84,202,228,.25)"  },
  PostgreSQL:    { bg: "rgba(51,103,145,.15)",   text: "#7dd3fc", border: "rgba(51,103,145,.30)"  },
  MongoDB:       { bg: "rgba(71,162,72,.15)",    text: "#4ade80", border: "rgba(71,162,72,.25)"   },
  AWS:           { bg: "rgba(255,153,0,.12)",    text: "#fbbf24", border: "rgba(255,153,0,.25)"   },
  GCP:           { bg: "rgba(66,133,244,.12)",   text: "#60a5fa", border: "rgba(66,133,244,.25)"  },
  Appwrite:      { bg: "rgba(240,100,97,.12)",   text: "#fca5a5", border: "rgba(240,100,97,.25)"  },
};
const dflt = { bg: "rgba(255,255,255,.06)", text: "#94a3b8", border: "rgba(255,255,255,.12)" };

/* ─── Skill groups ───────────────────────────────────────────── */
const groups: { name: string; icon: string; skills: { name: string; note?: string }[] }[] = [
  {
    name: "Languages", icon: "{ }",
    skills: [
      { name: "Python",     note: "Primary language" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Rust",       note: "Systems & desktop" },
      { name: "Dart",       note: "Flutter" },
      { name: "C / C++" },
      { name: "Java" },
    ],
  },
  {
    name: "Web & Backend", icon: "⚡",
    skills: [
      { name: "FastAPI",    note: "Primary framework" },
      { name: "Next.js" },
      { name: "NestJS" },
      { name: "Express.js" },
      { name: "React" },
      { name: "RunAPI",     note: "Own framework" },
      { name: "Flask" },
    ],
  },
  {
    name: "AI / ML", icon: "🤖",
    skills: [
      { name: "TensorFlow" },
      { name: "PyTorch" },
      { name: "Scikit-learn" },
      { name: "RAG Systems", note: "Haystack, LangChain" },
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "XGBoost" },
    ],
  },
  {
    name: "Cloud & Mobile", icon: "☁",
    skills: [
      { name: "Docker",      note: "769+ MLCore pulls" },
      { name: "Flutter",     note: "iOS & Android" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "AWS" },
      { name: "GCP" },
      { name: "Appwrite" },
    ],
  },
];

/* ─── Language bar chart colours ─────────────────────────────── */
const langColor: Record<string, string> = {
  Python: "#3572A5", TypeScript: "#3178c6", JavaScript: "#f1e05a",
  Rust: "#dea584", Dart: "#00B4AB", "C++": "#f34b7d",
  Java: "#b07219", HTML: "#e34c26", CSS: "#563d7c", Shell: "#89e051",
};

/* ─── Contribution cell colours ──────────────────────────────── */
const cellBg = ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"];

interface Repo   { name: string; stars: number; forks: number; language: string | null }
interface Contrib { date: string; count: number; level: 0|1|2|3|4 }
interface Lang   { lang: string; count: number; pct: number }

const quickStats = [
  { value: "10+", label: "Languages" },
  { value: "8+",  label: "Frameworks" },
  { value: "3+",  label: "Years Exp." },
  { value: "4",   label: "OSS PRs" },
];

export default function Skills() {
  const [langs, setLangs]         = useState<Lang[]>([]);
  const [contribs, setContribs]   = useState<Contrib[]>([]);
  const [total, setTotal]         = useState(0);
  const [langOk, setLangOk]       = useState(false);
  const [contribOk, setContribOk] = useState(false);

  useEffect(() => {
    fetch("/api/github/repos")
      .then(r => r.json())
      .then((d: { repos: Repo[] }) => {
        const counts: Record<string, number> = {};
        d.repos.forEach(r => { if (r.language) counts[r.language] = (counts[r.language] ?? 0) + 1; });
        const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 8);
        const tot = sorted.reduce((s, [, c]) => s + c, 0);
        setLangs(sorted.map(([lang, count]) => ({ lang, count, pct: Math.round(count / tot * 100) })));
        setLangOk(true);
      })
      .catch(() => setLangOk(true));

    fetch("/api/github/contributions")
      .then(r => r.json())
      .then((d: { contributions: Contrib[]; total: { lastYear: number } }) => {
        setContribs(d.contributions ?? []);
        setTotal(d.total?.lastYear ?? 0);
        setContribOk(true);
      })
      .catch(() => setContribOk(true));
  }, []);

  /* ── Build week grid ── */
  const weeks: (Contrib | null)[][] = [];
  if (contribs.length) {
    const first = new Date(contribs[0].date);
    let week: (Contrib | null)[] = Array(first.getDay()).fill(null);
    contribs.forEach(c => {
      week.push(c);
      if (week.length === 7) { weeks.push(week); week = []; }
    });
    if (week.length) { while (week.length < 7) week.push(null); weeks.push(week); }
  }

  /* ── Month labels ── */
  const monthLabels: { label: string; col: number }[] = [];
  weeks.forEach((week, wi) => {
    const firstReal = week.find(Boolean);
    if (!firstReal) return;
    const d = new Date(firstReal.date);
    if (d.getDate() <= 7) {
      monthLabels.push({ label: d.toLocaleString("default", { month: "short" }), col: wi });
    }
  });

  /* ── Compute streak & peak stats ── */
  let longestStreak = 0, currentStreak = 0, tempStreak = 0;
  let busiest = { date: "", count: 0 };
  const monthTotals: Record<string, number> = {};

  contribs.forEach(c => {
    if (c.count > 0) {
      tempStreak++;
      longestStreak = Math.max(longestStreak, tempStreak);
      if (c.count > busiest.count) busiest = { date: c.date, count: c.count };
      const m = c.date.slice(0, 7);
      monthTotals[m] = (monthTotals[m] ?? 0) + c.count;
    } else {
      tempStreak = 0;
    }
  });
  // Current streak (count backwards from last entry)
  for (let i = contribs.length - 1; i >= 0; i--) {
    if (contribs[i].count > 0) currentStreak++;
    else break;
  }
  const bestMonth = Object.entries(monthTotals).sort((a, b) => b[1] - a[1])[0];
  const bestMonthLabel = bestMonth
    ? new Date(bestMonth[0] + "-01").toLocaleString("default", { month: "long", year: "numeric" })
    : null;

  return (
    <section id="skills" className="scroll-mt-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-10"
      >
        <p className="text-primary text-sm font-mono uppercase tracking-widest mb-2">Skills</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Tech Stack</h2>
      </motion.div>

      {/* Quick stats chips */}
      <motion.div
        initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }}
        className="flex flex-wrap gap-3 mb-10"
      >
        {quickStats.map(s => (
          <div key={s.label}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card"
          >
            <span className="text-base font-bold text-foreground">{s.value}</span>
            <span className="text-xs text-muted-foreground">{s.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
        {/* Skill group cards — 2×2 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {groups.map(({ name, icon, skills }) => (
            <div key={name} className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-base">{icon}</span>
                <p className="text-xs font-semibold text-foreground uppercase tracking-wider">{name}</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {skills.map(skill => {
                  const s = brand[skill.name] ?? dflt;
                  const badge = (
                    <span
                      className="inline-flex px-2.5 py-1 rounded-md text-xs font-medium border cursor-default hover:scale-105 transition-transform"
                      style={{ background: s.bg, color: s.text, borderColor: s.border }}
                    >
                      {skill.name}
                    </span>
                  );
                  return skill.note ? (
                    <Tooltip key={skill.name}>
                      <TooltipTrigger asChild>{badge}</TooltipTrigger>
                      <TooltipContent side="top" className="text-xs">{skill.note}</TooltipContent>
                    </Tooltip>
                  ) : <span key={skill.name}>{badge}</span>;
                })}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Language chart */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2 rounded-xl border border-border bg-card p-5 flex flex-col"
        >
          <div className="flex items-center justify-between mb-5">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              GitHub · Languages
            </p>
            <a href="https://github.com/Amanbig" target="_blank" rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-primary transition-colors">
              @Amanbig ↗
            </a>
          </div>

          {!langOk ? (
            <div className="space-y-3 flex-1">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-3 bg-muted rounded mb-1.5 w-20" />
                  <div className="h-2 bg-muted/60 rounded" style={{ width: `${70 - i * 8}%` }} />
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-3 flex-1">
              {langs.map(({ lang, pct }, i) => (
                <div key={lang}>
                  <div className="flex justify-between mb-1">
                    <span className="text-xs font-medium text-foreground">{lang}</span>
                    <span className="text-xs text-muted-foreground">{pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: langColor[lang] ?? "#6366f1" }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: i * 0.07, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}

              {/* Stacked bar legend */}
              {langs.length > 0 && (
                <div className="mt-4 pt-3 border-t border-border">
                  <div className="flex h-2 rounded-full overflow-hidden gap-px">
                    {langs.map(({ lang, pct }) => (
                      <motion.div key={lang} className="h-full"
                        style={{ backgroundColor: langColor[lang] ?? "#6366f1", width: `${pct}%` }}
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.7 }}
                      />
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {langs.slice(0, 4).map(({ lang }) => (
                      <span key={lang} className="flex items-center gap-1 text-[10px] text-muted-foreground">
                        <span className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: langColor[lang] ?? "#6366f1" }} />
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </div>

      {/* Contribution heatmap */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
        className="rounded-xl border border-border bg-card p-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            GitHub · Contributions
          </p>
          {total > 0 && (
            <span className="text-xs text-muted-foreground font-medium">
              {total.toLocaleString()} contributions in the last year
            </span>
          )}
        </div>

        {!contribOk ? (
          <div className="animate-pulse h-20 rounded bg-muted" />
        ) : weeks.length > 0 ? (
          <div className="overflow-x-auto">
            {/* Month labels */}
            <div className="flex mb-1 min-w-fit" style={{ paddingLeft: "1px" }}>
              {weeks.map((_, wi) => {
                const ml = monthLabels.find(m => m.col === wi);
                return (
                  <div key={wi} className="w-3 flex-shrink-0">
                    {ml && <span className="text-[9px] text-muted-foreground whitespace-nowrap">{ml.label}</span>}
                  </div>
                );
              })}
            </div>

            {/* Day labels + grid */}
            <div className="flex gap-px min-w-fit">
              {/* Week columns */}
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-px">
                  {week.map((day, di) =>
                    day ? (
                      <Tooltip key={di}>
                        <TooltipTrigger asChild>
                          <div
                            className="w-3 h-3 rounded-sm cursor-pointer hover:ring-1 hover:ring-white/30 transition-all"
                            style={{ backgroundColor: cellBg[day.level] }}
                          />
                        </TooltipTrigger>
                        <TooltipContent side="top" className="text-xs">
                          <span className="font-medium">{day.count} contribution{day.count !== 1 ? "s" : ""}</span>
                          <span className="text-muted-foreground ml-1">on {day.date}</span>
                        </TooltipContent>
                      </Tooltip>
                    ) : (
                      <div key={di} className="w-3 h-3" />
                    )
                  )}
                </div>
              ))}
            </div>

            {/* Legend + stats */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-4 pt-3 border-t border-border">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] text-muted-foreground">Less</span>
                {cellBg.map((c, i) => (
                  <div key={i} className="w-3 h-3 rounded-sm" style={{ backgroundColor: c }} />
                ))}
                <span className="text-[10px] text-muted-foreground">More</span>
              </div>

              <div className="flex flex-wrap gap-5">
                {longestStreak > 0 && (
                  <div className="text-center">
                    <p className="text-sm font-bold text-foreground">{longestStreak}d</p>
                    <p className="text-[10px] text-muted-foreground">Longest streak</p>
                  </div>
                )}
                {currentStreak > 0 && (
                  <div className="text-center">
                    <p className="text-sm font-bold text-green-400">{currentStreak}d</p>
                    <p className="text-[10px] text-muted-foreground">Current streak</p>
                  </div>
                )}
                {busiest.count > 0 && (
                  <div className="text-center">
                    <p className="text-sm font-bold text-foreground">{busiest.count}</p>
                    <p className="text-[10px] text-muted-foreground">Best day</p>
                  </div>
                )}
                {bestMonthLabel && (
                  <div className="text-center">
                    <p className="text-sm font-bold text-foreground">{bestMonthLabel.split(" ")[0]}</p>
                    <p className="text-[10px] text-muted-foreground">Most active month</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">Contribution data unavailable.</p>
        )}
      </motion.div>
    </section>
  );
}
