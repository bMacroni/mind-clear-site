# Mind Clear App Marketing Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the portfolio case study at `app/case-studies/mind-clear/page.tsx` with a direct-to-consumer app marketing page for Mind Clear, following the brand design system.

**Architecture:** Single-scroll page with 5 visual sections (Hero → Problem → Brain Dump → 3 Feature Callouts → CTA) alternating dark `#0D0D0D` and warm cream `#E8E8E2` backgrounds. All visuals (task cards, step lists, pill badges) are built in pure Tailwind/CSS — no screenshots, no images. Roboto Light 300 is loaded via `next/font/google` scoped to the page.

**Tech Stack:** Next.js 14 App Router, React 18, TypeScript, Tailwind CSS, `lucide-react` (already installed), `next/font/google`

**Spec:** `docs/superpowers/specs/2026-06-09-mind-clear-marketing-page-design.md`

---

## Design System Quick Reference

Apply these throughout every component. Never deviate.

| Token | Value |
|---|---|
| Dark canvas | `#0D0D0D` |
| Warm cream canvas | `#E8E8E2` |
| Warm cream card | `#F5F1E1` |
| Dark card | `#1F1F1F` |
| Nested dark | `#2A2A2A` |
| Gold | `#D4AF37` |
| Gold dim rail | `#E6CF8E` |
| Gold dark rail (dark surfaces) | `#6B5A20` |
| Gold tint fill | `rgba(212,175,55,0.20)` |
| Text primary dark | `#F2F2F2` |
| Text primary light | `#111111` |
| Text secondary dark | `#A8A8A8` |
| Text secondary light | `#444444` |
| Text dim | `#6B6B6B` |
| Text muted | `#888888` |
| Success (step check) | `#10B981` |

**Rules:**
- Gold fills always use charcoal text `#111111` — never white on gold
- No shame language: "7 days waiting" not "Overdue", no red on status pills
- No emojis — use Lucide icons (stroke, ~1.5px, 18–24px)
- No bold — Roboto Light 300 only. Hierarchy from size + color + casing
- All-caps eyebrows only: `tracking-[0.06em]`, dim color, `text-xs`
- Warm cream not pure white: `#E8E8E2` canvas, `#F5F1E1` card fill
- No shadows on cards — only Google Play button gets subtle shadow

---

## Task 1: Foundation — directory, shared components, Roboto font

**Files:**
- Create: `app/case-studies/mind-clear/_components/GooglePlayButton.tsx`
- Create: `app/case-studies/mind-clear/_components/TaskCardMockup.tsx`

- [ ] **Step 1: Create the `_components` directory**

```bash
mkdir "app/case-studies/mind-clear/_components"
```

- [ ] **Step 2: Create `GooglePlayButton.tsx`**

This button is used in Hero (Section 1) and DownloadCTA (Section 5). Gold fill, charcoal text. The `href` is `#` until the Play Store URL is available.

```tsx
// app/case-studies/mind-clear/_components/GooglePlayButton.tsx
interface GooglePlayButtonProps {
  className?: string;
}

export function GooglePlayButton({ className = "" }: GooglePlayButtonProps) {
  return (
    <a
      href="#"
      className={`inline-flex items-center gap-3 px-5 py-3 rounded-lg transition-opacity hover:opacity-80 ${className}`}
      style={{ backgroundColor: "#D4AF37" }}
    >
      <svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M1 1L10 10L1 19V1Z" fill="#111111" />
        <path d="M1 1L14 6.5L10 10L1 1Z" fill="#111111" opacity="0.8" />
        <path d="M1 19L14 13.5L10 10L1 19Z" fill="#111111" opacity="0.8" />
        <path
          d="M14 6.5L17 10L14 13.5L10 10L14 6.5Z"
          fill="#111111"
          opacity="0.6"
        />
      </svg>
      <div className="text-left leading-tight" style={{ color: "#111111" }}>
        <div
          className="text-[10px] tracking-wider uppercase"
          style={{ fontWeight: 300 }}
        >
          Get it on
        </div>
        <div className="text-sm" style={{ fontWeight: 300 }}>
          Google Play
        </div>
      </div>
    </a>
  );
}
```

- [ ] **Step 3: Create `TaskCardMockup.tsx`**

Reusable task card visual used in BrainDump and FocusFeature. The 4px left rail changes color by focus state; the card fill changes too.

