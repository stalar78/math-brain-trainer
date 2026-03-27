import { useState } from 'react'
import { HomePage } from '../pages/HomePage'
import { ModeSelectPage } from '../pages/ModeSelectPage'
import type { TrainingMode } from '../entities/training/types'

type AppScreen = 'home' | 'mode-select'

export function AppShell() {
    const [screen, setScreen] = useState<AppScreen>('home')
    const [selectedMode, setSelectedMode] = useState<TrainingMode | null>(null)

    if (screen === 'mode-select') {
        return (
            <ModeSelectPage
                onBack={() => setScreen('home')}
                onSelectMode={setSelectedMode}
                selectedMode={selectedMode}
            />
        )
    }

    return <HomePage onStart={() => setScreen('mode-select')} />
}
