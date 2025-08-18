"use client";

export default function Footer() {
  return (
    <footer className="mt-16 py-8 border-t border-white/6">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm text-slate-400">
        <div className="mb-3">© {new Date().getFullYear()} Amanbig. All rights reserved.</div>
        <div className="flex items-center justify-center gap-4">
          <a href="https://github.com/Amanbig" target="_blank" rel="noreferrer" className="hover:text-white">
            GitHub
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
