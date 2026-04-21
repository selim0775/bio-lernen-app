'use client'

import { useState, useCallback, useMemo } from 'react'
import Link from 'next/link'
import QuestionRenderer from '@/components/QuestionRenderer'
import ProgressBar from '@/components/ProgressBar'
import { topics } from '@/data/topics'
import { quizQuestions } from '@/data/quizQuestions'
import { useProgress } from '@/hooks/useProgress'
import { isDueForReview } from '@/utils/spacedRepetition'

export default function ReviewPage() {
  const { progress, recordAnswer } = useProgress()

  const reviewQuestions = useMemo(() => {
    const ids = new Set([...Array.from(queueIds), ...Array.from(dueIds)])
    const dueIds = new Set<string>()

    for (const [, tp] of Object.entries(progress.topics)) {
      for (const [qid, qp] of Object.entries(tp.questionsProgress)) {
        if (isDueForReview(qp) && qp.incorrect > 0) {
          dueIds.add(qid)
        }
      }
    }

    const ids = new Set([...queueIds, ...dueIds])
    return quizQuestions
      .filter((q) => ids.has(q.id))
      .sort(() => Math.random() - 0.5)
  }, [progress])

  const [qIndex, setQIndex] = useState(0)
  const [answers, setAnswers] = useState<boolean[]>([])
  const [answered, setAnswered] = useState(false)
  const [done, setDone] = useState(false)

  const handleAnswer = useCallback(
    (correct: boolean) => {
      const q = reviewQuestions[qIndex]
      setAnswered(true)
      setAnswers((prev) => [...prev, correct])
      recordAnswer(q.topicId, q.id, correct)
    },
    [reviewQuestions, qIndex, recordAnswer]
  )

  const next = () => {
    if (qIndex === reviewQuestions.length - 1) {
      setDone(true)
    } else {
      setQIndex((i) => i + 1)
      setAnswered(false)
    }
  }

  if (reviewQuestions.length === 0) {
    return (
      <div className="max-w-lg mx-auto text-center py-16 space-y-4">
        <div className="text-5xl">✅</div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Keine Wiederholungen fällig!
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Du hast keine falsch beantworteten Fragen in der Warteschlange. Starte ein Quiz oder den
          Prüfungsmodus, um Fragen zu sammeln.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/exam"
            className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
          >
            Prüfungsmodus
          </Link>
          <Link
            href="/"
            className="px-5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Zur Übersicht
          </Link>
        </div>
      </div>
    )
  }

  if (done) {
    const correct = answers.filter(Boolean).length
    const pct = Math.round((correct / answers.length) * 100)
    return (
      <div className="max-w-lg mx-auto text-center space-y-6 py-10 animate-fade-in">
        <div className="text-6xl">{pct >= 80 ? '🌟' : '💪'}</div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Wiederholung abgeschlossen!
        </h1>
        <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <div className="text-5xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-2">{pct}%</div>
          <p className="text-gray-600 dark:text-gray-400">
            {correct} von {answers.length} Fragen richtig
          </p>
          <div className="mt-4">
            <ProgressBar value={pct} />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => { setQIndex(0); setAnswers([]); setAnswered(false); setDone(false) }}
            className="px-5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Nochmal
          </button>
          <Link
            href="/"
            className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
          >
            Zur Übersicht
          </Link>
        </div>
      </div>
    )
  }

  const q = reviewQuestions[qIndex]
  const topicName = topics.find((t) => t.id === q.topicId)?.shortTitle
  const pct = Math.round((qIndex / reviewQuestions.length) * 100)

  return (
    <div className="max-w-2xl mx-auto space-y-5">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
          ← Zurück
        </Link>
        <div className="text-right">
          <div className="font-bold text-gray-900 dark:text-gray-100">Wiederholen</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {qIndex + 1} / {reviewQuestions.length}
          </div>
        </div>
      </div>

      <ProgressBar value={pct} color="bg-amber-500" />

      <div className="flex gap-3 text-sm items-center">
        <span className="text-green-600 dark:text-green-400 font-medium">
          ✓ {answers.filter(Boolean).length}
        </span>
        <span className="text-red-500 dark:text-red-400 font-medium">
          ✗ {answers.filter((a) => !a).length}
        </span>
        {topicName && (
          <span className="ml-auto text-xs text-gray-400 dark:text-gray-500 px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800">
            {topicName}
          </span>
        )}
      </div>

      {q && (
        <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-gray-800 border border-amber-200 dark:border-amber-800 shadow-sm">
          <div className="text-xs text-amber-600 dark:text-amber-400 font-medium mb-3">
            🔄 Wiederholungsmodus
          </div>
          <QuestionRenderer key={q.id} question={q} onAnswer={handleAnswer} />
          {answered && (
            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
              <button
                onClick={next}
                className="w-full py-2.5 rounded-xl bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-colors"
              >
                {qIndex === reviewQuestions.length - 1 ? 'Ergebnis ansehen' : 'Nächste Frage →'}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
