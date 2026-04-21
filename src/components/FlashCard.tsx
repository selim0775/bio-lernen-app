'use client'

import { useState } from 'react'
import type { LessonCard } from '@/types'

interface Props {
  card: LessonCard
  cardNumber: number
  total: number
  onPrev: () => void
  onNext: () => void
}

function renderContent(text: string) {
  const lines = text.split('\n')
  return lines.map((line, i) => {
    // Bold **text**
    const parts = line.split(/(\*\*[^*]+\*\*)/)
    const rendered = parts.map((p, j) => {
      if (p.startsWith('**') && p.endsWith('**')) {
        return <strong key={j}>{p.slice(2, -2)}</strong>
      }
      return <span key={j}>{p}</span>
    })

    if (line.startsWith('---')) {
      return <hr key={i} className="my-3 border-gray-300 dark:border-gray-600" />
    }
    if (line.startsWith('- ') || line.startsWith('* ')) {
      return (
        <li key={i} className="ml-4 list-disc">
          {rendered.map((p, j) =>
            typeof p === 'string' ? p : <span key={j}>{p}</span>
          )}
        </li>
      )
    }
    if (line.trim() === '') return <div key={i} className="h-2" />
    return (
      <p key={i} className="leading-relaxed">
        {rendered}
      </p>
    )
  })
}

export default function FlashCard({ card, cardNumber, total, onPrev, onNext }: Props) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className="flex flex-col gap-4">
      {/* Progress dots */}
      <div className="flex justify-center gap-1.5">
        {Array.from({ length: total }, (_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all ${
              i === cardNumber - 1
                ? 'w-6 bg-indigo-500'
                : 'w-1.5 bg-gray-300 dark:bg-gray-600'
            }`}
          />
        ))}
      </div>

      {/* Card */}
      <div
        className="min-h-[360px] sm:min-h-[400px] rounded-2xl cursor-pointer select-none border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
        onClick={() => setFlipped((f) => !f)}
      >
        {!flipped ? (
          <div className="h-full p-6 sm:p-8 flex flex-col justify-center items-center text-center min-h-[360px]">
            <div className="text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
              Karte {cardNumber} / {total} — Klicken zum Umdrehen
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              {card.title}
            </h2>
          </div>
        ) : (
          <div className="p-6 sm:p-8 min-h-[360px] flex flex-col">
            <div className="text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
              {card.title}
            </div>
            <div className="text-sm sm:text-base text-gray-700 dark:text-gray-300 space-y-1 flex-1">
              {renderContent(card.content)}
            </div>
            {card.pitfalls && card.pitfalls.length > 0 && (
              <div className="mt-4 p-3 rounded-xl bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800">
                <div className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wide mb-2">
                  ⚠️ Prüfungsfallen
                </div>
                <ul className="space-y-1">
                  {card.pitfalls.map((p, i) => (
                    <li key={i} className="text-xs text-amber-800 dark:text-amber-300 flex gap-2">
                      <span className="shrink-0">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {card.summary && (
              <div className="mt-3 p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800">
                <div className="text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wide mb-1">
                  Zusammenfassung
                </div>
                <p className="text-xs text-indigo-800 dark:text-indigo-300">{card.summary}</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center gap-3">
        <button
          onClick={onPrev}
          disabled={cardNumber === 1}
          className="flex-1 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          ← Zurück
        </button>
        <button
          onClick={() => setFlipped(false)}
          className="py-2.5 px-4 rounded-xl text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          Umdrehen
        </button>
        <button
          onClick={onNext}
          disabled={cardNumber === total}
          className="flex-1 py-2.5 rounded-xl bg-indigo-600 dark:bg-indigo-500 text-white font-medium hover:bg-indigo-700 dark:hover:bg-indigo-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          Weiter →
        </button>
      </div>
    </div>
  )
}
