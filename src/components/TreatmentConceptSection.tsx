import { Brain, Users, Layers } from "lucide-react";

const concepts = [
  {
    key: "verhaltenstherapie",
    title: "Verhaltenstherapie",
    icon: "/verhaltenstherapie.png",
    color: "bg-primary-light border-primary",
    iconAlt: "Symbol Verhaltenstherapie",
    description: (
      <>
        Neben dem Patienten wird bei der Behandlung das Umfeld mit einbezogen. Denn bei der Entwicklung von psychischen Symptomen spielen soziale Faktoren eine wichtige Rolle. Jedes Symptom hat eine Lerngeschichte: Das bedeutet aber auch, dass sich Symptome wieder in gesunde Gedanken, Gefühle und Verhaltensweisen umwandeln lassen.
      </>
    )
  },
  {
    key: "systemische-therapie",
    title: "Systemische Therapie",
    icon: "/systemischepsychologie.png",
    color: "bg-accent2-light border-accent2",
    iconAlt: "Symbol Systemische Therapie",
    description: (
      <>
        Ziel der Therapie wird es u.a. sein, dem Patienten eine korrigierende Beziehungserfahrung zu ermöglichen. Auf diese Weise können Struktur bedingte Defizite sowie Konflikte und damit verbundene aktuelle Symptome bearbeitet und aufgelöst werden.
      </>
    )
  },
  {
    key: "tiefenpsychologisch",
    title: "Tiefenpsychologisch fundierte Psychotherapie",
    icon: "/tiefenpsychologie.png",
    color: "bg-accent-light border-accent",
    iconAlt: "Symbol Tiefenpsychologisch fundierte Psychotherapie",
    description: (
      <>Hier stehen unbewusste Konflikte und biografische Erfahrungen im Mittelpunkt. Ziel ist es, innere Muster zu verstehen und zu verändern.</>
    )
  },
  {
    key: "neuropsychologisch",
    title: "Neuropsychologische Therapie",
    icon: "/neuropsychologie.png",
    color: "bg-secondary-light border-secondary",
    iconAlt: "Symbol Neuropsychologische Therapie",
    description: (
      <>Die Neuropsychologie verbindet psychische Prozesse mit den Funktionen des Gehirns. Sie hilft z.B. bei Aufmerksamkeits-, Gedächtnis- oder Sprachstörungen nach Erkrankungen oder Unfällen.</>
    )
  }
];

const TreatmentConceptSection = () => {
  // SVG-Layout-Logik (nodePositions, svgWidth, svgHeight, circleRadius, hovered, setHovered) wird hier vorausgesetzt
  // ...
  return (
    <section id="behandlungskonzept" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Behandlungskonzept</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Mein psychotherapeutisches Behandlungskonzept basiert auf der Verhaltens-Therapie als ein anerkanntes Richtlinien-Verfahren – verbunden mit folgenden evidenzbasierten therapeutischen Grund-Ideen:
          </p>
        </div>
        <div className="relative max-w-[700px] w-full mx-auto h-[520px]">
          {/* SVG-Linien */}
          {/* ...SVG- und Tooltip-Logik wie in der Stashed changes-Version... */}
        </div>
      </div>
    </section>
  );
};

export default TreatmentConceptSection; 