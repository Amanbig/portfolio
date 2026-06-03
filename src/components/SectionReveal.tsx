"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";

export default function SectionReveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    /* Small perspective = dramatic 3D distortion */
    <div style={{ perspective: "650px", perspectiveOrigin: "50% 0%" }}>
      <motion.div
        style={{
          transformOrigin: "50% 0%",   /* rotate around the top edge */
          willChange: "transform",
        }}
        initial={{
          opacity: 0,
          rotateX: 42,                 /* steep downward tilt — page edge-on */
          y: 70,
          scale: 0.94,
        }}
        whileInView={{
          opacity: 1,
          rotateX: 0,
          y: 0,
          scale: 1,
        }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          duration: 0.95,
          ease: [0.22, 1, 0.36, 1],
          opacity: { duration: 0.65, ease: "easeOut" },
          scale:   { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}
