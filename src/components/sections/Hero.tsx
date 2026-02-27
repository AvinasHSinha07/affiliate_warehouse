import React from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { 
  ShieldCheck, 
  Building2, 
  TrendingUp, 
  Lock, 
  CheckCircle2, 
  Star,
  ArrowRight,
  Layers
} from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const Hero = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <Section className="pt-32 md:pt-48 pb-20 md:pb-32 relative bg-navy-primary">
      {/* Background Gradients - Subtle Teal Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-teal-accent/5 rounded-full blur-[150px]" />
      </div>

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Content (7 cols) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Approval Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-accent/30 text-teal-accent text-xs font-medium tracking-wide uppercase bg-teal-accent/5">
              <Lock className="w-3 h-3" />
              Approval Required
            </div>
          </motion.div>
          
          {/* Headline */}
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-6 tracking-tight">
            We Help Our Preferred Contractors <span className="text-teal-accent">Access Better Pricing</span> — Transparently
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p variants={itemVariants} className="text-lg text-text-secondary mb-10 max-w-xl leading-relaxed font-light border-l-2 border-navy-border pl-6">
            Collective buying power, price tracking, and corporate-level trade accounts — without lock-ins or obligations.
          </motion.p>
          
          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto">
            <Button 
              size="lg" 
              onClick={scrollToForms} 
              className="bg-teal-accent hover:bg-teal-hover text-white font-semibold border-none shadow-md shadow-teal-glow/20 h-14 px-8 text-base transition-all duration-200"
              aria-label="Apply to become a preferred contractor"
            >
              Apply to Become a Preferred Contractor
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={scrollToForms}
              className="border-teal-accent text-teal-accent hover:bg-teal-accent/5 hover:text-teal-hover bg-transparent h-14 px-8 text-base transition-colors duration-200"
              aria-label="Talk to us first"
            >
              Talk to Us First
            </Button>
          </motion.div>

          {/* Trust Row */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-text-muted mb-12 border-t border-navy-border pt-8 w-full">
            {[
              { icon: Lock, text: "No lock-ins" },
              { icon: ShieldCheck, text: "No discount = no charge" },
              { icon: TrendingUp, text: "Optional price-change alerts" },
              { icon: CheckCircle2, text: "Wholesaler-safe model" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 group">
                <item.icon className="w-4 h-4 text-teal-accent/60 group-hover:text-teal-accent transition-colors" />
                <span className="group-hover:text-text-secondary transition-colors font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>
          
          {/* Social Proof */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <div className="flex flex-col gap-1.5">
              <div className="flex text-teal-accent gap-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
              </div>
              <span className="text-xs text-text-secondary font-medium tracking-wide uppercase">Trusted by Trade Professionals</span>
            </div>
            <div className="h-8 w-px bg-navy-border hidden sm:block" />
            <div className="flex flex-col gap-1.5">
              <p className="text-xs text-text-muted italic">"Structured and transparent."</p>
              <p className="text-xs text-text-muted italic">"Professional and straightforward onboarding."</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Visual Panel (5 cols) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="lg:col-span-5 relative mt-12 lg:mt-0"
        >
          <div className="relative space-y-4">
            {/* Card 1 */}
            <motion.div
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              className="bg-navy-card border border-navy-border p-6 rounded-lg shadow-lg flex items-start gap-5 group hover:border-teal-accent/30 transition-colors relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-teal-accent/50 group-hover:bg-teal-accent transition-colors" />
              <div className="w-10 h-10 rounded bg-navy-primary border border-navy-border flex items-center justify-center shrink-0 text-teal-accent">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-base mb-1 group-hover:text-teal-accent transition-colors">Corporate Pricing Access</h3>
                <p className="text-text-secondary text-sm leading-relaxed">Aggregated national purchasing volume across major suppliers.</p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              className="bg-navy-card border border-navy-border p-6 rounded-lg shadow-lg flex items-start gap-5 group hover:border-teal-accent/30 transition-colors relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-teal-accent/50 group-hover:bg-teal-accent transition-colors" />
              <div className="w-10 h-10 rounded bg-navy-primary border border-navy-border flex items-center justify-center shrink-0 text-teal-accent">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-base mb-1 group-hover:text-teal-accent transition-colors">Price Tracking</h3>
                <p className="text-text-secondary text-sm leading-relaxed">Monitor repeat purchase pricing over time with automated alerts.</p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              className="bg-navy-card border border-navy-border p-6 rounded-lg shadow-lg flex items-start gap-5 group hover:border-teal-accent/30 transition-colors relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-teal-accent/50 group-hover:bg-teal-accent transition-colors" />
              <div className="w-10 h-10 rounded bg-navy-primary border border-navy-border flex items-center justify-center shrink-0 text-teal-accent">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-base mb-1 group-hover:text-teal-accent transition-colors">Wholesaler-Safe Model</h3>
                <p className="text-text-secondary text-sm leading-relaxed">Operates strictly within existing supplier systems. No disruption.</p>
              </div>
            </motion.div>

            {/* Subtle Shimmer Overlay on Load */}
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none z-20"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
