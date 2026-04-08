import { motion } from "framer-motion";
import Diya from "@/components/Diya";
import RadhaKrishnaBackground from "@/components/RadhaKrishnaBackground";
import venueHeroImg from "@/assets/venue-hero.jpg";
import venueMandapImg from "@/assets/venue-mandap.jpg";
import venueDiningImg from "@/assets/venue-dining.jpg";
import venueEntranceImg from "@/assets/venue-entrance.jpg";

const venuePhotos = [
  { src: venueMandapImg, label: "The Mandap", desc: "Sacred ceremony pavilion adorned with florals & crystal" },
  { src: venueDiningImg, label: "Royal Dining", desc: "Grand banquet with gold accents & candlelit ambiance" },
  { src: venueEntranceImg, label: "Grand Entrance", desc: "Flower-draped archway welcoming honoured guests" },
];

const VenueSection = () => {
  return (
    <section className="relative overflow-hidden bg-temple-gradient">
      <RadhaKrishnaBackground />

      {/* Hero venue image with overlay */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <motion.img
          src={venueHeroImg}
          alt="Luxury wedding venue - Rajasthani Palace"
          className="w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={1080}
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />

        {/* Floating title over hero */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="font-shloka text-saffron text-lg md:text-xl mb-3 drop-shadow-lg">
            स्थान
          </p>
          <h2
            className="font-heading text-4xl md:text-6xl lg:text-7xl tracking-wider drop-shadow-xl text-deep-red"
          >
            The Royal Venue
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mt-4" />
        </motion.div>
      </div>

      {/* Venue details card */}
      <div className="relative z-10 -mt-16 px-4">
        <motion.div
          className="max-w-3xl mx-auto rounded-lg p-8 md:p-12 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(145deg, hsl(0 80% 18% / 0.92), hsl(0 70% 14% / 0.95), hsl(0 80% 18% / 0.92))",
            boxShadow: "0 30px 80px hsl(0 100% 10% / 0.4), 0 0 80px hsl(43 72% 52% / 0.15), inset 0 1px 0 hsl(43 80% 55% / 0.3)",
            border: "2px solid hsl(43 72% 52% / 0.5)",
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Gold corner ornaments */}
          <div className="absolute top-3 left-3 w-10 h-10 border-t-2 border-l-2" style={{ borderColor: "hsl(43 80% 55% / 0.6)" }} />
          <div className="absolute top-3 right-3 w-10 h-10 border-t-2 border-r-2" style={{ borderColor: "hsl(43 80% 55% / 0.6)" }} />
          <div className="absolute bottom-3 left-3 w-10 h-10 border-b-2 border-l-2" style={{ borderColor: "hsl(43 80% 55% / 0.6)" }} />
          <div className="absolute bottom-3 right-3 w-10 h-10 border-b-2 border-r-2" style={{ borderColor: "hsl(43 80% 55% / 0.6)" }} />
          {/* Inner ornamental border */}
          <div className="absolute inset-5 border rounded-sm pointer-events-none" style={{ borderColor: "hsl(43 72% 52% / 0.2)" }} />
          {/* Subtle radial glow */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, hsl(43 80% 55% / 0.08), transparent 70%)" }} />
          <div className="flex justify-center gap-10 mb-6">
            <Diya />
            <Diya />
          </div>

          <motion.h3
            className="font-heading text-2xl md:text-3xl mb-2 text-gradient-gold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Shri Laxmi Narayan Palace
          </motion.h3>

          <p
            className="font-body text-sm md:text-base mb-2 italic"
            style={{ color: "hsl(43 80% 60%)" }}
          >
            A Heritage Royal Estate
          </p>

          <p
            className="font-body text-sm mb-8"
            style={{ color: "hsl(43 72% 55%)" }}
          >
            42, Palace Road, Jaipur, Rajasthan 302001
          </p>

          {/* Luxury detail badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["✨ Crystal Chandeliers", "🏛️ Marble Architecture", "🌺 Floral Paradise", "🕯️ Candlelit Ambiance"].map(
              (item, i) => (
                <motion.span
                  key={item}
                  className="px-4 py-2 rounded-full text-xs font-heading tracking-wider border border-gold/40 bg-gold/10"
                  style={{ color: "hsl(39 100% 90%)" }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  {item}
                </motion.span>
              )
            )}
          </div>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-heading text-sm tracking-[0.2em] uppercase
                       px-10 py-4 rounded-sm transition-all duration-500
                       border-2 border-gold/50 hover:bg-gold/20"
            style={{ color: "hsl(43 80% 65%)" }}
          >
            🗺️ Get Directions
          </a>
        </motion.div>
      </div>

      {/* Venue photo gallery */}
      <div className="relative z-10 mt-16 pb-20 px-4">
        <motion.p
          className="text-center font-heading text-lg tracking-[0.3em] uppercase mb-10 text-deep-red/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          — Explore the Estate —
        </motion.p>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          style={{ perspective: "1200px" }}
        >
          {venuePhotos.map((photo, i) => (
            <motion.div
              key={photo.label}
              className="relative group cursor-pointer"
              initial={{
                opacity: 0,
                rotateY: (i - 1) * 30,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                rotateY: 0,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: i * 0.2,
                type: "spring" as const,
                stiffness: 50,
              }}
              whileHover={{
                rotateY: (i - 1) * -8,
                scale: 1.05,
                z: 30,
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className="overflow-hidden rounded-lg border border-gold/30"
                style={{
                  boxShadow: "0 20px 50px hsl(var(--deep-red) / 0.1), 0 0 0 1px hsl(var(--gold) / 0.08)",
                }}
              >
                <img
                  src={photo.src}
                  alt={photo.label}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  width={1024}
                  height={768}
                />
                {/* Dark overlay with text */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex flex-col justify-end p-5">
                  <h4 className="font-heading text-lg tracking-wider text-deep-red">
                    {photo.label}
                  </h4>
                  <p className="font-body text-xs mt-1 text-foreground/60">
                    {photo.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
