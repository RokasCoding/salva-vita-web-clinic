import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+370 620 36663</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@salvavita.lt</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Tilžės g. 54, Šiauliai</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12">
              <img 
                src="/lovable-uploads/c7b7be19-449f-444a-a4a8-f9b40a6861a7.png" 
                alt="Salvavita Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">Salvavita</h1>
              <p className="text-sm text-muted-foreground">Šeimos gydytojų klinika</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Pagrindinis</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Paslaugos</a>
            <a href="#doctors" className="text-foreground hover:text-primary transition-colors">Gydytojai</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">Apie mus</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Kontaktai</a>
            <Button>Registracija</Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-foreground hover:text-primary transition-colors">Pagrindinis</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Paslaugos</a>
              <a href="#doctors" className="text-foreground hover:text-primary transition-colors">Gydytojai</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">Apie mus</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Kontaktai</a>
              <Button className="w-full">Registracija</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;