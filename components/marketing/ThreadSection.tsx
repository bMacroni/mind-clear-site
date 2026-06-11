// components/marketing/ThreadSection.tsx
// One node on the golden thread: spine segment, node circle, numbered
// editorial eyebrow, ghost numeral, content indented right of the spine.
interface ThreadSectionProps {
  number: string;
  label: string;
  ariaLabel: string;
  children: React.ReactNode;
}

export function ThreadSection({
  number,
  label,
  ariaLabel,
  children,
}: ThreadSectionProps) {
  return (
    <section aria-label={ariaLabel} className="relative overflow-hidden">
      <div className="mc-spine" aria-hidden="true" />
      <div className="mc-node" aria-hidden="true" />
      <p className="mc-ghost" aria-hidden="true">
        {number}
      </p>
      <div className="mc-content">
        <p className="flex items-baseline gap-3 mb-8">
          <span
            className="text-base italic"
            style={{ fontFamily: "var(--font-serif)", color: "#6B5A20" }}
          >
            № {number}
          </span>
          <span
            className="text-xs uppercase tracking-[0.18em]"
            style={{ color: "#6B5A20" }}
          >
            {label}
          </span>
        </p>
        {children}
      </div>
    </section>
  );
}
