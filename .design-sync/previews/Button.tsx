import { Button } from "mind-clear-site";

/** The variant axis, all on the Golden Thread palette. */
export const Variants = () => (
  <div className="flex flex-wrap items-center gap-3">
    {(["default", "secondary", "outline", "ghost", "link", "destructive"] as const).map((v) => (
      <Button key={v} variant={v}>
        {v}
      </Button>
    ))}
  </div>
);

/** Sizes. */
export const Sizes = () => (
  <div className="flex flex-wrap items-center gap-4">
    {(["sm", "default", "lg"] as const).map((size) => (
      <Button key={size} size={size}>
        {size}
      </Button>
    ))}
  </div>
);

/**
 * How the site uses it: the legal pages' "Back to Mind Clear" control — the
 * outline variant at `lg`, with a heavier border and gold-deep text.
 */
export const AsUsedOnSite = () => (
  <div className="flex flex-wrap items-center gap-4">
    <Button size="lg" variant="outline" className="border-2 text-gold-deep px-8 py-6 text-lg">
      Back to Mind Clear
    </Button>
    <Button variant="outline" className="border-2 border-gold-deep text-gold-deep">
      Read the privacy policy
    </Button>
  </div>
);

/** Disabled. */
export const Disabled = () => (
  <div className="flex flex-wrap items-center gap-3">
    <Button disabled>Primary</Button>
    <Button variant="outline" disabled>
      Outline
    </Button>
  </div>
);
