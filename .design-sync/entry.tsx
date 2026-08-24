// Design-system entry for /design-sync.
// The site itself never imports this — it exists only to give the converter a
// single curated export surface, since the marketing sections are default
// exports (which `export *` cannot pick up).
export { default as Hero } from "../components/marketing/Hero";
export { default as ProblemHook } from "../components/marketing/ProblemHook";
export { default as BrainDump } from "../components/marketing/BrainDump";
export { default as FocusFeature } from "../components/marketing/FocusFeature";
export { default as StuckFeature } from "../components/marketing/StuckFeature";
export { default as OverdueDrip } from "../components/marketing/OverdueDrip";
export { default as FeatureList } from "../components/marketing/FeatureList";
export { default as FounderStoryThread } from "../components/marketing/FounderStoryThread";
export { default as DownloadCTA } from "../components/marketing/DownloadCTA";
export { default as Footer } from "../components/marketing/Footer";

export { ThreadSection } from "../components/marketing/ThreadSection";
export { TaskCardMockup } from "../components/marketing/TaskCardMockup";
export { GooglePlayButton } from "../components/marketing/GooglePlayButton";

export { NotebookShell } from "../components/notebook/NotebookShell";
export { EntryRow } from "../components/notebook/EntryRow";
export { TopicChips } from "../components/notebook/TopicChips";
export { EntryHeader } from "../components/notebook/EntryHeader";
export { Prose } from "../components/notebook/Prose";

export { Button, buttonVariants } from "../components/ui/button";
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "../components/ui/card";
export { Badge, badgeVariants } from "../components/ui/badge";
export { Input } from "../components/ui/input";

import * as React from "react";

/**
 * The page shell every Golden Thread section must render inside.
 *
 * `.mc-page` defines the layout custom properties the `mc-*` classes read
 * (`--spine-x`, `--content-pad`, `--sect-pt`, `--sect-pb`) plus the cream
 * background and base type. Sections rendered outside it lose their indent
 * and collide with the ghost numeral. This is exactly the `<main>` wrapper
 * in `app/page.tsx`.
 */
export function MindClearPage({ children }: { children: React.ReactNode }) {
  return <main className="mc-page overflow-x-hidden">{children}</main>;
}
