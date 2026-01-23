import { Award, Palette, Truck } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: Award,
    title: "Ingredientes Premium",
    description: "Solo usamos ingredientes de la más alta calidad para crear sabores únicos e inolvidables.",
  },
  {
    icon: Palette,
    title: "Diseños Personalizados",
    description: "Cada torta es una obra de arte única, diseñada especialmente para tu celebración.",
  },
  {
    icon: Truck,
    title: "Entrega Puntual",
    description: "Tu torta llegará perfecta y a tiempo para que tu evento sea un éxito.",
  },
];

export const ValueSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4 border border-gold/30">
                <value.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
