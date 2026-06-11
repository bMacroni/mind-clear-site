// app/case-studies/mind-clear/_components/StuckFeature.tsx
import { Check } from "lucide-react";
import { ThreadSection } from "./ThreadSection";

const steps = [
  {
    label: "Open the slide template and delete the old content",
    done: true,
  },
  { label: "Write the three talking points for slide 1", done: false },
  { label: "Add the Q2 numbers to the revenue chart", done: false },
];

export default function StuckFeature() {
  return (
    <ThreadSection
      number="04"
      label="When You're Stuck"
      ariaLabel="Stuck task helper feature"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center max-w-5xl">
        <div>
          <h2
            className="mb-6"
            style={{
              fontFamily: "var(--font-fraunces)",
              fontWeight: 300,
              fontSize: "clamp(1.9rem, 3.4vw, 2.8rem)",
              lineHeight: 1.15,
              color: "#111111",
            }}
          >
            Can't start?
            <br />
            The AI <em>breaks it down.</em>
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: "#444444" }}
          >
            Tap 'I'm stuck' on any task. Mind Clear splits it into tiny steps
            you can actually begin — or reframes it entirely if that's what
            you need.
          </p>
        </div>

        {/* Step list visual — ivory card on cream */}
        <div
          className="p-4 flex flex-col gap-3"
          style={{
            backgroundColor: "#F5F1E1",
            border: "1px solid #DEDCD2",
            borderRadius: "8px",
          }}
        >
          {steps.map((step) => (
            <div key={step.label} className="flex items-start gap-3">
              <div
                className="flex-shrink-0 flex items-center justify-center"
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  border: step.done ? "none" : "1.5px solid #B5B2A4",
                  backgroundColor: step.done ? "#10B981" : "transparent",
                }}
              >
                {/* strokeWidth 2.5 intentional — 1.5 is invisible at 13px inside a 22px circle */}
                {step.done && (
                  <Check size={13} color="#fff" strokeWidth={2.5} />
                )}
              </div>
              <p
                className="text-sm"
                style={{
                  color: step.done ? "#888888" : "#111111",
                  textDecoration: step.done ? "line-through" : "none",
                  fontWeight: 300,
                }}
              >
                {step.label}
              </p>
            </div>
          ))}
          <p
            className="text-xs mt-1"
            style={{ color: "#888888", fontWeight: 300 }}
          >
            start with just the first one
          </p>
        </div>
      </div>
    </ThreadSection>
  );
}
