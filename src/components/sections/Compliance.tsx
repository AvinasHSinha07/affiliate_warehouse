import React from "react";
import { Section } from "@/components/ui/Section";
import { Users, TrendingUp, ShieldCheck, Scale, FileText, Info, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const Compliance = () => {
  return (
    <Section id="compliance" className="bg-[#0F172A] py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Collective Buying Explained */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#0EA5A4]/10 border border-[#0EA5A4]/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-[#0EA5A4]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#F3F4F6] tracking-tight">
                Collective Buying Explained
              </h2>
            </div>
            
            <p className="text-[#9CA3AF] text-lg leading-relaxed mb-10 border-l-2 border-[#1F2937] pl-6">
              Independent contractors buy together nationally to unlock volume-based pricing, improving supply efficiency and access to corporate-level pricing tiers.
            </p>

            <div className="space-y-6">
              <div className="bg-[#141C2F] border border-[#1F2937] p-6 rounded-xl flex gap-4 hover:border-[#0EA5A4]/30 transition-colors duration-300 group">
                <TrendingUp className="w-6 h-6 text-[#0EA5A4] shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h4 className="text-[#F3F4F6] font-bold text-base mb-1">Volume Aggregation</h4>
                  <p className="text-[#9CA3AF] text-sm">Combined purchasing power unlocks corporate-level pricing tiers across national supply chains.</p>
                </div>
              </div>

              <div className="bg-[#141C2F] border border-[#1F2937] p-6 rounded-xl flex gap-4 hover:border-[#0EA5A4]/30 transition-colors duration-300 group">
                <Scale className="w-6 h-6 text-[#0EA5A4] shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h4 className="text-[#F3F4F6] font-bold text-base mb-1">Trade-Friendly Model</h4>
                  <p className="text-[#9CA3AF] text-sm">Structured to support existing wholesaler relationships while maximizing efficiency.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Compliance & Ethics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="bg-[#141C2F] border border-[#1F2937] rounded-2xl p-8 md:p-10 shadow-xl relative overflow-hidden"
          >
            {/* Subtle Top Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1F2937] via-[#0EA5A4]/50 to-[#1F2937]" />

            <div className="flex items-center gap-3 mb-8">
              <ShieldCheck className="w-6 h-6 text-[#0EA5A4]" />
              <h3 className="text-2xl font-bold text-[#F3F4F6]">Compliance & Ethics</h3>
            </div>

            <ul className="space-y-5">
              {[
                { text: "Procurement support & price-monitoring service" },
                { text: "No resale of goods", bold: true },
                { text: "No alteration of wholesaler terms", bold: true },
                { text: "Voluntary participation", bold: true },
                { text: "Transparent comparison encouraged" },
                { text: "Fully traceable, safe, professional" }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (index * 0.1), duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#0EA5A4] shrink-0 mt-0.5" />
                  <span className={cn("text-[#9CA3AF] text-sm", item.bold && "text-[#F3F4F6] font-semibold")}>
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Legal Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 pt-8 border-t border-[#1F2937]"
        >
          <div className="flex items-start gap-3 max-w-4xl mx-auto">
            <Info className="w-5 h-5 text-[#9CA3AF] shrink-0 mt-0.5" />
            <p className="text-[#9CA3AF] text-xs leading-relaxed">
              <strong>Legal Disclaimer:</strong> Pricing and discounts are set directly by wholesalers and are subject to change without notice. Savings vary by product, supplier, and market conditions. There are no guaranteed savings on all products. Fees are applied only on verified savings. Participation in the program is completely voluntary and non-exclusive. Affiliate Warehouse acts as a procurement facilitator and does not sell goods directly.
            </p>
          </div>
        </motion.div>

      </div>
    </Section>
  );
};
