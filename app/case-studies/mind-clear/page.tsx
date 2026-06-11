// app/case-studies/mind-clear/page.tsx
import type { Metadata } from "next";
import Hero from "../../../components/marketing/Hero";
import ProblemHook from "../../../components/marketing/ProblemHook";
import BrainDump from "../../../components/marketing/BrainDump";
import FocusFeature from "../../../components/marketing/FocusFeature";
import StuckFeature from "../../../components/marketing/StuckFeature";
import OverdueDrip from "../../../components/marketing/OverdueDrip";
import DownloadCTA from "../../../components/marketing/DownloadCTA";

export const metadata: Metadata = {
  title: "Mind Clear — Clear your head. One step at a time.",
  description:
    "Dump everything on your mind. Mind Clear turns it into a plan. AI-powered planning built for ADHD brains — gentle on bad days. Free on Android.",
};

export default function MindClearPage() {
  return (
    <main className="mc-page overflow-x-hidden">
      <Hero />
      <ProblemHook />
      <BrainDump />
      <FocusFeature />
      <StuckFeature />
      <OverdueDrip />
      <DownloadCTA />
      <div className="mc-grain" aria-hidden="true" />
    </main>
  );
}
