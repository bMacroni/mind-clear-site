// app/case-studies/mind-clear/_components/DownloadCTA.tsx
// Roboto Light 300 is applied via roboto.className on <main> in page.tsx — inherited here.
import { GooglePlayButton } from "./GooglePlayButton";

export default function DownloadCTA() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="py-32 px-6 flex flex-col items-center text-center"
      style={{ backgroundColor: "#0D0D0D" }}
    >
      <div className="max-w-lg mx-auto flex flex-col items-center">
        <h2
          id="cta-heading"
          className="text-3xl md:text-4xl mb-6"
          style={{ color: "#F2F2F2", fontWeight: 300, lineHeight: 1.25 }}
        >
          Ready to clear your head?
        </h2>
        <p
          className="text-base mb-10"
          style={{ color: "#A8A8A8", fontWeight: 300 }}
        >
          Free to download. 21-day premium trial. No payment upfront.
        </p>
        <GooglePlayButton />
        <p className="mt-4 text-xs" style={{ color: "#6B6B6B", fontWeight: 300 }}>
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
    </section>
  );
}
