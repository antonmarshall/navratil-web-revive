
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, AlertTriangle, Heart } from "lucide-react";

const Footer = () => {
  const emergencyContacts = [
    {
      area: "Kreis Münster",
      contacts: [
        {
          type: "Kinder und Jugendliche unter 18 Jahre",
          name: "Universitätsklinikum Münster",
          phone: "(0251) 83 56 67 3"
        },
        {
          type: "Jugendliche über 18 Jahre und Erwachsene",
          name: "Universitätsklinikum Münster",
          phone: "(0251) 83 56 60 1"
        },
        {
          type: "Erwachsene",
          name: "LWL-Klinik",
          phone: "(0251) 91 55 50"
        }
      ]
    },
    {
      area: "Kreis Coesfeld",
      contacts: [
        {
          type: "Kinder und Jugendliche unter 18 Jahre",
          name: "LWL-Klinik Marl-Sinsen",
          phone: "(02365) 80 20"
        },
        {
          type: "Erwachsene",
          name: "Klinik am Schloßgarten",
          phone: "(02594) 92 01"
        }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        {/* Notfall-Kontakte */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="inline-block p-4 bg-red-500 rounded-full mb-4">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Notfall-Kontakte</h2>
            <p className="text-gray-300">Im Notfall wenden Sie sich bitte an:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {emergencyContacts.map((area, index) => (
              <Card key={index} className="bg-gray-700/50 border-gray-600 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white text-center">{area.area}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {area.contacts.map((contact, contactIndex) => (
                    <div key={contactIndex} className="border-b border-gray-600 pb-3 last:border-b-0">
                      <p className="text-sm text-gray-300 mb-1">{contact.type}</p>
                      <p className="text-white font-semibold">{contact.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Phone className="w-4 h-4 text-green-400" />
                        <a href={`tel:${contact.phone}`} className="text-green-400 hover:text-green-300">
                          {contact.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Kontakt-Info und Links */}
        <div className="grid md:grid-cols-3 gap-8 border-t border-gray-700 pt-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-rose-400" />
              <h3 className="text-lg font-semibold">Praxis-Kontakt</h3>
            </div>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <div>
                  <p>Hüffer-Str. 22</p>
                  <p>48149 Münster</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-green-400" />
                <a href="tel:017696346095" className="hover:text-white">
                  (0176) 96 34 60 95
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-rose-400" />
                <a href="mailto:christianenavratil@web.de" className="hover:text-white">
                  christianenavratil@web.de
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-6 h-6 text-orange-400" />
              <h3 className="text-lg font-semibold">Sprechzeiten</h3>
            </div>
            <div className="text-gray-300 space-y-1">
              <p><strong>Telefonische Sprechzeiten:</strong></p>
              <p>Montags von 9 bis 12 Uhr</p>
              <p className="text-sm mt-2">
                Falls Sie mich nicht persönlich erreichen, hinterlassen Sie bitte eine Nachricht. 
                Ich werde schnellstmöglich zurückrufen.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Schnellzugriff</h3>
            <div className="space-y-2">
              <a href="#angebot" className="block text-gray-300 hover:text-white transition-colors">
                Praxis-Angebot
              </a>
              <a href="#timeline" className="block text-gray-300 hover:text-white transition-colors">
                Zu meiner Person  
              </a>
              <a href="#kontakt" className="block text-gray-300 hover:text-white transition-colors">
                Kontakt
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; 2024 Psychotherapeutische Praxis Christiane Navratil. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
