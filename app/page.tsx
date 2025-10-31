"use client";

import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import FeaturedProject from "../components/FeaturedProject";
import FutureVision from "../components/FutureVision";
import Footer from "../components/Footer";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#FAFAF9] min-h-screen">
      <Hero scrollY={scrollY} />
      <Mission />
      <FeaturedProject />
      <FutureVision />
      <Footer />
    </div>
  );
}