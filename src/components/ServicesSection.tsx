
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, MessageCircle, Stethoscope, RefreshCw, Baby, GraduationCap, User, Users } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Diagnostik",
      description: "Umfassende psychologische Diagnostik zur genauen Erfassung der Problematik",
      color: "from-blue-400 to-blue-600 text-white"
    },
    {
      icon: MessageCircle,
      title: "Beratung",
      description: "Professionelle Beratung für Kinder, Jugendliche, Erwachsene und Familien",
      color: "from-green-400 to-green-600 text-white"
    },
    {
      icon: Heart,
      title: "Behandlung",
      description: "Evidenzbasierte psychotherapeutische Behandlung verschiedener Störungsbilder",
      color: "from-rose-400 to-rose-600 text-white"
    },
    {
      icon: RefreshCw,
      title: "Wiedereingliederung",
      description: "Unterstützung bei beruflicher und schulischer Wiedereingliederung",
      color: "from-orange-400 to-orange-600 text-white"
    }
  ];

  return (
    <section id="angebot" className="py-16 bg-gradient-to-b from-rose-200 to-orange-200">
      <div className="container mx-auto px-6">
        {/* Praxis-Angebot */}
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-rose-400 rounded-full mb-4">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Praxis-Angebot
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            In der Praxis besteht folgendes psychotherapeutisches Angebot
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
            >
              <CardHeader className="text-center pb-3">
                <div className={`mx-auto mb-4 p-4 bg-gradient-to-r ${service.color} rounded-full group-hover:scale-110 transition-transform duration-300 w-fit shadow-lg`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl text-gray-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Alters-Spektrum als Grafik */}
        <div className="text-center mb-8">
          <div className="inline-block p-4 bg-orange-400 rounded-full mb-4">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Alters-Spektrum
          </h3>
          <p className="text-lg text-gray-700 mb-8">
            Als Psychotherapeutin behandle ich alle Altersgruppen
          </p>
        </div>

        {/* Neue grafische Darstellung des Altersspektrums */}
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-white rounded-3xl p-8 shadow-xl">
            {/* Regenbogen-Pfad */}
            <div className="absolute top-1/2 left-4 right-4 h-2 bg-gradient-to-r from-pink-400 via-purple-400 via-blue-400 via-green-400 via-yellow-400 to-orange-400 rounded-full transform -translate-y-1/2 shadow-lg"></div>
            
            <div className="flex justify-between items-end relative z-10 pt-8 pb-4">
              {[
                { icon: Baby, label: "Klein-\nkinder", color: "bg-pink-400 text-white", size: "w-16 h-16", age: "0-3" },
                { icon: Users, label: "Vorschul-\nkinder", color: "bg-purple-400 text-white", size: "w-20 h-20", age: "3-6" },
                { icon: GraduationCap, label: "Grundschul-\nkinder", color: "bg-blue-400 text-white", size: "w-24 h-24", age: "6-12" },
                { icon: User, label: "Jugend-\nliche", color: "bg-green-400 text-white", size: "w-28 h-28", age: "12-18" },
                { icon: Users, label: "Junge\nErwachsene", color: "bg-yellow-400 text-white", size: "w-32 h-32", age: "18-30" },
                { icon: User, label: "Erwach-\nsene", color: "bg-orange-400 text-white", size: "w-28 h-28", age: "30+" }
              ].map((group, index) => (
                <div key={index} className="text-center flex flex-col items-center group cursor-pointer">
                  <div className={`${group.color} ${group.size} rounded-full flex items-center justify-center mb-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border-4 border-white`}>
                    <group.icon className="w-1/2 h-1/2" />
                  </div>
                  <div className="bg-white rounded-lg px-3 py-2 shadow-md group-hover:shadow-lg transition-shadow border border-gray-200">
                    <h4 className="text-sm font-bold text-gray-800 whitespace-pre-line leading-tight mb-1">
                      {group.label}
                    </h4>
                    <p className="text-xs text-gray-600 font-medium">
                      {group.age} Jahre
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