```tsx
// app/case-studies/mind-clear/_components/TaskCardMockup.tsx
interface TaskCardMockupProps {
  title: string;
  meta?: string;
  isFocus?: boolean;
  pill?: string;
  priorityPill?: string;
}

export function TaskCardMockup({
  title,
  meta,
  isFocus = false,
  pill,
  priorityPill,
}: TaskCardMockupProps) {
  return (
    <div
      className="flex items-start gap-3 px-4 py-3 relative"
      style={{
        backgroundColor: isFocus ? "rgba(212,175,55,0.20)" : "#F5F1E1",
        border: isFocus ? "1.5px solid #D4AF37" : "1px solid #DEDCD2",
        borderRadius: "8px",
        borderLeft: "none",
      }}
    >
      {/* Left gold rail */}
      <div
        className="absolute left-0 top-0 bottom-0"
        style={{
          width: "4px",
          backgroundColor: isFocus ? "#D4AF37" : "#E6CF8E",
          borderRadius: "8px 0 0 8px",
        }}
      />
      <div className="flex-1 min-w-0 pl-1">
        <p
          className="text-sm leading-snug"
          style={{ color: "#111111", fontWeight: 300 }}
        >
          {title}
        </p>
        {meta && (
          <p className="text-xs mt-0.5" style={{ color: "#888888" }}>
            {meta}
          </p>
        )}
        {(pill || priorityPill) && (
          <div className="flex gap-2 mt-2 flex-wrap">
            {pill && (
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: "#D4AF37",
                  color: "#111111",
                  fontWeight: 300,
                }}
              >
                {pill}
              </span>
            )}
            {priorityPill && (
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: "#2A2A1A",
                  color: "#E6CF8E",
                  fontWeight: 300,
                }}
              >
                {priorityPill}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add app/case-studies/mind-clear/_components/GooglePlayButton.tsx
git add app/case-studies/mind-clear/_components/TaskCardMockup.tsx
git commit -m "feat: add shared GooglePlayButton and TaskCardMockup components"
```

---

## Task 2: Hero section

**Files:**
- Create: `app/case-studies/mind-clear/_components/Hero.tsx`

- [ ] **Step 1: Create `Hero.tsx`**

Full-viewport dark hero. Centered vertically and horizontally. Gold eyebrow, large headline (Roboto Light 300 via parent `className`), muted subhead, gold Play button, dim caption.

```tsx
// app/case-studies/mind-clear/_components/Hero.tsx
import { GooglePlayButton } from "./GooglePlayButton";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-24"
      style={{ backgroundColor: "#0D0D0D" }}
    >
      <p
        className="text-xs tracking-[0.06em] uppercase mb-6"
        style={{ color: "#D4AF37", fontWeight: 300 }}
      >
        For ADHD Brains
      </p>
      <h1
        className="text-4xl md:text-6xl max-w-2xl mb-6"
        style={{ color: "#F2F2F2", fontWeight: 300, lineHeight: 1.2 }}
      >
        Clear your head.
        <br />
        One step at a time.
      </h1>
      <p
        className="text-lg max-w-md mb-10"
        style={{ color: "#A8A8A8", fontWeight: 300 }}
      >
        Dump everything on your mind. Mind Clear turns it into a plan.
      </p>
      <GooglePlayButton />
      <p className="mt-4 text-xs" style={{ color: "#6B6B6B" }}>
        Android · Free · 21-day premium trial
      </p>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/case-studies/mind-clear/_components/Hero.tsx
git commit -m "feat: add Hero section"
```

---

## Task 3: Problem Hook section

**Files:**
- Create: `app/case-studies/mind-clear/_components/ProblemHook.tsx`

- [ ] **Step 1: Create `ProblemHook.tsx`**

Warm cream section. No imagery. Large pull quote followed by short body. First mode shift from dark — creates visual breathing room.

```tsx
// app/case-studies/mind-clear/_components/ProblemHook.tsx
export default function ProblemHook() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#E8E8E2" }}>
      <div className="max-w-2xl mx-auto">
        <p
          className="text-xs tracking-[0.06em] uppercase mb-8"
          style={{ color: "#888888", fontWeight: 300 }}
        >
          The Problem
        </p>
        <blockquote
          className="text-3xl md:text-4xl mb-8"
          style={{ color: "#111111", fontWeight: 300, lineHeight: 1.3 }}
        >
          "You know what you need to do.
          <br />
          You just can't start."
        </blockquote>
        <p
          className="text-base leading-relaxed"
          style={{ color: "#444444", fontWeight: 300 }}
        >
          For ADHD brains, the gap between knowing and doing isn't laziness —
          it's cognitive load. Standard task apps make it worse. They add more
          to manage.
        </p>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/case-studies/mind-clear/_components/ProblemHook.tsx
git commit -m "feat: add ProblemHook section"
```

