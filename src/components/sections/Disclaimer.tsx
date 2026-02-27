import React from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ShieldAlert, ArrowRight, Lock } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const Disclaimer = () => {
  const scrollToForms = () => {
    const element = document.getElementById("forms-section");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Section className="bg-[#0F172A] py-16 border-t border-[#374151] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Disclaimer Text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 text-[#9CA3AF] mb-2">
              <ShieldAlert className="w-5 h-5" />
              <h3 className="text-sm font-bold uppercase tracking-wider">Important Notice</h3>
            </div>
            <p className="text-[#9CA3AF] text-sm leading-relaxed">
              Affiliate Warehouse is a commercial procurement network acting as a facilitator between independent contractors and national wholesalers. We do not sell goods directly; all transactions, warranties, and supply agreements remain between the contractor and the supplier.
            </p>
            <p className="text-[#9CA3AF] text-sm leading-relaxed">
              Pricing tiers and discounts are set by wholesalers and are subject to change based on market conditions and volume. Savings figures are estimates based on typical volume tiers. Participation is voluntary, non-exclusive, and subject to approval.
            </p>
            <p className="text-[#6B7280] text-xs pt-2">
              © {new Date().getFullYear()} Affiliate Warehouse. All rights reserved.
            </p>
          </motion.div>

          {/* Right Column: Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="bg-[#1F2937]/50 border border-[#374151] rounded-2xl p-8 flex flex-col items-center text-center lg:items-start lg:text-left backdrop-blur-sm"
          >
            <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">
              Start Improving Your Trade Pricing — <span className="text-[#0EA5A4]">Transparently</span>
            </h2>
            <p className="text-[#9CA3AF] text-sm mb-6 flex items-center gap-2">
              <Lock className="w-3 h-3 text-[#0EA5A4]" />
              Approval required. Formal application only.
            </p>
            
            <Button
              onClick={scrollToForms}
              className="w-full sm:w-auto bg-[#0EA5A4] hover:bg-[#0D9488] text-white font-bold h-12 px-8 text-base shadow-lg shadow-[#0EA5A4]/20 transition-all duration-300 group"
              aria-label="Apply to become a Preferred Contractor"
            >
              Apply Now
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

        </div>
      </div>
    </Section>
  );
};
