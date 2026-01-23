import { MessageCircle, PenTool, CalendarCheck, Gift } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Contáctanos",
    description: "Escríbenos por WhatsApp y cuéntanos sobre tu evento especial.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Diseñamos Juntos",
    description: "Creamos el diseño perfecto según tus gustos y preferencias.",
  },
  {
    icon: CalendarCheck,
    number: "03",
    title: "Confirmamos",
    description: "Acordamos fecha de entrega y realizas un adelanto del 50%.",
  },
  {
    icon: Gift,
    number: "04",
    title: "¡Disfruta!",
    description: "Recibe tu torta perfecta y sorprende en tu celebración.",
  },
];

export const ProcessSection = () => {
  return (
    <section id="proceso" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-3">
            ¿Cómo Pedir tu Torta?
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Un proceso sencillo para que obtengas la torta de tus sueños
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative"
            >
              <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-soft h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center border border-gold/30">
                    <step.icon className="w-5 h-5 text-gold" />
                  </div>
                  <span className="font-display text-4xl font-bold text-gold/20">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connection Line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-gold/30" />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/1234567890?text=Hola,%20me%20gustaría%20cotizar%20una%20torta%20personalizada"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gold hover:bg-gold/90 text-gold-foreground font-medium rounded-full transition-all duration-300 shadow-card hover:shadow-hover"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            ¡Empieza tu Pedido Ahora!
          </a>
        </motion.div>
      </div>
    </section>
  );
};
