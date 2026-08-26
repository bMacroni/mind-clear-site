import type { ReactNode } from "react";

type NotebookShellProps = {
  /** Uppercase, letter-spaced label above the heading. */
  eyebrow: string;
  /** The oversized translucent character behind the heading. */
  ghost: string;
  title: ReactNode;
  intro?: string;
  children: ReactNode;
};

export function NotebookShell({ eyebrow, ghost, title, intro, children }: NotebookShellProps) {
  return (
    <section aria-label={eyebrow} className="relative overflow-hidden">
      <div className="mc-spine" aria-hidden="true" />
      <div className="mc-node" aria-hidden="true" />
      <p className="mc-ghost" aria-hidden="true">
        {ghost}
      </p>
      <div className="mc-content">
        <p className="flex items-baseline gap-3 mb-8">
          <span className="font-serif italic text-base text-gold-deep">№</span>
          <span className="text-xs uppercase tracking-[0.18em] text-gold-deep">{eyebrow}</span>
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-light leading-tight text-ink">
          {title}
        </h1>
        {intro ? <p className="mt-6 max-w-xl text-lg text-ink-muted">{intro}</p> : null}
        {children}
      </div>
    </section>
  );
}
