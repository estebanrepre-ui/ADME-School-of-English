/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Section, Button } from "../components/Common";
import { Globe, Award, Heart, Target } from "lucide-react";

export function AboutPage({ setActivePage }: { setActivePage: (p: string) => void }) {
  return (
    <div className="pt-20">
      <Section className="pb-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-serif font-bold italic mb-8">
            The Mission Behind <span className="text-gradient-gold">ADME</span>
          </h1>
          <p className="text-xl text-white/60 leading-relaxed">
            ADME stands for Advanced Development of Multilingual Excellence. We aren't just an English school; we are an elite coaching laboratory for international professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200&h=800" 
              className="rounded-3xl premium-shadow border border-white/10"
              alt="Team collaborating"
            />
          </div>
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4 flex items-center gap-3">
                <Target className="text-gold-500" /> Our Vision
              </h2>
              <p className="text-white/60 leading-relaxed">
                To bridge the communication gap for Latin American professionals, empowering them to compete and excel in the global marketplace without language barriers.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4 flex items-center gap-3">
                <Heart className="text-gold-500" /> Why We Exist
              </h2>
              <p className="text-white/60 leading-relaxed">
                Most English schools focus on exams. We focus on people. We saw too many brilliant professionals losing opportunities because of a lack of confidence in their speaking skills. ADME was born to change that.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: <Award />, title: "Excellence", text: "Premium standards in everything we do." },
            { icon: <Globe />, title: "International", text: "Global mindset and methodologies." },
            { icon: <Users />, title: "Community", text: "Elite network of students and mentors." },
            { icon: <Heart />, title: "Humanity", text: "Personalized care for every student." }
          ].map((v, i) => (
            <div key={i} className="glass-card p-10 rounded-3xl">
              <div className="text-gold-500 flex justify-center mb-6">{v.icon}</div>
              <h4 className="text-xl font-bold mb-2">{v.title}</h4>
              <p className="text-sm text-white/40">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="text-center">
         <h2 className="text-4xl font-bold mb-8">Ready to join the elite?</h2>
         <Button size="xl" onClick={() => setActivePage("contact")}>Contact Us</Button>
      </Section>
    </div>
  );
}

function Users() { return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> }
