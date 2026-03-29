import { motion } from "framer-motion";
import SectionDivider from "@/components/SectionDivider";

const events = [
  {
    icon: "🌿",
    name: "Haldi",
    sanskrit: "हल्दी",
    date: "March 15, 2026",
    time: "10:00 AM",
    description: "The sacred turmeric ceremony to bless the couple with purity and prosperity.",
  },
  {
    icon: "🌺",
    name: "Mehendi",
    sanskrit: "मेहंदी",
    date: "March 15, 2026",
    time: "4:00 PM",
    description: "Intricate henna adorns the bride's hands, symbolizing deep love and joy.",
  },
  {
    icon: "🎶",
    name: "Sangeet",
    sanskrit: "संगीत",
    date: "March 16, 2026",
    time: "7:00 PM",
    description: "An evening of music, dance, and celebration with family and friends.",
  },
  {
    icon: "🔥",
    name: "Vivah",
    sanskrit: "विवाह",
    date: "March 17, 2026",
    time: "9:00 AM",
    description: "The sacred wedding ceremony performed around the holy fire with Vedic rituals.",
  },
  {
    icon: "🎉",
    name: "Reception",
    sanskrit: "स्वागत",
    date: "March 18, 2026",
    time: "7:00 PM",
    description: "A grand celebration to welcome the newlywed couple into their new journey.",
  },
];

const EventsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-temple-gradient">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-shloka text-saffron text-lg mb-2">शुभ कार्यक्रम</p>
          <h2 className="font-heading text-3xl md:text-5xl text-deep-red">
            Sacred Ceremonies
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {events.map((event, i) => (
            <motion.div
              key={event.name}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* Parchment-style card */}
              <div
                className="p-6 md:p-8 rounded-sm border border-gold/30 backdrop-blur-sm"
                style={{
                  background: "linear-gradient(135deg, hsl(39 100% 95% / 0.95), hsl(39 80% 88% / 0.9))",
                  boxShadow: "0 4px 30px hsl(43 72% 52% / 0.1), inset 0 0 30px hsl(39 100% 95% / 0.3)",
                }}
              >
                <div className="flex items-start gap-4 md:gap-6">
                  <span className="text-4xl flex-shrink-0">{event.icon}</span>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <div>
                        <h3 className="font-heading text-xl md:text-2xl text-deep-red">
                          {event.name}
                        </h3>
                        <p className="font-shloka text-gold/80 text-sm">{event.sanskrit}</p>
                      </div>
                      <div className="text-right mt-2 sm:mt-0">
                        <p className="font-body text-foreground/80 text-sm">{event.date}</p>
                        <p className="font-body text-saffron font-semibold text-sm">{event.time}</p>
                      </div>
                    </div>
                    <p className="font-body text-foreground/70 text-sm leading-relaxed italic">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <SectionDivider />
      </div>
    </section>
  );
};

export default EventsSection;
