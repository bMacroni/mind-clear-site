// app/case-studies/mind-clear/page.tsx
import { Roboto } from "next/font/google";
import Hero from "./_components/Hero";
import ProblemHook from "./_components/ProblemHook";
import BrainDump from "./_components/BrainDump";
import FocusFeature from "./_components/FocusFeature";
import StuckFeature from "./_components/StuckFeature";
import OverdueDrip from "./_components/OverdueDrip";
import DownloadCTA from "./_components/DownloadCTA";

const roboto = Roboto({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
});

export default function MindClearPage() {
  return (
    <main className={roboto.className} style={{ fontWeight: 300 }}>
      <Hero />
      <ProblemHook />
      <BrainDump />
      <FocusFeature />
      <StuckFeature />
      <OverdueDrip />
      <DownloadCTA />
    </main>
  );
}
