import React from "react";
import { Brain, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export default function FeaturedProject() {
  const features = [
    "AI-powered task breakdown for overwhelming projects",
    "Smart prioritization that understands ADHD challenges",
    "Gentle reminders designed to support, not overwhelm",
    "Guided Brain dump to help you get your thoughts out of your head"
  ];

  return (
    <section id="featured-project" className="py-32 px-6 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-yellow-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-yellow-500/10 text-yellow-500 border-yellow-500/30 px-4 py-2 text-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Featured Project
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Mind Clear for the
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              ADHD Brain
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A productivity companion that understands how ADHD minds work, using AI to transform 
            chaos into clarity and help you accomplish what matters most.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Mockup side */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12 border-2 border-gray-700 hover:border-yellow-500/50 transition-all duration-500">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">Mind Clear</div>
                    <div className="text-gray-400 text-sm">ADHD Productivity</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white/5 rounded-lg p-4 border border-white/10 animate-pulse" style={{ animationDelay: `${i * 200}ms` }}>
                      <div className="h-3 bg-gradient-to-r from-gray-600 to-gray-700 rounded w-3/4 mb-2" />
                      <div className="h-2 bg-gray-700 rounded w-1/2" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Features side */}
          <div className="space-y-8">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-8 h-8 rounded-full bg-yellow-500/10 border-2 border-yellow-500/30 flex items-center justify-center mt-1 group-hover:bg-yellow-500 group-hover:scale-110 transition-all duration-300">
                    <CheckCircle2 className="w-5 h-5 text-yellow-500 group-hover:text-black" strokeWidth={2.5} />
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed flex-1">{feature}</p>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold px-8 py-6 text-lg shadow-xl shadow-yellow-500/25 group"
              >
                Learn More About Mind Clear
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-gray-500 text-sm mt-4">Coming Soon • Join the waitlist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}