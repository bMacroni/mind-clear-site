import { TaskCardMockup } from "mind-clear-site";

const Row = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col gap-3" style={{ maxWidth: 360 }}>{children}</div>
);

/** A plain task, the default state. */
export const Default = () => (
  <Row>
    <TaskCardMockup title="Draft the Q3 planning deck" meta="Due today" />
  </Row>
);

/** The one task Focus mode has surfaced — gold rail, tinted fill. */
export const Focus = () => (
  <Row>
    <TaskCardMockup title="Draft the Q3 planning deck" meta="Due today · high priority" isFocus />
  </Row>
);

/** Pills carry status; priorityPill marks what the AI ranked up. */
export const WithPills = () => (
  <Row>
    <TaskCardMockup title="Book the car service" meta="Due 3 days ago" pill="3 days waiting" />
    <TaskCardMockup
      title="Draft the Q3 planning deck"
      meta="Due today"
      priorityPill="Suggested first"
      pill="AI"
    />
  </Row>
);

/** A short list, the way it reads inside a section. */
export const List = () => (
  <Row>
    <TaskCardMockup title="Draft the Q3 planning deck" meta="Due today" isFocus />
    <TaskCardMockup title="Call the dentist to reschedule" meta="Tomorrow" />
    <TaskCardMockup title="Email Marcus about the retro" meta="This week" />
    <TaskCardMockup title="Morning walk" meta="Routine · weekdays" />
  </Row>
);
