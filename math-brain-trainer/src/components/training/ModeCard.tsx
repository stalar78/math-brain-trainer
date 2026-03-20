import type { TrainingModeCard } from '../../entities/training/model'

interface ModeCardProps {
    mode: TrainingModeCard
}

export function ModeCard({ mode }: ModeCardProps) {
    return (
        <article className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-sm transition-transform duration-200 hover:-translate-y-1">
            <div className="mb-3 flex items-center justify-between gap-3">
                <h2 className="text-xl font-semibold">{mode.title}</h2>
                <span className="rounded-full border border-emerald-700 bg-emerald-950 px-2.5 py-1 text-xs text-emerald-300">
                    {mode.isActive ? 'Active' : 'Planned'}
                </span>
            </div>

            <p className="mb-4 text-sm leading-6 text-slate-300">{mode.description}</p>

            <div>
                <p className="mb-2 text-xs uppercase tracking-wide text-slate-400">
                    Techniques
                </p>

                <div className="flex flex-wrap gap-2">
                    {mode.availableTechniques.map((technique) => (
                        <span
                            key={technique}
                            className="rounded-full border border-slate-700 bg-slate-800 px-2.5 py-1 text-xs text-slate-300"
                        >
                            {technique}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    )
}