---

## Task 4: Brain Dump section

**Files:**
- Create: `app/case-studies/mind-clear/_components/BrainDump.tsx`

- [ ] **Step 1: Create `BrainDump.tsx`**

Dark section. Two-column desktop layout (copy left, card mockup right). On mobile the columns stack vertically. The visual is a warm ivory card container with 4 `TaskCardMockup` items — one focus task (bright gold rail + tint fill) and three default tasks (dim gold rail).

```tsx
// app/case-studies/mind-clear/_components/BrainDump.tsx
import { TaskCardMockup } from "./TaskCardMockup";

export default function BrainDump() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#0D0D0D" }}>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Copy */}
        <div>
          <p
            className="text-xs tracking-[0.06em] uppercase mb-6"
            style={{ color: "#6B6B6B", fontWeight: 300 }}
          >
            Brain Dump
          </p>
          <h2
            className="text-3xl mb-6"
            style={{ color: "#F2F2F2", fontWeight: 300, lineHeight: 1.25 }}
          >
            Dump everything.
            <br />
            Get a plan.
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: "#A8A8A8", fontWeight: 300 }}
          >
            Type whatever's swirling in your head — tasks, worries, half-formed
            ideas. Mind Clear's AI reads it all and turns it into goals, tasks,
            and routines. In minutes.
          </p>
        </div>

        {/* Visual: task card mockup in ivory container */}
        <div
          className="p-4 flex flex-col gap-2"
          style={{ backgroundColor: "#F5F1E1", borderRadius: "20px" }}
        >
          <TaskCardMockup
            title="Draft the Q3 planning deck"
            meta="Due today"
            isFocus={true}
            pill="Suggested focus"
            priorityPill="high"
          />
          <TaskCardMockup
            title="Call the dentist to reschedule"
            meta="Tomorrow"
          />
          <TaskCardMockup
            title="Email Marcus about the retro"
            meta="This week"
          />
          <TaskCardMockup title="Morning walk" meta="Routine · weekdays" />
          <p
            className="text-xs text-center pt-2"
            style={{ color: "#888888" }}
          >
            5 things, sorted.
          </p>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/case-studies/mind-clear/_components/BrainDump.tsx
git commit -m "feat: add BrainDump section"
```

---

## Task 5: Focus Feature section (4a)

**Files:**
- Create: `app/case-studies/mind-clear/_components/FocusFeature.tsx`

- [ ] **Step 1: Create `FocusFeature.tsx`**

Warm cream section. Single centered column (max-w-2xl). Copy stack, then below it a single focus task card visual with action icons (Check, Pencil, Trash2 from lucide-react) in the top-right at 40×40px. Lucide icons use `strokeWidth={1.5}` throughout.

```tsx
// app/case-studies/mind-clear/_components/FocusFeature.tsx
import { Check, Pencil, Trash2 } from "lucide-react";

const actionIcons = [
  { Icon: Check, label: "Complete" },
  { Icon: Pencil, label: "Edit" },
  { Icon: Trash2, label: "Delete" },
];

export default function FocusFeature() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#E8E8E2" }}>
      <div className="max-w-2xl mx-auto">
        <p
          className="text-xs tracking-[0.06em] uppercase mb-6"
          style={{ color: "#888888", fontWeight: 300 }}
        >
          Today's Focus
        </p>
        <h2
          className="text-2xl mb-6"
          style={{ color: "#111111", fontWeight: 300, lineHeight: 1.3 }}
        >
          One task. Right now. That's all.
        </h2>
        <p
          className="text-base leading-relaxed mb-12"
          style={{ color: "#444444", fontWeight: 300 }}
        >
          Mind Clear picks one thing for you to focus on. Not a list — one
          task. When you're done, it finds the next one.
        </p>

        {/* Focus card visual */}
        <div
          className="relative px-4 py-3"
          style={{
            backgroundColor: "rgba(212,175,55,0.20)",
            border: "1.5px solid #D4AF37",
            borderRadius: "8px",
            borderLeft: "none",
          }}
        >
          {/* Gold rail */}
          <div
            className="absolute left-0 top-0 bottom-0"
            style={{
              width: "4px",
              backgroundColor: "#D4AF37",
              borderRadius: "8px 0 0 8px",
            }}
          />
          {/* Action icons row */}
          <div className="flex justify-end gap-2 mb-3">
            {actionIcons.map(({ Icon, label }) => (
              <div
                key={label}
                aria-label={label}
                className="flex items-center justify-center"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: "#F5F1E1",
                  color: "#444444",
                }}
              >
                <Icon size={18} strokeWidth={1.5} />
              </div>
            ))}
          </div>
          <p
            className="text-base pl-1"
            style={{ color: "#111111", fontWeight: 300 }}
          >
            Draft the Q3 planning deck
          </p>
          <p
            className="text-xs pl-1 mt-1"
            style={{ color: "#888888" }}
          >
            Due today · high priority
          </p>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/case-studies/mind-clear/_components/FocusFeature.tsx
git commit -m "feat: add FocusFeature section"
```

