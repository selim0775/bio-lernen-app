'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import TopicCard from '@/components/TopicCard'
import { topics } from '@/data/topics'
import { quizQuestions } from '@/data/quizQuestions'
import { useProgress } from '@/hooks/useProgress'

export default function HomePage() {
  const { loaded, getTopicProgress, getTopicScore } = useProgress()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (loaded) setReady(true)
  }, [loaded])

  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="text-center space-y-3 pt-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100">
          BioLearn
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Zellatmung kompakt: Glykolyse, Oxidative Decarboxylierung, Citratzyklus & Atmungskette.
          Prüfungsvorbereitung mit Karteikarten, Quiz und Prüfungsmodus.
        </p>
        <div className="flex flex-wrap gap-3 justify-center pt-2">
          <Link
            href="/exam"
            className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
          >
            Prüfungsmodus starten
          </Link>
          <Link
            href="/review"
            className="px-5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Falsche wiederholen
          </Link>
        </div>
      </div>

      {/* Quick stats */}
      {ready && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {topics.map((t) => {
            const tp = getTopicProgress(t.id)
            const qids = quizQuestions.filter((q) => q.topicId === t.id).map((q) => q.id)
            const score = getTopicScore(t.id, qids)
            const answered = Object.values(tp.questionsProgress).filter(
              (p) => p.correct + p.incorrect > 0
            ).length
            return (
              <div
                key={t.id}
                className="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-center"
              >
                <div className="text-2xl mb-1">{t.icon}</div>
                <div className="text-xs font-medium text-gray-700 dark:text-gray-300 truncate">
                  {t.shortTitle}
                </div>
                <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                  {score}%
                </div>
                <div className="text-xs text-gray-400 dark:text-gray-500">
                  {answered}/{qids.length} Fragen
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Topic cards */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">Themen</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {topics.map((t) => {
            const tp = ready ? getTopicProgress(t.id) : { cardsViewed: [], questionsProgress: {} }
            const qids = quizQuestions.filter((q) => q.topicId === t.id).map((q) => q.id)
            const score = ready ? getTopicScore(t.id, qids) : 0
            return (
              <TopicCard
                key={t.id}
                topic={t}
                cardsViewed={tp.cardsViewed.length}
                score={score}
                questionCount={qids.length}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
