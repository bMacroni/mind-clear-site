import { ArrowMark, BoxMark, MARKER, Whiteboard } from "./Whiteboard";

// The gap between what is actually in your head and what a task app demands
// before it will accept anything.
//
// The form on the right is drawn by hand ON PURPOSE. The article names Todoist,
// Notion, Things and TickTick, and a polished mock would read as depicting one
// of those products. A sketch makes the same point about the SHAPE of what they
// ask for without pretending to be anyone's actual interface. Do not replace it
// with a realistic UI.
//
// The three things on the left are quoted from the article and are deliberately
// unfinished. That is the point: none of them can fill in a "due date" field.

const IN_HAND = [
  { text: "something about the car", rotate: -3 },
  { text: "that email. since tuesday??", rotate: 1.5 },
  { text: "mom's birthday, soon?", rotate: -2 },
];

const FIELDS = [
  { label: "Task name", required: true },
  { label: "Due date", required: true },
  { label: "Priority", required: false },
  { label: "Project", required: false },
];

export function TaskFormFigure() {
  return (
    <figure className="my-10 max-w-[44rem]">
      <Whiteboard>
        <div className="flex flex-col gap-4 p-5 md:flex-row md:items-start md:gap-3">
          {/* What you actually have */}
          <div className="md:flex-1">
            <p
              className="mb-4 font-hand text-lg font-bold lowercase"
              style={{ color: MARKER.black, transform: "rotate(-1.2deg)" }}
            >
              what you&rsquo;ve got
            </p>
            <p className="sr-only">
              Three half-formed thoughts: something about the car, that email since
              Tuesday, and Mom&rsquo;s birthday sometime soon.
            </p>
            <div className="space-y-3" aria-hidden="true">
              {IN_HAND.map((t) => (
                <div
                  key={t.text}
                  className="font-hand text-[1.15rem]"
                  style={{ color: MARKER.blue, transform: `rotate(${t.rotate}deg)` }}
                >
                  {t.text}
                </div>
              ))}
            </div>
          </div>

          {/* The gap */}
          <div
            className="flex shrink-0 items-center justify-center gap-2 md:w-16 md:flex-col md:self-center"
            aria-hidden="true"
          >
            <span
              className="font-hand text-2xl font-bold"
              style={{ color: MARKER.red, transform: "rotate(6deg)" }}
            >
              ?
            </span>
            <ArrowMark
              color={MARKER.black}
              className="h-8 w-20 md:hidden"
              style={{ transform: "rotate(90deg)" }}
            />
            <ArrowMark color={MARKER.black} className="hidden h-8 w-16 md:block" />
          </div>

          {/* What the app wants first */}
          <div className="md:flex-1">
            <p
              className="mb-4 font-hand text-lg font-bold lowercase"
              style={{ color: MARKER.black, transform: "rotate(-1deg)" }}
            >
              what it wants first
            </p>
            <p className="sr-only">
              A blank task form asking for a task name, a due date, a priority and a
              project, with the first two marked required. All of the fields are empty.
            </p>
            <div className="space-y-[0.45rem]" aria-hidden="true">
              {FIELDS.map((f, i) => (
                <div key={f.label} className="flex items-center gap-2">
                  <span
                    className="w-[4.6rem] shrink-0 font-hand text-[0.95rem]"
                    style={{ color: MARKER.black, opacity: 0.8 }}
                  >
                    {f.label}
                    {f.required ? <span style={{ color: MARKER.red }}> *</span> : null}
                  </span>
                  <BoxMark
                    color={MARKER.black}
                    tilt={i % 2 === 0 ? -0.8 : 0.8}
                    className="h-6 flex-1"
                  />
                </div>
              ))}
              <p
                className="pt-1 font-hand text-sm"
                style={{ color: MARKER.red, transform: "rotate(-1.5deg)" }}
              >
                * required
              </p>
            </div>
          </div>
        </div>
      </Whiteboard>

      <figcaption className="mt-3 text-xs text-ink-soft">
        Every one of those fields is a decision you have to make before the app will take
        the thing you actually have.
      </figcaption>
    </figure>
  );
}
