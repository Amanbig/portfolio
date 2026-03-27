"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type ViewMode = "json" | "grid";

const skillGroups: Record<string, { name: string; color: string }[]> = {
  "Languages": [
    { name: "Python", color: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30" },
    { name: "JavaScript", color: "text-yellow-300 bg-yellow-300/10 border-yellow-300/30" },
    { name: "TypeScript", color: "text-blue-400 bg-blue-400/10 border-blue-400/30" },
    { name: "Rust", color: "text-orange-400 bg-orange-400/10 border-orange-400/30" },
    { name: "C/C++", color: "text-blue-300 bg-blue-300/10 border-blue-300/30" },
    { name: "Java", color: "text-red-400 bg-red-400/10 border-red-400/30" },
    { name: "Dart", color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/30" },
  ],
  "Web & Backend": [
    { name: "FastAPI", color: "text-green-400 bg-green-400/10 border-green-400/30" },
    { name: "Next.js", color: "text-white bg-white/10 border-white/20" },
    { name: "NestJS", color: "text-red-400 bg-red-400/10 border-red-400/30" },
    { name: "Express.js", color: "text-gray-300 bg-gray-300/10 border-gray-300/30" },
    { name: "React", color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/30" },
    { name: "RunAPI", color: "text-green-300 bg-green-300/10 border-green-300/30" },
    { name: "Flask", color: "text-gray-400 bg-gray-400/10 border-gray-400/30" },
  ],
  "AI/ML & Data": [
    { name: "TensorFlow", color: "text-orange-400 bg-orange-400/10 border-orange-400/30" },
    { name: "PyTorch", color: "text-orange-300 bg-orange-300/10 border-orange-300/30" },
    { name: "Scikit-learn", color: "text-blue-400 bg-blue-400/10 border-blue-400/30" },
    { name: "RAG Systems", color: "text-purple-400 bg-purple-400/10 border-purple-400/30" },
    { name: "Pandas", color: "text-blue-300 bg-blue-300/10 border-blue-300/30" },
    { name: "NumPy", color: "text-blue-400 bg-blue-400/10 border-blue-400/30" },
    { name: "XGBoost", color: "text-green-400 bg-green-400/10 border-green-400/30" },
  ],
  "Mobile & Cloud": [
    { name: "Flutter", color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/30" },
    { name: "Docker", color: "text-blue-500 bg-blue-500/10 border-blue-500/30" },
    { name: "AWS", color: "text-yellow-500 bg-yellow-500/10 border-yellow-500/30" },
    { name: "GCP", color: "text-blue-400 bg-blue-400/10 border-blue-400/30" },
    { name: "PostgreSQL", color: "text-blue-300 bg-blue-300/10 border-blue-300/30" },
    { name: "MongoDB", color: "text-green-400 bg-green-400/10 border-green-400/30" },
    { name: "Appwrite", color: "text-pink-400 bg-pink-400/10 border-pink-400/30" },
  ],
};

const jsonSkills = {
  dependencies: {
    python: "^3.11.0",
    "javascript/ts": "^20.0.0",
    "fastapi": "^0.115.0",
    "next.js": "^15.5.0",
    react: "19.1.0",
    rust: "^1.83.0",
    flutter: "^3.24.0",
  },
  devDependencies: {
    docker: "^27.0.0",
    "aws-sdk": "^3.0.0",
    tensorflow: "^2.17.0",
    pytorch: "^2.4.0",
    tailwindcss: "^4.0.0",
    typescript: "^5.7.0",
  },
};

export default function Skills() {
  const [mode, setMode] = useState<ViewMode>("json");

  return (
    <section id="skills" className="py-20 max-w-5xl mx-auto w-full px-4 font-mono">
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg overflow-hidden shadow-xl">
        {/* File Header */}
        <div className="bg-[#161b22] px-4 py-2 border-b border-[#30363d] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#e0af68] text-xs">&#123;&#125;</span>
            <span className="text-[#8b949e] text-xs">package.json</span>
          </div>
          <div className="flex items-center gap-2">
            {/* View toggle */}
            <button
              onClick={() => setMode("json")}
              className={`text-xs px-2 py-0.5 rounded transition-colors ${mode === "json" ? "bg-[#30363d] text-[#c9d1d9]" : "text-[#8b949e] hover:text-[#c9d1d9]"}`}
            >
              JSON
            </button>
            <button
              onClick={() => setMode("grid")}
              className={`text-xs px-2 py-0.5 rounded transition-colors ${mode === "grid" ? "bg-[#30363d] text-[#c9d1d9]" : "text-[#8b949e] hover:text-[#c9d1d9]"}`}
            >
              Grid
            </button>
          </div>
        </div>

        <div className="p-6 md:p-10 text-[#c9d1d9] text-sm md:text-base overflow-x-auto">
          <AnimatePresence mode="wait">
            {mode === "json" ? (
              <motion.pre
                key="json"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
                className="font-mono"
              >
                <span className="text-[#e0af68]">{"{"}</span>
                <br />
                <span className="text-[#7aa2f7] ml-4">&quot;name&quot;</span>: <span className="text-[#9ece6a]">&quot;amanpreet-portfolio&quot;</span>,
                <br />
                <span className="text-[#7aa2f7] ml-4">&quot;version&quot;</span>: <span className="text-[#9ece6a]">&quot;2.0.0&quot;</span>,
                <br />
                <span className="text-[#7aa2f7] ml-4">&quot;role&quot;</span>: <span className="text-[#9ece6a]">&quot;Backend Engineer &amp; OSS Contributor&quot;</span>,
                <br />
                <br />
                <span className="text-[#7aa2f7] ml-4">&quot;dependencies&quot;</span>: <span className="text-[#e0af68]">{"{"}</span>
                {Object.entries(jsonSkills.dependencies).map(([name, version], index) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="ml-8 hover:bg-[#161b22] -mx-4 px-4 rounded cursor-pointer group"
                  >
                    <span className="text-[#7aa2f7] group-hover:underline">&quot;{name}&quot;</span>: <span className="text-[#9ece6a]">&quot;{version}&quot;</span>
                    {index < Object.keys(jsonSkills.dependencies).length - 1 && <span className="text-[#c9d1d9]">,</span>}
                  </motion.div>
                ))}
                <span className="text-[#e0af68] ml-4">{"}"}</span>,
                <br />
                <br />
                <span className="text-[#7aa2f7] ml-4">&quot;devDependencies&quot;</span>: <span className="text-[#e0af68]">{"{"}</span>
                {Object.entries(jsonSkills.devDependencies).map(([name, version], index) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index + 6) * 0.05 }}
                    className="ml-8 hover:bg-[#161b22] -mx-4 px-4 rounded cursor-pointer group"
                  >
                    <span className="text-[#7aa2f7] group-hover:underline">&quot;{name}&quot;</span>: <span className="text-[#9ece6a]">&quot;{version}&quot;</span>
                    {index < Object.keys(jsonSkills.devDependencies).length - 1 && <span className="text-[#c9d1d9]">,</span>}
                  </motion.div>
                ))}
                <span className="text-[#e0af68] ml-4">{"}"}</span>
                <br />
                <span className="text-[#e0af68]">{"}"}</span>
              </motion.pre>
            ) : (
              <motion.div
                key="grid"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                {Object.entries(skillGroups).map(([group, skills], gi) => (
                  <div key={group}>
                    <div className="text-[#8b949e] text-xs mb-3 tracking-widest uppercase">
                      <span className="text-[#e0af68]">// </span>{group}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, si) => (
                        <motion.span
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: (gi * 7 + si) * 0.02 }}
                          className={`text-xs px-3 py-1.5 rounded border font-mono ${skill.color} hover:scale-105 transition-transform cursor-default`}
                        >
                          {skill.name}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}