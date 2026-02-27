import React from "react";
import { Section } from "@/components/ui/Section";
import { Activity, CheckCircle2, TrendingUp, Bell } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const PriceTracking = () => {
  return (
    <Section id="price-tracking" className="bg-[#0F172A] py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Column: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F3F4F6] mb-6 tracking-tight leading-tight">
              Track Pricing. Control Costs. <span className="text-[#0EA5A4] border-b-2 border-[#0EA5A4]/30 pb-1">Improve Margins.</span>
            </h2>
            <p className="text-[#9CA3AF] text-lg leading-relaxed max-w-xl">
              Gain operational oversight with automated tracking and alerts. Ensure your quoting remains accurate and your margins protected against supplier price creeps.
            </p>
          </div>

          <ul className="space-y-6">
            {[
              "System monitors pricing history across suppliers",
              "Optional email alerts on significant price changes",
              "Better quoting accuracy with live data",
              "Visibility across repeat purchases"
            ].map((item, index) => (
              <motion.li 
                key={index} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start gap-4"
              >
                <div className="mt-1 w-6 h-6 rounded-full bg-[#0EA5A4]/10 border border-[#0EA5A4]/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0EA5A4]" />
                </div>
                <span className="text-[#F3F4F6] font-medium text-base">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right Column: Mock Panel */}
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
           className="relative"
        >
          {/* Decorative blur behind */}
          <div className="absolute inset-0 bg-[#0EA5A4]/5 blur-3xl rounded-full transform scale-90 -z-10" />

          {/* Main Card */}
          <div className="bg-[#141C2F] border border-[#1F2937] rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden group hover:border-[#0EA5A4]/30 transition-colors duration-500">
            
            {/* Header of Card */}
            <div className="flex justify-between items-center mb-8 border-b border-[#1F2937] pb-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-[#0F172A] border border-[#1F2937] flex items-center justify-center text-[#0EA5A4]">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-white font-semibold text-sm tracking-wide block">Price Monitor</span>
                  <span className="text-[#9CA3AF] text-xs">Live Tracking</span>
                </div>
              </div>
              
              {/* Toggle Mock */}
              <div className="flex items-center gap-3 bg-[#0F172A] px-3 py-1.5 rounded-full border border-[#1F2937]">
                <span className="text-[#9CA3AF] text-xs font-medium">Notify me on change</span>
                <div className="w-8 h-4 bg-[#0EA5A4]/20 rounded-full relative cursor-pointer" role="switch" aria-checked="true" aria-label="Toggle notifications">
                  <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-[#0EA5A4] rounded-full shadow-sm" />
                </div>
              </div>
            </div>

            {/* Data Row */}
            <div className="space-y-6">
              <div className="flex justify-between items-start p-4 bg-[#0F172A] rounded-xl border border-[#1F2937]">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white font-bold text-lg">Clipsal 2025WE</h3>
                    <span className="text-[10px] bg-[#1F2937] text-[#9CA3AF] px-1.5 py-0.5 rounded border border-[#374151]">SKU: 49201</span>
                  </div>
                  <p className="text-[#9CA3AF] text-sm flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    TradeZone Account
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-white font-bold text-2xl tracking-tight">$11.95</div>
                  <div className="flex items-center justify-end gap-1.5 text-amber-500 text-xs font-bold mt-1 bg-amber-500/10 px-2 py-0.5 rounded-full inline-flex ml-auto">
                    <TrendingUp className="w-3 h-3" />
                    <span>4.4% vs Last</span>
                  </div>
                </div>
              </div>

              {/* Mini Chart Visualization */}
              <div className="relative h-32 w-full bg-[#0F172A] rounded-xl border border-[#1F2937] p-4 flex items-end justify-between gap-2 overflow-hidden">
                {/* Grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-10 pointer-events-none">
                  <div className="w-full h-px bg-[#9CA3AF]" />
                  <div className="w-full h-px bg-[#9CA3AF]" />
                  <div className="w-full h-px bg-[#9CA3AF]" />
                </div>

                {/* Bars */}
                {[35, 42, 38, 45, 40, 55, 48, 60, 52, 75].map((h, i) => (
                  <div 
                    key={i} 
                    className="w-full bg-[#1F2937] rounded-t-sm relative overflow-hidden group/bar"
                    style={{ height: `${h}%` }}
                  >
                    <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-[#0EA5A4]/20 to-[#0EA5A4]/5 group-hover/bar:from-[#0EA5A4]/40 transition-all duration-300" />
                    {i === 9 && (
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#0EA5A4] shadow-[0_0_10px_rgba(14,165,164,0.5)]" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-6 flex justify-between items-center text-xs text-[#9CA3AF]">
              <span>Last updated: Today, 09:41 AM</span>
              <span className="flex items-center gap-1.5 text-[#0EA5A4] font-medium">
                <Bell className="w-3 h-3" /> Alerts Active
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
