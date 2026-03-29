import { useState } from "react";
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

const Index = () => {
  const [entered, setEntered] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <GoldenParticles />

      {!entered ? (
        <HeroSection onEnter={() => setEntered(true)} />
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <GaneshSection />
            <CoupleSection />
            <EventsSection />
            <SacredFireSection />
            <VenueSection />
            <RSVPSection />
            <ContactSection />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default Index;
