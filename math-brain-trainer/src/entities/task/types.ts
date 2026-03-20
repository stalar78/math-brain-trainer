import type {
    DifficultyLevel,
    TechniqueType,
    TrainingMode,
} from '../training/types'

export type MathOperator = '+' | '-' | '×' | '÷'

export interface MathTask {
    id: string
    mode: TrainingMode
    technique: TechniqueType
    difficulty: DifficultyLevel
    operator: MathOperator
    left: number
    right: number
    expression: string
    correctAnswer: number
}