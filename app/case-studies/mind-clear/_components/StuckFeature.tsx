// app/case-studies/mind-clear/_components/StuckFeature.tsx
import { Check } from "lucide-react";

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
    <section
      aria-labelledby="stuck-heading"
      className="py-24 px-6"
      style={{ backgroundColor: "#0D0D0D" }}
    >
      <div className="max-w-2xl mx-auto">
        <p
          className="text-xs tracking-[0.06em] uppercase mb-6"
          style={{ color: "#6B6B6B", fontWeight: 300 }}
        >
          When You're Stuck
        </p>
        <h2
          id="stuck-heading"
          className="text-2xl mb-6"
          style={{ color: "#F2F2F2", fontWeight: 300, lineHeight: 1.3 }}
        >
          Can't start?
          <br />
          The AI breaks it down.
        </h2>
        <p
          className="text-base leading-relaxed mb-12"
          style={{ color: "#A8A8A8", fontWeight: 300 }}
        >
          Tap 'I'm stuck' on any task. Mind Clear splits it into tiny steps
          you can actually begin — or reframes it entirely if that's what you
          need.
        </p>

        {/* Step list visual */}
        <div
          className="p-4 flex flex-col gap-3"
          style={{ backgroundColor: "#2A2A2A", borderRadius: "8px" }}
        >
          {steps.map((step) => (
            <div key={step.label} className="flex items-center gap-3">
              <div
                className="flex-shrink-0 flex items-center justify-center"
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  border: step.done ? "none" : "1.5px solid #404040",
                  backgroundColor: step.done ? "#10B981" : "transparent",
                }}
              >
                {step.done && (
                  <Check size={13} color="#fff" strokeWidth={2.5} />
                )}
              </div>
              <p
                className="text-sm"
                style={{
                  color: step.done ? "#6B6B6B" : "#F2F2F2",
                  textDecoration: step.done ? "line-through" : "none",
                  fontWeight: 300,
                }}
              >
                {step.label}
              </p>
            </div>
          ))}
          <p className="text-xs mt-1" style={{ color: "#6B6B6B", fontWeight: 300 }}>
            start with just the first one
          </p>
        </div>
      </div>
    </section>
  );
}
