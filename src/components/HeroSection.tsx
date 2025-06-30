
import { Button } from "@/components/ui/button";
import { Heart, Phone, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 182, 193, 0.4), rgba(255, 228, 181, 0.4)), url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
        }}
      ></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 inline-block p-6 bg-white/90 rounded-full shadow-2xl backdrop-blur-sm">
            <Heart className="w-16 h-16 text-rose-500 animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Psychotherapeutische Praxis
          </h1>
          
          <h2 className="text-3xl md:text-4xl text-orange-100 mb-8 font-light drop-shadow-md">
            Dipl.-Psych. Christiane Navratil
          </h2>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl mb-12">
            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Ein Ort für Kleine und Große. Zum Erzählen und Zuhören. 
              Um gemeinsam zu lachen und traurig zu sein.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl text-lg"
              onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Phone className="w-6 h-6 mr-2" />
              Termin vereinbaren
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-700 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm text-lg"
              onClick={() => document.getElementById('angebot')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Mehr erfahren
            </Button>
          </div>
          
          <div className="mt-16 flex justify-center items-center gap-12 text-white">
            <div className="text-center bg-white/20 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-3xl font-bold text-orange-200">15+</div>
              <div className="text-sm">Jahre Erfahrung</div>
            </div>
            <div className="text-center bg-white/20 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-3xl font-bold text-orange-200">Alle</div>
              <div className="text-sm">Altersgruppen</div>
            </div>
            <div className="text-center bg-white/20 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-3xl font-bold text-orange-200">Münster</div>
              <div className="text-sm">Hüffer-Straße 22</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
