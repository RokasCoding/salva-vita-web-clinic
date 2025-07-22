import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, MapPin } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Users,
      number: "5000+",
      label: "Patenkintų pacientų"
    },
    {
      icon: Award,
      number: "15+",
      label: "Metų patirtis"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Skubios pagalbos konsultacijos"
    },
    {
      icon: MapPin,
      number: "1",
      label: "Patogi lokacija Šiauliuose"
    }
  ];

  return (
    <section id="about" className="py-20 bg-medical-blue-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">Apie kliniką Salvavita</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Klinika Salvavita yra modernus medicinos centras, teikiantis aukštos kokybės 
                sveikatos priežiūros paslaugas Šiaulių mieste. Mūsų komandą sudaro patyrę 
                specialistai, kurie rūpinasi kiekvieno paciento sveikata.
              </p>
              
              <p>
                Prisirašykite prie klinikos Salvavita ir apdrauskite privalomuoju sveikatos 
                draudimu. Šeimos gydytojų medicinos paslaugos nekatinguoja - mes teikiame 
                visapusišką medicininę pagalbą visai šeimai.
              </p>
              
              <p>
                Mūsų tikslas - užtikrinti, kad kiekvienas pacientas gautų individualų, 
                profesionalų ir rūpestingą gydymą mūsų šiuolaikiškoje klinikoje.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="space-y-4">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;