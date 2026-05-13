/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Section, Button } from "../components/Common";
import { COURSES, CONTACT_WHATSAPP } from "../constants";
import { CheckCircle2, Clock, BarChart } from "lucide-react";

export function CoursesPage() {
  return (
    <div className="pt-20">
      <Section className="pb-10 text-center">
        <h1 className="text-5xl md:text-7xl font-serif font-bold italic mb-8">
          Premium <span className="text-gradient-gold">Programs</span>
        </h1>
        <p className="text-xl text-white/60 max-w-2xl mx-auto mb-20">
          Tailored English paths designed for real-world transformation. Choose the program that fits your goals.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          {COURSES.map((course, idx) => (
            <motion.div 
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-10 md:p-14 rounded-[3rem] border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-gold-500/10 transition-colors" />
              
              <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10">
                <div>
                  <h3 className="text-3xl font-serif font-bold italic mb-2 group-hover:text-gold-500 transition-colors">{course.title}</h3>
                  <p className="text-gold-500 font-bold uppercase tracking-widest text-[10px] bg-gold-500/10 px-3 py-1 rounded-full inline-block">
                    {course.level}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-white/40 uppercase tracking-widest mb-1">Price</div>
                  <div className="text-2xl font-bold text-white tracking-tight">{course.price}</div>
                </div>
              </div>
              
              <p className="text-white/60 mb-10 text-lg leading-relaxed">{course.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-4">
                  <h5 className="text-xs font-bold uppercase tracking-widest text-white/40 border-b border-white/5 pb-2">Outcomes</h5>
                  {course.outcomes.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-white/70">
                      <CheckCircle2 size={16} className="text-gold-500 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gold-500">
                       <Clock size={20} />
                     </div>
                     <div>
                       <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Duration</div>
                       <div className="text-sm font-bold text-white">{course.duration}</div>
                     </div>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gold-500">
                       <BarChart size={20} />
                     </div>
                     <div>
                       <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Progression</div>
                       <div className="text-sm font-bold text-white">Advanced Track</div>
                     </div>
                  </div>
                </div>
              </div>
              
              <Button size="lg" className="w-full" onClick={() => window.open(CONTACT_WHATSAPP)}>
                Enroll in {course.title}
              </Button>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section dark className="text-center">
        <h2 className="text-3xl font-bold mb-6">Unsure which path is for you?</h2>
        <p className="text-white/50 mb-10 max-w-lg mx-auto">Get a free placement assessment and career consultation today.</p>
        <Button variant="outline" size="xl" onClick={() => window.open(CONTACT_WHATSAPP)}>Book Assessment Call</Button>
      </Section>
    </div>
  );
}
