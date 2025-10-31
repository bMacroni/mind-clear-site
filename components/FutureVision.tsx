import React from "react";
import { Sparkles, Calendar, MessageSquare, TrendingUp } from "lucide-react";
import { Card } from "./ui/card";

export default function FutureVision() {
  const upcomingProjects = [
    {
      icon: Calendar,
      title: "AI Life Planner",
      description: "Intelligent scheduling that adapts to your energy levels and priorities",
      status: "Planned"
    },
    {
      icon: MessageSquare,
      title: "Clarity Coach",
      description: "AI-powered journaling for mental clarity and personal growth",
      status: "In Research"
    },
    {
      icon: TrendingUp,
      title: "Habit Builder",
      description: "Science-backed habit formation with personalized AI guidance",
      status: "Exploring"
    }
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-yellow-600" />
            <span className="text-sm font-medium text-gray-700">The Future</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black">
            What's <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">Next</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mind Clear is just the beginning. We're building a suite of AI-powered tools 
            to help you thrive in every aspect of life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {upcomingProjects.map((project, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden p-8 border-2 border-gray-100 hover:border-yellow-500/30 transition-all duration-500 bg-gradient-to-br from-white to-gray-50 hover:shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-gray-900 to-black flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <project.icon className="w-7 h-7 text-yellow-500" strokeWidth={2} />
                </div>
                
                <div className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium mb-4">
                  {project.status}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-black">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}