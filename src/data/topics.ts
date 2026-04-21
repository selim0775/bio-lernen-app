import type { Topic } from '@/types'

export const topics: Topic[] = [
  {
    id: 'glykolyse',
    title: 'Glykolyse',
    shortTitle: 'Glykolyse',
    description:
      'Der Abbau von Glucose zu Pyruvat im Cytoplasma mit Netto-Gewinn von 2 ATP und 2 NADH.',
    color: 'blue',
    icon: '🍬',
    cardCount: 4,
  },
  {
    id: 'oxidative-decarboxylierung',
    title: 'Oxidative Decarboxylierung',
    shortTitle: 'Ox. Decarboxylierung',
    description:
      'Umwandlung von Pyruvat zu Acetyl-CoA in der Mitochondrienmatrix – die Eintrittskarte zum Citratzyklus.',
    color: 'green',
    icon: '⚗️',
    cardCount: 3,
  },
  {
    id: 'citratzyklus',
    title: 'Citratzyklus',
    shortTitle: 'Citratzyklus',
    description:
      'Acht-stufiger Kreisprozess in der Mitochondrienmatrix zur Gewinnung von NADH, FADH₂ und GTP.',
    color: 'orange',
    icon: '🔄',
    cardCount: 6,
  },
  {
    id: 'atmungskette',
    title: 'Atmungskette',
    shortTitle: 'Atmungskette',
    description:
      'Elektronentransport an der inneren Mitochondrienmembran mit oxidativer Phosphorylierung zur ATP-Synthese.',
    color: 'purple',
    icon: '⚡',
    cardCount: 6,
  },
]
