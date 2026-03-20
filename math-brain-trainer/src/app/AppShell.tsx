import { useState } from 'react'
import { HomePage } from '../pages/HomePage'
import { ModeSelectPage } from '../pages/ModeSelectPage'

type AppScreen = 'home' | 'mode-select'

export function AppShell() {
    const [screen, setScreen] = useState<AppScreen>('home')

    if (screen === 'mode-select') {
        return <ModeSelectPage onBack={() => setScreen('home')} />
    }

    return <HomePage onStart={() => setScreen('mode-select')} />
}