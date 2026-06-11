// app/case-studies/mind-clear/_components/GooglePlayButton.tsx
interface GooglePlayButtonProps {
  className?: string;
}

export function GooglePlayButton({ className = "" }: GooglePlayButtonProps) {
  return (
    <a
      href="#"
      aria-label="Get it on Google Play"
      className={`inline-flex items-center gap-3 px-6 py-3 rounded-full transition-opacity hover:opacity-80 ${className}`}
      style={{ backgroundColor: "#D4AF37", boxShadow: "0 2px 8px rgba(0,0,0,0.18)" }}
    >
      <svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M1 1L10 10L1 19V1Z" fill="#111111" />
        <path d="M1 1L14 6.5L10 10L1 1Z" fill="#111111" opacity="0.8" />
        <path d="M1 19L14 13.5L10 10L1 19Z" fill="#111111" opacity="0.8" />
        <path
          d="M14 6.5L17 10L14 13.5L10 10L14 6.5Z"
          fill="#111111"
          opacity="0.6"
        />
      </svg>
      <div className="text-left leading-tight" style={{ color: "#111111" }}>
        <div
          className="text-[10px] tracking-[0.06em] uppercase"
          style={{ fontWeight: 300 }}
        >
          Get it on
        </div>
        <div className="text-sm" style={{ fontWeight: 300 }}>
          Google Play
        </div>
      </div>
    </a>
  );
}
