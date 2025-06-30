
import { Button } from "@/components/ui/button";
import { Heart, Phone, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-green-100 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 to-green-200/20"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 inline-block p-4 bg-white/80 rounded-full shadow-lg">
            <Heart className="w-12 h-12 text-blue-600 animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 animate-fade-in">
            Psychotherapeutische Praxis
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-blue-700 mb-8 font-light">
            Dipl.-Psych. Christiane Navratil
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ein Ort für Kleine und Große. Zum Erzählen und Zuhören. 
            Um gemeinsam zu lachen und traurig zu sein.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Phone className="w-5 h-5 mr-2" />
              Termin vereinbaren
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('angebot')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Mehr erfahren
            </Button>
          </div>
          
          <div className="mt-16 flex justify-center items-center gap-8 text-gray-600">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">15+</div>
              <div className="text-sm">Jahre Erfahrung</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">Alle</div>
              <div className="text-sm">Altersgruppen</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">Münster</div>
              <div className="text-sm">Hüffer-Straße 22</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
