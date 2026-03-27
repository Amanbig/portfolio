"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";

interface StatItem {
  label: string;
  value: number;
  suffix: string;
  color: string;
  icon: string;
  desc: string;
}

const stats: StatItem[] = [
  { label: "projects_shipped", value: 15, suffix: "+", color: "text-blue-400", icon: "📦", desc: "Apps & frameworks deployed" },
  { label: "lines_of_code", value: 100, suffix: "k+", color: "text-green-400", icon: "💻", desc: "Across all repositories" },
  { label: "years_experience", value: 3, suffix: "+", color: "text-purple-400", icon: "⚡", desc: "Building production systems" },
  { label: "oss_prs_merged", value: 4, suffix: "", color: "text-yellow-400", icon: "🌐", desc: "deepset-ai/haystack & integrations" },
];

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, target]);

  return <>{count}{suffix}</>;
}

export default function Stats() {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-10 max-w-5xl mx-auto w-full px-4 font-mono">
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg overflow-hidden shadow-xl">
        <div className="bg-[#161b22] px-4 py-2 border-b border-[#30363d] flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#27c93f] animate-pulse" />
          <span className="text-[#8b949e] text-xs tracking-widest">system_status.sh</span>
        </div>

        <div className="p-6 md:p-8" ref={ref}>
          <div className="text-[#8b949e] text-xs mb-5">
            <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> ./system_status.sh --metrics
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="bg-[#161b22] rounded-lg border border-[#30363d] p-4 text-center hover:border-[#484f58] transition-all group"
              >
                <div className="text-2xl mb-1 group-hover:animate-float inline-block">{stat.icon}</div>
                <div className={`text-3xl font-bold ${stat.color} tabular-nums`}>
                  <CountUp target={stat.value} suffix={stat.suffix} active={triggered} />
                </div>
                <div className="text-[#8b949e] text-[10px] mt-1 font-mono">{stat.label}</div>
                <div className="text-[#484f58] text-[10px] mt-1 leading-tight">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}