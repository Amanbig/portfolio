"use client";

const stacks = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Vercel"];

export default function TechStack() {
  return (
    <section id="tech" className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-2xl font-semibold mb-4 text-center">Tech stack</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {stacks.map((s) => (
            <span
              key={s}
              className="px-3 py-1 rounded-full bg-white/6 text-sm text-slate-200"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
