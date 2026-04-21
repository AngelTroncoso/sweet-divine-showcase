import { MessageCircle } from "lucide-react";

export const WhatsAppFloat = () => {
  const whatsappLink =
    "https://wa.me/56968397960?text=Hola,%20me%20gustaría%20cotizar%20una%20torta%20personalizada";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-gold/40 animate-ping" />
      <span className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-gold to-primary text-gold-foreground shadow-hover ring-2 ring-background transition-transform duration-300 group-hover:scale-110">
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8" strokeWidth={2.2} />
      </span>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-background/95 backdrop-blur-sm text-foreground text-sm font-medium px-3 py-2 rounded-lg shadow-soft border border-border/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block">
        ¡Cotiza por WhatsApp!
      </span>
    </a>
  );
};
