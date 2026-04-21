'use client'

import Link from 'next/link'
import type { Topic } from '@/types'
import ProgressBar from './ProgressBar'

const colorMap = {
  blue: {
    bg: 'bg-blue-50 dark:bg-blue-950',
    border: 'border-blue-200 dark:border-blue-800',
    badge: 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300',
    bar: 'bg-blue-500',
    btn: 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600',
  },
  green: {
    bg: 'bg-green-50 dark:bg-green-950',
    border: 'border-green-200 dark:border-green-800',
    badge: 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300',
    bar: 'bg-green-500',
    btn: 'bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600',
  },
  orange: {
    bg: 'bg-orange-50 dark:bg-orange-950',
    border: 'border-orange-200 dark:border-orange-800',
    badge: 'bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300',
    bar: 'bg-orange-500',
    btn: 'bg-orange-600 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600',
  },
  purple: {
    bg: 'bg-purple-50 dark:bg-purple-950',
    border: 'border-purple-200 dark:border-purple-800',
    badge: 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300',
    bar: 'bg-purple-500',
    btn: 'bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600',
  },
}

interface Props {
  topic: Topic
  cardsViewed: number
  score: number
  questionCount: number
}

export default function TopicCard({ topic, cardsViewed, score, questionCount }: Props) {
  const c = colorMap[topic.color]
  const cardPct = Math.round((cardsViewed / topic.cardCount) * 100)

  return (
    <div className={`rounded-2xl border p-5 flex flex-col gap-4 ${c.bg} ${c.border}`}>
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{topic.icon}</span>
          <div>
            <h2 className="font-bold text-gray-900 dark:text-gray-100 leading-tight">
              {topic.title}
            </h2>
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${c.badge}`}>
              {topic.cardCount} Karten · {questionCount} Fragen
            </span>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
        {topic.description}
      </p>

      <div className="space-y-2">
        <ProgressBar
          value={cardPct}
          color={c.bar}
          label="Karten gelernt"
          showLabel
        />
        <ProgressBar
          value={score}
          color={c.bar}
          label="Quiz-Score"
          showLabel
        />
      </div>

      <div className="grid grid-cols-2 gap-2 mt-auto">
        <Link
          href={`/learn/${topic.id}`}
          className={`text-center text-sm font-medium py-2 px-3 rounded-xl text-white transition-colors ${c.btn}`}
        >
          Lernen
        </Link>
        <Link
          href={`/quiz/${topic.id}`}
          className="text-center text-sm font-medium py-2 px-3 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          Quiz
        </Link>
      </div>
    </div>
  )
}
