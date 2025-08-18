"use client";
import BlurText from "@/components/BlurText/BlurText";

export default function Hero() {
  return (
    <header className="flex flex-col items-center text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
        <BlurText
          text="Hi, I'm Aman — a software developer"
          animateBy="words"
          delay={100}
          direction="top"
          className="block"
        />
      </h1>

      <p className="mt-4 text-lg text-slate-300 max-w-2xl">
        I build accessible, high-performance web experiences using React,
        Next.js and modern CSS as well as app development and game development along with AI and ML.
      </p>
    </header>
  );
}
