import React from "react";
import { Section } from "@/components/ui/Section";
import { History, TrendingUp, Users, Building2 } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const OurStory = () => {
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
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#0EA5A4]/10 border border-[#0EA5A4]/20 flex items-center justify-center">
                <History className="w-6 h-6 text-[#0EA5A4]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#F3F4F6] tracking-tight">
                Built by the Trade. <br className="hidden md:block" />
                Scaled the Right Way.
              </h2>
            </div>
            
            <div className="space-y-6 text-[#D1D5DB] text-lg leading-relaxed">
              <p>
                Affiliate Warehouse was built alongside <strong className="text-[#F3F4F6]">Aussie Antennas and Electrical</strong>, leveraging over 25 years of experience working with trusted contractors across Australia.
              </p>
              
              <p>
                We saw a consistent problem: small businesses facing pricing inconsistencies and fragmented national spend. Contractors were buying individually, missing out on the leverage that comes with scale.
              </p>
              
              <p className="border-l-2 border-[#0EA5A4] pl-6 italic text-[#F3F4F6]">
                Our solution is simple: an independent company providing a <span className="text-[#0EA5A4] font-medium">shared purchasing system</span> that unlocks corporate-level supplier pricing for preferred contractors.
              </p>
              
              <p>
                You keep your independence. We provide the scale.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Visual Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[#0EA5A4]/5 blur-3xl rounded-full transform scale-90 -z-10" />

            <div className="bg-[#141C2F] border border-[#1F2937] rounded-2xl p-8 md:p-10 shadow-xl relative overflow-hidden">
              {/* Subtle Top Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1F2937] via-[#0EA5A4]/50 to-[#1F2937]" />

              <div className="space-y-8 relative">
                {/* Connector Line */}
                <div className="absolute top-4 bottom-4 left-[19px] w-px bg-[#1F2937] -z-10" />

                {/* Timeline Item 1 */}
                <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-full bg-[#0F172A] border border-[#1F2937] flex items-center justify-center shrink-0 z-10">
                    <Building2 className="w-4 h-4 text-[#9CA3AF]" />
                  </div>
                  <div>
                    <h4 className="text-[#F3F4F6] font-bold text-base mb-1">The Foundation</h4>
                    <p className="text-[#9CA3AF] text-sm">
                      25+ years of operational experience with Aussie Antennas and Electrical.
                    </p>
                  </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-full bg-[#0F172A] border border-[#1F2937] flex items-center justify-center shrink-0 z-10">
                    <Users className="w-4 h-4 text-[#9CA3AF]" />
                  </div>
                  <div>
                    <h4 className="text-[#F3F4F6] font-bold text-base mb-1">The Gap Identified</h4>
                    <p className="text-[#9CA3AF] text-sm">
                      Recognized that independent contractors were paying too much due to fragmented purchasing.
                    </p>
                  </div>
                </div>

                {/* Timeline Item 3 */}
                <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-full bg-[#0EA5A4]/10 border border-[#0EA5A4]/30 flex items-center justify-center shrink-0 z-10 shadow-[0_0_15px_rgba(14,165,164,0.2)]">
                    <TrendingUp className="w-4 h-4 text-[#0EA5A4]" />
                  </div>
                  <div>
                    <h4 className="text-[#F3F4F6] font-bold text-base mb-1">The Scaled Solution</h4>
                    <p className="text-[#9CA3AF] text-sm">
                      Launched Affiliate Warehouse to aggregate volume and secure corporate tiers for all members.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </Section>
  );
};
