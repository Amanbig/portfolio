"use client";
import { motion } from "motion/react";
import BlurText from "@/components/BlurText/BlurText";

const highlights = [
  {
    icon: "🚀",
    title: "Performance First",
    description: "Optimized applications with lightning-fast load times and smooth interactions"
  },
  {
    icon: "♿",
    title: "Accessibility Focused",
    description: "Building inclusive experiences that work for everyone, following WCAG guidelines"
  },
  {
    icon: "📱",
    title: "Responsive Design",
    description: "Pixel-perfect interfaces that look great on any device or screen size"
  },
  {
    icon: "⚡",
    title: "Modern Stack",
    description: "Using cutting-edge technologies and best practices for scalable solutions"
  }
];

const interests = [
  { name: "Web Development", icon: "🌐" },
  { name: "Mobile Apps", icon: "📱" },
  { name: "Game Development", icon: "🎮" },
  { name: "AI & Machine Learning", icon: "🤖" },
  { name: "Open Source", icon: "💻" },
  { name: "UI/UX Design", icon: "🎨" }
];

export default function About() {
  return (
    <section id="about" className="py-20 max-w-6xl mx-auto w-full">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          <BlurText text="About Me" animateBy="letters" delay={50} direction="top" />
        </motion.h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
            <p className="text-xl text-white font-medium">
              Hi there! I&apos;m Aman, a passionate software developer with over 3 years of experience 
              crafting digital solutions that make a difference.
            </p>
            
            <p>
              I specialize in building performant, accessible, and delightful user interfaces using 
              modern technologies like <span className="text-blue-400 font-semibold">React</span>, 
              <span className="text-blue-400 font-semibold"> Next.js</span>, and 
              <span className="text-blue-400 font-semibold"> TypeScript</span>. My approach combines 
              clean code practices with beautiful design to create experiences that users love.
            </p>

            <p>
              Beyond web development, I&apos;m passionate about mobile app development, game creation, 
              and exploring the possibilities of AI and machine learning. I believe in continuous 
              learning and staying up-to-date with the latest industry trends and best practices.
            </p>

            <p>
              When I&apos;m not coding, you&apos;ll find me contributing to open-source projects, writing 
              technical articles, or experimenting with new technologies. I&apos;m always excited to 
              collaborate on innovative projects that push the boundaries of what&apos;s possible.
            </p>
          </div>

          {/* Interests */}
          <div className="pt-6">
            <h3 className="text-xl font-semibold text-white mb-4">What I&apos;m passionate about:</h3>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, index) => (
                <motion.span
                  key={interest.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-slate-300 hover:text-white hover:bg-white/20 transition-all duration-300"
                >
                  <span>{interest.icon}</span>
                  {interest.name}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-all duration-300"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {highlight.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                {highlight.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
