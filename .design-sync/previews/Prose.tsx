import { Prose } from "mind-clear-site";
import { sampleEntry } from "./_entry-fixture";

/** Rendered entry markdown. The stylesheet gives headings, lists, and quotes their treatment. */
export const Default = () => (
  <div className="px-8 py-8">
    <Prose html={sampleEntry.html} />
  </div>
);

/** The measure is capped inside the component, so a long paragraph still reads well. */
export const SingleParagraph = () => (
  <div className="px-8 py-8">
    <Prose html="<p>The plan is not the work. It is the thing that lets you stop holding the work in your head, which is where it has been costing you all day.</p>" />
  </div>
);
