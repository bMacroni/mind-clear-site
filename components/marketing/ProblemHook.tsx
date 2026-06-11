// components/marketing/ProblemHook.tsx
import { ThreadSection } from "./ThreadSection";

export default function ProblemHook() {
  return (
    <ThreadSection number="01" label="The Problem" ariaLabel="The problem">
      {/* Pull quote crosses the spine on desktop — the one grid-break allowed */}
      <blockquote
        className="relative md:-ml-20 mb-10"
        style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontWeight: 300,
          fontSize: "clamp(2.1rem, 5vw, 4rem)",
          lineHeight: 1.2,
          color: "#111111",
          backgroundColor: "#E8E8E2",
        }}
      >
        "You know what you need to do.
        <br />
        You just can't start."
      </blockquote>
      <p
        className="text-base leading-relaxed max-w-xl"
        style={{ color: "#444444" }}
      >
        For ADHD brains, the gap between knowing and doing isn't laziness —
        it's cognitive load. Standard task apps make it worse. They add more
        to manage.
      </p>
    </ThreadSection>
  );
}
