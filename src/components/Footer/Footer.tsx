"use client";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-6 bg-[#007acc] text-white text-xs font-mono flex items-center justify-between px-2 z-50 select-none">
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/Amanbig/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:bg-white/20 px-1 rounded transition-colors"
        >
          <span className="text-sm">main*</span>
        </a>
        <div className="flex items-center gap-1 hover:bg-white/20 px-1 rounded transition-colors cursor-pointer">
          <span>⊗</span>
          <span>0</span>
          <span>⚠</span>
          <span>0</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-4">
          <span className="hover:bg-white/20 px-1 rounded cursor-pointer">Ln 1, Col 1</span>
          <span className="hover:bg-white/20 px-1 rounded cursor-pointer">UTF-8</span>
          <span className="hover:bg-white/20 px-1 rounded cursor-pointer">TypeScript React</span>
        </div>
        <div className="flex items-center gap-2 hover:bg-white/20 px-1 rounded cursor-pointer">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
          <span>Prettier</span>
        </div>
        <div className="hover:bg-white/20 px-1 rounded cursor-pointer">
          <span>🔔</span>
        </div>
      </div>
    </footer>
  );
}
