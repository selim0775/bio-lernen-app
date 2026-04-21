'use client'

import { useState, useCallback, useMemo } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import QuestionRenderer from '@/components/QuestionRenderer'
import ProgressBar from '@/components/ProgressBar'
import { topics } from '@/data/topics'
import { quizQuestions } from '@/data/quizQuestions'
import { useProgress } from '@/hooks/useProgress'

export default function QuizPage() {
  const { topicId } = useParams<{ topicId: string }>()
  const { recordAnswer, recordExam } = useProgress()

  const topic = topics.find((t) => t.id === topicId)
  const questions = useMemo(
    () => quizQuestions.filter((q) => q.topicId === topicId).sort(() => Math.random() - 0.5),
    [topicId]
  )

  const [qIndex, setQIndex] = useState(0)
  const [answers, setAnswers] = useState<boolean[]>([])
  const [answered, setAnswered] = useState(false)
  const [done, setDone] = useState(false)

  const current = questions[qIndex]

  const handleAnswer = useCallback(
    (correct: boolean) => {
      setAnswered(true)
      setAnswers((prev) => [...prev, correct])
      recordAnswer(topicId, current.id, correct)
    },
    [current, topicId, recordAnswer]
  )

  const next = () => {
    if (qIndex === questions.length - 1) {
      const correct = [...answers].length + 1
      const total = questions.length
      const score = answers.filter(Boolean).length + (answered ? 1 : 0)
      recordExam({
        date: new Date().toISOString(),
        score,
        total,
        topicBreakdown: { [topicId]: { correct: score, total } },
        mode: 'quiz',
        topicId,
      })
      setDone(true)
    } else {
      setQIndex((i) => i + 1)
      setAnswered(false)
    }
  }

  if (!topic) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500">Thema nicht gefunden.</p>
        <Link href="/" className="text-indigo-600 hover:underline mt-2 inline-block">
          Zurück
        </Link>
      </div>
    )
  }

  if (done) {
    const correct = answers.filter(Boolean).length
    const pct = Math.round((correct / questions.length) * 100)
    return (
      <div className="max-w-lg mx-auto text-center space-y-6 py-10 animate-fade-in">
        <div className="text-6xl">{pct >= 80 ? '🏆' : pct >= 50 ? '👍' : '📚'}</div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Quiz abgeschlossen!
        </h1>
        <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <div className="text-5xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-2">
            {pct}%
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            {correct} von {questions.length} Fragen richtig
          </p>
          <div className="mt-4">
            <ProgressBar value={pct} label="Score" />
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
            href="/review"
            className="px-5 py-2.5 rounded-xl bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-colors"
          >
            Falsche wiederholen
          </Link>
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

  const pct = Math.round((qIndex / questions.length) * 100)

  return (
    <div className="max-w-2xl mx-auto space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Link href="/" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
          ← Zurück
        </Link>
        <div className="text-right">
          <div className="font-bold text-gray-900 dark:text-gray-100">{topic.title}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Frage {qIndex + 1} / {questions.length}
          </div>
        </div>
      </div>

      <ProgressBar value={pct} />

      {/* Score so far */}
      <div className="flex gap-3 text-sm">
        <span className="text-green-600 dark:text-green-400 font-medium">
          ✓ {answers.filter(Boolean).length}
        </span>
        <span className="text-red-500 dark:text-red-400 font-medium">
          ✗ {answers.filter((a) => !a).length}
        </span>
      </div>

      {/* Question */}
      {current && (
        <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
          <QuestionRenderer key={current.id} question={current} onAnswer={handleAnswer} />

          {answered && (
            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
              <button
                onClick={next}
                className="w-full py-2.5 rounded-xl bg-indigo-600 dark:bg-indigo-500 text-white font-semibold hover:bg-indigo-700 transition-colors"
              >
                {qIndex === questions.length - 1 ? 'Ergebnis ansehen' : 'Nächste Frage →'}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
