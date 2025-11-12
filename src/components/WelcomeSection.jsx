"use client";
import React from "react";

export default function WelcomeSection() {
  return (
    <section className="py-16 md:py-24 bg-[#F9F6F1]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#3C2E2B] mb-6">
              Welcome to Beechdale House
            </h2>

            <p className="text-lg text-[#3C2E2B]/80 leading-relaxed mb-6">
              Our purpose-built care home in Nottingham provides exceptional
              residential and nursing care for up to 40 residents in a warm,
              welcoming environment.
            </p>

            <p className="text-[#3C2E2B]/80 leading-relaxed mb-8">
              With modern facilities, beautiful gardens, and a dedicated team of
              professionals, Beechdale House offers the perfect balance of
              clinical excellence and homely comfort.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/facilities"
                className="inline-flex items-center justify-center h-10 px-6 text-sm font-medium text-white bg-[#7399C6] hover:bg-[#6187B3] rounded-md shadow transition-all"
              >
                Explore Our Facilities
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center h-10 px-6 text-sm font-medium border border-[#3C2E2B]/20 rounded-md shadow-sm bg-white hover:bg-[#E8DCC7]/50 text-[#3C2E2B] transition-all"
              >
                Arrange a Visit
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative aspect-4/3 rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RakTIisJ0EAJiAyymseMPrLY1JiM68.png"
              alt="Beechdale House entrance with elegant white columns and glass doors"
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}