"use client";

import { AnimatedCards, CardItem } from "@/components/AnimatedCards";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PanelData } from "@/data/panels";
import { motion } from "framer-motion";

type PanelSectionProps = {
  panel: PanelData;
  children?: React.ReactNode;
};

export function PanelSection({ panel, children }: PanelSectionProps) {
  const dark = panel.variant === "dark";
  const accent = panel.variant === "accent";
  const paragraphs = panel.body.split("\n\n");

  const cards: CardItem[] = panel.cards.map((c) => ({
    title: c.title,
    description: c.description,
    icon: c.icon,
  }));

  return (
    <SectionWrapper
      id={panel.id}
      dark={dark}
      className={
        accent
          ? "!bg-gradient-to-b from-slate-100/80 to-[#f8f9fb]"
          : panel.index % 2 === 0 && !dark
            ? "bg-white"
            : ""
      }
    >
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-8 flex items-center gap-4"
      >
        <motion.span
          whileInView={{ scale: [0.8, 1.05, 1] }}
          viewport={{ once: true }}
          className={`font-display flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-lg font-bold shadow-lg ${
            dark ? "bg-white text-slate-900 shadow-white/10" : "bg-slate-900 text-white shadow-slate-900/25"
          }`}
        >
          {String(panel.number).padStart(2, "0")}
        </motion.span>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px flex-1 origin-right bg-gradient-to-l from-slate-900/20 via-slate-400 to-transparent"
        />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className={`font-display max-w-4xl text-4xl font-bold tracking-tight md:text-5xl lg:text-[3.25rem] lg:leading-[1.12] ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {panel.headline}
      </motion.h2>

      <div className="mt-8 max-w-3xl space-y-5">
        {paragraphs.map((p, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 * i, duration: 0.5 }}
            className={`text-pitch-body md:text-pitch-body-lg ${dark ? "text-slate-400" : "text-slate-600"}`}
          >
            {p}
          </motion.p>
        ))}
      </div>

      {children && <div className="mt-12">{children}</div>}

      <div className="mt-14 md:mt-20">
        <AnimatedCards cards={cards} columns={panel.columns ?? (panel.cards.length >= 4 ? 4 : 2)} />
      </div>
    </SectionWrapper>
  );
}
