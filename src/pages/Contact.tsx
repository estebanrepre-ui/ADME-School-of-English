/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Section, Button } from "../components/Common";
import { CONTACT_WHATSAPP } from "../constants";
import { Mail, Phone, MapPin, MessageSquare, Send } from "lucide-react";
import { useState } from "react";

export function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", school: "", message: "" });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending
    setTimeout(() => {
      setIsSent(true);
      setFormState({ name: "", email: "", school: "", message: "" });
    }, 1000);
  };

  return (
    <div className="pt-20">
      <Section className="pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-5xl md:text-7xl font-serif font-bold italic mb-8 text-white tracking-tight leading-tight">
                Let's <span className="text-gradient-gold">Talk</span> English.
              </h1>
              <p className="text-xl text-white/50 mb-12 max-w-lg leading-relaxed">
                Whether you're looking for a personal career boost or a corporate training solution, we're here to help you lead with authority.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                   <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-gold-500 border border-white/5">
                     <Mail />
                   </div>
                   <div>
                     <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-1">Email Us</h4>
                     <p className="text-white/60">admissions@adme.edu</p>
                   </div>
                </div>
                <div className="flex items-center gap-6">
                   <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-gold-500 border border-white/5">
                     <Phone />
                   </div>
                   <div>
                     <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-1">Call Admissions</h4>
                     <p className="text-white/60">+1 (555) ADME-ENG</p>
                   </div>
                </div>
                <div className="flex items-center gap-6">
                   <div className="w-14 h-14 rounded-2xl bg-gold-500/10 flex items-center justify-center text-gold-500 border border-gold-500/10">
                     <MapPin />
                   </div>
                   <div>
                     <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-1">Visit Us</h4>
                     <p className="text-white/60">San Pedro GG, Monterrey, MX</p>
                   </div>
                </div>
              </div>
              
              <div className="mt-16 p-8 rounded-[2rem] bg-gold-500 text-navy-900 flex items-center justify-between gap-6">
                 <div>
                   <h4 className="font-bold text-lg mb-1">Instant Support?</h4>
                   <p className="text-sm font-medium opacity-70">Message our advisors directly on WhatsApp.</p>
                 </div>
                 <Button variant="secondary" onClick={() => window.open(CONTACT_WHATSAPP)}>Chat Now</Button>
              </div>
            </motion.div>
          </div>
          
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-10 md:p-14 rounded-[3.5rem] relative z-10"
            >
              {isSent ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-gold-500/10 text-gold-500 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Send size={40} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Message Received!</h3>
                  <p className="text-white/50 mb-10">Our admissions team will contact you within 24 business hours.</p>
                  <Button variant="outline" onClick={() => setIsSent(false)}>Send Another</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-3xl font-bold mb-8">Send Inquire</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-4">Full Name</label>
                       <input 
                         required
                         type="text" 
                         className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold-500 transition-colors"
                         placeholder="John Doe"
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-4">Email Address</label>
                       <input 
                         required
                         type="email" 
                         className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold-500 transition-colors"
                         placeholder="john@work.com"
                       />
                    </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-4">Interested In</label>
                     <select className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold-500 transition-colors appearance-none">
                       <option className="bg-navy-900">General English</option>
                       <option className="bg-navy-900">Business English Elite</option>
                       <option className="bg-navy-900">Corporate Training</option>
                       <option className="bg-navy-900">1:1 Coaching</option>
                     </select>
                  </div>
                  <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-4">Message</label>
                       <textarea 
                         rows={4}
                         className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold-500 transition-colors"
                         placeholder="Tell us about your goals..."
                       />
                    </div>
                  <Button size="xl" className="w-full mt-4">Send Message</Button>
                </form>
              )}
            </motion.div>
            
            {/* Background Blob */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gold-500/10 blur-[100px] rounded-full -z-0" />
          </div>
        </div>
      </Section>
    </div>
  );
}
