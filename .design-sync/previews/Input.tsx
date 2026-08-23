import { Input, Button } from "mind-clear-site";

/** Default field. */
export const Default = () => (
  <div style={{ maxWidth: 360 }}>
    <Input placeholder="you@example.com" />
  </div>
);

/** States that render statically. */
export const States = () => (
  <div className="flex flex-col gap-3" style={{ maxWidth: 360 }}>
    <Input placeholder="Empty" />
    <Input defaultValue="brian@mind-clear.com" />
    <Input placeholder="Disabled" disabled />
  </div>
);

/** In context: the waitlist capture on a cream surface. */
export const OnCream = () => (
  <div
    className="flex flex-col gap-3 p-6"
    style={{ maxWidth: 400, backgroundColor: "#F5F1E1", border: "1px solid #DEDCD2", borderRadius: 8 }}
  >
    <label className="text-xs uppercase tracking-[0.18em]" style={{ color: "#6B5A20" }}>
      Get notified
    </label>
    <Input placeholder="you@example.com" className="bg-white border-[#DEDCD2]" />
    <Button
      variant="outline"
      className="border-2 border-[#6B5A20] text-[#6B5A20] hover:bg-[#E8E8E2]"
    >
      Notify me
    </Button>
  </div>
);
