import type { ReactNode } from "react";
import { ArrowMark, Circled, MARKER, Struck, Whiteboard } from "./Whiteboard";

// The brain dump method sketched on a whiteboard: an unbroken vent on the left,
// a clean list on the right.
//
// The left side is deliberately PROSE, not a tidy set of fragments. The article
// says "do not stop to finish a thought, half a thought counts", and that is
// what a real dump looks like: one run-on sentence, no capitals, corrections
// made in flight, stopping mid-clause when the timer goes.
//
// Two details carry the point, so do not "tidy" them away. The vent stops
// mid-sentence, and the list on the right is far shorter than the vent is long.

// Broken into lines by hand so the marker corrections land on the words they
// belong to. Reflowing this as one paragraph would scatter them.
const VENT: ReactNode[] = [
  <>ok the dentist thing has been sitting</>,
  <>there for weeks and i keep meaning to</>,
  <>call but they&rsquo;re only open when i&rsquo;m at</>,
  <>work and marcus is still waiting on that</>,
  <>
    email which i&rsquo;ve rewritten{" "}
    <Struck above="four" color={MARKER.blue}>
      twice
    </Struck>{" "}
    in my
  </>,
  <>head and never once for real and the</>,
  <>
    insurance renews <Circled>friday?</Circled> or the 14th,
  </>,
  <>and mom&rsquo;s birthday is somewhere in</>,
  <>there and i have not thought about a</>,
  <>present, and the q3 deck, and the car is</>,
  <>still making that</>,
];

const WRITTEN = [
  "Call the dentist",
  "Email Marcus back",
  "Renew the insurance",
  "Check Mom's birthday",
  "Draft the Q3 deck",
  "Book the car service",
];

function PanelLabel({ children, color }: { children: string; color: string }) {
  return (
    <p
      className="mb-3 font-hand text-lg font-bold lowercase"
      style={{ color, transform: "rotate(-1.2deg)" }}
    >
      {children}
    </p>
  );
}

export function BrainDumpFigure() {
  return (
    // 44rem against the prose measure of 34rem: a deliberate break-out, left
    // aligned with the text rather than centred.
    <figure className="my-10 max-w-[44rem]">
      <Whiteboard>
        <div className="flex flex-col gap-4 p-5 md:flex-row md:items-start md:gap-3">
          {/* The vent. Wider than the list, because prose needs the measure. */}
          <div className="md:flex-[1.45]">
            <PanelLabel color={MARKER.black}>in your head</PanelLabel>
            <p className="sr-only">
              A single run-on vent filling the board in blue marker, one word crossed out
              and corrected in flight, one date ringed in red, stopping mid-sentence when
              the timer went.
            </p>
            <div aria-hidden="true">
              {VENT.map((line, i) => (
                <div
                  key={i}
                  className="whitespace-nowrap font-hand leading-[1.62]"
                  style={{
                    color: MARKER.blue,
                    fontSize: "1.05rem",
                    // Handwriting drifts. Each line sits a touch off the last.
                    transform: `rotate(${(i % 3) - 1 > 0 ? 0.45 : -0.35}deg) translateX(${
                      (i % 4) - 1.5
                    }px)`,
                  }}
                >
                  {line}
                </div>
              ))}
            </div>
          </div>

          {/* The transition. Points down when the panels stack, right when they
              sit side by side, so the arrow always follows the reading order. */}
          <div
            className="flex shrink-0 items-center justify-center gap-2 md:w-16 md:flex-col md:self-center"
            aria-hidden="true"
          >
            <span
              className="font-hand text-lg font-bold"
              style={{ color: MARKER.black, transform: "rotate(-2deg)" }}
            >
              2 min
            </span>
            <ArrowMark
              color={MARKER.black}
              className="h-8 w-20 md:hidden"
              style={{ transform: "rotate(90deg)" }}
            />
            <ArrowMark color={MARKER.black} className="hidden h-8 w-16 md:block" />
          </div>

          {/* The list */}
          <div className="md:flex-1 md:pt-1">
            <PanelLabel color={MARKER.blue}>on the page</PanelLabel>
            <ol className="space-y-[0.55rem]">
              {WRITTEN.map((item, i) => (
                <li
                  key={item}
                  className="flex items-start gap-2 font-hand text-[1.15rem] leading-tight"
                  style={{
                    color: MARKER.black,
                    // A hand-written list is never perfectly straight.
                    transform: `rotate(${(i % 2 === 0 ? -1 : 1) * 0.5}deg)`,
                  }}
                >
                  <span
                    className="mt-[0.3rem] block h-3 w-3 shrink-0"
                    style={{
                      border: `2px solid ${MARKER.blue}`,
                      borderRadius: "2px",
                      opacity: 0.8,
                      transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)`,
                    }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Whiteboard>

      <figcaption className="mt-3 text-xs text-ink-soft">
        One unbroken vent, stopped mid-sentence, becomes six things you can actually do.
      </figcaption>
    </figure>
  );
}
