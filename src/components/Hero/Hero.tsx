"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function Hero() {
  const [text, setText] = useState("");
  const [showNeo, setShowNeo] = useState(false);
  const fullText = "> Initializing portfolio...\n> Loading kernel...\n> Mounting volumes...\n> Starting services...\n> Ready.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
        setTimeout(() => setShowNeo(true), 500);
      }
    }, 25);
    return () => clearInterval(interval);
  }, []);

  const colorSwatches = [
    "bg-[#1c1c1c]", "bg-red-700", "bg-green-700", "bg-yellow-600",
    "bg-blue-700", "bg-purple-700", "bg-cyan-600", "bg-gray-400",
    "bg-gray-600", "bg-red-500", "bg-green-500", "bg-yellow-400",
    "bg-blue-500", "bg-purple-500", "bg-cyan-400", "bg-white",
  ];

  return (
    <section className="min-h-screen flex items-center justify-center p-4 relative z-10 font-mono">
      <div className="w-full max-w-5xl bg-[#0d1117] border border-[#30363d] rounded-lg shadow-2xl overflow-hidden glow-blue">
        {/* Terminal Header */}
        <div className="bg-[#161b22] px-4 py-2.5 border-b border-[#30363d] flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56] cursor-pointer hover:brightness-110 transition-all" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e] cursor-pointer hover:brightness-110 transition-all" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f] cursor-pointer hover:brightness-110 transition-all" />
          <div className="ml-4 text-xs text-[#8b949e] flex-1 text-center tracking-wider">aman@portfolio:~</div>
        </div>

        {/* Terminal Content */}
        <div className="p-6 md:p-10 text-[#c9d1d9] min-h-[520px] flex flex-col">
          <div className="flex-1">
            <pre className="whitespace-pre-wrap text-sm md:text-base leading-relaxed text-[#8b949e]">
              {text}
            </pre>

            {showNeo && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mt-6"
              >
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-green-400 text-glow-green">aman@portfolio:~$</span>
                  <span className="text-[#c9d1d9]">neofetch</span>
                </div>

                <div className="flex flex-col md:flex-row gap-8 md:gap-14">
                  {/* ASCII Art — richer person silhouette */}
                  <div className="hidden md:block text-blue-400 font-bold whitespace-pre select-none leading-tight text-sm">
{`   ╭───────────╮
   │  ◉     ◉  │
   │     ▿     │
   │  ╰─────╯  │
   ╰───────────╯
    ╭─────────╮
    │ ≡ ≡ ≡ ≡ │  AP
    │ ≡ ≡ ≡ ≡ │
    ╰─────────╯
     │       │
    ╭╯       ╰╮
    ▔         ▔`}
                  </div>

                  {/* System Info */}
                  <div className="space-y-1.5 text-sm md:text-base flex-1">
                    <div className="text-blue-400 font-bold mb-2 text-lg">amanpreet@portfolio</div>
                    <div className="border-t border-[#30363d] mb-3" />

                    {[
                      { label: "OS", value: "PortfolioOS v2.0 (Web)", color: "text-blue-400" },
                      { label: "Host", value: "Vercel Edge Network", color: "text-blue-400" },
                      { label: "Kernel", value: "Next.js 15 (Turbopack)", color: "text-blue-400" },
                      { label: "Uptime", value: "Forever", color: "text-blue-400" },
                      { label: "Shell", value: "Zsh + Oh My Zsh", color: "text-blue-400" },
                      { label: "Packages", value: "npm (127), pip (43)", color: "text-blue-400" },
                    ].map(({ label, value, color }) => (
                      <div key={label} className="flex gap-3">
                        <span className={`${color} font-bold min-w-[90px]`}>{label}</span>
                        <span className="text-[#c9d1d9]">{value}</span>
                      </div>
                    ))}

                    <div className="my-3 border-t border-[#30363d] max-w-[320px]" />

                    {[
                      { label: "User", value: "Amanpreet Singh", color: "text-green-400" },
                      { label: "Role", value: "Backend Engineer & OSS contributor", color: "text-green-400" },
                      { label: "CGPA", value: "8.0 / 10 — CSE, CCET", color: "text-green-400" },
                    ].map(({ label, value, color }) => (
                      <div key={label} className="flex gap-3">
                        <span className={`${color} font-bold min-w-[90px]`}>{label}</span>
                        <span className="text-[#c9d1d9]">{value}</span>
                      </div>
                    ))}

                    <div className="my-3 border-t border-[#30363d] max-w-[320px]" />

                    {/* Social Links */}
                    <div className="flex flex-col gap-1.5">
                      {[
                        { label: "Github", href: "https://github.com/Amanbig", display: "github.com/Amanbig", color: "text-purple-400" },
                        { label: "LinkedIn", href: "https://www.linkedin.com/in/amanpreet-singh-9a1929211", display: "linkedin.com/in/amanpreet-singh-9a1929211", color: "text-purple-400" },
                        { label: "Email", href: "mailto:amanpreetsinghjhiwant7@gmail.com", display: "amanpreetsinghjhiwant@gmail.com", color: "text-purple-400" },
                      ].map(({ label, href, display, color }) => (
                        <div key={label} className="flex gap-3 items-center">
                          <span className={`${color} font-bold min-w-[90px]`}>{label}</span>
                          <a href={href} target="_blank" rel="noopener noreferrer"
                            className="text-[#c9d1d9] hover:text-white hover:underline decoration-blue-400 underline-offset-4 transition-all truncate max-w-[220px]">
                            {display}
                          </a>
                        </div>
                      ))}
                    </div>

                    {/* Color swatches */}
                    <div className="flex gap-1 mt-4 flex-wrap">
                      {colorSwatches.map((c, i) => (
                        <div key={i} className={`w-5 h-5 rounded-sm ${c}`} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Navigation Commands */}
                <div className="mt-10 pt-5 border-t border-[#30363d]">
                  <p className="text-[#8b949e] mb-3 text-xs tracking-widest uppercase">// Quick Navigation</p>
                  <div className="flex flex-wrap gap-4 text-sm md:text-base">
                    {[
                      { href: "#projects", label: "view_projects()", color: "text-blue-400 hover:text-blue-300" },
                      { href: "#timeline", label: "show_experience()", color: "text-yellow-400 hover:text-yellow-300" },
                      { href: "#skills", label: "list_skills()", color: "text-purple-400 hover:text-purple-300" },
                      { href: "#contact", label: "contact_me()", color: "text-green-400 hover:text-green-300" },
                    ].map(({ href, label, color }) => (
                      <a key={href} href={href} className={`group flex items-center gap-1 ${color} transition-colors`}>
                        <span className="text-[#8b949e] group-hover:opacity-100 opacity-60">[</span>
                        {label}
                        <span className="text-[#8b949e] group-hover:opacity-100 opacity-60">]</span>
                      </a>
                    ))}
                  </div>
                  <p className="text-[#484f58] text-xs mt-3">^C to cancel · Tab to autocomplete</p>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <span className="text-green-400 text-glow-green">aman@portfolio:~$</span>
                  <span className="w-2 h-5 bg-[#c9d1d9] animate-pulse inline-block" />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
