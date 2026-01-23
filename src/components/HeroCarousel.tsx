import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import cake01 from "@/assets/cakes/cake-01.jpg";
import cake03 from "@/assets/cakes/cake-03.jpg";
import cake06 from "@/assets/cakes/cake-06.jpg";
import cake08 from "@/assets/cakes/cake-08.jpg";
import cake10 from "@/assets/cakes/cake-10.jpg";
import cake12 from "@/assets/cakes/cake-12.jpg";

const heroImages = [cake01, cake03, cake06, cake08, cake10, cake12];

export const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section id="inicio" className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 image-overlay">
            <img
              src={heroImages[currentIndex]}
              alt={`Torta artesanal ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background/80" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl"
        >
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-4 text-balance">
            Dulce Bendición en cada detalle
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 font-light">
            Tortas artesanales hechas con amor y los mejores ingredientes
          </p>
          <a
            href="https://wa.me/1234567890?text=Hola,%20me%20gustaría%20cotizar%20una%20torta%20personalizada"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gold hover:bg-gold/90 text-gold-foreground font-medium rounded-full transition-all duration-300 shadow-card hover:shadow-hover"
          >
            Cotiza tu Torta Soñada
          </a>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/70 transition-colors"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="w-6 h-6 text-foreground" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/70 transition-colors"
        aria-label="Siguiente imagen"
      >
        <ChevronRight className="w-6 h-6 text-foreground" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-gold w-6"
                : "bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
