import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button } from "mind-clear-site";

/** The default card: warm-cream surface, hairline border, ink text. */
export const Default = () => (
  <Card style={{ maxWidth: 380 }}>
    <CardHeader>
      <CardTitle className="font-serif text-2xl font-light">Brain Dump</CardTitle>
      <CardDescription>Everything swirling, in one place.</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-ink-muted">
        Type whatever's on your mind. Mind Clear reads it all and turns it into
        goals, tasks, and routines. In minutes.
      </p>
    </CardContent>
    <CardFooter>
      <Button variant="outline">Try it</Button>
    </CardFooter>
  </Card>
);

/** Two cards side by side, as a feature pair. */
export const Pair = () => (
  <div className="flex flex-wrap gap-4">
    {[
      { t: "Focus mode", d: "One task at a time.", b: "Mind Clear picks one thing. Not a list — one task." },
      { t: "Stuck helper", d: "When you can't start.", b: "It splits the task into micro-steps, or reframes it." },
    ].map((c) => (
      <Card key={c.t} style={{ maxWidth: 300 }}>
        <CardHeader>
          <CardTitle className="font-serif text-xl font-light">{c.t}</CardTitle>
          <CardDescription>{c.d}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-ink-muted">{c.b}</p>
        </CardContent>
      </Card>
    ))}
  </div>
);
