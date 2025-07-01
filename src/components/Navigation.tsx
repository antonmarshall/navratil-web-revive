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
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: '#f6a81a' }}>
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer select-none" onClick={() => scrollToSection('willkommen')}>
          <Heart className="w-6 h-6 text-rose-500" />
          <span className="font-semibold text-gray-900 text-lg md:text-xl tracking-tight">Praxis Navratil</span>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('angebot')} className="text-gray-900 hover:text-rose-600 transition-colors text-base font-medium px-2 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 rounded">
            Angebot
          </button>
          <button onClick={() => scrollToSection('timeline')} className="text-gray-900 hover:text-rose-600 transition-colors text-base font-medium px-2 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 rounded">
            Über mich
          </button>
          <button onClick={() => scrollToSection('galerie')} className="text-gray-900 hover:text-rose-600 transition-colors text-base font-medium px-2 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 rounded">
            Praxis
          </button>
          <button onClick={() => scrollToSection('faq')} className="text-gray-900 hover:text-rose-600 transition-colors text-base font-medium px-2 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 rounded">
            FAQ
          </button>
          <Button onClick={() => scrollToSection('kontakt')} className="bg-rose-500 hover:bg-rose-600 text-white font-semibold px-6 py-2 rounded-full shadow transition-colors text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400">
            Kontakt
          </Button>
        </div>
        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Menü öffnen/schließen">
          {isOpen ? <X className="w-7 h-7 text-gray-900" /> : <Menu className="w-7 h-7 text-gray-900" />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" style={{ backgroundColor: '#f6a81a' }}>
          <div className="border-t border-gray-200 py-6 px-6 shadow-lg animate-fade-in flex flex-col gap-4">
            <button onClick={() => scrollToSection('angebot')} className="text-left text-gray-900 hover:text-rose-600 text-lg font-medium px-2 py-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 transition-colors">
              Angebot
            </button>
            <button onClick={() => scrollToSection('timeline')} className="text-left text-gray-900 hover:text-rose-600 text-lg font-medium px-2 py-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 transition-colors">
              Über mich
            </button>
            <button onClick={() => scrollToSection('galerie')} className="text-left text-gray-900 hover:text-rose-600 text-lg font-medium px-2 py-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 transition-colors">
              Praxis
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-left text-gray-900 hover:text-rose-600 text-lg font-medium px-2 py-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 transition-colors">
              FAQ
            </button>
            <Button onClick={() => scrollToSection('kontakt')} className="bg-rose-500 hover:bg-rose-600 text-white font-semibold px-6 py-3 rounded-full shadow text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400">
              Kontakt
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
