
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Award, Users } from "lucide-react";

const Timeline = () => {
  const timelineData = [
    {
      year: "1965",
      title: "Geboren",
      description: "Jahrgang 1965 - Ehefrau, Mutter und Großmutter",
      icon: Users,
      color: "bg-pink-100 text-pink-600"
    },
    {
      year: "1980er",
      title: "Ausbildung Krankenschwester",
      description: "Grundausbildung im Gesundheitswesen",
      icon: Award,
      color: "bg-blue-100 text-blue-600"
    },
    {
      year: "1990er",
      title: "Psychologie-Studium",
      description: "Diplom-Psychologin",
      icon: GraduationCap,
      color: "bg-green-100 text-green-600"
    },
    {
      year: "2000er",
      title: "Therapeutische Ausbildungen",
      description: "Kinder- und Jugendlichen-Psychotherapeutin, Klinische Neuropsychologin",
      icon: Award,
      color: "bg-purple-100 text-purple-600"
    },
    {
      year: "2009",
      title: "Praxisgründung",
      description: "Eigene Praxistätigkeit seit 2009",
      icon: Briefcase,
      color: "bg-orange-100 text-orange-600"
    },
    {
      year: "Heute",
      title: "Lehr- und Vortragstätigkeit",
      description: "Montessori-Pädagogin, Heilpraktiker (Psychotherapie), Psychologische Psychotherapeutin (i.A.)",
      icon: GraduationCap,
      color: "bg-indigo-100 text-indigo-600"
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Zu meiner Person
          </h2>
          <h3 className="text-2xl text-blue-700 mb-4">
            Dipl.-Psych. Christiane Navratil
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mein Werdegang und meine Qualifikationen
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-300 to-green-300"></div>
            
            {timelineData.map((item, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-12`}>
                <Card className={`w-full max-w-md bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-full ${item.color} flex-shrink-0`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                            {item.year}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-400 rounded-full shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-green-50 border-0 shadow-lg">
            <CardContent className="p-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Mitgliedschaften & Qualifikationen
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <p>• Dipl.-Psychologin</p>
                  <p>• Kinder- und Jugendlichen-Psychotherapeutin</p>
                  <p>• Klinische Neuropsychologin</p>
                </div>
                <div>
                  <p>• Heilpraktiker (Psychotherapie)</p>
                  <p>• Montessori-Pädagogin</p>
                  <p>• Krankenschwester</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
