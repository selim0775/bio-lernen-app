'use client'

import { useState, useCallback, useMemo } from 'react'
import Link from 'next/link'
import QuestionRenderer from '@/components/QuestionRenderer'
import ProgressBar from '@/components/ProgressBar'
import { topics } from '@/data/topics'
import { quizQuestions } from '@/data/quizQuestions'
import { useProgress } from '@/hooks/useProgress'

type Mode = 'setup' | 'running' | 'done'

export default function ExamPage() {
  const { recordAnswer, recordExam } = useProgress()
  const [mode, setMode] = useState<Mode>('setup')
  const [selectedTopics, setSelectedTopics] = useState<string[]>(topics.map((t) => t.id))
  const [pitfallOnly, setPitfallOnly] = useState(false)
  const [questions, setQuestions] = useState(quizQuestions)
  const [qIndex, setQIndex] = useState(0)
  const [answers, setAnswers] = useState<{ id: string; correct: boolean; topicId: string }[]>([])
  const [answered, setAnswered] = useState(false)

  const startExam = () => {
    let pool = quizQuestions.filter((q) => selectedTopics.includes(q.topicId))
    if (pitfallOnly) pool = pool.filter((q) => q.isPitfall)
    if (pool.length === 0) return
    const shuffled = [...pool].sort(() => Math.random() - 0.5)
    setQuestions(shuffled)
    setQIndex(0)
    setAnswers([])
    setAnswered(false)
    setMode('running')
  }

  const handleAnswer = useCallback(
    (correct: boolean) => {
      const q = questions[qIndex]
      setAnswered(true)
      setAnswers((prev) => [...prev, { id: q.id, correct, topicId: q.topicId }])
      recordAnswer(q.topicId, q.id, correct)
    },
    [questions, qIndex, recordAnswer]
  )

  const next = () => {
    if (qIndex === questions.length - 1) {
      const correct = answers.filter((a) => a.correct).length
      const total = questions.length
      const breakdown: Record<string, { correct: number; total: number }> = {}
      for (const t of selectedTopics) {
        const ta = answers.filter((a) => a.topicId === t)
        breakdown[t] = { correct: ta.filter((a) => a.correct).length, total: ta.length }
      }
      recordExam({
        date: new Date().toISOString(),
        score: correct,
        total,
        topicBreakdown: breakdown,
        mode: 'exam',
      })
      setMode('done')
    } else {
      setQIndex((i) => i + 1)
      setAnswered(false)
    }
  }

  const toggleTopic = (id: string) => {
    setSelectedTopics((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    )
  }

  if (mode === 'setup') {
    return (
      <div className="max-w-lg mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Prüfungsmodus</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">
            Gemischte Fragen aus allen Themen – wie in der echten Prüfung.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-4">
          <div>
            <h2 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Themen wählen</h2>
            <div className="space-y-2">
              {topics.map((t) => {
                const count = quizQuestions.filter((q) => q.topicId === t.id).length
                return (
                  <label
                    key={t.id}
                    className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={selectedTopics.includes(t.id)}
                      onChange={() => toggleTopic(t.id)}
                      className="w-4 h-4 accent-indigo-600"
                    />
                    <span className="text-xl">{t.icon}</span>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                        {t.title}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{count} Fragen</div>
                    </div>
                  </label>
                )
              })}
            </div>
          </div>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={pitfallOnly}
              onChange={(e) => setPitfallOnly(e.target.checked)}
              className="w-4 h-4 accent-amber-500"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              ⚠️ Nur Prüfungsfallen zeigen
            </span>
          </label>

          <div className="text-xs text-gray-500 dark:text-gray-400">
            {quizQuestions
              .filter((q) => selectedTopics.includes(q.topicId))
              .filter((q) => !pitfallOnly || q.isPitfall).length}{' '}
            Fragen ausgewählt
          </div>
        </div>

        <button
          onClick={startExam}
          disabled={selectedTopics.length === 0}
          className="w-full py-3 rounded-xl bg-indigo-600 text-white font-bold text-lg hover:bg-indigo-700 disabled:opacity-40 transition-colors"
        >
          Prüfung starten
        </button>
        <Link
          href="/"
          className="block text-center text-sm text-gray-500 dark:text-gray-400 hover:underline"
        >
          Zurück
        </Link>
      </div>
    )
  }

  if (mode === 'done') {
    const correct = answers.filter((a) => a.correct).length
    const pct = Math.round((correct / answers.length) * 100)

    return (
      <div className="max-w-lg mx-auto space-y-6 py-6 animate-fade-in">
        <div className="text-center">
          <div className="text-6xl mb-4">{pct >= 80 ? '🏆' : pct >= 60 ? '👍' : '📚'}</div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Prüfung abgeschlossen!</h1>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-center">
          <div className="text-5xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-1">{pct}%</div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{correct} von {answers.length} Fragen richtig</p>
          <ProgressBar value={pct} />
        </div>

        {/* Topic breakdown */}
        <div className="p-5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-3">
          <h2 className="font-semibold text-gray-900 dark:text-gray-100">Ergebnis nach Thema</h2>
          {topics
            .filter((t) => selectedTopics.includes(t.id))
            .map((t) => {
              const ta = answers.filter((a) => a.topicId === t.id)
              if (ta.length === 0) return null
              const tc = ta.filter((a) => a.correct).length
              const tp = Math.round((tc / ta.length) * 100)
              return (
                <div key={t.id}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700 dark:text-gray-300">
                      {t.icon} {t.shortTitle}
                    </span>
                    <span className="font-medium text-gray-900 dark:text-gray-100">
                      {tc}/{ta.length} ({tp}%)
                    </span>
                  </div>
                  <ProgressBar
                    value={tp}
                    color={tp >= 70 ? 'bg-green-500' : tp >= 50 ? 'bg-yellow-500' : 'bg-red-500'}
                    showLabel={false}
                  />
                </div>
              )
            })}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => setMode('setup')}
            className="flex-1 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Nochmal
          </button>
          <Link
            href="/review"
            className="flex-1 text-center py-2.5 rounded-xl bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-colors"
          >
            Falsche üben
          </Link>
          <Link
            href="/"
            className="flex-1 text-center py-2.5 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
          >
            Zur Übersicht
          </Link>
        </div>
      </div>
    )
  }

  const q = questions[qIndex]
  const topicName = topics.find((t) => t.id === q.topicId)?.shortTitle
  const pct = Math.round((qIndex / questions.length) * 100)

  return (
    <div className="max-w-2xl mx-auto space-y-5">
      <div className="flex items-center justify-between">
        <button
          onClick={() => setMode('setup')}
          className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >
          ← Abbrechen
        </button>
        <div className="text-right">
          <div className="font-bold text-gray-900 dark:text-gray-100">Prüfungsmodus</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {qIndex + 1} / {questions.length}
          </div>
        </div>
      </div>

      <ProgressBar value={pct} />

      <div className="flex gap-3 text-sm">
        <span className="text-green-600 dark:text-green-400 font-medium">
          ✓ {answers.filter((a) => a.correct).length}
        </span>
        <span className="text-red-500 dark:text-red-400 font-medium">
          ✗ {answers.filter((a) => !a.correct).length}
        </span>
        {topicName && (
          <span className="ml-auto text-xs text-gray-400 dark:text-gray-500 px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800">
            {topicName}
          </span>
        )}
      </div>

      {q && (
        <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
          <QuestionRenderer key={q.id} question={q} onAnswer={handleAnswer} />
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
