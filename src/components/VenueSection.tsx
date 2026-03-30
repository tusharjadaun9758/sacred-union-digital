import { motion } from "framer-motion";
import Diya from "@/components/Diya";
import RadhaKrishnaBackground from "@/components/RadhaKrishnaBackground";

const VenueSection = () => {
  return (
    <section className="py-20 bg-temple-gradient relative">
      <div className="bg-sacred absolute inset-0" />
      <RadhaKrishnaBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-shloka text-saffron text-lg mb-2">स्थान</p>
          <h2 className="font-heading text-3xl md:text-5xl text-deep-red">
            The Sacred Venue
          </h2>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto border-ornate rounded-sm p-8 md:p-12 bg-card/50 backdrop-blur-sm text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center gap-8 mb-6">
            <Diya />
            <Diya />
          </div>

          <h3 className="font-heading text-2xl text-deep-red mb-2">
            Shri Laxmi Narayan Temple
          </h3>
          <p className="font-body text-foreground/70 mb-6">
            42, Temple Road, Jaipur, Rajasthan 302001
          </p>

          <div className="w-full h-64 rounded-sm overflow-hidden border border-border mb-6 bg-muted flex items-center justify-center">
            <p className="font-body text-muted-foreground italic text-sm">
              📍 Map will be embedded here
            </p>
          </div>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-heading text-sm tracking-widest uppercase
                       px-8 py-3 border-2 border-gold/50 text-deep-red
                       hover:bg-gold/10 transition-all duration-300 rounded-sm"
          >
            🗺️ Get Directions
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VenueSection;
