import React from "react";
import { Heart, Zap, FlaskConical } from "lucide-react";
import { Card } from "./ui/card";

export default function Mission() {
  const values = [
    {
      icon: FlaskConical,
      title: "Purposeful Experiments",
      description: "I don't just build apps; I test solutions. Every project starts with a real-world problem and ends with a smarter way to solve it."
    },
    {
      icon: Zap,
      title: "Invisible Intelligence",
      description: "Leveraging powerful AI that works in the background. No complex prompts required—just helpful tools that know what you need."
    },
    {
      icon: Heart,
      title: "Built for Balance",
      description: "Success isn't about doing more; it's about struggling less. I design software that helps you stabilize your day so you can focus on what matters."
    }
  ];

  return (
    <section id="mission" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black">
            Turning AI into <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">Everyday Ease</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My mission is simple: use advanced technology to solve the 'small but heavy' problems of daily life.
            I experiment with AI to build intuitive tools that handle the mental load for you—so you can reclaim your time and your balance.
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