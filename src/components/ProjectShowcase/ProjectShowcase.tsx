"use client";
import { useState } from "react";
import { motion } from "motion/react";

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  date: string;
  permissions: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "chatme",
    description: "Agent-driven AI desktop app with voice & cross-platform support",
    category: "Desktop",
    tags: ["rust", "react", "tauri", "agents", "voice"],
    image: "/projects/chatme.png",
    liveUrl: "https://github.com/Amanbig/ChatMe/releases",
    githubUrl: "https://github.com/Amanbig/ChatMe",
    featured: true,
    date: "Oct 24 10:00",
    permissions: "-rwxr-xr-x"
  },
  {
    id: "2",
    title: "nextpy",
    description: "CLI for NextJS + FastAPI apps",
    category: "Web",
    tags: ["cli", "python", "node"],
    image: "/projects/nextpy.png",
    liveUrl: "https://www.npmjs.com/package/create-nextpy-app",
    githubUrl: "https://github.com/Amanbig/create-nextpy-app",
    featured: true,
    date: "Sep 15 14:30",
    permissions: "-rwxr--r--"
  },
  {
    id: "3",
    title: "fileex",
    description: "Modern file explorer with shadcn/ui",
    category: "Desktop",
    tags: ["rust", "tauri", "ui"],
    image: "/projects/fileex.png",
    liveUrl: "https://github.com/Amanbig/fileEx/releases/",
    githubUrl: "https://github.com/Amanbig/fileEx",
    featured: true,
    date: "Aug 05 09:15",
    permissions: "-rw-r--r--"
  },
  {
    id: "4",
    title: "backtool",
    description: "Node.js backend generator CLI with multi-DB & visual UI",
    category: "Web",
    tags: ["node", "cli", "backend", "mongodb", "postgres"],
    image: "/projects/backtool.png",
    liveUrl: "https://www.npmjs.com/package/backtool",
    githubUrl: "https://github.com/Amanbig/backTool",
    featured: true,
    date: "Jul 20 16:45",
    permissions: "-rwxr-xr-x"
  },
  {
    id: "5",
    title: "mlcore",
    description: "Self-hosted ML platform — upload datasets, train & monitor models",
    category: "AI/ML",
    tags: ["python", "fastapi", "grafana", "ml", "docker"],
    image: "/projects/mlcore.png",
    liveUrl: "https://github.com/Amanbig/MLCore",
    githubUrl: "https://github.com/Amanbig/MLCore",
    featured: true,
    date: "Mar 10 10:30",
    permissions: "-rwxr-xr-x"
  },
  {
    id: "6",
    title: "runapi",
    description: "File-based routing framework for FastAPI (Next.js style)",
    category: "Web",
    tags: ["python", "fastapi", "framework", "pypi"],
    image: "/projects/runapi.png",
    liveUrl: "https://pypi.org/project/runapi/",
    githubUrl: "https://github.com/Amanbig/runapi",
    featured: true,
    date: "Nov 12 11:00",
    permissions: "-rwxr-xr-x"
  },
  {
    id: "7",
    title: "gem-ai",
    description: "Creative content generator app",
    category: "Mobile",
    tags: ["flutter", "dart", "gemini"],
    image: "/projects/dashboard.jpg",
    liveUrl: "https://github.com/Amanbig/Gemini_app",
    githubUrl: "https://github.com/Amanbig/Gemini_app",
    featured: false,
    date: "Feb 14 12:00",
    permissions: "-rwxr-xr-x"
  },
  {
    id: "8",
    title: "fileshare",
    description: "Secure file sharing platform",
    category: "Web",
    tags: ["nextjs", "nestjs", "appwrite"],
    image: "/projects/fileshare.png",
    liveUrl: "https://file-share-three-mu.vercel.app/",
    githubUrl: "https://github.com/Amanbig/FileShare",
    featured: true,
    date: "Jan 20 09:30",
    permissions: "-rwxr-xr-x"
  },
  {
    id: "9",
    title: "music-level",
    description: "AI-powered music generation",
    category: "Web",
    tags: ["nextjs", "nestjs", "gemini"],
    image: "/projects/music-level.png",
    liveUrl: "https://music-level.vercel.app/",
    githubUrl: "https://github.com/Amanbig/music_level",
    featured: true,
    date: "Dec 05 16:20",
    permissions: "-rwxr-xr-x"
  },
  // OSS Contributions
  {
    id: "10",
    title: "haystack",
    description: "Contrib: JSON parsing refactor, pipeline deprecation & docs",
    category: "OSS",
    tags: ["python", "oss", "deepset", "llm", "ai"],
    image: "/projects/haystack.png",
    liveUrl: "https://github.com/deepset-ai/haystack/pulls?q=is%3Apr+author%3AAmanbig",
    githubUrl: "https://github.com/deepset-ai/haystack",
    featured: true,
    date: "Feb 20 09:00",
    permissions: "drwxr-xr-x"
  },
  {
    id: "11",
    title: "haystack-integrations",
    description: "Contrib: MongoDB Atlas metadata exploration methods",
    category: "OSS",
    tags: ["python", "mongodb", "oss", "deepset", "atlas"],
    image: "/projects/haystack.png",
    liveUrl: "https://github.com/deepset-ai/haystack-core-integrations/pulls?q=is%3Apr+author%3AAmanbig",
    githubUrl: "https://github.com/deepset-ai/haystack-core-integrations",
    featured: true,
    date: "Jan 15 14:00",
    permissions: "drwxr-xr-x"
  },
];

