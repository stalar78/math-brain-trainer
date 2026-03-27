import { trainingModes } from '../data/trainingModes'
import type { TrainingMode } from '../entities/training/types'

interface ModeSelectPageProps {
    onBack: () => void
    onSelectMode: (mode: TrainingMode) => void
    selectedMode: TrainingMode | null
}

export function ModeSelectPage({
    onBack,
    onSelectMode,
    selectedMode,
}: ModeSelectPageProps) {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-100">
            <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-12">
                <div className="mb-8 flex items-center justify-between gap-4">
                    <div>
                        <p className="mb-2 text-sm text-slate-400">Math Brain Trainer</p>
                        <h1 className="text-3xl font-bold tracking-tight">
                            Выбор режима тренировки
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

                <section className="grid gap-4 sm:grid-cols-2">
                    {trainingModes.map((mode) => (
                        <button
                            key={mode.mode}
                            type="button"
                            onClick={() => onSelectMode(mode.mode)}
                            className={`rounded-2xl border p-5 text-left transition ${
                                selectedMode === mode.mode
                                    ? 'border-cyan-500 bg-slate-800 shadow-lg shadow-cyan-950/40'
                                    : 'border-slate-800 bg-slate-900 hover:border-slate-700 hover:bg-slate-800'
                            }`}
                        >
                            <div className="mb-3 flex items-center justify-between gap-3">
                                <h2 className="text-xl font-semibold">{mode.title}</h2>
                                <span className="rounded-full border border-emerald-700 bg-emerald-950 px-2.5 py-1 text-xs text-emerald-300">
                                    {mode.isActive ? 'Active' : 'Planned'}
                                </span>
                            </div>

                            <p className="mb-4 text-sm leading-6 text-slate-300">
                                {mode.description}
                            </p>

                            <p className="text-sm text-slate-400">
                                Техник доступно: {mode.availableTechniques.length}
                            </p>
                        </button>
                    ))}
                </section>
            </div>
        </main>
    )
}
