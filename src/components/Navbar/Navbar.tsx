"use client";
import { useState } from "react";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("#about");

  const navLinks = [
    { href: "#about", label: "README.md", icon: "📝" },
    { href: "#skills", label: "package.json", icon: "📦" },
    { href: "#projects", label: "projects.tsx", icon: "⚛️" },
    { href: "#services", label: "extensions.json", icon: "🧩" },
    { href: "#timeline", label: "git-log", icon: "clock" },
    { href: "#contact", label: "contact.sh", icon: "💻" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-[#161b22] border-b border-[#30363d] font-mono text-sm overflow-x-auto">
      <div className="flex">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setActiveTab(link.href)}
            className={`flex items-center gap-2 px-4 py-2 border-r border-[#30363d] min-w-fit transition-colors ${activeTab === link.href
              ? "bg-[#0d1117] text-[#c9d1d9] border-t-2 border-t-[#f78166]"
              : "bg-[#21262d] text-[#8b949e] hover:bg-[#161b22]"
              }`}
          >
            <span>{link.icon === "clock" ? "🕒" : link.icon}</span>
            <span>{link.label}</span>
            {activeTab === link.href && (
              <span className="ml-2 hover:bg-[#30363d] rounded-sm px-1">×</span>
            )}
          </a>
        ))}
      </div>
    </nav>
  );
}
