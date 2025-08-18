"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-30 backdrop-blur-sm bg-black/40 border-b border-white/6">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="#" className="text-lg font-bold">
          Amanbig
        </Link>

        <div className="flex items-center gap-4">
          <a href="#projects" className="text-sm text-slate-300 hover:text-white">
            Projects
          </a>
          <a href="#about" className="text-sm text-slate-300 hover:text-white">
            About
          </a>
          <a href="#contact" className="text-sm text-slate-300 hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
