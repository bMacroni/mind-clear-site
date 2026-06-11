// components/marketing/FounderStoryThread.tsx
import { ThreadSection } from "./ThreadSection";

export default function FounderStoryThread() {
  return (
    <ThreadSection number="07" label="Why This Exists" ariaLabel="Why this exists">
      <div className="max-w-xl space-y-6">
        <p
          className="text-lg leading-relaxed"
          style={{ color: "#444444", fontWeight: 300 }}
        >
          I spent years not knowing why my brain worked the way it did. When my
          daughter was born, I couldn't ignore it anymore.
        </p>
        <p
          className="text-lg leading-relaxed"
          style={{ color: "#444444", fontWeight: 300 }}
        >
          I'd read enough about ADHD to recognize myself in it — the wall of
          awful, the paralysis, the inability to start anything without the
          right conditions. I tried every productivity app I could find. None
          of them stuck. They were all built for brains that work differently
          than mine.
        </p>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "1.4rem",
            lineHeight: 1.4,
            color: "#111111",
          }}
        >
          So I built one for myself. Now that it's actually helping, I want to
          share it.
        </p>
        <p
          className="text-xs uppercase tracking-[0.18em] pt-4"
          style={{
            color: "#6B5A20",
            fontWeight: 300,
            borderTop: "1px solid rgba(17,17,17,0.14)",
          }}
        >
          — Brian, Founder
        </p>
      </div>
    </ThreadSection>
  );
}
