import { Brain, Users, Layers } from "lucide-react";

const concepts = [
  {
    title: "Systemisch-verhaltenstherapeutisch",
    icon: <Layers className="w-10 h-10 text-yellow-600" />,
    description: (
      <>
        Neben dem Patienten wird bei der Behandlung das Umfeld mit einbezogen. Denn bei der Entwicklung von psychischen Symptomen spielen soziale Faktoren eine wichtige Rolle. Jedes Symptom hat eine Lerngeschichte: Das bedeutet aber auch, dass sich Symptome wieder in gesunde Gedanken, Gefühle und Verhaltensweisen umwandeln lassen.
      </>
    ),
    color: "bg-yellow-100 border-yellow-400"
  },
  {
    title: "Tiefenpsychologisch",
    icon: <Users className="w-10 h-10 text-orange-600" />,
    description: (
      <>
        Ziel der Therapie wird es u.a. sein, dem Patienten eine korrigierende Beziehungserfahrung zu ermöglichen. Auf diese Weise können Struktur bedingte Defizite sowie Konflikte und damit verbundene aktuelle Symptome bearbeitet und aufgelöst werden.
      </>
    ),
    color: "bg-orange-100 border-orange-400"
  },
  {
    title: "Neuropsychologisch",
    icon: <Brain className="w-10 h-10 text-rose-600" />,
    description: (
      <>
        Dauer-Stress, Krankheiten und Unfälle können zu hirnorganischen Veränderungen im Gehirn führen, was sich wiederum auf das Denken, Verhalten und Erleben auswirkt. Hierbei geht es insbesondere um die Betrachtung der spezifischen Funktionen des Gehirns wie z.B.
        <ul className="list-disc pl-5 mt-2 text-sm text-gray-700">
          <li>Aufmerksamkeit</li>
          <li>Gedächtnis</li>
          <li>Sprachvermögen</li>
          <li>Handlungsplanung</li>
        </ul>
        Die Neuropsychologie bietet spezielle Therapie-Möglichkeiten für die Behandlung von neuropsychologischen Defiziten.
      </>
    ),
    color: "bg-rose-100 border-rose-400"
  }
];

const TreatmentConceptSection = () => {
  return (
    <section id="behandlungskonzept" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Behandlungskonzept</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Mein psychotherapeutisches Behandlungskonzept basiert auf der Verhaltens-Therapie als ein anerkanntes Richtlinien-Verfahren – verbunden mit folgenden evidenzbasierten therapeutischen Grund-Ideen:
          </p>
        </div>
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0 max-w-5xl mx-auto">
          {/* Verbindungslinie */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-200 via-orange-200 to-rose-200 z-0" style={{transform: 'translateY(-50%)'}} />
          {concepts.map((concept, idx) => (
            <div key={concept.title} className="relative z-10 flex flex-col items-center md:w-1/3 group">
              <div className={`rounded-full border-4 ${concept.color} flex items-center justify-center w-28 h-28 shadow-lg transition-transform duration-300 group-hover:scale-105 bg-white`}>
                {concept.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-800 text-center">{concept.title}</h3>
              <div className="mt-4 text-gray-700 text-center text-base max-w-xs">
                {concept.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentConceptSection; 