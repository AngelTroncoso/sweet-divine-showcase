import { motion } from "framer-motion";

import cake01 from "@/assets/cakes/cake-01.jpg";
import cake03 from "@/assets/cakes/cake-03.jpg";
import cake06 from "@/assets/cakes/cake-06.jpg";
import cake08 from "@/assets/cakes/cake-08.jpg";
import cake10 from "@/assets/cakes/cake-10.jpg";
import cake11 from "@/assets/cakes/cake-11.jpg";

const vitrinaImages = [
  { src: cake01, alt: "Torta deportiva" },
  { src: cake03, alt: "Torta musical" },
  { src: cake06, alt: "Torta elegante negra" },
  { src: cake08, alt: "Torta celeste" },
  { src: cake10, alt: "Torta quinceañera" },
  { src: cake11, alt: "Torta rectangular" },
];

export const VitrinaSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Nuestra Vitrina
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Un vistazo a nuestras creaciones más recientes
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {vitrinaImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="break-inside-avoid"
            >
              <div className="relative group overflow-hidden rounded-xl shadow-card hover:shadow-hover transition-shadow duration-300 image-overlay">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover image-hover-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
