"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { Separator } from "@/components/ui/separator";

function TiltCard({ children, accent }: { children: React.ReactNode; accent: { top: string; glow: string } }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current!.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function onMouseLeave() { x.set(0); y.set(0); }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 800 }}
      whileHover={{ scale: 1.02 }}
      transition={{ scale: { duration: 0.2 } }}
      className="group relative rounded-xl border border-border bg-card overflow-hidden flex flex-col cursor-default"
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 12px 40px ${accent.glow}, 0 0 0 1px ${accent.top}30`;
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "";
      }}
    >
      {children}
    </motion.div>
  );
}

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
    liveUrl: "https://github.com/deepset-ai/haystack/pulls?q=is%3Apr+author%3AAmanbig",
    githubUrl: "https://github.com/deepset-ai/haystack",
    featured: true,
    liveLabel: "PRs",
  },
  {
    id: "10",
    title: "Haystack Integrations (OSS)",
    repoName: "haystack-core-integrations",
    description: "Contrib: MongoDB Atlas metadata exploration methods.",
    category: "OSS",
    tags: ["Python", "MongoDB", "Atlas"],
    liveUrl: "https://github.com/deepset-ai/haystack-core-integrations/pulls?q=is%3Apr+author%3AAmanbig",
    githubUrl: "https://github.com/deepset-ai/haystack-core-integrations",
    featured: true,
    liveLabel: "PRs",
  },
];

const categories = ["All", "Web", "Desktop", "AI/ML", "OSS"];

/* Category accent colours — used for top border + hover glow */
const catAccent: Record<string, { top: string; glow: string; badge: string }> = {
  Web:     { top: "#3b82f6", glow: "rgba(59,130,246,0.10)",  badge: "bg-blue-500/10   text-blue-400   border-blue-500/20"  },
  Desktop: { top: "#a855f7", glow: "rgba(168,85,247,0.10)",  badge: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
  "AI/ML": { top: "#22c55e", glow: "rgba(34,197,94,0.10)",   badge: "bg-green-500/10  text-green-400  border-green-500/20"  },
  OSS:     { top: "#f59e0b", glow: "rgba(245,158,11,0.10)",  badge: "bg-amber-500/10  text-amber-400  border-amber-500/20"  },
  Mobile:  { top: "#06b6d4", glow: "rgba(6,182,212,0.10)",   badge: "bg-cyan-500/10   text-cyan-400   border-cyan-500/20"   },
};

const langDot: Record<string, string> = {
  Python: "#3572A5", TypeScript: "#3178c6", JavaScript: "#f1e05a",
  Rust: "#dea584", Dart: "#00B4AB", "C++": "#f34b7d", Java: "#b07219",
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

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  const getGH = (repo: string) => githubData[repo.toLowerCase()] ?? null;

  return (
    <section id="projects" className="scroll-mt-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <p className="text-primary text-sm font-mono uppercase tracking-widest mb-2">Projects</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Things I&apos;ve Built</h2>
        <p className="text-muted-foreground mt-3 text-sm">
          {projects.length} projects — solo tools, OSS contributions, and AI systems.
        </p>
      </motion.div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => {
          const accent = catAccent[cat];
          const isActive = active === cat;
          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="relative px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200"
              style={
                isActive && accent
                  ? { background: accent.glow, borderColor: accent.top, color: accent.top }
                  : isActive
                  ? undefined
                  : {}
              }
              {...(!accent && isActive
                ? { className: "px-4 py-1.5 rounded-full text-sm font-medium border bg-primary text-primary-foreground border-primary transition-all" }
                : !isActive
                ? { className: "px-4 py-1.5 rounded-full text-sm font-medium border border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground transition-all" }
                : {})}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project, i) => {
          const gh = getGH(project.repoName);
          const accent = catAccent[project.category] ?? { top: "#6366f1", glow: "rgba(99,102,241,.08)", badge: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" };

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
            <TiltCard accent={accent}>
              {/* Coloured top accent bar */}
              <div className="h-[3px] w-full flex-shrink-0" style={{ background: `linear-gradient(to right, ${accent.top}, ${accent.top}50)` }} />

              <div className="p-5 flex flex-col flex-1 gap-3">
                {/* Title row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-0.5">
                      <span className="font-semibold text-foreground text-base leading-tight truncate">
                        {project.title}
                      </span>
                      {project.featured && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full font-medium"
                          style={{ background: `${accent.top}18`, color: accent.top, border: `1px solid ${accent.top}30` }}>
                          featured
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Stars + forks */}
                  {gh && (
                    <div className="flex items-center gap-2.5 flex-shrink-0 text-xs text-muted-foreground">
                      {gh.stars > 0 && (
                        <span className="flex items-center gap-1">
                          <svg viewBox="0 0 16 16" width="11" height="11" fill="#f59e0b"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" /></svg>
                          {gh.stars}
                        </span>
                      )}
                      {gh.forks > 0 && (
                        <span className="flex items-center gap-1">
                          <svg viewBox="0 0 16 16" width="11" height="11" fill="currentColor"><path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" /></svg>
                          {gh.forks}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Category + language row */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${accent.badge}`}>
                    {project.category}
                  </span>
                  {gh?.language && langDot[gh.language] && (
                    <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: langDot[gh.language] }} />
                      {gh.language}
                    </span>
                  )}
                  {project.showDockerPulls && dockerPulls !== null && (
                    <span className="flex items-center gap-1 text-[10px] text-blue-400">
                      <svg viewBox="0 0 24 24" width="10" height="10" fill="currentColor"><path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.185v1.888c0 .102.084.185.186.185m-2.92 0h2.12a.186.186 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/></svg>
                      {dockerPulls.toLocaleString()} pulls
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground border border-border">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full text-muted-foreground/50">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                <Separator className="mt-auto" />

                {/* Action buttons */}
                <div className="flex gap-2 pt-0.5">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 text-xs font-medium py-1.5 px-3 rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground transition-all">
                      <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      Source
                    </a>
                  )}
                  {project.liveUrl && project.liveUrl !== project.githubUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 text-xs font-medium py-1.5 px-3 rounded-md transition-all"
                      style={{ background: accent.top, color: "#fff" }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                      onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                    >
                      {project.liveLabel ?? (project.category === "OSS" ? "PRs" : "Live")} ↗
                    </a>
                  )}
                </div>
              </div>
            </TiltCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
