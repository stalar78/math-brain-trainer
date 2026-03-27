import { useState } from 'react'
import type { MathTask } from '../entities/task/types'
import type { TrainingMode } from '../entities/training/types'
import { checkAnswer } from '../features/training/checkAnswer'
import { generateAdditionTask } from '../features/training/generateAdditionTask'

interface TrainingPageProps {
    selectedMode: TrainingMode
    onBack: () => void
}

export function TrainingPage({
    selectedMode,
    onBack,
}: TrainingPageProps) {
    const [task, setTask] = useState<MathTask | null>(() =>
        selectedMode === 'addition' ? generateAdditionTask() : null
    )
    const [userAnswer, setUserAnswer] = useState('')
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
    const [totalAnswered, setTotalAnswered] = useState(0)
    const [correctCount, setCorrectCount] = useState(0)
    const [wrongCount, setWrongCount] = useState(0)

    const handleCheckAnswer = () => {
        if (!task || userAnswer.trim() === '') {
            return
        }

        const result = checkAnswer(task.correctAnswer, Number(userAnswer))

        setIsCorrect(result)
        setTotalAnswered((current) => current + 1)

        if (result) {
            setCorrectCount((current) => current + 1)
            return
        }

        setWrongCount((current) => current + 1)
    }

    const handleNextTask = () => {
        if (!task) {
            return
        }

        setTask(generateAdditionTask())
        setUserAnswer('')
        setIsCorrect(null)
    }

    return (
        <main className="min-h-screen bg-slate-950 text-slate-100">
            <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col px-6 py-12">
                <div className="mb-8 flex items-center justify-between gap-4">
                    <div>
                        <p className="mb-2 text-sm text-slate-400">Math Brain Trainer</p>
                        <h1 className="text-3xl font-bold tracking-tight">
                            Тренировка
                        </h1>
                    </div>

                    <button
                        type="button"
                        onClick={onBack}
                        className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-200 transition hover:bg-slate-800"
                    >
                        Назад
                    </button>
                </div>

                <section className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
                    <p className="mb-3 text-sm text-slate-400">Выбранный режим</p>
                    <p className="mb-4 text-2xl font-semibold capitalize">
                        {selectedMode}
                    </p>

                    {task ? (
                        <div className="space-y-4">
                            <p className="text-sm leading-6 text-slate-300">
                                Первая MVP-генерация пока доступна только для сложения.
                            </p>

                            <div className="grid gap-3 sm:grid-cols-3">
                                <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                                    <p className="text-xs uppercase tracking-wide text-slate-500">
                                        Отвечено
                                    </p>
                                    <p className="mt-2 text-2xl font-semibold">
                                        {totalAnswered}
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-emerald-900 bg-slate-950 p-4">
                                    <p className="text-xs uppercase tracking-wide text-slate-500">
                                        Верно
                                    </p>
                                    <p className="mt-2 text-2xl font-semibold text-emerald-400">
                                        {correctCount}
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-rose-900 bg-slate-950 p-4">
                                    <p className="text-xs uppercase tracking-wide text-slate-500">
                                        Неверно
                                    </p>
                                    <p className="mt-2 text-2xl font-semibold text-rose-400">
                                        {wrongCount}
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-cyan-900 bg-slate-950 p-5">
                                <p className="mb-2 text-sm text-slate-400">Задача</p>
                                <p className="text-3xl font-semibold tracking-tight">
                                    {task.expression}
                                </p>
                            </div>

                            <div className="flex flex-col gap-3 sm:flex-row">
                                <input
                                    type="number"
                                    value={userAnswer}
                                    onChange={(event) => {
                                        setUserAnswer(event.target.value)
                                        setIsCorrect(null)
                                    }}
                                    placeholder="Введите ответ"
                                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-500"
                                />

                                <button
                                    type="button"
                                    onClick={handleCheckAnswer}
                                    className="rounded-xl border border-cyan-700 bg-cyan-950 px-5 py-3 text-sm font-medium text-cyan-100 transition hover:bg-cyan-900"
                                >
                                    Проверить
                                </button>

                                <button
                                    type="button"
                                    onClick={handleNextTask}
                                    className="rounded-xl border border-slate-700 bg-slate-950 px-5 py-3 text-sm font-medium text-slate-100 transition hover:bg-slate-800"
                                >
                                    Следующая задача
                                </button>
                            </div>

                            {isCorrect !== null ? (
                                <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                                    <p
                                        className={`text-sm font-medium ${
                                            isCorrect
                                                ? 'text-emerald-400'
                                                : 'text-rose-400'
                                        }`}
                                    >
                                        {isCorrect ? 'Верно' : 'Неверно'}
                                    </p>

                                    {!isCorrect ? (
                                        <p className="mt-2 text-sm text-slate-300">
                                            Правильный ответ: {task.correctAnswer}
                                        </p>
                                    ) : null}
                                </div>
                            ) : null}
                        </div>
                    ) : (
                        <p className="text-sm leading-6 text-slate-300">
                            Генерация задач для этого режима будет следующим шагом разработки.
                        </p>
                    )}
                </section>
            </div>
        </main>
    )
}
