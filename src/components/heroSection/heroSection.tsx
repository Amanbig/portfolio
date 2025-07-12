"use client";
import Image from "next/image";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function HeroSection() {
  const words = [
    {
      text: "I",
    },
    {
      text: "am",
    },
    {
      text: "Amanpreet,",
    },
    {
      text: "an",
    },
    {
      text: "AI Engineer.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-screen  ">
      <div>
        <Image
        width={250}
        height={250}
        src='/profile/photo-removebg-preview.png'
        alt='Profile Picture'
        />
      </div>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Github
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Resume
        </button>
      </div>
    </div>
  );
}
