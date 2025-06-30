
import { Card, CardContent } from "@/components/ui/card";
import { Camera } from "lucide-react";

const PracticeGallery = () => {
  // Placeholder für Praxis-Bilder
  const galleryImages = [
    {
      id: 1,
      title: "Wartezimmer",
      description: "Gemütlicher Wartebereich für Familien"
    },
    {
      id: 2,
      title: "Therapieraum",
      description: "Ruhiger Raum für Gespräche"
    },
    {
      id: 3,
      title: "Spielbereich",
      description: "Bereich für Kinder-Therapie"
    },
    {
      id: 4,
      title: "Praxis-Eingang",
      description: "Eingangsbereich der Praxis"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Praxis-Rundgang
          </h2>
          <p className="text-xl text-gray-600">
            Werfen Sie einen Blick in unsere Räumlichkeiten
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {galleryImages.map((image, index) => (
            <Card key={image.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                <Camera className="w-12 h-12 text-gray-400" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {image.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {image.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Die Praxis befindet sich in der Hüffer-Straße 22 in Münster und bietet eine ruhige, 
            professionelle Atmosphäre für alle Altersgruppen. Hier finden Sie Raum für Gespräche, 
            Spiel und Therapie in angenehmer Umgebung.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PracticeGallery;
