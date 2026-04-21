'use client'

import { useState, useCallback } from 'react'
import type { QuizQuestion } from '@/types'

interface Props {
  question: QuizQuestion
  onAnswer: (correct: boolean) => void
}

// ─── Multiple Choice ─────────────────────────────────────────────────────────
function MultipleChoice({ question, onAnswer }: Props & { question: Extract<QuizQuestion, { type: 'multiple-choice' }> }) {
  const [selected, setSelected] = useState<string | null>(null)

  const handleSelect = (opt: string) => {
    if (selected) return
    setSelected(opt)
    onAnswer(opt === question.correctAnswer)
  }

  return (
    <div className="space-y-3">
      {question.options.map((opt) => {
        let cls =
          'w-full text-left p-3 sm:p-4 rounded-xl border text-sm sm:text-base transition-all '
        if (!selected) {
          cls += 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950 cursor-pointer'
        } else if (opt === question.correctAnswer) {
          cls += 'border-green-500 bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200 font-medium'
        } else if (opt === selected) {
          cls += 'border-red-500 bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-200'
        } else {
          cls += 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 opacity-60'
        }
        return (
          <button key={opt} onClick={() => handleSelect(opt)} className={cls}>
            <span className="flex gap-3 items-start">
              {selected && (
                <span className="shrink-0 mt-0.5">
                  {opt === question.correctAnswer ? '✓' : opt === selected ? '✗' : '○'}
                </span>
              )}
              {opt}
            </span>
          </button>
        )
      })}
    </div>
  )
}

// ─── True / False ────────────────────────────────────────────────────────────
function TrueFalse({ question, onAnswer }: Props & { question: Extract<QuizQuestion, { type: 'true-false' }> }) {
  const [selected, setSelected] = useState<string | null>(null)

  const handle = (val: string) => {
    if (selected) return
    setSelected(val)
    onAnswer(val === question.correctAnswer)
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      {['Wahr', 'Falsch'].map((val) => {
        let cls = 'py-4 rounded-xl border text-base font-medium transition-all cursor-pointer '
        if (!selected) {
          cls += 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950'
        } else if (val === question.correctAnswer) {
          cls += 'border-green-500 bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200'
        } else if (val === selected) {
          cls += 'border-red-500 bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-200'
        } else {
          cls += 'border-gray-200 dark:border-gray-700 opacity-60'
        }
        return (
          <button key={val} onClick={() => handle(val)} className={cls}>
            {val === 'Wahr' ? '✓ Wahr' : '✗ Falsch'}
          </button>
        )
      })}
    </div>
  )
}

// ─── Fill Blank ──────────────────────────────────────────────────────────────
function FillBlank({ question, onAnswer }: Props & { question: Extract<QuizQuestion, { type: 'fill-blank' }> }) {
  const [input, setInput] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [correct, setCorrect] = useState(false)

  const submit = () => {
    if (submitted || !input.trim()) return
    const accepted = [question.correctAnswer, ...(question.acceptedAnswers ?? [])].map((a) =>
      a.toLowerCase().trim()
    )
    const isCorrect = accepted.includes(input.toLowerCase().trim())
    setCorrect(isCorrect)
    setSubmitted(true)
    onAnswer(isCorrect)
  }

  return (
    <div className="space-y-3">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && submit()}
        disabled={submitted}
        placeholder="Antwort eingeben…"
        className={`w-full p-3 rounded-xl border text-sm sm:text-base outline-none transition-colors
          ${submitted
            ? correct
              ? 'border-green-500 bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200'
              : 'border-red-500 bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-200'
            : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-indigo-400'
          }`}
      />
      {!submitted && (
        <button
          onClick={submit}
          disabled={!input.trim()}
          className="w-full py-2.5 rounded-xl bg-indigo-600 dark:bg-indigo-500 text-white font-medium hover:bg-indigo-700 disabled:opacity-40 transition-colors"
        >
          Prüfen
        </button>
      )}
      {submitted && (
        <div className={`p-3 rounded-xl text-sm ${correct ? 'bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200' : 'bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-200'}`}>
          {correct ? '✓ Richtig!' : `✗ Falsche Antwort. Richtig: ${question.correctAnswer}`}
        </div>
      )}
    </div>
  )
}

