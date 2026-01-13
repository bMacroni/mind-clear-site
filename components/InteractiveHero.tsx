"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function InteractiveHero() {
    const text = "Mind Clear Studio";
    const characters = text.split("");
    const [animationStarted, setAnimationStarted] = useState(false);

    useEffect(() => {
        // Start animation shortly after mount
        const timer = setTimeout(() => {
            setAnimationStarted(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    // Generate random scatter positions for each character
    const getRandomState = () => ({
        x: (Math.random() - 0.5) * 1500, // Wide horizontal scatter
        y: (Math.random() - 0.5) * 1000, // Vertical scatter
        rotate: (Math.random() - 0.5) * 360,
        scale: 0.5 + Math.random(),
        opacity: 0,
        filter: "blur(10px)"
    });

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#121212]">

            {/* Background Atmosphere */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] bg-[#8f00ff]/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-[-50%] right-[-20%] w-[80%] h-[80%] bg-[#FFD700]/5 rounded-full blur-[150px]" />
            </div>

            {/* Particle Dust Layer (Decorative) */}
            {animationStarted && (
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full"
                            initial={{
                                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                                opacity: 0
                            }}
                            animate={{
                                x: "50vw", // Move towards center
                                y: "50vh",
                                opacity: [0, 1, 0],
                                scale: [0, 2, 0]
                            }}
                            transition={{
                                duration: 2 + Math.random() * 1.5,
                                delay: Math.random() * 0.5,
                                ease: "circIn"
                            }}
                        />
                    ))}
                </div>
            )}


            <div className="relative z-10 flex flex-wrap justify-center max-w-6xl px-4">
                {characters.map((char, index) => {
                    const randomState = getRandomState();

                    return (
                        <motion.span
                            key={index}
                            className={`text-5xl md:text-8xl lg:text-9xl font-bold text-[#FAFAFA] tracking-tighter inline-block ${char === " " ? "w-4 md:w-8" : ""}`}
                            initial={randomState}
                            animate={animationStarted ? {
                                x: 0,
                                y: 0,
                                rotate: 0,
                                scale: 1,
                                opacity: 1,
                                filter: "blur(0px)"
                            } : randomState}
                            transition={{
                                duration: 1.5,
                                ease: [0.16, 1, 0.3, 1], // Custom spring-like easing
                                delay: 0.1 + (index * 0.03), // Stagger for "zipper" effect
                                type: "spring",
                                stiffness: 60,
                                damping: 15
                            }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    );
                })}
            </div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={animationStarted ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 2.5, duration: 1 }}
                className="absolute bottom-20 text-[#FFD700] text-sm md:text-xl font-mono tracking-widest uppercase"
            >
                Orchestrating Intelligence
            </motion.p>

        </section>
    );
}
