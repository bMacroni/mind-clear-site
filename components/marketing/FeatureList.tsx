// components/marketing/FeatureList.tsx
import { ThreadSection } from "./ThreadSection";

const features = [
  {
    title: "Brain Dump",
    description:
      "My brain was always juggling everything at once and nothing was moving. Getting it all out — in any order, any format — was the only thing that helped me start. Mind Clear turns that unstructured mess into a list I can actually work from.",
  },
  {
    title: "Ruthless Prioritization",
    description:
      "When everything felt urgent, I got nothing done. Mind Clear helped me land on the one thing that actually mattered right now, and quietly hide the rest until I was ready.",
  },
  {
    title: "Daily Calendar View",
    description:
      "A to-do list never told me when. I needed to see my day, not just read it. Mind Clear schedules my tasks into a realistic view of today so nothing gets lost in the fog.",
  },
  {
    title: "Routines that stick",
    description:
      "I knew what I should be doing every day — I just couldn't make it stick. Having a routine with a visible streak gave me the structure my brain was missing and made consistency feel achievable for the first time.",
  },
  {
    title: "Reminders That Actually Help",
    description:
      "Out of sight, out of mind — but on steroids. I'd set intentions in the morning and forget them by noon. Timely reminders bring my tasks back into focus exactly when I need them, not just when I happen to open the app.",
  },
];

export default function FeatureList() {
  return (
    <ThreadSection
      number="06"
      label="More of what it does"
      ariaLabel="More Mind Clear features"
    >
      <div className="max-w-3xl">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="grid grid-cols-1 md:grid-cols-[1fr,1.6fr] gap-2 md:gap-10 py-8"
            style={{
              borderTop: i === 0 ? "none" : "1px solid rgba(17,17,17,0.14)",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 300,
                fontSize: "1.4rem",
                lineHeight: 1.25,
                color: "#111111",
              }}
            >
              {f.title}
            </h3>
            <p
              className="text-base leading-relaxed"
              style={{ color: "#444444", fontWeight: 300 }}
            >
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </ThreadSection>
  );
}
