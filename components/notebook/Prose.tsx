// Entry HTML is generated at build time from repo-owned markdown. remark-html
// (see lib/notebook.ts) sanitizes its output by default, so this isn't a raw
// HTML passthrough: any raw HTML written inside an entry gets stripped, not
// rendered.
export function Prose({ html }: { html: string }) {
  return <div className="mc-prose" dangerouslySetInnerHTML={{ __html: html }} />;
}
