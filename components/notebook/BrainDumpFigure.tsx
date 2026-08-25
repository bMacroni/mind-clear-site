import { ArrowMark, CircleMark, MARKER, Scratch, Whiteboard } from "./Whiteboard";

// The brain dump method sketched on a whiteboard: a mess of marker on the left,
// a clean list on the right.
//
// Two details carry the article's point, so do not "tidy" them away. "that
// email" is written twice on the left, and the right side has fewer rows than
// the left has scrawls. The list really is shorter than it felt.
//
// The mess is meant to feel crowded, not to be unreadable. Positions are banded
// so scrawls overlap at the edges without burying each other. If you add one,
// check it against its neighbours at 1280 and 420 wide.

type Scrawl = {
  text: string;
  top: string;
  left: string;
  rotate: number;
  color: string;
  size?: string;
  struck?: boolean;
};

const SCRAWLS: Scrawl[] = [
  { text: "call the dentist", top: "0%", left: "0%", rotate: -8, color: MARKER.black, size: "1.35rem" },
  { text: "milk", top: "6%", left: "70%", rotate: -19, color: MARKER.green, size: "1.2rem", struck: true },
  { text: "that email", top: "18%", left: "34%", rotate: 11, color: MARKER.blue, size: "1.5rem" },
  { text: "renew insurance!!", top: "32%", left: "1%", rotate: -3, color: MARKER.red, size: "1.35rem" },
  { text: "the thing on friday", top: "30%", left: "56%", rotate: 6, color: MARKER.orange, size: "1.15rem" },
  { text: "that email again", top: "48%", left: "30%", rotate: -13, color: MARKER.blue, size: "1.25rem" },
  { text: "book the car service", top: "62%", left: "0%", rotate: 13, color: MARKER.black, size: "1.1rem" },
  { text: "Q3 deck??", top: "64%", left: "60%", rotate: 17, color: MARKER.black, size: "1.5rem" },
  { text: "mom's birthday", top: "80%", left: "10%", rotate: 5, color: MARKER.green, size: "1.4rem" },
  { text: "call back re: invoice", top: "86%", left: "46%", rotate: -6, color: MARKER.orange, size: "1.15rem", struck: true },
  // Filling the sparse upper and outer right. Kept short: long text at a high
  // left value clips once the panel narrows on mobile.
  { text: "reply sam", top: "1%", left: "46%", rotate: -15, color: MARKER.red, size: "1.1rem" },
  // Kept clear of the circled scrawl below: the ring means "the one you keep
  // coming back to", and anything else inside it reads as circled too.
  { text: "gym??", top: "17%", left: "78%", rotate: 12, color: MARKER.orange, size: "1.2rem" },
  { text: "water bill", top: "74%", left: "66%", rotate: -10, color: MARKER.blue, size: "1.1rem", struck: true },
];

const WRITTEN = [
  "Call the dentist",
  "Email Marcus back",
  "Renew the insurance",
  "Mom's birthday",
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
        <div className="flex flex-col gap-4 p-5 md:flex-row md:items-stretch md:gap-3">
          {/* The mess */}
          <div className="md:flex-1">
            <PanelLabel color={MARKER.black}>in your head</PanelLabel>
            <p className="sr-only">
              Thirteen half-formed worries scrawled over each other in four marker colors,
              three of them crossed out, one written down twice.
            </p>
            <div className="relative h-60" aria-hidden="true">
              {SCRAWLS.map((s) => (
                <span
                  key={s.text}
                  className="absolute whitespace-nowrap font-hand"
                  style={{
                    top: s.top,
                    left: s.left,
                    fontSize: s.size,
                    color: s.color,
                    transform: `rotate(${s.rotate}deg)`,
                    opacity: 0.92,
                  }}
                >
                  {/* The inner inline-block is what sizes the strikethrough. An
                      absolutely positioned parent does not give the SVG the
                      text's width, so the stroke used to run off past the word. */}
                  <span className="relative inline-block">
                    {s.text}
                    {s.struck ? (
                      <Scratch color={s.color} className="left-0 top-[42%] h-[0.45em] w-full" />
                    ) : null}
                  </span>
                </span>
              ))}
              {/* Marks a real person leaves: one worry circled, one arrow that
                  goes nowhere useful, one bit of punctuation doing the work of
                  a whole feeling. */}
              <CircleMark className="left-[26%] top-[42%] h-16 w-48" />
              <ArrowMark
                color={MARKER.orange}
                className="absolute left-[14%] top-[68%] h-6 w-20"
                style={{ transform: "rotate(-38deg)" }}
              />
              <span
                className="absolute font-hand font-bold"
                style={{
                  top: "12%",
                  left: "17%",
                  color: MARKER.red,
                  fontSize: "1.6rem",
                  transform: "rotate(9deg)",
                }}
              >
                ?!
              </span>
            </div>
          </div>

          {/* The transition. Points down when the panels stack, right when they
              sit side by side, so the arrow always follows the reading order. */}
          <div
            className="flex shrink-0 items-center justify-center gap-2 md:w-20 md:flex-col md:self-center"
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
            <ArrowMark color={MARKER.black} className="hidden h-8 w-20 md:block" />
          </div>

          {/* The list */}
          <div className="md:flex-1">
            <PanelLabel color={MARKER.blue}>on the page</PanelLabel>
            <ol className="space-y-[0.6rem]">
              {WRITTEN.map((item, i) => (
                <li
                  key={item}
                  className="flex items-start gap-2 font-hand text-[1.2rem] leading-tight"
                  style={{
                    color: MARKER.black,
                    // A hand-written list is never perfectly straight.
                    transform: `rotate(${(i % 2 === 0 ? -1 : 1) * 0.5}deg)`,
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.35rem] block h-3 w-3 shrink-0"
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
        Thirteen scrawls, two of them the same worry, become six things you can actually do.
      </figcaption>
    </figure>
  );
}
