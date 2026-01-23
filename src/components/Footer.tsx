import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-semibold mb-4">
              Delicias "La Gloria de Dios"
            </h3>
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              Repostería artesanal donde cada torta es una bendición hecha con amor, 
              dedicación y los mejores ingredientes.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/pao_la558"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/profile.php?id=61576023653974"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+56968397960"
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  +569 68397960
                </a>
              </li>
              <li>
                <a
                  href="mailto:deliciaslagloriadedios2026@gmail.com"
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  deliciaslagloriadedios2026@gmail.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-background/70 text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Pasaje Bell Boy #558, Huechuraba, Santiago</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Ubicación</h4>
            <div className="rounded-xl overflow-hidden h-40 bg-background/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.5!2d-70.6483!3d-33.3667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a5a5a5a5a5%3A0x0!2sPasaje%20Bell%20Boy%20558%2C%20Huechuraba%2C%20Santiago!5e0!3m2!1ses!2scl!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Delicias La Gloria de Dios"
              />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-background/10 text-center">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Delicias "La Gloria de Dios". Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
