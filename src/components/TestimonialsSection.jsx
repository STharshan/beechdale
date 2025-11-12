"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function TestimonialsSection() {
    const testimonials = [
        {
            quote:
                "Willowbank is specifically designed for dementia and it shows. Mum feels safe and secure here. The circular layout means she can wander safely, and the staff always have time for a chat. We visit daily and always leave impressed by the care she receives.",
            author: "Emma T.",
            role: "Daughter",
        },
        {
            quote:
                "This care is second to none. My Mum has improved beyond recognition since she was admitted. She is more mobile, safe and happy, giving our family peace of mind.",
            author: "Jackie H.",
            role: "Daughter of Resident",
        },
        {
            quote:
                "A truly wonderful team. The staff treat every resident with warmth, patience and respect — it feels like an extended family.",
            author: "Mark P.",
            role: "Son",
        },
        {
            quote:
                "I can’t thank the team enough for their constant support and kindness. Every day they go above and beyond for my father’s comfort and wellbeing.",
            author: "Laura D.",
            role: "Daughter",
        },
    ];

    const [index, setIndex] = useState(0);
    const handlePrev = () =>
        setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    const handleNext = () =>
        setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

    const testimonial = testimonials[index];

    return (
        <section className="py-16 md:py-24 bg-[#F9F6F1]">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#3C2E2B] mb-4">
                        What families say
                    </h2>
                    <p className="text-lg text-[#3C2E2B]/70">
                        Trusted by hundreds of families across the North West
                    </p>
                </div>

                {/* Testimonial Card */}
                <div className="max-w-4xl mx-auto relative">
                    <div className="bg-white rounded-xl shadow-lg py-10 px-6 md:px-12 text-center">
                        {/* Stars */}
                        <div className="flex justify-center gap-1 mb-6">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className="h-5 w-5  text-black"
                                    strokeWidth={2}
                                />
                            ))}
                        </div>

                        {/* Quote */}
                        <blockquote className="text-lg md:text-xl text-[#3C2E2B]/90 leading-relaxed mb-6">
                            “{testimonial.quote}”
                        </blockquote>

                        {/* Author */}
                        <div>
                            <p className="font-semibold text-[#3C2E2B]">{testimonial.author}</p>
                            <p className="text-sm text-[#3C2E2B]/60">{testimonial.role}</p>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-center gap-6 mt-8">
                        <button
                            onClick={handlePrev}
                            aria-label="Previous testimonial"
                            className="size-9 flex items-center justify-center rounded-full border border-[#3C2E2B]/20 hover:bg-[#E8DCC7]/50 transition-all"
                        >
                            <ChevronLeft className="h-4 w-4 text-[#3C2E2B]" />
                        </button>

                        {/* Pagination Dots */}
                        <div className="flex gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setIndex(i)}
                                    className={`h-2 rounded-full transition-all ${index === i
                                            ? "w-8 bg-black"
                                            : "w-2 bg-[#3C2E2B]/20 hover:bg-[#7399C6]/50"
                                        }`}
                                    aria-label={`Go to testimonial ${i + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={handleNext}
                            aria-label="Next testimonial"
                            className="size-9 flex items-center justify-center rounded-full border border-[#3C2E2B]/20 hover:bg-[#E8DCC7]/50 transition-all"
                        >
                            <ChevronRight className="h-4 w-4 text-[#3C2E2B]" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}