import { BrainDumpFigure } from "./BrainDumpFigure";
import { StreakFigure } from "./StreakFigure";
import { TaskFormFigure } from "./TaskFormFigure";

// Entry HTML is generated at build time from repo-owned markdown. remark-html
// (see lib/notebook.ts) sanitizes its output by default, so this isn't a raw
// HTML passthrough: any raw HTML written inside an entry gets stripped, not
// rendered.
//
// Because of that, an entry cannot embed a diagram as inline SVG. Instead it
// writes a marker on its own line:
//
//     {{figure:brain-dump}}
//
// which arrives here as `<p>{{figure:brain-dump}}</p>` and is swapped for the
// matching component below. The registry is an allowlist: an unknown name
// renders nothing rather than leaking the marker onto the page, so a typo is
// invisible instead of ugly, and no entry can name a component that is not
// listed here.
const FIGURES = {
  "brain-dump": BrainDumpFigure,
  streak: StreakFigure,
  "task-form": TaskFormFigure,
} as const;

const FIGURE_MARKER = /<p>\{\{figure:([a-z0-9-]+)\}\}<\/p>/;

export function Prose({ html }: { html: string }) {
  // String.split with a capturing group interleaves the captures, so odd
  // indices are figure names and even indices are HTML.
  const parts = html.split(FIGURE_MARKER);

  return (
    <>
      {parts.map((part, index) => {
        if (index % 2 === 1) {
          const Figure = FIGURES[part as keyof typeof FIGURES];
          return Figure ? <Figure key={index} /> : null;
        }
        return part.trim() ? (
          <div key={index} className="mc-prose" dangerouslySetInnerHTML={{ __html: part }} />
        ) : null;
      })}
    </>
  );
}
