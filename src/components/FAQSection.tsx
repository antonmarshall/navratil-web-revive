
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Für wen eignet sich Kreativtherapie?",
      answer: "Kreativtherapie ist für alle da - egal ob jung oder alt. Sie brauchen keine künstlerischen Vorkenntnisse. Der Weg und das Erleben stehen im Mittelpunkt, nicht das Ergebnis."
    },
    {
      question: "Brauche ich künstlerische Erfahrung?",
      answer: "Nein, künstlerische Vorerfahrungen sind nicht notwendig. Es geht nicht um das perfekte Kunstwerk, sondern um den Ausdruck Ihrer Gefühle und Gedanken."
    },
    {
      question: "Wie läuft eine Therapiesitzung ab?",
      answer: "Jede Sitzung wird individuell auf Sie abgestimmt. Wir beginnen mit einem kurzen Gespräch, dann folgt die kreative Arbeit und zum Abschluss reflektieren wir gemeinsam das Erlebte."
    },
    {
      question: "Was kostet eine Therapiesitzung?",
      answer: "Die Kosten werden in der Regel von den Krankenkassen übernommen. Bei Selbstzahlern erstelle ich gerne ein individuelles Angebot."
    },
    {
      question: "Werden die Kosten von der Krankenkasse übernommen?",
      answer: "Ja, in der Regel übernehmen folgende Institutionen die Kosten: Gesetzliche Krankenkassen (bis 21 Jahre, bei Therapiebeginn vor dem 21. Lebensjahr ist Weiterbehandlung möglich), Private Krankenkassen, Berufsgenossenschaften, sowie Kosten-Erstattungsverfahren bei neuropsychologischer Behandlung."
    }
  ];

  return (
    <section className="py-16 bg-yellow-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Häufig gestellte Fragen
          </h2>
          <p className="text-lg text-gray-600">
            Hier finden Sie Antworten auf die wichtigsten Fragen
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="shadow-md">
              <CardHeader 
                className="cursor-pointer hover:bg-rose-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <CardTitle className="flex justify-between items-center text-left">
                  <span className="text-gray-800">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-rose-500 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </CardTitle>
              </CardHeader>
              {openIndex === index && (
                <CardContent className="pt-0">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
