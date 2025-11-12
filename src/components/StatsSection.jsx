"use client";
import React from "react";
import { Award, Calendar, Users, Star } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: <Award className="h-5 w-5 text-[#7399C6]" strokeWidth={2} />,
      label: "CQC Good",
    },
    {
      icon: <Calendar className="h-5 w-5 text-[#7399C6]" strokeWidth={2} />,
      label: "Established 1995",
    },
    {
      icon: <Users className="h-5 w-5 text-[#7399C6]" strokeWidth={2} />,
      label: "96% family satisfaction",
    },
    {
      icon: <Star className="h-5 w-5 text-[#7399C6]" strokeWidth={2} />,
      label: "4.6★ Reviews",
    },
  ];

  return (
    <section className="bg-[#F9F6F1] py-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-[#3C2E2B]">
          {stats.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="p-2 bg-white rounded-lg shadow-sm">{item.icon}</div>
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}