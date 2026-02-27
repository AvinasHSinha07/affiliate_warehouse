import React from "react";
import { Section } from "@/components/ui/Section";
import { User, Users, ArrowLeftRight, Check } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const PricingTransparency = () => {
  return (
    <Section className="bg-[#0F172A] py-24 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0EA5A4]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F3F4F6] mb-4 tracking-tight">
            Full Pricing Transparency — Always
          </h2>
          <p className="text-[#9CA3AF] text-lg">
            Compare your current rates against group purchasing power. No obligation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Your Trade Account */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-[#141C2F] border border-[#1F2937] rounded-2xl p-8 md:p-10 flex flex-col items-center text-center shadow-lg hover:border-[#374151] transition-colors duration-300 relative group"
            aria-label="Your Trade Account Option"
          >
            <div className="w-16 h-16 rounded-full bg-[#0F172A] border border-[#1F2937] flex items-center justify-center mb-6 group-hover:border-[#9CA3AF]/30 transition-colors">
              <User className="w-7 h-7 text-[#9CA3AF]" strokeWidth={1.5} />
            </div>
            
            <h3 className="text-xl font-bold text-[#F3F4F6] mb-2">Your Trade Account</h3>
            <p className="text-[#9CA3AF] text-sm mb-8 font-medium uppercase tracking-wide">Standard Pricing</p>
            
            <ul className="space-y-4 text-[#9CA3AF] text-sm w-full max-w-xs mx-auto">
              <li className="flex items-center gap-3 justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#374151]" />
                Based on individual volume
              </li>
              <li className="flex items-center gap-3 justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#374151]" />
                Standard supplier terms
              </li>
              <li className="flex items-center gap-3 justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#374151]" />
                Direct wholesaler relationship
              </li>
            </ul>
          </motion.section>

          {/* Card 2: Affiliate Warehouse */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="bg-[#141C2F] border border-[#0EA5A4]/30 rounded-2xl p-8 md:p-10 flex flex-col items-center text-center shadow-xl relative group overflow-hidden"
            aria-label="Affiliate Warehouse Option"
          >
            {/* Subtle top accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#0EA5A4]/50" />
            
            {/* Recommended Badge */}
            <div className="absolute top-4 right-4 bg-[#0EA5A4]/10 border border-[#0EA5A4]/20 text-[#0EA5A4] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
              Corporate Tiers
            </div>

            <div className="w-16 h-16 rounded-full bg-[#0F172A] border border-[#0EA5A4]/30 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(14,165,164,0.15)] group-hover:shadow-[0_0_20px_rgba(14,165,164,0.25)] transition-shadow duration-300">
              <Users className="w-7 h-7 text-[#0EA5A4]" strokeWidth={1.5} />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">Affiliate Warehouse</h3>
            <p className="text-[#0EA5A4] text-sm mb-8 font-medium uppercase tracking-wide">Group Pricing Power</p>
            
            <ul className="space-y-4 text-[#F3F4F6] text-sm w-full max-w-xs mx-auto">
              <li className="flex items-center gap-3 justify-center">
                <Check className="w-4 h-4 text-[#0EA5A4]" />
                Aggregated national volume
              </li>
              <li className="flex items-center gap-3 justify-center">
                <Check className="w-4 h-4 text-[#0EA5A4]" />
                Corporate-level account tiers
              </li>
              <li className="flex items-center gap-3 justify-center">
                <Check className="w-4 h-4 text-[#0EA5A4]" />
                Same backend systems
              </li>
            </ul>
          </motion.section>
        </div>

        {/* Comparison Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 text-[#F3F4F6] font-semibold mb-3 bg-[#1F2937]/50 px-4 py-1.5 rounded-full border border-[#1F2937]">
            <ArrowLeftRight className="w-4 h-4 text-[#0EA5A4]" />
            <span>Compare anytime — No obligation</span>
          </div>
          <p className="text-[#9CA3AF] text-sm leading-relaxed">
            Same suppliers. Same products. Same backend systems. <br className="hidden md:block" />
            <span className="text-[#F3F4F6]">You simply compare and choose what's better.</span>
          </p>
        </motion.div>
      </div>
    </Section>
  );
};
