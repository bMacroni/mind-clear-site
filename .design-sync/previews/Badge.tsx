import { Badge } from "mind-clear-site";

/** The on-brand equivalent, matching the pills TaskCardMockup uses. */
export const OnBrand = () => (
  <div className="flex flex-wrap items-center gap-3">
    <Badge
      variant="outline"
      className="border-[#DEDCD2] text-[#6B5A20] bg-[#F5F1E1] font-normal"
    >
      3 days waiting
    </Badge>
    <Badge className="bg-[#D4AF37] text-[#2A2A1A] hover:bg-[#D4AF37] font-normal">
      Suggested first
    </Badge>
  </div>
);

/**
 * The raw shadcn variants. These read from the Tailwind theme in
 * `tailwind.config.js`, which still holds the retired dark palette — they are
 * not Golden Thread colors.
 */
export const Variants = () => (
  <div className="flex flex-col gap-3">
    <p className="text-xs" style={{ color: "#6B6B6B" }}>
      Retired dark-theme colors — `outline` is near-white text, invisible on cream.
    </p>
    <div className="flex flex-wrap items-center gap-3">
    {(["default", "secondary", "outline", "destructive"] as const).map((v) => (
      <Badge key={v} variant={v}>
        {v}
      </Badge>
    ))}
    </div>
  </div>
);
