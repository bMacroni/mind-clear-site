# Golden Thread Site-Wide Conversion — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the entire mind-clear-site to the all-cream "Golden Thread" design system, making the home page the Mind Clear app conversion page and retiring the dark "Mind Clear Studio" portfolio identity everywhere.

**Architecture:** The Golden Thread system (built 2026-06-10 at `/case-studies/mind-clear`) is lifted from page scope to site scope: shared components move to `components/marketing/`, the system CSS moves to `app/globals.css`, and Fraunces replaces Playfair as the site serif. The home page is rebuilt from the seven existing thread sections plus two new ones (feature list from ScrollTelling copy, founder story), a new cream footer with a *working* waitlist form, and the old route 301-redirects to `/`. Legal pages get a token-level reskin. Off-brand portfolio components are deleted.

**Tech Stack:** Next.js 14 App Router, React 18, TypeScript, Tailwind CSS, `lucide-react`, `next/font/google` (Fraunces + Outfit). No new dependencies; `framer-motion` and `matter-js` are expected to become removable.

**Design system source of truth:** `docs/superpowers/specs/2026-06-10-mind-clear-all-cream-redesign.md` (tokens, rules, the spine/node/ghost-numeral system). Brand/copy rules: `.claude/CLAUDE.md`, `docs/brand-voice.md`.

**Branch:** Work on `feat/golden-thread-site` off `main`. `main` auto-deploys via Vercel — do not push to `main` until the review gate below clears.

---

## Copy Review Gate (read before merging)

All section copy is reused verbatim from already-shipped components. The following strings are **new or changed** and need Brian → wife review before merge (landing-page copy is high-stakes per `.claude/CLAUDE.md`):

1. Footer waitlist block: eyebrow `iOS coming soon`, line `Get notified when Mind Clear lands on iPhone.`, success message `You're on the list. We'll let you know.`
2. Feature list section label: `More of what it does` (№ 06 eyebrow)
3. ScrollTelling's feature title `Routines & Streaks` — brand rules say never *lead* with streaks. Suggested replacement title: `Routines that stick` (description unchanged, it's gentle). Flag for review; ship the suggestion if approved.

---

## Page/Section Map (end state)

```
/                       ← mc-page. Hero → №01 Problem → №02 Brain Dump → №03 Focus
                          → №04 Stuck → №05 Missed Deadline → №06 Feature list
                          → №07 Why this exists → CTA (thread terminus) → Footer
/privacy, /terms,
/delete-account         ← same content, reskinned to cream tokens
/case-studies/mind-clear ← 301 → /
```

---

## Task 1: Lift the Golden Thread system to shared scope

**Files:**
- Move: `app/case-studies/mind-clear/_components/*.tsx` (all 10) → `components/marketing/`
- Modify: `app/globals.css` (append system CSS)
- Modify: `app/case-studies/mind-clear/page.tsx` (imports, drop local fonts/CSS)

- [ ] **Step 1: Move the components with git mv**

```bash
mkdir components/marketing
git mv app/case-studies/mind-clear/_components/BrainDump.tsx components/marketing/
git mv app/case-studies/mind-clear/_components/DownloadCTA.tsx components/marketing/
git mv app/case-studies/mind-clear/_components/FocusFeature.tsx components/marketing/
git mv app/case-studies/mind-clear/_components/GooglePlayButton.tsx components/marketing/
git mv app/case-studies/mind-clear/_components/Hero.tsx components/marketing/
git mv app/case-studies/mind-clear/_components/OverdueDrip.tsx components/marketing/
git mv app/case-studies/mind-clear/_components/ProblemHook.tsx components/marketing/
git mv app/case-studies/mind-clear/_components/StuckFeature.tsx components/marketing/
git mv app/case-studies/mind-clear/_components/TaskCardMockup.tsx components/marketing/
git mv app/case-studies/mind-clear/_components/ThreadSection.tsx components/marketing/
```

- [ ] **Step 2: Rename font variables in the moved files**

