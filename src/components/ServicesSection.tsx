
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, MessageCircle, Heart, RefreshCw, Users, Baby, GraduationCap, User } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Diagnostik",
      description: "Umfassende psychologische Diagnostik zur genauen Erfassung der Problematik"
    },
    {
      icon: MessageCircle,
      title: "Beratung",
      description: "Professionelle Beratung für Kinder, Jugendliche, Erwachsene und Familien"
    },
    {
      icon: Heart,
      title: "Behandlung",
      description: "Evidenzbasierte psychotherapeutische Behandlung verschiedener Störungsbilder"
    },
    {
      icon: RefreshCw,
      title: "Wiedereingliederung",
      description: "Unterstützung bei beruflicher und schulischer Wiedereingliederung"
    }
  ];

  const ageGroups = [
    { icon: Baby, label: "Kleinkinder", color: "bg-pink-100 text-pink-600" },
    { icon: Users, label: "Vorschulkinder", color: "bg-purple-100 text-purple-600" },
    { icon: GraduationCap, label: "Grundschulkinder", color: "bg-blue-100 text-blue-600" },
    { icon: User, label: "Jugendliche", color: "bg-green-100 text-green-600" },
    { icon: Users, label: "Eltern", color: "bg-orange-100 text-orange-600" },
    { icon: User, label: "Erwachsene", color: "bg-indigo-100 text-indigo-600" }
  ];

  return (
    <section id="angebot" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        {/* Praxis-Angebot */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Praxis-Angebot
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            In der Praxis besteht folgendes psychotherapeutisches Angebot:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-300 w-fit">
                  <service.icon className="w-8 h-8 text-blue-600" />
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

        {/* Alters-Spektrum */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            Alters-Spektrum
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Als Psychotherapeutin behandle ich:
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {ageGroups.map((group, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`mx-auto mb-4 p-3 rounded-full w-fit ${group.color}`}>
                <group.icon className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-semibold text-gray-800">
                {group.label}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
