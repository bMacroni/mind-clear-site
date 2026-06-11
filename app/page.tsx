// app/page.tsx
import Hero from "../components/marketing/Hero";
import ProblemHook from "../components/marketing/ProblemHook";
import BrainDump from "../components/marketing/BrainDump";
import FocusFeature from "../components/marketing/FocusFeature";
import StuckFeature from "../components/marketing/StuckFeature";
import OverdueDrip from "../components/marketing/OverdueDrip";
import FeatureList from "../components/marketing/FeatureList";
import FounderStoryThread from "../components/marketing/FounderStoryThread";
import DownloadCTA from "../components/marketing/DownloadCTA";
import Footer from "../components/marketing/Footer";

export default function Home() {
  return (
    <main className="mc-page overflow-x-hidden">
      <Hero />
      <ProblemHook />
      <BrainDump />
      <FocusFeature />
      <StuckFeature />
      <OverdueDrip />
      <FeatureList />
      <FounderStoryThread />
      <DownloadCTA />
      <Footer />
      <div className="mc-grain" aria-hidden="true" />
    </main>
  );
}
