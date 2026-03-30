import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionDivider from "@/components/SectionDivider";
import RadhaKrishnaBackground from "@/components/RadhaKrishnaBackground";

import groomFamilyImg from "@/assets/groom-family.jpg";
import brideFamilyImg from "@/assets/bride-family.jpg";
import groomFatherImg from "@/assets/groom-father.jpg";
import groomMotherImg from "@/assets/groom-mother.jpg";
import groomBrotherImg from "@/assets/groom-brother.jpg";
import groomSisterImg from "@/assets/groom-sister.jpg";
import brideFatherImg from "@/assets/bride-father.jpg";
import brideMotherImg from "@/assets/bride-mother.jpg";
import brideBrotherImg from "@/assets/bride-brother.jpg";
import brideSisterImg from "@/assets/bride-sister.jpg";

interface FamilyMember {
  name: string;
  relation: string;
  description: string;
  photo: string;
}

const groomFamily: FamilyMember[] = [
  { name: "Shri Mahesh Kumar", relation: "Father of the Groom", description: "A respected businessman and pillar of the community, guiding the family with wisdom and strength.", photo: groomFatherImg },
  { name: "Smt. Sunita Devi", relation: "Mother of the Groom", description: "A loving mother whose devotion and grace have shaped the family's values and traditions.", photo: groomMotherImg },
  { name: "Amit Kumar", relation: "Brother of the Groom", description: "Rajesh's younger brother, an engineer by profession and his closest confidant.", photo: groomBrotherImg },
  { name: "Meera Kumar", relation: "Sister of the Groom", description: "The family's pride, a doctor who brings joy and care to everyone around her.", photo: groomSisterImg },
];

const brideFamily: FamilyMember[] = [
  { name: "Shri Ramesh Sharma", relation: "Father of the Bride", description: "A distinguished professor whose knowledge and kindness have inspired generations.", photo: brideFatherImg },
  { name: "Smt. Kavita Sharma", relation: "Mother of the Bride", description: "A graceful woman of arts, whose creativity and warmth fill every gathering with beauty.", photo: brideMotherImg },
  { name: "Neha Sharma", relation: "Sister of the Bride", description: "Priya's elder sister, a talented artist who brings colors to every celebration.", photo: brideSisterImg },
  { name: "Rohit Sharma", relation: "Brother of the Bride", description: "The youngest of the family, a spirited soul pursuing his dreams in music.", photo: brideBrotherImg },
];

const card3D = {
  hidden: { opacity: 0, rotateY: -90, scale: 0.7 },
  visible: (i: number) => ({
    opacity: 1,
    rotateY: 0,
    scale: 1,
    transition: { delay: i * 0.15, duration: 0.7, type: "spring" as const, stiffness: 80 },
  }),
  exit: { opacity: 0, rotateY: 90, scale: 0.7, transition: { duration: 0.4 } },
};

const FamilySection = () => {
  const [showGroomDetails, setShowGroomDetails] = useState(false);
  const [showBrideDetails, setShowBrideDetails] = useState(false);

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
          <p className="font-shloka text-saffron text-lg mb-2">परिवार परिचय</p>
          <h2 className="font-heading text-3xl md:text-5xl text-deep-red">Our Families</h2>
        </motion.div>

        {/* Two family group photos side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
          {/* Groom's Family */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: -60, rotateY: -30 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            style={{ perspective: 1000 }}
          >
            <div className="border-ornate rounded-sm overflow-hidden bg-card/50 backdrop-blur-sm">
              <div className="relative overflow-hidden" style={{ perspective: 800 }}>
                <motion.img
                  src={groomFamilyImg}
                  alt="Groom's family"
                  className="w-full h-56 md:h-64 object-cover"
                  loading="lazy"
                  width={800}
                  height={600}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-xl text-deep-red mb-1">Kumar Family</h3>
                <p className="font-body text-muted-foreground text-sm italic mb-4">Groom's Side</p>
                <motion.button
                  onClick={() => setShowGroomDetails(!showGroomDetails)}
                  className="font-heading text-sm tracking-wider px-6 py-2.5 border border-gold/50 text-deep-red rounded-sm hover:bg-gold/10 transition-all"
                  whileHover={{ scale: 1.05, rotateX: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {showGroomDetails ? "Hide Details" : "More Information"}
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Bride's Family */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: 60, rotateY: 30 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            style={{ perspective: 1000 }}
          >
            <div className="border-ornate rounded-sm overflow-hidden bg-card/50 backdrop-blur-sm">
              <div className="relative overflow-hidden" style={{ perspective: 800 }}>
                <motion.img
                  src={brideFamilyImg}
                  alt="Bride's family"
                  className="w-full h-56 md:h-64 object-cover"
                  loading="lazy"
                  width={800}
                  height={600}
                  whileHover={{ scale: 1.05, rotateY: -5 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-xl text-deep-red mb-1">Sharma Family</h3>
                <p className="font-body text-muted-foreground text-sm italic mb-4">Bride's Side</p>
                <motion.button
                  onClick={() => setShowBrideDetails(!showBrideDetails)}
                  className="font-heading text-sm tracking-wider px-6 py-2.5 border border-gold/50 text-deep-red rounded-sm hover:bg-gold/10 transition-all"
                  whileHover={{ scale: 1.05, rotateX: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {showBrideDetails ? "Hide Details" : "More Information"}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Groom Family Members Detail */}
        <AnimatePresence>
          {showGroomDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden mb-8"
            >
              <h3 className="font-heading text-2xl text-deep-red text-center mb-6">
                Groom's Family Members
              </h3>
              <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
                style={{ perspective: 1200 }}
              >
                {groomFamily.map((member, i) => (
                  <motion.div
                    key={member.name}
                    custom={i}
                    variants={card3D}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    whileHover={{ rotateY: 10, rotateX: -5, scale: 1.05, z: 50 }}
                    className="bg-card/60 backdrop-blur-sm border border-gold/30 rounded-sm overflow-hidden"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-48 object-cover object-top"
                        loading="lazy"
                        width={512}
                        height={512}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
                    </div>
                    <div className="p-4 text-center">
                      <h4 className="font-heading text-sm text-deep-red">{member.name}</h4>
                      <p className="font-body text-xs text-gold italic mb-2">{member.relation}</p>
                      <p className="font-body text-xs text-muted-foreground leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bride Family Members Detail */}
        <AnimatePresence>
          {showBrideDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden mb-8"
            >
              <h3 className="font-heading text-2xl text-deep-red text-center mb-6">
                Bride's Family Members
              </h3>
              <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
                style={{ perspective: 1200 }}
              >
                {brideFamily.map((member, i) => (
                  <motion.div
                    key={member.name}
                    custom={i}
                    variants={card3D}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    whileHover={{ rotateY: -10, rotateX: -5, scale: 1.05, z: 50 }}
                    className="bg-card/60 backdrop-blur-sm border border-gold/30 rounded-sm overflow-hidden"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-48 object-cover object-top"
                        loading="lazy"
                        width={512}
                        height={512}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
                    </div>
                    <div className="p-4 text-center">
                      <h4 className="font-heading text-sm text-deep-red">{member.name}</h4>
                      <p className="font-body text-xs text-gold italic mb-2">{member.relation}</p>
                      <p className="font-body text-xs text-muted-foreground leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <SectionDivider />
      </div>
    </section>
  );
};

export default FamilySection;
