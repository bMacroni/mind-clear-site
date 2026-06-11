// components/marketing/BrainDump.tsx
import { TaskCardMockup } from "./TaskCardMockup";
import { ThreadSection } from "./ThreadSection";

export default function BrainDump() {
  return (
    <ThreadSection number="02" label="Brain Dump" ariaLabel="Brain Dump feature">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center max-w-5xl">
        {/* Copy */}
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
            Dump <em>everything.</em>
            <br />
            Get a plan.
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: "#444444" }}
          >
            Type whatever's swirling in your head — tasks, worries, half-formed
            ideas. Mind Clear's AI reads it all and turns it into goals, tasks,
            and routines. In minutes.
          </p>
        </div>

        {/* Visual: task card mockup in ivory container */}
        <div
          className="p-4 flex flex-col gap-2"
          style={{
            backgroundColor: "#F5F1E1",
            borderRadius: "20px",
            border: "1px solid #DEDCD2",
          }}
        >
          <TaskCardMockup
            title="Draft the Q3 planning deck"
            meta="Due today"
            isFocus={true}
            pill="Suggested focus"
            priorityPill="high"
          />
          <TaskCardMockup
            title="Call the dentist to reschedule"
            meta="Tomorrow"
          />
          <TaskCardMockup
            title="Email Marcus about the retro"
            meta="This week"
          />
          <TaskCardMockup title="Morning walk" meta="Routine · weekdays" />
          <p
            className="text-xs text-center pt-2"
            style={{ color: "#888888", fontWeight: 300 }}
          >
            4 things, sorted.
          </p>
        </div>
      </div>
    </ThreadSection>
  );
}
