import { useState } from 'react'
import { HomePage } from '../pages/HomePage'
import { ModeSelectPage } from '../pages/ModeSelectPage'
import { TrainingPage } from '../pages/TrainingPage'
import type { TrainingMode } from '../entities/training/types'

type AppScreen = 'home' | 'mode-select' | 'training'

export function AppShell() {
    const [screen, setScreen] = useState<AppScreen>('home')
    const [selectedMode, setSelectedMode] = useState<TrainingMode | null>(null)

    const handleSelectMode = (mode: TrainingMode) => {
        setSelectedMode(mode)
        setScreen('training')
    }

    if (screen === 'training' && selectedMode) {
        return (
            <TrainingPage
                selectedMode={selectedMode}
                onBack={() => setScreen('mode-select')}
            />
        )
    }

    if (screen === 'mode-select') {
        return (
            <ModeSelectPage
                onBack={() => setScreen('home')}
                onSelectMode={handleSelectMode}
                selectedMode={selectedMode}
            />
        )
    }

    return <HomePage onStart={() => setScreen('mode-select')} />
}
