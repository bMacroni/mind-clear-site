import { ArrowMark, BoxMark, MARKER, Struck, Tick, Whiteboard } from "./Whiteboard";

// What a streak counter can and cannot see, sketched on a whiteboard.
//
// The three days come straight from the article: eleven days of showing up, ill
// on the twelfth, and opening the app again on the thirteenth. Do not round
// them off to nicer numbers, they are the whole anecdote.
//
// The two outcomes below are the point. A streak app deletes the eleven; a
// forgiving one leaves the gap sitting there and carries on counting. The
// second row is deliberately the quieter of the two.

function DayCell({
  day,
  state,
  tilt,
  note,
}: {
  day: string;
  state: "done" | "missed" | "next";
  tilt: number;
  /** Hangs under the day label without taking the box out of the row. */
  note?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1">
      <BoxMark
        color={state === "missed" ? MARKER.red : MARKER.black}
        tilt={tilt}
        className="h-9 w-9"
      >
        {state === "done" ? <Tick className="h-5 w-5" /> : null}
        {state === "next" ? (
          <span className="font-hand text-lg" style={{ color: MARKER.black }}>
            ?
          </span>
        ) : null}
      </BoxMark>
      <span className="font-hand text-sm" style={{ color: MARKER.black, opacity: 0.75 }}>
        {day}
      </span>
      {note ? (
        <span
          className="font-hand text-sm"
          style={{ color: MARKER.red, transform: "rotate(-4deg)" }}
        >
          {note}
        </span>
      ) : null}
    </div>
  );
}

function Outcome({
  label,
  labelColor,
  children,
}: {
  label: string;
  labelColor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="w-[6.5rem] shrink-0 font-hand text-base lowercase"
        style={{ color: labelColor, transform: "rotate(-1deg)" }}
      >
        {label}
      </span>
      <ArrowMark color={MARKER.black} className="h-5 w-10 shrink-0" />
      <span className="font-hand text-lg" style={{ color: MARKER.black }}>
        {children}
      </span>
    </div>
  );
}

export function StreakFigure() {
  return (
    <figure className="my-10 max-w-[44rem]">
      <Whiteboard>
        <div className="p-5">
          <p
            className="mb-4 font-hand text-lg font-bold lowercase"
            style={{ color: MARKER.black, transform: "rotate(-1.2deg)" }}
          >
            what a streak can see
          </p>
          <p className="sr-only">
            Eleven days ticked, the twelfth missed while ill, the thirteenth still open.
            A streak app throws the eleven away and starts from zero. A forgiving one
            leaves the gap alone and carries on counting.
          </p>

          <div aria-hidden="true">
            {/* items-start, not items-end: day 12 carries an extra "ill" line,
                and aligning from the bottom would lift its box out of the row. */}
            <div className="mb-6 flex items-start gap-2">
              <DayCell day="9" state="done" tilt={-2} />
              <DayCell day="10" state="done" tilt={1.5} />
              <DayCell day="11" state="done" tilt={-1} />
              <DayCell day="12" state="missed" tilt={2.5} note="ill" />
              <DayCell day="13" state="next" tilt={-2} />
            </div>

            <div className="space-y-3">
              <Outcome label="most apps" labelColor={MARKER.red}>
                <Struck color={MARKER.red}>11 days</Struck>{" "}
                <span style={{ color: MARKER.red, fontWeight: 700 }}>0</span>{" "}
                <span className="ml-3 text-[0.95rem]" style={{ opacity: 0.6 }}>
                  start again from nothing
                </span>
              </Outcome>
              <Outcome label="mind clear" labelColor={MARKER.blue}>
                11 days, then 12{" "}
                <span className="ml-3 text-[0.95rem]" style={{ opacity: 0.6 }}>
                  the gap just sits there
                </span>
              </Outcome>
            </div>
          </div>
        </div>
      </Whiteboard>

      <figcaption className="mt-3 text-xs text-ink-soft">
        A streak counts consecutive days. It cannot tell a bad week from giving up.
      </figcaption>
    </figure>
  );
}
