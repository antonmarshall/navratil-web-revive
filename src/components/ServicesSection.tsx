
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
    <section id="angebot" className="py-20 bg-gradient-to-b from-rose-50 to-orange-50">
      <div className="container mx-auto px-6">
        {/* Praxis-Angebot */}
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-rose-100 rounded-full mb-6">
            <Heart className="w-8 h-8 text-rose-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Praxis-Angebot
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            In der Praxis besteht folgendes psychotherapeutisches Angebot
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-white border-0 shadow-xl overflow-hidden"
            >
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto mb-4 p-4 bg-gradient-to-r ${service.color} rounded-full group-hover:scale-110 transition-transform duration-300 w-fit`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl text-gray-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Alters-Spektrum als Grafik */}
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-orange-100 rounded-full mb-6">
            <Users className="w-8 h-8 text-orange-600" />
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            Alters-Spektrum
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Als Psychotherapeutin behandle ich alle Altersgruppen
          </p>
        </div>

        {/* Grafische Darstellung des Altersspektrums */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Verbindungslinie */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-pink-300 via-orange-300 to-blue-300 rounded-full transform -translate-y-1/2"></div>
            
            <div className="flex justify-between items-end relative z-10">
              {[
                { icon: Baby, label: "Kleinkinder", color: "bg-pink-200 text-pink-600", size: "w-16 h-16" },
                { icon: Users, label: "Vorschulkinder", color: "bg-purple-200 text-purple-600", size: "w-20 h-20" },
                { icon: GraduationCap, label: "Grundschulkinder", color: "bg-blue-200 text-blue-600", size: "w-24 h-24" },
                { icon: User, label: "Jugendliche", color: "bg-green-200 text-green-600", size: "w-28 h-28" },
                { icon: Users, label: "Eltern", color: "bg-orange-200 text-orange-600", size: "w-32 h-32" },
                { icon: User, label: "Erwachsene", color: "bg-red-200 text-red-600", size: "w-28 h-28" }
              ].map((group, index) => (
                <div key={index} className="text-center flex flex-col items-center">
                  <div className={`${group.color} ${group.size} rounded-full flex items-center justify-center mb-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
                    <group.icon className="w-1/2 h-1/2" />
                  </div>
                  <h4 className="text-sm font-semibold text-gray-800 max-w-20">
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