In every file under `components/marketing/`, replace (exact strings, all occurrences):
- `var(--font-fraunces)` → `var(--font-serif)`
- `var(--font-outfit)` → `var(--font-sans)`

(Files affected: `Hero.tsx`, `ThreadSection.tsx`, `ProblemHook.tsx`, `BrainDump.tsx`, `FocusFeature.tsx`, `StuckFeature.tsx`, `OverdueDrip.tsx`, `DownloadCTA.tsx`. Tailwind already maps `--font-sans`/`--font-serif` in `tailwind.config.js:73-76`.)

Also update the path comment on the first line of each file to its new `components/marketing/...` path.

- [ ] **Step 3: Append the system CSS to `app/globals.css`**

Take the entire `css` template-string body from `app/case-studies/mind-clear/page.tsx` (everything between the backticks — the `.mc-page`, `.mc-spine`, `.mc-spine-leadin`, `.mc-node`, `.mc-content`, `.mc-ghost`, `.mc-grain`, `.mc-rise*`, `.mc-frag`, `@keyframes` blocks) and append it verbatim to the end of `app/globals.css`, with these two changes:

1. Replace every `var(--font-fraunces)` with `var(--font-serif)`.
2. Extend the first `.mc-page` rule so pages don't need inline styles:

```css
.mc-page {
  --spine-x: 1.25rem;
  --content-pad: 3.25rem;
  --sect-pt: 6rem;
  --sect-pb: 6rem;
  background-color: #E8E8E2;
  color: #111111;
  font-family: var(--font-sans);
  font-weight: 300;
}
```

- [ ] **Step 4: Slim down the case-study page**

Rewrite `app/case-studies/mind-clear/page.tsx` to (this page is deleted in Task 7; this keeps it working meanwhile):

```tsx
// app/case-studies/mind-clear/page.tsx
import type { Metadata } from "next";
import Hero from "../../../components/marketing/Hero";
import ProblemHook from "../../../components/marketing/ProblemHook";
import BrainDump from "../../../components/marketing/BrainDump";
import FocusFeature from "../../../components/marketing/FocusFeature";
import StuckFeature from "../../../components/marketing/StuckFeature";
import OverdueDrip from "../../../components/marketing/OverdueDrip";
import DownloadCTA from "../../../components/marketing/DownloadCTA";

export const metadata: Metadata = {
  title: "Mind Clear — Clear your head. One step at a time.",
  description:
    "Dump everything on your mind. Mind Clear turns it into a plan. AI-powered planning built for ADHD brains — gentle on bad days. Free on Android.",
};

export default function MindClearPage() {
  return (
    <main className="mc-page overflow-x-hidden">
      <Hero />
      <ProblemHook />
      <BrainDump />
      <FocusFeature />
      <StuckFeature />
      <OverdueDrip />
      <DownloadCTA />
      <div className="mc-grain" aria-hidden="true" />
    </main>
  );
}
```

Known transient: until Task 2 lands, headlines on this page render in Playfair (the current `--font-serif`). Acceptable — Task 2 follows immediately.

- [ ] **Step 5: Build**

