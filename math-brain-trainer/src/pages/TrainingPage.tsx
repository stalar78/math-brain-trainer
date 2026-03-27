import { useState } from 'react'
import type { MathTask } from '../entities/task/types'
import type { TrainingMode } from '../entities/training/types'
import { generateAdditionTask } from '../features/training/generateAdditionTask'

interface TrainingPageProps {
    selectedMode: TrainingMode
    onBack: () => void
}

export function TrainingPage({
    selectedMode,
    onBack,
}: TrainingPageProps) {
    const [task] = useState<MathTask | null>(() =>
        selectedMode === 'addition' ? generateAdditionTask() : null
    )

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
                        <div className="space-y-3">
                            <p className="text-sm leading-6 text-slate-300">
                                Первая MVP-генерация пока доступна только для сложения.
                            </p>
                            <div className="rounded-2xl border border-cyan-900 bg-slate-950 p-5">
                                <p className="mb-2 text-sm text-slate-400">Задача</p>
                                <p className="text-3xl font-semibold tracking-tight">
                                    {task.expression}
                                </p>
                            </div>
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
