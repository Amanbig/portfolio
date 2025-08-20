"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import BlurText from "@/components/BlurText/BlurText";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 py-4`}>
      <div className={`absolute inset-0 transition-all duration-300 ${ "bg-black/90 backdrop-blur-lg border-b border-white/10"
        }`} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold bg-clip-text dark:text-white text-black bg-gradient-to-r from-white to-white/80 hover:to-sky-400 transition-all duration-300"
          >
            <BlurText text="Amanpreet." animateBy="letters" delay={30} direction="top" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative px-2 py-1 text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-white"
              >
                {link.label}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-sky-500 to-blue-600 
                               transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
            aria-label="Toggle mobile menu"
          >
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
              }`} />
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"
              }`} />
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
              }`} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
}
