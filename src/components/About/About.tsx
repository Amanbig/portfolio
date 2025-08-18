"use client";
import BlurText from "@/components/BlurText/BlurText";
import Squares from "@/components/Backgrounds/Squares/Squares";

export default function About() {
  return (
    <section id="about" className="relative py-20 max-w-4xl mx-auto w-full overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <Squares
          direction="diagonal"
          speed={0.3}
          squareSize={48}
          borderColor="rgba(255,255,255,0.1)"
          hoverFillColor="rgba(255,255,255,0.05)"
        />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70">
          <BlurText text="About me" animateBy="letters" delay={50} direction="top" />
        </h2>
        <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
          <p className="backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-white/10">
            I&apos;m a frontend developer focused on building performant, accessible,
            and delightful user interfaces. I enjoy working with React, Next.js,
            Tailwind CSS, and modern web tooling.
          </p>
        </div>
      </div>
    </section>
  );
}
