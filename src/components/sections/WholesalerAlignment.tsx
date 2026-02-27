import React from "react";
import { Section } from "@/components/ui/Section";
import { ShieldCheck, Box, RefreshCw, FileCheck, Users, Building2, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const OPERATING_PRINCIPLES = [
  {
    icon: Box,
    text: "Fully within existing wholesaler systems",
    description: "Orders are processed through standard supplier channels."
  },
  {
    icon: ShieldCheck,
    text: "No reselling",
    description: "Direct relationship between contractor and supplier remains."
  },
  {
    icon: RefreshCw,
    text: "No bypassing",
    description: "We do not circumvent established supply chains."
  },
  {
    icon: FileCheck,
    text: "No alteration of supplier terms",
    description: "Standard trade terms and conditions apply."
  }
];

export const WholesalerAlignment = () => {
  return (
    <Section className="bg-[#0F172A] py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#F3F4F6] mb-6 tracking-tight leading-tight">
              Built for Wholesaler Alignment — <span className="text-[#0EA5A4]">Not Disruption</span>
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-[#0EA5A4] font-medium text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
                  <span className="w-8 h-px bg-[#0EA5A4]/50" />
                  How We Operate
                </h3>
                
                <ul className="space-y-4">
                  {OPERATING_PRINCIPLES.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="bg-[#141C2F] border border-[#1F2937] p-4 rounded-xl flex items-start gap-4 group hover:border-[#0EA5A4]/30 transition-colors duration-300"
                      >
                        <div className="w-10 h-10 rounded-lg bg-[#0F172A] border border-[#1F2937] flex items-center justify-center shrink-0 group-hover:border-[#0EA5A4]/30 transition-colors">
                          <Icon className="w-5 h-5 text-[#0EA5A4]" />
                        </div>
                        <div>
                          <h4 className="text-[#F3F4F6] font-bold text-base mb-1">{item.text}</h4>
                          <p className="text-[#9CA3AF] text-sm">{item.description}</p>
                        </div>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Compliance Flow */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[#0EA5A4]/5 blur-3xl rounded-full transform scale-90 -z-10" />

            <div className="bg-[#141C2F]/50 border border-[#1F2937] rounded-2xl p-8 md:p-10 backdrop-blur-sm relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1F2937] via-[#0EA5A4]/50 to-[#1F2937] opacity-50" />
              
              <h3 className="text-center text-[#F3F4F6] font-bold mb-10">Compliance & Order Flow</h3>

              <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative">
                
                {/* Connector Line (Desktop) */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-[#1F2937] -z-10 transform -translate-y-1/2" />
                
                {/* Step 1: Contractor */}
                <div className="flex flex-col items-center text-center gap-4 relative z-10">
                  <div className="w-20 h-20 rounded-2xl bg-[#0F172A] border border-[#1F2937] flex items-center justify-center shadow-lg">
                    <Users className="w-8 h-8 text-[#9CA3AF]" />
                  </div>
                  <div>
                    <span className="block text-[#F3F4F6] font-bold text-sm">Contractor</span>
                    <span className="block text-[#9CA3AF] text-xs mt-1">Places Order</span>
                  </div>
                </div>

                {/* Arrow 1 */}
                <div className="hidden md:flex flex-col items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-[#0EA5A4]" />
                </div>
                {/* Arrow 1 Mobile */}
                <div className="md:hidden">
                  <ArrowRight className="w-5 h-5 text-[#0EA5A4] rotate-90" />
                </div>

                {/* Step 2: AW (Central) */}
                <div className="flex flex-col items-center text-center gap-4 relative z-10">
                  <div className="w-24 h-24 rounded-2xl bg-[#141C2F] border-2 border-[#0EA5A4]/30 flex items-center justify-center shadow-[0_0_20px_rgba(14,165,164,0.1)] relative">
                    <div className="absolute -top-3 bg-[#0EA5A4] text-[#0F172A] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                      Facilitator
                    </div>
                    <ShieldCheck className="w-10 h-10 text-[#0EA5A4]" />
                  </div>
                  <div>
                    <span className="block text-[#F3F4F6] font-bold text-sm">Affiliate Warehouse</span>
                    <span className="block text-[#9CA3AF] text-xs mt-1">Validates & Codes</span>
                  </div>
                </div>

                {/* Arrow 2 */}
                <div className="hidden md:flex flex-col items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-[#0EA5A4]" />
                </div>
                {/* Arrow 2 Mobile */}
                <div className="md:hidden">
                  <ArrowRight className="w-5 h-5 text-[#0EA5A4] rotate-90" />
                </div>

                {/* Step 3: Wholesaler */}
                <div className="flex flex-col items-center text-center gap-4 relative z-10">
                  <div className="w-20 h-20 rounded-2xl bg-[#0F172A] border border-[#1F2937] flex items-center justify-center shadow-lg">
                    <Building2 className="w-8 h-8 text-[#9CA3AF]" />
                  </div>
                  <div>
                    <span className="block text-[#F3F4F6] font-bold text-sm">Wholesaler</span>
                    <span className="block text-[#9CA3AF] text-xs mt-1">Fulfills Order</span>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-[#1F2937] text-center">
                <p className="text-[#9CA3AF] text-sm flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0EA5A4]" />
                  This is <span className="text-[#F3F4F6] font-medium">collaboration and efficiency</span> — not disruption.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </Section>
  );
};
