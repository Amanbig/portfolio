"use client";
import { motion } from "motion/react";

const stats = [
  { label: "Projects Completed", value: 50, max: 100, color: "bg-blue-500" },
  { label: "Lines of Code", value: 75, max: 100, suffix: "k+", color: "bg-green-500" },
  { label: "Years Experience", value: 3, max: 10, color: "bg-purple-500" },
  { label: "Technologies", value: 15, max: 30, color: "bg-yellow-500" },
];

export default function Stats() {
  return (
    <section className="py-10 max-w-4xl mx-auto w-full px-4 font-mono">
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6 shadow-xl">
        <div className="flex items-center gap-2 mb-6 border-b border-[#30363d] pb-4">
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          <span className="text-[#8b949e] text-sm">System Status</span>
        </div>
        <div className="grid gap-6">
          {stats.map((stat, index) => (
            <div key={stat.label} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-[#c9d1d9]">{stat.label}</span>
                <span className="text-[#8b949e]">
                  {stat.value}{stat.suffix || ""} / {stat.max}{stat.suffix ? "" : ""}
                </span>
              </div>
              <div className="h-2 bg-[#21262d] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(stat.value / stat.max) * 100}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className={`h-full ${stat.color}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}