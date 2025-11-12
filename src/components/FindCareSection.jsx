"use client";
import React from "react";
import { Download, FileText } from "lucide-react";

export default function FindCareSection() {
  return (
    <section className="py-16 md:py-20 bg-linear-to-r from-[#7399C6] to-[#84B89E] text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Find the right care for your family
          </h2>
          <p className="text-lg mb-8 text-white/90 leading-relaxed">
            Download our comprehensive brochure or compare our care options to
            make an informed decision
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Download brochure button */}
            <button className="inline-flex items-center justify-center gap-2 h-10 px-6 text-sm font-medium rounded-md bg-white text-[#7399C6] hover:bg-white/90 transition-all shadow">
              <Download className="h-5 w-5 mr-1" />
              Download brochure
            </button>

            {/* Compare care options link */}
            <a
              href="/care"
              className="inline-flex items-center justify-center gap-2 h-10 px-6 text-sm font-medium rounded-md border border-white/30 bg-white/10 text-white hover:bg-white/20 transition-all shadow-sm"
            >
              <FileText className="h-5 w-5 mr-1" />
              Compare care options
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}