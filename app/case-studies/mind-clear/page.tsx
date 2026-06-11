// app/case-studies/mind-clear/page.tsx
import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import Hero from "./_components/Hero";
import ProblemHook from "./_components/ProblemHook";
import BrainDump from "./_components/BrainDump";
import FocusFeature from "./_components/FocusFeature";
import StuckFeature from "./_components/StuckFeature";
import OverdueDrip from "./_components/OverdueDrip";
import DownloadCTA from "./_components/DownloadCTA";

const fraunces = Fraunces({
  weight: ["300", "400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

const outfit = Outfit({
  weight: ["300", "400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Mind Clear — Clear your head. One step at a time.",
  description:
    "Dump everything on your mind. Mind Clear turns it into a plan. AI-powered planning built for ADHD brains — gentle on bad days. Free on Android.",
};

const css = `
.mc-page {
  --spine-x: 1.25rem;
  --content-pad: 3.25rem;
  --sect-pt: 6rem;
  --sect-pb: 6rem;
}
@media (min-width: 768px) {
  .mc-page {
    --spine-x: clamp(4rem, 9vw, 8rem);
    --content-pad: clamp(7rem, 15vw, 12rem);
    --sect-pt: 7rem;
    --sect-pb: 7rem;
  }
}
.mc-spine {
  position: absolute;
  left: var(--spine-x);
  top: 0;
  bottom: 0;
  width: 2px;
  margin-left: -1px;
  background-color: #D4AF37;
}
.mc-spine-leadin {
  position: absolute;
  left: var(--spine-x);
  bottom: 0;
  height: 16vh;
  width: 2px;
  margin-left: -1px;
  background: linear-gradient(to bottom, rgba(212,175,55,0), #D4AF37);
}
.mc-node {
  position: absolute;
  left: var(--spine-x);
  top: calc(var(--sect-pt) + 0.2rem);
  width: 12px;
  height: 12px;
  margin-left: -6px;
  border-radius: 50%;
  border: 2px solid #D4AF37;
  background-color: #E8E8E2;
  z-index: 1;
}
.mc-content {
  position: relative;
  padding: var(--sect-pt) 1.5rem var(--sect-pb) var(--content-pad);
}
.mc-ghost {
  position: absolute;
  right: 2vw;
  top: 1.5rem;
  font-family: var(--font-fraunces);
  font-weight: 300;
  font-size: clamp(8rem, 22vw, 19rem);
  line-height: 1;
  color: rgba(17, 17, 17, 0.05);
  pointer-events: none;
  user-select: none;
}
.mc-grain {
  position: fixed;
  inset: 0;
  z-index: 40;
  pointer-events: none;
  opacity: 0.035;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E");
}
@media (prefers-reduced-motion: no-preference) {
  .mc-rise { animation: mcRise 0.9s cubic-bezier(0.22, 0.61, 0.36, 1) both; }
  .mc-rise-2 { animation-delay: 0.12s; }
  .mc-rise-3 { animation-delay: 0.24s; }
  .mc-rise-4 { animation-delay: 0.38s; }
  .mc-rise-5 { animation-delay: 0.5s; }
  .mc-frag { animation: mcFade 1.8s ease-out both; animation-delay: 0.7s; }
}
@keyframes mcRise {
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: none; }
}
@keyframes mcFade {
  from { opacity: 0; }
  to { opacity: 1; }
}
`;

export default function MindClearPage() {
  return (
    <main
      className={`${outfit.variable} ${fraunces.variable} mc-page overflow-x-hidden`}
      style={{
        backgroundColor: "#E8E8E2",
        color: "#111111",
        fontFamily: "var(--font-outfit)",
        fontWeight: 300,
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: css }} />
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
