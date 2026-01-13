"use client";

import React from "react";
import InteractiveHero from "../components/InteractiveHero";
import Mission from "../components/Mission";
import FeaturedProject from "../components/FeaturedProject";
import ScrollTelling from "../components/ScrollTelling";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-[#121212] min-h-screen">
      <InteractiveHero />
      <Mission />
      <FeaturedProject />
      <ScrollTelling />
      <Footer />
    </div>
  );
}