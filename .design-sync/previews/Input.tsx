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

/** In context: the waitlist capture on a warm-cream panel. */
export const InContext = () => (
  <div
    className="flex flex-col gap-3 p-6 bg-cream-warm border border-hairline rounded-lg"
    style={{ maxWidth: 400 }}
  >
    <label className="text-xs uppercase tracking-[0.18em] text-gold-deep">Get notified</label>
    <Input placeholder="you@example.com" />
    <Button variant="outline">Notify me</Button>
  </div>
);