// ─── Short Answer ─────────────────────────────────────────────────────────────
function ShortAnswer({ question, onAnswer }: Props & { question: Extract<QuizQuestion, { type: 'short-answer' }> }) {
  const [input, setInput] = useState('')
  const [revealed, setRevealed] = useState(false)
  const [selfAssessed, setSelfAssessed] = useState<boolean | null>(null)

  const reveal = () => {
    if (!input.trim()) return
    setRevealed(true)
  }

  const assess = (wasCorrect: boolean) => {
    setSelfAssessed(wasCorrect)
    onAnswer(wasCorrect)
  }

  return (
    <div className="space-y-3">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={revealed}
        placeholder="Deine Antwort…"
        rows={3}
        className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm sm:text-base outline-none focus:border-indigo-400 transition-colors resize-none disabled:opacity-70"
      />
      {!revealed && (
        <button
          onClick={reveal}
          disabled={!input.trim()}
          className="w-full py-2.5 rounded-xl bg-indigo-600 dark:bg-indigo-500 text-white font-medium hover:bg-indigo-700 disabled:opacity-40 transition-colors"
        >
          Antwort aufdecken
        </button>
      )}
      {revealed && (
        <div className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800 text-sm">
          <div className="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">Musterlösung:</div>
          <div className="text-indigo-800 dark:text-indigo-200">{question.correctAnswer}</div>
        </div>
      )}
      {revealed && selfAssessed === null && (
        <div className="space-y-2">
          <p className="text-sm text-center text-gray-600 dark:text-gray-400">War deine Antwort richtig?</p>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => assess(true)}
              className="py-2 rounded-xl border border-green-400 text-green-700 dark:text-green-300 hover:bg-green-50 dark:hover:bg-green-950 font-medium text-sm transition-colors"
            >
              ✓ Ja, richtig
            </button>
            <button
              onClick={() => assess(false)}
              className="py-2 rounded-xl border border-red-400 text-red-700 dark:text-red-300 hover:bg-red-50 dark:hover:bg-red-950 font-medium text-sm transition-colors"
            >
              ✗ Nein, falsch
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Ordering ─────────────────────────────────────────────────────────────────
function Ordering({ question, onAnswer }: Props & { question: Extract<QuizQuestion, { type: 'ordering' }> }) {
  const [shuffled] = useState(() => [...question.items].sort(() => Math.random() - 0.5))
  const [selected, setSelected] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [correct, setCorrect] = useState(false)

  const toggle = (item: string) => {
    if (submitted) return
    if (selected.includes(item)) {
      setSelected(selected.filter((s) => s !== item))
    } else {
      setSelected([...selected, item])
    }
  }

  const submit = () => {
    if (selected.length !== question.items.length) return
    const isCorrect = selected.every((s, i) => s === question.correctAnswer[i])
    setCorrect(isCorrect)
    setSubmitted(true)
    onAnswer(isCorrect)
  }

  const remaining = shuffled.filter((i) => !selected.includes(i))

  return (
    <div className="space-y-3">
      <div className="text-xs text-gray-500 dark:text-gray-400">
        Klicke die Elemente in der richtigen Reihenfolge an:
      </div>

      {/* Selected order */}
      <div className="space-y-1.5 min-h-[80px]">
        {selected.map((item, i) => {
          let cls = 'flex gap-2 items-center p-2.5 rounded-lg text-sm border '
          if (submitted) {
            cls += item === question.correctAnswer[i]
              ? 'border-green-500 bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200'
              : 'border-red-500 bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-200'
          } else {
            cls += 'border-indigo-300 dark:border-indigo-700 bg-indigo-50 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-200 cursor-pointer hover:bg-indigo-100 dark:hover:bg-indigo-900'
          }
          return (
            <div key={item} onClick={() => !submitted && toggle(item)} className={cls}>
              <span className="shrink-0 w-5 h-5 rounded-full bg-indigo-200 dark:bg-indigo-700 text-xs flex items-center justify-center font-bold">
                {i + 1}
              </span>
              <span className="flex-1">{item}</span>
              {submitted && (item === question.correctAnswer[i] ? '✓' : '✗')}
            </div>
          )
        })}
      </div>

      {/* Remaining items */}
      {remaining.length > 0 && (
        <div className="space-y-1.5">
          <div className="text-xs text-gray-400 dark:text-gray-500">Noch einzuordnen:</div>
          {remaining.map((item) => (
            <button
              key={item}
              onClick={() => toggle(item)}
              className="w-full text-left p-2.5 rounded-lg text-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950 transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      )}

      {!submitted && selected.length === question.items.length && (
        <button
          onClick={submit}
          className="w-full py-2.5 rounded-xl bg-indigo-600 dark:bg-indigo-500 text-white font-medium hover:bg-indigo-700 transition-colors"
        >
          Reihenfolge prüfen
        </button>
      )}
    </div>
  )
}

// ─── Matching ──────────────────────────────────────────────────────────────────
function Matching({ question, onAnswer }: Props & { question: Extract<QuizQuestion, { type: 'matching' }> }) {
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null)
  const [matches, setMatches] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [correct, setCorrect] = useState(false)

  const lefts = question.matchPairs.map((p) => p.left)
  const rights = question.matchPairs.map((p) => p.right)
  const correctMap = Object.fromEntries(question.matchPairs.map((p) => [p.left, p.right]))

  const handleLeft = (left: string) => {
    if (submitted) return
    setSelectedLeft(selectedLeft === left ? null : left)
  }

  const handleRight = (right: string) => {
    if (submitted || !selectedLeft) return
    setMatches((prev) => {
      const next = { ...prev }
      // remove old match for this right
      for (const k of Object.keys(next)) {
        if (next[k] === right) delete next[k]
      }
      next[selectedLeft] = right
      return next
    })
    setSelectedLeft(null)
  }

  const submit = () => {
    if (Object.keys(matches).length !== question.matchPairs.length) return
    const isCorrect = lefts.every((l) => matches[l] === correctMap[l])
    setCorrect(isCorrect)
    setSubmitted(true)
    onAnswer(isCorrect)
  }

  const isMatched = (side: 'left' | 'right', val: string) => {
    if (side === 'left') return val in matches
    return Object.values(matches).includes(val)
  }

  return (
    <div className="space-y-3">
      <div className="text-xs text-gray-500 dark:text-gray-400">
        Klicke einen Begriff links an, dann den passenden Begriff rechts:
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-2">
          {lefts.map((l) => {
            let cls = 'p-2 sm:p-3 rounded-lg text-xs sm:text-sm border cursor-pointer transition-colors '
            if (submitted) {
              cls += matches[l] === correctMap[l]
                ? 'border-green-500 bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200'
                : 'border-red-500 bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-200'
            } else if (selectedLeft === l) {
              cls += 'border-indigo-500 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200'
            } else if (isMatched('left', l)) {
              cls += 'border-blue-300 dark:border-blue-700 bg-blue-50 dark:bg-blue-950 text-blue-800 dark:text-blue-200'
            } else {
              cls += 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-400'
            }
            return (
              <button key={l} onClick={() => handleLeft(l)} className={`${cls} w-full text-left`}>
                {l}
              </button>
            )
          })}
        </div>
        <div className="space-y-2">
          {rights.map((r) => {
            let cls = 'p-2 sm:p-3 rounded-lg text-xs sm:text-sm border cursor-pointer transition-colors '
            if (submitted) {
              const matchedLeft = Object.keys(matches).find((k) => matches[k] === r)
              cls += matchedLeft && matches[matchedLeft] === correctMap[matchedLeft]
                ? 'border-green-500 bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200'
                : 'border-red-500 bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-200'
            } else if (isMatched('right', r)) {
              cls += 'border-blue-300 dark:border-blue-700 bg-blue-50 dark:bg-blue-950 text-blue-800 dark:text-blue-200'
            } else {
              cls += 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-400'
            }
            return (
              <button key={r} onClick={() => handleRight(r)} className={`${cls} w-full text-left`}>
                {r}
              </button>
            )
          })}
        </div>
      </div>

      {!submitted && Object.keys(matches).length === question.matchPairs.length && (
        <button
          onClick={submit}
          className="w-full py-2.5 rounded-xl bg-indigo-600 dark:bg-indigo-500 text-white font-medium hover:bg-indigo-700 transition-colors"
        >
          Zuordnung prüfen
        </button>
      )}
    </div>
  )
}

// ─── Main Renderer ─────────────────────────────────────────────────────────────
export default function QuestionRenderer({ question, onAnswer }: Props) {
  const [answered, setAnswered] = useState(false)
  const [wasCorrect, setWasCorrect] = useState(false)

  const handleAnswer = useCallback(
    (correct: boolean) => {
      if (answered) return
      setAnswered(true)
      setWasCorrect(correct)
      onAnswer(correct)
    },
    [answered, onAnswer]
  )

  const diffColor = {
    easy: 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300',
    medium: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300',
    hard: 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300',
  }[question.difficulty]

  const typeLabel: Record<string, string> = {
    'multiple-choice': 'Multiple Choice',
    'true-false': 'Wahr / Falsch',
    'fill-blank': 'Lückentext',
    'short-answer': 'Kurzantwort',
    'ordering': 'Reihenfolge',
    'matching': 'Zuordnung',
  }

  return (
    <div className="space-y-4">
      {/* Meta */}
      <div className="flex flex-wrap gap-2">
        <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
          {typeLabel[question.type]}
        </span>
        <span className={`text-xs px-2 py-0.5 rounded-full ${diffColor}`}>
          {question.difficulty === 'easy' ? 'Leicht' : question.difficulty === 'medium' ? 'Mittel' : 'Schwer'}
        </span>
        {question.isPitfall && (
          <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300">
            ⚠️ Prüfungsfalle
          </span>
        )}
      </div>

      {/* Question */}
      <p className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 leading-snug">
        {question.question}
      </p>

      {/* Input */}
      <div>
        {question.type === 'multiple-choice' && (
          <MultipleChoice question={question} onAnswer={handleAnswer} />
        )}
        {question.type === 'true-false' && (
          <TrueFalse question={question} onAnswer={handleAnswer} />
        )}
        {question.type === 'fill-blank' && (
          <FillBlank question={question} onAnswer={handleAnswer} />
        )}
        {question.type === 'short-answer' && (
          <ShortAnswer question={question} onAnswer={handleAnswer} />
        )}
        {question.type === 'ordering' && (
          <Ordering question={question} onAnswer={handleAnswer} />
        )}
        {question.type === 'matching' && (
          <Matching question={question} onAnswer={handleAnswer} />
        )}
      </div>

      {/* Explanation */}
      {answered && (
        <div
          className={`p-4 rounded-xl border text-sm leading-relaxed animate-fade-in ${
            wasCorrect
              ? 'bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200'
              : 'bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200'
          }`}
        >
          <div className="font-semibold mb-1">
            {wasCorrect ? '✓ Richtig!' : '✗ Falsch'}
          </div>
          <div>{question.explanation}</div>
        </div>
      )}
    </div>
  )
}
