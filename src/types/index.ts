export type Difficulty = 'easy' | 'medium' | 'hard'
export type QuestionType =
  | 'multiple-choice'
  | 'true-false'
  | 'fill-blank'
  | 'short-answer'
  | 'ordering'
  | 'matching'
export type TopicColor = 'blue' | 'green' | 'orange' | 'purple'

export interface Topic {
  id: string
  title: string
  shortTitle: string
  description: string
  color: TopicColor
  icon: string
  cardCount: number
}

export interface LessonCard {
  id: string
  topicId: string
  title: string
  content: string
  pitfalls?: string[]
  summary?: string
}

interface BaseQuestion {
  id: string
  topicId: string
  question: string
  explanation: string
  difficulty: Difficulty
  isPitfall?: boolean
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: 'multiple-choice'
  options: string[]
  correctAnswer: string
}

export interface TrueFalseQuestion extends BaseQuestion {
  type: 'true-false'
  correctAnswer: 'Wahr' | 'Falsch'
}

export interface FillBlankQuestion extends BaseQuestion {
  type: 'fill-blank'
  correctAnswer: string
  acceptedAnswers?: string[]
}

export interface ShortAnswerQuestion extends BaseQuestion {
  type: 'short-answer'
  correctAnswer: string
  keywords?: string[]
}

export interface OrderingQuestion extends BaseQuestion {
  type: 'ordering'
  items: string[]
  correctAnswer: string[]
}

export interface MatchingQuestion extends BaseQuestion {
  type: 'matching'
  matchPairs: Array<{ left: string; right: string }>
  correctAnswer: 'matched'
}

export type QuizQuestion =
  | MultipleChoiceQuestion
  | TrueFalseQuestion
  | FillBlankQuestion
  | ShortAnswerQuestion
  | OrderingQuestion
  | MatchingQuestion

// Progress
export interface QuestionProgress {
  questionId: string
  correct: number
  incorrect: number
  lastAnswered: string
  nextReview: string
  interval: number
  easeFactor: number
  repetitions: number
}

export interface TopicProgress {
  topicId: string
  cardsViewed: string[]
  questionsProgress: Record<string, QuestionProgress>
  lastStudied: string
}

export interface ExamResult {
  date: string
  score: number
  total: number
  topicBreakdown: Record<string, { correct: number; total: number }>
  mode: 'quiz' | 'exam'
  topicId?: string
}

export interface UserProgress {
  topics: Record<string, TopicProgress>
  reviewQueue: string[]
  examHistory: ExamResult[]
}
