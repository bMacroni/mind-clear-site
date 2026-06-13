// components/marketing/GooglePlayButton.tsx
// Official "Get it on Google Play" badge. Per Google Play badge guidelines
// the badge artwork must be used unaltered (no recoloring, no rebuilding,
// no added text) — so this renders the official asset as-is.
interface GooglePlayButtonProps {
  className?: string;
  /** Rendered badge height in px. Width scales to preserve the badge ratio. */
  height?: number;
}

export function GooglePlayButton({
  className = "",
  height = 56,
}: GooglePlayButtonProps) {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.foci.mobile"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get it on Google Play"
      className={`inline-block transition-opacity hover:opacity-80 ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/badges/google-play-badge.svg"
        alt="Get it on Google Play"
        height={height}
        style={{ height, width: "auto", display: "block" }}
      />
    </a>
  );
}
