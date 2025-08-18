"use client";
import { useState } from "react";
import { motion } from "motion/react";

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

const skills: Skill[] = [
  { name: "React", level: 95, category: "Frontend", icon: "⚛️" },
  { name: "Next.js", level: 90, category: "Frontend", icon: "▲" },
  { name: "TypeScript", level: 88, category: "Language", icon: "📘" },
  { name: "Node.js", level: 85, category: "Backend", icon: "🟢" },
  { name: "Python", level: 82, category: "Language", icon: "🐍" },
  { name: "AWS", level: 78, category: "Cloud", icon: "☁️" },
  { name: "Docker", level: 75, category: "DevOps", icon: "🐳" },
  { name: "GraphQL", level: 80, category: "Backend", icon: "🔗" },
];

const categories = ["All", "Frontend", "Backend", "Language", "Cloud", "DevOps"];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = activeCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 max-w-6xl mx-auto w-full">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Skills & Expertise
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-slate-400 max-w-2xl mx-auto"
        >
          Technologies and tools I work with to bring ideas to life
        </motion.p>
      </div>

      {/* Category Filter */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category
                ? "bg-white/10 text-white border border-white/20"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/8 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{skill.icon}</span>
              <div>
                <h3 className="font-semibold text-white">{skill.name}</h3>
                <p className="text-sm text-slate-400">{skill.category}</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Proficiency</span>
                <span className="text-white">{skill.level}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}