const categories = ["All", "Web", "Desktop", "Mobile", "AI/ML", "OSS"];

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto w-full px-4 font-mono">
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg overflow-hidden shadow-xl">
        {/* Terminal Header */}
        <div className="bg-[#161b22] px-4 py-2.5 border-b border-[#30363d] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#8b949e] text-xs">projects-list</span>
          </div>
          <div className="flex items-center gap-3 text-[#8b949e] text-xs">
            <span>Total: {projects.length}</span>
            <span>zsh</span>
          </div>
        </div>

        <div className="p-6 md:p-10">
          {/* Command Input */}
          <div className="mb-6 text-[#c9d1d9] text-sm md:text-base">
            <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> cd projects && ls -la
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs transition-all border ${
                  activeCategory === category
                    ? category === "OSS"
                      ? "bg-purple-500/15 text-purple-300 border-purple-500/40 font-bold"
                      : "bg-blue-500/10 text-blue-400 border-blue-400/40 font-bold"
                    : "text-[#8b949e] border-[#30363d] hover:border-[#484f58] hover:text-[#c9d1d9]"
                }`}
              >
                <span>{category === "OSS" ? "🌐" : category === "All" ? "✦" : "📁"}</span>
                {category}
              </button>
            ))}
          </div>

          {/* File List */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="text-[#484f58] border-b border-[#30363d]">
                  <th className="pb-2 font-normal whitespace-nowrap pr-4">Permissions</th>
                  <th className="pb-2 font-normal whitespace-nowrap pr-4">User</th>
                  <th className="pb-2 font-normal whitespace-nowrap pr-4">Date</th>
                  <th className="pb-2 font-normal pr-4">Name</th>
                  <th className="pb-2 font-normal">Description</th>
                  <th className="pb-2 font-normal text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="font-mono">
                {filteredProjects.map((project, index) => (
                  <motion.tr
                    key={project.id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                    className={`group transition-colors border-b border-[#30363d]/40 last:border-0 ${
                      project.category === "OSS" ? "hover:bg-[#1a1030]" : "hover:bg-[#161b22]"
                    }`}
                  >
                    <td className={`py-3 whitespace-nowrap pr-6 font-mono text-[10px] ${project.category === "OSS" ? "text-purple-400/50" : "text-[#484f58]"}`}>
                      {project.permissions}
                    </td>
                    <td className="py-3 text-[#e0af68] whitespace-nowrap pr-4">aman</td>
                    <td className="py-3 text-[#484f58] whitespace-nowrap pr-6">{project.date}</td>
                    <td className="py-3 pr-6 whitespace-nowrap">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1.5">
                          {project.category === "OSS" ? (
                            <span className="text-purple-400 font-bold group-hover:underline">{project.title}</span>
                          ) : (
                            <span className="text-blue-400 font-bold group-hover:underline">{project.title}</span>
                          )}
                          {project.featured && <span className="text-yellow-400">*</span>}
                          {project.category === "OSS" && (
                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-purple-500/15 text-purple-300 border border-purple-500/30">
                              contrib
                            </span>
                          )}
                        </div>
                        {/* Top 2 tag pills */}
                        <div className="flex gap-1">
                          {project.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="text-[9px] px-1.5 py-0.5 rounded bg-[#21262d] text-[#8b949e] border border-[#30363d]">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </td>
                    <td className="py-3 text-[#8b949e] pr-4 max-w-[240px]">
                      <span className="block truncate" title={project.description}>{project.description}</span>
                    </td>
                    <td className="py-3 text-right whitespace-nowrap">
                      <div className="flex justify-end gap-3 opacity-40 group-hover:opacity-100 transition-opacity">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`hover:opacity-80 transition-opacity ${project.category === "OSS" ? "text-purple-400" : "text-green-400"}`}
                          >
                            {project.category === "OSS" ? "[prs]" : "[run]"}
                          </a>
                        )}
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-[#8b949e] hover:text-white">
                            [src]
                          </a>
                        )}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-[#8b949e] text-sm">
            Total: {filteredProjects.length} files found.
          </div>
        </div>
      </div>
    </section>
  );
}