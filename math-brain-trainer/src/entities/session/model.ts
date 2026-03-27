import type { MathTask } from '../task/types'
import type {
    DifficultyLevel,
    TechniqueType,
    TrainingMode,
} from '../training/types'
import type { SessionStatus } from './types'

export interface SessionAnswer {
    taskId: string
    userAnswer: number
    isCorrect: boolean
    answeredAt: string
}

export interface TrainingSession {
    id: string
    mode: TrainingMode
    technique: TechniqueType
    difficulty: DifficultyLevel
    tasks: MathTask[]
    answers: SessionAnswer[]
    currentTaskIndex: number
    status: SessionStatus
    startedAt: string | null
    completedAt: string | null
}

export interface SessionResult {
    sessionId: string
    mode: TrainingMode
    technique: TechniqueType
    difficulty: DifficultyLevel
    totalTasks: number
    correctAnswers: number
    wrongAnswers: number
    accuracy: number
    startedAt: string
    completedAt: string
    durationMs: number
}
