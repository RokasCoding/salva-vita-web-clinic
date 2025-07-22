import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Kontaktai</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Susisiekite su mumis bet kuriuo jums patogiu būdu. Mūsų komanda pasiruošusi jums padėti.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">Kontaktinė informacija</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Telefonas</h4>
                    <p className="text-muted-foreground">+370 620 36663</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">El. paštas</h4>
                    <p className="text-muted-foreground">info@salvavita.lt</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Adresas</h4>
                    <p className="text-muted-foreground">Tilžės g. 54, Šiauliai</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Darbo laikas</h4>
                    <div className="text-muted-foreground space-y-1">
                      <p>Pirmadienį - Penktadienį: 8:00 - 18:00</p>
                      <p>Šeštadienį: 9:00 - 15:00</p>
                      <p>Sekmadienį: Nedirbame</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Card */}
            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle>Registracija pas gydytoją</CardTitle>
                <CardDescription className="text-blue-100">
                  Užsiregistruokite vizitui telefonu arba el. paštu
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" size="lg" className="w-full">
                  Registruotis dabar
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Susisiekite su mumis</CardTitle>
              <CardDescription>
                Užpildykite formą ir mes susisieksime su jumis artimiausiu metu
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Vardas</label>
                  <Input placeholder="Jūsų vardas" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Pavardė</label>
                  <Input placeholder="Jūsų pavardė" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">El. paštas</label>
                <Input type="email" placeholder="jusu.pastas@email.lt" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Telefonas</label>
                <Input type="tel" placeholder="+370 xxx xxxxx" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Žinutė</label>
                <Textarea 
                  placeholder="Jūsų žinutė..."
                  className="min-h-[120px]"
                />
              </div>
              
              <Button className="w-full" size="lg">
                Siųsti žinutę
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;