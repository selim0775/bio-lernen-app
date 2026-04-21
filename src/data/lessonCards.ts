import type { LessonCard } from '@/types'

export const lessonCards: LessonCard[] = [
  // ─── GLYKOLYSE ────────────────────────────────────────────────────────────
  {
    id: 'gly-1',
    topicId: 'glykolyse',
    title: 'Phase 1: Glucose → Fructose-1,6-bisphosphat (Investitionsphase)',
    content: `In diesem ersten Abschnitt investiert die Zelle Energie in Form von ATP, um die Glucose zu aktivieren.

**Phosphorylierung:** Glucose erhält eine Phosphatgruppe von ATP und wird zu Glucose-6-phosphat (G-6-P). Dies verhindert, dass das Molekül die Zelle verlässt.

**Isomerisierung:** G-6-P wird in Fructose-6-phosphat umgewandelt.

**Zweite Phosphorylierung:** Ein weiteres ATP wird verbraucht, um Fructose-1,6-bisphosphat zu bilden. Dies ist der **geschwindigkeitsbestimmende Schritt**.

**Bilanz dieser Phase:**
Glucose + 2 ATP → Fructose-1,6-bisphosphat + 2 ADP`,
    pitfalls: [],
  },
  {
    id: 'gly-2',
    topicId: 'glykolyse',
    title: 'Phase 2: Spaltung – Fructose-1,6-bisphosphat → 2 × G3P',
    content: `Das C6-Körper-Molekül wird in zwei C3-Körper gespalten:

**Spaltung:** Fructose-1,6-bisphosphat zerfällt in Glycerinaldehyd-3-phosphat (G3P) und Dihydroxyacetonphosphat (DHAP).

**Isomerisierung:** DHAP wird sofort in ein zweites G3P-Molekül isomerisiert.

Ab hier laufen alle Reaktionen **zweifach** ab (pro Molekül Glucose).`,
  },
  {
    id: 'gly-3',
    topicId: 'glykolyse',
    title: 'Phase 3: Oxidation – 2 × G3P → 2 × 1,3-Bisphosphoglycerat',
    content: `In diesem Schritt findet eine **Oxidation** statt, die zur Energiekonservierung führt:

- Die Aldehydgruppe von G3P wird oxidiert.
- Dabei werden Elektronen und Protonen auf NAD⁺ übertragen, wodurch **NADH + H⁺** entsteht.
- Die freiwerdende Energie wird genutzt, um eine anorganische Phosphatgruppe (Pᵢ) anzuhängen, **ohne ATP zu verbrauchen**.

**Reaktionsgleichung pro G3P:**
G3P + NAD⁺ + Pᵢ → 1,3-Bisphosphoglycerat + NADH + H⁺`,
  },
  {
    id: 'gly-4',
    topicId: 'glykolyse',
    title: 'Phase 4: Energiegewinnung – 2 × 1,3-BPG → 2 × Pyruvat',
    content: `Nun wird die Energie in Form von ATP geerntet:

**Substratkettenphosphorylierung I:** Das 1,3-Bisphosphoglycerat gibt eine Phosphatgruppe an ADP ab. Es entstehen **2 ATP** (für beide C3-Körper).

**Umbau:** Das Molekül wird zu Phosphoenolpyruvat (PEP) umgeformt, wobei Wasser (H₂O) abgespalten wird.

**Substratkettenphosphorylierung II:** PEP überträgt seine energiereiche Phosphatgruppe auf ADP. Es entstehen weitere **2 ATP** und das Endprodukt **Pyruvat**.

**Bilanz dieser Phase:**
2 × 1,3-BPG + 4 ADP → 2 × Pyruvat + 4 ATP

---

**Gesamtbilanz der Glykolyse:**
Glucose + 2 ADP + 2 Pᵢ + 2 NAD⁺ → 2 Pyruvat + 2 ATP + 2 NADH + 2 H⁺ + 2 H₂O`,
    pitfalls: [
      'Glykolyse findet NICHT in den Mitochondrien statt – sie findet im Cytoplasma statt.',
      'Es entstehen NICHT 4 ATP netto, sondern 2 ATP netto (4 gewonnen − 2 investiert).',
    ],
    summary: 'Netto-Bilanz: 2 ATP | 2 NADH+H⁺ | 2 Pyruvat | Ort: Cytoplasma',
  },

  // ─── OXIDATIVE DECARBOXYLIERUNG ──────────────────────────────────────────
  {
    id: 'od-1',
    topicId: 'oxidative-decarboxylierung',
    title: 'Überblick: Pyruvat → Acetyl-CoA',
    content: `Die oxidative Decarboxylierung stellt die **Verbindung zwischen Glykolyse und Citratzyklus** dar.

**Ort:** Das in der Glykolyse entstandene Pyruvat (C₃H₃O₃⁻) wird vom Cytoplasma in die **Mitochondrienmatrix** transportiert.

**Reaktionsgleichung:**
Pyruvat + NAD⁺ + CoA-SH → Acetyl-CoA + CO₂ + NADH + H⁺

**Edukte:**
- **Pyruvat:** Das Endprodukt der Glykolyse (C3-Körper)
- **CoA-SH:** Coenzym A mit einer freien Thiolgruppe
- **NAD⁺:** Ein Oxidationsmittel (Elektronenakzeptor)

**Produkte:**
- **Acetyl-CoA:** Die aktivierte Essigsäure (C2-Körper)
- **CO₂:** Abspaltung eines Kohlenstoffatoms
- **NADH + H⁺:** Reduzierte Äquivalente für die Atmungskette`,
  },
  {
    id: 'od-2',
    topicId: 'oxidative-decarboxylierung',
    title: 'Pyruvat-Dehydrogenase-Komplex (PDH) – 3 Teilschritte',
    content: `Die Reaktion wird durch den **PDH-Multienzymkomplex** katalysiert, der drei Teilschritte koordiniert:

**Schritt 1 – Decarboxylierung:**
Abspaltung einer Carboxylgruppe von Pyruvat (C3). Dabei wird ein Molekül **CO₂** frei. Es verbleibt ein Hydroxyethyl-Rest (C2):
Pyruvat → C2-Rest + CO₂

**Schritt 2 – Oxidation:**
Der C2-Rest wird oxidiert. Die entzogenen Elektronen und Protonen werden auf NAD⁺ übertragen:
Acetyl-Rest + NAD⁺ → Acetyl-Rest (oxidiert) + NADH + H⁺

**Schritt 3 – Acetyl-Übertragung:**
Der entstandene Acetyl-Rest wird auf das Coenzym A übertragen, um Acetyl-CoA zu bilden.`,
  },
  {
    id: 'od-3',
    topicId: 'oxidative-decarboxylierung',
    title: 'Coenzym A und die Thioesterbindung',
    content: `**Strukturformel der Bindung:** R-S-CO-CH₃ (Thioesterbindung)

Das Coenzym A fungiert als **essentielles Trägermolekül**.

**Aktivierung:** Die Bindung der Acetylgruppe an die Schwefelgruppe (-SH) des CoA erzeugt eine **Thioesterbindung**.

**Energiereich:** Diese Bindung ist energiereich. Man spricht von **„aktivierter Essigsäure"**.

**Funktion:** Durch diese Aktivierung wird das Gruppentransferpotenzial erhöht, sodass der Acetylrest im Citratzyklus problemlos auf Oxalacetat übertragen werden kann. Ohne CoA wäre die Acetylgruppe chemisch zu träge für die folgende Kondensationsreaktion.

---

**Bilanz pro Glucose (2 Pyruvat):**
- 2 × Acetyl-CoA
- 2 × CO₂
- 2 × NADH + H⁺`,
    pitfalls: [
      'Dieser Schritt gehört NICHT mehr zur Glykolyse.',
      'Er ist die „Eintrittskarte" zum Citratzyklus.',
      'Es entsteht KEIN ATP direkt.',
      'Ort des Geschehens: Mitochondrium, genauer Matrix.',
    ],
  },

  // ─── CITRATZYKLUS ────────────────────────────────────────────────────────
  {
    id: 'cz-1',
    topicId: 'citratzyklus',
    title: 'Ort und Vorbereitung',
    content: `Der Citratzyklus findet in der **Mitochondrienmatrix** statt.

Zuvor wird Pyruvat aus der Glykolyse durch die oxidative Decarboxylierung in **Acetyl-CoA (C2-Körper)** umgewandelt:

Pyruvat + NAD⁺ + CoA → Acetyl-CoA + CO₂ + NADH + H⁺`,
  },
  {
    id: 'cz-2',
    topicId: 'citratzyklus',
    title: 'Schritt 1: Acetyl-CoA + Oxalacetat → Citrat',
    content: `Die Acetylgruppe des Acetyl-CoA wird auf den Akzeptor **Oxalacetat (C4)** übertragen.

- Es entsteht **Citrat (Zitronensäure, C6)**, das dem Zyklus seinen Namen gibt.
- Coenzym A wird dabei wieder frei.

Acetyl-CoA (C2) + Oxalacetat (C4) → **Citrat (C6)** + CoA-SH`,
  },
  {
    id: 'cz-3',
    topicId: 'citratzyklus',
    title: 'Schritt 2: Citrat → α-Ketoglutarat (erste CO₂-Abspaltung)',
    content: `In diesem Schritt erfolgt die **erste Abspaltung von Kohlenstoffdioxid**:

- Ein Kohlenstoffatom wird als **CO₂** abgegeben.
- Es findet eine **Oxidation** statt, bei der Elektronen auf NAD⁺ übertragen werden.

**Ergebnis:**
Citrat (C6) → α-Ketoglutarat (C5) + CO₂ + NADH + H⁺`,
  },
  {
    id: 'cz-4',
    topicId: 'citratzyklus',
    title: 'Schritt 3: α-Ketoglutarat → Succinat (zweite CO₂-Abspaltung)',
    content: `- Ein weiteres Mal wird **CO₂** abgespalten und NAD⁺ zu NADH + H⁺ reduziert.
- Zusätzlich wird Energie frei, um ein **GTP** (äquivalent zu ATP) zu synthetisieren.

**Ergebnis:**
α-Ketoglutarat (C5) → Succinat (C4) + CO₂ + NADH + H⁺ + GTP`,
  },
  {
    id: 'cz-5',
    topicId: 'citratzyklus',
    title: 'Schritte 4–5: Succinat → Fumarat → Malat',
    content: `**Succinat → Fumarat:**
Succinat wird zu Fumarat oxidiert. Hierbei reicht die Energie **nicht für NAD⁺** aus, weshalb **FAD als Elektronenakzeptor** dient:
Succinat + FAD → Fumarat + FADH₂

**Fumarat → Malat:**
Anschließend wird durch Anlagerung von Wasser (H₂O) Malat gebildet.`,
  },
  {
    id: 'cz-6',
    topicId: 'citratzyklus',
    title: 'Schritt 6: Malat → Oxalacetat + Gesamtbilanz',
    content: `Im letzten Schritt wird Malat zu **Oxalacetat** oxidiert. Dabei entsteht das **dritte und letzte NADH + H⁺** pro Durchlauf:
Malat + NAD⁺ → Oxalacetat + NADH + H⁺

Der Kreis schließt sich, da Oxalacetat für ein neues Acetyl-CoA bereitsteht.

---

**Bilanz pro Acetyl-CoA (1 Durchlauf):**
- 3 × NADH + H⁺
- 1 × FADH₂
- 1 × ATP (via GTP)
- 2 × CO₂

**Bilanz pro Glucose (2 Durchläufe):**
- 6 × NADH + H⁺
- 2 × FADH₂
- 2 × ATP
- 4 × CO₂`,
    pitfalls: [
      'NICHT Acetyl-CoA ist das Endprodukt – Oxalacetat wird wiederhergestellt.',
      'Der Zyklus liefert nicht vor allem ATP – Hauptzweck ist NADH+H⁺ und FADH₂.',
      'Pro Glucose läuft der Zyklus ZWEIMAL, nicht einmal.',
    ],
    summary:
      'Hauptzweck: NADH+H⁺ und FADH₂ | Oxalacetat wird regeneriert | 2 Durchläufe pro Glucose',
  },

  // ─── ATMUNGSKETTE ─────────────────────────────────────────────────────────
  {
    id: 'ak-1',
    topicId: 'atmungskette',
    title: 'Ort: Die innere Mitochondrienmembran',
    content: `Die Atmungskette findet an der **inneren Mitochondrienmembran** statt.

**Lokalisierung:** Die Membran ist stark gefaltet (**Cristae**), um die Oberfläche zu vergrößern.

**Ausgangslage:** In der Mitochondrienmatrix befinden sich die Reduktionsäquivalente **NADH + H⁺** und **FADH₂**, die in der Glykolyse und im Citratzyklus gewonnen wurden.

**Ziel:** Die Übertragung der Elektronen dieser Carrier auf Sauerstoff zur Energiegewinnung.`,
  },
  {
    id: 'ak-2',
    topicId: 'atmungskette',
    title: 'Elektronentransport durch die Komplexe I–IV',
    content: `Die Elektronen durchlaufen eine Kette von Proteinkomplexen (**Redoxsysteme**) mit steigendem Redoxpotential:

**Komplex I (NADH-Dehydrogenase):** NADH + H⁺ wird zu NAD⁺ oxidiert. Die Elektronen werden auf **Ubichinon (Q)** übertragen.

**Komplex II (Succinat-Dehydrogenase):** FADH₂ wird zu FAD oxidiert. Die Elektronen fließen ebenfalls auf Ubichinon.

**Komplex III (Cytochrom-bc1-Komplex):** Übernimmt Elektronen von Q und reicht sie an **Cytochrom c** weiter.

**Komplex IV (Cytochrom-c-Oxidase):** Die letzte Station der Elektronenübertragung.

Durch das Redoxpotentialgefälle wird bei jedem Schritt Energie frei.`,
  },
  {
    id: 'ak-3',
    topicId: 'atmungskette',
    title: 'Der Protonengradient (Chemiosmose)',
    content: `Die beim Elektronentransport freiwerdende Energie wird genutzt, um **Protonen (H⁺) aktiv** aus der Matrix in den **Intermembranraum** zu pumpen.

- Dies geschieht an den **Komplexen I, III und IV**.
- Folge: Es entsteht eine hohe Konzentration von H⁺ im Intermembranraum und eine niedrige in der Matrix.
- Ergebnis: Ein **elektrochemischer Gradient** (Ladungs- und Konzentrationsunterschied) baut sich auf.`,
  },
  {
    id: 'ak-4',
    topicId: 'atmungskette',
    title: 'Sauerstoff als terminaler Elektronenakzeptor',
    content: `**Reaktion:** ½ O₂ + 2e⁻ + 2H⁺ → H₂O

Sauerstoff fungiert als **terminaler Elektronenakzeptor**:

- Am Ende der Kette **(Komplex IV)** werden die Elektronen auf Sauerstoff übertragen.
- Zusammen mit Protonen aus der Matrix entsteht **Wasser**.
- Ohne Sauerstoff bricht der Elektronenfluss ab, da die Kette „verstopft".`,
  },
  {
    id: 'ak-5',
    topicId: 'atmungskette',
    title: 'ATP-Synthase: ADP + Pᵢ → ATP',
    content: `Die **ATP-Synthase** nutzt die protonenmotorische Kraft:

- Protonen fließen aufgrund des Gradienten **durch den Kanal der ATP-Synthase** zurück in die Matrix.
- Die kinetische Energie des Protonenstroms wird wie bei einer **Turbine** in chemische Energie umgewandelt.
- Pro Drehung wird ADP mit einem Phosphatrest zu ATP phosphoryliert (**oxidative Phosphorylierung**).`,
  },
  {
    id: 'ak-6',
    topicId: 'atmungskette',
    title: 'Gesamtausbeute und vereinfachte Bilanz',
    content: `**Energieausbeute:**
- **2,5 ATP** pro NADH + H⁺
- **1,5 ATP** pro FADH₂

Die Energieausbeute hängt davon ab, wo die Elektronen in die Kette eintreten:
- **NADH + H⁺:** speist bei Komplex I ein, es werden mehr Protonen gepumpt → ca. 2,5 ATP
- **FADH₂:** speist bei Komplex II ein, es werden weniger Protonen gepumpt → ca. 1,5 ATP

**Wichtige Punkte:**
- Komplex I, III und IV pumpen Protonen
- Komplex II pumpt KEINE Protonen
- ATP-Synthase ist nicht Teil der Komplexe I–IV
- Sauerstoff wird **reduziert**
- Wasser entsteht am Ende`,
    pitfalls: [
      'Sauerstoff wird NICHT oxidiert, sondern REDUZIERT.',
      'Komplex II liefert Elektronen, pumpt aber KEINE Protonen.',
      'ATP-Synthase ist SEPARAT zu betrachten (nicht Teil von I–IV).',
      'Ohne O₂ stoppt die gesamte Kette.',
    ],
    summary: '2,5 ATP/NADH | 1,5 ATP/FADH₂ | Komplexe I, III, IV pumpen H⁺',
  },
]
