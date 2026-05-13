/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Section, Button } from "../components/Common";
import { TESTIMONIALS, CONTACT_WHATSAPP } from "../constants";
import { Quote, Star } from "lucide-react";

export function TestimonialsPage() {
  return (
    <div className="pt-20">
      <Section className="pb-10 text-center">
        <h6 className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-4">Success Stories</h6>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-white">
          The <span className="text-gradient-gold">Evidence</span> of Transformation
        </h1>
        <p className="text-xl text-white/50 max-w-2xl mx-auto mb-20">
          We don't sell English classes. We facilitate career breakthrough moments. Read from our global alumni.
        </p>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
           {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="break-inside-avoid glass-card p-10 rounded-[2.5rem] mb-8 relative group"
             >
               <Quote className="text-gold-500/5 absolute top-10 right-10 group-hover:text-gold-500/20 transition-colors" size={100} />
               
               <div className="flex items-center gap-2 mb-6">
                 {[...Array(5)].map((_, j) => <Star key={j} size={14} className="fill-gold-500 text-gold-500" />)}
               </div>
               
               <p className="text-lg text-white/80 leading-relaxed italic mb-10 relative z-10 font-medium">"{t.text}"</p>
               
               <div className="flex items-center gap-4 relative z-10 border-t border-white/5 pt-8">
                 <img src={t.image + `&ov=${i}`} alt={t.name} className="w-16 h-16 rounded-full object-cover border-2 border-gold-500/20" />
                 <div className="text-left">
                   <h5 className="font-bold text-white text-lg">{t.name}</h5>
                   <p className="text-gold-500 text-xs font-bold uppercase tracking-widest">{t.role}</p>
                 </div>
               </div>
             </motion.div>
           ))}
        </div>
      </Section>

      <Section dark className="text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Ready to write your success story?</h2>
          <p className="text-white/50 mb-10">Join 5,000+ graduates who transformed their professional presence with ADME.</p>
          <Button size="xl" onClick={() => window.open(CONTACT_WHATSAPP)}>Book My Consultation</Button>
        </div>
      </Section>
    </div>
  );
}
