"use client";
import { motion } from "motion/react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Planning",
    description: "Understanding your needs, goals, and target audience to create a strategic roadmap.",
    icon: "🔍"
  },
  {
    number: "02", 
    title: "Design & Prototype",
    description: "Creating wireframes, mockups, and interactive prototypes to visualize the solution.",
    icon: "🎨"
  },
  {
    number: "03",
    title: "Development",
    description: "Building robust, scalable solutions using modern technologies and best practices.",
    icon: "⚙️"
  },
  {
    number: "04",
    title: "Testing & Launch",
    description: "Thorough testing, optimization, and deployment to ensure a smooth launch.",
    icon: "🚀"
  }
];

export default function Process() {
  return (
    <section id="process" className="py-20 max-w-6xl mx-auto w-full">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          My Process
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-slate-400 max-w-2xl mx-auto"
        >
          A structured approach to delivering exceptional results
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="relative group"
          >
            {/* Connection Line */}
            {index < processSteps.length - 1 && (
              <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-white/20 to-transparent z-0" />
            )}
            
            <div className="relative z-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <span className="text-2xl font-bold text-white/30 group-hover:text-white/50 transition-colors duration-300">
                  {step.number}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                {step.title}
              </h3>
              
              <p className="text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}