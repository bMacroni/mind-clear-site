import {
  ArrowMark,
  BoxMark,
  Circled,
  MARKER,
  Struck,
  Tick,
  Whiteboard,
} from "mind-clear-site";

/** The bare surface, with its sheen, ghosting and marker tray. */
export const Surface = () => (
  <Whiteboard>
    <div className="p-5">
      <p
        className="mb-3 font-hand text-lg font-bold lowercase"
        style={{ color: MARKER.black, transform: "rotate(-1.2deg)" }}
      >
        anything worth sketching
      </p>
      <p className="font-hand text-[1.15rem]" style={{ color: MARKER.blue }}>
        write on it in marker, not in Fraunces
      </p>
    </div>
  </Whiteboard>
);

/** The marks, so the idiom is visible in one place. */
export const Marks = () => (
  <Whiteboard>
    <div className="space-y-3 p-5 font-hand text-[1.15rem]" style={{ color: MARKER.black }}>
      <p>
        a word <Struck above="four" color={MARKER.blue}>twice</Struck> corrected in flight
      </p>
      <p>
        a date <Circled>friday?</Circled> you keep returning to
      </p>
      <div className="flex items-center gap-3">
        <BoxMark color={MARKER.black} tilt={-2} className="h-9 w-9">
          <Tick className="h-5 w-5" />
        </BoxMark>
        <BoxMark color={MARKER.red} tilt={2} className="h-9 w-9" />
        <ArrowMark color={MARKER.black} className="h-6 w-16" />
        <span style={{ color: MARKER.green }}>done</span>
      </div>
    </div>
  </Whiteboard>
);
