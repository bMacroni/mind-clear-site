// app/case-studies/mind-clear/_components/DownloadCTA.tsx
// The thread ends here: a short spine segment terminating in one solid
// gold dot — one step at a time, literalized.
import { GooglePlayButton } from "./GooglePlayButton";

export default function DownloadCTA() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#E8E8E2" }}
    >
      {/* Terminal spine segment + dot */}
      <div
        className="absolute"
        aria-hidden="true"
        style={{
          left: "var(--spine-x)",
          top: 0,
          height: "7rem",
          width: "2px",
          marginLeft: "-1px",
          backgroundColor: "#D4AF37",
        }}
      />
      <div
        className="absolute"
        aria-hidden="true"
        style={{
          left: "var(--spine-x)",
          top: "7rem",
          width: "14px",
          height: "14px",
          marginLeft: "-7px",
          borderRadius: "50%",
          backgroundColor: "#D4AF37",
        }}
      />

      <div
        className="pb-32"
        style={{
          paddingTop: "10rem",
          paddingLeft: "var(--content-pad)",
          paddingRight: "1.5rem",
        }}
      >
        <div className="max-w-xl">
          <h2
            id="cta-heading"
            className="mb-6"
            style={{
              fontFamily: "var(--font-fraunces)",
              fontWeight: 300,
              fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)",
              lineHeight: 1.1,
              color: "#111111",
            }}
          >
            Ready to <em>clear</em> your head?
          </h2>
          <p className="text-base mb-10" style={{ color: "#444444" }}>
            Free to download. 21-day premium trial. No payment upfront.
          </p>
          <GooglePlayButton />
          <p
            className="mt-4 text-xs"
            style={{ color: "#6B6B6B", fontWeight: 300 }}
          >
            Android only · iOS coming soon
          </p>
          <p
            className="mt-6 text-xs max-w-sm"
            style={{ color: "#6B5A20", fontWeight: 300 }}
          >
            Mind Clear is free. Premium unlocks AI features — Brain Dump, goal
            planning, and the stuck-task helper.
          </p>
        </div>
      </div>
    </section>
  );
}
