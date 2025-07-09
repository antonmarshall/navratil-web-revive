import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, MessageCircle, Stethoscope, RefreshCw, Baby, GraduationCap, User, Users } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Diagnostik",
      description: "Umfassende psychologische Diagnostik zur genauen Erfassung der Problematik",
      color: "border-blue-400"
    },
    {
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Beratung",
      description: "Professionelle Beratung für Kinder, Jugendliche, Erwachsene und Familien",
      color: "border-green-400"
    },
    {
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Behandlung",
      description: "Evidenzbasierte psychotherapeutische Behandlung verschiedener Störungsbilder",
      color: "border-rose-400"
    },
    {
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Wiedereingliederung",
      description: "Unterstützung bei beruflicher und schulischer Wiedereingliederung",
      color: "border-orange-400"
    }
  ];

  return (
    <section id="angebot" className="py-16 bg-orange-100">
      <div className="container mx-auto px-6">
        {/* Praxis-Angebot */}
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-rose-500 rounded-full mb-4">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Praxis-Angebot
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
<<<<<<< Updated upstream
            In der Praxis besteht folgendes psychotherapeutisches Angebot
=======
            Hier finden Sie meine Schwerpunkte und Leistungen:
>>>>>>> Stashed changes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-4 ${service.color} shadow-lg overflow-hidden bg-white`}
            >
              <CardHeader className="text-center pb-3">
                <div className="mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
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
          <div className="inline-block p-4 bg-orange-500 rounded-full mb-4">
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
          <div className="relative bg-white rounded-3xl p-8 shadow-xl border-4 border-yellow-300">
            {/* Verbindungslinie */}
            <div className="absolute top-1/2 left-4 right-4 h-1 bg-pink-300 rounded-full transform -translate-y-1/2 shadow-sm"></div>
            
            <div className="flex justify-between items-end relative z-10 pt-8 pb-4">
              {[
                { icon: Baby, label: "Kleinkinder", color: "bg-pink-400", size: "w-24 h-24" },
                { icon: Users, label: "Vorschulkinder", color: "bg-purple-400", size: "w-24 h-24" },
                { icon: GraduationCap, label: "Grundschulkinder", color: "bg-blue-400", size: "w-24 h-24" },
                { icon: User, label: "Jugendliche", color: "bg-green-400", size: "w-24 h-24" },
                { icon: Users, label: "Eltern", color: "bg-yellow-400", size: "w-24 h-24" },
                { icon: User, label: "Erwachsene", color: "bg-orange-400", size: "w-24 h-24" }
              ].map((group, index) => (
                <div key={index} className="text-center flex flex-col items-center group cursor-pointer">
                  <div className={`${group.color} ${group.size} rounded-full flex items-center justify-center mb-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border-4 border-white`}>
                    <group.icon className="w-1/2 h-1/2 text-white" />
                  </div>
                  <div className="bg-white rounded-lg px-3 py-2 shadow-md group-hover:shadow-lg transition-shadow border-2 border-gray-200">
                    <h4 className="text-sm font-bold text-gray-800 whitespace-pre-line leading-tight mb-1">
                      {group.label}
                    </h4>
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
