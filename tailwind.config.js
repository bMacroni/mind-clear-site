/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // ── Golden Thread palette ──────────────────────────────────────────
        // The named families. Prefer these when writing new markup:
        // bg-cream, bg-cream-warm, text-ink-muted, border-hairline, text-gold-deep.
        cream: {
          DEFAULT: "#E8E8E2", // page background
          warm: "#F5F1E1",    // cards, raised panels
        },
        ink: {
          DEFAULT: "#111111", // headlines, primary text
          muted: "#444444",   // body copy
          soft: "#6B6B6B",    // tertiary text
          faint: "#888888",   // captions, metadata
        },
        gold: {
          DEFAULT: "#D4AF37", // the thread, nodes, focus states
          deep: "#6B5A20",    // gold used as text (eyebrows, labels)
          light: "#E6CF8E",   // gold at low emphasis
          dark: "#2A2A1A",    // text on gold fills
        },
        hairline: "#DEDCD2",  // borders, rules

        // ── shadcn/ui semantic slots, mapped onto Golden Thread ────────────
        // components/ui/* read these. Changing one restyles those primitives.
        border: "#DEDCD2",
        input: "#DEDCD2",
        ring: "#D4AF37",
        background: "#E8E8E2",
        foreground: "#111111",
        primary: {
          DEFAULT: "#111111",
          foreground: "#F5F1E1",
        },
        secondary: {
          DEFAULT: "#F5F1E1",
          foreground: "#111111",
        },
        accent: {
          DEFAULT: "#F5F1E1",
          foreground: "#6B5A20",
        },
        muted: {
          DEFAULT: "#F5F1E1",
          foreground: "#6B6B6B",
        },
        card: {
          DEFAULT: "#F5F1E1",
          foreground: "#111111",
        },
        popover: {
          DEFAULT: "#F5F1E1",
          foreground: "#111111",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#F5F1E1",
        },
        success: "#10B981",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
