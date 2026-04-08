import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import templeDoors from "@/assets/temple-doors.jpg";
import Diya from "@/components/Diya";

interface HeroSectionProps {
  onEnter: () => void;
}

const HeroSection = ({ onEnter }: HeroSectionProps) => {
  const [doorsOpen, setDoorsOpen] = useState(false);

  const handleEnter = () => {
    setDoorsOpen(true);
    setTimeout(onEnter, 2000);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={templeDoors}
          alt="Temple entrance"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      {/* Temple Doors Animation */}
      <AnimatePresence>
        {doorsOpen && (
          <>
            <motion.div
              className="absolute inset-y-0 left-0 w-1/2 z-20"
              style={{ background: "linear-gradient(90deg, hsl(0 100% 20%), hsl(0 100% 27%))" }}
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1] }}
            />
            <motion.div
              className="absolute inset-y-0 right-0 w-1/2 z-20"
              style={{ background: "linear-gradient(-90deg, hsl(0 100% 20%), hsl(0 100% 27%))" }}
              initial={{ x: 0 }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1] }}
            />
            <motion.div
              className="absolute inset-0 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              style={{
                background: "radial-gradient(circle, hsl(43 80% 65% / 0.6), transparent)",
              }}
            />
          </>
        )}
      </AnimatePresence>

      {/* Content */}
      <motion.div
        className="relative z-30 text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {/* Bells */}
        <div className="flex justify-center gap-16 mb-6">
          <span className="text-4xl animate-bell inline-block">🔔</span>
          <span className="text-4xl animate-bell inline-block" style={{ animationDelay: "0.5s" }}>🔔</span>
        </div>

        {/* Diyas */}
        <div className="flex justify-center gap-12 mb-8">
          <Diya />
          <Diya />
        </div>

        <p className="font-shloka text-cream/90 text-lg mb-4 tracking-wider">
          ॐ शुभ विवाह
        </p>

        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-cream mb-4 tracking-wide">
          <span className="text-gradient-gold">Sacred Union</span>
        </h1>

        <p className="font-shloka text-cream/80 text-xl md:text-2xl mb-2">
          श्री गणेशाय नमः
        </p>

        <p className="font-body text-cream/70 text-lg md:text-xl mb-12 italic">
          A Divine Celebration of Love
        </p>

        {!doorsOpen && (
          <motion.button
            onClick={handleEnter}
            className="font-heading px-10 py-4 border-2 border-gold/60 text-cream bg-gold/20 
                       rounded-sm text-lg tracking-widest uppercase
                       hover:bg-gold/30 hover:border-gold transition-all duration-500
                       animate-pulse-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            🙏 Enter the Ceremony
          </motion.button>
        )}
      </motion.div>
    </div>
  );
};

export default HeroSection;
