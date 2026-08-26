// components/marketing/Footer.tsx
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/notebook", label: "Notebook" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/delete-account", label: "Delete Account" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim() || status === "loading") return;
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
        setErrorMsg(data.error ?? "Something went wrong. Try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Try again.");
    }
  }

  return (
    <footer
      className="px-6 py-16"
      style={{ backgroundColor: "#E8E8E2", borderTop: "1px solid rgba(17,17,17,0.14)" }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-12"
        style={{ paddingLeft: "var(--content-pad)", paddingRight: "1.5rem" }}
      >
        {/* Wordmark */}
        <div>
          <p
            className="text-2xl mb-3"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 300, color: "#111111" }}
          >
            Mind Clear
          </p>
          <p className="text-sm max-w-xs" style={{ color: "#6B6B6B", fontWeight: 300 }}>
            For brains that work differently.
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer">
          <p
            className="text-xs uppercase tracking-[0.18em] mb-4"
            style={{ color: "#6B5A20", fontWeight: 300 }}
          >
            Navigate
          </p>
          <ul className="space-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm transition-colors hover:opacity-70"
                  style={{ color: "#444444", fontWeight: 300 }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* iOS waitlist */}
        <div>
          <p
            className="text-xs uppercase tracking-[0.18em] mb-4"
            style={{ color: "#6B5A20", fontWeight: 300 }}
          >
            iOS coming soon
          </p>
          <p className="text-sm mb-4" style={{ color: "#444444", fontWeight: 300 }}>
            Get notified when Mind Clear lands on iPhone.
          </p>
          {status === "success" ? (
            <p className="text-sm" style={{ color: "#6B5A20", fontWeight: 300 }}>
              You're on the list. We'll let you know.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="relative max-w-xs">
              <label htmlFor="waitlist-email" className="sr-only">
                Email address
              </label>
              <input
                id="waitlist-email"
                type="email"
                required
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent pr-10 py-2 text-sm focus:outline-none"
                style={{
                  borderBottom: "1px solid rgba(17,17,17,0.3)",
                  color: "#111111",
                  fontWeight: 300,
                }}
              />
              <button
                type="submit"
                aria-label="Join the iOS waitlist"
                disabled={status === "loading"}
                className="absolute right-0 top-1/2 -translate-y-1/2 transition-opacity hover:opacity-70"
                style={{ color: "#6B5A20" }}
              >
                {status === "loading" ? (
                  <Loader2 size={18} strokeWidth={1.5} className="animate-spin" />
                ) : (
                  <ArrowRight size={18} strokeWidth={1.5} />
                )}
              </button>
              {status === "error" && (
                <p className="text-xs mt-2" style={{ color: "#EF4444", fontWeight: 300 }}>
                  {errorMsg}
                </p>
              )}
            </form>
          )}
        </div>
      </div>

      <p
        className="mt-16 text-xs"
        style={{
          paddingLeft: "var(--content-pad)",
          color: "#888888",
          fontWeight: 300,
        }}
      >
        © 2026 Mind Clear. All rights reserved.
      </p>
    </footer>
  );
}
