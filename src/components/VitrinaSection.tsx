import { motion } from "framer-motion";

import cake01 from "@/assets/cakes/cake-01.jpg";
import cake03 from "@/assets/cakes/cake-03.jpg";
import cake06 from "@/assets/cakes/cake-06.jpg";
import cake07 from "@/assets/cakes/cake-07.jpg";
import cake08 from "@/assets/cakes/cake-08.jpg";
import cake10 from "@/assets/cakes/cake-10.jpg";
import cake11 from "@/assets/cakes/cake-11.jpg";
import cake13 from "@/assets/cakes/cake-13.jpg";
import cake17 from "@/assets/cakes/cake-17.jpg";
import cake18 from "@/assets/cakes/cake-18.jpg";

const vitrinaImages = [
  { src: cake07, alt: "Torta galaxia azul y dorada" },
  { src: cake13, alt: "Torta de chocolate con mariposa" },
  { src: cake17, alt: "Torta morada con rosas blancas" },
  { src: cake18, alt: "Torta floral naranja y rosa" },
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

        {/* Symmetric Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {vitrinaImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="relative group overflow-hidden rounded-xl shadow-card hover:shadow-hover transition-shadow duration-300 aspect-square">
                <div className="absolute inset-0 image-overlay">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover image-hover-zoom"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
