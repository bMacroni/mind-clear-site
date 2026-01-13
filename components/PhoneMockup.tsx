"use client";

import React from "react";
import { motion } from "framer-motion";

interface PhoneMockupProps {
    currentScreen: string; // "brain-dump" | "prioritize" | "focus"
}

export default function PhoneMockup({ currentScreen }: PhoneMockupProps) {
    const images = {
        "brain-dump": "/images/brain-dump.jpg",
        prioritize: "/images/prioritize.jpg",
        focus: "/images/calendar.jpg",
    };

    const imageSrc = images[currentScreen as keyof typeof images] || images["brain-dump"];

    return (
        <div className="relative w-[300px] h-[600px] bg-black rounded-[40px] border-8 border-gray-900 shadow-2xl overflow-hidden">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20" />

            {/* Screen Background */}
            <div className="absolute inset-0 bg-white">
                {/* Screen Content - Image */}
                <div className="h-full w-full relative">
                    <motion.img
                        key={currentScreen}
                        src={imageSrc}
                        alt={currentScreen}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
