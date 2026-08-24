// The brain dump method in one picture: a crowded head on the left, a short
// written list on the right.
//
// Two details carry the article's actual point, so do not "tidy" them away:
// "that email" appears twice on the left, and the right side has one row fewer
// than the left has fragments. The list really is shorter than it felt.

const FRAGMENTS = [
  { text: "call the dentist", top: "2%", left: "1%", rotate: -6 },
  { text: "that email again", top: "16%", left: "44%", rotate: -9 },
  { text: "that email", top: "33%", left: "56%", rotate: 5 },
  { text: "renew the insurance", top: "42%", left: "4%", rotate: -3 },
  { text: "mom's birthday", top: "66%", left: "46%", rotate: 7 },
  { text: "the Q3 deck", top: "80%", left: "10%", rotate: -5 },
];

const WRITTEN = [
  "Call the dentist",
  "Email Marcus back",
  "Renew the insurance",
  "Mom's birthday",
  "Draft the Q3 deck",
];

function Label({ children }: { children: string }) {
  return <p className="mb-4 text-xs uppercase tracking-[0.18em] text-gold-deep">{children}</p>;
}

export function BrainDumpFigure() {
  return (
    // 44rem against the prose measure of 34rem: a deliberate break-out, left-aligned
    // with the text rather than centred, so it sits under the column instead of
    // drifting away from it.
    <figure className="my-10 max-w-[44rem]">
      <div className="flex flex-col gap-6 rounded-lg border border-hairline bg-cream-warm p-6 md:flex-row md:items-start md:gap-2">
        {/* In your head. The fragments are impressionistic, so they are hidden
            from assistive tech and described in one line instead. */}
        <div className="md:flex-1">
          <Label>In your head</Label>
          <p className="sr-only">
            Six half-formed worries, crowding and overlapping, one of them written down
            twice.
          </p>
          <div className="relative h-44" aria-hidden="true">
            {FRAGMENTS.map((f) => (
              <span
                key={f.text}
                className="absolute whitespace-nowrap font-serif text-sm italic text-ink"
                style={{
                  top: f.top,
                  left: f.left,
                  transform: `rotate(${f.rotate}deg)`,
                  opacity: 0.45,
                }}
              >
                {f.text}
              </span>
            ))}
          </div>
        </div>

        {/* The thread between the two states. Horizontal when stacked, vertical
            when side by side. */}
        <div
          className="flex items-center justify-center gap-3 md:w-24 md:shrink-0 md:flex-col md:self-stretch md:pt-9"
          aria-hidden="true"
        >
          <span className="h-px flex-1 bg-gold md:h-auto md:w-px md:flex-1" />
          <span className="whitespace-nowrap text-xs uppercase tracking-[0.14em] text-gold-deep">
            2 min
          </span>
          <span className="h-px flex-1 bg-gold md:h-auto md:w-px md:flex-1" />
        </div>

        {/* On the page. This half is real content, so it stays readable. */}
        <div className="md:flex-1">
          <Label>On the page</Label>
          <ol>
            {WRITTEN.map((item) => (
              <li
                key={item}
                className="border-t border-hairline py-[0.55rem] text-sm text-ink-muted first:border-t-0 first:pt-0"
              >
                {item}
              </li>
            ))}
          </ol>
        </div>
      </div>

      <figcaption className="mt-3 text-xs text-ink-soft">
        Six fragments, one of them the same worry twice, become five plain lines.
      </figcaption>
    </figure>
  );
}
