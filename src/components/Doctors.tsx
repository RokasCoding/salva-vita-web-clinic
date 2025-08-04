import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Doctors = () => {
  const doctors = [
    {
      name: "Dr. Ona Petraitienė",
      specialty: "Šeimos gydytoja",
      experience: "15 metų patirtis",
      education: "VU Medicinos fakultetas",
      languages: ["Lietuvių", "Anglų", "Rusų"],
      image: "/lovable-uploads/ed3fa551-7055-45a0-8f6a-d2b8ae8dd300.png"
    },
    {
      name: "Dr. Jonas Kazlauskas",
      specialty: "Šeimos gydytojas",
      experience: "12 metų patirtis",
      education: "LSMU Medicinos akademija",
      languages: ["Lietuvių", "Anglų"],
      image: "/lovable-uploads/a85ed1e7-9595-41e1-b92b-2a06e0fba7cd.png"
    },
    {
      name: "Dr. Rasa Jankienė",
      specialty: "Pediatrė",
      experience: "18 metų patirtis",
      education: "VU Medicinos fakultetas",
      languages: ["Lietuvių", "Anglų", "Vokiečių"],
      image: "/lovable-uploads/565a7122-242d-4d7f-ac75-5f0903cf5c60.png"
    }
  ];

  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Mūsų gydytojai</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kvalifikuoti specialistai, kurie rūpinasi jūsų sveikata su didžiausiu profesionalumu
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl">{doctor.name}</CardTitle>
                <CardDescription className="text-primary font-semibold">
                  {doctor.specialty}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">{doctor.experience}</p>
                  <p className="text-sm text-muted-foreground">{doctor.education}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium mb-2">Kalbos:</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {doctor.languages.map((language, langIndex) => (
                      <Badge key={langIndex} variant="secondary" className="text-xs">
                        {language}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;