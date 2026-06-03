"use client";
import { useScroll, motion } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[200] pointer-events-none"
      style={{
        scaleX: scrollYProgress,
        background: "linear-gradient(to right, oklch(0.604 0.173 241.3), oklch(0.72 0.15 200))",
      }}
    />
  );
}
