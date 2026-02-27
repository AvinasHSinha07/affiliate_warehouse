import React from "react";
import { Section } from "@/components/ui/Section";
import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  {
    text: "Finally, a system that actually understands how electrical contractors operate. No fluff, just better pricing on the accounts we already use.",
    name: "Mark D.",
    role: "Electrical Contractor, QLD",
    rating: 5
  },
  {
    text: "The transparency is refreshing. I know exactly what I'm paying and what I'm saving. The compliance aspect gives me peace of mind with my suppliers.",
    name: "Sarah Jenkins",
    role: "HVAC Business Owner, NSW",
    rating: 5
  },
  {
    text: "We were skeptical at first, but the onboarding was professional and the savings were immediate. It's just smart business for any trade company.",
    name: "David T.",
    role: "Solar Installer, VIC",
    rating: 5
  }
];

export const Reviews = () => {
  return (
    <Section className="bg-[#0F172A] py-24 md:py-32 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F3F4F6] mb-4 tracking-tight">
            What Trade Professionals Say
          </h2>
          <div className="h-px w-24 bg-[#0EA5A4]/40 mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
              className="bg-[#1F2937]/40 border border-[#374151]/50 p-8 rounded-2xl backdrop-blur-sm hover:bg-[#1F2937]/60 hover:border-[#0EA5A4]/30 transition-all duration-300 group flex flex-col h-full"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-[#0EA5A4]/20 group-hover:text-[#0EA5A4]/40 transition-colors" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4" aria-label={`Rated ${review.rating} out of 5 stars`}>
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#0EA5A4] text-[#0EA5A4]" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-[#F3F4F6] text-lg leading-relaxed mb-8 flex-grow font-light">
                "{review.text}"
              </blockquote>

              {/* Reviewer Info */}
              <div className="mt-auto border-t border-[#374151] pt-4">
                <cite className="not-italic">
                  <div className="text-white font-bold text-base">{review.name}</div>
                  <div className="text-[#9CA3AF] text-sm mt-0.5">{review.role}</div>
                </cite>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
