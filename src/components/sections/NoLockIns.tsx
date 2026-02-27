import React from "react";
import { Section } from "@/components/ui/Section";
import { FileText, Coins, Users, LogOut } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    icon: FileText,
    title: "No Contracts",
    description: "You are never locked into a long-term agreement. Our service is strictly performance-based."
  },
  {
    icon: Coins,
    title: "No Minimum Spend",
    description: "Access pricing tiers regardless of your volume. We support businesses of all sizes."
  },
  {
    icon: Users,
    title: "No Exclusivity",
    description: "Keep your existing relationships. Use us only when we provide better value."
  },
  {
    icon: LogOut,
    title: "Stop Anytime",
    description: "Complete freedom to leave if your business needs change. No penalties."
  }
];

export const NoLockIns = () => {
  return (
    <Section className="bg-[#0F172A] py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#0EA5A4]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F3F4F6] mb-4 tracking-tight">
            No Lock-Ins. No Contracts.
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
            We believe in earning your business through value, not binding agreements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                className="group"
              >
                <div className="bg-[#141C2F] border border-[#1F2937] rounded-2xl p-6 h-full flex flex-col items-center text-center hover:border-[#0EA5A4]/30 hover:shadow-lg hover:shadow-[#0EA5A4]/5 transition-all duration-300">
                  
                  {/* Icon Container */}
                  <div className="w-14 h-14 rounded-full bg-[#0F172A] border border-[#1F2937] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#0EA5A4]/30 transition-all duration-300">
                    <Icon className="w-6 h-6 text-[#0EA5A4]" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#0EA5A4] transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
