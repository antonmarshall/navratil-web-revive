import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[60vh] flex items-center justify-center"
      style={{
        backgroundImage: "url('/hero_hintergrund.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Inhalt */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center gap-8 py-16">
        {/* Profilbild (zentriert, groß, rund) */}
        <img
          src="/profil.jpg"
          alt="Dipl.-Psych. Christiane Navratil"
          className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover mb-4 shadow-sm"
        />
        <h1 className="text-3xl md:text-5xl font-bold text-[#222222] mb-2">
          Psychotherapeutische Praxis
        </h1>
        <h2 className="text-xl md:text-2xl text-rose-600 mb-4 font-medium">
          Dipl.-Psych. Christiane Navratil<br />
          Für Kinder, Jugendliche und Erwachsene in Münster
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-2xl">
          Ich begleite Sie und Ihre Familie in schwierigen Lebensphasen – wertschätzend, individuell und mit langjähriger Erfahrung.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center">
          <Button
            size="lg"
            className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full text-lg font-semibold"
            onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Termin vereinbaren
          </Button>
          <span className="text-gray-600 text-base font-medium select-all">
            (0176) 96 34 60 95
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
