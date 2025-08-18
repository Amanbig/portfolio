"use client";

type Props = {
  title: string;
  description: string;
  href: string;
};

export default function ProjectCard({ title, description, href }: Props) {
  return (
    <a
      href={href}
      className="block p-6 bg-white/3 hover:bg-white/5 rounded-lg border border-white/6 transition-colors"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-slate-300">{description}</p>
    </a>
  );
}
