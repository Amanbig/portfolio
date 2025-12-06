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
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center p-4 relative z-10 font-mono">
      <div className="w-full max-w-5xl bg-[#0d1117] border border-[#30363d] rounded-lg shadow-2xl overflow-hidden">
        {/* Terminal Header */}
        <div className="bg-[#161b22] px-4 py-2 border-b border-[#30363d] flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          <div className="ml-4 text-xs text-[#8b949e] flex-1 text-center">aman@portfolio:~</div>
        </div>

        {/* Terminal Content */}
        <div className="p-6 md:p-10 text-[#c9d1d9] min-h-[500px] flex flex-col">
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
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-green-400">aman@portfolio:~$</span>
                  <span className="text-[#c9d1d9]">neofetch</span>
                </div>

                <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                  {/* ASCII Art */}
                  <div className="hidden md:block text-blue-400 font-bold whitespace-pre select-none leading-tight">
                    {`
       .---.
      /     \\
      |  A  |
      |  P  |
      \\     /
       '---'
     .-------.
    /|       |\\
   / |       | \\
  /  |       |  \\
 /   |_______|   \\
|    |       |    |
|    |       |    |
 \\   |       |   /
  \\  |       |  /
   \\ |       | /
    \\|_______|/
`}
                  </div>

                  {/* System Info */}
                  <div className="space-y-2 text-sm md:text-base">
                    <div className="flex gap-2">
                      <span className="text-blue-400 font-bold min-w-[100px]">OS</span>
                      <span className="text-[#c9d1d9]">PortfolioOS v2.0 (Web)</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-blue-400 font-bold min-w-[100px]">Host</span>
                      <span className="text-[#c9d1d9]">Vercel</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-blue-400 font-bold min-w-[100px]">Kernel</span>
                      <span className="text-[#c9d1d9]">Next.js 15 (Turbopack)</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-blue-400 font-bold min-w-[100px]">Uptime</span>
                      <span className="text-[#c9d1d9]">Forever</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-blue-400 font-bold min-w-[100px]">Shell</span>
                      <span className="text-[#c9d1d9]">Zsh</span>
                    </div>

                    <div className="my-4 border-t border-[#30363d] w-full max-w-[300px]" />

                    <div className="flex gap-2">
                      <span className="text-green-400 font-bold min-w-[100px]">User</span>
                      <span className="text-[#c9d1d9]">Amanpreet Singh</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-green-400 font-bold min-w-[100px]">Role</span>
                      <span className="text-[#c9d1d9]">Full Stack Developer</span>
                    </div>

                    <div className="my-4 border-t border-[#30363d] w-full max-w-[300px]" />

                    {/* Social Links */}
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2 items-center">
                        <span className="text-purple-400 font-bold min-w-[100px]">Github</span>
                        <a href="https://github.com/Amanbig" target="_blank" rel="noopener noreferrer" className="text-[#c9d1d9] hover:text-white hover:underline decoration-blue-400 underline-offset-4 transition-all">
                          github.com/Amanbig
                        </a>
                      </div>
                      <div className="flex gap-2 items-center">
                        <span className="text-purple-400 font-bold min-w-[100px]">LinkedIn</span>
                        <a href="https://www.linkedin.com/in/amanpreet-singh-9a1929211" target="_blank" rel="noopener noreferrer" className="text-[#c9d1d9] hover:text-white hover:underline decoration-blue-400 underline-offset-4 transition-all">
                          linkedin.com/in/amanpreet...
                        </a>
                      </div>
                      <div className="flex gap-2 items-center">
                        <span className="text-purple-400 font-bold min-w-[100px]">Discord</span>
                        <span className="text-[#c9d1d9]">phibi2662</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation Commands */}
                <div className="mt-12 pt-6 border-t border-[#30363d]">
                  <p className="text-[#8b949e] mb-4 text-sm">{"// Navigation"}</p>
                  <div className="flex flex-wrap gap-6 text-sm md:text-base">
                    <a href="#projects" className="group flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                      <span className="text-[#8b949e] group-hover:text-blue-300">[</span>
                      Execute: view_projects()
                      <span className="text-[#8b949e] group-hover:text-blue-300">]</span>
                    </a>
                    <a href="#contact" className="group flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors">
                      <span className="text-[#8b949e] group-hover:text-green-300">[</span>
                      Execute: contact_me()
                      <span className="text-[#8b949e] group-hover:text-green-300">]</span>
                    </a>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 animate-pulse">
                  <span className="text-green-400">aman@portfolio:~$</span>
                  <span className="w-2 h-5 bg-[#c9d1d9]" />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
