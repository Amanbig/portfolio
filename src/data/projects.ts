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

export const projects: Project[] = [
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
