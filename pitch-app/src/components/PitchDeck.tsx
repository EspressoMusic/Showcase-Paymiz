"use client";

import { ClosingSection } from "@/components/ClosingSection";
import { Navbar } from "@/components/Navbar";
import { OpeningHero } from "@/components/OpeningHero";
import { PanelSection } from "@/components/PanelSection";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { PANELS } from "@/data/panels";
import { useActiveSection } from "@/hooks/useActiveSection";

export function PitchDeck() {
  const { activeId, progress } = useActiveSection();

  return (
    <>
      <Navbar activeId={activeId} />
      <ProgressIndicator activeId={activeId} progress={progress} />
      <main dir="rtl" className="text-start">
        <OpeningHero />
        {PANELS.slice(1).map((panel) => (
          <PanelSection key={panel.id} panel={panel} />
        ))}
        <ClosingSection />
      </main>
    </>
  );
}
