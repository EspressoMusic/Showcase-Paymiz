"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type SectionWrapperProps = {
  id: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
};

export function SectionWrapper({
  id,
  children,
  className = "",
  dark = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 py-24 md:scroll-mt-28 md:py-32 lg:py-40 ${
        dark ? "bg-slate-950 text-slate-100" : "bg-[#f8f9fb] text-slate-900"
      } ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto w-full max-w-6xl px-6 md:px-10"
      >
        {children}
      </motion.div>
    </section>
  );
}

export function SectionHeader({
  label,
  title,
  subtitle,
  light = false,
}: {
  label: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <header className="mb-14 max-w-3xl md:mb-16">
      <p
        className={`mb-4 text-xs font-medium tracking-[0.2em] uppercase ${
          light ? "text-slate-400" : "text-slate-500"
        }`}
      >
        {label}
      </p>
      <h2
        className={`text-3xl font-semibold tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-[1.15] ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-lg leading-relaxed md:text-xl ${
            light ? "text-slate-400" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </header>
  );
}
