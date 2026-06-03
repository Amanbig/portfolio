"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import ProjectShowcase from "@/components/ProjectShowcase/ProjectShowcase";
import Timeline from "@/components/Timeline/Timeline";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const SECTIONS = [
  { id: "hero",      label: "Home",       Component: Hero },
  { id: "about",     label: "About",      Component: About },
  { id: "skills",    label: "Skills",     Component: Skills },
  { id: "projects",  label: "Projects",   Component: ProjectShowcase },
  { id: "timeline",  label: "Experience", Component: Timeline },
  { id: "contact",   label: "Contact",    Component: Contact },
];

/* ─── Real book-page-turn variants ─────────────────────────────
   Exit: current page folds away (rotateY toward -90 or +90)
   Enter: new page unfolds in from the opposite side
   Both play simultaneously (no AnimatePresence mode="wait")     */
const variants = {
  /* New page coming in from right (forward) or left (backward) */
  enter: (dir: number) => ({
    rotateY: dir > 0 ? 90 : -90,
    opacity: 1,          /* stays opaque — rotateY handles visibility */
    zIndex: 1,
  }),
  center: {
    rotateY: 0,
    opacity: 1,
    zIndex: 2,
    transition: { duration: 1.1, ease: [0.4, 0, 0.2, 1] },
  },
  /* Old page folds back the other way */
  exit: (dir: number) => ({
    rotateY: dir > 0 ? -90 : 90,
    opacity: 1,
    zIndex: 1,
    transition: { duration: 1.1, ease: [0.4, 0, 0.2, 1] },
  }),
};

export default function Home() {
  const [page, setPage]         = useState(0);
  const [dir, setDir]           = useState(1);
  const [flipping, setFlipping] = useState(false);
  const animating               = useRef(false);
  const scrollRef               = useRef<HTMLDivElement>(null);
  const lastFlipAt              = useRef(0);   /* persists across effect re-runs */

  const goTo = useCallback((idx: number) => {
    if (animating.current || idx === page) return;
    if (idx < 0 || idx >= SECTIONS.length) return;
    setDir(idx > page ? 1 : -1);
    setPage(idx);
    setFlipping(true);
    animating.current = true;
    setTimeout(() => {
      animating.current = false;
      setFlipping(false);
    }, 1200);
  }, [page]);

  /* ── Wheel → page change ───────────────────────────────────────
     Rule: scroll through section content normally.
     Only flip when ALREADY at the scroll boundary (top/bottom)
     AND the user keeps scrolling past it (≥100 px extra intent).
  ── */
  useEffect(() => {
    /* accDelta / lastSign intentionally reset each page — they're per-page state.
       lastFlipAt is a REF so it survives across re-runs and prevents back-to-back
       flips caused by residual trackpad events after a page change. */
    let accDelta = 0;
    let lastSign = 0;

    const onWheel = (e: WheelEvent) => {
      if (animating.current) return;

      const el = scrollRef.current;
      if (!el) return;

      const sign = Math.sign(e.deltaY);
      if (sign !== lastSign && lastSign !== 0) accDelta = 0;
      lastSign = sign;

      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 4;
      const atTop    = el.scrollTop <= 4;

      if (e.deltaY > 0 && !atBottom) { accDelta = 0; return; }
      if (e.deltaY < 0 && !atTop)    { accDelta = 0; return; }

      accDelta += Math.abs(e.deltaY);
      if (accDelta < 100) return;

      const now = Date.now();
      if (now - lastFlipAt.current < 1400) { accDelta = 0; return; }

      accDelta = 0;
      lastFlipAt.current = now;
      goTo(page + (e.deltaY > 0 ? 1 : -1));
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, [page, goTo]);

  /* ── Keyboard navigation ── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowDown", "PageDown"].includes(e.key)) { e.preventDefault(); goTo(page + 1); }
      if (["ArrowUp",   "PageUp"].includes(e.key))   { e.preventDefault(); goTo(page - 1); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [page, goTo]);

  /* ── Reset inner scroll on page change ── */
  useEffect(() => { scrollRef.current?.scrollTo({ top: 0 }); }, [page]);

  const { Component } = SECTIONS[page];
  const isHero = page === 0;

  return (
    <div className="h-screen overflow-hidden bg-background relative select-none">
      <ScrollProgress />
      <Navbar currentPage={page} onNavigate={goTo} />

      {/* ── 3D book stage ── */}
      <div
        className="h-full w-full relative"
        style={{
          perspective: "1200px",
          perspectiveOrigin: "50% 45%",
        }}
      >
        {/* Subtle page shadow — makes active page look lifted off the surface */}
        <div
          className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-300"
          style={{
            background: "radial-gradient(ellipse 70% 50% at 50% 55%, transparent 60%, oklch(0 0 0 / 30%) 100%)",
          }}
        />

        {/* Edge shadow — appears at the pivot edge during flip */}
        <div
          className={`absolute top-0 w-12 h-full z-50 pointer-events-none transition-opacity duration-150 ${
            flipping ? "opacity-100" : "opacity-0"
          } ${dir > 0 ? "right-0" : "left-0"}`}
          style={{
            background: dir > 0
              ? "linear-gradient(to left,  oklch(0 0 0 / 30%), transparent)"
              : "linear-gradient(to right, oklch(0 0 0 / 30%), transparent)",
          }}
        />

        {/* Pages stack — absolute so exit + enter overlap during flip */}
        <AnimatePresence custom={dir}>
          {/*
           * Transform wrapper — handles the 3D rotation only.
           * NO overflow here: browsers don't reliably scroll
           * elements that have active 3D transforms.
           */}
          <motion.div
            key={page}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{
              transformOrigin: dir > 0 ? "right center" : "left center",
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
              boxShadow: "0 8px 60px oklch(0 0 0 / 25%), 0 2px 8px oklch(0 0 0 / 12%)",
            }}
            className="absolute inset-0 bg-background"
          >
            {/*
             * Scroll container — separate from the transform so
             * overflow-y works reliably in all browsers.
             */}
            <div
              ref={scrollRef}
              className="h-full w-full overflow-y-auto"
            >
              {isHero ? (
                <Component onNavigate={goTo} />
              ) : (
                <div className="max-w-6xl mx-auto px-4 pt-24 pb-16">
                  <Component />
                  {page === SECTIONS.length - 1 && <Footer />}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Right-side dot nav ── */}
      <nav className="fixed right-5 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
        {SECTIONS.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            title={s.label}
            className="group flex items-center gap-2 justify-end"
          >
            <span className={`text-[10px] font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap ${i === page ? "opacity-100 text-primary" : ""}`}>
              {s.label}
            </span>
            <span className={`rounded-full transition-all duration-300 ${
              i === page
                ? "w-2.5 h-2.5 bg-primary shadow-[0_0_8px_oklch(0.604_0.173_241.3_/_.8)]"
                : "w-2 h-2 bg-border group-hover:bg-muted-foreground"
            }`} />
          </button>
        ))}
      </nav>

      {/* ── Page counter ── */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 font-mono text-xs text-muted-foreground z-50 pointer-events-none tracking-widest">
        {String(page + 1).padStart(2, "0")}
        <span className="mx-1.5 opacity-40">/</span>
        {String(SECTIONS.length).padStart(2, "0")}
      </div>
    </div>
  );
}
