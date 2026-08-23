import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button } from "mind-clear-site";

/** Golden Thread treatment: cream surface, hairline border, serif heading. */
export const OnBrand = () => (
  <Card
    className="border-[#DEDCD2] shadow-none"
    style={{ maxWidth: 380, backgroundColor: "#F5F1E1", color: "#111111" }}
  >
    <CardHeader>
      <CardTitle className="text-2xl font-light" style={{ fontFamily: "var(--font-serif)" }}>
        Brain Dump
      </CardTitle>
      <CardDescription style={{ color: "#6B6B6B" }}>
        Everything swirling, in one place.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm" style={{ color: "#444444" }}>
        Type whatever's on your mind. Mind Clear reads it all and turns it into
        goals, tasks, and routines. In minutes.
      </p>
    </CardContent>
    <CardFooter>
      <Button
        variant="outline"
        className="border-2 border-[#6B5A20] text-[#6B5A20] hover:bg-[#E8E8E2]"
      >
        Try it
      </Button>
    </CardFooter>
  </Card>
);

/**
 * The raw card, straight from the Tailwind theme. `tailwind.config.js` still
 * maps `card` to the retired dark palette (#1E1E1E), so this renders dark on a
 * cream page — see the on-brand story below for the treatment the site uses.
 */
export const Raw = () => (
  <Card style={{ maxWidth: 380 }}>
    <CardHeader>
      <CardTitle>Brain Dump</CardTitle>
      <CardDescription>Everything swirling, in one place.</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm">
        Type whatever's on your mind. Mind Clear reads it all and turns it into
        goals, tasks, and routines.
      </p>
    </CardContent>
  </Card>
);
