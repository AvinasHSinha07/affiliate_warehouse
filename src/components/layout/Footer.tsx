import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
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

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] border-t border-[#374151] pt-16 pb-8 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none mix-blend-overlay" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-16">
          
          {/* Column 1: Brand & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#0EA5A4] rounded flex items-center justify-center shadow-lg shadow-[#0EA5A4]/20">
                <span className="text-[#0F172A] font-bold text-sm tracking-tight">AW</span>
              </div>
              <span className="text-[#F9FAFB] font-bold text-xl tracking-tight">
                Affiliate Warehouse
              </span>
            </div>
            <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-xs">
              Better trade pricing through collective buying power, transparency, and compliance.
            </p>
            <div className="mt-6 flex items-center gap-2 text-[#0EA5A4] text-xs font-medium bg-[#0EA5A4]/10 px-3 py-1.5 rounded-full border border-[#0EA5A4]/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Wholesaler Safe & Compliant</span>
            </div>
          </motion.div>

          {/* Column 2: Company & Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <h3 className="text-[#F9FAFB] font-bold text-sm uppercase tracking-wider mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { label: "How It Works", id: "how-it-works" },
                { label: "Price Tracking", id: "price-tracking" },
                { label: "Fees & Incentives", id: "fees" },
                { label: "Compliance", id: "compliance" },
                { label: "FAQ", id: "faq" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-[#9CA3AF] hover:text-[#0EA5A4] text-sm transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Legal & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <h3 className="text-[#F9FAFB] font-bold text-sm uppercase tracking-wider mb-6">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#9CA3AF] hover:text-[#0EA5A4] text-sm transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[#9CA3AF] hover:text-[#0EA5A4] text-sm transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-[#9CA3AF] hover:text-[#0EA5A4] text-sm transition-colors duration-200">
                  Compliance Statement
                </a>
              </li>
              <li>
                <a href="#" className="text-[#9CA3AF] hover:text-[#0EA5A4] text-sm transition-colors duration-200">
                  Wholesaler Agreements
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-[#374151] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left"
        >
          <p className="text-[#6B7280] text-xs">
            © {currentYear} Affiliate Warehouse Australia. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[#6B7280] text-xs flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#10B981]" />
              Systems Operational
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
