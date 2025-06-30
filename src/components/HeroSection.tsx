
import { Button } from "@/components/ui/button";
import { Heart, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 182, 193, 0.3), rgba(255, 228, 181, 0.3)), url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
        }}
      ></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 inline-block p-4 bg-white/80 rounded-full shadow-lg backdrop-blur-sm">
            <Heart className="w-12 h-12 text-rose-400" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Psychotherapeutische Praxis
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-orange-100 mb-6 font-light drop-shadow-md">
            Dipl.-Psych. Christiane Navratil
          </h2>
          
          <div className="bg-white/85 backdrop-blur-sm rounded-2xl p-6 shadow-lg mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Ein Ort für Kleine und Große. Zum Erzählen und Zuhören. 
              Um gemeinsam zu lachen und traurig zu sein.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-rose-400 hover:bg-rose-500 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-lg"
              onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Phone className="w-5 h-5 mr-2" />
              Termin vereinbaren
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-700 px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-sm"
              onClick={() => document.getElementById('angebot')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Mehr erfahren
            </Button>
          </div>
          
          <div className="mt-12 flex justify-center items-center gap-8 text-white text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-200">15+</div>
              <div>Jahre Erfahrung</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-200">Alle</div>
              <div>Altersgruppen</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-200">Münster</div>
              <div>Hüffer-Straße 22</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
