import { motion } from "framer-motion";
import pw1 from "@/assets/prewedding-1.jpg";
import pw2 from "@/assets/prewedding-2.jpg";
import pw3 from "@/assets/prewedding-3.jpg";
import pw4 from "@/assets/prewedding-4.jpg";
import pw5 from "@/assets/prewedding-5.jpg";
import pw6 from "@/assets/prewedding-6.jpg";

const photos = [
  { src: pw1, alt: "Pre-wedding shoot at palace garden", rotate: -6 },
  { src: pw2, alt: "Pre-wedding shoot at sunset beach", rotate: 4 },
  { src: pw3, alt: "Pre-wedding shoot in enchanted forest", rotate: -3 },
  { src: pw4, alt: "Pre-wedding shoot at Rajasthani fort", rotate: 5 },
  { src: pw5, alt: "Pre-wedding shoot in flower field", rotate: -5 },
  { src: pw6, alt: "Pre-wedding shoot at temple", rotate: 3 },
];

const PreWeddingGallery = () => {
  return (
    <div className="mt-16">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-shloka text-saffron text-lg mb-2">पूर्व विवाह</p>
        <h3 className="font-heading text-2xl md:text-4xl text-deep-red">
          Pre-Wedding Shoot
        </h3>
      </motion.div>

      <div
        className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        style={{ perspective: "1200px" }}
      >
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            className="relative group cursor-pointer"
            initial={{
              opacity: 0,
              rotateY: i % 2 === 0 ? -40 : 40,
              rotateX: 15,
              scale: 0.7,
            }}
            whileInView={{
              opacity: 1,
              rotateY: 0,
              rotateX: 0,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: i * 0.15,
              type: "spring" as const,
              stiffness: 60,
            }}
            whileHover={{
              rotateY: photo.rotate * 2,
              rotateX: -8,
              scale: 1.08,
              z: 50,
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="overflow-hidden rounded-lg border-2 border-gold/40 shadow-lg"
              style={{
                boxShadow:
                  "0 20px 40px hsl(43 72% 52% / 0.15), 0 0 0 1px hsl(43 72% 52% / 0.1)",
              }}
            >
              <motion.img
                src={photo.src}
                alt={photo.alt}
                className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                width={768}
                height={1024}
              />
            </div>
            {/* 3D shadow layer */}
            <motion.div
              className="absolute -inset-1 rounded-lg bg-deep-red/10 -z-10"
              style={{ transform: "translateZ(-20px)" }}
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PreWeddingGallery;
