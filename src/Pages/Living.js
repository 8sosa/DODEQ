import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeroBg from "../Images/heros/living.png";
import { HeroSection } from "../Components/Hero";
import { Recommendations } from "../Components/Living/recommendations";
import { BookCarousel } from "../Components/Living/BookCarousel";
import Note from "../Components/Living/Note";
import Instagram from "../Components/Living/Instagram";

export default function JustLivingPage() {
  return (
    <>
      <HeroSection
        title="Just Living"
        description="Discover what I’m watching, reading, and listening to each month"
        backgroundImage={HeroBg}
      />
      <main className="max-w-6xl mx-auto py-8 space-y-12">

        {/* Recommendations */}
        <Recommendations />

        {/* Books carousel */}
        <BookCarousel />

        {/* Note block */}
        <Note />

        {/* Instagram feed */}
        <Instagram />
      </main>
    </>
  );
}
