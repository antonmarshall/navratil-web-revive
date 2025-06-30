
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
    <section id="timeline" className="py-16 bg-gradient-to-b from-orange-50 to-yellow-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-yellow-100 rounded-full mb-6">
            <Users className="w-8 h-8 text-yellow-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Zu meiner Person
          </h2>
          <h3 className="text-xl text-rose-600 mb-4">
            Dipl.-Psych. Christiane Navratil
          </h3>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {timelineData.map((item, index) => (
              <Card key={index} className="w-48 bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0">
                <CardContent className="p-4 text-center">
                  <div className={`mx-auto mb-3 p-3 ${item.color} text-white rounded-full w-fit`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="text-sm font-bold text-white bg-gradient-to-r from-rose-400 to-orange-400 px-2 py-1 rounded-full mb-2">
                    {item.year}
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800 mb-2">
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

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-rose-50 to-orange-50 border-0 shadow-lg">
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Qualifikationen
              </h4>
              <div className="text-sm text-gray-600 space-y-1">
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
