"use client";
import React from "react";
import { Phone } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* 🎬 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/peaceful-care-home-garden.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7517699-uhd_3840_2160_25fps%20%281%29-2SBSt4cNBLkHvE78rSwMF187TGWSSi.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#3C2E2B]/50" />

      {/* 🧡 Hero Content */}
      <div className="relative z-10 container text-center text-white px-4">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-[#F48B3A] drop-shadow-lg">
          Beechdale House Nursing Home
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow">
          Where compassionate, person-centred care meets the comfort of home. Our experienced team
          provides exceptional residential, dementia, respite and nursing care in a welcoming
          environment where your loved ones can truly flourish.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="inline-flex items-center justify-center h-10 rounded-md px-6 bg-[#C87637] hover:bg-[#B35E23] text-white text-sm font-medium shadow-lg transition-all">
            Book a visit
          </button>

          <a
            href="tel:01159292792"
            className="inline-flex items-center justify-center h-10 rounded-md px-6 border border-white/20 bg-white/10 backdrop-blur text-white hover:bg-white/20 hover:border-[#C87637] text-sm font-medium shadow-lg transition-all"
          >
            <Phone className="h-5 w-5 mr-2" />
            Call 0115 929 2792
          </a>
        </div>
      </div>
    </section>
  );
}