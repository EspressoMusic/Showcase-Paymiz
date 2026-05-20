"use client";

import { pitchMeta } from "@/data/panels";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

export function ClosingSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white md:py-32">
      <motion.div
        aria-hidden
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/30 via-transparent to-transparent"
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl font-bold leading-relaxed md:text-4xl lg:text-5xl"
        >
          מוכנים לדבר על Bizmi?
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={pitchMeta.meetingUrl}
            className="font-display inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 text-base font-bold text-slate-900 transition hover:scale-105 hover:bg-slate-100"
          >
            קבעו פגישה
            <ArrowUpRight size={18} />
          </a>
          <a
            href={`mailto:${pitchMeta.contactEmail}`}
            className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-10 py-4 text-base font-medium text-slate-300 transition hover:border-slate-400 hover:text-white"
          >
            <Mail size={18} />
            {pitchMeta.contactEmail}
          </a>
        </motion.div>
        <p className="mt-12 text-base text-slate-600">Bizmi · סודי — לעיון משקיעים בלבד</p>
      </div>
    </section>
  );
}
