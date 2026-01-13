"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import PhoneMockup from "./PhoneMockup";

const features = [
    {
        id: "brain-dump",
        title: "Brain Dump",
        description: "Get everything out of your head. Our AI instantly breaks down complex tasks into manageable steps.",
    },
    {
        id: "prioritize",
        title: "Ruthless Prioritization",
        description: "Stop juggling. We help you pick the ONE thing that matters right now and hide the rest.",
    },
    {
        id: "focus",
        title: "Daily Calendar View",
        description: "See your day, not just a list. Our smart calendar organizes your tasks into a realistic schedule so you can get meaningful things done.",
    },
];

export default function ScrollTelling() {
    const [activeFeature, setActiveFeature] = useState("brain-dump");

    // Create refs for each section
    const sectionRefs = features.map(() => useRef(null));

    // Use Intersection Observer logic manually or via component wrappers to update state
    // We'll use a simple component wrapper to detect view

    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row">
                    {/* Left Column: Scrolling Text */}
                    <div className="w-full lg:w-1/2 py-12 lg:py-0">
                        {features.map((feature, index) => (
                            <FeatureSection
                                key={feature.id}
                                feature={feature}
                                setActiveFeature={setActiveFeature}
                            />
                        ))}
                    </div>

                    {/* Right Column: Sticky Phone */}
                    <div className="w-full lg:w-1/2 hidden lg:flex justify-center justify-items-starth-screen sticky top-0 items-center">
                        <div className="sticky top-1/4">
                            <PhoneMockup currentScreen={activeFeature} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FeatureSection({ feature, setActiveFeature }: any) {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

    useEffect(() => {
        if (isInView) {
            setActiveFeature(feature.id);
        }
    }, [isInView, feature.id, setActiveFeature]);

    return (
        <div
            ref={ref}
            className="min-h-[80vh] flex flex-col justify-center p-8"
        >
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold mb-6 text-[#121212]"
            >
                {feature.title}
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-gray-600 leading-relaxed max-w-md"
            >
                {feature.description}
            </motion.p>
        </div>
    );
}
