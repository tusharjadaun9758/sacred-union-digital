import { useState } from "react";
import { motion } from "framer-motion";
import SectionDivider from "@/components/SectionDivider";

const RSVPSection = () => {
  const [response, setResponse] = useState<"accepted" | "declined" | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (choice: "accepted" | "declined") => {
    setResponse(choice);
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-temple-gradient relative">
      <div className="bg-sacred absolute inset-0" />
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

        <motion.div
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {submitted ? (
            <div className="text-center border-ornate rounded-sm p-12 bg-card/50">
              <span className="text-6xl mb-6 block">🙏</span>
              <h3 className="font-heading text-2xl text-deep-red mb-2">
                {response === "accepted" ? "Thank You for Your Blessings!" : "We Will Miss You!"}
              </h3>
              <p className="font-body text-muted-foreground italic">
                {response === "accepted"
                  ? "Your presence will make the ceremony truly divine."
                  : "Your blessings are with us in spirit."}
              </p>
            </div>
          ) : (
            <div className="border-ornate rounded-sm p-8 md:p-10 bg-card/50 backdrop-blur-sm space-y-6 text-center">
              <p className="font-body text-foreground/80 mb-4">
                Will you grace us with your presence?
              </p>
              <div className="grid grid-cols-2 gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSubmit("accepted")}
                  className="py-4 px-6 rounded-sm border border-gold bg-gold/20 text-deep-red font-heading text-sm tracking-widest uppercase
                             hover:bg-gold/30 transition-all duration-300 glow-gold"
                >
                  🙏 Accepted
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSubmit("declined")}
                  className="py-4 px-6 rounded-sm border border-border bg-background/30 text-foreground/70 font-heading text-sm tracking-widest uppercase
                             hover:border-gold/40 transition-all duration-300"
                >
                  Declined
                </motion.button>
              </div>
            </div>
          )}
        </motion.div>

        <SectionDivider />
      </div>
    </section>
  );
};

export default RSVPSection;
