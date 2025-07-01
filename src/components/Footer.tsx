import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent text-[#222222] py-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-6">
          {/* Praxis Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-rose-300">Kontakt</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-300" />
                <div>
                  <p>Hüffer-Str. 22</p>
                  <p>48149 Münster</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-green-300" />
                <a href="tel:017696346095" className="hover:text-rose-300">
                  (0176) 96 34 60 95
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-300" />
                <a href="mailto:christianenavratil@web.de" className="hover:text-rose-300">
                  christianenavratil@web.de
                </a>
              </div>
            </div>
          </div>

          {/* Sprechzeiten */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-orange-300">Sprechzeiten</h3>
            <div className="text-sm">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-blue-300" />
                <span>Montags 9-12 Uhr</span>
              </div>
              <p className="text-xs text-gray-300">
                Bei Nichterreichen bitte Nachricht hinterlassen
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-green-300">Navigation</h3>
            <div className="space-y-1 text-sm">
              <a href="#angebot" className="block hover:text-rose-300 transition-colors">Angebot</a>
              <a href="#timeline" className="block hover:text-rose-300 transition-colors">Über mich</a>
              <a href="#kontakt" className="block hover:text-rose-300 transition-colors">Kontakt</a>
            </div>
          </div>

          {/* Notfall - kompakt */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-red-300">Notfall</h3>
            <div className="text-xs space-y-1">
              <p className="font-medium">Münster:</p>
              <p>UKM: (0251) 83 56 673</p>
              <p>LWL: (0251) 91 55 50</p>
              <p className="font-medium mt-2">Coesfeld:</p>
              <p>LWL Marl: (02365) 80 20</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-6 pt-4 text-center text-sm text-gray-400">
          <p>&copy; 2024 Psychotherapeutische Praxis Christiane Navratil</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
