// app/case-studies/mind-clear/_components/Hero.tsx
import { GooglePlayButton } from "./GooglePlayButton";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-24"
      style={{ backgroundColor: "#0D0D0D" }}
    >
      <p
        className="text-xs tracking-[0.06em] uppercase mb-6"
        style={{ color: "#D4AF37", fontWeight: 300 }}
      >
        For ADHD Brains
      </p>
      <h1
        className="text-4xl md:text-6xl max-w-2xl mb-6"
        style={{ color: "#F2F2F2", fontWeight: 300, lineHeight: 1.2 }}
      >
        Clear your head.
        <br />
        One step at a time.
      </h1>
      <p
        className="text-lg max-w-md mb-10"
        style={{ color: "#A8A8A8", fontWeight: 300 }}
      >
        Dump everything on your mind. Mind Clear turns it into a plan.
      </p>
      <GooglePlayButton />
      <p className="mt-4 text-xs" style={{ color: "#6B6B6B" }}>
        Android · Free · 21-day premium trial
      </p>
    </section>
  );
}
