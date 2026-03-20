const modes = [
    {
        title: 'Addition',
        description: 'Базовое сложение и техники вроде make tens.',
    },
    {
        title: 'Subtraction',
        description: 'Вычитание, дополнение и разбиение на части.',
    },
    {
        title: 'Multiplication',
        description: 'Базовое умножение, ×5 и ×11.',
    },
    {
        title: 'Division',
        description: 'Базовое деление, ÷2 и ÷5.',
    },
]

export function HomePage() {
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

                <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {modes.map((mode) => (
                        <article
                            key={mode.title}
                            className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-sm transition-transform duration-200 hover:-translate-y-1"
                        >
                            <h2 className="mb-2 text-xl font-semibold">{mode.title}</h2>
                            <p className="text-sm leading-6 text-slate-300">
                                {mode.description}
                            </p>
                        </article>
                    ))}
                </section>

                <section className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                    <h3 className="mb-3 text-lg font-semibold">План ближайших шагов</h3>
                    <ul className="space-y-2 text-slate-300">
                        <li>• описать доменные типы проекта</li>
                        <li>• добавить экран выбора режима</li>
                        <li>• сделать первую тренировочную сессию</li>
                        <li>• подключить localStorage для статистики</li>
                    </ul>
                </section>
            </div>
        </main>
    )
}