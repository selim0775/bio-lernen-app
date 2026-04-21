'use client'

import { useState, useEffect, useCallback } from 'react'
import type { UserProgress, TopicProgress, ExamResult } from '@/types'
import {
  updateSpacedRepetition,
  createInitialProgress,
} from '@/utils/spacedRepetition'

const STORAGE_KEY = 'bio-learn-progress'

function getDefaultProgress(): UserProgress {
  return {
    topics: {},
    reviewQueue: [],
    examHistory: [],
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(getDefaultProgress())
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        setProgress(JSON.parse(stored))
      }
    } catch {
      // ignore parse errors
    }
    setLoaded(true)
  }, [])

  const save = useCallback((next: UserProgress) => {
    setProgress(next)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    } catch {
      // ignore storage errors
    }
  }, [])

  const ensureTopic = useCallback(
    (topicId: string, next: UserProgress): UserProgress => {
      if (!next.topics[topicId]) {
        next = {
          ...next,
          topics: {
            ...next.topics,
            [topicId]: {
              topicId,
              cardsViewed: [],
              questionsProgress: {},
              lastStudied: new Date().toISOString(),
            },
          },
        }
      }
      return next
    },
    []
  )

  const markCardViewed = useCallback(
    (topicId: string, cardId: string) => {
      setProgress((prev) => {
        let next = { ...prev, topics: { ...prev.topics } }
        next = ensureTopic(topicId, next)
        const topic: TopicProgress = {
          ...next.topics[topicId],
          lastStudied: new Date().toISOString(),
        }
        if (!topic.cardsViewed.includes(cardId)) {
          topic.cardsViewed = [...topic.cardsViewed, cardId]
        }
        next.topics = { ...next.topics, [topicId]: topic }
        save(next)
        return next
      })
    },
    [ensureTopic, save]
  )

  const recordAnswer = useCallback(
    (topicId: string, questionId: string, wasCorrect: boolean) => {
      setProgress((prev) => {
        let next = { ...prev, topics: { ...prev.topics } }
        next = ensureTopic(topicId, next)
        const topic = { ...next.topics[topicId] }
        const existing =
          topic.questionsProgress[questionId] ??
          createInitialProgress(questionId)
        const updated = updateSpacedRepetition(existing, wasCorrect)
        topic.questionsProgress = {
          ...topic.questionsProgress,
          [questionId]: updated,
        }
        topic.lastStudied = new Date().toISOString()
        next.topics = { ...next.topics, [topicId]: topic }

        // update review queue
        let reviewQueue = [...next.reviewQueue]
        if (!wasCorrect && !reviewQueue.includes(questionId)) {
          reviewQueue = [...reviewQueue, questionId]
        } else if (wasCorrect) {
          reviewQueue = reviewQueue.filter((id) => id !== questionId)
        }
        next = { ...next, reviewQueue }

        save(next)
        return next
      })
    },
    [ensureTopic, save]
  )

  const recordExam = useCallback(
    (result: ExamResult) => {
      setProgress((prev) => {
        const next = {
          ...prev,
          examHistory: [...prev.examHistory, result],
        }
        save(next)
        return next
      })
    },
    [save]
  )

  const resetProgress = useCallback(() => {
    const fresh = getDefaultProgress()
    save(fresh)
  }, [save])

  const getTopicProgress = useCallback(
    (topicId: string): TopicProgress => {
      return (
        progress.topics[topicId] ?? {
          topicId,
          cardsViewed: [],
          questionsProgress: {},
          lastStudied: '',
        }
      )
    },
    [progress]
  )

  const getTopicScore = useCallback(
    (topicId: string, questionIds: string[]): number => {
      const topic = progress.topics[topicId]
      if (!topic || questionIds.length === 0) return 0
      let correct = 0
      let total = 0
      for (const qid of questionIds) {
        const qp = topic.questionsProgress[qid]
        if (qp && qp.correct + qp.incorrect > 0) {
          total++
          if (qp.correct > qp.incorrect) correct++
        }
      }
      if (total === 0) return 0
      return Math.round((correct / total) * 100)
    },
    [progress]
  )

  return {
    progress,
    loaded,
    markCardViewed,
    recordAnswer,
    recordExam,
    resetProgress,
    getTopicProgress,
    getTopicScore,
  }
}
