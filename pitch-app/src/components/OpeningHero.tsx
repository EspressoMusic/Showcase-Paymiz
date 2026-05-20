"use client";

import { AnimatedCards } from "@/components/AnimatedCards";
import { PANELS } from "@/data/panels";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Link2, MessageCircle, Calendar, Package, Users } from "lucide-react";
import { useRef } from "react";

const orbit = [
  { label: "הזמנות", icon: Package },
  { label: "תורים", icon: Calendar },
  { label: "לקוחות", icon: Users },
  { label: "פניות", icon: MessageCircle },
];

export function OpeningHero() {
  const panel = PANELS[0];
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  const paragraphs = panel.body.split("\n\n");

  return (
    <section
      id="opening"
      ref={ref}
      className="relative flex min-h-screen scroll-mt-0 flex-col justify-center overflow-hidden bg-[#f8f9fb] pt-24 pb-16 md:pt-28"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.55, 0.4] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute -end-40 top-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-slate-200 to-slate-100 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
          className="absolute -start-32 bottom-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-emerald-100/80 to-transparent blur-3xl"
        />
        <svg className="absolute inset-0 h-full w-full opacity-[0.25]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="56" height="56" patternUnits="userSpaceOnUse">
              <path d="M56 0H0V56" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-300" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <motion.div style={{ y, opacity }} className="relative mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-slate-600"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              Bizmi · Investor Pitch
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl font-bold leading-[1.15] tracking-tight text-slate-900 md:text-5xl lg:text-[3.5rem] xl:text-6xl"
            >
              {panel.headline}
            </motion.h1>
            <div className="mt-8 space-y-4">
              {paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.1 }}
                  className="text-pitch-body md:text-pitch-body-lg text-slate-600"
                >
                  {p}
                </motion.p>
              ))}
            </div>
            <motion.a
              href="#problem"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-display mt-10 inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800"
            >
              התחל את המצגת
              <ArrowDown size={16} className="animate-bounce" />
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="relative mx-auto flex h-[400px] w-full max-w-md items-center justify-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 48, ease: "linear" }}
              className="absolute inset-0 m-auto h-80 w-80 rounded-full border border-dashed border-slate-300/70"
            />
            {orbit.map((item, i) => {
              const angle = (i / orbit.length) * 360 - 90;
              const r = 150;
              const x = Math.cos((angle * Math.PI) / 180) * r;
              const yPos = Math.sin((angle * Math.PI) / 180) * r;
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.12, type: "spring" }}
                  whileHover={{ scale: 1.2, zIndex: 30 }}
                  className="absolute flex flex-col items-center gap-2"
                  style={{ transform: `translate(${x}px, ${yPos}px)` }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-lg">
                    <Icon size={22} className="text-slate-800" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-bold text-slate-700">{item.label}</span>
                </motion.div>
              );
            })}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative z-10 w-36 rounded-[2.25rem] border-[5px] border-slate-900 bg-slate-900 p-3 shadow-2xl"
            >
              <div className="mb-2 mx-auto h-1.5 w-12 rounded-full bg-slate-700" />
              <div className="rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 p-3">
                <div className="mb-2 flex items-center gap-1 text-[9px] text-emerald-400">
                  <Link2 size={10} /> bizmi.app/...
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {orbit.map((o) => (
                    <div key={o.label} className="rounded-lg bg-slate-700/90 py-2 text-center text-[8px] text-slate-200">
                      {o.label}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-16">
          <AnimatedCards
            cards={panel.cards.map((c) => ({
              title: c.title,
              description: c.description,
              icon: c.icon,
            }))}
            columns={3}
          />
        </div>
      </motion.div>
    </section>
  );
}
