"use client";

import React, { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";

interface Screenshot {
  id: string;
  title: string;
  description: string;
  image: string;
}

const screenshots: Screenshot[] = [
  {
    id: "brain-dump",
    title: "Guided Brain Dump",
    description: "Transform overwhelming thoughts into manageable tasks with AI-powered organization",
    image: "/screenshots/brain-dump.png"
  },
  {
    id: "refine",
    title: "Refine Your Tasks",
    description: "Break down your thoughts into clear, actionable steps with intelligent categorization",
    image: "/screenshots/refine.png"
  },
  {
    id: "prioritize",
    title: "Prioritize with Ease",
    description: "Drag and drop tasks into priority zones that make sense for your workflow",
    image: "/screenshots/prioritize.png"
  },
  {
    id: "ai-chat",
    title: "AI Chat Assistant",
    description: "Get personalized help structuring your goals and tasks in a manageable way",
    image: "/screenshots/ai-chat.png"
  },
  {
    id: "tasks",
    title: "Task Management",
    description: "View and manage all your tasks with auto-scheduling and smart organization",
    image: "/screenshots/tasks.png"
  },
  {
    id: "calendar",
    title: "Calendar Integration",
    description: "See your tasks and goals in a calendar view with day, week, and month options",
    image: "/screenshots/calendar.png"
  },
  {
    id: "calendar-day",
    title: "Day View",
    description: "Focus on today with a detailed day view of your scheduled events and tasks",
    image: "/screenshots/calendar-day.png"
  },
  {
    id: "goals",
    title: "Goal Tracking",
    description: "Track your progress with milestones, steps, and visual progress indicators",
    image: "/screenshots/goals.png"
  },
  {
    id: "profile",
    title: "Profile & Settings",
    description: "Customize your experience with themes, notifications, and preferences",
    image: "/screenshots/profile.png"
  }
];

export default function ScreenshotGallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const nextScreenshot = useCallback(() => {
    setSelectedIndex((prev) => (prev + 1) % screenshots.length);
  }, []);

  const prevScreenshot = useCallback(() => {
    setSelectedIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  }, []);

  const openFullscreen = useCallback(() => {
    setIsFullscreen(true);
  }, []);

  const closeFullscreen = useCallback(() => {
    setIsFullscreen(false);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isFullscreen) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextScreenshot();
      if (e.key === "ArrowLeft") prevScreenshot();
      if (e.key === "Escape") closeFullscreen();
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isFullscreen, nextScreenshot, prevScreenshot, closeFullscreen]);

  return (
    <>
      <section className="py-32 px-6 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black">
              See Mind Clear
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">
                In Action
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience how Mind Clear transforms overwhelming thoughts into clear, manageable actions
              through an intuitive and beautiful interface.
            </p>
          </div>

          {/* Main Carousel */}
          <div className="relative mb-12">
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-12 border-2 border-gray-800 shadow-2xl overflow-hidden group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Screenshot Display */}
                <div className="relative aspect-[9/16] max-w-sm mx-auto mb-8 rounded-2xl overflow-hidden shadow-2xl bg-gray-800">
                  <div className="relative w-full h-full">
                    <img
                      src={screenshots[selectedIndex].image}
                      alt={screenshots[selectedIndex].title}
                      className="w-full h-full object-cover transition-opacity duration-500"
                      onError={(e) => {
                        // Fallback if image doesn't exist
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const placeholder = document.createElement('div');
                        placeholder.className = 'w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-gray-500';
                        placeholder.textContent = 'Screenshot placeholder';
                        target.parentElement?.appendChild(placeholder);
                      }}
                    />
                    <button
                      onClick={openFullscreen}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label="View fullscreen"
                    >
                      <Maximize2 className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevScreenshot}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 z-20"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={nextScreenshot}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 z-20"
                  aria-label="Next screenshot"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>

                {/* Screenshot Info */}
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {screenshots[selectedIndex].title}
                  </h3>
                  <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    {screenshots[selectedIndex].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
            {screenshots.map((screenshot, index) => (
              <button
                key={screenshot.id}
                onClick={() => setSelectedIndex(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative aspect-[9/16] rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  selectedIndex === index
                    ? "border-yellow-500 scale-105 shadow-lg shadow-yellow-500/50"
                    : "border-gray-300 hover:border-yellow-500/50 hover:scale-105"
                }`}
                aria-label={`View ${screenshot.title}`}
              >
                <div className="relative w-full h-full bg-gray-800">
                  <img
                    src={screenshot.image}
                    alt={screenshot.title}
                    className={`w-full h-full object-cover transition-all duration-300 ${
                      selectedIndex === index ? "opacity-100" : "opacity-70 hover:opacity-100"
                    }`}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  {selectedIndex === index && (
                    <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 to-transparent" />
                  )}
                </div>
                {hoveredIndex === index && selectedIndex !== index && (
                  <div className="absolute inset-0 bg-yellow-500/10 transition-opacity duration-300" />
                )}
              </button>
            ))}
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  selectedIndex === index
                    ? "bg-yellow-500 w-8"
                    : "bg-gray-300 hover:bg-yellow-500/50"
                }`}
                aria-label={`Go to screenshot ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeFullscreen}
        >
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 z-10"
            aria-label="Close fullscreen"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-[9/16] max-w-sm mx-auto rounded-2xl overflow-hidden shadow-2xl bg-gray-800">
              <img
                src={screenshots[selectedIndex].image}
                alt={screenshots[selectedIndex].title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-center mt-6">
              <h3 className="text-3xl font-bold text-white mb-2">
                {screenshots[selectedIndex].title}
              </h3>
              <p className="text-gray-400 text-lg">
                {screenshots[selectedIndex].description}
              </p>
            </div>

            {/* Navigation in fullscreen */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevScreenshot();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextScreenshot();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Fullscreen indicator dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  selectedIndex === index
                    ? "bg-yellow-500 w-8"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to screenshot ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

