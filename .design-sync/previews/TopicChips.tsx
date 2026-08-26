import { TopicChips } from "mind-clear-site";

const topics = [
  { slug: "bad-days", label: "Bad days", count: 4 },
  { slug: "design", label: "Design", count: 3 },
  { slug: "building-mind-clear", label: "Building Mind Clear", count: 6 },
  { slug: "focus", label: "Focus", count: 2 },
];

/** On the index, nothing is filtered, so "All" is the chip that reads as selected. */
export const Default = () => (
  <div className="px-8">
    <TopicChips topics={topics} />
  </div>
);

/** On a topic page, pass its slug as `active`. "All" becomes the way back. */
export const ActiveTopic = () => (
  <div className="px-8">
    <TopicChips topics={topics} active="bad-days" />
  </div>
);
