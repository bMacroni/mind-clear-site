"use client";

import React, { useEffect, useState } from "react";
import InteractiveHero from "../components/InteractiveHero";
import Mission from "../components/Mission";
import FeaturedProject from "../components/FeaturedProject";
import ScrollTelling from "../components/ScrollTelling";
import Footer from "../components/Footer";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#121212] min-h-screen">
      <InteractiveHero scrollY={scrollY} />
      <Mission />
      <FeaturedProject />
      <ScrollTelling />
      <Footer />
    </div>
  );
}