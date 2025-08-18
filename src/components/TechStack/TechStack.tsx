"use client";
import { motion } from "motion/react";
import BlurText from "@/components/BlurText/BlurText";

const techCategories = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", icon: "⚛️", color: "from-cyan-400 to-blue-500" },
      { name: "Next.js", icon: "▲", color: "from-slate-400 to-slate-600" },
      { name: "TypeScript", icon: "📘", color: "from-blue-400 to-blue-600" },
      { name: "Tailwind CSS", icon: "🎨", color: "from-sky-400 to-sky-600" },
    ]
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", icon: "🟢", color: "from-green-400 to-green-600" },
      { name: "Python", icon: "🐍", color: "from-yellow-400 to-yellow-600" },
      { name: "GraphQL", icon: "🔗", color: "from-pink-400 to-pink-600" },
      { name: "PostgreSQL", icon: "🐘", color: "from-blue-500 to-blue-700" },
    ]
  },
  {
    category: "Tools & Platforms",
    technologies: [
      { name: "Vercel", icon: "▲", color: "from-slate-400 to-slate-600" },
      { name: "AWS", icon: "☁️", color: "from-orange-400 to-orange-600" },
      { name: "Docker", icon: "🐳", color: "from-blue-400 to-blue-600" },
      { name: "Git", icon: "📚", color: "from-red-400 to-red-600" },
    ]
  }
];

export default function TechStack() {
  return (
    <section id="tech" className="py-20 max-w-6xl mx-auto w-full">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          <BlurText text="Tech Stack" animateBy="letters" delay={50} direction="top" />
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-slate-400 max-w-2xl mx-auto"
        >
          Technologies and tools I use to build amazing experiences
        </motion.p>
      </div>

      <div className="space-y-12">
        {techCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            className="text-center"
          >
            <h3 className="text-xl font-semibold text-white mb-6">{category.category}</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {category.technologies.map((tech, techIndex) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (techIndex * 0.1) }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="group relative"
                >
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-20 rounded-xl blur-xl transition-opacity duration-500`} />
                  
                  {/* Tech Card */}
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-4 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{tech.icon}</span>
                      <span className="text-base font-medium text-slate-200 group-hover:text-white transition-colors duration-300">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
