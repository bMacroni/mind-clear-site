import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

interface HeroProps {
  scrollY: number;
}

export default function Hero({ scrollY }: HeroProps) {
  const parallaxOffset = scrollY * 0.5;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated background glow */}
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-600/20 rounded-full blur-3xl animate-pulse"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000"
        style={{ transform: `translateY(${-parallaxOffset}px)` }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-yellow-600/30 backdrop-blur-sm mb-8">
          <Sparkles className="w-4 h-4 text-yellow-500" />
          <span className="text-sm text-gray-300">AI-Powered Solutions for Everyday Life</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white leading-tight">
          Mind Clear
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
            Studio
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Bringing the transformative power of AI into the hands of everyday people,
          one thoughtfully crafted app at a time.
        </p>

        <div className="flex justify-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold px-8 py-6 text-lg shadow-lg shadow-yellow-500/25 group"
            onClick={() => document.getElementById('featured-project')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Mind Clear
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Decorative grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />
    </section>
  );
}