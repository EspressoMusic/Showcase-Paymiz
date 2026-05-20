"use client";

import { navLabels, pitchMeta } from "@/data/panels";
import { SECTIONS, SectionId } from "@/lib/sections";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

type NavbarProps = {
  activeId: SectionId;
};

export function Navbar({ activeId }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-lg"
            : "border-b border-transparent bg-white/50 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4 md:h-16 md:px-8">
          <a href="#opening" className="font-display shrink-0 text-lg font-bold tracking-tight text-slate-900">
            {pitchMeta.productName}
          </a>

          <nav
            className="hidden max-w-[55vw] items-center gap-1 overflow-x-auto py-1 lg:flex"
            aria-label="ניווט פאנלים"
          >
            {SECTIONS.map(({ id }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`shrink-0 rounded-full px-3 py-1.5 text-xs transition-all md:text-sm ${
                  activeId === id
                    ? "bg-slate-900 font-medium text-white"
                    : "text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                }`}
              >
                {navLabels[id]}
              </a>
            ))}
          </nav>

          <a
            href="#investment"
            className="hidden shrink-0 rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-white md:inline-flex"
          >
            השקעה
          </a>

          <button
            type="button"
            className="rounded-lg p-2 text-slate-700 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "סגור תפריט" : "פתח תפריט"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex h-full flex-col items-center justify-center gap-3 overflow-y-auto py-24">
              {SECTIONS.map(({ id }, i) => (
                <motion.a
                  key={id}
                  href={`#${id}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.02 }}
                  onClick={() => setOpen(false)}
                  className={`text-base ${activeId === id ? "font-bold text-slate-900" : "text-slate-500"}`}
                >
                  {navLabels[id]}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
