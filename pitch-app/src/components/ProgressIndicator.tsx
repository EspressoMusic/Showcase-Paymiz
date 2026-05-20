"use client";

import { navLabels } from "@/data/panels";
import { SECTIONS, SectionId } from "@/lib/sections";
import { motion } from "framer-motion";

type ProgressIndicatorProps = {
  activeId: SectionId;
  progress: number;
};

export function ProgressIndicator({ activeId, progress }: ProgressIndicatorProps) {
  const activeIndex = SECTIONS.findIndex((s) => s.id === activeId);

  return (
    <>
      <div className="fixed inset-x-0 top-14 z-40 h-1 bg-slate-200/60 md:top-16 lg:hidden">
        <motion.div
          className="h-full bg-gradient-to-l from-emerald-600 to-slate-900"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <aside
        className="fixed start-4 top-1/2 z-40 hidden max-h-[80vh] -translate-y-1/2 overflow-y-auto lg:block"
        aria-label="התקדמות במצגת"
      >
        <div className="flex flex-col items-end gap-1 rounded-2xl border border-slate-200/80 bg-white/80 p-3 shadow-lg backdrop-blur-md">
          <div className="mb-2 h-24 w-1 overflow-hidden rounded-full bg-slate-200">
            <motion.div
              className="w-full origin-top bg-slate-900"
              style={{ height: `${progress * 100}%` }}
            />
          </div>
          {SECTIONS.map(({ id }, i) => (
            <a
              key={id}
              href={`#${id}`}
              className={`rounded-lg px-2 py-0.5 text-[10px] tracking-wide transition-all md:text-xs ${
                activeId === id
                  ? "bg-slate-900 font-bold text-white"
                  : i < activeIndex
                    ? "text-slate-500"
                    : "text-slate-400 hover:text-slate-700"
              }`}
            >
              {String(i + 1).padStart(2, "0")} {navLabels[id]}
            </a>
          ))}
        </div>
      </aside>
    </>
  );
}
