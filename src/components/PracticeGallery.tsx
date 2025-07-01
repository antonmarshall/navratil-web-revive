import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Camera, MapPin } from "lucide-react";

const PracticeGallery = () => {
  const galleryImages = [
    {
      id: 1,
      title: "Wartezimmer",
      description: "Gemütlicher Wartebereich für Familien",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Therapieraum",
      description: "Ruhiger Raum für Gespräche",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Spielbereich",
      description: "Bereich für Kinder-Therapie",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Praxis-Eingang",
      description: "Eingangsbereich der Praxis",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-rose-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-orange-100 rounded-full mb-6">
            <Camera className="w-8 h-8 text-orange-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Praxis-Rundgang
          </h2>
          <p className="text-xl text-gray-600">
            Werfen Sie einen Blick in unsere einladenden Räumlichkeiten
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {galleryImages.map((image) => (
                <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={image.image} 
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-6 bg-gradient-to-r from-orange-50 to-rose-50">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {image.title}
                      </h3>
                      <p className="text-gray-600">
                        {image.description}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white/90 hover:bg-white text-orange-600 border-orange-200" />
            <CarouselNext className="bg-white/90 hover:bg-white text-orange-600 border-orange-200" />
          </Carousel>
        </div>

        <div className="mt-12 text-center">
          
        </div>
      </div>
    </section>
  );
};

export default PracticeGallery;
