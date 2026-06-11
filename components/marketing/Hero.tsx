// components/marketing/Hero.tsx
// All-cream hero. Faint scattered thought-fragments in the margins (the
// swirling head); the golden thread fades in at the bottom and runs from
// here through every section below.
import { GooglePlayButton } from "./GooglePlayButton";

const fragments = [
  { text: "call the dentist", top: "12%", left: "5%", rotate: -7 },
  { text: "that email", top: "20%", right: "9%", rotate: 5 },
  { text: "renew the insurance", top: "38%", right: "4%", rotate: -8, desktopOnly: true },
  { text: "the laundry", top: "47%", left: "7%", rotate: 8, desktopOnly: true },
  { text: "mom's birthday", top: "66%", left: "4%", rotate: 4, desktopOnly: true },
  { text: "the Q3 deck", top: "74%", right: "7%", rotate: -5 },
];

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 py-24"
      style={{ backgroundColor: "#E8E8E2" }}
    >
      {/* Scattered thoughts — decorative */}
      <div aria-hidden="true">
        {fragments.map((f) => (
          <span
            key={f.text}
            className={`mc-frag absolute italic whitespace-nowrap ${
              f.desktopOnly ? "hidden md:inline" : ""
            }`}
            style={{
              top: f.top,
              left: f.left,
              right: f.right,
              transform: `rotate(${f.rotate}deg)`,
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.05rem, 1.9vw, 1.55rem)",
              color: "rgba(17,17,17,0.18)",
            }}
          >
            {f.text}
          </span>
        ))}
      </div>

      <div style={{ paddingLeft: "var(--content-pad)", paddingRight: "1.5rem" }}>
        <p
          className="mc-rise text-xs uppercase tracking-[0.18em] mb-8"
          style={{ color: "#6B5A20" }}
        >
          For ADHD Brains
        </p>
        <h1
          id="hero-heading"
          className="mc-rise mc-rise-2 mb-8"
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 300,
            fontSize: "clamp(3rem, 9vw, 7.5rem)",
            lineHeight: 1.05,
            color: "#111111",
            letterSpacing: "-0.01em",
          }}
        >
          Clear your head.
          <br />
          <em style={{ fontWeight: 300 }}>One step at a time.</em>
        </h1>
        <p
          className="mc-rise mc-rise-3 text-lg max-w-md mb-12"
          style={{ color: "#444444" }}
        >
          Dump everything on your mind. Mind Clear turns it into a plan.
        </p>
        <div className="mc-rise mc-rise-4">
          <GooglePlayButton />
        </div>
        <p className="mc-rise mc-rise-5 mt-5 text-xs" style={{ color: "#6B6B6B" }}>
          Android · Free · 21-day premium trial
        </p>
      </div>

      {/* The thread begins */}
      <div className="mc-spine-leadin" aria-hidden="true" />
    </section>
  );
}
