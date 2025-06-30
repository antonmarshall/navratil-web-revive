
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Users, Heart, Activity, Book, Palette } from "lucide-react";

const MethodsSection = () => {
  const methodCategories = [
    {
      icon: Brain,
      title: "Kognitive Methoden",
      color: "bg-blue-100 text-blue-600",
      methods: [
        "Kognitive Umstrukturierung",
        "PC-gestütztes kognitives Training",
        "Vermittlung von Mnemo-Techniken",
        "Selbst-Management-Strategien"
      ]
    },
    {
      icon: Users,
      title: "Soziale Kompetenzen",
      color: "bg-green-100 text-green-600", 
      methods: [
        "Training sozialer Kompetenzen",
        "Rollenspiele",
        "Coaching für Eltern, Erzieher, Lehrer",
        "Familien-Genogramm und Skulptur"
      ]
    },
    {
      icon: Heart,
      title: "Emotionsregulation",
      color: "bg-pink-100 text-pink-600",
      methods: [
        "Entspannungs-Verfahren",
        "Achtsamkeits-Training",
        "EMDR",
        "Elemente der Körper-Therapie"
      ]
    },
    {
      icon: Activity,
      title: "Verhaltenstherapie",
      color: "bg-orange-100 text-orange-600",
      methods: [
        "Expositions-Behandlung",
        "Stress- und Belastungs-Management",
        "Acceptanz- und Commitment-Therapie",
        "Ego-State-Therapie"
      ]
    },
    {
      icon: Book,
      title: "Narrative Methoden",
      color: "bg-purple-100 text-purple-600",
      methods: [
        "Arbeit mit Metaphern und Geschichten",
        "Lösungsorientierte Therapie",
        "Spiel-Therapie",
        "Psycho-Edukation"
      ]
    },
    {
      icon: Palette,
      title: "Kreative Ansätze",
      color: "bg-indigo-100 text-indigo-600",
      methods: [
        "Elemente der Kunst-Therapie",
        "Sport und Ernährung",
        "Arbeit mit Übertragung",
        "Holistische Ansätze"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Behandlungs-Methoden
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Je nach Störungsbild sowie abhängig vom Alter des Klienten und der Bereitschaft der Bezugspersonen 
            arbeite ich mit verschiedenen wissenschaftlich fundierten Methoden:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {methodCategories.map((category, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg"
            >
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className={`mx-auto mb-4 p-4 rounded-full w-fit ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {category.title}
                  </h3>
                </div>
                
                <ul className="space-y-3">
                  {category.methods.map((method, methodIndex) => (
                    <li key={methodIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm leading-relaxed">
                        {method}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodsSection;
