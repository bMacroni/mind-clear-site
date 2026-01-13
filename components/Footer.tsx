"use client";

import React, { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setMessage("You have been added to the subject list.");
      setEmail("");
    }, 1500);
  };

  return (
    <footer className="bg-[#121212] text-white py-24 border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 gap-12 lg:gap-24">

        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-8">
          <h3 className="text-3xl md:text-5xl font-serif tracking-tight text-white">
            Mind Clear <span className="font-sans font-light text-gray-500">Studio</span>
          </h3>
          <p className="text-gray-400 max-w-sm text-lg font-light leading-relaxed">
            <span className="text-[#FFD700]">Orchestrating Intelligence.</span>
            <br />
            Turning complex AI capabilities into everyday ease for the neurodivergent mind.
          </p>

        </div>

        {/* Links Column */}
        <div className="space-y-6">
          <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest">Navigation</h4>
          <ul className="space-y-3 text-gray-400">
            <li><Link href="/" className="hover:text-[#8f00ff] transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-gray-700 group-hover:bg-[#8f00ff] transition-colors" /> Lab</Link></li>
            <li><Link href="#" className="text-gray-600 cursor-not-allowed flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-gray-800" /> Case Study: Coming Soon</Link></li>

          </ul>
        </div>

        {/* Waitlist Column */}
        <div className="space-y-6">
          <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest">Join the Beta</h4>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative group">
              <Input
                type="email"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-0 border-b border-white/20 text-white placeholder:text-gray-700 focus:border-[#FFD700] rounded-none px-0 py-6 text-lg focus:ring-0 transition-all font-light"
                required
              />
              <Button
                type="submit"
                disabled={isLoading || message !== ""}
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-transparent hover:bg-transparent text-gray-500 group-focus-within:text-[#FFD700] transition-colors p-0"
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <ArrowRight className="w-5 h-5" />}
              </Button>
            </div>
            {message && <p className="text-[#FFD700] text-sm font-mono animate-in fade-in slide-in-from-bottom-2">{message}</p>}
          </form>

          <div className="pt-12 flex flex-col gap-2 text-xs text-gray-700 font-mono">
            <div className="flex gap-4">
              <Link href="#" className="hover:text-gray-500 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-gray-500 transition-colors">Terms of Service</Link>
            </div>
            <span>© 2025 Mind Clear Studio. All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
