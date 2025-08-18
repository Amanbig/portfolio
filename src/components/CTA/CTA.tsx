"use client";
import { motion } from "motion/react";

export default function CTA() {
  return (
    <section className="py-20 max-w-4xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl" />
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl" />
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000" />
        
        <div className="relative z-10 text-center p-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-200"
          >
            Ready to Start Your Project?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Let's collaborate to bring your ideas to life. Whether it's a web app, mobile application, or something entirely new, I'm here to help you succeed.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get In Touch
            </motion.a>
            
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-white/20 hover:bg-white/10 rounded-xl font-semibold text-white transition-all duration-300"
            >
              View My Work
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}