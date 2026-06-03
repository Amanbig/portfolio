"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  title: string;
  repoName: string;
  description: string;
  category: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  showDockerPulls?: boolean;
  liveLabel?: string;
}

interface GithubRepo {
  name: string;
  stars: number;
  forks: number;
  language: string | null;
}

const projects: Project[] = [
  {
    id: "0",
    title: "DevOrch",
    repoName: "DevOrch",
    description:
      "Terminal-native multi-provider AI coding assistant — plans, executes, and tracks dev tasks. Like Claude Code but open-source.",
    category: "AI/ML",
    tags: ["Python", "CLI", "Agents", "OpenAI", "Ollama"],
    liveUrl: "https://pypi.org/project/devorch/",
    githubUrl: "https://github.com/Amanbig/DevOrch",
    featured: true,
    liveLabel: "PyPI",
  },
  {
    id: "5",
    title: "MLCore",
    repoName: "MLCore",
    description: "Self-hosted ML platform — upload datasets, train & monitor models.",
    category: "AI/ML",
    tags: ["Python", "FastAPI", "Grafana", "Docker"],
    liveUrl: "https://hub.docker.com/r/procoder588/mlcore",
    githubUrl: "https://github.com/Amanbig/MLCore",
    featured: true,
    showDockerPulls: true,
    liveLabel: "Docker Hub",
  },
  {
    id: "6",
    title: "RunAPI",
    repoName: "runapi",
    description: "File-based routing framework for FastAPI (Next.js style).",
    category: "Web",
    tags: ["Python", "FastAPI", "Framework", "PyPI"],
    liveUrl: "https://pypi.org/project/runapi/",
    githubUrl: "https://github.com/Amanbig/runapi",
    featured: true,
  },
  {
    id: "1",
    title: "ChatMe",
    repoName: "ChatMe",
    description: "Agent-driven AI desktop app with voice & cross-platform support.",
    category: "Desktop",
    tags: ["Rust", "Tauri", "React", "AI"],
    liveUrl: "https://github.com/Amanbig/ChatMe/releases",
    githubUrl: "https://github.com/Amanbig/ChatMe",
    featured: true,
  },
  {
    id: "2",
    title: "NextPy",
    repoName: "create-nextpy-app",
    description: "CLI scaffold for Next.js + FastAPI full-stack apps.",
    category: "Web",
    tags: ["CLI", "Python", "Node.js"],
    liveUrl: "https://www.npmjs.com/package/create-nextpy-app",
    githubUrl: "https://github.com/Amanbig/create-nextpy-app",
    featured: true,
  },
  {
    id: "3",
    title: "FileEx",
    repoName: "fileEx",
    description: "Modern file explorer built with Rust, Tauri & shadcn/ui.",
    category: "Desktop",
    tags: ["Rust", "Tauri", "UI"],
    liveUrl: "https://github.com/Amanbig/fileEx/releases/",
    githubUrl: "https://github.com/Amanbig/fileEx",
    featured: true,
  },
  {
    id: "4",
    title: "BackTool",
    repoName: "backTool",
    description: "Node.js backend generator CLI with multi-DB & visual UI.",
    category: "Web",
    tags: ["Node.js", "CLI", "MongoDB", "Postgres"],
    liveUrl: "https://www.npmjs.com/package/backtool",
    githubUrl: "https://github.com/Amanbig/backTool",
    featured: true,
  },
  {
    id: "7",
    title: "FileShare",
    repoName: "FileShare",
    description: "Secure file sharing platform built with Next.js & Appwrite.",
    category: "Web",
    tags: ["Next.js", "NestJS", "Appwrite"],
    liveUrl: "https://file-share-three-mu.vercel.app/",
    githubUrl: "https://github.com/Amanbig/FileShare",
    featured: false,
  },
  {
    id: "8",
    title: "Music Level",
    repoName: "music_level",
    description: "AI-powered music generation & streaming platform.",
    category: "Web",
    tags: ["Next.js", "NestJS", "Gemini"],
    liveUrl: "https://music-level.vercel.app/",
    githubUrl: "https://github.com/Amanbig/music_level",
    featured: false,
  },
  {
    id: "9",
    title: "Haystack (OSS)",
    repoName: "haystack",
    description: "Contrib: JSON parsing refactor, pipeline deprecation & docs.",
    category: "OSS",
    tags: ["Python", "LLM", "AI"],
    liveUrl:
      "https://github.com/deepset-ai/haystack/pulls?q=is%3Apr+author%3AAmanbig",
    githubUrl: "https://github.com/deepset-ai/haystack",
    featured: true,
  },
  {
    id: "10",
    title: "Haystack Integrations (OSS)",
    repoName: "haystack-core-integrations",
    description: "Contrib: MongoDB Atlas metadata exploration methods.",
    category: "OSS",
    tags: ["Python", "MongoDB", "Atlas"],
    liveUrl:
      "https://github.com/deepset-ai/haystack-core-integrations/pulls?q=is%3Apr+author%3AAmanbig",
    githubUrl: "https://github.com/deepset-ai/haystack-core-integrations",
    featured: true,
  },
];