---

## Task 6: Stuck Feature section (4b)

**Files:**
- Create: `app/case-studies/mind-clear/_components/StuckFeature.tsx`

- [ ] **Step 1: Create `StuckFeature.tsx`**

Dark section. Single centered column (max-w-2xl). Copy stack, then a nested step list in a `#2A2A2A` container. Three steps: first is checked (green `#10B981` circle, strikethrough text), two are unchecked (charcoal outline circle). Hint text below in dim: "start with just the first one."

```tsx
// app/case-studies/mind-clear/_components/StuckFeature.tsx
import { Check } from "lucide-react";

const steps = [
  {
    label: "Open the slide template and delete the old content",
    done: true,
  },
  { label: "Write the three talking points for slide 1", done: false },
  { label: "Add the Q2 numbers to the revenue chart", done: false },
];

export default function StuckFeature() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#0D0D0D" }}>
      <div className="max-w-2xl mx-auto">
        <p
          className="text-xs tracking-[0.06em] uppercase mb-6"
          style={{ color: "#6B6B6B", fontWeight: 300 }}
        >
          When You're Stuck
        </p>
        <h2
          className="text-2xl mb-6"
          style={{ color: "#F2F2F2", fontWeight: 300, lineHeight: 1.3 }}
        >
          Can't start?
          <br />
          The AI breaks it down.
        </h2>
        <p
          className="text-base leading-relaxed mb-12"
          style={{ color: "#A8A8A8", fontWeight: 300 }}
        >
          Tap 'I'm stuck' on any task. Mind Clear splits it into tiny steps
          you can actually begin — or reframes it entirely if that's what you
          need.
        </p>

        {/* Step list visual */}
        <div
          className="p-4 flex flex-col gap-3"
          style={{ backgroundColor: "#2A2A2A", borderRadius: "8px" }}
        >
          {steps.map((step) => (
            <div key={step.label} className="flex items-center gap-3">
              <div
                className="flex-shrink-0 flex items-center justify-center"
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  border: step.done ? "none" : "1.5px solid #404040",
                  backgroundColor: step.done ? "#10B981" : "transparent",
                }}
              >
                {step.done && (
                  <Check size={13} color="#fff" strokeWidth={2.5} />
                )}
              </div>
              <p
                className="text-sm"
                style={{
                  color: step.done ? "#6B6B6B" : "#F2F2F2",
                  textDecoration: step.done ? "line-through" : "none",
                  fontWeight: 300,
                }}
              >
                {step.label}
              </p>
            </div>
          ))}
          <p className="text-xs mt-1" style={{ color: "#6B6B6B" }}>
            start with just the first one
          </p>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/case-studies/mind-clear/_components/StuckFeature.tsx
git commit -m "feat: add StuckFeature section"
```

---

## Task 7: Overdue Drip section (4c)

**Files:**
- Create: `app/case-studies/mind-clear/_components/OverdueDrip.tsx`

- [ ] **Step 1: Create `OverdueDrip.tsx`**

Warm cream section. Single centered column (max-w-2xl). Copy stack, then two task cards with a Lucide `ArrowDown` between them. Top card has a "7 days waiting" pill (dark surface `#2A2A1A`, gold text `#E6CF8E`) — no red anywhere. Bottom card shows the same task rescheduled to "Thursday." Both cards have the dim gold rail `#E6CF8E`.

