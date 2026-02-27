import React from "react";
import { Section } from "@/components/ui/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { motion } from "motion/react";

const FAQ_ITEMS = [
  {
    q: "What wholesaler accounts do I get access to?",
    a: "You gain access to corporate-level pricing tiers at major national suppliers including TradeZone, Ideal Electrical, and Voltex."
  },
  {
    q: "How does Affiliate Warehouse make money?",
    a: "We only charge a fee of 1.1% on the verified discount achieved. If we don't save you money compared to your standard trade pricing, there is no charge."
  },
  {
    q: "Am I locked in?",
    a: "No. There are no lock-in contracts, minimum spend requirements, or exclusivity clauses. You retain full independence."
  },
  {
    q: "How do I know pricing is improving?",
    a: "You can compare our group pricing directly against your original trade accounts at any time. Transparency is total."
  },
  {
    q: "Is this compliant with supplier systems?",
    a: "Yes. All transactions occur within existing wholesaler systems with full backend traceability and job coding. We do not disrupt the supply chain."
  },
  {
    q: "What if it stops being useful?",
    a: "You can stop using the service at any time without penalty. You simply revert to using your standard trade accounts."
  },
  {
    q: "How are better prices achieved?",
    a: "Better pricing is achieved through the aggregated purchasing volume of our independent preferred contractors nationally, unlocking corporate tiers usually reserved for large firms."
  }
];

export const FAQ = () => {
  return (
    <Section id="faq" className="bg-[#0F172A] py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F3F4F6] mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="h-px w-24 bg-[#0EA5A4]/40 mx-auto" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${i}`} 
                className="bg-[#1F2937]/40 border border-[#374151]/50 rounded-xl px-6 overflow-hidden transition-all duration-300 hover:border-[#0EA5A4]/30 hover:bg-[#1F2937]/60"
              >
                <AccordionTrigger className="text-[#F3F4F6] hover:text-[#0EA5A4] text-left font-semibold py-5 text-base md:text-lg transition-colors [&[data-state=open]]:text-[#0EA5A4]">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#D1D5DB] pb-6 text-base leading-relaxed font-light">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </Section>
  );
};
