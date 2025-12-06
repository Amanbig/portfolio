"use client";
import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-20 max-w-6xl mx-auto w-full px-4 font-mono">
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg overflow-hidden shadow-xl">
        <div className="bg-[#161b22] px-4 py-2 border-b border-[#30363d] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#8b949e] text-xs">README.md</span>
          </div>
          <div className="text-[#8b949e] text-xs">Markdown</div>
        </div>
        <div className="p-6 md:p-10 text-[#c9d1d9]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 border-b border-[#30363d] pb-2">
              # About Me
            </h2>
            <p className="mb-4 leading-relaxed">
              Hi there! I&apos;m <span className="text-blue-400 font-bold">Aman</span>, a passionate software developer with over 3 years of experience crafting digital solutions.
            </p>
            <p className="mb-6 leading-relaxed">
              I specialize in building performant, accessible, and delightful user interfaces using modern technologies like <span className="bg-[#1f2428] px-1 rounded text-green-400">React</span>, <span className="bg-[#1f2428] px-1 rounded text-green-400">Next.js</span>, and <span className="bg-[#1f2428] px-1 rounded text-green-400">TypeScript</span>.
            </p>

            <h3 className="text-xl font-bold mb-4 mt-8">## Interests</h3>
            <ul className="list-disc list-inside space-y-2 text-[#8b949e]">
              <li><span className="text-[#c9d1d9]">Web Development</span></li>
              <li><span className="text-[#c9d1d9]">Mobile Apps</span></li>
              <li><span className="text-[#c9d1d9]">Game Development</span></li>
              <li><span className="text-[#c9d1d9]">AI & Machine Learning</span></li>
              <li><span className="text-[#c9d1d9]">Open Source</span></li>
            </ul>

            <h3 className="text-xl font-bold mb-4 mt-8">## Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#161b22] p-4 rounded border border-[#30363d]">
                <h4 className="font-bold text-blue-400 mb-1">Performance First</h4>
                <p className="text-sm text-[#8b949e]">Optimized applications with lightning-fast load times.</p>
              </div>
              <div className="bg-[#161b22] p-4 rounded border border-[#30363d]">
                <h4 className="font-bold text-green-400 mb-1">Accessibility Focused</h4>
                <p className="text-sm text-[#8b949e]">Building inclusive experiences for everyone.</p>
              </div>
              <div className="bg-[#161b22] p-4 rounded border border-[#30363d]">
                <h4 className="font-bold text-purple-400 mb-1">Responsive Design</h4>
                <p className="text-sm text-[#8b949e]">Pixel-perfect interfaces on any device.</p>
              </div>
              <div className="bg-[#161b22] p-4 rounded border border-[#30363d]">
                <h4 className="font-bold text-yellow-400 mb-1">Modern Stack</h4>
                <p className="text-sm text-[#8b949e]">Using cutting-edge technologies.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
