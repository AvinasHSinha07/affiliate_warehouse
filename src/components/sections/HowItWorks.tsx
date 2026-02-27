import React from "react";
import { Section } from "@/components/ui/Section";
import { FileText, ShieldCheck, UserCheck, Activity } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    icon: FileText,
    title: "Submit Formal Application",
    description: "Complete the structured application outlining your business details, operational scope, and intended account usage."
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Suitability Review",
    description: "Applications are assessed to ensure alignment with wholesaler agreements, purchasing standards, and operational requirements."
  },
  {
    icon: UserCheck,
    title: "Approval & Account Allocation",
    description: "Approved contractors receive controlled access to designated national trade accounts."
  },
  {
    icon: Activity,
    title: "Ongoing Account Oversight",
    description: "Usage is monitored to maintain compliance, protect shared account integrity, and ensure long-term sustainability."
  }
];

export const HowItWorks = () => {
  return (
    <Section id="how-it-works" className="bg-[#0F172A] py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
            How the Onboarding Process Works
          </h2>
          <div className="h-px w-24 bg-teal-accent/40 mx-auto mb-6" />
          <p className="text-text-secondary text-lg leading-relaxed">
            A structured approval process designed to ensure compliance, account protection, and operational alignment.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          
          {/* Desktop Connector Line */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-navy-border z-0" />

          {/* Mobile Timeline Line */}
          <div className="lg:hidden absolute top-0 bottom-0 left-8 w-px bg-navy-border z-0" />

          <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              const stepNumber = String(index + 1).padStart(2, '0');

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                  className="relative group"
                >
                  {/* Step Card */}
                  <div className="bg-navy-card border border-navy-border rounded-2xl p-8 h-full flex flex-col items-start shadow-lg hover:shadow-xl hover:border-teal-accent/30 transition-all duration-300 relative lg:mt-6 ml-16 lg:ml-0">
                    
                    {/* Number Badge (Desktop: Top Center, Mobile: Left Timeline) */}
                    <div className="absolute -left-[4.5rem] lg:left-1/2 lg:-top-10 lg:-translate-x-1/2 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-navy-primary border border-navy-border flex items-center justify-center text-sm lg:text-base font-bold text-teal-accent shadow-sm z-20 group-hover:border-teal-accent/50 transition-colors duration-300">
                      {stepNumber}
                    </div>

                    {/* Icon */}
                    <div className="mb-6 p-3 rounded-xl bg-navy-primary border border-navy-border inline-flex items-center justify-center group-hover:border-teal-accent/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-teal-accent" strokeWidth={1.5} aria-hidden="true" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </Section>
  );
};
