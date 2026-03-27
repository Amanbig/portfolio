"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("#about");

  const navLinks = [
    { href: "#about", label: "README.md", icon: "📝" },
    { href: "#skills", label: "package.json", icon: "📦" },
    { href: "#projects", label: "projects.tsx", icon: "⚛️" },
    { href: "#services", label: "extensions.json", icon: "🧩" },
    { href: "#timeline", label: "git-log", icon: "🕒" },
    { href: "#contact", label: "contact.sh", icon: "💻" }
  ];

  // Scroll-aware active tab tracking
  useEffect(() => {
    const sections = navLinks.map(link => link.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActiveTab(`#${id}`);
            }
          });
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(obs => obs.disconnect());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-[#161b22] border-b border-[#30363d] font-mono text-sm">
      {/* Tab overflow fade edges on mobile */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[#161b22] to-transparent z-10 pointer-events-none md:hidden" />
        <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-[#161b22] to-transparent z-10 pointer-events-none md:hidden" />
        <div className="flex overflow-x-auto scrollbar-none" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActiveTab(link.href)}
              className={`flex items-center gap-2 px-4 py-2 border-r border-[#30363d] min-w-fit transition-all duration-200 relative ${
                activeTab === link.href
                  ? "bg-[#0d1117] text-[#c9d1d9] border-t-2 border-t-[#f78166]"
                  : "bg-[#21262d] text-[#8b949e] hover:bg-[#1c2128] hover:text-[#c9d1d9]"
              }`}
            >
              <span>{link.icon}</span>
              <span className="whitespace-nowrap">{link.label}</span>
              {activeTab === link.href && (
                <span
                  className="ml-1 text-[#8b949e] hover:text-white hover:bg-[#30363d] rounded-sm px-0.5 cursor-pointer"
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                >×</span>
              )}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
