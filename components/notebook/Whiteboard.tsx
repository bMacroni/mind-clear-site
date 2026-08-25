import type { ReactNode } from "react";

// The surface every notebook figure is drawn on. Deliberately NOT the Golden
// Thread palette: a figure is a sketch on a whiteboard, not part of the page.
// That contrast is the point, so do not "fix" the white to cream.

/** Dry-erase marker colors. Slightly desaturated, the way real markers dry. */
export const MARKER = {
  black: "#33322E",
  blue: "#2E6DA4",
  red: "#C0483C",
  green: "#3E8A63",
  orange: "#D08A3E",
} as const;

export type MarkerColor = keyof typeof MARKER;

export function Whiteboard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[10px] ${className}`}
      style={{
        background: "#FCFCFA",
        border: "1px solid #C9C8C2",
        // Faint sheen across the board, plus the shadow of a real object.
        backgroundImage:
          "linear-gradient(118deg, rgba(255,255,255,0) 38%, rgba(255,255,255,0.85) 47%, rgba(255,255,255,0) 56%)",
        boxShadow: "0 1px 2px rgba(17,17,17,0.06), 0 8px 20px -12px rgba(17,17,17,0.18)",
      }}
    >
      {/* Ghosting: what the last person wiped off never quite comes clean. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 40% at 22% 30%, rgba(120,130,140,0.055), transparent 70%)," +
            "radial-gradient(45% 35% at 78% 72%, rgba(120,130,140,0.045), transparent 70%)",
        }}
      />
      <div className="relative">{children}</div>
      {/* Marker tray along the bottom edge. */}
      <div
        aria-hidden="true"
        className="relative flex items-end justify-end gap-1.5 px-5 pb-2 pt-1"
        style={{ borderTop: "1px solid #E2E1DC", background: "#F1F0EC" }}
      >
        {(["black", "blue", "red", "green"] as MarkerColor[]).map((c) => (
          <span
            key={c}
            className="block h-[5px] w-8 rounded-full"
            style={{ background: MARKER[c], opacity: 0.85 }}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * A rough hand-drawn line, for strikethroughs and underlines. Two slightly
 * offset strokes read as marker better than one straight rule does.
 */
export function Scratch({
  color = MARKER.black,
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
      viewBox="0 0 100 8"
      preserveAspectRatio="none"
      fill="none"
    >
      <path
        d="M1 5.2 C 22 2.4, 44 6.6, 66 3.4 S 92 5.6, 99 3.1"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  );
}

/** A scrawled ellipse around something the writer kept coming back to. */
export function CircleMark({
  color = MARKER.red,
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
      viewBox="0 0 200 80"
      preserveAspectRatio="none"
      fill="none"
    >
      <path
        d="M100 6 C 152 4, 194 20, 193 40 C 192 62, 146 76, 98 75 C 48 74, 8 60, 8 39 C 8 19, 46 6, 104 7"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
}

/**
 * A word crossed out mid-sentence, optionally with the correction squeezed in
 * above it. The inline-block matters: it is what gives the stroke the width of
 * the word rather than of whatever ancestor happens to be positioned.
 */
export function Struck({
  children,
  above,
  color = MARKER.black,
  aboveColor = MARKER.red,
}: {
  children: ReactNode;
  above?: string;
  color?: string;
  aboveColor?: string;
}) {
  return (
    <span className="relative inline-block">
      {above ? (
        <span
          aria-hidden="true"
          className="absolute left-1/2 whitespace-nowrap text-[0.7em] leading-none"
          style={{
            bottom: "76%",
            transform: "translateX(-50%) rotate(-3deg)",
            color: aboveColor,
          }}
        >
          {above}
        </span>
      ) : null}
      {children}
      <Scratch color={color} className="left-0 top-[45%] h-[0.45em] w-full" />
    </span>
  );
}

/** A word ringed by someone who kept coming back to it. */
export function Circled({
  children,
  color = MARKER.red,
}: {
  children: ReactNode;
  color?: string;
}) {
  return (
    <span className="relative inline-block">
      {children}
      <CircleMark
        color={color}
        className="left-[-11%] top-[-30%] h-[1.85em] w-[124%]"
      />
    </span>
  );
}

/** A marker arrow. Points right by default; rotate for other directions. */
export function ArrowMark({
  color = MARKER.black,
  className = "",
  style,
}: {
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      style={style}
      viewBox="0 0 120 40"
      fill="none"
    >
      <path
        d="M4 21 C 34 13, 70 27, 108 19"
        stroke={color}
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M94 8 L 112 19 L 93 30"
        stroke={color}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
