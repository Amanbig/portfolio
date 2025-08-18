"use client";
import { useState } from "react";
import { motion } from "motion/react";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with advanced features",
    longDescription: "A full-stack e-commerce platform built with Next.js, featuring user authentication, payment processing, inventory management, and admin dashboard.",
    category: "Web Development",
    tags: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    image: "/projects/ecommerce.jpg",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: "2", 
    title: "Chat Application",
    description: "Real-time messaging app with modern UI",
    longDescription: "Real-time chat application with WebSocket integration, file sharing, emoji reactions, and group chat functionality.",
    category: "Web Development",
    tags: ["React", "Socket.io", "Node.js", "MongoDB"],
    image: "/projects/chat.jpg",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: "3",
    title: "Mobile Fitness App",
    description: "Cross-platform fitness tracking application",
    longDescription: "A comprehensive fitness tracking app with workout plans, progress tracking, social features, and integration with wearable devices.",
    category: "Mobile Development",
    tags: ["React Native", "Firebase", "Redux", "Health Kit"],
    image: "/projects/fitness.jpg",
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: "4",
    title: "2D Platformer Game",
    description: "Indie game with pixel art and smooth gameplay",
    longDescription: "A 2D platformer game featuring custom physics, level editor, achievements system, and cross-platform multiplayer.",
    category: "Game Development",
    tags: ["Unity", "C#", "Pixel Art", "Steam"],
    image: "/projects/game.jpg",
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: "5",
    title: "AI Content Generator",
    description: "ML-powered content creation tool",
    longDescription: "An AI-powered tool that generates high-quality content using natural language processing and machine learning algorithms.",
    category: "AI & ML",
    tags: ["Python", "TensorFlow", "OpenAI", "FastAPI"],
    image: "/projects/ai.jpg",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: "6",
    title: "Data Visualization Dashboard",
    description: "Interactive analytics and reporting platform",
    longDescription: "A comprehensive dashboard for data visualization and analytics with real-time updates, custom charts, and export functionality.",
    category: "Web Development",
    tags: ["React", "D3.js", "Python", "PostgreSQL"],
    image: "/projects/dashboard.jpg",
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  }
];

const categories = ["All", "Web Development", "Mobile Development", "Game Development", "AI & ML"];

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto w-full">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Featured Projects
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-slate-400 max-w-2xl mx-auto"
        >
          A showcase of my recent work across different technologies and platforms
        </motion.p>
      </div>

      {/* Category Filter */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 px-4"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
              activeCategory === category
                ? "bg-white/10 text-white border border-white/20 shadow-lg"
                : "text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/8 transition-all duration-300">
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-50 group-hover:opacity-70 transition-opacity duration-300">
                    {project.category === "Web Development" && "🌐"}
                    {project.category === "Mobile Development" && "📱"}
                    {project.category === "Game Development" && "🎮"}
                    {project.category === "AI & ML" && "🤖"}
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white/10 text-xs rounded-full text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 bg-white/10 text-xs rounded-full text-slate-300">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-center text-sm font-medium transition-colors duration-300"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 px-4 py-2 border border-white/20 hover:bg-white/10 rounded-lg text-center text-sm font-medium transition-colors duration-300"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-black/90 border border-white/20 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-slate-400 hover:text-white transition-colors duration-300"
                >
                  ✕
                </button>
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed">
                {selectedProject.longDescription}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/10 text-sm rounded-full text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-colors duration-300"
                  >
                    View Live Demo
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    className="px-6 py-3 border border-white/20 hover:bg-white/10 rounded-lg font-medium transition-colors duration-300"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}