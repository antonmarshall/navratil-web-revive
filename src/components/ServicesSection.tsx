
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, MessageCircle, Stethoscope, RefreshCw, Baby, GraduationCap, User, Users } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Diagnostik",
      description: "Umfassende psychologische Diagnostik zur genauen Erfassung der Problematik",
      color: "from-blue-100 to-blue-200 text-blue-600"
    },
    {
      icon: MessageCircle,
      title: "Beratung",
      description: "Professionelle Beratung für Kinder, Jugendliche, Erwachsene und Familien",
      color: "from-green-100 to-green-200 text-green-600"
    },
    {
      icon: Heart,
      title: "Behandlung",
      description: "Evidenzbasierte psychotherapeutische Behandlung verschiedener Störungsbilder",
      color: "from-rose-100 to-rose-200 text-rose-600"
    },
    {
      icon: RefreshCw,
      title: "Wiedereingliederung",
      description: "Unterstützung bei beruflicher und schulischer Wiedereingliederung",
      color: "from-orange-100 to-orange-200 text-orange-600"
    }
  ];

  return (
    <section id="angebot" className="py-16 bg-gradient-to-b from-rose-50 to-orange-50">
      <div className="container mx-auto px-6">
        {/* Praxis-Angebot */}
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-rose-100 rounded-full mb-4">
            <Heart className="w-6 h-6 text-rose-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Praxis-Angebot
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            In der Praxis besteht folgendes psychotherapeutisches Angebot
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-md"
            >
              <CardHeader className="text-center pb-3">
                <div className={`mx-auto mb-3 p-3 bg-gradient-to-r ${service.color} rounded-full group-hover:scale-105 transition-transform duration-300 w-fit`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg text-gray-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Alters-Spektrum als Grafik */}
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-orange-100 rounded-full mb-4">
            <Users className="w-6 h-6 text-orange-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Alters-Spektrum
          </h3>
          <p className="text-gray-600 mb-6">
            Als Psychotherapeutin behandle ich alle Altersgruppen
          </p>
        </div>

        {/* Grafische Darstellung des Altersspektrums */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Verbindungslinie */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-300 via-orange-300 to-blue-300 rounded-full transform -translate-y-1/2"></div>
            
            <div className="flex justify-between items-end relative z-10">
              {[
                { icon: Baby, label: "Klein-kinder", color: "bg-pink-200 text-pink-600", size: "w-12 h-12" },
                { icon: Users, label: "Vorschul-kinder", color: "bg-purple-200 text-purple-600", size: "w-14 h-14" },
                { icon: GraduationCap, label: "Grundschul-kinder", color: "bg-blue-200 text-blue-600", size: "w-16 h-16" },
                { icon: User, label: "Jugend-liche", color: "bg-green-200 text-green-600", size: "w-18 h-18" },
                { icon: Users, label: "Eltern", color: "bg-orange-200 text-orange-600", size: "w-20 h-20" },
                { icon: User, label: "Erwach-sene", color: "bg-red-200 text-red-600", size: "w-18 h-18" }
              ].map((group, index) => (
                <div key={index} className="text-center flex flex-col items-center">
                  <div className={`${group.color} ${group.size} rounded-full flex items-center justify-center mb-3 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
                    <group.icon className="w-1/2 h-1/2" />
                  </div>
                  <h4 className="text-xs font-medium text-gray-700 max-w-16 leading-tight">
                    {group.label}
                  </h4>
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
