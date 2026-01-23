import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Galería", href: "#galeria" },
  { name: "Cómo Pedir", href: "#proceso" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappLink = "https://wa.me/1234567890?text=Hola,%20me%20gustaría%20cotizar%20una%20torta%20personalizada";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2">
            <span className="font-display text-xl md:text-2xl font-semibold text-foreground">
              La Gloria de Dios
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            <Button
              asChild
              className="bg-gold hover:bg-gold/90 text-gold-foreground font-medium shadow-soft"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                Cotizar por WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 py-2 font-medium"
                >
                  {link.name}
                </a>
              ))}
              <Button
                asChild
                className="bg-gold hover:bg-gold/90 text-gold-foreground font-medium w-full mt-2"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Cotizar por WhatsApp
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
