/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Users, 
  MessageSquare, 
  Briefcase, 
  Zap, 
  ChevronRight, 
  CheckCircle2,
  Quote,
  Star
} from "lucide-react";
import { Section, Button } from "../components/Common";
import { COURSES, TESTIMONIALS, FAQS, CONTACT_WHATSAPP } from "../constants";

export function HomePage({ setActivePage }: { setActivePage: (p: string) => void }) {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="min-h-[90vh] flex items-center !pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 text-gold-500 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
            >
              <Zap size={14} className="fill-gold-500" />
              Enrollment Open for 2024
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-8">
              Speak English With <br />
              <span className="text-gradient-gold italic">Confidence</span> In Real Life.
            </h1>
            
            <p className="text-xl text-white/60 mb-10 max-w-lg leading-relaxed">
              Stop studying grammar. Start building real fluency for work, travel, and business with Monterrey's most premium speaking academy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="xl" icon onClick={() => setActivePage("contact")}>
                Start Your English Journey
              </Button>
              <Button variant="outline" size="xl" onClick={() => window.open(CONTACT_WHATSAPP)}>
                WhatsApp Consultation
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 mb-12">
              <div className="flex items-center gap-2 text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] border-r border-white/10 pr-6">
                <CheckCircle2 size={12} className="text-gold-500" /> Authorized Center
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] border-r border-white/10 pr-6">
                <CheckCircle2 size={12} className="text-gold-500" /> IELTS/TOEFL Prep
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">
                <CheckCircle2 size={12} className="text-gold-500" /> Business Certified
              </div>
            </div>
            
            <div className="flex items-center gap-8 border-t border-white/10 pt-10">
              <div>
                <div className="text-2xl font-bold text-white tracking-tight">5,000+</div>
                <div className="text-xs text-white/40 uppercase tracking-widest mt-1">Students</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white tracking-tight">98%</div>
                <div className="text-xs text-white/40 uppercase tracking-widest mt-1">Success Rate</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex text-gold-500">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <div className="text-xs text-white/40 uppercase tracking-widest mt-1">Reviews</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden premium-shadow border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200&h=1400" 
                alt="Students practicing English"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Animated UI Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 glass-card p-6 rounded-2xl z-20 hidden md:block"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center">
                  <MessageSquare className="text-navy-900" />
                </div>
                <div>
                  <div className="text-sm font-bold">Native Practice</div>
                  <div className="text-[10px] text-white/50 uppercase">Live 1:1 Sessions</div>
                </div>
              </div>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-navy-900 bg-slate-800 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="avatar" />
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-navy-900 bg-gold-500 flex items-center justify-center text-[10px] font-bold text-navy-900">
                  +24
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl z-20 hidden md:block"
            >
              <div className="text-gold-500 font-bold text-xl mb-1">$50k+</div>
              <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Salary Avg Increase</div>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* The Problem Section */}
      <Section dark className="text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 italic">Stuck between studying English and <span className="text-gold-500">actually speaking it?</span></h2>
          <p className="text-xl text-white/60 mb-16">
            Traditional schools focus on grammar books and tests. But when it's time to speak in a meeting or travel abroad, the words don't come. You're losing job opportunities and international connections.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Briefcase />, title: "Career Block", text: "Losing high-paying international job opportunities." },
              { icon: <MessageSquare />, title: "Speaking Fear", text: "Freezing when asked to speak in meetings or travel." },
              { icon: <Zap />, title: "Wasted Years", text: "Years of studying without seeing real conversational results." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl glass-card text-left">
                <div className="text-gold-500 mb-6">{item.icon}</div>
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-sm text-white/50 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Programs Section */}
      <Section id="programs">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl text-left">
            <h6 className="text-gold-500 font-bold uppercase tracking-widest text-[10px] mb-4">Our Elite Programs</h6>
            <h2 className="text-4xl md:text-6xl font-serif font-bold italic">Accelerate Your Future</h2>
          </div>
          <Button variant="ghost" onClick={() => setActivePage("courses")}>View All Programs</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COURSES.map((course) => (
            <motion.div
              key={course.id}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-3xl flex flex-col h-full group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-8 ${
                course.color === 'gold' ? 'bg-gold-500 text-navy-900 font-bold' : 'bg-blue-500/20 text-blue-400'
              }`}>
                {course.id === 'business-english' ? <Briefcase size={20} /> : <MessageSquare size={20} />}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-gold-500 transition-colors">{course.title}</h3>
              <p className="text-sm text-white/50 mb-8 flex-grow">{course.description}</p>
              
              <div className="space-y-3 mb-8 pt-8 border-t border-white/5">
                {course.outcomes.map((outcome, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-white/70">
                    <CheckCircle2 size={14} className="text-gold-500" />
                    {outcome}
                  </div>
                ))}
              </div>
              
              <Button 
                variant={course.color === 'gold' ? 'primary' : 'outline'} 
                className="w-full"
                onClick={() => setActivePage("courses")}
              >
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Social Proof */}
      <Section dark id="testimonials">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 italic">Real Results. <br /> <span className="text-gradient-gold">Real Stories.</span></h2>
          <p className="text-white/50 max-w-2xl mx-auto">See how ADME students are transforming their careers and lives through English mastery.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div 
              key={i}
              className="glass-card p-10 rounded-3xl relative"
              whileHover={{ scale: 1.02 }}
            >
              <Quote className="text-gold-500/20 absolute top-8 right-8" size={60} />
              <div className="flex items-center gap-4 mb-8">
                <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover border-2 border-gold-500/30" />
                <div>
                  <h5 className="font-bold text-white text-lg">{t.name}</h5>
                  <p className="text-gold-500 text-xs font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed italic">"{t.text}"</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 bg-gold-500 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-navy-900 text-3xl md:text-4xl font-bold mb-2">Join Monterrey's Elite</h3>
            <p className="text-navy-900/70 font-medium">Be the next success story in our global community.</p>
          </div>
          <Button variant="secondary" size="xl" className="relative z-10" onClick={() => window.open(CONTACT_WHATSAPP)}>
            Book My Call
          </Button>
        </div>
      </Section>

      {/* Corporate Strategy Section */}
      <Section id="business">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
             <img 
               src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200&h=800" 
               alt="Business meeting" 
               className="rounded-3xl premium-shadow"
             />
          </div>
          <div className="order-1 lg:order-2">
            <h6 className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-4">Corporate Solutions</h6>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">English for Global Teams</h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              We help companies scale their international communication. From logistics firms in Monterrey to tech startups expanding globally.
            </p>
            <ul className="space-y-6 mb-12">
              {[
                "Executive Coaching & Leadership Presence",
                "Logistics & Negotiation Specialties",
                "Customized Progress Reports",
                "Flexible Scheduling for Teams"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={14} className="text-gold-500" />
                  </div>
                  <span className="text-white/80 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Button size="lg" onClick={() => setActivePage("contact")}>Inquire Corporate</Button>
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section dark className="text-center">
        <h6 className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-4">Our Method</h6>
        <h2 className="text-4xl md:text-5xl font-bold mb-20">3 Steps to Fluency</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line Desktop */}
          <div className="hidden md:block absolute top-[60px] left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
          
          {[
            { step: "01", title: "Consultation Call", text: "Brief intro to understand your goals and assess your level." },
            { step: "02", title: "Personalized Plan", text: "We define the roadmap for your specific professional transformation." },
            { step: "03", title: "Start Speaking", text: "Jump straight into conversation-based learning from day one." }
          ].map((item, i) => (
            <div key={i} className="relative z-10 px-4">
               <div className="w-16 h-16 bg-navy-900 border border-gold-500/30 text-gold-500 rounded-2xl flex items-center justify-center font-bold text-2xl mx-auto mb-8 premium-shadow">
                 {item.step}
               </div>
               <h4 className="text-xl font-bold mb-4 text-white">{item.title}</h4>
               <p className="text-sm text-white/50 leading-relaxed max-w-[250px] mx-auto">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section id="faq">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-white/50">Everything you need to know about starting your English journey.</p>
          </div>
          
          <div className="space-y-6">
            {FAQS.map((faq, i) => (
              <div key={i} className="p-8 rounded-2xl glass-card">
                <h4 className="text-lg font-bold mb-4 text-white">{faq.question}</h4>
                <p className="text-sm text-white/50 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="!pb-0">
        <div className="bg-navy-800 rounded-t-[4rem] px-8 py-24 md:py-32 text-center border-t border-x border-white/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-8xl font-serif font-bold mb-10 tracking-tight leading-none text-white italic">
              YOUR FUTURE <br /> 
              <span className="text-gradient-gold">STARTS NOW.</span>
            </h2>
            <p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto">
              Don't let another year pass by. Transform your career and confidence with ADME School of English.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button size="xl" onClick={() => setActivePage("contact")}>Enroll Today</Button>
              <Button variant="outline" size="xl" onClick={() => window.open(CONTACT_WHATSAPP)}>
                Fast WhatsApp Support
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
