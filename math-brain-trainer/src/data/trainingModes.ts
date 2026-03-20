import type { TrainingModeCard } from '../entities/training/model'

export const trainingModes: TrainingModeCard[] = [
    {
        mode: 'addition',
        title: 'Addition',
        description: 'Базовое сложение и техники вроде make tens.',
        availableTechniques: [
            'none',
            'make-tens',
            'round-numbers',
            'split-into-parts',
        ],
        isActive: true,
    },
    {
        mode: 'subtraction',
        title: 'Subtraction',
        description: 'Вычитание, дополнение и разбиение на части.',
        availableTechniques: ['none', 'complement-method', 'split-into-parts'],
        isActive: true,
    },
    {
        mode: 'multiplication',
        title: 'Multiplication',
        description: 'Базовое умножение, ×5 и ×11.',
        availableTechniques: ['none', 'multiply-by-5', 'multiply-by-11'],
        isActive: true,
    },
    {
        mode: 'division',
        title: 'Division',
        description: 'Базовое деление, ÷2 и ÷5.',
        availableTechniques: ['none', 'divide-by-2-groups', 'divide-by-5-rule'],
        isActive: true,
    },
]