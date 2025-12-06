"use client";
import { motion } from "motion/react";

const skills = {
  "dependencies": {
    "react": "^18.2.0",
    "next": "^14.0.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.3.0",
    "framer-motion": "^10.0.0",
    "node": "^20.0.0",
    "python": "^3.11.0",
    "rust": "^1.70.0"
  },
  "devDependencies": {
    "eslint": "^8.0.0",
    "prettier": "^3.0.0",
    "jest": "^29.0.0",
    "docker": "^24.0.0",
    "aws-sdk": "^3.0.0",
    "tensorflow": "^2.13.0",
    "postgresql": "^15.0.0",
    "mongodb": "^6.0.0"
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 max-w-4xl mx-auto w-full px-4 font-mono">
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg overflow-hidden shadow-xl">
        {/* File Header */}
        <div className="bg-[#161b22] px-4 py-2 border-b border-[#30363d] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#e0af68] text-xs">{ }</span>
            <span className="text-[#8b949e] text-xs">package.json</span>
          </div>
          <div className="text-[#8b949e] text-xs">JSON</div>
        </div>

        <div className="p-6 md:p-10 text-[#c9d1d9] text-sm md:text-base overflow-x-auto">
          <pre className="font-mono">
            <span className="text-[#e0af68]">{`{`}</span>
            <br />
            <span className="text-[#7aa2f7] ml-4">"name"</span>: <span className="text-[#9ece6a]">"amanpreet-portfolio"</span>,
            <br />
            <span className="text-[#7aa2f7] ml-4">"version"</span>: <span className="text-[#9ece6a]">"1.0.0"</span>,
            <br />
            <span className="text-[#7aa2f7] ml-4">"description"</span>: <span className="text-[#9ece6a]">"Full Stack Developer with a passion for clean code."</span>,
            <br />
            <br />
            <span className="text-[#7aa2f7] ml-4">"dependencies"</span>: <span className="text-[#e0af68]">{`{`}</span>
            {Object.entries(skills.dependencies).map(([name, version], index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="ml-8 hover:bg-[#161b22] -mx-4 px-4 rounded cursor-pointer group"
              >
                <span className="text-[#7aa2f7] group-hover:underline">"{name}"</span>: <span className="text-[#9ece6a]">"{version}"</span>
                {index < Object.keys(skills.dependencies).length - 1 && <span className="text-[#c9d1d9]">,</span>}
              </motion.div>
            ))}
            <span className="text-[#e0af68] ml-4">{`}`}</span>,
            <br />
            <br />
            <span className="text-[#7aa2f7] ml-4">"devDependencies"</span>: <span className="text-[#e0af68]">{`{`}</span>
            {Object.entries(skills.devDependencies).map(([name, version], index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: (index + 8) * 0.05 }}
                className="ml-8 hover:bg-[#161b22] -mx-4 px-4 rounded cursor-pointer group"
              >
                <span className="text-[#7aa2f7] group-hover:underline">"{name}"</span>: <span className="text-[#9ece6a]">"{version}"</span>
                {index < Object.keys(skills.devDependencies).length - 1 && <span className="text-[#c9d1d9]">,</span>}
              </motion.div>
            ))}
            <span className="text-[#e0af68] ml-4">{`}`}</span>
            <br />
            <span className="text-[#e0af68]">{`}`}</span>
          </pre>
        </div>
      </div>
    </section>
  );
}