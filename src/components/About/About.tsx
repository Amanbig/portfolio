"use client";
import { motion } from "motion/react";

export default function About() {
  const highlights = [
    {
      title: "Backend Engineer",
      desc: "Specialize in FastAPI, RAG pipelines, and Dockerized ML platforms for production.",
      color: "text-blue-400",
      border: "border-blue-400/40",
      icon: "⚙️",
    },
    {
      title: "OSS Contributor",
      desc: "Merged PRs in deepset-ai/haystack and haystack-core-integrations.",
      color: "text-green-400",
      border: "border-green-400/40",
      icon: "🌐",
    },
    {
      title: "Full-Stack Capable",
      desc: "Build end-to-end with Next.js, Flutter, NestJS and more on top of strong backends.",
      color: "text-purple-400",
      border: "border-purple-400/40",
      icon: "🚀",
    },
    {
      title: "Developer Tooling",
      desc: "Creator of RunAPI (PyPI) & backTool (npm) — frameworks used by real developers.",
      color: "text-yellow-400",
      border: "border-yellow-400/40",
      icon: "🛠️",
    },
  ];

  const interests = [
    "Backend Engineering & System Design",
    "AI/ML & RAG Systems",
    "Developer Tooling & CLI frameworks",
    "Mobile Apps (Flutter iOS/Android)",
    "Open Source Contributions",
    "Game Development",
  ];

  return (
    <section id="about" className="py-20 max-w-6xl mx-auto w-full px-4 font-mono">
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg overflow-hidden shadow-xl">
        {/* File Header */}
        <div className="bg-[#161b22] px-4 py-2 border-b border-[#30363d] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-xs">●</span>
            <span className="text-[#8b949e] text-xs">README.md</span>
          </div>
          <span className="text-[#8b949e] text-xs">Markdown · Preview</span>
        </div>

        <div className="p-6 md:p-10 text-[#c9d1d9]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Main content */}
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-1 text-[#c9d1d9]">
                  <span className="text-[#8b949e]"># </span>About Me
                </h2>
                <div className="h-px bg-gradient-to-r from-[#30363d] via-blue-400/40 to-transparent mb-6" />

                <p className="mb-4 leading-relaxed text-[#c9d1d9]">
                  Hi there! I&apos;m{" "}
                  <span className="text-blue-400 font-bold">Amanpreet Singh</span> — a{" "}
                  <span className="text-green-400 font-semibold">Backend Engineer</span> specializing in{" "}
                  <span className="bg-[#1f2428] px-1 rounded text-green-400">FastAPI</span>,
                  scalable systems, and applied AI with over <span className="text-yellow-400">3 years of experience</span>.
                </p>
                <p className="mb-4 leading-relaxed text-[#8b949e]">
                  I&apos;ve built <span className="text-[#c9d1d9]">RAG pipelines</span> for government clients,
                  published open-source frameworks like{" "}
                  <a href="https://github.com/Amanbig/runapi" target="_blank" rel="noopener noreferrer"
                    className="text-purple-400 hover:underline">RunAPI</a>{" "}
                  and{" "}
                  <a href="https://github.com/Amanbig/MLCore" target="_blank" rel="noopener noreferrer"
                    className="text-purple-400 hover:underline">MLCore</a>, and
                  contributed merged PRs to <span className="text-[#c9d1d9]">deepset-ai/haystack</span>.
                </p>
                <p className="leading-relaxed text-[#8b949e]">
                  When not building backends, I craft mobile apps with{" "}
                  <span className="bg-[#1f2428] px-1 rounded text-blue-400">Flutter</span>, explore
                  game development, and enjoy working on developer tooling that makes engineers&apos; lives easier.
                </p>

                <h3 className="text-lg font-bold mt-8 mb-3">
                  <span className="text-[#8b949e]">## </span>Interests
                </h3>
                <ul className="space-y-1.5">
                  {interests.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#8b949e]">
                      <span className="text-green-400">▸</span>
                      <span className="text-[#c9d1d9]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sidebar: Avatar + Quick Stats */}
              <div className="lg:w-64 space-y-4">
                {/* Avatar placeholder */}
                <div className="border border-[#30363d] rounded-lg p-5 bg-[#161b22] text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 border-2 border-blue-400/40 flex items-center justify-center mx-auto mb-3 text-3xl font-bold text-blue-400">
                    AS
                  </div>
                  <div className="text-[#c9d1d9] font-bold">Amanpreet Singh</div>
                  <div className="text-[#8b949e] text-xs mt-1">Backend Engineer</div>
                  <div className="text-[#8b949e] text-xs">Chandigarh, India 🇮🇳</div>
                  <div className="mt-3 flex justify-center gap-3">
                    <a href="https://github.com/Amanbig" target="_blank" rel="noopener noreferrer"
                      className="text-[#8b949e] hover:text-white transition-colors text-xs">[gh]</a>
                    <a href="https://www.linkedin.com/in/amanpreet-singh-9a1929211" target="_blank" rel="noopener noreferrer"
                      className="text-[#8b949e] hover:text-white transition-colors text-xs">[li]</a>
                    <a href="mailto:amanpreetsinghjhiwant7@gmail.com"
                      className="text-[#8b949e] hover:text-white transition-colors text-xs">[email]</a>
                  </div>
                </div>

                {/* Quick stats */}
                <div className="border border-[#30363d] rounded-lg bg-[#161b22] overflow-hidden">
                  <div className="px-4 py-2 border-b border-[#30363d] text-[#8b949e] text-xs">// quick_stats.json</div>
                  <div className="p-4 space-y-2 text-xs">
                    {[
                      { key: "experience", val: "3+ years" },
                      { key: "projects", val: "15+ shipped" },
                      { key: "oss_prs", val: "4 merged" },
                      { key: "docker_pulls", val: "350+ (MLCore)" },
                      { key: "cgpa", val: "8.0 / 10.0" },
                    ].map(({ key, val }) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-[#7aa2f7]">&quot;{key}&quot;</span>
                        <span className="text-[#9ece6a]">&quot;{val}&quot;</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Highlight Cards */}
            <h3 className="text-lg font-bold mt-10 mb-4">
              <span className="text-[#8b949e]">## </span>Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className={`bg-[#161b22] p-4 rounded-lg border ${h.border} border-l-2 flex gap-3 hover:bg-[#1c2128] transition-colors`}
                >
                  <span className="text-xl mt-0.5">{h.icon}</span>
                  <div>
                    <h4 className={`font-bold ${h.color} mb-1 text-sm`}>{h.title}</h4>
                    <p className="text-xs text-[#8b949e] leading-relaxed">{h.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
