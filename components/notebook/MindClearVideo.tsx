import { VideoFacade } from "./VideoFacade";

// The "Mind Clear for ADHD" overview, shown at the foot of every notebook entry.
//
// ── TO PUBLISH ────────────────────────────────────────────────────────────
// Upload Mind_Clear_for_ADHD.mp4 to YouTube, then put its id here. The id is
// the part after `v=` in the watch URL:
//   https://www.youtube.com/watch?v=dQw4w9WgXcQ  ->  "dQw4w9WgXcQ"
// Unlisted works. The embed uses youtube-nocookie.com either way.
const YOUTUBE_ID = "";

const TITLE = "Mind Clear for ADHD";
const DURATION = "6 min";
const POSTER = "/notebook/mind-clear-for-adhd-poster.jpg";

export function MindClearVideo() {
  // Until the video is up, show the poster with an honest label rather than a
  // play button that leads nowhere. A dead play button is worse than no video,
  // and an unconditional embed of an empty id renders a YouTube error card.
  if (!YOUTUBE_ID) {
    return (
      <figure className="my-10 max-w-[44rem]">
        <div className="overflow-hidden rounded-lg border border-hairline bg-cream-warm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={POSTER} alt={TITLE} className="w-full" loading="lazy" />
          <p className="border-t border-hairline px-4 py-2 text-xs uppercase tracking-[0.14em] text-ink-soft">
            {TITLE} · coming soon
          </p>
        </div>
      </figure>
    );
  }

  return (
    <VideoFacade
      id={YOUTUBE_ID}
      title={TITLE}
      poster={POSTER}
      duration={DURATION}
      caption="A walk through what Mind Clear does, if you would rather watch than read."
    />
  );
}
