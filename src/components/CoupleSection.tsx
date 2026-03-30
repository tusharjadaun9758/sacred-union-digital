import { motion } from "framer-motion";
import SectionDivider from "@/components/SectionDivider";
import RadhaKrishnaBackground from "@/components/RadhaKrishnaBackground";
import PreWeddingGallery from "@/components/PreWeddingGallery";
import groomImg from "@/assets/groom-portrait.jpg";
import brideImg from "@/assets/bride-portrait.jpg";

const CoupleSection = () => {
  return (
    <section className="py-20 bg-temple-gradient relative">
      <div className="bg-sacred absolute inset-0" />
      <RadhaKrishnaBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-shloka text-saffron text-lg mb-2">दिव्य मिलन</p>
          <h2 className="font-heading text-3xl md:text-5xl text-deep-red">
            Divine Union
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 max-w-5xl mx-auto">
          {/* Groom */}
          <motion.div
            className="flex-1 max-w-sm"
            initial={{ opacity: 0, x: -60, rotateY: -40 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring" as const, stiffness: 60 }}
            style={{ perspective: 1000 }}
          >
            <div className="border-ornate rounded-sm p-8 text-center bg-card/50 backdrop-blur-sm">
              <motion.div
                className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-gold/50 overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
                whileHover={{ rotateY: 15, rotateX: -10, scale: 1.1 }}
                transition={{ duration: 0.5, type: "spring" as const }}
              >
                <img
                  src={groomImg}
                  alt="Rajesh Kumar - The Groom"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={512}
                  height={512}
                />
              </motion.div>
              <h3 className="font-heading text-2xl text-deep-red mb-1">Rajesh Kumar</h3>
              <p className="font-body text-muted-foreground italic text-sm mb-4">The Groom</p>
              <p className="font-body text-foreground/80 text-sm leading-relaxed">
                Son of Shri Mahesh Kumar & Smt. Sunita Devi.
                A soul guided by dharma, ready to embark on the sacred journey of Grihastha.
              </p>
            </div>
          </motion.div>

          {/* Center ornament */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="text-5xl mb-2">🪷</span>
            <p className="font-shloka text-gold text-sm">&</p>
          </motion.div>

          {/* Bride */}
          <motion.div
            className="flex-1 max-w-sm"
            initial={{ opacity: 0, x: 60, rotateY: 40 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring" as const, stiffness: 60 }}
            style={{ perspective: 1000 }}
          >
            <div className="border-ornate rounded-sm p-8 text-center bg-card/50 backdrop-blur-sm">
              <motion.div
                className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-gold/50 overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
                whileHover={{ rotateY: -15, rotateX: -10, scale: 1.1 }}
                transition={{ duration: 0.5, type: "spring" as const }}
              >
                <img
                  src={brideImg}
                  alt="Priya Sharma - The Bride"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={512}
                  height={512}
                />
              </motion.div>
              <h3 className="font-heading text-2xl text-deep-red mb-1">Priya Sharma</h3>
              <p className="font-body text-muted-foreground italic text-sm mb-4">The Bride</p>
              <p className="font-body text-foreground/80 text-sm leading-relaxed">
                Daughter of Shri Ramesh Sharma & Smt. Kavita Sharma.
                A radiant spirit, blessed with grace and devotion.
              </p>
            </div>
          </motion.div>
        </div>

        <PreWeddingGallery />

        <SectionDivider />
      </div>
    </section>
  );
};

export default CoupleSection;
