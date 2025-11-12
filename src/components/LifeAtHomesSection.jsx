"use client";
import React from "react";

export default function LifeAtHomesSection() {
  const items = [
    {
      title: "Beautiful Gardens",
      src: "/landscaped-garden-with-benches.jpg",
      alt: "Beautiful landscaped gardens with benches for residents",
    },
    {
      title: "Dining Together",
      src: "/spacious-care-home-dining-room.jpg",
      alt: "Spacious dining room with natural light",
    },
    {
      title: "Activities & Engagement",
      src: "/bright-care-home-lounge-area.jpg",
      alt: "Residents enjoying activities in bright lounge",
    },
    {
      title: "Wellness Support",
      src: "/care-home-wellness-room.jpg",
      alt: "Wellness and therapy room",
    },
    {
      title: "Comfortable Rooms",
      src: "/cosy-care-home-bedroom.jpg",
      alt: "Cosy bedroom with personal touches",
    },
    {
      title: "Outdoor Spaces",
      src: "/care-home-riverside-terrace.jpg",
      alt: "Riverside terrace for outdoor relaxation",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F9F6F1]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#3C2E2B] mb-4">
            Life at our homes
          </h2>
          <p className="text-lg text-[#3C2E2B]/70 max-w-2xl mx-auto">
            Explore our welcoming environments where comfort meets care
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative aspect-4/3 overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#3C2E2B]/60 to-transparent flex items-end p-4">
                <span className="text-white font-medium">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}