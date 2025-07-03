import { useState } from "react";

const clusters = [
  { key: "aengste", label: "Ängste", color: "bg-yellow-200 text-yellow-900" },
  { key: "schule", label: "Schule & Lernen", color: "bg-blue-200 text-blue-900" },
  { key: "kleinkind", label: "Kleinkindalter", color: "bg-pink-200 text-pink-900" },
  { key: "jugend", label: "Jugendalter", color: "bg-purple-200 text-purple-900" },
  { key: "erwachsenenalter", label: "Erwachsenenalter", color: "bg-[#fff8ed] text-yellow-900 border border-yellow-200" },
  { key: "familie", label: "Familie & Beziehung", color: "bg-green-200 text-green-900" },
  { key: "koerper", label: "Körper & Psyche", color: "bg-orange-200 text-orange-900" },
  { key: "trauma", label: "Trauma & Belastung", color: "bg-rose-200 text-rose-900" },
];

// Neue Bubble-Liste nach Screenshot-Überschriften
const bubbles = [
  {
    id: "aengste",
    name: "Ängste",
    desc: [
      "Spezifische Ängste (z.B. Spritzen, Erbrechen, Zahnarzt)",
      "Schul-, Leistungs-, Prüfungs-Angst",
      "Soziale Angst",
      "Trennungsangst"
    ]
  },
  {
    id: "adhs",
    name: "Aufmerksamkeitsstörungen",
    desc: ["ADS / ADHS"]
  },
  {
    id: "aggression",
    name: "Aggression",
    desc: [
      "Störung der Impuls-Kontrolle",
      "Selbstverletzendes Verhalten",
      "Geschwister-Rivalität"
    ]
  },
  {
    id: "ausscheidung",
    name: "Ausscheidungs-Störungen",
    desc: ["Einnässen", "Einkoten"]
  },
  {
    id: "bindungsstoerung",
    name: "Bindungs-Störung",
    desc: []
  },
  {
    id: "depression",
    name: "Depression und Trauer",
    desc: [
      "Antriebs- und Motivationslosigkeit, Traurigkeit, sozialer Rückzug",
      "u.a. auch bei körperlichen Erkrankungen wie Neurodermitis, Asthma, Colitis, Rheuma"
    ]
  },
  {
    id: "lernstoerung",
    name: "Entwicklungs-Störungen schulischer Fertigkeiten",
    desc: ["Probleme beim Lesen, Schreiben, Rechnen"]
  },
  {
    id: "essstoerung",
    name: "Ess-Störung",
    desc: ["Adipositas", "Anorexie", "Bulimie"]
  },
  {
    id: "hochsensibilitaet",
    name: "Hochsensibilität",
    desc: []
  },
  {
    id: "hirnverletzung",
    name: "Hirnorganische Verletzungen",
    desc: ["z.B. nach SHT, Entzündungs-Erkrankungen des Gehirns, Post-Covid, Schlaganfall, Bestrahlung des Gehirns, Epilepsie"]
  },
  {
    id: "regulationsstoerung",
    name: "Regulations-Störungen bei kleinen Kindern",
    desc: []
  },
  {
    id: "schlafstoerung",
    name: "Schlaf-Störungen",
    desc: ["Ein- und Durchschlafstörungen", "Alpträume"]
  },
  {
    id: "somatisierung",
    name: "Somatisierungs-Störung",
    desc: ["Bauch- und Kopfschmerzen", "Chronische Schmerzen"]
  },
  {
    id: "trauma",
    name: "Traumata",
    desc: [
      "Posttraumatische Belastungsstörung nach traumatischen Erlebnissen wie z.B. nach Operation, Unfall, Überfall",
      "Komplexe Traumata wie z.B. nach Gewalterfahrung, sexuellem und emotionalem Missbrauch",
      "Verhaltensauffälligkeiten nach belast. Ereignissen wie Trennung der Eltern, Mobbing-Erfahrungen"
    ]
  },
  {
    id: "zwaenge",
    name: "Zwänge",
    desc: ["Ordnungs-, Wasch- und Wiederholungs-Zwang", "Grübel-Zwang"]
  }
];

// Cluster-Zuordnung wie im JSON
const clusterMap: Record<string, string[]> = {
  aengste: [
    "spezifischeAengste", "schulangst", "sozialeAngst", "trennungsangst", "zwaenge"
  ],
  schule: [
    "schulangst", "adhsAds", "lernstoerung", "sozialeAngst", "depression",
    "essstoerung", "hochsensibilitaet", "somatisierung", "zwaenge", "traumaPtbs", "komplexesTrauma", "schlafstoerung"
  ],
  familie: [
    "sozialeAngst", "trennungsangst", "geschwisterrivalitaet", "bindungsstoerung",
    "depression", "essstoerung", "komplexesTrauma"
  ],
  koerper: [
    "adhsAds", "impulsivitaet", "selbstverletzung", "depression", "essstoerung",
    "ausscheidung", "somatisierung", "hochsensibilitaet", "hirnverletzung",
    "regulationsstoerung", "schlafstoerung", "traumaPtbs", "komplexesTrauma",
    "zwaenge"
  ],
  trauma: [
    "selbstverletzung", "bindungsstoerung", "depression", "somatisierung",
    "hirnverletzung", "traumaPtbs", "komplexesTrauma"
  ]
};

// Für jede Bubble: Array mit zugehörigen Clustern generieren
const bubbleIdToClusters: Record<string, string[]> = {};
Object.entries(clusterMap).forEach(([cluster, ids]) => {
  ids.forEach(id => {
    if (!bubbleIdToClusters[id]) bubbleIdToClusters[id] = [];
    bubbleIdToClusters[id].push(cluster);
  });
});

