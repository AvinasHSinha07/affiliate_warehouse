import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Menu, X, ChevronRight, Lock } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { useActiveSection, useScrollLock } from "@/hooks/use-header-utils";

const NAV_ITEMS = [
  { label: "How It Works", href: "how-it-works" },
  { label: "Price Tracking", href: "price-tracking" },
  { label: "Fees", href: "fees" },
  { label: "Compliance", href: "compliance" },
  { label: "FAQ", href: "faq" },
  // "Apply" is handled by the CTA
];

const SECTION_IDS = [...NAV_ITEMS.map((item) => item.href), "forms-section"];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);
  const { scrollY } = useScroll();

  useScrollLock(mobileMenuOpen);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const scrolled = latest > 20;
    if (scrolled !== isScrolled) {
      setIsScrolled(scrolled);
    }
  });

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
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

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-navy-primary/85 backdrop-blur-md py-3 shadow-lg shadow-black/20"
            : "bg-navy-primary py-5 border-b border-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Thin bottom divider with faint teal gradient line */}
        <div 
          className={cn(
            "absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-teal-accent/30 to-transparent transition-opacity duration-300",
            isScrolled ? "opacity-100" : "opacity-0"
          )} 
        />

        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between relative z-10">
          {/* 2. Left Section — Brand Identity */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <span className="text-text-primary font-bold text-lg tracking-tight leading-none group-hover:text-white transition-colors">
                  Affiliate Warehouse
                </span>
              </div>
            </div>
          </div>

          {/* 3. Center — Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "relative py-2 text-sm font-medium transition-colors duration-200 group",
                    isActive ? "text-teal-accent" : "text-text-secondary hover:text-text-primary"
                  )}
                >
                  {item.label}
                  {/* Underline animation on hover */}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-teal-accent transition-all duration-300 group-hover:w-full opacity-50 group-hover:opacity-100" />
                  
                  {/* Active state indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-teal-accent"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* 4. Right Section — CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="outline" 
              className="border-teal-accent text-teal-accent hover:bg-teal-accent/10 hover:text-teal-hover bg-transparent h-10 px-6"
              onClick={() => scrollToSection("forms-section")}
            >
              Talk to Us
            </Button>
            
            <Button 
              onClick={() => scrollToSection("forms-section")}
              className="bg-teal-accent hover:bg-teal-hover text-white font-semibold border-none shadow-md shadow-teal-glow h-10 px-6 transition-all duration-200 hover:shadow-lg"
            >
              Apply
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-text-secondary hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Fade overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Slide-in Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-navy-primary border-l border-navy-border z-50 lg:hidden flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between p-6 border-b border-navy-border">
                <div className="flex items-center gap-2">
                   <span className="text-text-primary font-bold text-lg">Menu</span>
                </div>
                <button 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="text-text-secondary hover:text-white p-2 rounded-md hover:bg-navy-card transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-8 px-6 space-y-4">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "w-full text-left px-4 py-4 rounded-lg text-lg font-medium transition-all flex items-center justify-between group border border-transparent",
                      activeSection === item.href
                        ? "bg-navy-card text-teal-accent border-navy-border"
                        : "text-text-secondary hover:text-white hover:bg-navy-card/50"
                    )}
                  >
                    {item.label}
                    <ChevronRight className={cn(
                      "w-5 h-5 transition-colors",
                      activeSection === item.href ? "text-teal-accent" : "text-navy-border group-hover:text-text-muted"
                    )} />
                  </button>
                ))}
              </div>

              <div className="p-6 border-t border-navy-border bg-navy-secondary/30 space-y-4">
                <Button 
                  onClick={() => scrollToSection("forms-section")}
                  className="w-full bg-teal-accent hover:bg-teal-hover text-white font-bold h-12 shadow-lg shadow-teal-glow/20"
                >
                  Apply
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => scrollToSection("forms-section")}
                  className="w-full border-teal-accent text-teal-accent hover:bg-teal-accent/10 hover:text-teal-hover bg-transparent h-12"
                >
                  Talk to Us
                </Button>
                
                <div className="pt-4 text-center">
                  <p className="text-xs text-text-muted leading-relaxed">
                    Approval required. No lock-ins. No discount, no charge.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
