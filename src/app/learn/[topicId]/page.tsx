'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import FlashCard from '@/components/FlashCard'
import { topics } from '@/data/topics'
import { lessonCards } from '@/data/lessonCards'
import { useProgress } from '@/hooks/useProgress'

export default function LearnPage() {
  const { topicId } = useParams<{ topicId: string }>()
  const router = useRouter()
  const { markCardViewed, getTopicProgress } = useProgress()

  const topic = topics.find((t) => t.id === topicId)
  const cards = lessonCards.filter((c) => c.topicId === topicId)

  const [index, setIndex] = useState(0)
  const [finished, setFinished] = useState(false)

  const tp = getTopicProgress(topicId)

  useEffect(() => {
    if (cards[index]) {
      markCardViewed(topicId, cards[index].id)
    }
  }, [index, topicId, cards, markCardViewed])

  if (!topic) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500">Thema nicht gefunden.</p>
        <Link href="/" className="text-indigo-600 hover:underline mt-2 inline-block">
          Zurück zur Startseite
        </Link>
      </div>
    )
  }

  if (finished) {
    return (
      <div className="max-w-lg mx-auto text-center space-y-6 py-10">
        <div className="text-6xl">🎉</div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Alle Karten gelernt!
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Du hast alle {cards.length} Karten zu „{topic.title}" durchgearbeitet.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => { setIndex(0); setFinished(false) }}
            className="px-5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Nochmal lernen
          </button>
          <Link
            href={`/quiz/${topicId}`}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
          >
            Quiz starten
          </Link>
          <Link
            href="/"
            className="px-5 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            Zurück
          </Link>
        </div>
      </div>
    )
  }

  const card = cards[index]

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <Link href="/" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
            ← Zurück
          </Link>
          <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-0.5">
            {topic.title}
          </h1>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {tp.cardsViewed.length}/{cards.length} gesehen
        </div>
      </div>

      {card && (
        <FlashCard
          card={card}
          cardNumber={index + 1}
          total={cards.length}
          onPrev={() => setIndex((i) => Math.max(0, i - 1))}
          onNext={() => {
            if (index === cards.length - 1) {
              setFinished(true)
            } else {
              setIndex((i) => i + 1)
            }
          }}
        />
      )}

      {/* Jump to quiz */}
      <div className="text-center pt-2">
        <Link
          href={`/quiz/${topicId}`}
          className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          Direkt zum Quiz →
        </Link>
      </div>
    </div>
  )
}
