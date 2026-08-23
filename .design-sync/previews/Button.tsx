import { Button } from "mind-clear-site";

/**
 * The only Button styling that appears on mind-clear.com — the legal pages'
 * "Back to Mind Clear" control. Note the fill is BLACK, not cream: `outline`
 * resolves `bg-background`, and the Tailwind theme still maps that to the
 * retired #121212. Only the border and text are Golden Thread.
 */
export const AsUsedOnSite = () => (
  <div className="flex flex-wrap items-center gap-4">
    <Button
      size="lg"
      variant="outline"
      className="border-2 border-[#DEDCD2] text-[#6B5A20] hover:bg-[#F5F1E1] hover:border-[#6B5A20] px-8 py-6 text-lg"
    >
      Back to Mind Clear
    </Button>
    <Button
      variant="outline"
      className="border-2 border-[#6B5A20] text-[#6B5A20] hover:bg-[#F5F1E1]"
    >
      Read the privacy policy
    </Button>
  </div>
);

/** Sizes, shown with the on-brand treatment. */
export const Sizes = () => (
  <div className="flex flex-wrap items-center gap-4">
    {(["sm", "default", "lg"] as const).map((size) => (
      <Button
        key={size}
        size={size}
        variant="outline"
        className="border-2 border-[#DEDCD2] text-[#6B5A20] hover:bg-[#F5F1E1]"
      >
        {size}
      </Button>
    ))}
  </div>
);

/**
 * The raw shadcn variants, unstyled by the brand. These render from the
 * Tailwind theme in `tailwind.config.js`, which still holds the retired dark
 * palette — `default` and `secondary` here are NOT Golden Thread colors.
 * Shown so the mismatch is visible, not so it gets copied.
 */
export const RawVariants = () => (
  <div className="flex flex-col gap-3">
    <p className="text-xs" style={{ color: "#6B6B6B" }}>
      Retired dark-theme colors — none of these are Golden Thread.
    </p>
    <div className="flex flex-wrap items-center gap-3">
    {(["default", "secondary", "outline", "ghost", "link", "destructive"] as const).map((v) => (
      <Button key={v} variant={v}>
        {v}
      </Button>
    ))}
    </div>
  </div>
);
