import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import SectionDivider from "@/components/SectionDivider";
import RadhaKrishnaBackground from "@/components/RadhaKrishnaBackground";

const defaultBlessings = [
  "May your love grow stronger with each passing day 🙏",
  "Wishing you a lifetime of happiness and togetherness ✨",
  "May God bless this beautiful union with eternal joy 🪷",
  "Congratulations! May your journey together be divine 💫",
  "Sending love and blessings for your new beginning 🌸",
];

const RSVPSection = () => {
  const [accepted, setAccepted] = useState(false);
  const [blessings, setBlessings] = useState<string[]>(defaultBlessings);
  const [newBlessing, setNewBlessing] = useState("");
  const marqueeRef = useRef<HTMLDivElement>(null);

  const handleAccept = () => {
    setAccepted(true);
  };

  const handleAddBlessing = () => {
    const trimmed = newBlessing.trim();
    if (trimmed) {
      setBlessings((prev) => [...prev, trimmed]);
      setNewBlessing("");
    }
  };

  return (
    <section className="py-20 min-h-screen bg-temple-gradient relative">
      <div className="bg-sacred absolute inset-0" />
      <RadhaKrishnaBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-shloka text-saffron text-lg mb-2">कृपया सूचित करें</p>
          <h2 className="font-heading text-3xl md:text-5xl text-deep-red">
            Your Blessings
          </h2>
        </motion.div>

        {/* Accept Button */}
        <motion.div
          className="max-w-md mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {accepted ? (
            <div className="text-center border-ornate rounded-sm p-12 bg-card/50">
              <span className="text-6xl mb-6 block">🙏</span>
              <h3 className="font-heading text-2xl text-deep-red mb-2">
                Thank You for Your Blessings!
              </h3>
              <p className="font-body text-muted-foreground italic">
                Your presence will make the ceremony truly divine.
              </p>
            </div>
          ) : (
            <div className="border-ornate rounded-sm p-8 md:p-10 bg-card/50 backdrop-blur-sm space-y-6 text-center">
              <p className="font-body text-foreground/80 mb-4">
                Will you grace us with your presence?
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAccept}
                className="py-4 px-10 rounded-sm border border-gold bg-gold/20 text-deep-red font-heading text-sm tracking-widest uppercase
                           hover:bg-gold/30 transition-all duration-300 glow-gold mx-auto"
              >
                🙏 Accept with Blessings
              </motion.button>
            </div>
          )}
        </motion.div>

        {/* Blessings Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="font-heading text-xl md:text-2xl text-deep-red text-center mb-6">
            ✨ Wall of Blessings ✨
          </h3>

          {/* Blessing Input */}
          <div className="max-w-lg mx-auto mb-10 flex gap-3">
            <input
              type="text"
              value={newBlessing}
              onChange={(e) => setNewBlessing(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAddBlessing()}
              placeholder="Write your blessing here..."
              maxLength={150}
              className="flex-1 px-4 py-3 rounded-sm border-2 border-gold/40 bg-card/60 backdrop-blur-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddBlessing}
              className="px-6 py-3 rounded-sm border border-gold bg-gold/20 text-deep-red font-heading text-xs tracking-widest uppercase hover:bg-gold/30 transition-all duration-300 glow-gold whitespace-nowrap"
            >
              Send 🙏
            </motion.button>
          </div>

          {/* Scrolling Blessings Marquee */}
          <div className="relative overflow-hidden py-4">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[hsl(48_100%_90%)] to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-[hsl(48_100%_90%)] to-transparent pointer-events-none" />

            <div
              ref={marqueeRef}
              className="flex gap-6 animate-marquee"
              style={{
                width: "max-content",
              }}
            >
              {/* Duplicate blessings for seamless loop */}
              {[...blessings, ...blessings].map((blessing, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-6 py-3 rounded-sm border border-gold/40 bg-card/60 backdrop-blur-sm"
                  style={{
                    boxShadow: "0 4px 20px hsl(43 72% 52% / 0.15)",
                  }}
                >
                  <p className="font-body text-sm text-deep-red/80 whitespace-nowrap italic">
                    "{blessing}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <SectionDivider />
      </div>
    </section>
  );
};

export default RSVPSection;
