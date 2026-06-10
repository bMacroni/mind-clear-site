// app/case-studies/mind-clear/_components/BrainDump.tsx
import { TaskCardMockup } from "./TaskCardMockup";

export default function BrainDump() {
  return (
    <section aria-labelledby="braindump-heading" className="py-24 px-6" style={{ backgroundColor: "#0D0D0D" }}>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Copy */}
        <div>
          <p
            className="text-xs tracking-[0.06em] uppercase mb-6"
            style={{ color: "#6B6B6B", fontWeight: 300 }}
          >
            Brain Dump
          </p>
          <h2
            id="braindump-heading"
            className="text-3xl mb-6"
            style={{ color: "#F2F2F2", fontWeight: 300, lineHeight: 1.25 }}
          >
            Dump everything.
            <br />
            Get a plan.
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: "#A8A8A8", fontWeight: 300 }}
          >
            Type whatever's swirling in your head — tasks, worries, half-formed
            ideas. Mind Clear's AI reads it all and turns it into goals, tasks,
            and routines. In minutes.
          </p>
        </div>

        {/* Visual: task card mockup in ivory container */}
        <div
          className="p-4 flex flex-col gap-2"
          style={{ backgroundColor: "#F5F1E1", borderRadius: "20px" }}
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
    </section>
  );
}
