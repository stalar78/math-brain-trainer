import type { MathTask } from '../../entities/task/types'

function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export function generateAdditionTask(): MathTask {
    const left = getRandomNumber(1, 20)
    const right = getRandomNumber(1, 20)

    return {
        id: `addition-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        mode: 'addition',
        technique: 'none',
        difficulty: 'easy',
        operator: '+',
        left,
        right,
        expression: `${left} + ${right}`,
        correctAnswer: left + right,
    }
}