const categories = ["All", "Web", "Desktop", "AI/ML", "OSS"];

const categoryColor: Record<string, string> = {
  Web: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Desktop: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "AI/ML": "bg-green-500/10 text-green-400 border-green-500/20",
  OSS: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Mobile: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
};

export default function ProjectShowcase() {
  const [active, setActive] = useState("All");
  const [githubData, setGithubData] = useState<Record<string, GithubRepo>>({});
  const [dockerPulls, setDockerPulls] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/github/repos")
      .then((r) => r.json())
      .then((data: { repos: GithubRepo[] }) => {
        const map: Record<string, GithubRepo> = {};
        data.repos.forEach((r) => { map[r.name.toLowerCase()] = r; });
        setGithubData(map);
      })
      .catch(() => {});

    fetch("/api/docker")
      .then((r) => r.json())
      .then((data: { pulls: number | null }) => {
        if (data.pulls !== null) setDockerPulls(data.pulls);
      })
      .catch(() => {});
  }, []);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  const getStats = (repo: string) => {
    const d = githubData[repo.toLowerCase()];
    return d ? { stars: d.stars, forks: d.forks } : null;
  };

  return (
    <section id="projects" className="scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="text-primary text-sm font-mono uppercase tracking-widest mb-2">Projects</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Things I&apos;ve Built</h2>
        <p className="text-muted-foreground mt-3 text-sm">
          {projects.length} projects — solo tools, OSS contributions, and AI systems.
        </p>
      </motion.div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
              active === cat
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border text-muted-foreground hover:text-foreground hover:border-border/80"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((project, i) => {
          const ghStats = getStats(project.repoName);
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              <Card className="border-border h-full hover:bg-accent/30 transition-colors group">
                <CardContent className="pt-5 pb-4 flex flex-col h-full gap-3">
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-foreground text-sm leading-tight">
                        {project.title}
                      </span>
                      {project.featured && (
                        <Badge
                          variant="outline"
                          className="text-[10px] py-0 px-1.5 border-primary/30 text-primary"
                        >
                          featured
                        </Badge>
                      )}
                    </div>
                    {ghStats !== null && (
                      <div className="flex items-center gap-2.5 flex-shrink-0">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="text-amber-400">
                            <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
                          </svg>
                          {ghStats.stars}
                        </span>
                        {ghStats.forks > 0 && (
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="text-muted-foreground">
                              <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
                            </svg>
                            {ghStats.forks}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Docker pulls badge for MLCore */}
                  {project.showDockerPulls && dockerPulls !== null && (
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" className="text-blue-400">
                        <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.185v1.888c0 .102.084.185.186.185m-2.92 0h2.12a.186.186 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/>
                      </svg>
                      {dockerPulls.toLocaleString()} pulls
                    </span>
                  )}

                  {/* Category badge */}
                  <Badge
                    variant="outline"
                    className={`text-[10px] w-fit ${categoryColor[project.category] ?? ""}`}
                  >
                    {project.category}
                  </Badge>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-1">
                    {project.githubUrl && (
                      <Button size="sm" variant="outline" className="h-7 text-xs flex-1" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          Source
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && project.liveUrl !== project.githubUrl && (
                      <Button size="sm" className="h-7 text-xs flex-1" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          {project.liveLabel ?? (project.category === "OSS" ? "PRs" : "Live")}
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
