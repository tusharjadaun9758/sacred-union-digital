import { motion } from "framer-motion";
import radhaKrishnaImg from "@/assets/radha-krishna-bg.jpg";

const RadhaKrishnaBackground = () => {
  return (
    <motion.div
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
      whileInView={{ opacity: 0.12, scale: 1, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 2, ease: "easeOut" }}
      style={{ perspective: 1200 }}
    >
      <motion.img
        src={radhaKrishnaImg}
        alt=""
        aria-hidden="true"
        className="w-[500px] h-[500px] md:w-[600px] md:h-[600px] object-contain"
        loading="lazy"
        width={1024}
        height={1024}
        animate={{
          rotateY: [0, 8, -8, 0],
          rotateX: [0, -4, 4, 0],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transformStyle: "preserve-3d" }}
      />
    </motion.div>
  );
};

export default RadhaKrishnaBackground;
