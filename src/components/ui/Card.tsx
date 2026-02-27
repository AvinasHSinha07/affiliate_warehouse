import React from "react";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ className, children, hoverEffect = false, ...props }) => {
  return (
    <div
      className={cn(
        "bg-white rounded-xl p-6 shadow-sm border border-slate-100",
        hoverEffect && "transition-all duration-300 hover:shadow-md hover:border-slate-200",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
