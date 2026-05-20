"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { useState } from "react";

export type CardItem = {
  title: string;
  description: string;
  icon?: LucideIcon;
};

type AnimatedCardsProps = {
  cards: CardItem[];
  columns?: 2 | 3 | 4;
};

export function AnimatedCards({ cards, columns = 2 }: AnimatedCardsProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  const gridClass =
    columns === 4
      ? "grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      : columns === 3
        ? "grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        : "grid gap-5 sm:grid-cols-2";

  return (
    <div className={`relative ${gridClass}`}>
      {cards.map((card, i) => {
        const isHovered = hovered === i;
        const isDimmed = hovered !== null && !isHovered;
        const Icon = card.icon;

        return (
          <motion.article
            key={card.title}
            layout
            onHoverStart={() => setHovered(i)}
            onHoverEnd={() => setHovered(null)}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.06, duration: 0.5, layout: { duration: 0.35 } }}
            animate={{
              scale: isHovered ? 1.14 : isDimmed ? 0.94 : 1,
              opacity: isDimmed ? 0.45 : 1,
              zIndex: isHovered ? 40 : 1,
            }}
            whileTap={{ scale: 1.08 }}
            className={`group relative cursor-default overflow-hidden rounded-2xl border bg-white p-7 transition-shadow md:p-9 ${
              isHovered
                ? "border-slate-900 shadow-2xl shadow-slate-900/20 ring-2 ring-slate-900/10"
                : "border-slate-200/90 shadow-sm hover:border-slate-300"
            } ${isHovered ? "lg:col-span-2" : ""}`}
            style={{ originY: 0.5 }}
          >
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent opacity-0 transition-opacity"
              animate={{ opacity: isHovered ? 1 : 0 }}
            />
            {Icon && (
              <motion.div
                animate={{ scale: isHovered ? 1.2 : 1, rotate: isHovered ? -4 : 0 }}
                className="mb-5 inline-flex rounded-xl bg-slate-100 p-3 text-slate-800"
              >
                <Icon size={26} strokeWidth={1.5} />
              </motion.div>
            )}
            <motion.h3
              animate={{ fontSize: isHovered ? "1.65rem" : "1.25rem" }}
              className="font-display font-bold leading-snug text-slate-900"
            >
              {card.title}
            </motion.h3>
            <motion.p
              animate={{ opacity: isHovered ? 1 : 0.88 }}
              className={`mt-4 leading-relaxed text-slate-600 ${isHovered ? "text-pitch-card-lg" : "text-pitch-card"}`}
            >
              {card.description}
            </motion.p>
            <motion.div
              className="absolute bottom-0 start-0 h-1 bg-slate-900"
              initial={{ width: "0%" }}
              animate={{ width: isHovered ? "100%" : "0%" }}
              transition={{ duration: 0.35 }}
            />
          </motion.article>
        );
      })}
    </div>
  );
}
