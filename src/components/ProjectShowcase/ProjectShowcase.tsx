"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";

export interface Project {
  id: string;
  name: string;
  title: string;
  headline: string;
  description: string;
  category: "DevOps & Systems" | "Developer Tools" | "AI & LLM" | "OSS Contributions" | "Web & API";
  tags: string[];
  language: "Go" | "TypeScript" | "JavaScript" | "Python" | "Rust" | "Dart";
  languageColor: string;
  stars?: number;
  forks?: number;
  pinned: boolean;
  featured: boolean;
  githubUrl: string;
  liveUrl?: string;
  liveLabel?: string;
  installCmd?: string;
  date: string;
  permissions: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    id: "phantomops",
    name: "PhantomOps",
    title: "PhantomOps",
    headline: "Autonomous Multi-Cloud Incident Correlator & Root Cause Engine",
    description: "Connects to Docker, Kubernetes, Nomad, Prometheus, Loki and SSH hosts, correlates observability streams into incident timelines, and proposes precise root causes.",
    category: "DevOps & Systems",
    tags: ["go", "kubernetes", "docker", "nomad", "prometheus", "loki", "incident-response"],
    language: "Go",
    languageColor: "#00ADD8",
    stars: 2,
    forks: 0,
    pinned: true,
    featured: true,
    githubUrl: "https://github.com/Amanbig/PhantomOps",
    installCmd: "git clone https://github.com/Amanbig/PhantomOps.git",
    date: "Nov 2026",
    permissions: "-rwxr-xr-x",
    highlights: [
      "Multi-engine telemetry correlation (K8s, Nomad, Docker, Loki)",
      "Automated incident timeline generation with causal linking",
      "Cross-host SSH telemetry aggregator & root cause detection"
    ]
  },
  {
    id: "termlet",
    name: "termlet",
    title: "termlet",
    headline: "Fast Desktop SSH Client with Built-in SFTP & Code Editor",
    description: "Cross-platform desktop SSH client with a built-in SFTP file browser, remote CodeMirror code editor, and port forwarding manager for remote server management.",
    category: "DevOps & Systems",
    tags: ["typescript", "go", "react", "codemirror", "ssh", "sftp", "snapcraft"],
    language: "TypeScript",
    languageColor: "#3178C6",
    stars: 5,
    forks: 1,
    pinned: true,
    featured: true,
    githubUrl: "https://github.com/Amanbig/termlet",
    liveUrl: "https://snapcraft.io/termlet",
    liveLabel: "Snap Store",
    installCmd: "sudo snap install termlet",
    date: "Nov 2026",
    permissions: "-rwxr-xr-x",
    highlights: [
      "Integrated SFTP tree with instant remote drag-and-drop",
      "Full CodeMirror editing over SSH with syntax highlighting",
      "Local/Remote port forwarding manager with tunnel status",
      "Published on Canonical Snapcraft store"
    ]
  },
  {
    id: "dockit",
    name: "dockit",
    title: "dockit",
    headline: "Modern Desktop Container Management for Docker & Podman",
    description: "Modern desktop container management app supporting Docker and Podman simultaneously with unified abstractions, staged Compose testing, and multi-registry exploration.",
    category: "DevOps & Systems",
    tags: ["javascript", "go", "docker", "podman", "compose", "containers", "snapcraft"],
    language: "JavaScript",
    languageColor: "#F7DF1E",
    stars: 5,
    forks: 0,
    pinned: true,
    featured: true,
    githubUrl: "https://github.com/Amanbig/dockit",
    liveUrl: "https://snapcraft.io/dockit",
    liveLabel: "Snap Store",
    installCmd: "sudo snap install dockit",
    date: "Nov 2026",
    permissions: "-rwxr-xr-x",
    highlights: [
      "Simultaneous Docker & Podman engine management",
      "Isolated staged Compose testing environment",
      "Multi-registry exploration (Docker Hub, GHCR, Quay)",
      "Automated runtime detection & one-click install"
    ]
  },
  {
    id: "manup",
    name: "ManUp",
    title: "ManUp",
    headline: "Self-Hosted Secrets Management Platform & K8s Injector",
    description: "Open-source, self-hosted Secrets Management platform designed to securely store, manage, and orchestrate environment secrets across teams and environments.",
    category: "DevOps & Systems",
    tags: ["typescript", "secrets", "security", "cryptography", "kubernetes", "docker"],
    language: "TypeScript",
    languageColor: "#3178C6",
    stars: 4,
    forks: 0,
    pinned: true,
    featured: true,
    githubUrl: "https://github.com/Amanbig/ManUp",
    liveUrl: "https://amanbig.github.io/ManUp/",
    liveLabel: "Docs & Demo",
    installCmd: "docker pull procoder588/manup-injector",
    date: "Nov 2026",
    permissions: "-rwxr-xr-x",
    highlights: [
      "Zero-knowledge encrypted secret storage vault",
      "Official Kubernetes mutating webhook injector (manup-k8s)",
      "Environment isolation & RBAC team access control",
      "Automated secret injection for container workloads"
    ]
  },
  {
    id: "devorch",
    name: "DevOrch",
    title: "DevOrch",
    headline: "Terminal-Native Multi-Provider AI Developer Assistant",
    description: "Terminal-native, multi-provider intelligent assistant that plans, executes, and tracks developer tasks with git workflow integration, similar to Claude Code and Gemini CLI.",
    category: "AI & LLM",
    tags: ["python", "ai-agent", "cli", "git", "anthropic", "gemini", "pypi"],
    language: "Python",
    languageColor: "#3572A5",
    stars: 4,
    forks: 0,
    pinned: true,
    featured: true,
    githubUrl: "https://github.com/Amanbig/DevOrch",
    liveUrl: "https://pypi.org/project/devorch/",
    liveLabel: "PyPI Package",
    installCmd: "pip install devorch",
    date: "Oct 2026",
    permissions: "-rwxr-xr-x",
    highlights: [
      "Multi-provider routing: Claude, Gemini, OpenAI, Groq, Mistral",
      "Autonomous plan-execute-verify task orchestration loop",
      "Interactive git diff review & automated semantic commits",
      "Published on Python Package Index (PyPI)"
    ]
  },
  {
    id: "runapi",
    name: "runapi",
    title: "runapi",
    headline: "Next.js-Inspired File-Based Routing Framework for FastAPI",
    description: "File-based routing framework built on FastAPI for Python backend development. Makes building robust, production APIs as intuitive as creating folders and files.",
    category: "Web & API",
    tags: ["python", "fastapi", "folder-routing", "pypi", "framework", "rest-api"],
    language: "Python",
    languageColor: "#3572A5",
    stars: 5,
    forks: 2,
    pinned: true,
    featured: true,
    githubUrl: "https://github.com/Amanbig/runapi",
    liveUrl: "https://pypi.org/project/runapi/",
    liveLabel: "PyPI Package",
    installCmd: "pip install runapi",
    date: "Oct 2026",
    permissions: "-rwxr-xr-x",
    highlights: [
      "Next.js style directory routing for Python (/api/users/[id].py)",
      "Automated OpenAPI schema generation & interactive docs",
      "Built-in middleware, auth dependencies, and lifespan hooks",
      "Active PyPI package with 1,000+ developer downloads"
    ]
  },
  {
    id: "haystack-core",
    name: "haystack",
    title: "deepset-ai / haystack",
    headline: "Core Contributor to Haystack LLM Framework",
    description: "Merged upstream pull requests to Haystack core — refactored JSON parser handling, pipeline component deprecation warnings, and documentation.",
    category: "OSS Contributions",
    tags: ["python", "oss", "haystack", "deepset", "llm-pipelines", "rag"],
    language: "Python",
    languageColor: "#3572A5",
    pinned: false,
    featured: true,
    githubUrl: "https://github.com/deepset-ai/haystack",
    liveUrl: "https://github.com/deepset-ai/haystack/pulls?q=is%3Apr+author%3AAmanbig",
    liveLabel: "Merged PRs",
    date: "Sep 2026",
    permissions: "drwxr-xr-x",
    highlights: [
      "Refactored JSON parsing logic for improved error recovery",
      "Pipeline component deprecation lifecycle implementation",
      "Core contributor to production LLM orchestration framework"
    ]
  },
  {
    id: "haystack-integrations",
    name: "haystack-integrations",
    title: "deepset-ai / haystack-core-integrations",
    headline: "MongoDB Atlas Vector Search Contributor",
    description: "Contributed MongoDB Atlas metadata exploration methods and document store search integration to Haystack's core integrations ecosystem.",
    category: "OSS Contributions",
    tags: ["python", "mongodb", "atlas", "vector-search", "oss", "haystack"],
    language: "Python",
    languageColor: "#3572A5",
    pinned: false,
    featured: true,
    githubUrl: "https://github.com/deepset-ai/haystack-core-integrations",
    liveUrl: "https://github.com/deepset-ai/haystack-core-integrations/pulls?q=is%3Apr+author%3AAmanbig",
    liveLabel: "Merged PRs",
    date: "Aug 2026",
    permissions: "drwxr-xr-x",
    highlights: [
      "MongoDB Atlas Vector Document Store integration",
      "Metadata facet exploration and indexing methods",
      "Merged upstream into official deepset repository"
    ]
  },
  {
    id: "chatme",
    name: "ChatMe",
    title: "ChatMe",
    headline: "Voice-Enabled Agentic AI Desktop Application",
    description: "Combines agent-driven AI, cross-platform desktop responsiveness, and natural voice interaction in a single lightweight desktop app built with Tauri & React.",
    category: "AI & LLM",
    tags: ["rust", "tauri", "react", "voice-ai", "agents", "desktop"],
    language: "Rust",
    languageColor: "#DEA584",
    stars: 4,
    forks: 0,
    pinned: false,
    featured: true,
    githubUrl: "https://github.com/Amanbig/ChatMe",
    liveUrl: "https://github.com/Amanbig/ChatMe/releases",
    liveLabel: "Releases",
    installCmd: "cargo install --path .",
    date: "Jul 2026",
    permissions: "-rwxr-xr-x",
    highlights: [
      "Local & cloud voice pipeline with low latency synthesis",
      "Multi-agent reasoning loops with tool execution",
      "Ultra-compact native memory footprint via Rust + Tauri"
    ]
  },
  {
    id: "mlcore",
    name: "MLCore",
    title: "MLCore",
    headline: "Self-Hosted Machine Learning Platform with Grafana",
    description: "Upload datasets, train models, and monitor training & inference performance in real-time with Grafana and Prometheus metrics. Over 350+ Docker pulls.",
    category: "Developer Tools",
    tags: ["python", "fastapi", "grafana", "docker", "machine-learning"],
    language: "Python",
    languageColor: "#3572A5",
    pinned: false,
    featured: true,
    githubUrl: "https://github.com/Amanbig/MLCore",
    liveUrl: "https://hub.docker.com/r/procoder588/mlcore",
    liveLabel: "Docker Hub",
    installCmd: "docker pull procoder588/mlcore",
    date: "Jun 2026",
    permissions: "-rwxr-xr-x",
    highlights: [
      "Automated dataset ingestion & training execution",
      "Live training telemetry exporter for Prometheus & Grafana",
      "350+ production Docker pulls"
    ]
  },
  {
    id: "backtool",
    name: "backTool",
    title: "backTool",
    headline: "Interactive Node.js Backend Scaffolding CLI & Web UI",
    description: "Generate production-grade Node.js backends with MongoDB/PostgreSQL, authentication, and visual configuration in seconds.",
    category: "Developer Tools",
    tags: ["node", "cli", "typescript", "mongodb", "postgres", "npm"],
    language: "TypeScript",
    languageColor: "#3178C6",
    pinned: false,
    featured: false,
    githubUrl: "https://github.com/Amanbig/backTool",
    liveUrl: "https://www.npmjs.com/package/backtool",
    liveLabel: "npm Package",
    installCmd: "npx backtool",
    date: "May 2026",
    permissions: "-rwxr-xr-x",
    highlights: [
      "Interactive CLI with dual command-line and web UI mode",
      "Multi-database ORM configurations (MongoDB, PostgreSQL)",
      "Published on npm registry"
    ]
  },
  {
    id: "traceback",
    name: "TraceBack",
    title: "TraceBack",
    headline: "AI Digital Scam & Fraud Forensics Engine",
    description: "Cross-platform application analyzing suspicious URLs, fraudulent communications, and cyber scam patterns using automated forensic heuristics.",
    category: "AI & LLM",
    tags: ["flutter", "dart", "ai-forensics", "cybersecurity", "gemini"],
    language: "Dart",
    languageColor: "#00B4AB",
    pinned: false,
    featured: false,
    githubUrl: "https://github.com/Amanbig/traceback",
    liveUrl: "https://gem-app-2adf0.web.app",
    liveLabel: "Web Demo",
    date: "Apr 2026",
    permissions: "-rwxr-xr-x",
    highlights: [
      "Heuristic phishing pattern detector",
      "Cross-platform Web & Mobile interface via Flutter",
      "Real-time forensic breakdown reports"
    ]
  }
];

