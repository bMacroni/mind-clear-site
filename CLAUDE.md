## CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Related Instructions

- `.claude/CLAUDE.md` — **Marketing rules, brand voice, approved messaging, and copy-review process.** Read before writing any user-facing copy.
- `docs/brand-voice.md`, `docs/marketing-playbook.md`, `docs/MARKETING_BRIEF.md` — source-of-truth marketing docs.

## Commands

```bash
npm run dev      # Next.js dev server on localhost:3000
npm run build    # Production build
npm start        # Serve production build
npm run lint     # next lint (ESLint via eslint-config-next)
```

No test suite is configured.

## Environment

Waitlist API requires `.env.local` with Google Sheets service-account credentials (see `ENVIRONMENT_SETUP.md`):
- `GOOGLE_SHEETS_CLIENT_EMAIL`
- `GOOGLE_SHEETS_PRIVATE_KEY` (preserve `\n` literals)
- `GOOGLE_SPREADSHEET_ID`

Without these, `/api/waitlist` will fail at runtime but the site builds fine.

## Architecture

**Stack:** Next.js 14 (App Router) + React 18 + TypeScript + Tailwind + shadcn/ui, deployed on Vercel.

**Two sites live in one Next app:**

1. **`app/page.tsx` — "Mind Clear Studio" landing page.** A client-rendered, animated marketing page composed of section components in `components/` (`InteractiveHero`, `Mission`, `FounderStory`, `FeaturedProject`, `ScrollTelling`, `Footer`). Dark theme (`#121212`). Uses `framer-motion` and `matter-js` for hero animations.
2. **`app/case-studies/mind-clear/` — the Mind Clear app marketing page** (the main conversion target per `.claude/CLAUDE.md`).

Additional routes: `app/privacy/`, `app/terms/`, `app/delete-account/`. Legacy static HTML equivalents (`privacy.html`, `delete-account.html`, `reset-password.html`, `index_OLD.html`) exist at repo root — these are not served by Next and should generally be ignored unless explicitly working on them.

**API:** `app/api/waitlist/` — single POST endpoint that appends emails to a Google Sheet via `googleapis`. This is the only server-side logic in the app.

**Styling:** Tailwind with shadcn/ui conventions. `lib/utils.ts` provides the standard `cn()` helper (clsx + tailwind-merge). UI primitives live in `components/ui/`. Brand color tokens (black/white/#D4AF37 gold) are documented in `.claude/CLAUDE.md` — respect them when adding UI.

**Client components:** Most section components use `"use client"` because of framer-motion / interactive animations. Keep server/client boundaries explicit when adding routes.

## Conventions

- Absolute imports from repo root are **not** configured; use relative paths (`../components/Foo`).
- When changing copy, follow the messaging rules in `.claude/CLAUDE.md` — never use deprecated names (MindGarden, Foci) and never position Mind Clear as a general productivity tool.
