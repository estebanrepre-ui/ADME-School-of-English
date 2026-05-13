/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X, Globe, MessageCircle, Shield, BookOpen, Star } from "lucide-react";
import { CONTACT_WHATSAPP } from "../constants";

function LogoIcon() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="text-navy-900 absolute flex flex-col items-center justify-center gap-0.5 z-10 pt-1">
        <div className="flex gap-0.5 mb-1">
          <Star size={6} fill="currentColor" className="text-gold-500" />
          <Star size={8} fill="currentColor" className="text-gold-500 -mt-1" />
          <Star size={6} fill="currentColor" className="text-gold-500" />
        </div>
        <BookOpen size={18} strokeWidth={1.5} className="text-white" />
      </div>
      <div className="text-navy-900 bg-navy-900 rounded-lg p-1 border-2 border-gold-500 transform rotate-45 w-10 h-10 flex items-center justify-center overflow-hidden">
        {/* Shield shape approximation */}
      </div>
      {/* Actual shield using SVG path for better accuracy */}
      <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute">
        <path d="M22 0L2 6.5V21C2 34 22 48 22 48C22 48 42 34 42 21V6.5L22 0Z" fill="#001A33" stroke="#C5A059" strokeWidth="2"/>
        <g transform="translate(11, 20)">
           <path d="M11 2C8 2 3 5 3 5V20C3 20 11 23 11 23C11 23 19 20 19 20V5C19 5 14 2 11 2Z" fill="none" stroke="#C5A059" strokeWidth="1.5" opacity="0.3" />
        </g>
      </svg>
      <div className="z-20 flex flex-col items-center justify-center gap-0.5 mt-1">
        <div className="flex gap-0.5 -mt-2">
          <Star size={5} fill="#C5A059" className="text-gold-500" />
          <Star size={6} fill="#C5A059" className="text-gold-500 -mt-1" />
          <Star size={5} fill="#C5A059" className="text-gold-500" />
        </div>
        <BookOpen size={16} strokeWidth={1.5} className="text-gold-500 mt-1" />
      </div>
    </div>
  );
}

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export function Navbar({ activePage, setActivePage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Courses", id: "courses" },
    { name: "Business", id: "business" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Pricing", id: "pricing" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-navy-900/80 backdrop-blur-lg py-4 border-b border-white/10" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button 
          onClick={() => setActivePage("home")}
          className="flex items-center gap-4 group cursor-pointer"
        >
          <LogoIcon />
          <div className="flex flex-col leading-none">
            <span className="text-3xl font-serif font-bold tracking-tight text-white uppercase italic">ADME</span>
            <span className="text-[9px] text-gold-500 font-bold tracking-[0.25em] uppercase mt-1">School of English</span>
          </div>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActivePage(link.id)}
              className={`text-sm font-medium transition-colors hover:text-gold-500 cursor-pointer ${
                activePage === link.id ? "text-gold-500" : "text-white/70"
              }`}
            >
              {link.name}
            </button>
          ))}
          <a 
            href={CONTACT_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-500 hover:bg-gold-400 text-navy-900 px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-800 border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    setActivePage(link.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-lg font-semibold py-2 transition-colors ${
                    activePage === link.id ? "text-gold-500" : "text-white/70"
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <a 
                href={CONTACT_WHATSAPP}
                className="bg-gold-500 text-navy-900 w-full py-4 rounded-xl text-center font-bold mt-4"
              >
                Join Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer({ setActivePage }: { setActivePage: (p: string) => void }) {
  return (
    <footer className="bg-navy-950 pt-20 pb-10 border-t border-white/5 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-white/60">
        <div className="md:col-span-1">
          <div className="flex items-center gap-4 mb-8">
            <LogoIcon />
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold text-white tracking-tight italic uppercase">ADME</span>
              <span className="text-[8px] text-gold-500 font-bold tracking-[0.2em] uppercase">School of English</span>
            </div>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Advanced Development of Multilingual Excellence. Transforming futures through premium English education.
          </p>
          <div className="flex gap-4">
            {/* Social Icons */}
            <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-gold-500 transition-colors cursor-pointer">
              <Globe size={18} />
            </div>
            <a href={CONTACT_WHATSAPP} className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-gold-500 transition-colors">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Programs</h4>
          <ul className="space-y-4 text-sm">
            <li><button onClick={() => setActivePage("courses")} className="hover:text-gold-500 cursor-pointer">General English</button></li>
            <li><button onClick={() => setActivePage("business")} className="hover:text-gold-500 cursor-pointer">Business English</button></li>
            <li><button onClick={() => setActivePage("courses")} className="hover:text-gold-500 cursor-pointer">TOEFL/IELTS Prep</button></li>
            <li><button onClick={() => setActivePage("business")} className="hover:text-gold-500 cursor-pointer">Corporate Training</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><button onClick={() => setActivePage("about")} className="hover:text-gold-500 cursor-pointer">Our Mission</button></li>
            <li><button onClick={() => setActivePage("testimonials")} className="hover:text-gold-500 cursor-pointer">Success Stories</button></li>
            <li><button onClick={() => setActivePage("pricing")} className="hover:text-gold-500 cursor-pointer">Pricing Plans</button></li>
            <li><button onClick={() => setActivePage("contact")} className="hover:text-gold-500 cursor-pointer">Contact Us</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Contact</h4>
          <ul className="space-y-4 text-sm">
            <li>info@adme.edu</li>
            <li>+1 (555) 123-4567</li>
            <li>Monterrey, Nuevo León, México</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-widest">
        <span>© 2024 ADME School of English. All rights reserved.</span>
        <div className="flex gap-8">
          <button className="hover:text-gold-500 cursor-pointer">Privacy Policy</button>
          <button className="hover:text-gold-500 cursor-pointer">Terms of Service</button>
        </div>
      </div>
    </footer>
  );
}
