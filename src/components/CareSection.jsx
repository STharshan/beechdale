"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight } from "lucide-react";

export default function CareTypesSection() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration (ms)
      once: true, // animate only once when scrolled into view
      easing: "ease-out-cubic",
    });
  }, []);

  const careTypes = [
    {
      title: "Residential Care",
      description:
        "Supportive care for those who need help with daily activities whilst maintaining their independence.",
      href: "/care/residential/",
    },
    {
      title: "Dementia Care",
      description:
        "Specialist support for individuals living with dementia, from mild to advanced stages.",
      href: "/care/dementia/",
    },
    {
      title: "Respite Care",
      description:
        "Short-term care giving families and carers a well-deserved break whilst loved ones receive excellent support.",
      href: "/care/respite/",
    },
    {
      title: "Nursing Care",
      description:
        "24-hour nursing care for those with complex medical needs, delivered by qualified nursing professionals.",
      href: "/care/nursing/",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F9F6F1]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div
          className="text-center mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#3C2E2B] mb-4">
            Types of care we provide
          </h2>
          <p className="text-lg text-[#3C2E2B]/70 max-w-2xl mx-auto">
            Specialist support tailored to individual needs, delivered with compassion and expertise
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {careTypes.map((item, i) => (
            <a
              key={i}
              href={item.href}
              data-aos="fade-up"
              data-aos-delay={i * 150} // staggered animation
              className="group bg-[#C87637]  flex flex-col gap-6 rounded-xl border border-[#E8DCC7]/70 py-6 shadow-md hover:shadow-[#B35E23] hover:scale-[1.02] transition-all duration-300 h-full"
            >
              <div className="grid gap-2 px-6">
                <h3 className="font-serif font-semibold text-xl text-black transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="px-6 flex items-center justify-end">
                <ArrowRight className="h-4 w-4 text-[#C87637] group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
