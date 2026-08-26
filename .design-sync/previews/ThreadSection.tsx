import { ThreadSection, TaskCardMockup } from "mind-clear-site";

/** One numbered node on the golden thread — the shell every section uses. */
export const Default = () => (
  <ThreadSection number="03" label="Today's focus" ariaLabel="Today's focus">
    <h2
      className="text-4xl md:text-5xl font-light leading-tight mb-6"
      style={{ fontFamily: "var(--font-serif)", color: "#111111" }}
    >
      One task. Right now. <em>That's all.</em>
    </h2>
    <p className="text-lg max-w-md" style={{ color: "#444444" }}>
      Mind Clear picks one thing for you to focus on. Not a list — one task.
      When you're done, it finds the next one.
    </p>
  </ThreadSection>
);

/** Sections carry rich content — the thread runs behind whatever you put in it. */
export const WithMockup = () => (
  <ThreadSection number="06" label="Missed a deadline?" ariaLabel="Overdue tasks">
    <h2
      className="text-4xl font-light leading-tight mb-8"
      style={{ fontFamily: "var(--font-serif)", color: "#111111" }}
    >
      It doesn't disappear. It just <em>waits.</em>
    </h2>
    <div className="flex flex-col gap-3 max-w-sm">
      <TaskCardMockup title="Book the car service" meta="Due 3 days ago" pill="3 days waiting" />
      <TaskCardMockup title="Book the car service" meta="Moved to Thursday" />
    </div>
  </ThreadSection>
);
