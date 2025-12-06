"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "> Hello, I'm Amanpreet.\n> Full Stack Developer.\n> Initializing portfolio...\n> Loading skills...\n> Ready.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center p-4 relative z-10">
      <div className="w-full max-w-4xl bg-[#0d1117] border border-[#30363d] rounded-lg shadow-2xl overflow-hidden font-mono">
        {/* Terminal Header */}
        <div className="bg-[#161b22] px-4 py-2 border-b border-[#30363d] flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          <div className="ml-4 text-xs text-[#8b949e] flex-1 text-center">amanpreet@portfolio:~</div>
        </div>

        {/* Terminal Content */}
        <div className="p-6 md:p-10 text-[#c9d1d9] min-h-[400px] flex flex-col">
          <div className="flex-1">
            <pre className="whitespace-pre-wrap text-sm md:text-lg leading-relaxed font-mono">
              <span className="text-green-400">amanpreet@portfolio:~$</span> ./welcome.sh
              <br />
              {text}
              <span className="terminal-cursor inline-block w-2 h-5 bg-green-400 align-middle ml-1" />
            </pre>
          </div>

          {text.length === fullText.length && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 border-t border-[#30363d] pt-6"
            >
              <p className="text-[#8b949e] mb-4 text-sm">{"// Navigation"}</p>
              <div className="flex flex-wrap gap-4 text-sm md:text-base">
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
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
