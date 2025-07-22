import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, Heart, Baby, Eye, Microscope, Pill, Users, FileText } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Šeimos gydytojo konsultacijos",
      description: "Bendrosios praktikos gydytojo priėmimas ir konsultacijos"
    },
    {
      icon: Heart,
      title: "Kardiologijos paslaugos",
      description: "Širdies ir kraujagyslių sistemos tyrimai ir gydymas"
    },
    {
      icon: Baby,
      title: "Pediatrija",
      description: "Vaikų sveikatos priežiūra ir konsultacijos"
    },
    {
      icon: Eye,
      title: "Oftalmologija",
      description: "Akių tyrimai ir regos problemų sprendimas"
    },
    {
      icon: Microscope,
      title: "Laboratoriniai tyrimai",
      description: "Įvairūs medicininiai tyrimai ir analizės"
    },
    {
      icon: Pill,
      title: "Vaistų išrašymas",
      description: "Elektroninių receptų išrašymas ir vaistų parinkimas"
    },
    {
      icon: Users,
      title: "Šeimos medicina",
      description: "Kompleksinė šeimos narių sveikatos priežiūra"
    },
    {
      icon: FileText,
      title: "Pažymos ir išrašai",
      description: "Medicininių pažymų ir išrašų parengimas"
    }
  ];

  return (
    <section id="services" className="py-20 bg-medical-blue-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Mūsų paslaugos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Teikiame pilną spektrą medicinos paslaugų visai šeimai profesionaliai ir rūpestingai
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;