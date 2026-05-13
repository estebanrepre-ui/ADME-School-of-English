/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Section, Button } from "../components/Common";
import { CONTACT_WHATSAPP } from "../constants";
import { Check, Info } from "lucide-react";

export function PricingPage() {
  const plans = [
    {
      name: "Standard Track",
      price: "$299",
      period: "per month",
      description: "Ideal for students and early-career professionals.",
      features: [
        "Small Group Sessions (max 6)",
        "2 Live Classes per week",
        "Access to digital community",
        "Standard Progress Assessment",
        "English for General Mastery"
      ],
      cta: "Start Basic Track",
      featured: false
    },
    {
      name: "Elite Professional",
      price: "$450",
      period: "per month",
      description: "Most popular for executives and ambitious leaders.",
      features: [
        "Everything in Standard",
        "Unlimited Workshop Access",
        "Business English Specialty",
        "1:1 Monthly Career Coaching",
        "Priority Support",
        "International Networking Events"
      ],
      cta: "Join Elite Track",
      featured: true
    },
    {
      name: "Corporate VIP",
      price: "Custom",
      period: "tailored program",
      description: "For teams, companies, and C-Suite executives.",
      features: [
        "Industry-Specific Curriculum",
        "On-site or Private Digital Desk",
        "Dedicated Account Success Manager",
        "Advanced Analytics & KPI Tracking",
        "Unlimited 1:1 Coaching",
        "Crisis Management Communication"
      ],
      cta: "Contact Sales",
      featured: false
    }
  ];

  return (
    <div className="pt-20">
      <Section className="pb-10 text-center">
        <h6 className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-4">Pricing Plans</h6>
        <h1 className="text-5xl md:text-7xl font-serif font-bold italic mb-8 text-white leading-tight">
          Invest In Your <span className="text-gradient-gold">Future</span>
        </h1>
        <p className="text-xl text-white/50 max-w-2xl mx-auto mb-20">
          Transparent, premium pricing designed to deliver real transformation and long-term career ROI.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col p-10 rounded-[3rem] text-left transition-all relative ${
                plan.featured 
                  ? "bg-navy-800 border-2 border-gold-500 premium-shadow scale-105 z-10" 
                  : "bg-navy-900 border border-white/5"
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold-500 text-navy-900 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Recommended
                </div>
              )}
              
              <div className="mb-10">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-xs text-white/40 mb-8">{plan.description}</p>
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-black text-white">{plan.price}</span>
                  <span className="text-sm text-white/40 mb-2 font-medium">/{plan.period}</span>
                </div>
              </div>
              
              <div className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check size={18} className="text-gold-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-white/70">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                variant={plan.featured ? "primary" : "outline"}
                className="w-full"
                onClick={() => window.open(CONTACT_WHATSAPP)}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="max-w-3xl mx-auto glass-card p-10 rounded-3xl flex flex-col md:flex-row items-center gap-8 justify-between">
           <div className="flex gap-6 items-center">
             <div className="w-16 h-16 rounded-2xl bg-gold-500/10 flex items-center justify-center text-gold-500 shrink-0">
               <Info size={32} />
             </div>
             <div>
               <h4 className="text-xl font-bold text-white mb-1">Looking for financing?</h4>
               <p className="text-sm text-white/40">We offer flexible monthly installments to help you invest in your English without stress.</p>
             </div>
           </div>
           <Button variant="ghost" className="shrink-0" onClick={() => window.open(CONTACT_WHATSAPP)}>Inquire Plans</Button>
        </div>
      </Section>
    </div>
  );
}