```tsx
// app/case-studies/mind-clear/_components/OverdueDrip.tsx
import { ArrowDown } from "lucide-react";

export default function OverdueDrip() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#E8E8E2" }}>
      <div className="max-w-2xl mx-auto">
        <p
          className="text-xs tracking-[0.06em] uppercase mb-6"
          style={{ color: "#888888", fontWeight: 300 }}
        >
          Missed a Deadline?
        </p>
        <h2
          className="text-2xl mb-6"
          style={{ color: "#111111", fontWeight: 300, lineHeight: 1.3 }}
        >
          It doesn't disappear.
          <br />
          It just waits.
        </h2>
        <p
          className="text-base leading-relaxed mb-12"
          style={{ color: "#444444", fontWeight: 300 }}
        >
          Miss a due date and Mind Clear quietly reschedules it to an open day.
          No overdue pile. No shame. It's still on the list — just moved to
          when you can actually do it.
        </p>

        {/* Two-card visual with arrow */}
        <div className="flex flex-col items-center gap-3">
          {/* Before card — "7 days waiting" pill */}
          <div
            className="w-full relative px-4 py-3"
            style={{
              backgroundColor: "#F5F1E1",
              border: "1px solid #DEDCD2",
              borderRadius: "8px",
              borderLeft: "none",
            }}
          >
            <div
              className="absolute left-0 top-0 bottom-0"
              style={{
                width: "4px",
                backgroundColor: "#E6CF8E",
                borderRadius: "8px 0 0 8px",
              }}
            />
            <p
              className="text-sm pl-1"
              style={{ color: "#111111", fontWeight: 300 }}
            >
              Book the car service
            </p>
            <div className="flex gap-2 mt-2 pl-1">
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: "#2A2A1A",
                  color: "#E6CF8E",
                  fontWeight: 300,
                }}
              >
                7 days waiting
              </span>
            </div>
          </div>

          <ArrowDown size={18} strokeWidth={1.5} style={{ color: "#888888" }} />

          {/* After card — rescheduled */}
          <div
            className="w-full relative px-4 py-3"
            style={{
              backgroundColor: "#F5F1E1",
              border: "1px solid #DEDCD2",
              borderRadius: "8px",
              borderLeft: "none",
            }}
          >
            <div
              className="absolute left-0 top-0 bottom-0"
              style={{
                width: "4px",
                backgroundColor: "#E6CF8E",
                borderRadius: "8px 0 0 8px",
              }}
            />
            <p
              className="text-sm pl-1"
              style={{ color: "#111111", fontWeight: 300 }}
            >
              Book the car service
            </p>
            <p className="text-xs pl-1 mt-1" style={{ color: "#888888" }}>
              Moved to Thursday
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/case-studies/mind-clear/_components/OverdueDrip.tsx
git commit -m "feat: add OverdueDrip section"
```

---

## Task 8: Download CTA section

**Files:**
- Create: `app/case-studies/mind-clear/_components/DownloadCTA.tsx`

- [ ] **Step 1: Create `DownloadCTA.tsx`**

Dark section mirroring the hero. Centered tight column (max-w-lg). Headline, subhead, Play button, platform note, pricing transparency line in dim gold `#6B5A20`. No nav, no footer clutter.

```tsx
// app/case-studies/mind-clear/_components/DownloadCTA.tsx
import { GooglePlayButton } from "./GooglePlayButton";

export default function DownloadCTA() {
  return (
    <section
      className="py-32 px-6 flex flex-col items-center text-center"
      style={{ backgroundColor: "#0D0D0D" }}
    >
      <div className="max-w-lg mx-auto flex flex-col items-center">
        <h2
          className="text-3xl md:text-4xl mb-6"
          style={{ color: "#F2F2F2", fontWeight: 300, lineHeight: 1.25 }}
        >
          Ready to clear your head?
        </h2>
        <p
          className="text-base mb-10"
          style={{ color: "#A8A8A8", fontWeight: 300 }}
        >
          Free to download. 21-day premium trial. No payment upfront.
        </p>
        <GooglePlayButton />
        <p className="mt-4 text-xs" style={{ color: "#6B6B6B" }}>
          Android only · iOS coming soon
        </p>
        <p
          className="mt-6 text-xs max-w-sm"
          style={{ color: "#6B5A20", fontWeight: 300 }}
        >
          Mind Clear is free. Premium unlocks AI features — Brain Dump, goal
          planning, and the stuck-task helper.
        </p>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/case-studies/mind-clear/_components/DownloadCTA.tsx
git commit -m "feat: add DownloadCTA section"
```

