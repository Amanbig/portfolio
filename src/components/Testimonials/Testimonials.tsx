"use client";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Product Manager",
    company: "TechCorp",
    quote: "Aman shipped a beautiful, high-performance landing page for our app — great attention to detail and accessibility. The code quality was exceptional.",
    avatar: "👨‍💼",
    rating: 5,
  },
  {
    name: "Jamie Chen",
    role: "Startup Founder",
    company: "InnovateLab",
    quote: "Quick turnaround and clear communication. Highly recommended for any React or Next.js project. Delivered exactly what we needed.",
    avatar: "👩‍💻",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    role: "Design Lead",
    company: "CreativeStudio",
    quote: "Working with Aman was a pleasure. He translated our designs perfectly into responsive, interactive components. Great collaboration skills.",
    avatar: "👩‍🎨",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 max-w-6xl mx-auto w-full">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          What People Say
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-slate-400 max-w-2xl mx-auto"
        >
          Feedback from clients and collaborators I've worked with
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.blockquote
            key={testimonial.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-all duration-300 relative overflow-hidden"
          >
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 text-4xl text-white/10 group-hover:text-white/20 transition-colors duration-300">
              "
            </div>

            {/* Rating Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: (index * 0.1) + (i * 0.05) }}
                  className="text-yellow-400 text-lg"
                >
                  ⭐
                </motion.span>
              ))}
            </div>

            {/* Quote */}
            <p className="text-slate-200 mb-6 leading-relaxed relative z-10">
              "{testimonial.quote}"
            </p>

            {/* Author Info */}
            <footer className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center text-2xl border border-white/10">
                {testimonial.avatar}
              </div>
              <div>
                <div className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {testimonial.name}
                </div>
                <div className="text-sm text-slate-400">
                  {testimonial.role} at {testimonial.company}
                </div>
              </div>
            </footer>

            {/* Hover Gradient Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </motion.blockquote>
        ))}
      </div>

      {/* Trust Indicators */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-16"
      >
        <div className="flex flex-wrap justify-center items-center gap-8 text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span className="text-sm">100% Client Satisfaction</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-400">⚡</span>
            <span className="text-sm">Fast Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-purple-400">🎯</span>
            <span className="text-sm">Quality Focused</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}