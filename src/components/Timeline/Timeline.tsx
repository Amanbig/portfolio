"use client";
import { motion } from "motion/react";

const events = [
  { 
    year: "2024", 
    title: "Senior Frontend Engineer at Acme", 
    desc: "Led frontend efforts for the main product, mentored junior developers, and implemented modern React patterns.",
    icon: "💼"
  },
  { 
    year: "2022", 
    title: "Joined Startup XYZ", 
    desc: "Built internal design system and improved performance by 40%. Developed key features using React and TypeScript.",
    icon: "🚀"
  },
  { 
    year: "2020", 
    title: "Graduated Computer Science", 
    desc: "Bachelor's degree in Computer Science from University. Specialized in web development and software engineering.",
    icon: "🎓"
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 max-w-4xl mx-auto w-full">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          My Journey
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-slate-400 max-w-2xl mx-auto"
        >
          Key milestones in my professional development
        </motion.p>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
        
        <div className="space-y-12">
          {events.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex items-start gap-8"
            >
              {/* Timeline Dot */}
              <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                <span className="text-2xl">{event.icon}</span>
              </div>
              
              {/* Content */}
              <div className="flex-1 pb-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-full">
                      {event.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{event.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
