import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-6H9v-2h2V9h2v2h2v2h-2v6z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">Klinika Salvavita</h3>
                <p className="text-sm text-blue-100">Šeimos gydytojų klinika</p>
              </div>
            </div>
            <p className="text-blue-100 mb-4">
              Profesionali sveikatos priežiūra visai šeimai. Prisirašykite prie mūsų klinikos ir gaukite kokybiškas medicinos paslaugas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nuorodos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Pagrindinis</a></li>
              <li><a href="#services" className="text-blue-100 hover:text-white transition-colors">Paslaugos</a></li>
              <li><a href="#doctors" className="text-blue-100 hover:text-white transition-colors">Gydytojai</a></li>
              <li><a href="#about" className="text-blue-100 hover:text-white transition-colors">Apie mus</a></li>
              <li><a href="#contact" className="text-blue-100 hover:text-white transition-colors">Kontaktai</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontaktai</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-100" />
                <span className="text-blue-100">+370 620 36663</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-100" />
                <span className="text-blue-100">info@salvavita.lt</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-100" />
                <span className="text-blue-100">Tilžės g. 54, Šiauliai</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-200/20 mt-8 pt-8 text-center">
          <p className="text-blue-100">
            © 2024 Klinika Salvavita. Visos teisės saugomos.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;