Run: `npm run build`
Expected: compiles, all 9 routes generate.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "refactor: lift Golden Thread system to shared components and global CSS"
```

---

## Task 2: Root layout — Fraunces serif + on-brand metadata

**Files:**
- Modify: `app/layout.tsx` (full rewrite)

- [ ] **Step 1: Rewrite `app/layout.tsx`**

```tsx
import type { Metadata } from 'next'
import { Outfit, Fraunces } from 'next/font/google'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-sans' })
const fraunces = Fraunces({
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://mind-clear.com'),
  title: 'Mind Clear — Clear your head. One step at a time.',
  description:
    'Dump everything on your mind. Mind Clear turns it into a plan. AI-powered planning built for ADHD brains — gentle on bad days. Free on Android.',
  keywords: ['ADHD', 'ADHD planner', 'brain dump', 'task paralysis', 'AI planning'],
  authors: [{ name: 'Mind Clear' }],
  openGraph: {
    title: 'Mind Clear — Clear your head. One step at a time.',
    description:
      'Dump everything on your mind. Mind Clear turns it into a plan. Built for ADHD brains.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${fraunces.variable} font-sans`}>{children}</body>
    </html>
  )
}
```

Note: Playfair is gone (Fraunces now backs `--font-serif`); any remaining `font-serif` classes site-wide now render Fraunces, which is the intended end state. `metadataBase` also clears the build warning.

- [ ] **Step 2: Build, then load `/case-studies/mind-clear` in dev and confirm headlines render Fraunces (serif with distinctive curved details), not Playfair**

Run: `npm run build`
Expected: compiles; metadataBase warnings gone.

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: Fraunces as site serif, on-brand root metadata"
```

---

## Task 3: Cream footer with a working waitlist form

**Files:**
- Create: `components/marketing/Footer.tsx`

The old `components/Footer.tsx` form is fake (`setTimeout`, never calls the API). This one really POSTs to `/api/waitlist`. API contract (`app/api/waitlist/route.ts`): POST JSON `{ email: string }`; 200 → `{ message }`; 400/409/500 → `{ error }` with user-readable text (409 = duplicate: "This email is already on the waitlist").

- [ ] **Step 1: Create `components/marketing/Footer.tsx`**

```tsx
// components/marketing/Footer.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/delete-account", label: "Delete Account" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || status === "loading") return;
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
        setErrorMsg(data.error ?? "Something went wrong. Try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Try again.");
    }
  }

  return (
    <footer
      className="px-6 py-16"
      style={{ backgroundColor: "#E8E8E2", borderTop: "1px solid rgba(17,17,17,0.14)" }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-12"
        style={{ paddingLeft: "var(--content-pad)", paddingRight: "1.5rem" }}
      >
        {/* Wordmark */}
        <div>
          <p
            className="text-2xl mb-3"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 300, color: "#111111" }}
          >
            Mind Clear
          </p>
          <p className="text-sm max-w-xs" style={{ color: "#6B6B6B", fontWeight: 300 }}>
            For brains that work differently.
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer">
          <p
            className="text-xs uppercase tracking-[0.18em] mb-4"
            style={{ color: "#6B5A20", fontWeight: 300 }}
          >
            Navigate
          </p>
          <ul className="space-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm transition-colors hover:opacity-70"
                  style={{ color: "#444444", fontWeight: 300 }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* iOS waitlist */}
        <div>
          <p
            className="text-xs uppercase tracking-[0.18em] mb-4"
            style={{ color: "#6B5A20", fontWeight: 300 }}
          >
            iOS coming soon
          </p>
          <p className="text-sm mb-4" style={{ color: "#444444", fontWeight: 300 }}>
            Get notified when Mind Clear lands on iPhone.
          </p>
          {status === "success" ? (
            <p className="text-sm" style={{ color: "#6B5A20", fontWeight: 300 }}>
              You're on the list. We'll let you know.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="relative max-w-xs">
              <label htmlFor="waitlist-email" className="sr-only">
                Email address
              </label>
              <input
                id="waitlist-email"
                type="email"
                required
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent pr-10 py-2 text-sm focus:outline-none"
                style={{
                  borderBottom: "1px solid rgba(17,17,17,0.3)",
                  color: "#111111",
                  fontWeight: 300,
                }}
              />
              <button
                type="submit"
                aria-label="Join the iOS waitlist"
                disabled={status === "loading"}
                className="absolute right-0 top-1/2 -translate-y-1/2 transition-opacity hover:opacity-70"
                style={{ color: "#6B5A20" }}
              >
                {status === "loading" ? (
                  <Loader2 size={18} strokeWidth={1.5} className="animate-spin" />
                ) : (
                  <ArrowRight size={18} strokeWidth={1.5} />
                )}
              </button>
              {status === "error" && (
                <p className="text-xs mt-2" style={{ color: "#EF4444", fontWeight: 300 }}>
                  {errorMsg}
                </p>
              )}
            </form>
          )}
        </div>
      </div>

      <p
        className="mt-16 text-xs"
        style={{
          paddingLeft: "var(--content-pad)",
          color: "#888888",
          fontWeight: 300,
        }}
      >
        © 2026 Mind Clear. All rights reserved.
      </p>
    </footer>
  );
}
```

(Error text is the API's own user-readable message. `#EF4444` is the documented Error token — used for form errors only, never task/status pills.)

- [ ] **Step 2: Build**

Run: `npm run build`
Expected: compiles (component not yet mounted anywhere — that's Task 6).

- [ ] **Step 3: Commit**

```bash
git add components/marketing/Footer.tsx
git commit -m "feat: cream footer with real waitlist form wired to /api/waitlist"
```

---

## Task 4: Feature list thread section (№ 06)

**Files:**
- Create: `components/marketing/FeatureList.tsx`

Copy comes verbatim from `components/ScrollTelling.tsx` (the descriptions are Brian's voice and approved). Presentation changes from sticky-phone scroll-telling to a calm editorial list — CSS only, no screenshots, consistent with the Golden Thread spec. The `Routines & Streaks` title is the one flagged copy change (see Copy Review Gate).

- [ ] **Step 1: Create `components/marketing/FeatureList.tsx`**

```tsx
// components/marketing/FeatureList.tsx
import { ThreadSection } from "./ThreadSection";

const features = [
  {
    title: "Brain Dump",
    description:
      "My brain was always juggling everything at once and nothing was moving. Getting it all out — in any order, any format — was the only thing that helped me start. Mind Clear turns that unstructured mess into a list I can actually work from.",
  },
  {
    title: "Ruthless Prioritization",
    description:
      "When everything felt urgent, I got nothing done. Mind Clear helped me land on the one thing that actually mattered right now, and quietly hide the rest until I was ready.",
  },
  {
    title: "Daily Calendar View",
    description:
      "A to-do list never told me when. I needed to see my day, not just read it. Mind Clear schedules my tasks into a realistic view of today so nothing gets lost in the fog.",
  },
  {
    title: "Routines that stick",
    description:
      "I knew what I should be doing every day — I just couldn't make it stick. Having a routine with a visible streak gave me the structure my brain was missing and made consistency feel achievable for the first time.",
  },
  {
    title: "Reminders That Actually Help",
    description:
      "Out of sight, out of mind — but on steroids. I'd set intentions in the morning and forget them by noon. Timely reminders bring my tasks back into focus exactly when I need them, not just when I happen to open the app.",
  },
];

export default function FeatureList() {
  return (
    <ThreadSection
      number="06"
      label="More of what it does"
      ariaLabel="More Mind Clear features"
    >
      <div className="max-w-3xl">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="grid grid-cols-1 md:grid-cols-[1fr,1.6fr] gap-2 md:gap-10 py-8"
            style={{
              borderTop: i === 0 ? "none" : "1px solid rgba(17,17,17,0.14)",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 300,
                fontSize: "1.4rem",
                lineHeight: 1.25,
                color: "#111111",
              }}
            >
              {f.title}
            </h3>
            <p
              className="text-base leading-relaxed"
              style={{ color: "#444444", fontWeight: 300 }}
            >
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </ThreadSection>
  );
}
```

- [ ] **Step 2: Build**

Run: `npm run build`
Expected: compiles.

- [ ] **Step 3: Commit**

```bash
git add components/marketing/FeatureList.tsx
git commit -m "feat: add FeatureList thread section from ScrollTelling copy"
```

---

## Task 5: Founder story thread section (№ 07)

**Files:**
- Create: `components/marketing/FounderStoryThread.tsx`

Copy is verbatim from `components/FounderStory.tsx` (already approved, Brian's voice). Visual moves from dark/mono to the thread system; the closing line gets serif-italic emphasis.

- [ ] **Step 1: Create `components/marketing/FounderStoryThread.tsx`**

```tsx
// components/marketing/FounderStoryThread.tsx
import { ThreadSection } from "./ThreadSection";

export default function FounderStoryThread() {
  return (
    <ThreadSection number="07" label="Why This Exists" ariaLabel="Why this exists">
      <div className="max-w-xl space-y-6">
        <p
          className="text-lg leading-relaxed"
          style={{ color: "#444444", fontWeight: 300 }}
        >
          I spent years not knowing why my brain worked the way it did. When my
          daughter was born, I couldn't ignore it anymore.
        </p>
        <p
          className="text-lg leading-relaxed"
          style={{ color: "#444444", fontWeight: 300 }}
        >
          I'd read enough about ADHD to recognize myself in it — the wall of
          awful, the paralysis, the inability to start anything without the
          right conditions. I tried every productivity app I could find. None
          of them stuck. They were all built for brains that work differently
          than mine.
        </p>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "1.4rem",
            lineHeight: 1.4,
            color: "#111111",
          }}
        >
          So I built one for myself. Now that it's actually helping, I want to
          share it.
        </p>
        <p
          className="text-xs uppercase tracking-[0.18em] pt-4"
          style={{
            color: "#6B5A20",
            fontWeight: 300,
            borderTop: "1px solid rgba(17,17,17,0.14)",
          }}
        >
          — Brian, Founder
        </p>
      </div>
    </ThreadSection>
  );
}
```

- [ ] **Step 2: Build**

Run: `npm run build`
Expected: compiles.

- [ ] **Step 3: Commit**

```bash
git add components/marketing/FounderStoryThread.tsx
git commit -m "feat: add FounderStoryThread section"
```

---

## Task 6: Rebuild the home page

**Files:**
- Modify: `app/page.tsx` (full rewrite)

The home page becomes the conversion page: the seven marketing sections plus the two new thread sections, CTA terminus, footer. Server component — only Footer is a client component and it declares itself.

- [ ] **Step 1: Rewrite `app/page.tsx`**

```tsx
// app/page.tsx
import Hero from "../components/marketing/Hero";
import ProblemHook from "../components/marketing/ProblemHook";
import BrainDump from "../components/marketing/BrainDump";
import FocusFeature from "../components/marketing/FocusFeature";
import StuckFeature from "../components/marketing/StuckFeature";
import OverdueDrip from "../components/marketing/OverdueDrip";
import FeatureList from "../components/marketing/FeatureList";
import FounderStoryThread from "../components/marketing/FounderStoryThread";
import DownloadCTA from "../components/marketing/DownloadCTA";
import Footer from "../components/marketing/Footer";

export default function Home() {
  return (
    <main className="mc-page overflow-x-hidden">
      <Hero />
      <ProblemHook />
      <BrainDump />
      <FocusFeature />
      <StuckFeature />
      <OverdueDrip />
      <FeatureList />
      <FounderStoryThread />
      <DownloadCTA />
      <Footer />
      <div className="mc-grain" aria-hidden="true" />
    </main>
  );
}
```

(No `"use client"` — removed deliberately. No per-page metadata — the root layout's is correct for `/`.)

- [ ] **Step 2: Build and visually verify in dev**

Run: `npm run build` then `npm run dev`, open `http://localhost:3000/` and check:

1. Hero with scattered fragments and lead-in spine
2. Sections № 01–07 each with node + ghost numeral; spine continuous between hero and CTA dot
3. № 06 feature list rows with hairline dividers
4. № 07 founder story with italic closing line
5. CTA gold dot terminus, then footer below with hairline top rule
6. Footer form: submit a test email — without `.env.local` credentials expect the red error line with the API's message (that is correct behavior); with credentials expect the success line
7. Mobile (<768px): spine hugs left edge, all grids stack

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: home page becomes the Golden Thread conversion page"
```

---

## Task 7: Retire the old route — 301 to `/`

**Files:**
- Modify: `next.config.js`
- Delete: `app/case-studies/` (entire directory)

- [ ] **Step 1: Add the redirect to `next.config.js`**

Add a `redirects` key to the exported config object (merge with whatever is already there — do not drop existing keys):

```js
async redirects() {
  return [
    {
      source: '/case-studies/mind-clear',
      destination: '/',
      permanent: true,
    },
  ];
},
```

- [ ] **Step 2: Delete the route directory**

```bash
git rm -r app/case-studies
```

- [ ] **Step 3: Build, then verify the redirect in dev**

Run: `npm run build` — expected: route list no longer contains `/case-studies/mind-clear`.
In dev, request `http://localhost:3000/case-studies/mind-clear` → expect 308/301 redirect to `/` (Next uses 308 for permanent).

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: 301 /case-studies/mind-clear to home, remove route"
```

---

## Task 8: Reskin legal pages to cream

**Files:**
- Modify: `app/privacy/page.tsx`
- Modify: `app/terms/page.tsx`
- Modify: `app/delete-account/page.tsx`

These are long content pages — do a token-level reskin, not a rewrite. Content and structure stay. Apply this exact mapping in all three files (class strings and inline styles):

| Find | Replace | Role |
|---|---|---|
| `bg-[#121212]`, `bg-black` (page background) | `bg-[#E8E8E2]` | canvas |
| `bg-gray-900`, `bg-white/5` (card surfaces) | `bg-[#F5F1E1]` | card |
| `text-white` (headings/body) | `text-[#111111]` | ink |
| `text-gray-300`, `text-gray-400` | `text-[#444444]` | body |
| `text-gray-500`, `text-gray-600` | `text-[#6B6B6B]` | dim |
| `text-yellow-400`, `text-[#FFD700]` | `text-[#6B5A20]` | accent text (dark gold for contrast on cream) |
| `border-white/10`, `border-white/20`, `border-gray-800` | `border-[#DEDCD2]` | hairlines |
| icon colors `#FFD700` / `yellow-400` | `#6B5A20` | icons |

Then per file:

- [ ] **Step 1: Reskin `app/privacy/page.tsx`** — apply the mapping. Also grep the file for `Studio` and `Lab`; replace any "Back to Lab"-style link text with `Back to Mind Clear` pointing at `/`.

- [ ] **Step 2: Reskin `app/terms/page.tsx`** — same mapping, same Studio/Lab sweep.

- [ ] **Step 3: Reskin `app/delete-account/page.tsx`** — same mapping, same sweep. Destructive-action buttons on this page may keep `#EF4444` (documented Error token).

- [ ] **Step 4: Build, then visually verify each page in dev**

Run: `npm run build`, then open `/privacy`, `/terms`, `/delete-account` at desktop and 375px. Check: cream background, readable body text (`#444444` on `#E8E8E2`), no leftover dark panels, no yellow-on-cream low-contrast text.

- [ ] **Step 5: Commit**

```bash
git add app/privacy app/terms app/delete-account
git commit -m "feat: reskin legal pages to cream Golden Thread tokens"
```

---

## Task 9: Delete dead portfolio components and unused dependencies

**Files:**
- Delete: `components/InteractiveHero.tsx`, `components/Mission.tsx`, `components/FounderStory.tsx`, `components/FeaturedProject.tsx`, `components/ScrollTelling.tsx`, `components/Footer.tsx`, `components/Hero.tsx`, `components/FutureVision.tsx`, `components/ScreenshotGallery.tsx`, `components/PhoneMockup.tsx`
- Possibly modify: `package.json` (remove `framer-motion`, `matter-js` if unused)

- [ ] **Step 1: Confirm nothing still imports the dead components**

```bash
grep -rn "InteractiveHero\|FeaturedProject\|ScrollTelling\|PhoneMockup\|FutureVision\|ScreenshotGallery\|components/Mission\|components/FounderStory\|components/Footer\|components/Hero" app components --include=*.tsx
```

Expected: zero hits outside the files being deleted (Task 6 already repointed `app/page.tsx`). If anything still imports them, fix that first — do not delete blind.

- [ ] **Step 2: Delete**

```bash
git rm components/InteractiveHero.tsx components/Mission.tsx components/FounderStory.tsx components/FeaturedProject.tsx components/ScrollTelling.tsx components/Footer.tsx components/Hero.tsx components/FutureVision.tsx components/ScreenshotGallery.tsx components/PhoneMockup.tsx
```

(Keep `components/ui/` — shadcn primitives are used by the legal pages.)

- [ ] **Step 3: Check whether framer-motion / matter-js are still used**

```bash
grep -rn "framer-motion\|matter-js" app components --include=*.tsx --include=*.ts
```

If zero hits:

```bash
npm uninstall framer-motion matter-js
```

(If `@types/matter-js` is in devDependencies, remove it too.) If there are hits, leave the dependencies alone and note where.

- [ ] **Step 4: Build**

Run: `npm run build`
Expected: compiles. Bundle size for `/` should drop substantially (it was 44 kB page JS; the new home is mostly server-rendered).

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore: remove dark portfolio components and unused animation deps"
```

---

## Task 10: Final verification sweep

No files — this is the gate before requesting review/merge.

- [ ] **Step 1: Production build**

Run: `npm run build`
Expected: clean compile, no metadataBase warning, route list = `/`, `/_not-found`, `/api/waitlist`, `/delete-account`, `/privacy`, `/terms`.

- [ ] **Step 2: Runtime verification (use the superpowers:verification-before-completion skill)**

With `npm run dev` running, drive the site (Playwright or browser) and capture full-page screenshots:

1. `/` desktop (1440px) and mobile (375px) — spine continuous hero→dot, all 9 sections + footer render, no horizontal scroll
2. `/privacy` desktop — cream reskin holds on a long content page
3. `/case-studies/mind-clear` → redirects to `/`
4. Footer waitlist: submit `test@example.com` → expect graceful error without env vars, or success with them
5. Tab title reads "Mind Clear — Clear your head. One step at a time." on every page

- [ ] **Step 3: Banned-term sweep on rendered pages**

On the rendered `/` (browser, `document.body.innerText`) confirm zero occurrences of: `Studio`, `Orchestrating`, `Experiment`, `Project 001`, `Lab`, `Outsourced`, `MindGarden`, `Foci`, `Overdue`. Also grep the repo's `app/` and `components/` for `Mind Clear Studio` — expect zero.

- [ ] **Step 4: Stop — review gate**

Do NOT merge to `main` (auto-deploys). Present screenshots to Brian; the Copy Review Gate items at the top of this plan need his + wife's sign-off. Merge via the superpowers:finishing-a-development-branch skill after approval.

---

## Self-Review (done at planning time)

- **Spec coverage:** all-cream canvas everywhere ✓ (home Task 6, legal Task 8); spine/node/ghost system shared ✓ (Task 1); Fraunces site serif ✓ (Task 2); approved copy reused verbatim ✓ (Tasks 4, 5); working waitlist (site audit's top bug) ✓ (Task 3); Studio framing retired ✓ (Tasks 6, 8, 9); old route folded into home with 301 ✓ (Task 7, matches `docs/website-redesign-plan.md` recommendation A).
- **Placeholder scan:** none. The only `#` href is the Google Play button placeholder, documented in the GT spec, unchanged here.
- **Type consistency:** `ThreadSection` props (`number`, `label`, `ariaLabel`, `children`) match the existing component; `Footer` is self-contained; font variables are `--font-serif`/`--font-sans` consistently after Task 1 Step 2 and Task 2.
- **Known deferred items (intentionally out of scope):** Play Store URL for `GooglePlayButton`; OG image asset + favicon; `/about` + `/notebook` routes (Phases 2–3 of `docs/website-redesign-plan.md` — content work, not design conversion); Dependabot vulnerabilities (1 critical) — separate chore.
