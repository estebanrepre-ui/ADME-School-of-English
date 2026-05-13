/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Section, Button } from "../components/Common";
import { CONTACT_WHATSAPP } from "../constants";
import { Briefcase, TrendingUp, Handshake, ShieldCheck, Globe2 } from "lucide-react";

export function BusinessPage() {
  return (
    <div className="pt-20">
      <Section className="relative overflow-hidden">
        {/* Background Decorative */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[100px] -mr-64 -mt-64" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h6 className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-4">Enterprise Solutions</h6>
            <h1 className="text-5xl md:text-7xl font-serif font-bold italic mb-8 text-white leading-tight">
              Corporate <br /> <span className="text-gradient-gold">Excellence</span>
            </h1>
            <p className="text-xl text-white/60 mb-10 leading-relaxed max-w-lg">
              Empower your teams with the linguistic tools they need to close deals, manage international logistics, and lead with authority in a global market.
            </p>
            <Button size="xl" onClick={() => window.open(CONTACT_WHATSAPP)}>Inquire for Teams</Button>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
               <div className="glass-card p-8 rounded-[2rem] border-white/5">
                 <ShieldCheck className="text-gold-500 mb-4" />
                 <h4 className="font-bold text-white mb-2">Authority</h4>
                 <p className="text-xs text-white/40">Present and negotiate with native-level confidence.</p>
               </div>
               <div className="glass-card p-8 rounded-[2rem] border-white/5">
                 <TrendingUp className="text-gold-500 mb-4" />
                 <h4 className="font-bold text-white mb-2">Growth</h4>
                 <p className="text-xs text-white/40">Unlock new international revenue streams.</p>
               </div>
            </div>
            <div className="space-y-4">
               <div className="glass-card p-8 rounded-[2rem] border-white/5">
                 <Globe2 className="text-gold-500 mb-4" />
                 <h4 className="font-bold text-white mb-2">Scale</h4>
                 <p className="text-xs text-white/40">Standardize communication across global branches.</p>
               </div>
               <div className="glass-card p-8 rounded-[2rem] border-white/5">
                 <Handshake className="text-gold-500 mb-4" />
                 <h4 className="font-bold text-white mb-2">Deals</h4>
                 <p className="text-xs text-white/40">Close complex negotiations in high-stakes English.</p>
               </div>
            </div>
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-serif font-bold mb-6 italic text-white/90">"The language of business is English. The language of success is confidence."</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { title: "Logistics English", text: "Specialized terminology for Monterrey's booming industrial sector." },
             { title: "Legal & Finance", text: "High-precision communication for high-stakes industries." },
             { title: "Tech & SaaS", text: "Modern English for the fast-paced world of tech startups." }
           ].map((item, i) => (
             <div key={i} className="p-10 rounded-[3rem] bg-navy-900 border border-white/5 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                 <Briefcase size={80} />
               </div>
               <h4 className="text-2xl font-serif font-bold mb-6 text-gradient-gold italic">{item.title}</h4>
               <p className="text-sm text-white/50 leading-relaxed">{item.text}</p>
             </div>
           ))}
        </div>
      </Section>

      <Section className="text-center">
        <div className="glass-card p-16 rounded-[4rem] border-gold-500/10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to transform your company?</h2>
          <p className="text-white/60 mb-12 max-w-xl mx-auto">Get a custom corporate training proposal designed specifically for your industry and team size.</p>
          <Button size="xl" onClick={() => window.open(CONTACT_WHATSAPP)}>Request Proposal</Button>
        </div>
      </Section>
    </div>
  );
}
