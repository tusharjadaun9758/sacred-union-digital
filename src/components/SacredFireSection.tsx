import { motion } from "framer-motion";
import sacredFireImg from "@/assets/sacred-fire.jpg";
import SectionDivider from "@/components/SectionDivider";

const SacredFireSection = () => {
  return (
    <section className="py-20 bg-temple-gradient relative overflow-hidden">
      <div className="bg-sacred absolute inset-0" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-shloka text-saffron text-lg mb-2">अग्नि साक्षी</p>
          <h2 className="font-heading text-3xl md:text-5xl text-deep-red">
            The Sacred Fire
          </h2>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="relative inline-block">
            <div className="relative rounded-full overflow-hidden w-72 h-72 md:w-96 md:h-96 mx-auto border-4 border-gold/40 animate-pulse-glow">
              <img
                src={sacredFireImg}
                alt="Sacred wedding fire ceremony"
                className="w-full h-full object-cover"
                loading="lazy"
                width={800}
                height={800}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
            </div>

            {/* Names around the fire */}
            <motion.div
              className="absolute -left-8 top-1/2 -translate-y-1/2"
              animate={{ x: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <p className="font-heading text-lg md:text-xl text-deep-red writing-vertical"
                 style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>
                Rajesh
              </p>
            </motion.div>
            <motion.div
              className="absolute -right-8 top-1/2 -translate-y-1/2"
              animate={{ x: [5, -5, 5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <p className="font-heading text-lg md:text-xl text-deep-red writing-vertical"
                 style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>
                Priya
              </p>
            </motion.div>
          </div>

          <motion.div
            className="mt-10 space-y-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="font-shloka text-lg text-deep-red/80">
              ॐ अग्निं दूतं वृणीमहे
            </p>
            <p className="font-body text-muted-foreground italic text-sm">
              "We choose Agni as our divine witness — the eternal flame<br />
              that sanctifies vows and illuminates the path of dharma."
            </p>
          </motion.div>
        </motion.div>

        <SectionDivider />
      </div>
    </section>
  );
};

export default SacredFireSection;
