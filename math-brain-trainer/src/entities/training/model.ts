import type { TechniqueType, TrainingMode } from './types'

export interface TrainingModeCard {
    mode: TrainingMode
    title: string
    description: string
    availableTechniques: TechniqueType[]
    isActive: boolean
}