
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Award, Users, Heart } from "lucide-react";

const Timeline = () => {
  const timelineData = [
    {
      year: "1965",
      title: "Geboren",
      description: "Ehefrau, Mutter und Großmutter",
      icon: Heart,
      color: "bg-pink-400"
    },
    {
      year: "1980er",
      title: "Krankenschwester",
      description: "Grundausbildung im Gesundheitswesen",
      icon: Award,
      color: "bg-blue-400"
    },
    {
      year: "1990er",
      title: "Psychologie-Studium",
      description: "Diplom-Psychologin",
      icon: GraduationCap,
      color: "bg-green-400"
    },
    {
      year: "2000er",
      title: "Therapeutische Ausbildungen",
      description: "Kinder- und Jugendlichen-Psychotherapeutin",
      icon: Award,
      color: "bg-purple-400"
    },
    {
      year: "2009",
      title: "Praxisgründung",
      description: "Eigene Praxistätigkeit",
      icon: Briefcase,
      color: "bg-orange-400"
    },
    {
      year: "Heute",
      title: "Lehr- und Vortragstätigkeit",
      description: "Montessori-Pädagogin, Heilpraktiker",
      icon: GraduationCap,
      color: "bg-rose-400"
    }
  ];

  return (
    <section id="timeline" className="py-12 bg-gradient-to-b from-orange-50 to-yellow-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-yellow-100 rounded-full mb-4">
            <Users className="w-6 h-6 text-yellow-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Zu meiner Person
          </h2>
          <h3 className="text-lg text-rose-600 mb-4">
            Dipl.-Psych. Christiane Navratil
          </h3>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {timelineData.map((item, index) => (
              <Card key={index} className="w-40 bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-0">
                <CardContent className="p-3 text-center">
                  <div className={`mx-auto mb-2 p-2 ${item.color} text-white rounded-full w-fit`}>
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-white bg-gradient-to-r from-rose-400 to-orange-400 px-2 py-1 rounded-full mb-2">
                    {item.year}
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Card className="max-w-xl mx-auto bg-gradient-to-r from-rose-50 to-orange-50 border-0 shadow-md">
            <CardContent className="p-4">
              <h4 className="text-md font-semibold text-gray-800 mb-3">
                Qualifikationen
              </h4>
              <div className="text-xs text-gray-600 space-y-1">
                <p>• Dipl.-Psychologin • Kinder- und Jugendlichen-Psychotherapeutin</p>
                <p>• Klinische Neuropsychologin • Heilpraktiker (Psychotherapie)</p>
                <p>• Montessori-Pädagogin • Krankenschwester</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
