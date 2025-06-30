
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Brain, Heart, Zap, Shield, Utensils, Moon, Activity } from "lucide-react";

const TreatmentSpectrum = () => {
  const treatmentAreas = [
    {
      icon: Brain,
      title: "Ängste",
      color: "bg-blue-100 text-blue-600",
      items: [
        "Spezifische Ängste (z.B. Spritzen, Erbrechen, Zahnarzt)",
        "Schul-, Leistungs-, Prüfungs-Angst",
        "Soziale Angst",
        "Trennungs-Angst"
      ]
    },
    {
      icon: Zap,
      title: "Aufmerksamkeitsstörungen",
      color: "bg-yellow-100 text-yellow-600",
      items: ["ADS / ADHS"]
    },
    {
      icon: Shield,
      title: "Aggression",
      color: "bg-red-100 text-red-600",
      items: [
        "Störung der Impuls-Kontrolle",
        "Selbstverletzendes Verhalten",
        "Geschwister-Rivalität"
      ]
    },
    {
      icon: Heart,
      title: "Depression und Trauer",
      color: "bg-purple-100 text-purple-600",
      items: [
        "Antriebs- und Motivationslosigkeit, Traurigkeit, sozialer Rückzug",
        "u.a. auch bei körperlichen Erkrankungen wie Neurodermitis, Asthma, Colitis, Rheuma"
      ]
    },
    {
      icon: Utensils,
      title: "Ess-Störung",
      color: "bg-green-100 text-green-600",
      items: [
        "Adipositas",
        "Anorexie", 
        "Bulimie"
      ]
    },
    {
      icon: Moon,
      title: "Schlaf-Störungen",
      color: "bg-indigo-100 text-indigo-600",
      items: [
        "Ein- und Durchschlafstörungen",
        "Alpträume"
      ]
    },
    {
      icon: Activity,
      title: "Traumata",
      color: "bg-orange-100 text-orange-600",
      items: [
        "Posttraumatische Belastungsstörung nach traumatischen Erlebnissen",
        "Komplexe Traumata nach Gewalterfahrung, sexuellem und emotionalem Missbrauch",
        "Verhaltensauffälligkeiten nach belastenden Ereignissen"
      ]
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Behandlungs-Spektrum
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nach störungsspezifischer Diagnostik werden folgende Störungsbilder behandelt:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {treatmentAreas.map((area, index) => (
            <Collapsible key={index}>
              <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white border-0 shadow-sm">
                <CollapsibleTrigger className="w-full">
                  <CardHeader className="text-left pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-full ${area.color}`}>
                          <area.icon className="w-5 h-5" />
                        </div>
                        <CardTitle className="text-md text-gray-800">
                          {area.title}
                        </CardTitle>
                      </div>
                      <ChevronDown className="w-4 h-4 text-gray-400 transition-transform duration-200" />
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="pt-0">
                    <ul className="space-y-1">
                      {area.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-600 text-sm leading-relaxed flex items-start gap-2">
                          <div className="w-1 h-1 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 max-w-xl mx-auto text-sm">
            Zusätzlich behandle ich: Bindungs-Störungen, Ausscheidungs-Störungen, 
            Entwicklungs-Störungen schulischer Fertigkeiten, Hochsensibilität, 
            hirnorganische Verletzungen, Regulations-Störungen bei kleinen Kindern, 
            Somatisierungs-Störungen und Zwänge.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TreatmentSpectrum;