// Hilfsfunktion: Text möglichst in eine Zeile, sonst sauberer Umbruch, mit smarter Worttrennung
function wrapText(text: string, maxCharsPerLine: number, maxLines: number = 2): string {
  if (text.length <= maxCharsPerLine) return text; // passt in eine Zeile

  // Versuche, an einem Leerzeichen vor dem Limit umzubrechen
  let breakIdx = text.lastIndexOf(' ', maxCharsPerLine);
  if (breakIdx > 2 && text.length - breakIdx > 2 && maxLines > 1) {
    // Nur umbrechen, wenn beide Zeilen mindestens 3 Zeichen haben
    const first = text.slice(0, breakIdx);
    const second = text.slice(breakIdx + 1);
    if (second.length <= maxCharsPerLine) {
      return first + '\n' + second;
    }
  }
  // Wenn kein Leerzeichen, versuche smarte Trennung an typischen Wortbestandteilen
  if (maxLines > 1 && !text.includes(' ')) {
    // Liste typischer Trennstellen (nach Silben oder Wortbestandteilen)
    const patterns = [
      'rivalität', 'bilität', 'verletzung', 'störung', 'törung', 'ion', 'keit', 'heit', 'ität', 'ung', 'sion', 'tion'
    ];
    for (let p of patterns) {
      const idx = text.toLowerCase().indexOf(p);
      if (idx > 2 && idx < text.length - 3) {
        // Trenne vor dem Pattern
        const first = text.slice(0, idx) + '-';
        const second = text.slice(idx);
        if (first.length <= maxCharsPerLine && second.length <= maxCharsPerLine) {
          return first + '\n' + second;
        }
      }
    }
    // Falls keine Trennstelle gefunden, fallback: nach maxCharsPerLine umbrechen (beide Zeilen >=3 Zeichen)
    if (text.length > maxCharsPerLine + 2) {
      const first = text.slice(0, maxCharsPerLine);
      const second = text.slice(maxCharsPerLine);
      if (first.length >= 3 && second.length >= 3 && second.length <= maxCharsPerLine) {
        return first + '\n' + second;
      }
    }
  }
  // Sonst alles in eine Zeile (Overflow ist dann sehr selten)
  return text;
}

// Cluster-Gruppen für die Button-Anordnung
const mainClusters = [
  { key: "aengste", label: "Ängste", color: "bg-yellow-200 text-yellow-900" },
  { key: "schule", label: "Schule & Lernen", color: "bg-blue-200 text-blue-900" },
  { key: "familie", label: "Familie & Beziehung", color: "bg-green-200 text-green-900" },
  { key: "koerper", label: "Körper & Psyche", color: "bg-orange-200 text-orange-900" },
  { key: "trauma", label: "Trauma & Belastung", color: "bg-rose-200 text-rose-900" },
];

const TreatmentSpectrum = () => {
  const [activeCluster, setActiveCluster] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{ name: string; desc: string; x: number; y: number } | null>(null);

  // Filtered bubbles
  const shownBubbles = activeCluster
    ? bubbles.filter((b) => (bubbleIdToClusters[b.id] || []).includes(activeCluster))
    : bubbles;

  return (
    <section id="behandlungsspektrum" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Behandlungs-Spektrum</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Entdecken Sie die Vielfalt der Themen, die in meiner Praxis behandelt werden. Filtern Sie nach Lebensbereich oder Symptom:
          </p>
        </div>
        {/* Bubble-Cloud */}
        <div className="flex flex-wrap justify-center gap-6 min-h-[340px]">
          {bubbles.map((b, i) => {
            // Bubble-Design wie gehabt, aber keine Cluster-Farbe mehr nötig
            const bubbleDiameter = 160;
            const fontSize = 18;
            return (
              <div
                key={b.id}
                className={"flex items-center justify-center rounded-full shadow-md cursor-pointer select-none transition-all duration-300 bg-yellow-100 text-yellow-900 text-center"}
                style={{
                  width: bubbleDiameter,
                  height: bubbleDiameter,
                  fontSize,
                  fontWeight: 500,
                  zIndex: 2,
                  padding: '0.01rem',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => setTooltip({ name: b.name, desc: b.desc, x: e.clientX, y: e.clientY })}
                onMouseLeave={() => setTooltip(null)}
                onClick={(e) => setTooltip({ name: b.name, desc: b.desc, x: e.clientX, y: e.clientY })}
                tabIndex={0}
                aria-label={b.name + ': ' + (b.desc?.join('; ') || '')}
              >
                <span
                  className="block w-full break-words text-center overflow-hidden whitespace-pre-line leading-snug"
                  style={{ 
                    lineHeight: '1.15',
                    maxWidth: (bubbleDiameter - 18) + 'px',
                  }}
                >
                  {b.name}
                </span>
              </div>
            );
          })}
          {/* Tooltip */}
          {tooltip && (
            <div
              className="fixed z-50 bg-white border border-gray-200 rounded-2xl shadow-xl px-5 py-4 text-gray-800 text-base animate-fade-in"
              style={{ left: tooltip.x + 16, top: tooltip.y - 10, minWidth: 220, maxWidth: 320 }}
            >
              <div className="font-semibold mb-1">{tooltip.name}</div>
              {Array.isArray(tooltip.desc) && tooltip.desc.length > 0 ? (
                <ul className="list-disc pl-5">
                  {tooltip.desc.map((d, idx) => <li key={idx}>{d}</li>)}
                </ul>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TreatmentSpectrum;
