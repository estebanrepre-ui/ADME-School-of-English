/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  onClick?: () => void;
  icon?: boolean;
}

export function Button({ 
  children, 
  variant = "primary", 
  size = "md", 
  className = "", 
  onClick,
  icon = false
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-tight transition-all active:scale-95 cursor-pointer rounded-full";
  
  const variants = {
    primary: "bg-gold-500 text-navy-900 hover:bg-gold-400 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]",
    secondary: "bg-white text-navy-900 hover:bg-white/90",
    outline: "bg-transparent border-2 border-gold-500 text-gold-500 hover:bg-gold-500/10",
    ghost: "bg-transparent text-white/70 hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
    xl: "px-10 py-5 text-lg md:text-xl",
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
      {icon && <ArrowRight className="ml-2 w-4 h-4" />}
    </motion.button>
  );
}

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  dark?: boolean;
}

export function Section({ children, className = "", containerClassName = "", id, dark = false }: SectionProps) {
  return (
    <section 
      id={id} 
      className={`py-20 md:py-32 relative overflow-hidden ${dark ? "bg-navy-950" : "bg-navy-900"} ${className}`}
    >
      <div className={`max-w-7xl mx-auto px-6 relative z-10 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
