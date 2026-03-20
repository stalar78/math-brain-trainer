import { ModeCard } from '../components/training/ModeCard'
import { trainingModes } from '../data/trainingModes'

interface HomePageProps {
  onStart: () => void
}

export function HomePage({ onStart }: HomePageProps) {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-12">
        <header className="mb-12">
          <span className="mb-4 inline-flex rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-sm text-slate-300">
            Math Brain Trainer
          </span>

          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Тренажёр математического мышления
          </h1>

          <p className="max-w-2xl text-lg text-slate-300">
            Веб-приложение для тренировки устного счёта, скорости мышления и
            вычислительных техник.
          </p>
        </header>

        <section className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {trainingModes.map((mode) => (
            <ModeCard key={mode.mode} mode={mode} />
          ))}
        </section>

        <section className="mb-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="mb-3 text-lg font-semibold">План ближайших шагов</h3>
          <ul className="space-y-2 text-slate-300">
            <li>• сделать экран выбора режима</li>
            <li>• создать первую модель тренировочной сессии</li>
            <li>• реализовать генерацию задач для addition</li>
            <li>• добавить localStorage для статистики</li>
          </ul>
        </section>

        <div className="mt-auto">
          <button
            type="button"
            onClick={onStart}
            className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-blue-500"
          >
            Начать тренировку
          </button>
        </div>
      </div>
    </main>
  )
}