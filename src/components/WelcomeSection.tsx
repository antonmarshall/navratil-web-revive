
import { Card, CardContent } from "@/components/ui/card";
import { Smile, Ear, Heart, Lightbulb, Users, ArrowRight } from "lucide-react";

const WelcomeSection = () => {
  const features = [
    {
      icon: Smile,
      title: "Gemeinsam lachen und traurig sein",
      description: "Ein sicherer Raum für alle Emotionen"
    },
    {
      icon: Ear,
      title: "Erzählen und Zuhören",
      description: "Ich höre zu und verstehe"
    },
    {
      icon: Heart,
      title: "Sich ausruhen",
      description: "Einen Moment innehalten und durchatmen"
    },
    {
      icon: Lightbulb,
      title: "Neue Ideen entwickeln", 
      description: "Gemeinsam Lösungen für Probleme finden"
    },
    {
      icon: Users,
      title: "Für Kleine und Große",
      description: "Von Kleinkindern bis zu Erwachsenen"
    },
    {
      icon: ArrowRight,
      title: "Den nächsten Schritt finden",
      description: "Wir finden gemeinsam heraus, welcher Schritt der nächste sein könnte"
    }
  ];

  return (
    <section id="willkommen" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Willkommen in der Hüffer-Straße 22 in Münster!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ein Ort, um Neues zu lernen und sich auszuruhen. Um neue Ideen zu entwickeln und Lösungen für Probleme zu finden.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-md"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 inline-block p-4 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
