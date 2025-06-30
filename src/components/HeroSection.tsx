
import { Button } from "@/components/ui/button";
import { Heart, Phone, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-rose-100">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 text-yellow-400">
        <Sparkles className="w-8 h-8" />
      </div>
      <div className="absolute top-32 right-20 text-pink-400">
        <Heart className="w-6 h-6" />
      </div>
      <div className="absolute bottom-40 left-20 text-orange-400">
        <Sparkles className="w-6 h-6" />
      </div>
      <div className="absolute bottom-20 right-10 text-rose-400">
        <Heart className="w-8 h-8" />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 inline-block p-6 bg-white rounded-full shadow-lg">
            <Heart className="w-16 h-16 text-rose-500" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Psychotherapeutische Praxis
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-rose-600 mb-8 font-medium">
            Dipl.-Psych. Christiane Navratil
          </h2>
          
          <div className="bg-white rounded-3xl p-8 shadow-xl mb-12 border-4 border-yellow-200">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
              Ein Ort für Kleine und Große. Zum Erzählen und Zuhören. 
              Um gemeinsam zu lachen und traurig zu sein.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-rose-500 hover:bg-rose-600 text-white px-10 py-6 rounded-full text-lg font-semibold shadow-lg border-4 border-white"
              onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Phone className="w-6 h-6 mr-3" />
              Termin vereinbaren
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-4 border-rose-500 bg-white text-rose-600 hover:bg-rose-50 px-10 py-6 rounded-full text-lg font-semibold shadow-lg"
              onClick={() => document.getElementById('angebot')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Mehr erfahren
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
