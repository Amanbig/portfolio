"use client";
import { motion } from "motion/react";

const services = [
  {
    id: "ext.web-dev",
    title: "Web Development",
    description: "Modern websites and applications.",
    version: "2.0.0",
    downloads: "1.2M",
    author: "Amanpreet",
    icon: "🌐"
  },
  {
    id: "ext.mobile-dev",
    title: "Mobile Development",
    description: "Cross-platform mobile apps.",
    version: "1.5.0",
    downloads: "850k",
    author: "Amanpreet",
    icon: "📱"
  },
  {
    id: "ext.game-dev",
    title: "Game Development",
    description: "Interactive gaming experiences.",
    version: "0.9.0",
    downloads: "400k",
    author: "Amanpreet",
    icon: "🎮"
  },
  {
    id: "ext.ai-ml",
    title: "AI & Machine Learning",
    description: "Intelligent solutions & models.",
    version: "3.1.0",
    downloads: "2.5M",
    author: "Amanpreet",
    icon: "🤖"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 max-w-4xl mx-auto w-full px-4 font-mono">
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg overflow-hidden shadow-xl">
        {/* Header */}
        <div className="bg-[#161b22] px-4 py-2 border-b border-[#30363d] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#8b949e] text-xs">EXTENSIONS: MARKETPLACE</span>
          </div>
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-[#30363d]" />
            <span className="w-3 h-3 rounded-full bg-[#30363d]" />
          </div>
        </div>

        <div className="p-0">
          {/* Search Bar */}
          <div className="p-4 border-b border-[#30363d] bg-[#0d1117]">
            <div className="bg-[#161b22] border border-[#30363d] px-3 py-1 flex items-center text-sm">
              <span className="text-[#8b949e] mr-2">@category:"services"</span>
              <span className="w-0.5 h-4 bg-[#c9d1d9] animate-pulse" />
            </div>
          </div>

          {/* List */}
          <div className="divide-y divide-[#30363d]">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 hover:bg-[#161b22] flex gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-[#21262d] flex items-center justify-center text-2xl rounded">
                  {service.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-[#c9d1d9] font-bold text-sm md:text-base">
                        {service.title} <span className="text-[#8b949e] font-normal text-xs ml-2">v{service.version}</span>
                      </h3>
                      <p className="text-[#8b949e] text-xs md:text-sm truncate">{service.description}</p>
                      <p className="text-[#8b949e] text-xs mt-1">
                        <span className="text-[#c9d1d9]">{service.author}</span> • <span className="text-[#c9d1d9]">Verified</span>
                      </p>
                    </div>
                    <button className="bg-[#238636] text-white text-xs px-3 py-1 rounded font-bold hover:bg-[#2ea043] transition-colors">
                      Install
                    </button>
                  </div>
                  <div className="flex gap-4 mt-2 text-xs text-[#8b949e]">
                    <span className="flex items-center gap-1">
                      ⬇ {service.downloads}
                    </span>
                    <span className="flex items-center gap-1">
                      ★ 5.0
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}