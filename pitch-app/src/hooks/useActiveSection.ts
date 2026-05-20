"use client";

import { SECTIONS, SectionId } from "@/lib/sections";
import { useEffect, useState } from "react";

export function useActiveSection() {
  const [activeId, setActiveId] = useState<SectionId>("opening");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sectionEls = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      Boolean
    ) as HTMLElement[];

    const onScroll = () => {
      const scrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(1, scrollY / docHeight) : 0);

      const offset = window.innerHeight * 0.35;
      let current: SectionId = "opening";

      for (const el of sectionEls) {
        if (el.offsetTop - offset <= scrollY) {
          current = el.id as SectionId;
        }
      }
      setActiveId(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return { activeId, progress };
}
