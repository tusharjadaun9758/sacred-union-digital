import { useState, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import GaneshSection from "@/components/GaneshSection";
import CoupleSection from "@/components/CoupleSection";
import EventsSection from "@/components/EventsSection";
import SacredFireSection from "@/components/SacredFireSection";
import RSVPSection from "@/components/RSVPSection";
import VenueSection from "@/components/VenueSection";
import ContactSection from "@/components/ContactSection";
import GoldenParticles from "@/components/GoldenParticles";

const sections = [
  { id: "ganesh", label: "🙏 Ganesh", component: GaneshSection },
  { id: "couple", label: "💑 Couple", component: CoupleSection },
  { id: "events", label: "📜 Events", component: EventsSection },
  { id: "fire", label: "🔥 Agni", component: SacredFireSection },
  { id: "venue", label: "📍 Venue", component: VenueSection },
  { id: "rsvp", label: "💌 RSVP", component: RSVPSection },
  { id: "contact", label: "📞 Contact", component: ContactSection },
];

const Index = () => {
  const [entered, setEntered] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  const goTo = useCallback((index: number) => {
    if (index >= 0 && index < sections.length) {
      setCurrentSection(index);
    }
  }, []);

  const CurrentComponent = sections[currentSection]?.component;

  return (
    <div className="min-h-screen bg-background">
      <GoldenParticles />

      {!entered ? (
        <HeroSection onEnter={() => setEntered(true)} />
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            className="min-h-screen flex flex-col"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
          >
            {/* Top navigation dots */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-1 py-3 px-2 bg-gradient-to-b from-background/90 to-transparent backdrop-blur-sm">
              {sections.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => goTo(i)}
                  className={`text-xs font-heading px-2 py-1 rounded-sm transition-all duration-300 ${
                    i === currentSection
                      ? "bg-deep-red text-cream scale-105"
                      : "text-deep-red/60 hover:text-deep-red hover:bg-gold/10"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </nav>

            {/* Section content */}
            <div className="flex-1">
              <CurrentComponent />
            </div>

            {/* Bottom navigation */}
            <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-gradient-to-t from-background/90 to-transparent backdrop-blur-sm">
              <button
                onClick={() => goTo(currentSection - 1)}
                disabled={currentSection === 0}
                className="font-heading text-sm tracking-wider px-5 py-2 border border-gold/40 text-deep-red rounded-sm
                           hover:bg-gold/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                ← Previous
              </button>

              <span className="font-body text-deep-red/50 text-xs">
                {currentSection + 1} / {sections.length}
              </span>

              <button
                onClick={() => goTo(currentSection + 1)}
                disabled={currentSection === sections.length - 1}
                className="font-heading text-sm tracking-wider px-5 py-2 border border-gold/40 text-deep-red rounded-sm
                           hover:bg-gold/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Next →
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default Index;
