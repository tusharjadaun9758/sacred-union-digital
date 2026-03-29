import { motion } from "framer-motion";
import ganeshaImg from "@/assets/ganesha.png";
import Diya from "@/components/Diya";
import SectionDivider from "@/components/SectionDivider";

const shlokaLines = [
  "वक्रतुण्ड महाकाय",
  "सूर्यकोटि समप्रभ",
  "निर्विघ्नं कुरु मे देव",
  "सर्वकार्येषु सर्वदा",
];

const GaneshSection = () => {
  return (
    <section className="py-20 bg-temple-gradient relative overflow-hidden">
      <div className="bg-sacred absolute inset-0" />
      <div className="container mx-auto px-4 relative z-10">
        <SectionDivider />

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl text-deep-red mb-2">
            Ganesh Vandana
          </h2>
          <p className="font-body text-muted-foreground italic">
            Seeking blessings for an auspicious beginning
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-4xl mx-auto">
          {/* Ganesha Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="relative">
              <img
                src={ganeshaImg}
                alt="Lord Ganesha"
                className="w-56 h-auto drop-shadow-2xl"
                loading="lazy"
                width={512}
                height={640}
              />
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "radial-gradient(circle, hsl(43 80% 65% / 0.2), transparent 60%)",
                }}
              />
            </div>
            <div className="flex justify-center gap-8 mt-4">
              <Diya />
              <Diya />
            </div>
          </motion.div>

          {/* Shloka */}
          <div className="text-center md:text-left space-y-4">
            {shlokaLines.map((line, i) => (
              <motion.p
                key={i}
                className="font-shloka text-2xl md:text-3xl text-deep-red/90"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.3 }}
              >
                {line}
              </motion.p>
            ))}
            <motion.p
              className="font-body text-muted-foreground italic text-sm mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              "O Lord with a curved trunk and great body,<br />
              whose brilliance equals a billion suns,<br />
              please make all my endeavors free of obstacles,<br />
              always and forever."
            </motion.p>
          </div>
        </div>

        <SectionDivider />
      </div>
    </section>
  );
};

export default GaneshSection;
