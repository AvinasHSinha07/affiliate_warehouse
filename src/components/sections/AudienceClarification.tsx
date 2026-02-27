import React from "react";
import { Section } from "@/components/ui/Section";
import { ShieldCheck, CheckCircle2, FileCheck } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const AudienceClarification = () => {
  return (
    <Section className="bg-navy-primary py-24 md:py-32 relative overflow-hidden">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none mix-blend-overlay" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-5xl mx-auto relative z-10"
      >
        <div className="bg-navy-card border border-navy-border rounded-xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Decorative Top Accent Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy-border via-teal-accent/50 to-navy-border opacity-50" />

          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
            
            {/* Left Icon Column (Desktop) */}
            <div className="md:col-span-3 flex justify-center md:justify-start">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-navy-primary border border-navy-border flex items-center justify-center shadow-inner">
                <ShieldCheck className="w-10 h-10 md:w-12 md:h-12 text-teal-accent/80" strokeWidth={1.5} />
              </div>
            </div>

            {/* Right Content Column */}
            <div className="md:col-span-9 space-y-8">
              
              {/* Header */}
              <div className="space-y-4 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                  Important: Formal Application Required
                </h2>
                <div className="h-px w-16 bg-teal-accent/30 mx-auto md:mx-0" />
              </div>

              {/* Body Text */}
              <p className="text-text-secondary text-base md:text-lg leading-relaxed text-center md:text-left">
                This page is not a place where anyone can simply sign up for access to trade accounts. It exists solely as a formal application and onboarding gateway for:
              </p>

              {/* Structured Bullet Blocks */}
              <div className="grid gap-4">
                {/* Block 1 */}
                <div className="bg-navy-primary/50 border-l-2 border-teal-accent/60 rounded-r-lg p-5 flex items-start gap-4 hover:bg-navy-primary transition-colors duration-300 group">
                  <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0 mt-0.5 group-hover:text-teal-hover transition-colors" />
                  <div>
                    <h3 className="text-white font-semibold text-base mb-1">Existing preferred contractors</h3>
                    <p className="text-text-muted text-sm">Register + approval to use shared national accounts</p>
                  </div>
                </div>

                {/* Block 2 */}
                <div className="bg-navy-primary/50 border-l-2 border-teal-accent/60 rounded-r-lg p-5 flex items-start gap-4 hover:bg-navy-primary transition-colors duration-300 group">
                  <FileCheck className="w-5 h-5 text-teal-accent shrink-0 mt-0.5 group-hover:text-teal-hover transition-colors" />
                  <div>
                    <h3 className="text-white font-semibold text-base mb-1">Businesses seeking preferred contractor status</h3>
                    <p className="text-text-muted text-sm">Assessed for suitability/compliance</p>
                  </div>
                </div>
              </div>

              {/* Closing Statement */}
              <div className="pt-4 border-t border-navy-border/50">
                <p className="text-text-muted text-sm italic text-center md:text-left">
                  Approval is required in all cases; access limited strictly to preferred contractors.
                </p>
              </div>

            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};
