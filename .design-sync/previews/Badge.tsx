import { Badge } from "mind-clear-site";

/** The variant axis, on the Golden Thread palette. */
export const Variants = () => (
  <div className="flex flex-wrap items-center gap-3">
    {(["default", "secondary", "outline", "destructive"] as const).map((v) => (
      <Badge key={v} variant={v}>
        {v}
      </Badge>
    ))}
  </div>
);

/** As status chips, matching the pills TaskCardMockup renders. */
export const TaskChips = () => (
  <div className="flex flex-wrap items-center gap-3">
    <Badge variant="outline" className="font-normal">
      3 days waiting
    </Badge>
    <Badge className="bg-gold text-gold-dark hover:bg-gold font-normal">Suggested first</Badge>
    <Badge variant="secondary" className="font-normal">
      Routine
    </Badge>
  </div>
);
