import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
  children: React.ReactNode;
  darker?: boolean;
}

export const Section = ({ id, className, children, darker = false, ...props }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-32 px-4 md:px-6 relative overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
};
