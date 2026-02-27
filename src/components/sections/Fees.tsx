import React from "react";
import { Section } from "@/components/ui/Section";
import { ShieldCheck, CheckCircle2, ArrowRight, Percent } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const Fees = () => {
  return (
    <Section id="fees" className="bg-[#0F172A] py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F3F4F6] mb-4 tracking-tight">
            Aligned Incentives
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
            Our model is built on performance. We only earn when you save.
          </p>
        </div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-[#141C2F] border border-[#1F2937] rounded-2xl overflow-hidden shadow-2xl hover:shadow-teal-glow/10 transition-shadow duration-500"
        >
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#1F2937]">
            
            {/* Left: No Discount */}
            <div className="p-8 md:p-12 flex flex-col items-center justify-center text-center bg-[#141C2F]/50">
              <div className="w-16 h-16 rounded-full bg-[#0F172A] border border-[#1F2937] flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-[#9CA3AF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-[#9CA3AF] font-medium text-lg mb-2">No Discount Achieved?</h3>
              <div className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                No Charge.
              </div>
              <p className="text-[#9CA3AF] text-sm mt-4 max-w-[200px]">
                If we can't beat your current pricing, you pay absolutely nothing.
              </p>
            </div>

            {/* Right: Discount Achieved */}
            <div className="p-8 md:p-12 flex flex-col justify-center bg-[#141C2F] relative overflow-hidden">
              {/* Subtle gradient accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0EA5A4]/5 rounded-bl-full pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#0EA5A4]/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#0EA5A4]" />
                </div>
                <h3 className="text-white font-bold text-lg">Discount Achieved</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-[#9CA3AF] text-sm font-medium">Affiliate Warehouse Retains</span>
                    <span className="text-[#0EA5A4] text-2xl font-bold">1.1%</span>
                  </div>
                  <div className="w-full bg-[#1F2937] h-2 rounded-full overflow-hidden">
                    <div className="bg-[#0EA5A4] h-full w-[1.1%] min-w-[4px]" />
                  </div>
                </div>

                <div>
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-white text-sm font-medium">Contractor Keeps</span>
                    <span className="text-white text-xl font-bold">The Rest</span>
                  </div>
                  <div className="w-full bg-[#1F2937] h-2 rounded-full overflow-hidden">
                    <div className="bg-white h-full w-[98.9%]" />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Footer Note */}
          <div className="bg-[#0B1220] border-t border-[#1F2937] p-4 text-center">
            <p className="text-[#9CA3AF] text-sm flex items-center justify-center gap-2">
              <Percent className="w-3.5 h-3.5 text-[#0EA5A4]" />
              Fees are only billed monthly on <span className="text-white font-medium">verified savings</span> — never on spend.
            </p>
          </div>
        </motion.div>

      </div>
    </Section>
  );
};
