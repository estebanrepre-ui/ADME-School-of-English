/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Navbar, Footer } from "./components/Navigation";
import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { CoursesPage } from "./pages/Courses";
import { BusinessPage } from "./pages/Business";
import { TestimonialsPage } from "./pages/Testimonials";
import { PricingPage } from "./pages/Pricing";
import { ContactPage } from "./pages/Contact";
import { CONTACT_WHATSAPP } from "./constants";
import { MessageCircle } from "lucide-react";

export default function App() {
  const [activePage, setActivePage] = useState("home");

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <HomePage setActivePage={setActivePage} />;
      case "about":
        return <AboutPage setActivePage={setActivePage} />;
      case "courses":
        return <CoursesPage />;
      case "business":
        return <BusinessPage />;
      case "testimonials":
        return <TestimonialsPage />;
      case "pricing":
        return <PricingPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-navy-900 font-sans selection:bg-gold-500/30 selection:text-white">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setActivePage={setActivePage} />

      {/* Floating WhatsApp CTA */}
      <a
        href={CONTACT_WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[60] bg-green-500 hover:bg-green-400 text-white p-4 rounded-full shadow-[0_10px_30px_rgba(34,197,94,0.4)] transition-all transform hover:scale-110 active:scale-95 group"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-navy-900 text-white text-xs font-bold px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 glass-card">
          Chat with an advisor
        </span>
      </a>
    </div>
  );
}
