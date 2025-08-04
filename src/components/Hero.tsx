import { Button } from "@/components/ui/button";
import { Clock, Shield, Heart } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary to-medical-blue-dark text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Profesionali sveikatos priežiūra
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Prisirašusiems prie klinkos Salvavita ir apdraustiems privalomuoju sveikatos draudimu, šeimos gydytojų medicinos paslaugos nekainuoja.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Registruotis pas gydytoją
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-primary bg-white hover:bg-primary hover:text-white">
              Sužinokite daugiau
            </Button>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Patogus laikas</h3>
              <p className="text-blue-100">Priėmimo laikas pritaikytas jūsų poreikiams</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Patikimi gydytojai</h3>
              <p className="text-blue-100">Aukštos kvalifikacijos specialistai</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Individuali priežiūra</h3>
              <p className="text-blue-100">Asmeninis požiūris į kiekvieną pacientą</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;