---

## Task 9: Wire up `page.tsx` — replace old content, load Roboto, verify build

**Files:**
- Modify: `app/case-studies/mind-clear/page.tsx` (full rewrite)

- [ ] **Step 1: Rewrite `page.tsx`**

This is a server component (no `"use client"` needed — no framer-motion, no browser APIs). Load Roboto Light 300 via `next/font/google` and apply it to the `<main>` element so all child components inherit the typeface.

```tsx
// app/case-studies/mind-clear/page.tsx
import { Roboto } from "next/font/google";
import Hero from "./_components/Hero";
import ProblemHook from "./_components/ProblemHook";
import BrainDump from "./_components/BrainDump";
import FocusFeature from "./_components/FocusFeature";
import StuckFeature from "./_components/StuckFeature";
import OverdueDrip from "./_components/OverdueDrip";
import DownloadCTA from "./_components/DownloadCTA";

const roboto = Roboto({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
});

export default function MindClearPage() {
  return (
    <main className={roboto.className} style={{ fontWeight: 300 }}>
      <Hero />
      <ProblemHook />
      <BrainDump />
      <FocusFeature />
      <StuckFeature />
      <OverdueDrip />
      <DownloadCTA />
    </main>
  );
}
```

- [ ] **Step 2: Run the build to check for TypeScript or import errors**

```bash
npm run build
```

Expected: build completes with no errors. If you see `Module not found` errors, check that every import path in `page.tsx` matches the exact filename in `_components/`. Next.js is case-sensitive on Linux/Vercel.

If you see a Roboto font error: `next/font/google` requires an internet connection at build time. On first run it downloads and caches the font subset locally. This is expected behavior.

- [ ] **Step 3: Start the dev server and visually verify**

```bash
npm run dev
```

Open `http://localhost:3000/case-studies/mind-clear` and check:

1. **Hero** — dark background, gold eyebrow visible, white headline, Play button is gold with charcoal text (not white-on-gold)
2. **Problem Hook** — warm cream (not pure white) background, large pull quote visible
3. **Brain Dump** — dark background, two columns on desktop, card mockup visible with gold rails and ivory container
4. **Focus Feature** — warm cream, focus card has gold left rail and gold-tint fill, action icons visible in top-right
5. **Stuck Feature** — dark, step list visible, first step is checked (green circle, strikethrough)
6. **Overdue Drip** — warm cream, two cards with arrow, pill reads "7 days waiting" in gold (no red)
7. **Download CTA** — dark, mirrors hero style, Play button visible

On mobile (resize browser to <768px): all 2-column sections should collapse to single column.

- [ ] **Step 4: Commit**

```bash
git add app/case-studies/mind-clear/page.tsx
git commit -m "feat: implement Mind Clear app marketing page

Replaces the portfolio case study with a 5-section single-scroll
marketing page. Dark/cream alternating sections, Roboto Light 300,
gold design system, CSS-only task card visuals."
```

---

## Self-Review Checklist (run before marking plan complete)

- [x] **Spec coverage:**
  - Section 1 Hero → Task 2 ✓
  - Section 2 Problem → Task 3 ✓
  - Section 3 Brain Dump (2-col, task card mockup) → Task 4 ✓
  - Section 4a Focus (gold rail, action icons at 40px) → Task 5 ✓
  - Section 4b Stuck (step list, checked/unchecked) → Task 6 ✓
  - Section 4c Overdue Drip (no red, "7 days waiting") → Task 7 ✓
  - Section 5 CTA (mirrors hero, pricing note) → Task 8 ✓
  - Google Play URL placeholder `#` → Task 1, Task 8 ✓
  - Roboto Light via next/font → Task 9 ✓
  - No screenshots, no phone frames → all sections use CSS visuals ✓
  - Gold + charcoal only (never white on gold) → GooglePlayButton uses `#111111` text ✓
  - No shame language, no red pills → OverdueDrip uses warm gold pill ✓

- [x] **Placeholder scan:** No TBD/TODO. The only intentional placeholder is `href="#"` in `GooglePlayButton.tsx` — documented in the spec as "replace with Play Store URL when available."

- [x] **Type consistency:** `TaskCardMockup` props (`title`, `meta`, `isFocus`, `pill`, `priorityPill`) used consistently in `BrainDump.tsx`. `GooglePlayButton` used identically in `Hero.tsx` and `DownloadCTA.tsx` with no extra props.