const categoryTabs = [
  { id: "all", label: "All Projects", icon: "✦" },
  { id: "pinned", label: "📌 Pinned", icon: "⭐" },
  { id: "devops", label: "DevOps & Systems", icon: "⚙️" },
  { id: "devtools", label: "Developer Tools", icon: "🛠️" },
  { id: "ai", label: "AI & LLM", icon: "🤖" },
  { id: "oss", label: "OSS Contributions", icon: "🌐" },
  { id: "web", label: "Web & API", icon: "🚀" }
];

export default function ProjectShowcase() {
  const [activeTab, setActiveTab] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "terminal">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Tab filter
      if (activeTab === "pinned" && !project.pinned) return false;
      if (activeTab === "devops" && project.category !== "DevOps & Systems") return false;
      if (activeTab === "devtools" && project.category !== "Developer Tools") return false;
      if (activeTab === "ai" && project.category !== "AI & LLM") return false;
      if (activeTab === "oss" && project.category !== "OSS Contributions") return false;
      if (activeTab === "web" && project.category !== "Web & API") return false;

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = project.name.toLowerCase().includes(q);
        const matchesDesc = project.description.toLowerCase().includes(q);
        const matchesHeadline = project.headline.toLowerCase().includes(q);
        const matchesTag = project.tags.some((t) => t.toLowerCase().includes(q));
        const matchesLang = project.language.toLowerCase().includes(q);
        return matchesName || matchesDesc || matchesHeadline || matchesTag || matchesLang;
      }

      return true;
    });
  }, [activeTab, searchQuery]);

  const handleCopyCmd = (id: string, cmd: string) => {
    if (!navigator?.clipboard) return;
    navigator.clipboard.writeText(cmd);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const pinnedCount = projects.filter((p) => p.pinned).length;

  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto w-full px-4 font-mono">
      <div className="bg-[#0d1117] border border-[#30363d] rounded-xl overflow-hidden shadow-2xl glow-blue">
        {/* Terminal Header */}
        <div className="bg-[#161b22] px-4 py-3 border-b border-[#30363d] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 mr-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block" />
            </div>
            <span className="text-blue-400 font-semibold text-xs md:text-sm">aman@portfolio:~/projects</span>
            <span className="text-[#8b949e] text-xs hidden sm:inline">(git:feat/redesign-projects)</span>
          </div>

          <div className="flex items-center gap-2 text-xs">
            {/* View Switcher */}
            <div className="flex items-center bg-[#21262d] border border-[#30363d] rounded-md p-0.5">
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`px-2.5 py-1 rounded text-xs transition-colors flex items-center gap-1.5 ${
                  viewMode === "grid"
                    ? "bg-blue-500/20 text-blue-400 font-bold border border-blue-500/30"
                    : "text-[#8b949e] hover:text-[#c9d1d9]"
                }`}
                title="Cards Grid View"
              >
                <span>⚡</span>
                <span className="hidden sm:inline">Grid Cards</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("terminal")}
                className={`px-2.5 py-1 rounded text-xs transition-colors flex items-center gap-1.5 ${
                  viewMode === "terminal"
                    ? "bg-blue-500/20 text-blue-400 font-bold border border-blue-500/30"
                    : "text-[#8b949e] hover:text-[#c9d1d9]"
                }`}
                title="Terminal ls -la View"
              >
                <span>❯_</span>
                <span className="hidden sm:inline">Terminal View</span>
              </button>
            </div>

            <div className="hidden md:flex items-center gap-3 text-[#8b949e] pl-2 border-l border-[#30363d]">
              <span className="text-yellow-400/90 text-xs">⭐ {pinnedCount} Pinned</span>
              <span>Total: {projects.length}</span>
            </div>
          </div>
        </div>

        {/* Control Center & Command Prompt */}
        <div className="p-6 md:p-8 border-b border-[#30363d]/60 bg-[#12161f]/60">
          {/* Simulated CLI Command Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2 text-sm text-[#c9d1d9] flex-1">
              <span className="text-green-400">➜</span>
              <span className="text-blue-400">projects</span>
              <span className="text-purple-400">git:(main)</span>
              <span className="text-[#8b949e] hidden sm:inline">find . -type project | grep</span>
              <div className="relative flex-1 max-w-xs">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="grep -i [query] (e.g. docker, go, python)..."
                  className="w-full bg-[#161b22] border border-[#30363d] focus:border-blue-400 text-xs text-[#c9d1d9] rounded px-3 py-1.5 outline-none placeholder-[#484f58] transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2 top-1.5 text-[#8b949e] hover:text-white text-xs"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>

            {/* Quick Status / Hint */}
            <div className="text-xs text-[#8b949e] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span>Showing {filteredProjects.length} of {projects.length} repositories</span>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none" style={{ scrollbarWidth: "none" }}>
            {categoryTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const isPinnedTab = tab.id === "pinned";
              const isOssTab = tab.id === "oss";

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs whitespace-nowrap transition-all border ${
                    isActive
                      ? isPinnedTab
                        ? "bg-amber-500/15 text-amber-300 border-amber-400/50 font-bold shadow-[0_0_10px_rgba(251,191,36,0.2)]"
                        : isOssTab
                        ? "bg-purple-500/15 text-purple-300 border-purple-400/50 font-bold shadow-[0_0_10px_rgba(168,85,247,0.2)]"
                        : "bg-blue-500/15 text-blue-400 border-blue-400/50 font-bold shadow-[0_0_10px_rgba(88,166,255,0.2)]"
                      : "text-[#8b949e] border-[#30363d] bg-[#161b22]/80 hover:border-[#484f58] hover:text-[#c9d1d9]"
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                  {tab.id === "pinned" && (
                    <span className="text-[10px] bg-amber-400/20 text-amber-300 px-1 rounded-sm">
                      {pinnedCount}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Content Area */}
        <div className="p-6 md:p-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16 text-[#8b949e]">
              <div className="text-2xl mb-2">🔍</div>
              <p className="text-sm">No projects matching your search &quot;{searchQuery}&quot;.</p>
              <button
                onClick={() => { setSearchQuery(""); setActiveTab("all"); }}
                className="mt-4 px-3 py-1 rounded bg-[#21262d] text-xs text-blue-400 border border-[#30363d] hover:border-blue-400"
              >
                Reset filters
              </button>
            </div>
          ) : viewMode === "grid" ? (
            /* ========================================================
               GRID CARDS VIEW - HIGH-IMPACT DEVELOPER CARDS
               ======================================================== */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((project, index) => {
                const isPinned = project.pinned;
                const isOss = project.category === "OSS Contributions";

                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className={`relative group bg-[#161b22] border rounded-lg p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                      isPinned
                        ? "border-[#30363d] hover:border-amber-400/60 hover:shadow-[0_0_18px_rgba(251,191,36,0.12)]"
                        : isOss
                        ? "border-[#30363d] hover:border-purple-400/60 hover:shadow-[0_0_18px_rgba(168,85,247,0.12)]"
                        : "border-[#30363d] hover:border-blue-400/60 hover:shadow-[0_0_18px_rgba(88,166,255,0.12)]"
                    }`}
                  >
                    {/* Top Row: Pinned status, Title, Language, Stars */}
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-base md:text-lg font-bold text-white group-hover:text-blue-300 transition-colors flex items-center gap-1.5">
                            <span>{project.title}</span>
                          </h3>

                          {isPinned && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 flex items-center gap-1 font-semibold">
                              <span>📌</span>
                              <span>PINNED</span>
                            </span>
                          )}

                          {isOss && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30 font-semibold">
                              CONTRIB
                            </span>
                          )}
                        </div>

                        {/* Stars & Language */}
                        <div className="flex items-center gap-2.5 text-xs text-[#8b949e]">
                          {typeof project.stars === "number" && (
                            <div className="flex items-center gap-1 text-amber-300/90 font-mono text-xs">
                              <span>★</span>
                              <span>{project.stars}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-1.5">
                            <span
                              className="w-2.5 h-2.5 rounded-full inline-block"
                              style={{ backgroundColor: project.languageColor }}
                            />
                            <span className="text-[11px] text-[#c9d1d9]">{project.language}</span>
                          </div>
                        </div>
                      </div>

                      {/* Headline / Role */}
                      <p className="text-xs font-semibold text-[#7aa2f7] mb-2 leading-snug">
                        {project.headline}
                      </p>

                      {/* Description */}
                      <p className="text-xs text-[#8b949e] leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Key Architectural Highlights */}
                      <div className="space-y-1 mb-4 bg-[#0d1117]/60 p-2.5 rounded border border-[#30363d]/50 text-[11px]">
                        {project.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-[#c9d1d9]">
                            <span className="text-green-400 mt-0.5">▸</span>
                            <span className="leading-tight">{h}</span>
                          </div>
                        ))}
                      </div>

                      {/* Install / Quick Command Bar if available */}
                      {project.installCmd && (
                        <div className="mb-4">
                          <div className="flex items-center justify-between bg-[#0d1117] border border-[#30363d] rounded px-2.5 py-1.5 text-[11px] font-mono">
                            <span className="text-green-400 mr-2 select-none">$</span>
                            <span className="text-[#c9d1d9] truncate flex-1">{project.installCmd}</span>
                            <button
                              type="button"
                              onClick={() => handleCopyCmd(project.id, project.installCmd!)}
                              className="ml-2 text-xs text-[#8b949e] hover:text-white transition-colors"
                              title="Copy install command"
                            >
                              {copiedId === project.id ? (
                                <span className="text-green-400 font-bold">✓ Copied</span>
                              ) : (
                                <span className="hover:underline">[copy]</span>
                              )}
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] px-2 py-0.5 rounded bg-[#21262d] text-[#8b949e] border border-[#30363d]"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-3 border-t border-[#30363d]/60 flex items-center justify-between text-xs">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs text-[#8b949e] hover:text-blue-300 flex items-center gap-1 transition-colors"
                      >
                        <span>[inspect info]</span>
                      </button>

                      <div className="flex items-center gap-3">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-400 hover:text-green-300 font-bold flex items-center gap-1 transition-colors"
                          >
                            <span>↗</span>
                            <span>{project.liveLabel || "Launch"}</span>
                          </a>
                        )}

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#8b949e] hover:text-white flex items-center gap-1 transition-colors"
                        >
                          <span>[src / github]</span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            /* ========================================================
               TERMINAL LS -LA VIEW - UNIX CLI DETAILED TABLE
               ======================================================== */
            <div className="overflow-x-auto">
              <div className="text-xs text-[#8b949e] mb-2 font-mono">
                total {filteredProjects.length} files
              </div>
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="text-[#484f58] border-b border-[#30363d]">
                    <th className="pb-2 font-normal whitespace-nowrap pr-3">Permissions</th>
                    <th className="pb-2 font-normal whitespace-nowrap pr-3">Owner</th>
                    <th className="pb-2 font-normal whitespace-nowrap pr-3">Language</th>
                    <th className="pb-2 font-normal whitespace-nowrap pr-4">Updated</th>
                    <th className="pb-2 font-normal pr-4">Repository</th>
                    <th className="pb-2 font-normal">Summary</th>
                    <th className="pb-2 font-normal text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="font-mono">
                  {filteredProjects.map((project, index) => (
                    <motion.tr
                      key={project.id}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03 }}
                      className={`group transition-colors border-b border-[#30363d]/40 last:border-0 hover:bg-[#161b22]`}
                    >
                      <td className="py-3 whitespace-nowrap pr-3 text-[#484f58] text-[10px]">
                        {project.permissions}
                      </td>
                      <td className="py-3 text-[#e0af68] whitespace-nowrap pr-3">aman</td>
                      <td className="py-3 whitespace-nowrap pr-3">
                        <span className="flex items-center gap-1 text-[11px] text-[#c9d1d9]">
                          <span
                            className="w-2 h-2 rounded-full inline-block"
                            style={{ backgroundColor: project.languageColor }}
                          />
                          {project.language}
                        </span>
                      </td>
                      <td className="py-3 text-[#484f58] whitespace-nowrap pr-4">{project.date}</td>
                      <td className="py-3 pr-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setSelectedProject(project)}
                            className="text-left font-bold text-blue-400 group-hover:underline cursor-pointer"
                          >
                            {project.name}
                          </button>
                          {project.pinned && (
                            <span className="text-amber-400 text-[10px]" title="Pinned Repository">
                              ★
                            </span>
                          )}
                          {project.category === "OSS Contributions" && (
                            <span className="text-[9px] px-1.5 py-0.2 rounded bg-purple-500/15 text-purple-300 border border-purple-500/30">
                              oss
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-3 text-[#8b949e] pr-4 max-w-sm">
                        <span className="block truncate" title={project.description}>
                          {project.description}
                        </span>
                      </td>
                      <td className="py-3 text-right whitespace-nowrap">
                        <div className="flex justify-end gap-3 text-xs">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-green-400 hover:underline"
                            >
                              [launch]
                            </a>
                          )}
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8b949e] hover:text-white hover:underline"
                          >
                            [src]
                          </a>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Terminal Footer Info */}
          <div className="mt-8 pt-4 border-t border-[#30363d]/60 flex flex-wrap items-center justify-between gap-4 text-xs text-[#8b949e]">
            <div>
              <span>Displaying </span>
              <span className="text-white font-bold">{filteredProjects.length}</span>
              <span> repositories. All code hosted on </span>
              <a
                href="https://github.com/Amanbig"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                github.com/Amanbig
              </a>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-amber-400">★ Starred by community</span>
              <span>•</span>
              <span className="text-purple-400">🌐 Merged OSS PRs</span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
         INSPECT PROJECT MODAL / DRAWER
         ======================================================== */}
      <AnimatePresence>
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0d1117] border border-[#30363d] rounded-xl max-w-2xl w-full p-6 text-[#c9d1d9] shadow-2xl overflow-hidden glow-blue font-mono"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#30363d] mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-green-400 text-xs">●</span>
                  <span className="text-[#8b949e] text-xs">cat ~/projects/{selectedProject.name}/README.md</span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-[#8b949e] hover:text-white text-base px-1"
                >
                  ✕
                </button>
              </div>

              {/* Title & Metadata */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>{selectedProject.title}</span>
                    {selectedProject.pinned && (
                      <span className="text-xs px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/40">
                        📌 Pinned
                      </span>
                    )}
                  </h3>
                  <p className="text-xs text-[#7aa2f7] mt-1">{selectedProject.headline}</p>
                </div>

                <div className="flex items-center gap-2 text-xs bg-[#161b22] px-3 py-1.5 rounded border border-[#30363d]">
                  <span
                    className="w-2.5 h-2.5 rounded-full inline-block"
                    style={{ backgroundColor: selectedProject.languageColor }}
                  />
                  <span>{selectedProject.language}</span>
                  {typeof selectedProject.stars === "number" && (
                    <span className="text-amber-300 ml-1">★ {selectedProject.stars}</span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-xs md:text-sm text-[#8b949e] leading-relaxed mb-4">
                {selectedProject.description}
              </p>

              {/* Highlights */}
              <div className="mb-4">
                <div className="text-xs text-[#c9d1d9] font-bold mb-2 uppercase tracking-wider">{"// Key Architectural Highlights"}</div>
                <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-3 space-y-1.5 text-xs">
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-green-400">✔</span>
                      <span className="text-[#c9d1d9]">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Install if available */}
              {selectedProject.installCmd && (
                <div className="mb-4">
                  <div className="text-xs text-[#8b949e] mb-1.5 font-bold uppercase tracking-wider">{"// Quick Install / Run"}</div>
                  <div className="flex items-center justify-between bg-[#161b22] border border-[#30363d] rounded px-3 py-2 text-xs font-mono">
                    <span className="text-green-400 mr-2">$</span>
                    <span className="text-[#c9d1d9] truncate flex-1">{selectedProject.installCmd}</span>
                    <button
                      type="button"
                      onClick={() => handleCopyCmd(selectedProject.id, selectedProject.installCmd!)}
                      className="ml-3 text-xs text-blue-400 hover:underline"
                    >
                      {copiedId === selectedProject.id ? "✓ Copied" : "[copy]"}
                    </button>
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {selectedProject.tags.map((t) => (
                  <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-[#21262d] text-[#8b949e] border border-[#30363d]">
                    #{t}
                  </span>
                ))}
              </div>

              {/* Footer Links */}
              <div className="pt-4 border-t border-[#30363d] flex items-center justify-between text-xs">
                <span className="text-[#8b949e]">category: {selectedProject.category}</span>

                <div className="flex items-center gap-3">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded bg-green-500/20 text-green-300 border border-green-500/40 hover:bg-green-500/30 transition-colors font-bold flex items-center gap-1"
                    >
                      <span>↗</span>
                      <span>{selectedProject.liveLabel || "Launch / Demo"}</span>
                    </a>
                  )}

                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded bg-[#21262d] text-white border border-[#30363d] hover:border-blue-400 transition-colors flex items-center gap-1"
                  >
                    <span>View Repository ➜</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
