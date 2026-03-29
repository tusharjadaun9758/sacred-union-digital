import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionDivider from "@/components/SectionDivider";

const events = [
  {
    icon: "🌿",
    name: "Haldi",
    sanskrit: "हल्दी",
    date: "March 15, 2026",
    time: "10:00 AM",
    description: "The sacred turmeric ceremony to bless the couple with purity and prosperity.",
    color: "from-yellow-500/20 to-amber-500/20",
  },
  {
    icon: "🌺",
    name: "Mehendi",
    sanskrit: "मेहंदी",
    date: "March 15, 2026",
    time: "4:00 PM",
    description: "Intricate henna adorns the bride's hands, symbolizing deep love and joy.",
    color: "from-green-600/20 to-emerald-500/20",
  },
  {
    icon: "🎶",
    name: "Sangeet",
    sanskrit: "संगीत",
    date: "March 16, 2026",
    time: "7:00 PM",
    description: "An evening of music, dance, and celebration with family and friends.",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: "🔥",
    name: "Vivah",
    sanskrit: "विवाह",
    date: "March 17, 2026",
    time: "9:00 AM",
    description: "The sacred wedding ceremony performed around the holy fire with Vedic rituals.",
    color: "from-red-500/20 to-orange-500/20",
  },
  {
    icon: "🎉",
    name: "Reception",
    sanskrit: "स्वागत",
    date: "March 18, 2026",
    time: "7:00 PM",
    description: "A grand celebration to welcome the newlywed couple into their new journey.",
    color: "from-amber-400/20 to-yellow-400/20",
  },
];

const EventsSection = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const navigate = (newIndex: number) => {
    setDirection(newIndex > active ? 1 : -1);
    setActive(newIndex);
  };

  const next = () => navigate((active + 1) % events.length);
  const prev = () => navigate((active - 1 + events.length) % events.length);

  const event = events[active];

  return (
    <section className="py-20 relative overflow-hidden bg-temple-gradient">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-shloka text-saffron text-lg mb-2">शुभ कार्यक्रम</p>
          <h2 className="font-heading text-3xl md:text-5xl text-deep-red">
            Sacred Ceremonies
          </h2>
        </motion.div>

        {/* 3D Carousel Area */}
        <div className="relative max-w-lg mx-auto" style={{ perspective: "1200px" }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              variants={{
                enter: (d: number) => ({
                  rotateY: d > 0 ? 90 : -90,
                  opacity: 0,
                  scale: 0.8,
                  x: d > 0 ? 200 : -200,
                }),
                center: {
                  rotateY: 0,
                  opacity: 1,
                  scale: 1,
                  x: 0,
                },
                exit: (d: number) => ({
                  rotateY: d > 0 ? -90 : 90,
                  opacity: 0,
                  scale: 0.8,
                  x: d > 0 ? -200 : 200,
                }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-full aspect-square max-w-[340px] mx-auto"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className={`w-full h-full rounded-lg border-2 border-gold/40 backdrop-blur-sm p-6 md:p-8 flex flex-col items-center justify-center text-center bg-gradient-to-br ${event.color}`}
                style={{
                  background: "linear-gradient(135deg, hsl(39 100% 95% / 0.95), hsl(39 80% 88% / 0.9))",
                  boxShadow:
                    "0 20px 60px hsl(43 72% 52% / 0.2), 0 0 0 1px hsl(43 72% 52% / 0.1), inset 0 0 40px hsl(39 100% 95% / 0.4)",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Floating icon */}
                <motion.span
                  className="text-6xl mb-4 block"
                  animate={{ y: [0, -8, 0], rotateZ: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transform: "translateZ(40px)" }}
                >
                  {event.icon}
                </motion.span>

                <div style={{ transform: "translateZ(30px)" }}>
                  <h3 className="font-heading text-2xl md:text-3xl text-deep-red mb-1">
                    {event.name}
                  </h3>
                  <p className="font-shloka text-gold/80 text-base mb-3">{event.sanskrit}</p>
                </div>

                <div
                  className="mb-4 space-y-1"
                  style={{ transform: "translateZ(20px)" }}
                >
                  <p className="font-body text-foreground/80 text-sm">{event.date}</p>
                  <p className="font-body text-saffron font-semibold">{event.time}</p>
                </div>

                <p
                  className="font-body text-foreground/70 text-sm leading-relaxed italic"
                  style={{ transform: "translateZ(10px)" }}
                >
                  {event.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={prev}
            className="font-heading text-sm px-5 py-2 border border-gold/40 text-deep-red rounded-sm hover:bg-gold/10 transition-all"
          >
            ← Prev
          </button>

          <div className="flex gap-2">
            {events.map((_, i) => (
              <button
                key={i}
                onClick={() => navigate(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === active
                    ? "bg-deep-red scale-125"
                    : "bg-gold/40 hover:bg-gold/70"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="font-heading text-sm px-5 py-2 border border-gold/40 text-deep-red rounded-sm hover:bg-gold/10 transition-all"
          >
            Next →
          </button>
        </div>

        <SectionDivider />
      </div>
    </section>
  );
};

export default EventsSection;
