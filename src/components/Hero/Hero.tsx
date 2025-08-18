"use client";
import BlurText from "@/components/BlurText/BlurText";
import Squares from "@/components/Backgrounds/Squares/Squares";

export default function Hero() {
  return (
    <header className="relative min-h-[90vh] flex items-center justify-center">
      <div className="absolute inset-0 z-0 opacity-20">
        <Squares
          direction="diagonal"
          speed={0.5}
          squareSize={32}
          borderColor="rgba(255,255,255,0.2)"
          hoverFillColor="rgba(255,255,255,0.1)"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight bg-clip-text text-white bg-gradient-to-r from-white to-white/50">
          <BlurText
            text="Hi, I'm Amanpreet — a software developer"
            animateBy="words"
            delay={100}
            direction="top"
            className="block"
          />
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
          I build accessible, high-performance web experiences using React,
          Next.js and modern CSS as well as app development and game development along with AI and ML.
        </p>

        <div className="mt-10 flex gap-6">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-white/8 hover:bg-white/12 border border-white/10 transition-all duration-300 hover:scale-105"
          >
            See projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-white/10 hover:bg-white/5 transition-all duration-300 hover:scale-105"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
