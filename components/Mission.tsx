import React from "react";
import { Heart, Brain, Zap } from "lucide-react";
import { Card } from "./ui/card";

export default function Mission() {
  const values = [
    {
      icon: Brain,
      title: "AI for Everyone",
      description: "Making sophisticated AI accessible and understandable for everyday people, not just tech experts."
    },
    {
      icon: Heart,
      title: "Empathy-Driven Design",
      description: "Building with deep understanding of real challenges people face, creating solutions that truly help."
    },
    {
      icon: Zap,
      title: "Simplify Complexity",
      description: "Transforming overwhelming tasks into clear, manageable actions that empower users to thrive."
    }
  ];

  return (
    <section id="mission" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">Mission</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            To democratize artificial intelligence by creating beautiful, intuitive applications 
            that help people become the best version of themselves.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card 
              key={index}
              className="group p-8 border-2 border-gray-100 hover:border-yellow-500/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-white"
            >
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <value.icon className="w-8 h-8 text-yellow-500" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}