import type { QuestionProgress } from '@/types'

// Simplified SM-2 algorithm
export function updateSpacedRepetition(
  progress: QuestionProgress,
  wasCorrect: boolean
): QuestionProgress {
  const now = new Date()
  const newProgress = { ...progress }

  if (wasCorrect) {
    newProgress.correct += 1
    newProgress.repetitions += 1

    let newInterval: number
    if (newProgress.repetitions === 1) {
      newInterval = 1
    } else if (newProgress.repetitions === 2) {
      newInterval = 3
    } else {
      newInterval = Math.round(newProgress.interval * newProgress.easeFactor)
    }

    newProgress.interval = newInterval
    newProgress.easeFactor = Math.max(
      1.3,
      newProgress.easeFactor + 0.1
    )
  } else {
    newProgress.incorrect += 1
    newProgress.repetitions = 0
    newProgress.interval = 1
    newProgress.easeFactor = Math.max(1.3, newProgress.easeFactor - 0.2)
  }

  newProgress.lastAnswered = now.toISOString()
  const nextReview = new Date(now)
  nextReview.setDate(nextReview.getDate() + newProgress.interval)
  newProgress.nextReview = nextReview.toISOString()

  return newProgress
}

export function createInitialProgress(questionId: string): QuestionProgress {
  return {
    questionId,
    correct: 0,
    incorrect: 0,
    lastAnswered: '',
    nextReview: new Date().toISOString(),
    interval: 1,
    easeFactor: 2.5,
    repetitions: 0,
  }
}

export function isDueForReview(progress: QuestionProgress): boolean {
  if (!progress.lastAnswered) return true
  return new Date(progress.nextReview) <= new Date()
}

export function getQuestionScore(progress: QuestionProgress): number {
  const total = progress.correct + progress.incorrect
  if (total === 0) return 0
  return Math.round((progress.correct / total) * 100)
}
