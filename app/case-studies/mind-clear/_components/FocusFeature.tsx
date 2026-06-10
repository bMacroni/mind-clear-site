// app/case-studies/mind-clear/_components/FocusFeature.tsx
import { Check, Pencil, Trash2 } from "lucide-react";

const actionIcons = [
  { Icon: Check, label: "Complete" },
  { Icon: Pencil, label: "Edit" },
  { Icon: Trash2, label: "Delete" },
];

export default function FocusFeature() {
  return (
    <section
      aria-labelledby="focus-heading"
      className="py-24 px-6"
      style={{ backgroundColor: "#E8E8E2" }}
    >
      <div className="max-w-2xl mx-auto">
        <p
          className="text-xs tracking-[0.06em] uppercase mb-6"
          style={{ color: "#888888", fontWeight: 300 }}
        >
          Today's Focus
        </p>
        <h2
          id="focus-heading"
          className="text-2xl mb-6"
          style={{ color: "#111111", fontWeight: 300, lineHeight: 1.3 }}
        >
          One task. Right now. That's all.
        </h2>
        <p
          className="text-base leading-relaxed mb-12"
          style={{ color: "#444444", fontWeight: 300 }}
        >
          Mind Clear picks one thing for you to focus on. Not a list — one
          task. When you're done, it finds the next one.
        </p>

        {/* Focus card visual */}
        <div
          className="relative px-4 py-3"
          style={{
            backgroundColor: "rgba(212,175,55,0.20)",
            border: "1.5px solid #D4AF37",
            borderRadius: "8px",
            borderLeft: "none",
          }}
        >
          {/* Gold rail */}
          <div
            className="absolute left-0 top-0 bottom-0"
            style={{
              width: "4px",
              backgroundColor: "#D4AF37",
              borderRadius: "8px 0 0 8px",
            }}
          />
          {/* Action icons row */}
          <div className="flex justify-end gap-2 mb-3">
            {actionIcons.map(({ Icon, label }) => (
              <div
                key={label}
                aria-label={label}
                className="flex items-center justify-center"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: "#F5F1E1",
                  color: "#444444",
                }}
              >
                <Icon size={18} strokeWidth={1.5} />
              </div>
            ))}
          </div>
          <p
            className="text-base pl-1"
            style={{ color: "#111111", fontWeight: 300 }}
          >
            Draft the Q3 planning deck
          </p>
          <p className="text-xs pl-1 mt-1" style={{ color: "#888888", fontWeight: 300 }}>
            Due today · high priority
          </p>
        </div>
      </div>
    </section>
  );
}
