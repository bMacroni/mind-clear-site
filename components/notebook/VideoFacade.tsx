"use client";

import { useState } from "react";

// A click-to-load YouTube facade.
//
// Nothing from YouTube loads until the reader presses play: no iframe, no
// script, no cookie. That is the whole reason this component exists rather
// than a plain embed. A standard YouTube embed sets cookies on page load,
// before anyone has chosen to watch anything, which needs a consent banner and
// contradicts a brand built on being calm and non-extractive.
//
// The embed host is youtube-nocookie.com, which YouTube serves without its
// tracking cookies until playback begins.
//
// Consequences of that choice, so nobody "simplifies" it back:
// - Do not render the iframe unconditionally.
// - Do not add YouTube's iframe API script to get events. It tracks.
// - Keep the poster local. Loading YouTube's thumbnail CDN would leak the
//   reader's IP to Google before they clicked, defeating the point.

type VideoFacadeProps = {
  /** The YouTube video id, the part after `v=`. */
  id: string;
  /** Spoken aloud by screen readers and shown while loading. */
  title: string;
  /** Local poster image. Must not be a YouTube-hosted thumbnail. */
  poster: string;
  /** Human-readable running time, e.g. "5 min". */
  duration?: string;
  caption?: string;
};

export function VideoFacade({ id, title, poster, duration, caption }: VideoFacadeProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <figure className="my-10 max-w-[44rem]">
      <div className="relative overflow-hidden rounded-lg border border-hairline bg-cream-warm">
        <div className="relative aspect-video">
          {playing ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="group absolute inset-0 h-full w-full cursor-pointer"
              aria-label={`Play video: ${title}${duration ? `, ${duration}` : ""}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={poster}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/10"
              />
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-gold-deep bg-cream shadow-lg transition-transform group-hover:scale-105"
              >
                {/* A triangle, nudged right so it reads as centred. */}
                <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6" fill="currentColor">
                  <path d="M8 5v14l11-7z" className="text-gold-deep" fill="currentColor" />
                </svg>
              </span>
            </button>
          )}
        </div>
        {!playing && duration ? (
          <p className="border-t border-hairline px-4 py-2 text-xs uppercase tracking-[0.14em] text-gold-deep">
            {title} · {duration}
          </p>
        ) : null}
      </div>
      {caption ? (
        <figcaption className="mt-3 text-xs text-ink-soft">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
