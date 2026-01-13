import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../../../components/ui/button";

export default function MindClearCaseStudy() {
    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-gray-100">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">
                    <Link
                        href="/"
                        className="text-sm font-mono text-gray-500 hover:text-black transition-colors flex items-center gap-2"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        BACK TO LAB
                    </Link>
                </div>
            </nav>

            <main className="pt-32 pb-24 px-6">
                <article className="max-w-2xl mx-auto">

                    {/* Header */}
                    <header className="mb-20 space-y-8">
                        <span className="inline-block text-gray-400 font-mono text-sm tracking-widest">
                            EXPERIMENT 001 // CASE STUDY
                        </span>

                        <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight text-gray-900">
                            Mind Clear: Your Executive Function, Outsourced.
                        </h1>

                        <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-mono text-gray-500 border-y border-gray-100 py-6">
                            <span>Role: Solo Dev & PM</span>
                            <span className="text-gray-300">|</span>
                            <span>Stack: Node.js, React, OpenAI</span>
                            <span className="text-gray-300">|</span>
                            <span>Status: Beta</span>
                        </div>
                    </header>

                    {/* Vertical Stack Content */}
                    <div className="space-y-24">

                        {/* The Friction */}
                        <section className="pl-6 border-l-4 border-red-100">
                            <h2 className="text-2xl font-serif font-bold mb-4">The Friction</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                For the ADHD brain, the gap between "knowing what to do" and "doing it" is a canyon.
                                This is often called <strong>ADHD paralysis</strong>. Traditional calendars fail because they assume
                                you can just "start." They don't account for the overwhelming mental load of breaking a
                                complex project (like "Clean the Garage") into safe, actionable steps.
                            </p>
                        </section>

                        {/* The Hypothesis */}
                        <section>
                            <blockquote className="text-3xl md:text-4xl font-serif italic text-gray-800 leading-normal pl-8 border-l-2 border-black">
                                "If we remove the planning phase, we unlock the doing phase."
                            </blockquote>
                        </section>

                        {/* The Build */}
                        <section className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-serif font-bold">The Build</h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    I built a Node.js backend that acts as a middleware between the user's raw thoughts and OpenAI's reasoning models.
                                    The system doesn't just "summarize"; it actively decomposes threats.
                                </p>
                            </div>

                            {/* Code Visual */}
                            <div className="bg-gray-50 rounded p-6 font-mono text-xs md:text-sm text-gray-600 overflow-x-auto border border-gray-100 shadow-sm">
                                <pre>
                                    {`// Parse user intent
const breakdownTask = async (rawInput) => {
  const complexity = analyzeTokenCount(rawInput);
  
  if (complexity > threshold) {
    return ai.decompose({
      goal: rawInput,
      steps: 3, // Keep it comfortably small
      tone: "supportive_urgent"
    });
  }
  return simpleTask(rawInput);
}`}
                                </pre>
                            </div>
                        </section>

                        {/* The Impact */}
                        <section className="pl-6 border-l-4 border-green-100">
                            <h2 className="text-2xl font-serif font-bold mb-4">The Impact</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Early testers reported a significant reduction in "start anxiety." By seeing a project
                                instantly shattered into three small, non-threatening steps, users found themselves
                                establishing flow states 40% faster than with traditional to-do lists.
                            </p>
                        </section>

                    </div>

                    {/* Footer CTA */}
                    <div className="mt-32 pt-16 border-t border-gray-100 text-center space-y-8">
                        <h3 className="text-2xl font-serif font-medium text-gray-900">
                            Ready to see the experiment in action?
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Link href="/">
                                <Button variant="outline" size="lg" className="rounded-full px-8 border-gray-200">
                                    Back to Lab
                                </Button>
                            </Link>
                            <Button size="lg" className="bg-black text-white hover:bg-gray-800 rounded-full px-8 shadow-lg">
                                Join Waitlist
                            </Button>
                        </div>
                    </div>

                </article>
            </main>
        </div>
    );
}
