"use client";
import Image from "next/image";
import BlurText from "@/components/BlurText/BlurText";

type Props = {
  title: string;
  description: string;
  href: string;
  imageSrc?: string;
  tags?: string[];
};

export default function ProjectCard({ title, description, href, imageSrc, tags }: Props) {
  return (
    <a
      href={href}
      className="group relative block overflow-hidden rounded-xl bg-gradient-to-br from-white/5 to-white/2 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {imageSrc && (
        <div className="relative h-52 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
        </div>
      )}
      
      <div className="relative z-10 p-6 backdrop-blur-sm">
        <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90 group-hover:from-sky-200 group-hover:to-white transition-all duration-300">
          <BlurText text={title} animateBy="letters" delay={30} direction="top" />
        </h3>
        
        <p className="text-base text-slate-300 mb-4 leading-relaxed">{description}</p>
        
        {tags && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-slate-200 backdrop-blur-sm
                         group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
}
