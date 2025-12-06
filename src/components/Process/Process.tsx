"use client";
import { motion } from "motion/react";

const logs = [
  { time: "[10:00:01]", type: "INFO", msg: "Initializing Discovery Phase...", color: "text-blue-400" },
  { time: "[10:00:05]", type: "SUCCESS", msg: "Requirements gathered successfully.", color: "text-green-400" },
  { time: "[10:00:12]", type: "INFO", msg: "Starting Design & Prototyping...", color: "text-blue-400" },
  { time: "[10:00:45]", type: "WARN", msg: "Wireframes approved. Proceeding to High-Fidelity.", color: "text-yellow-400" },
  { time: "[10:01:20]", type: "INFO", msg: "Compiling Development Phase...", color: "text-blue-400" },
  { time: "[10:02:00]", type: "SUCCESS", msg: "Build successful. 0 Errors, 0 Warnings.", color: "text-green-400" },
  { time: "[10:02:15]", type: "INFO", msg: "Deploying to Production (Launch)...", color: "text-blue-400" },
  { time: "[10:02:30]", type: "SUCCESS", msg: "Deployment Complete. App is Live 🚀", color: "text-green-400" },
];

export default function Process() {
  return (
    <section id="process" className="py-20 max-w-4xl mx-auto w-full px-4 font-mono">
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg overflow-hidden shadow-xl">
        {/* Header */}
        <div className="bg-[#161b22] px-4 py-2 border-b border-[#30363d] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#8b949e] text-xs">TERMINAL: BUILD LOG</span>
          </div>
          <div className="flex gap-2">
            <span className="text-[#8b949e] text-xs">bash</span>
          </div>
        </div>

        <div className="p-6 bg-[#0d1117] min-h-[300px] font-mono text-sm md:text-base">
          {logs.map((log, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-2 font-mono"
            >
              <span className="text-[#8b949e] mr-2">{log.time}</span>
              <span className={`${log.color} font-bold mr-2`}>{log.type}:</span>
              <span className="text-[#c9d1d9]">{log.msg}</span>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, repeat: Infinity, duration: 1 }}
            className="mt-2"
          >
            <span className="text-green-400">➜</span> <span className="text-[#c9d1d9] animate-pulse">_</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}