// components/marketing/FocusFeature.tsx
import { Check, Pencil, Trash2 } from "lucide-react";
import { ThreadSection } from "./ThreadSection";

const actionIcons = [
  { Icon: Check, label: "Complete" },
  { Icon: Pencil, label: "Edit" },
  { Icon: Trash2, label: "Delete" },
];

export default function FocusFeature() {
  return (
    <ThreadSection
      number="03"
      label="Today's Focus"
      ariaLabel="Today's Focus feature"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center max-w-5xl">
        <div>
          <h2
            className="mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 300,
              fontSize: "clamp(1.9rem, 3.4vw, 2.8rem)",
              lineHeight: 1.15,
              color: "#111111",
            }}
          >
            One task. Right now. <em>That's all.</em>
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: "#444444" }}
          >
            Mind Clear picks one thing for you to focus on. Not a list — one
            task. When you're done, it finds the next one.
          </p>
        </div>

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
                className="flex items-center justify-center"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: "#F5F1E1",
                  color: "#444444",
                }}
              >
                <Icon size={18} strokeWidth={1.5} aria-hidden={true} />
              </div>
            ))}
          </div>
          <p
            className="text-base pl-1"
            style={{ color: "#111111", fontWeight: 300 }}
          >
            Draft the Q3 planning deck
          </p>
          <p
            className="text-xs pl-1 mt-1"
            style={{ color: "#888888", fontWeight: 300 }}
          >
            Due today · high priority
          </p>
        </div>
      </div>
    </ThreadSection>
  );
}
