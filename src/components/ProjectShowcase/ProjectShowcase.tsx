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
    description: "AI chat app built with Tauri & React",
    category: "Desktop",
    tags: ["rust", "react", "tauri"],
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
    description: "Node.js backend generator CLI",
    category: "Web",
    tags: ["node", "cli", "backend"],
    image: "/projects/backtool.png",
    liveUrl: "https://www.npmjs.com/package/backtool",
    githubUrl: "https://github.com/Amanbig/backTool",
    featured: true,
    date: "Jul 20 16:45",
    permissions: "-rwxr-xr-x"
  },
  {
    id: "5",
    title: "persona-ai",
    description: "Personality prediction using ML",
    category: "AI/ML",
    tags: ["python", "ml", "nextjs"],
    image: "/projects/Persona-AI.png",
    liveUrl: "https://introver-extrovert.vercel.app/",
    githubUrl: "https://github.com/Amanbig/Introver-Extrovert",
    featured: false,
    date: "Jun 10 11:20",
    permissions: "-rw-r--r--"
  },
  {
    id: "6",
    title: "satellite-ai",
    description: "Satellite image classification",
    category: "AI/ML",
    tags: ["tensorflow", "cnn", "python"],
    image: "/projects/satellite-ai.png",
    liveUrl: "https://satellite-ai-three.vercel.app/",
    githubUrl: "https://github.com/Amanbig/Satellite-AI",
    featured: false,
    date: "May 25 13:00",
    permissions: "-rw-r--r--"
  },
  {
    id: "7",
    title: "tomatoguard",
    description: "Tomato disease detection AI",
    category: "AI/ML",
    tags: ["cnn", "tensorflow", "agritech"],
    image: "/projects/tomato-guard-ai.png",
    liveUrl: "https://cnn-based-tomato-disease-prediction.vercel.app/",
    githubUrl: "https://github.com/Amanbig/CNN-based-Tomato-disease-prediction",
    featured: true,
    date: "Apr 12 08:45",
    permissions: "-rwxr-xr-x"
  },
  {
    id: "8",
    title: "crop-rec",
    description: "Intelligent crop recommendation",
    category: "AI/ML",
    tags: ["ml", "python", "agritech"],
    image: "/projects/crop-ai.png",
    liveUrl: "https://crop-recommendation-system-iota.vercel.app/",
    githubUrl: "https://github.com/Amanbig/crop-recommendation-system",
    featured: true,
    date: "Mar 30 15:10",
    permissions: "-rw-r--r--"
  },
  {
    id: "9",
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
    id: "10",
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
    id: "11",
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
  {
    id: "12",
    title: "runapi",
    description: "CLI tool for API testing",
    category: "Web",
    tags: ["python", "cli", "pypi"],
    image: "/projects/runapi.png",
    liveUrl: "https://pypi.org/project/runapi/",
    githubUrl: "https://github.com/Amanbig/runapi",
    featured: true,
    date: "Nov 12 11:00",
    permissions: "-rwxr-xr-x"
  }
];

const categories = ["All", "Web", "Desktop", "Mobile", "AI/ML"];

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto w-full px-4 font-mono">
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg overflow-hidden shadow-xl">
        {/* Terminal Header */}
        <div className="bg-[#161b22] px-4 py-2 border-b border-[#30363d] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#8b949e] text-xs">projects-list</span>
          </div>
          <div className="text-[#8b949e] text-xs">zsh</div>
        </div>

        <div className="p-6 md:p-10">
          {/* Command Input */}
          <div className="mb-6 text-[#c9d1d9] text-sm md:text-base">
            <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> cd projects && ls -la
          </div>

          {/* Category Filter as 'folders' */}
          <div className="flex flex-wrap gap-4 mb-8 text-sm">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center gap-1 hover:text-blue-400 transition-colors ${activeCategory === category ? "text-blue-400 font-bold" : "text-[#8b949e]"
                  }`}
              >
                <span className="text-yellow-400">📁</span>
                {category}
              </button>
            ))}
          </div>

          {/* File List */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm md:text-base border-collapse">
              <thead>
                <tr className="text-[#8b949e] border-b border-[#30363d]">
                  <th className="pb-2 font-normal">Permissions</th>
                  <th className="pb-2 font-normal">User</th>
                  <th className="pb-2 font-normal">Date</th>
                  <th className="pb-2 font-normal">Name</th>
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
                    transition={{ delay: index * 0.05 }}
                    className="group hover:bg-[#161b22] transition-colors border-b border-[#30363d]/50 last:border-0"
                  >
                    <td className="py-3 text-[#8b949e] whitespace-nowrap pr-4">{project.permissions}</td>
                    <td className="py-3 text-[#e0af68] whitespace-nowrap pr-4">aman</td>
                    <td className="py-3 text-[#8b949e] whitespace-nowrap pr-4">{project.date}</td>
                    <td className="py-3 font-bold text-blue-400 whitespace-nowrap pr-4 group-hover:underline">
                      {project.title}
                      {project.featured && <span className="text-yellow-400 ml-1">*</span>}
                    </td>
                    <td className="py-3 text-[#c9d1d9] min-w-[200px] pr-4">{project.description}</td>
                    <td className="py-3 text-right whitespace-nowrap">
                      <div className="flex justify-end gap-3 opacity-50 group-hover:opacity-100 transition-opacity">
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
                            [run]
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