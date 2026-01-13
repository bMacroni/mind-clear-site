"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import PhoneMockup from "./PhoneMockup";

export default function FeaturedProject() {
  return (
    <section id="featured-project" className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Column: Text */}
          <div className="space-y-8 relative z-10">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-xs font-mono tracking-wider text-gray-600">
              PROJECT 001 // ACTIVE
            </div>

            <div className="space-y-4">
              <h2 className="text-6xl md:text-8xl font-bold text-black tracking-tight leading-none">
                Mind Clear
              </h2>
              <p className="text-2xl md:text-3xl text-gray-400 font-light">
                Your Executive Function, Outsourced.
              </p>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              ADHD brains don't need a tougher calendar. They need a translator.
              Mind Clear uses AI to turn overwhelming projects into dopamine-ready tasks.
            </p>

            <div className="flex items-center gap-4 text-sm font-mono text-gray-400 pt-2 border-t border-gray-100 max-w-md">
              <span>Built with:</span>
              <span className="text-gray-600">Node.js</span>
              <span className="text-gray-300">•</span>
              <span className="text-gray-600">AI</span>
              <span className="text-gray-300">•</span>
              <span className="text-gray-600">React</span>
            </div>

            <div className="pt-4">
              <Button
                size="lg"
                disabled
                className="bg-gray-100 text-gray-400 cursor-not-allowed rounded-full px-8 py-6 text-lg shadow-none"
              >
                Case Study Coming Soon
              </Button>
            </div>
          </div>

          {/* Right Column: Visual */}
          <div className="relative">
            {/* Floating Animation */}
            <motion.div
              animate={{ y: [-15, 15, -15] }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              {/* Super Shadow Container */}
              <div className="relative">
                <div className="absolute inset-0 bg-black/20 blur-[60px] rounded-[40px] translate-y-20 scale-90" />
                <PhoneMockup currentScreen="brain-dump" />
              </div>
            </motion.div>

            {/* Background contextual numbers/decorations */}
            <div className="absolute -top-20 -right-20 text-[20rem] font-bold text-gray-50 opacity-50 z-0 select-none pointer-events-none">
              01
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}