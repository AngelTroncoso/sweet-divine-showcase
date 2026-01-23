import { motion } from "framer-motion";

import cake01 from "@/assets/cakes/cake-01.jpg";
import cake03 from "@/assets/cakes/cake-03.jpg";
import cake10 from "@/assets/cakes/cake-10.jpg";
import cake12 from "@/assets/cakes/cake-12.jpg";

const categories = [
  {
    name: "Infantiles",
    image: cake01,
    description: "Diseños mágicos para los más pequeños",
  },
  {
    name: "Bodas",
    image: cake03,
    description: "Elegancia para el día más especial",
  },
  {
    name: "Aniversarios",
    image: cake10,
    description: "Celebra el amor con dulzura",
  },
  {
    name: "Tendencias",
    image: cake12,
    description: "Los diseños más modernos y creativos",
  },
];

export const CategoriesSection = () => {
  return (
    <section id="galeria" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Nuestras Categorías
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Encuentra la torta perfecta para cada ocasión especial
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-card bg-card border border-border/50 transition-shadow duration-300 hover:shadow-hover">
                <div className="aspect-[4/5] overflow-hidden image-overlay">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover image-hover-zoom"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-xl font-semibold text-background mb-1">
                    {category.name}
                  </h3>
                  <p className="text-background/80 text-sm">
                    {category.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
