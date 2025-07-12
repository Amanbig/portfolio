"use client";
import Image from "next/image";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import Link from "next/link";
import { useEffect, useState } from "react";
export function HeroSection() {

  const [pdfUrl, setPdfUrl] = useState("");

  useEffect(() => {
    const fetchPdf = async () => {
      try {
        const response = await fetch('/resume/Resume_Data_Science.pdf');
        if (!response.ok) throw new Error('Network response was not ok');
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        setPdfUrl(url);
      } catch (error) {
        console.error('Error fetching PDF:', error);
      }
    };

    fetchPdf();
  }, []); // Fetch the PDF on component mount

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
          <Link href="https://github.com/Amanbig" target="_blank" rel="noopener noreferrer">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm cursor-pointer">
          Github
        </button>
          </Link>
          <a href={pdfUrl!} download="Amanpreet_singh.pdf" target="_blank" rel="noopener noreferrer">
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm cursor-pointer">
          Resume
        </button>
          </a>
      </div>
    </div>
  );
}
