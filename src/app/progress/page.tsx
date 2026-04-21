'use client'

import { useState } from 'react'
import Link from 'next/link'
import ProgressBar from '@/components/ProgressBar'
import { topics } from '@/data/topics'
import { quizQuestions } from '@/data/quizQuestions'
import { lessonCards } from '@/data/lessonCards'
import { useProgress } from '@/hooks/useProgress'

export default function ProgressPage() {
  const { progress, getTopicProgress, getTopicScore, resetProgress } = useProgress()
  const [confirmReset, setConfirmReset] = useState(false)

  const totalQ = quizQuestions.length
  const answeredQ = Object.values(progress.topics).reduce((acc, tp) => {
    return acc + Object.values(tp.questionsProgress).filter((p) => p.correct + p.incorrect > 0).length
  }, 0)

  const totalCards = lessonCards.length
  const viewedCards = Object.values(progress.topics).reduce(
    (acc, tp) => acc + tp.cardsViewed.length,
    0
  )

  const examCount = progress.examHistory.length
  const bestExam = progress.examHistory.reduce(
    (best, e) => (e.score / e.total > (best?.score ?? 0) / (best?.total ?? 1) ? e : best),
    progress.examHistory[0]
  )

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Lernfortschritt</h1>

      {/* Overall stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: 'Fragen beantwortet', value: `${answeredQ}/${totalQ}`, icon: '❓' },
          { label: 'Karten gesehen', value: `${viewedCards}/${totalCards}`, icon: '🃏' },
          { label: 'Prüfungen abgelegt', value: examCount.toString(), icon: '📝' },
          {
            label: 'Bestes Ergebnis',
            value: bestExam ? `${Math.round((bestExam.score / bestExam.total) * 100)}%` : '—',
            icon: '🏆',
          },
        ].map((s) => (
          <div
            key={s.label}
            className="p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-center"
          >
            <div className="text-2xl mb-1">{s.icon}</div>
            <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">{s.value}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Review queue */}
      {progress.reviewQueue.length > 0 && (
        <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold text-amber-800 dark:text-amber-200">
                ⚠️ {progress.reviewQueue.length} Fragen zu wiederholen
              </div>
              <div className="text-sm text-amber-700 dark:text-amber-300 mt-0.5">
                Diese hast du zuletzt falsch beantwortet.
              </div>
            </div>
            <Link
              href="/review"
              className="px-4 py-2 rounded-xl bg-amber-500 text-white text-sm font-medium hover:bg-amber-600 transition-colors"
            >
              Üben
            </Link>
          </div>
        </div>
      )}

      {/* Per topic */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Nach Thema</h2>
        {topics.map((t) => {
          const tp = getTopicProgress(t.id)
          const qids = quizQuestions.filter((q) => q.topicId === t.id).map((q) => q.id)
          const score = getTopicScore(t.id, qids)
          const answered = Object.values(tp.questionsProgress).filter(
            (p) => p.correct + p.incorrect > 0
          ).length
          const cards = lessonCards.filter((c) => c.topicId === t.id)
          const cardPct = Math.round((tp.cardsViewed.length / cards.length) * 100)

          return (
            <div
              key={t.id}
              className="p-5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{t.icon}</span>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-gray-100">{t.title}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {tp.lastStudied
                        ? `Zuletzt gelernt: ${new Date(tp.lastStudied).toLocaleDateString('de-DE')}`
                        : 'Noch nicht gelernt'}
                    </div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{score}%</div>
              </div>

              <div className="space-y-2">
                <ProgressBar value={cardPct} label={`Karten (${tp.cardsViewed.length}/${cards.length})`} showLabel />
                <ProgressBar value={answered > 0 ? Math.round((answered / qids.length) * 100) : 0} label={`Fragen bearbeitet (${answered}/${qids.length})`} showLabel />
                <ProgressBar value={score} label="Quiz-Score" showLabel />
              </div>

              <div className="grid grid-cols-2 gap-2 mt-4">
                <Link
                  href={`/learn/${t.id}`}
                  className="text-center text-sm py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Lernen
                </Link>
                <Link
                  href={`/quiz/${t.id}`}
                  className="text-center text-sm py-2 rounded-xl border border-indigo-200 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-900 transition-colors"
                >
                  Quiz
                </Link>
              </div>
            </div>
          )
        })}
      </div>

      {/* Exam history */}
      {progress.examHistory.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Prüfungsverlauf</h2>
          <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700">
            {[...progress.examHistory].reverse().slice(0, 10).map((e, i) => (
              <div
                key={i}
                className="flex justify-between items-center p-3 border-b border-gray-100 dark:border-gray-700 last:border-0 bg-white dark:bg-gray-800"
              >
                <div>
                  <span className="text-xs text-gray-400 dark:text-gray-500">
                    {new Date(e.date).toLocaleDateString('de-DE', {
                      day: '2-digit',
                      month: '2-digit',
                      year: '2-digit',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                  <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
                    {e.mode === 'exam' ? '📝 Prüfung' : '❓ Quiz'}
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    {Math.round((e.score / e.total) * 100)}%
                  </span>
                  <span className="text-xs text-gray-400 dark:text-gray-500 ml-1">
                    ({e.score}/{e.total})
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Reset */}
      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
        {confirmReset ? (
          <div className="flex gap-3 items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 flex-1">
              Wirklich zurücksetzen?
            </p>
            <button
              onClick={() => { resetProgress(); setConfirmReset(false) }}
              className="px-4 py-2 rounded-xl bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition-colors"
            >
              Ja, zurücksetzen
            </button>
            <button
              onClick={() => setConfirmReset(false)}
              className="px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Abbrechen
            </button>
          </div>
        ) : (
          <button
            onClick={() => setConfirmReset(true)}
            className="text-sm text-red-500 hover:text-red-700 dark:hover:text-red-400 transition-colors"
          >
            Fortschritt zurücksetzen
          </button>
        )}
      </div>
    </div>
  )
}
