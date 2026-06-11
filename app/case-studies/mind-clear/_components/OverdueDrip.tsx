// app/case-studies/mind-clear/_components/OverdueDrip.tsx
import { ArrowDown } from "lucide-react";
import { ThreadSection } from "./ThreadSection";

export default function OverdueDrip() {
  return (
    <ThreadSection
      number="05"
      label="Missed a Deadline?"
      ariaLabel="Missed deadline rescheduling feature"
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
            It doesn't disappear.
            <br />
            It just <em>waits.</em>
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: "#444444" }}
          >
            Miss a due date and Mind Clear quietly reschedules it to an open
            day. No overdue pile. No shame. It's still on the list — just
            moved to when you can actually do it.
          </p>
        </div>

        {/* Two-card visual with arrow */}
        <div className="flex flex-col items-center gap-3">
          {/* Inline card structure used (not TaskCardMockup) because the "7 days waiting" pill
              needs a dark surface (#2A2A1A) + gold text (#E6CF8E), which TaskCardMockup's pill
              prop doesn't support. */}
          {/* Before card */}
          <div
            className="w-full relative px-4 py-3"
            style={{
              backgroundColor: "#F5F1E1",
              border: "1px solid #DEDCD2",
              borderRadius: "8px",
              borderLeft: "none",
            }}
          >
            <div
              className="absolute left-0 top-0 bottom-0"
              style={{
                width: "4px",
                backgroundColor: "#E6CF8E",
                borderRadius: "8px 0 0 8px",
              }}
            />
            <p
              className="text-sm pl-1"
              style={{ color: "#111111", fontWeight: 300 }}
            >
              Book the car service
            </p>
            <div className="flex gap-2 mt-2 pl-1">
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: "#2A2A1A",
                  color: "#E6CF8E",
                  fontWeight: 300,
                }}
              >
                7 days waiting
              </span>
            </div>
          </div>

          <ArrowDown size={18} strokeWidth={1.5} style={{ color: "#888888" }} />

          {/* After card */}
          <div
            className="w-full relative px-4 py-3"
            style={{
              backgroundColor: "#F5F1E1",
              border: "1px solid #DEDCD2",
              borderRadius: "8px",
              borderLeft: "none",
            }}
          >
            <div
              className="absolute left-0 top-0 bottom-0"
              style={{
                width: "4px",
                backgroundColor: "#E6CF8E",
                borderRadius: "8px 0 0 8px",
              }}
            />
            <p
              className="text-sm pl-1"
              style={{ color: "#111111", fontWeight: 300 }}
            >
              Book the car service
            </p>
            <p
              className="text-xs pl-1 mt-1"
              style={{ color: "#888888", fontWeight: 300 }}
            >
              Moved to Thursday
            </p>
          </div>
        </div>
      </div>
    </ThreadSection>
  );
}
