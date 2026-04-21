import type { QuizQuestion } from '@/types'

export const quizQuestions: QuizQuestion[] = [
  // ══════════════════════════════════════════════════════════════════════════
  // GLYKOLYSE – 25 Fragen
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'g-01',
    topicId: 'glykolyse',
    type: 'multiple-choice',
    question: 'Wo findet die Glykolyse statt?',
    options: ['Cytoplasma', 'Mitochondrienmatrix', 'Zellkern', 'Endoplasmatisches Retikulum'],
    correctAnswer: 'Cytoplasma',
    explanation:
      'Die Glykolyse findet ausschließlich im Cytoplasma statt – nicht in den Mitochondrien.',
    difficulty: 'easy',
    isPitfall: true,
  },
  {
    id: 'g-02',
    topicId: 'glykolyse',
    type: 'multiple-choice',
    question: 'Wie viel ATP wird in der Investitionsphase der Glykolyse verbraucht?',
    options: ['1 ATP', '2 ATP', '3 ATP', '4 ATP'],
    correctAnswer: '2 ATP',
    explanation:
      'In der Investitionsphase werden 2 ATP verbraucht: 1 ATP für die erste Phosphorylierung (Glucose → G-6-P) und 1 ATP für die zweite Phosphorylierung (Fructose-6-phosphat → Fructose-1,6-bisphosphat).',
    difficulty: 'easy',
  },
  {
    id: 'g-03',
    topicId: 'glykolyse',
    type: 'multiple-choice',
    question: 'Was ist die Netto-ATP-Bilanz der Glykolyse?',
    options: ['1 ATP', '2 ATP', '4 ATP', '6 ATP'],
    correctAnswer: '2 ATP',
    explanation:
      'Netto entstehen 2 ATP: In der Energiegewinnungsphase werden brutto 4 ATP gebildet, aber 2 ATP wurden in der Investitionsphase verbraucht. 4 − 2 = 2 ATP netto.',
    difficulty: 'medium',
    isPitfall: true,
  },
  {
    id: 'g-04',
    topicId: 'glykolyse',
    type: 'multiple-choice',
    question: 'Welcher Schritt ist der geschwindigkeitsbestimmende Schritt der Glykolyse?',
    options: [
      'Bildung von Fructose-1,6-bisphosphat',
      'Phosphorylierung von Glucose zu G-6-P',
      'Spaltung von Fructose-1,6-bisphosphat',
      'Bildung von Pyruvat aus PEP',
    ],
    correctAnswer: 'Bildung von Fructose-1,6-bisphosphat',
    explanation:
      'Die zweite Phosphorylierung – die Umwandlung von Fructose-6-phosphat zu Fructose-1,6-bisphosphat – ist der geschwindigkeitsbestimmende Schritt der Glykolyse.',
    difficulty: 'medium',
  },
  {
    id: 'g-05',
    topicId: 'glykolyse',
    type: 'true-false',
    question: 'Die Glykolyse findet in den Mitochondrien statt.',
    correctAnswer: 'Falsch',
    explanation:
      'Die Glykolyse findet im Cytoplasma statt, nicht in den Mitochondrien. Dies ist eine klassische Prüfungsfalle.',
    difficulty: 'easy',
    isPitfall: true,
  },
  {
    id: 'g-06',
    topicId: 'glykolyse',
    type: 'true-false',
    question: 'In der Glykolyse entstehen 4 ATP netto.',
    correctAnswer: 'Falsch',
    explanation:
      'Es entstehen nur 2 ATP netto. Brutto werden zwar 4 ATP gewonnen, aber 2 ATP wurden in der Investitionsphase verbraucht.',
    difficulty: 'medium',
    isPitfall: true,
  },
  {
    id: 'g-07',
    topicId: 'glykolyse',
    type: 'multiple-choice',
    question: 'Was verhindert, dass Glucose nach der Phosphorylierung die Zelle verlässt?',
    options: [
      'Phosphorylierung zu Glucose-6-phosphat (G-6-P)',
      'Isomerisierung zu Fructose-6-phosphat',
      'Spaltung zu G3P und DHAP',
      'Bindung an NADH',
    ],
    correctAnswer: 'Phosphorylierung zu Glucose-6-phosphat (G-6-P)',
    explanation:
      'Durch die Phosphorylierung zu G-6-P ist Glucose geladen und kann die Zellmembran nicht mehr passieren. So wird Glucose in der Zelle festgehalten.',
    difficulty: 'medium',
  },
  {
    id: 'g-08',
    topicId: 'glykolyse',
    type: 'multiple-choice',
    question: 'Wie viele NADH + H⁺ entstehen in der Glykolyse pro Glucose?',
    options: ['1', '2', '3', '4'],
    correctAnswer: '2',
    explanation:
      'Pro Glucose entstehen 2 NADH + H⁺, da die Oxidation von G3P zu 1,3-Bisphosphoglycerat zweimal abläuft (je einmal pro C3-Körper).',
    difficulty: 'easy',
  },
  {
    id: 'g-09',
    topicId: 'glykolyse',
    type: 'multiple-choice',
    question: 'Wozu wird DHAP (Dihydroxyacetonphosphat) direkt umgewandelt?',
    options: [
      'G3P (Glycerinaldehyd-3-phosphat)',
      'Pyruvat',
      'Fructose-1,6-bisphosphat',
      '1,3-Bisphosphoglycerat',
    ],
    correctAnswer: 'G3P (Glycerinaldehyd-3-phosphat)',
    explanation:
      'DHAP wird sofort durch Isomerisierung in ein zweites G3P-Molekül umgewandelt. So entstehen aus einem Fructose-1,6-bisphosphat zwei G3P-Moleküle.',
    difficulty: 'medium',
  },
  {
    id: 'g-10',
    topicId: 'glykolyse',
    type: 'multiple-choice',
    question: 'Welcher Cofaktor wird bei der Oxidation von G3P zu 1,3-Bisphosphoglycerat reduziert?',
    options: ['NAD⁺', 'FAD', 'NADP⁺', 'CoA-SH'],
    correctAnswer: 'NAD⁺',
    explanation:
      'NAD⁺ nimmt die Elektronen und Protonen aus der Oxidation der Aldehydgruppe von G3P auf und wird dabei zu NADH + H⁺ reduziert.',
    difficulty: 'easy',
  },
  {
    id: 'g-11',
    topicId: 'glykolyse',
    type: 'multiple-choice',
    question: 'Wie viele Pyruvat-Moleküle entstehen pro Glucose-Molekül in der Glykolyse?',
    options: ['1', '2', '3', '4'],
    correctAnswer: '2',
    explanation:
      'Pro Glucose entstehen 2 Pyruvat, da Fructose-1,6-bisphosphat (C6) in zwei C3-Körper gespalten wird, die beide zu Pyruvat abgebaut werden.',
    difficulty: 'easy',
  },
  {
    id: 'g-12',
    topicId: 'glykolyse',
    type: 'multiple-choice',
    question: 'Wie viele Kohlenstoffatome hat Fructose-1,6-bisphosphat?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '6',
    explanation:
      'Fructose-1,6-bisphosphat ist ein C6-Körper (6 Kohlenstoffatome), da es direkt von der C6-Glucose abstammt.',
    difficulty: 'easy',
  },
  {
    id: 'g-13',
    topicId: 'glykolyse',
    type: 'multiple-choice',
    question: 'Wie viele Kohlenstoffatome hat G3P (Glycerinaldehyd-3-phosphat)?',
    options: ['2', '3', '4', '6'],
    correctAnswer: '3',
    explanation:
      'G3P ist ein C3-Körper (3 Kohlenstoffatome). Es entsteht durch die Spaltung des C6-Körpers Fructose-1,6-bisphosphat.',
    difficulty: 'easy',
  },
  {
    id: 'g-14',
    topicId: 'glykolyse',
    type: 'multiple-choice',
    question: 'Wie viele ATP werden in der Energiegewinnungsphase der Glykolyse brutto gewonnen?',
    options: ['2 ATP', '4 ATP', '6 ATP', '8 ATP'],
    correctAnswer: '4 ATP',
    explanation:
      'In der Energiegewinnungsphase werden brutto 4 ATP gebildet: 2 ATP durch Substratkettenphosphorylierung I und 2 ATP durch Substratkettenphosphorylierung II (je für beide C3-Körper).',
    difficulty: 'medium',
    isPitfall: true,
  },
  {
    id: 'g-15',
    topicId: 'glykolyse',
    type: 'fill-blank',
    question: 'Die Glykolyse findet im ___ statt.',
    correctAnswer: 'Cytoplasma',
    acceptedAnswers: ['Cytoplasma', 'Zytoplasma', 'Cytosol'],
    explanation:
      'Die Glykolyse findet ausschließlich im Cytoplasma statt – nicht in Mitochondrien oder anderen Organellen.',
    difficulty: 'easy',
    isPitfall: true,
  },
  {
    id: 'g-16',
    topicId: 'glykolyse',
    type: 'fill-blank',
    question:
      'Bei der ersten Phosphorylierung von Glucose durch ATP entsteht ___.',
    correctAnswer: 'Glucose-6-phosphat',
    acceptedAnswers: ['Glucose-6-phosphat', 'G-6-P', 'Glukose-6-phosphat'],
    explanation:
      'Glucose wird durch ATP phosphoryliert und in Glucose-6-phosphat (G-6-P) umgewandelt. Dies ist der erste Schritt der Glykolyse.',
    difficulty: 'easy',
  },
  {
    id: 'g-17',
    topicId: 'glykolyse',
    type: 'multiple-choice',
    question: 'Wofür steht die Abkürzung DHAP?',
    options: [
      'Dihydroxyacetonphosphat',
      'Dihydroxyacetylphosphat',
      'Diphosphohydroxyacetat',
      'Diacetonhydroxyphosphat',
    ],
    correctAnswer: 'Dihydroxyacetonphosphat',
    explanation:
      'DHAP steht für Dihydroxyacetonphosphat. Es ist eines der beiden Produkte bei der Spaltung von Fructose-1,6-bisphosphat und wird sofort zu G3P isomerisiert.',
    difficulty: 'easy',
  },
  {
    id: 'g-18',
    topicId: 'glykolyse',
    type: 'multiple-choice',
    question: 'Was entsteht bei der Substratkettenphosphorylierung II (PEP → Pyruvat)?',
    options: [
      'ATP und Pyruvat',
      '1,3-Bisphosphoglycerat und NADH',
      'Fructose-1,6-bisphosphat und ADP',
      'G3P und Pi',
    ],
    correctAnswer: 'ATP und Pyruvat',
    explanation:
      'Bei der zweiten Substratkettenphosphorylierung überträgt Phosphoenolpyruvat (PEP) seine energiereiche Phosphatgruppe auf ADP. Es entstehen ATP und das Endprodukt Pyruvat.',
    difficulty: 'medium',
  },
  {
    id: 'g-19',
    topicId: 'glykolyse',
    type: 'true-false',
    question: 'G3P (Glycerinaldehyd-3-phosphat) ist ein C6-Körper.',
    correctAnswer: 'Falsch',
    explanation:
      'G3P ist ein C3-Körper (3 Kohlenstoffatome). Es entsteht durch Halbierung des C6-Körpers Fructose-1,6-bisphosphat.',
    difficulty: 'easy',
    isPitfall: true,
  },
  {
    id: 'g-20',
    topicId: 'glykolyse',
    type: 'multiple-choice',
    question: 'Was entsteht bei der Isomerisierung von Glucose-6-phosphat (G-6-P)?',
    options: [
      'Fructose-6-phosphat',
      'Fructose-1-phosphat',
      'Fructose-1,6-bisphosphat',
      'DHAP',
    ],
    correctAnswer: 'Fructose-6-phosphat',
    explanation:
      'G-6-P wird durch Isomerisierung in Fructose-6-phosphat umgewandelt. Dieser Schritt bereitet die zweite Phosphorylierung vor.',
    difficulty: 'medium',
  },
  {
    id: 'g-21',
    topicId: 'glykolyse',
    type: 'multiple-choice',
    question: 'Welche beiden Produkte entstehen direkt bei der Spaltung von Fructose-1,6-bisphosphat?',
    options: [
      'G3P + DHAP',
      '2 × G3P direkt',
      '2 × DHAP',
      'Pyruvat + G3P',
    ],
    correctAnswer: 'G3P + DHAP',
    explanation:
      'Fructose-1,6-bisphosphat wird in G3P (Glycerinaldehyd-3-phosphat) und DHAP (Dihydroxyacetonphosphat) gespalten. DHAP wird anschließend zu G3P isomerisiert.',
    difficulty: 'medium',
  },
  {
    id: 'g-22',
    topicId: 'glykolyse',
    type: 'multiple-choice',
    question: 'Wie entsteht 1,3-Bisphosphoglycerat aus G3P?',
    options: [
      'Durch Oxidation mit anorganischem Phosphat (Pᵢ) und NAD⁺',
      'Durch Reduktion mit ATP',
      'Durch Isomerisierung',
      'Durch Decarboxylierung',
    ],
    correctAnswer: 'Durch Oxidation mit anorganischem Phosphat (Pᵢ) und NAD⁺',
    explanation:
      'Die Aldehydgruppe von G3P wird oxidiert. Die Energie wird genutzt, um anorganisches Phosphat (Pᵢ) ohne ATP-Verbrauch anzuhängen. NAD⁺ wird dabei zu NADH + H⁺ reduziert.',
    difficulty: 'medium',
  },
  {
    id: 'g-23',
    topicId: 'glykolyse',
    type: 'true-false',
    question:
      'Für die Bildung von 1,3-Bisphosphoglycerat aus G3P wird anorganisches Phosphat (Pᵢ) benötigt – kein ATP.',
    correctAnswer: 'Wahr',
    explanation:
      'Korrekt! Bei diesem Schritt wird freies anorganisches Phosphat (Pᵢ) verknüpft, nicht Phosphat aus ATP. Die Energie kommt aus der Oxidation der Aldehydgruppe.',
    difficulty: 'medium',
  },
  {
    id: 'g-24',
    topicId: 'glykolyse',
    type: 'short-answer',
    question:
      'Nennen Sie die Gesamtbilanz der Glykolyse (Edukte und Produkte).',
    correctAnswer:
      'Glucose + 2 ADP + 2 Pᵢ + 2 NAD⁺ → 2 Pyruvat + 2 ATP + 2 NADH + 2 H⁺ + 2 H₂O',
    keywords: ['Pyruvat', 'ATP', 'NADH', 'Glucose'],
    explanation:
      'Die vollständige Gesamtbilanz: Glucose + 2 ADP + 2 Pᵢ + 2 NAD⁺ → 2 Pyruvat + 2 ATP + 2 NADH + 2 H⁺ + 2 H₂O. Netto: 2 ATP und 2 NADH+H⁺.',
    difficulty: 'hard',
  },
  {
    id: 'g-25',
    topicId: 'glykolyse',
    type: 'ordering',
    question: 'Bringen Sie die Schritte der Glykolyse in die richtige Reihenfolge:',
    items: [
      'Glucose → Glucose-6-phosphat (1. Phosphorylierung)',
      'Fructose-1,6-bisphosphat → G3P + DHAP (Spaltung)',
      'G3P → 1,3-Bisphosphoglycerat (Oxidation)',
      'Glucose-6-phosphat → Fructose-6-phosphat (Isomerisierung)',
      'Fructose-6-phosphat → Fructose-1,6-bisphosphat (2. Phosphorylierung)',
      '1,3-BPG → Pyruvat (Energiegewinnung)',
    ],
    correctAnswer: [
      'Glucose → Glucose-6-phosphat (1. Phosphorylierung)',
      'Glucose-6-phosphat → Fructose-6-phosphat (Isomerisierung)',
      'Fructose-6-phosphat → Fructose-1,6-bisphosphat (2. Phosphorylierung)',
      'Fructose-1,6-bisphosphat → G3P + DHAP (Spaltung)',
      'G3P → 1,3-Bisphosphoglycerat (Oxidation)',
      '1,3-BPG → Pyruvat (Energiegewinnung)',
    ],
    explanation:
      'Die korrekte Reihenfolge: 1. Phosphorylierung zu G-6-P → Isomerisierung zu F-6-P → 2. Phosphorylierung zu F-1,6-BP → Spaltung zu G3P+DHAP → Oxidation zu 1,3-BPG → Energiegewinnung zu Pyruvat.',
    difficulty: 'hard',
  },

  // ══════════════════════════════════════════════════════════════════════════
  // OXIDATIVE DECARBOXYLIERUNG – 22 Fragen
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'od-01',
    topicId: 'oxidative-decarboxylierung',
    type: 'multiple-choice',
    question: 'Wo findet die oxidative Decarboxylierung statt?',
    options: [
      'Mitochondrienmatrix',
      'Cytoplasma',
      'Intermembranraum',
      'Innere Mitochondrienmembran',
    ],
    correctAnswer: 'Mitochondrienmatrix',
    explanation:
      'Die oxidative Decarboxylierung findet in der Mitochondrienmatrix statt. Pyruvat wird dafür aus dem Cytoplasma in die Matrix transportiert.',
    difficulty: 'easy',
    isPitfall: true,
  },
  {
    id: 'od-02',
    topicId: 'oxidative-decarboxylierung',
    type: 'multiple-choice',
    question:
      'Welches Molekül ist KEIN direktes Produkt der oxidativen Decarboxylierung?',
    options: ['ATP', 'Acetyl-CoA', 'CO₂', 'NADH + H⁺'],
    correctAnswer: 'ATP',
    explanation:
      'Bei der oxidativen Decarboxylierung entsteht KEIN ATP direkt. Es entstehen: Acetyl-CoA, CO₂ und NADH + H⁺.',
    difficulty: 'medium',
    isPitfall: true,
  },
  {
    id: 'od-03',
    topicId: 'oxidative-decarboxylierung',
    type: 'multiple-choice',
    question: 'Wie viele Kohlenstoffatome hat Pyruvat?',
    options: ['2', '3', '4', '6'],
    correctAnswer: '3',
    explanation:
      'Pyruvat ist ein C3-Körper (3 Kohlenstoffatome). Es ist das Endprodukt der Glykolyse.',
    difficulty: 'easy',
  },
  {
    id: 'od-04',
    topicId: 'oxidative-decarboxylierung',
    type: 'multiple-choice',
    question: 'Wie viele Kohlenstoffatome hat Acetyl-CoA (der Acetylrest)?',
    options: ['2', '3', '4', '6'],
    correctAnswer: '2',
    explanation:
      'Der Acetylrest im Acetyl-CoA hat 2 Kohlenstoffatome (C2-Körper). Ein C-Atom wurde als CO₂ abgespalten.',
    difficulty: 'easy',
  },
  {
    id: 'od-05',
    topicId: 'oxidative-decarboxylierung',
    type: 'true-false',
    question: 'Bei der oxidativen Decarboxylierung entsteht direkt ATP.',
    correctAnswer: 'Falsch',
    explanation:
      'Es entsteht KEIN ATP direkt. Die oxidative Decarboxylierung liefert Acetyl-CoA, CO₂ und NADH + H⁺.',
    difficulty: 'medium',
    isPitfall: true,
  },
  {
    id: 'od-06',
    topicId: 'oxidative-decarboxylierung',
    type: 'true-false',
    question: 'Die oxidative Decarboxylierung ist ein Teil der Glykolyse.',
    correctAnswer: 'Falsch',
    explanation:
      'Die oxidative Decarboxylierung ist ein eigenständiger Schritt zwischen Glykolyse und Citratzyklus. Sie findet in der Mitochondrienmatrix statt.',
    difficulty: 'medium',
    isPitfall: true,
  },
  {
    id: 'od-07',
    topicId: 'oxidative-decarboxylierung',
    type: 'true-false',
    question: 'Die oxidative Decarboxylierung findet im Cytoplasma statt.',
    correctAnswer: 'Falsch',
    explanation:
      'Die oxidative Decarboxylierung findet in der Mitochondrienmatrix statt, nicht im Cytoplasma (wo die Glykolyse stattfindet).',
    difficulty: 'easy',
    isPitfall: true,
  },
  {
    id: 'od-08',
    topicId: 'oxidative-decarboxylierung',
    type: 'multiple-choice',
    question: 'Wie viele Acetyl-CoA-Moleküle entstehen pro Glucose-Molekül?',
    options: ['1', '2', '3', '4'],
    correctAnswer: '2',
    explanation:
      'Pro Glucose entstehen 2 Pyruvat (in der Glykolyse), und aus jedem Pyruvat entsteht 1 Acetyl-CoA. Daher entstehen 2 Acetyl-CoA pro Glucose.',
    difficulty: 'easy',
  },
  {
    id: 'od-09',
    topicId: 'oxidative-decarboxylierung',
    type: 'multiple-choice',
    question: 'Was wird bei der Decarboxylierung von Pyruvat abgespalten?',
    options: [
      'Eine Carboxylgruppe (→ CO₂)',
      'Eine Methylgruppe',
      'Eine Aminogruppe',
      'Eine Phosphatgruppe',
    ],
    correctAnswer: 'Eine Carboxylgruppe (→ CO₂)',
    explanation:
      'Im ersten Teilschritt des PDH-Komplexes wird eine Carboxylgruppe von Pyruvat abgespalten. Dabei wird ein Molekül CO₂ freigesetzt, und es verbleibt ein C2-Rest.',
    difficulty: 'medium',
  },
  {
    id: 'od-10',
    topicId: 'oxidative-decarboxylierung',
    type: 'multiple-choice',
    question: 'Welche Funktion hat Coenzym A (CoA-SH) in der oxidativen Decarboxylierung?',
    options: [
      'Es ist ein Trägermolekül für den Acetylrest',
      'Es ist ein Elektronenakzeptor',
      'Es ist ein Phosphatdonor',
      'Es ist ein CO₂-Träger',
    ],
    correctAnswer: 'Es ist ein Trägermolekül für den Acetylrest',
    explanation:
      'CoA-SH fungiert als Trägermolekül. Die Acetylgruppe wird an die Thiolgruppe (-SH) des CoA gebunden, wodurch Acetyl-CoA (aktivierte Essigsäure) entsteht.',
    difficulty: 'medium',
  },
  {
    id: 'od-11',
    topicId: 'oxidative-decarboxylierung',
    type: 'multiple-choice',
    question: 'Welche Art von Bindung verbindet den Acetylrest mit Coenzym A im Acetyl-CoA?',
    options: [
      'Thioesterbindung',
      'Peptidbindung',
      'Phosphodiesterbindung',
      'Wasserstoffbrückenbindung',
    ],
    correctAnswer: 'Thioesterbindung',
    explanation:
      'Die Acetylgruppe ist über eine Thioesterbindung (R-S-CO-CH₃) an das Coenzym A gebunden. Diese Bindung ist energiereich.',
    difficulty: 'medium',
  },
  {
    id: 'od-12',
    topicId: 'oxidative-decarboxylierung',
    type: 'multiple-choice',
    question: 'Was versteht man unter „aktivierter Essigsäure"?',
    options: [
      'Acetyl-CoA (durch energiereiche Thioesterbindung aktiviert)',
      'ATP-gebundene Essigsäure',
      'Phosphorylierte Essigsäure',
      'Oxidierte Essigsäure',
    ],
    correctAnswer: 'Acetyl-CoA (durch energiereiche Thioesterbindung aktiviert)',
    explanation:
      'Acetyl-CoA wird als „aktivierte Essigsäure" bezeichnet, weil die Thioesterbindung energiereich ist und das Gruppentransferpotenzial der Acetylgruppe erhöht.',
    difficulty: 'medium',
  },
  {
    id: 'od-13',
    topicId: 'oxidative-decarboxylierung',
    type: 'multiple-choice',
    question: 'Welches Enzym (bzw. welcher Enzymkomplex) katalysiert die oxidative Decarboxylierung?',
    options: [
      'Pyruvat-Dehydrogenase-Komplex (PDH)',
      'Hexokinase',
      'Citrat-Synthase',
      'ATP-Synthase',
    ],
    correctAnswer: 'Pyruvat-Dehydrogenase-Komplex (PDH)',
    explanation:
      'Die oxidative Decarboxylierung wird durch den PDH-Multienzymkomplex (Pyruvat-Dehydrogenase-Komplex) katalysiert, der drei koordinierte Teilschritte durchführt.',
    difficulty: 'easy',
  },
  {
    id: 'od-14',
    topicId: 'oxidative-decarboxylierung',
    type: 'multiple-choice',
    question: 'Welche Gleichung beschreibt die oxidative Decarboxylierung korrekt?',
    options: [
      'Pyruvat + NAD⁺ + CoA-SH → Acetyl-CoA + CO₂ + NADH + H⁺',
      'Pyruvat + NADH + CoA → Acetyl-CoA + CO₂ + NAD⁺',
      'Pyruvat + ATP + CoA → Acetyl-CoA + ADP + CO₂',
      'Pyruvat → Acetyl-CoA + CO₂',
    ],
    correctAnswer: 'Pyruvat + NAD⁺ + CoA-SH → Acetyl-CoA + CO₂ + NADH + H⁺',
    explanation:
      'Die korrekte Gleichung ist: Pyruvat + NAD⁺ + CoA-SH → Acetyl-CoA + CO₂ + NADH + H⁺. NAD⁺ ist das Oxidationsmittel, CoA-SH das Trägermolekül.',
    difficulty: 'hard',
  },
  {
    id: 'od-15',
    topicId: 'oxidative-decarboxylierung',
    type: 'fill-blank',
    question:
      'Die oxidative Decarboxylierung ist die „Eintrittskarte" zum ___.',
    correctAnswer: 'Citratzyklus',
    acceptedAnswers: ['Citratzyklus', 'Zitronensäurezyklus', 'Krebs-Zyklus'],
    explanation:
      'Acetyl-CoA, das Produkt der oxidativen Decarboxylierung, ist die Eintrittskarte zum Citratzyklus, wo es auf Oxalacetat übertragen wird.',
    difficulty: 'medium',
  },
  {
    id: 'od-16',
    topicId: 'oxidative-decarboxylierung',
    type: 'multiple-choice',
    question: 'Wie viele CO₂-Moleküle entstehen pro Glucose in der oxidativen Decarboxylierung?',
    options: ['1', '2', '3', '4'],
    correctAnswer: '2',
    explanation:
      'Pro Glucose entstehen 2 Pyruvat, und aus jedem Pyruvat wird 1 CO₂ abgespalten. Daher entstehen 2 CO₂ pro Glucose.',
    difficulty: 'easy',
  },
  {
    id: 'od-17',
    topicId: 'oxidative-decarboxylierung',
    type: 'multiple-choice',
    question: 'Wie viele Teilschritte koordiniert der PDH-Multienzymkomplex?',
    options: ['2', '3', '4', '5'],
    correctAnswer: '3',
    explanation:
      'Der PDH-Komplex koordiniert 3 Teilschritte: 1. Decarboxylierung, 2. Oxidation, 3. Acetyl-Übertragung auf CoA.',
    difficulty: 'medium',
  },
  {
    id: 'od-18',
    topicId: 'oxidative-decarboxylierung',
    type: 'multiple-choice',
    question: 'Welcher Schritt steht am Anfang des PDH-Komplexes?',
    options: [
      'Decarboxylierung von Pyruvat (CO₂-Abspaltung)',
      'Übertragung des Acetylrests auf CoA',
      'Oxidation des C2-Rests',
      'Reduktion von FAD',
    ],
    correctAnswer: 'Decarboxylierung von Pyruvat (CO₂-Abspaltung)',
    explanation:
      'Im ersten Teilschritt des PDH-Komplexes wird Pyruvat decarboxyliert: Eine Carboxylgruppe wird als CO₂ abgespalten, und es verbleibt ein C2-Rest.',
    difficulty: 'medium',
  },
  {
    id: 'od-19',
    topicId: 'oxidative-decarboxylierung',
    type: 'true-false',
    question:
      'Nach der Decarboxylierung von Pyruvat verbleibt ein C2-Rest (Hydroxyethyl-Rest).',
    correctAnswer: 'Wahr',
    explanation:
      'Korrekt! Nach der Abspaltung der Carboxylgruppe als CO₂ verbleibt ein C2-Rest (Hydroxyethyl-Rest), der dann oxidiert und auf CoA übertragen wird.',
    difficulty: 'medium',
  },
  {
    id: 'od-20',
    topicId: 'oxidative-decarboxylierung',
    type: 'multiple-choice',
    question:
      'Wozu dient das erhöhte Gruppentransferpotenzial der Thioesterbindung in Acetyl-CoA?',
    options: [
      'Um die Übertragung des Acetylrests auf Oxalacetat im Citratzyklus zu ermöglichen',
      'Zur direkten ATP-Synthese',
      'Zur CO₂-Abspaltung',
      'Zur Reduktion von NAD⁺',
    ],
    correctAnswer:
      'Um die Übertragung des Acetylrests auf Oxalacetat im Citratzyklus zu ermöglichen',
    explanation:
      'Die energiereiche Thioesterbindung erhöht das Gruppentransferpotenzial des Acetylrests, sodass er problemlos auf Oxalacetat übertragen werden kann. Ohne CoA wäre die Acetylgruppe chemisch zu träge.',
    difficulty: 'hard',
  },
  {
    id: 'od-21',
    topicId: 'oxidative-decarboxylierung',
    type: 'true-false',
    question:
      'Die oxidative Decarboxylierung ist die Verbindung zwischen Glykolyse und Citratzyklus.',
    correctAnswer: 'Wahr',
    explanation:
      'Korrekt! Die oxidative Decarboxylierung vermittelt zwischen der Glykolyse (Cytoplasma) und dem Citratzyklus (Mitochondrienmatrix), indem sie Pyruvat in Acetyl-CoA umwandelt.',
    difficulty: 'easy',
  },
  {
    id: 'od-22',
    topicId: 'oxidative-decarboxylierung',
    type: 'short-answer',
    question:
      'Nennen Sie alle drei Produkte der oxidativen Decarboxylierung pro Pyruvat.',
    correctAnswer: 'Acetyl-CoA, CO₂, NADH + H⁺',
    keywords: ['Acetyl-CoA', 'CO₂', 'NADH'],
    explanation:
      'Pro Pyruvat entstehen: 1. Acetyl-CoA (C2-Körper), 2. CO₂ (durch Decarboxylierung), 3. NADH + H⁺ (durch Oxidation).',
    difficulty: 'medium',
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CITRATZYKLUS – 25 Fragen
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'cz-01',
    topicId: 'citratzyklus',
    type: 'multiple-choice',
    question: 'Wo findet der Citratzyklus statt?',
    options: [
      'Mitochondrienmatrix',
      'Cytoplasma',
      'Innere Mitochondrienmembran',
      'Intermembranraum',
    ],
    correctAnswer: 'Mitochondrienmatrix',
    explanation:
      'Der Citratzyklus findet in der Mitochondrienmatrix statt.',
    difficulty: 'easy',
  },
  {
    id: 'cz-02',
    topicId: 'citratzyklus',
    type: 'multiple-choice',
    question: 'Was ist der Hauptzweck des Citratzyklus?',
    options: [
      'Bildung von NADH + H⁺ und FADH₂',
      'Direkte ATP-Gewinnung',
      'CO₂-Produktion',
      'Abbau von Glucose zu Pyruvat',
    ],
    correctAnswer: 'Bildung von NADH + H⁺ und FADH₂',
    explanation:
      'Der Hauptzweck des Citratzyklus ist die Bildung von NADH + H⁺ und FADH₂, nicht die direkte ATP-Gewinnung. Diese Reduktionsäquivalente werden dann in der Atmungskette zur ATP-Synthese genutzt.',
    difficulty: 'medium',
    isPitfall: true,
  },
  {
    id: 'cz-03',
    topicId: 'citratzyklus',
    type: 'multiple-choice',
    question: 'Was wird auf Oxalacetat übertragen, um Citrat zu bilden?',
    options: [
      'Die Acetylgruppe aus Acetyl-CoA',
      'Pyruvat',
      'G3P',
      'NADH',
    ],
    correctAnswer: 'Die Acetylgruppe aus Acetyl-CoA',
    explanation:
      'Die Acetylgruppe (C2) aus Acetyl-CoA wird auf Oxalacetat (C4) übertragen. Es entsteht Citrat (C6), und CoA wird freigesetzt.',
    difficulty: 'medium',
  },
  {
    id: 'cz-04',
    topicId: 'citratzyklus',
    type: 'multiple-choice',
    question: 'Wie viele NADH + H⁺ entstehen pro Acetyl-CoA-Durchlauf im Citratzyklus?',
    options: ['1', '2', '3', '4'],
    correctAnswer: '3',
    explanation:
      'Pro Durchlauf entstehen 3 NADH + H⁺: jeweils eines bei Citrat→α-Ketoglutarat, α-Ketoglutarat→Succinat und Malat→Oxalacetat.',
    difficulty: 'easy',
  },
  {
    id: 'cz-05',
    topicId: 'citratzyklus',
    type: 'multiple-choice',
    question: 'Wie viele FADH₂ entstehen pro Acetyl-CoA-Durchlauf im Citratzyklus?',
    options: ['1', '2', '3', '4'],
    correctAnswer: '1',
    explanation:
      'Pro Durchlauf entsteht 1 FADH₂, bei der Oxidation von Succinat zu Fumarat.',
    difficulty: 'easy',
  },
  {
    id: 'cz-06',
    topicId: 'citratzyklus',
    type: 'multiple-choice',
    question: 'Wie viele ATP entstehen direkt pro Acetyl-CoA-Durchlauf im Citratzyklus?',
    options: ['0', '1', '2', '3'],
    correctAnswer: '1',
    explanation:
      'Pro Durchlauf entsteht 1 GTP (Guanosintriphosphat), das äquivalent zu ATP ist. Es entsteht beim Übergang von α-Ketoglutarat zu Succinat.',
    difficulty: 'easy',
  },
  {
    id: 'cz-07',
    topicId: 'citratzyklus',
    type: 'multiple-choice',
    question: 'Wie viele CO₂-Moleküle entstehen pro Acetyl-CoA-Durchlauf im Citratzyklus?',
    options: ['1', '2', '3', '4'],
    correctAnswer: '2',
    explanation:
      'Pro Durchlauf entstehen 2 CO₂: eines beim Übergang Citrat → α-Ketoglutarat und eines beim Übergang α-Ketoglutarat → Succinat.',
    difficulty: 'easy',
  },
  {
    id: 'cz-08',
    topicId: 'citratzyklus',
    type: 'true-false',
    question: 'Der Citratzyklus läuft pro Glucose-Molekül nur einmal ab.',
    correctAnswer: 'Falsch',
    explanation:
      'Der Citratzyklus läuft pro Glucose ZWEIMAL ab, weil aus einem Glucose-Molekül 2 Pyruvat und damit 2 Acetyl-CoA entstehen.',
    difficulty: 'medium',
    isPitfall: true,
  },
  {
    id: 'cz-09',
    topicId: 'citratzyklus',
    type: 'true-false',
    question: 'Der Hauptzweck des Citratzyklus ist die direkte ATP-Gewinnung.',
    correctAnswer: 'Falsch',
    explanation:
      'Der Hauptzweck des Citratzyklus ist die Bildung von NADH + H⁺ und FADH₂, nicht die direkte ATP-Gewinnung. Pro Durchlauf entsteht nur 1 ATP (via GTP).',
    difficulty: 'medium',
    isPitfall: true,
  },
  {
    id: 'cz-10',
    topicId: 'citratzyklus',
    type: 'multiple-choice',
    question: 'Warum dient bei der Oxidation von Succinat zu Fumarat FAD statt NAD⁺ als Elektronenakzeptor?',
    options: [
      'Weil die freiwerdende Energie nicht ausreicht, um NAD⁺ zu reduzieren',
      'Weil NAD⁺ bereits verbraucht ist',
      'Weil FAD mehr Energie speichern kann',
      'Weil FAD in der Matrix häufiger vorkommt',
    ],
    correctAnswer: 'Weil die freiwerdende Energie nicht ausreicht, um NAD⁺ zu reduzieren',
    explanation:
      'Die Oxidation von Succinat zu Fumarat setzt zu wenig Energie frei, um NAD⁺ zu reduzieren. FAD hat ein höheres Redoxpotenzial und kann die Elektronen bei dieser niedrigen Energiemenge aufnehmen.',
    difficulty: 'hard',
  },
  {
    id: 'cz-11',
    topicId: 'citratzyklus',
    type: 'multiple-choice',
    question: 'Welches Molekül wird am Ende eines Citratzyklus-Durchlaufs regeneriert?',
    options: ['Acetyl-CoA', 'Citrat', 'Oxalacetat', 'CoA-SH'],
    correctAnswer: 'Oxalacetat',
    explanation:
      'Oxalacetat wird am Ende des Zyklus regeneriert (aus Malat durch Oxidation). Es steht dann für den nächsten Acetyl-CoA-Durchlauf zur Verfügung.',
    difficulty: 'medium',
    isPitfall: true,
  },
  {
    id: 'cz-12',
    topicId: 'citratzyklus',
    type: 'multiple-choice',
    question: 'Wie viele NADH + H⁺ entstehen pro Glucose im Citratzyklus (2 Durchläufe)?',
    options: ['3', '4', '6', '8'],
    correctAnswer: '6',
    explanation:
      'Pro Acetyl-CoA-Durchlauf entstehen 3 NADH + H⁺. Da der Zyklus pro Glucose zweimal abläuft: 3 × 2 = 6 NADH + H⁺.',
    difficulty: 'medium',
  },
  {
    id: 'cz-13',
    topicId: 'citratzyklus',
    type: 'multiple-choice',
    question: 'Wie viele FADH₂ entstehen pro Glucose im Citratzyklus?',
    options: ['1', '2', '3', '4'],
    correctAnswer: '2',
    explanation:
      'Pro Durchlauf entsteht 1 FADH₂. Da der Zyklus zweimal abläuft: 1 × 2 = 2 FADH₂ pro Glucose.',
    difficulty: 'easy',
  },
  {
    id: 'cz-14',
    topicId: 'citratzyklus',
    type: 'multiple-choice',
    question: 'Wie viele ATP entstehen pro Glucose direkt im Citratzyklus?',
    options: ['1', '2', '3', '4'],
    correctAnswer: '2',
    explanation:
      'Pro Durchlauf entsteht 1 GTP/ATP. Da der Zyklus zweimal abläuft: 1 × 2 = 2 ATP pro Glucose.',
    difficulty: 'easy',
  },
  {
    id: 'cz-15',
    topicId: 'citratzyklus',
    type: 'multiple-choice',
    question: 'Wie viele CO₂-Moleküle entstehen pro Glucose im Citratzyklus?',
    options: ['2', '3', '4', '6'],
    correctAnswer: '4',
    explanation:
      'Pro Durchlauf entstehen 2 CO₂. Da der Zyklus zweimal abläuft: 2 × 2 = 4 CO₂ pro Glucose.',
    difficulty: 'easy',
  },
  {
    id: 'cz-16',
    topicId: 'citratzyklus',
    type: 'multiple-choice',
    question: 'Bei welchem Schritt im Citratzyklus wird GTP (äquivalent zu ATP) synthetisiert?',
    options: [
      'α-Ketoglutarat → Succinat',
      'Citrat → α-Ketoglutarat',
      'Succinat → Fumarat',
      'Malat → Oxalacetat',
    ],
    correctAnswer: 'α-Ketoglutarat → Succinat',
    explanation:
      'Bei der Umwandlung von α-Ketoglutarat zu Succinat wird (wie bei der oxidativen Decarboxylierung) Energie frei, die zur Synthese von GTP (= ATP-Äquivalent) genutzt wird.',
    difficulty: 'medium',
  },
  {
    id: 'cz-17',
    topicId: 'citratzyklus',
    type: 'true-false',
    question: 'Acetyl-CoA ist das Endprodukt des Citratzyklus.',
    correctAnswer: 'Falsch',
    explanation:
      'Das Endprodukt (im Sinne der Regeneration) ist Oxalacetat. Acetyl-CoA ist das Ausgangsmolekül, das in den Zyklus eingespeist wird.',
    difficulty: 'medium',
    isPitfall: true,
  },
  {
    id: 'cz-18',
    topicId: 'citratzyklus',
    type: 'multiple-choice',
    question: 'Welcher C6-Körper entsteht bei der Kondensation von Acetyl-CoA (C2) und Oxalacetat (C4)?',
    options: ['Citrat', 'Fumarat', 'Succinat', 'Malat'],
    correctAnswer: 'Citrat',
    explanation:
      'Acetyl-CoA (C2) + Oxalacetat (C4) → Citrat (C6). Citrat (Zitronensäure) gibt dem Zyklus seinen Namen.',
    difficulty: 'easy',
  },
  {
    id: 'cz-19',
    topicId: 'citratzyklus',
    type: 'multiple-choice',
    question: 'Bei welchem Schritt entsteht FADH₂ im Citratzyklus?',
    options: [
      'Succinat → Fumarat',
      'Citrat → α-Ketoglutarat',
      'α-Ketoglutarat → Succinat',
      'Malat → Oxalacetat',
    ],
    correctAnswer: 'Succinat → Fumarat',
    explanation:
      'FADH₂ entsteht bei der Oxidation von Succinat zu Fumarat, weil die Energie dieser Reaktion nicht ausreicht, um NAD⁺ zu reduzieren.',
    difficulty: 'medium',
  },
  {
    id: 'cz-20',
    topicId: 'citratzyklus',
    type: 'fill-blank',
    question: 'Der Citratzyklus findet in der ___ statt.',
    correctAnswer: 'Mitochondrienmatrix',
    acceptedAnswers: ['Mitochondrienmatrix', 'Matrix'],
    explanation:
      'Der Citratzyklus findet in der Mitochondrienmatrix statt.',
    difficulty: 'easy',
  },
  {
    id: 'cz-21',
    topicId: 'citratzyklus',
    type: 'true-false',
    question: 'Im Citratzyklus wird Oxalacetat verbraucht und nicht wiederhergestellt.',
    correctAnswer: 'Falsch',
    explanation:
      'Oxalacetat wird am Ende jedes Zyklus regeneriert (aus Malat). Daher ist es ein Katalysator – es wird verbraucht und wiederhergestellt.',
    difficulty: 'medium',
    isPitfall: true,
  },
  {
    id: 'cz-22',
    topicId: 'citratzyklus',
    type: 'multiple-choice',
    question: 'Was entsteht bei der Oxidation von Malat im letzten Schritt des Citratzyklus?',
    options: ['Oxalacetat', 'Fumarat', 'Succinat', 'Citrat'],
    correctAnswer: 'Oxalacetat',
    explanation:
      'Malat wird durch Oxidation mit NAD⁺ zu Oxalacetat umgewandelt. Dabei entsteht das dritte NADH + H⁺ pro Durchlauf.',
    difficulty: 'medium',
  },
  {
    id: 'cz-23',
    topicId: 'citratzyklus',
    type: 'multiple-choice',
    question: 'Welche Verbindung gibt dem Citratzyklus seinen Namen?',
    options: ['Citrat (Zitronensäure)', 'Succinat', 'Malat', 'Oxalacetat'],
    correctAnswer: 'Citrat (Zitronensäure)',
    explanation:
      'Citrat (Zitronensäure) gibt dem Zyklus seinen Namen. Es entsteht im ersten Schritt aus der Kondensation von Acetyl-CoA und Oxalacetat.',
    difficulty: 'easy',
  },
  {
    id: 'cz-24',
    topicId: 'citratzyklus',
    type: 'short-answer',
    question:
      'Nennen Sie die Gesamtbilanz des Citratzyklus pro Glucose (2 Durchläufe).',
    correctAnswer: '6 NADH+H⁺, 2 FADH₂, 2 ATP, 4 CO₂',
    keywords: ['NADH', 'FADH₂', 'ATP', 'CO₂'],
    explanation:
      'Pro Glucose (2 Durchläufe): 6 NADH + H⁺, 2 FADH₂, 2 ATP (via GTP), 4 CO₂.',
    difficulty: 'hard',
  },
  {
    id: 'cz-25',
    topicId: 'citratzyklus',
    type: 'ordering',
    question: 'Bringen Sie die Intermediate des Citratzyklus in die richtige Reihenfolge (ab Citrat):',
    items: [
      'Succinat (C4)',
      'Citrat (C6)',
      'Oxalacetat (C4)',
      'α-Ketoglutarat (C5)',
      'Fumarat (C4)',
      'Malat (C4)',
    ],
    correctAnswer: [
      'Citrat (C6)',
      'α-Ketoglutarat (C5)',
      'Succinat (C4)',
      'Fumarat (C4)',
      'Malat (C4)',
      'Oxalacetat (C4)',
    ],
    explanation:
      'Die korrekte Reihenfolge: Citrat (C6) → α-Ketoglutarat (C5) → Succinat (C4) → Fumarat (C4) → Malat (C4) → Oxalacetat (C4), das dann wieder für Acetyl-CoA zur Verfügung steht.',
    difficulty: 'hard',
  },

  // ══════════════════════════════════════════════════════════════════════════
  // ATMUNGSKETTE – 25 Fragen
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'ak-01',
    topicId: 'atmungskette',
    type: 'multiple-choice',
    question: 'Wo findet die Atmungskette statt?',
    options: [
      'Innere Mitochondrienmembran',
      'Mitochondrienmatrix',
      'Äußere Mitochondrienmembran',
      'Cytoplasma',
    ],
    correctAnswer: 'Innere Mitochondrienmembran',
    explanation:
      'Die Atmungskette findet an der inneren Mitochondrienmembran statt. Die Komplexe I–IV und die ATP-Synthase sind in dieser Membran eingebettet.',
    difficulty: 'easy',
  },
  {
    id: 'ak-02',
    topicId: 'atmungskette',
    type: 'multiple-choice',
    question: 'Was ist der terminale (letzte) Elektronenakzeptor der Atmungskette?',
    options: ['Sauerstoff (O₂)', 'NAD⁺', 'FAD', 'Cytochrom c'],
    correctAnswer: 'Sauerstoff (O₂)',
    explanation:
      'Sauerstoff (O₂) ist der terminale Elektronenakzeptor. Am Komplex IV werden Elektronen auf O₂ übertragen, wobei Wasser (H₂O) entsteht.',
    difficulty: 'easy',
  },
  {
    id: 'ak-03',
    topicId: 'atmungskette',
    type: 'true-false',
    question: 'Sauerstoff wird in der Atmungskette oxidiert.',
    correctAnswer: 'Falsch',
    explanation:
      'Sauerstoff wird REDUZIERT (nimmt Elektronen auf), nicht oxidiert. Die Reduktion von O₂ führt zur Bildung von Wasser.',
    difficulty: 'medium',
    isPitfall: true,
  },
  {
    id: 'ak-04',
    topicId: 'atmungskette',
    type: 'true-false',
    question: 'Komplex II der Atmungskette pumpt Protonen in den Intermembranraum.',
    correctAnswer: 'Falsch',
    explanation:
      'Komplex II pumpt KEINE Protonen. Nur die Komplexe I, III und IV pumpen Protonen in den Intermembranraum.',
    difficulty: 'medium',
    isPitfall: true,
  },
  {
    id: 'ak-05',
    topicId: 'atmungskette',
    type: 'multiple-choice',
    question: 'Wie viel ATP entstehen pro NADH + H⁺ in der Atmungskette?',
    options: ['1,5 ATP', '2,0 ATP', '2,5 ATP', '3,0 ATP'],
    correctAnswer: '2,5 ATP',
    explanation:
      'Pro NADH + H⁺ entstehen ca. 2,5 ATP, weil NADH seine Elektronen bei Komplex I einspeist, wodurch mehr Protonen gepumpt werden als bei FADH₂.',
    difficulty: 'easy',
  },
  {
    id: 'ak-06',
    topicId: 'atmungskette',
    type: 'multiple-choice',
    question: 'Wie viel ATP entstehen pro FADH₂ in der Atmungskette?',
    options: ['1,0 ATP', '1,5 ATP', '2,0 ATP', '2,5 ATP'],
    correctAnswer: '1,5 ATP',
    explanation:
      'Pro FADH₂ entstehen ca. 1,5 ATP, weil FADH₂ seine Elektronen erst bei Komplex II einspeist und Komplex I dabei übersprungen wird.',
    difficulty: 'easy',
  },
  {
    id: 'ak-07',
    topicId: 'atmungskette',
    type: 'multiple-choice',
    question: 'Welche Komplexe der Atmungskette pumpen Protonen?',
    options: [
      'Komplex I, III und IV',
      'Komplex I, II, III und IV',
      'Komplex II, III und IV',
      'Komplex I und III',
    ],
    correctAnswer: 'Komplex I, III und IV',
    explanation:
      'Nur die Komplexe I, III und IV pumpen Protonen. Komplex II überträgt lediglich Elektronen, pumpt aber keine Protonen.',
    difficulty: 'medium',
    isPitfall: true,
  },
  {
    id: 'ak-08',
    topicId: 'atmungskette',
    type: 'multiple-choice',
    question: 'Was entsteht am Ende der Atmungskette bei Komplex IV?',
    options: ['Wasser (H₂O)', 'CO₂', 'ATP', 'NADH'],
    correctAnswer: 'Wasser (H₂O)',
    explanation:
      'Am Komplex IV werden Elektronen auf Sauerstoff übertragen. Zusammen mit Protonen aus der Matrix entsteht Wasser: ½ O₂ + 2e⁻ + 2H⁺ → H₂O.',
    difficulty: 'easy',
  },
  {
    id: 'ak-09',
    topicId: 'atmungskette',
    type: 'multiple-choice',
    question: 'Woher kommen die Elektronen, die in die Atmungskette eingespeist werden?',
    options: [
      'Aus NADH + H⁺ und FADH₂',
      'Direkt aus Glucose',
      'Aus ATP',
      'Aus CO₂',
    ],
    correctAnswer: 'Aus NADH + H⁺ und FADH₂',
    explanation:
      'Die Elektronen stammen aus NADH + H⁺ und FADH₂, die in Glykolyse, oxidativer Decarboxylierung und Citratzyklus gebildet wurden.',
    difficulty: 'easy',
  },
  {
    id: 'ak-10',
    topicId: 'atmungskette',
    type: 'multiple-choice',
    question: 'Was macht die ATP-Synthase?',
    options: [
      'Sie nutzt den Protonengradienten zur ATP-Synthese',
      'Sie pumpt Protonen in den Intermembranraum',
      'Sie überträgt Elektronen auf O₂',
      'Sie oxidiert NADH zu NAD⁺',
    ],
    correctAnswer: 'Sie nutzt den Protonengradienten zur ATP-Synthese',
    explanation:
      'Die ATP-Synthase nutzt die protonenmotorische Kraft: Protonen fließen durch ihren Kanal zurück in die Matrix, und die dabei freiwerdende Energie wird zur ATP-Synthese (ADP + Pᵢ → ATP) genutzt.',
    difficulty: 'medium',
  },
  {
    id: 'ak-11',
    topicId: 'atmungskette',
    type: 'multiple-choice',
    question: 'Was sind Cristae?',
    options: [
      'Faltungen der inneren Mitochondrienmembran',
      'Enzyme der Atmungskette',
      'Proteine des Citratzyklus',
      'Kanäle in der äußeren Mitochondrienmembran',
    ],
    correctAnswer: 'Faltungen der inneren Mitochondrienmembran',
    explanation:
      'Cristae sind die Faltungen (Einstülpungen) der inneren Mitochondrienmembran. Sie vergrößern die Membranoberfläche und damit den Platz für die Komplexe der Atmungskette.',
    difficulty: 'medium',
  },
  {
    id: 'ak-12',
    topicId: 'atmungskette',
    type: 'multiple-choice',
    question: 'Welcher Komplex der Atmungskette überträgt die Elektronen aus FADH₂?',
    options: ['Komplex I', 'Komplex II', 'Komplex III', 'Komplex IV'],
    correctAnswer: 'Komplex II',
    explanation:
      'FADH₂ wird an Komplex II (Succinat-Dehydrogenase) oxidiert. Die Elektronen werden auf Ubichinon (Q) übertragen.',
    difficulty: 'medium',
  },
  {
    id: 'ak-13',
    topicId: 'atmungskette',
    type: 'multiple-choice',
    question: 'Was passiert mit der Atmungskette, wenn kein Sauerstoff vorhanden ist?',
    options: [
      'Die Kette stoppt vollständig',
      'Die Kette läuft langsamer weiter',
      'Mehr ATP wird produziert',
      'FADH₂ übernimmt die Aufgabe des O₂',
    ],
    correctAnswer: 'Die Kette stoppt vollständig',
    explanation:
      'Ohne Sauerstoff bricht der Elektronenfluss ab, da die Kette "verstopft". O₂ ist als terminaler Elektronenakzeptor zwingend erforderlich.',
    difficulty: 'medium',
    isPitfall: true,
  },
  {
    id: 'ak-14',
    topicId: 'atmungskette',
    type: 'multiple-choice',
    question: 'Wie wird die protonenmotorische Kraft zur ATP-Synthese genutzt?',
    options: [
      'Protonen fließen durch die ATP-Synthase zurück in die Matrix',
      'Protonen fließen direkt auf O₂',
      'Protonen werden auf NAD⁺ übertragen',
      'Protonen werden in NADH eingebaut',
    ],
    correctAnswer: 'Protonen fließen durch die ATP-Synthase zurück in die Matrix',
    explanation:
      'Der Protonengradient treibt Protonen durch den Kanal der ATP-Synthase zurück in die Matrix. Die kinetische Energie des Protonenstroms treibt wie eine Turbine die Synthese von ATP an.',
    difficulty: 'medium',
  },
  {
    id: 'ak-15',
    topicId: 'atmungskette',
    type: 'multiple-choice',
    question: 'Warum liefert NADH mehr ATP als FADH₂?',
    options: [
      'NADH speist bei Komplex I ein → mehr Protonen werden gepumpt',
      'NADH ist ein größeres Molekül',
      'NADH enthält mehr Elektronen',
      'FADH₂ ist instabiler',
    ],
    correctAnswer: 'NADH speist bei Komplex I ein → mehr Protonen werden gepumpt',
    explanation:
      'NADH speist seine Elektronen bei Komplex I ein, wodurch die Protonen durch alle drei Pumpkomplexe (I, III, IV) transportiert werden. FADH₂ speist erst bei Komplex II ein (Komplex I wird übersprungen) → weniger Protonen gepumpt → weniger ATP.',
    difficulty: 'hard',
  },
  {
    id: 'ak-16',
    topicId: 'atmungskette',
    type: 'multiple-choice',
    question: 'Was ist Ubichinon (Q) in der Atmungskette?',
    options: [
      'Ein mobiler Elektronencarrier zwischen den Komplexen',
      'Ein Protonenpump-Enzym',
      'Ein Cofaktor der ATP-Synthase',
      'Ein Endprodukt der Elektronenübertragung',
    ],
    correctAnswer: 'Ein mobiler Elektronencarrier zwischen den Komplexen',
    explanation:
      'Ubichinon (Q) ist ein mobiles, lipidlösliches Molekül, das Elektronen von Komplex I und II aufnimmt und zu Komplex III transportiert.',
    difficulty: 'medium',
  },
  {
    id: 'ak-17',
    topicId: 'atmungskette',
    type: 'true-false',
    question: 'Die ATP-Synthase ist Teil der Proteinkomplexe I–IV der Atmungskette.',
    correctAnswer: 'Falsch',
    explanation:
      'Die ATP-Synthase ist ein separater Proteinkomplex (oft als Komplex V bezeichnet) und gehört nicht zu den Komplexen I–IV der Elektronentransportkette.',
    difficulty: 'medium',
    isPitfall: true,
  },
  {
    id: 'ak-18',
    topicId: 'atmungskette',
    type: 'multiple-choice',
    question: 'Wie entsteht der elektrochemische Gradient in der Atmungskette?',
    options: [
      'Durch aktives Pumpen von H⁺ aus der Matrix in den Intermembranraum',
      'Durch Elektronentransport allein (ohne H⁺-Pumpen)',
      'Durch passive Diffusion von H⁺',
      'Durch ATP-Verbrauch',
    ],
    correctAnswer: 'Durch aktives Pumpen von H⁺ aus der Matrix in den Intermembranraum',
    explanation:
      'Die bei der Elektronenübertragung freiwerdende Energie wird genutzt, um Protonen aktiv aus der Matrix in den Intermembranraum zu pumpen. Dies erzeugt den elektrochemischen Gradienten.',
    difficulty: 'medium',
  },
  {
    id: 'ak-19',
    topicId: 'atmungskette',
    type: 'true-false',
    question: 'FADH₂ speist seine Elektronen bei Komplex I in die Atmungskette ein.',
    correctAnswer: 'Falsch',
    explanation:
      'FADH₂ speist seine Elektronen bei Komplex II ein, nicht bei Komplex I. Deshalb werden weniger Protonen gepumpt und nur ca. 1,5 ATP pro FADH₂ gewonnen.',
    difficulty: 'medium',
    isPitfall: true,
  },
  {
    id: 'ak-20',
    topicId: 'atmungskette',
    type: 'multiple-choice',
    question: 'Welchen Namen hat Komplex IV der Atmungskette?',
    options: [
      'Cytochrom-c-Oxidase',
      'NADH-Dehydrogenase',
      'Succinat-Dehydrogenase',
      'Cytochrom-bc1-Komplex',
    ],
    correctAnswer: 'Cytochrom-c-Oxidase',
    explanation:
      'Komplex IV wird Cytochrom-c-Oxidase genannt. Er überträgt die Elektronen von Cytochrom c auf den terminalen Akzeptor Sauerstoff.',
    difficulty: 'easy',
  },
  {
    id: 'ak-21',
    topicId: 'atmungskette',
    type: 'multiple-choice',
    question: 'Welchen Namen hat Komplex I der Atmungskette?',
    options: [
      'NADH-Dehydrogenase',
      'Succinat-Dehydrogenase',
      'Cytochrom-bc1-Komplex',
      'Cytochrom-c-Oxidase',
    ],
    correctAnswer: 'NADH-Dehydrogenase',
    explanation:
      'Komplex I wird NADH-Dehydrogenase genannt. Er oxidiert NADH + H⁺ zu NAD⁺ und überträgt die Elektronen auf Ubichinon.',
    difficulty: 'easy',
  },
  {
    id: 'ak-22',
    topicId: 'atmungskette',
    type: 'multiple-choice',
    question: 'Welchen Namen hat Komplex III der Atmungskette?',
    options: [
      'Cytochrom-bc1-Komplex',
      'NADH-Dehydrogenase',
      'Succinat-Dehydrogenase',
      'Cytochrom-c-Oxidase',
    ],
    correctAnswer: 'Cytochrom-bc1-Komplex',
    explanation:
      'Komplex III wird Cytochrom-bc1-Komplex genannt. Er überträgt Elektronen von Ubichinon auf Cytochrom c.',
    difficulty: 'medium',
  },
  {
    id: 'ak-23',
    topicId: 'atmungskette',
    type: 'true-false',
    question: 'Ohne Sauerstoff bricht der Elektronenfluss der Atmungskette vollständig ab.',
    correctAnswer: 'Wahr',
    explanation:
      'Korrekt! Da O₂ der einzige terminale Elektronenakzeptor ist, "verstopft" die Kette ohne O₂ – Elektronen können nicht mehr weitergegeben werden.',
    difficulty: 'medium',
  },
  {
    id: 'ak-24',
    topicId: 'atmungskette',
    type: 'fill-blank',
    question: 'Der terminale Elektronenakzeptor der Atmungskette ist ___.',
    correctAnswer: 'Sauerstoff',
    acceptedAnswers: ['Sauerstoff', 'O₂', 'O2', 'molekularer Sauerstoff'],
    explanation:
      'Sauerstoff (O₂) ist der einzige terminale Elektronenakzeptor der Atmungskette. Bei seiner Reduktion entsteht Wasser.',
    difficulty: 'easy',
  },
  {
    id: 'ak-25',
    topicId: 'atmungskette',
    type: 'matching',
    question: 'Ordnen Sie die Komplexe der Atmungskette ihren Funktionen zu:',
    matchPairs: [
      { left: 'Komplex I (NADH-Dehydrogenase)', right: 'Oxidiert NADH, überträgt auf Ubichinon' },
      { left: 'Komplex II (Succinat-Dehydrogenase)', right: 'Oxidiert FADH₂, kein H⁺-Pumpen' },
      { left: 'Komplex III (Cytochrom-bc1)', right: 'Überträgt Elektronen von Ubichinon auf Cytochrom c' },
      { left: 'Komplex IV (Cytochrom-c-Oxidase)', right: 'Überträgt Elektronen auf O₂ → H₂O' },
    ],
    correctAnswer: 'matched',
    explanation:
      'Komplex I: NADH→Ubichinon | Komplex II: FADH₂→Ubichinon (kein H⁺-Pumpen) | Komplex III: Ubichinon→Cytochrom c | Komplex IV: Cytochrom c→O₂ (→H₂O)',
    difficulty: 'hard',
  },
]
