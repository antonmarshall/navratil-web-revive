
import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-rose-200 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-rose-500" />
            <span className="font-semibold text-gray-800">Praxis Navratil</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('angebot')}
              className="text-gray-700 hover:text-rose-600 transition-colors"
            >
              Angebot
            </button>
            <button 
              onClick={() => scrollToSection('timeline')}
              className="text-gray-700 hover:text-rose-600 transition-colors"
            >
              Über mich
            </button>
            <button 
              onClick={() => scrollToSection('galerie')}
              className="text-gray-700 hover:text-rose-600 transition-colors"
            >
              Praxis
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-rose-600 transition-colors"
            >
              FAQ
            </button>
            <Button 
              onClick={() => scrollToSection('kontakt')}
              className="bg-rose-500 hover:bg-rose-600 text-white"
            >
              Kontakt
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-rose-200 py-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('angebot')}
                className="text-left px-4 py-2 text-gray-700 hover:text-rose-600 hover:bg-rose-50 transition-colors"
              >
                Angebot
              </button>
              <button 
                onClick={() => scrollToSection('timeline')}
                className="text-left px-4 py-2 text-gray-700 hover:text-rose-600 hover:bg-rose-50 transition-colors"
              >
                Über mich
              </button>
              <button 
                onClick={() => scrollToSection('galerie')}
                className="text-left px-4 py-2 text-gray-700 hover:text-rose-600 hover:bg-rose-50 transition-colors"
              >
                Praxis
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-left px-4 py-2 text-gray-700 hover:text-rose-600 hover:bg-rose-50 transition-colors"
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('kontakt')}
                className="text-left px-4 py-2 text-gray-700 hover:text-rose-600 hover:bg-rose-50 transition-colors"
              >
                Kontakt
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
