// Entry HTML is generated at build time from repo-owned markdown, so it is
// trusted input. Nothing user-submitted reaches this component.
export function Prose({ html }: { html: string }) {
  return <div className="mc-prose" dangerouslySetInnerHTML={{ __html: html }} />;
}
