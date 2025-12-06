"use client";
import { motion } from "motion/react";

const events = [
  {
    hash: "f4g5h6i",
    author: "Amanpreet <aman@portfolio>",
    date: "Sep 2025 - Present",
    message: "feat: Software Developer Intern at Vexocore (Remote)",
    details: "Spearheaded the design and implementation of the Prishigo ride-sharing platform (Rapido clone), utilizing Flutter for the frontend and ExpressJS for a robust, real-time backend. Developed two distinct applications (Captain and User) incorporating real-time GPS tracking, payment integration, and scalable services focused on efficient request matching and high availability."
  },
  {
    hash: "a1b2c3d",
    author: "Amanpreet <aman@portfolio>",
    date: "Fri Jan 10 2025",
    message: "feat: Joined Lafleurtech as Software Development Intern",
    details: "Built a self-service data integration platform allowing clients to seamlessly incorporate custom datasets into RAG systems."
  },
  {
    hash: "e5f6g7h",
    author: "Amanpreet <aman@portfolio>",
    date: "Mon Jan 01 2025",
    message: "feat: Started Flutter Developer Intern at Celebrare",
    details: "Collaborated with various teams to develop the iOS app for Celebrare and WowInvite."
  },
  {
    hash: "i8j9k0l",
    author: "Amanpreet <aman@portfolio>",
    date: "Sun Dec 31 2024",
    message: "chore: Graduated Computer Science and Engineering",
    details: "Bachelor's degree from Chandigarh College of Engineering and Technology. Specialized in web development."
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 max-w-4xl mx-auto w-full px-4 font-mono">
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg overflow-hidden shadow-xl">
        {/* Terminal Header */}
        <div className="bg-[#161b22] px-4 py-2 border-b border-[#30363d] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#8b949e] text-xs">git-log</span>
          </div>
          <div className="text-[#8b949e] text-xs">bash</div>
        </div>

        <div className="p-6 md:p-10">
          <div className="mb-6 text-[#c9d1d9] text-sm md:text-base">
            <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> git log --pretty=format:"%h - %an, %ar : %s"
          </div>

          <div className="space-y-8 relative">
            {/* Git Branch Line */}
            <div className="absolute left-[7px] top-2 bottom-0 w-0.5 bg-[#30363d]" />

            {events.map((event, index) => (
              <motion.div
                key={event.hash}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8"
              >
                {/* Commit Dot */}
                <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#238636] border-2 border-[#0d1117] z-10" />

                <div className="text-[#c9d1d9]">
                  <div className="flex flex-wrap items-baseline gap-x-2 mb-1">
                    <span className="text-[#e0af68] text-sm">{event.hash}</span>
                    <span className="text-[#8b949e] text-sm">({event.date})</span>
                  </div>
                  <h3 className="text-[#7aa2f7] font-bold text-lg mb-1">{event.message}</h3>
                  <div className="text-[#8b949e] text-sm">
                    Author: {event.author}
                  </div>
                  <p className="text-[#c9d1d9] mt-2 text-sm border-l-2 border-[#30363d] pl-3 py-1 bg-[#161b22]/50">
                    {event.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
