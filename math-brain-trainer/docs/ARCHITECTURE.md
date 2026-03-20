# ARCHITECTURE

## Project
Math Brain Trainer

## Goal
Веб-приложение для тренировки математического мышления, скорости счёта, точности и устойчивых вычислительных навыков через пошаговую практику.

## Stack
- React
- TypeScript
- Vite
- Tailwind CSS
- localStorage

## Architecture Principles
1. Простая модульная структура
2. Чёткое разделение UI и логики
3. Расширяемость под новые режимы
4. Минимум зависимостей на старте
5. Лёгкость ручной разработки через VS Code
6. Все базовые сущности описаны типами

## High-Level Modules

### 1. App Layer
Отвечает за:
- запуск приложения
- инициализацию глобального layout
- переключение экранов
- базовую навигацию MVP

### 2. Pages / Screens
Основные экраны:
- HomePage
- ModeSelectPage
- TrainingPage
- ResultPage
- StatsPage

### 3. Features
Фичи уровня пользователя:
- выбор режима
- запуск сессии
- прохождение сессии
- завершение сессии
- просмотр статистики

### 4. Entities
Ключевые сущности:
- TrainingMode
- Task
- Session
- SessionResult
- UserStats
- Technique

### 5. Task Engine
Отвечает за:
- генерацию задач
- проверку ответов
- вычисление правильного ответа
- выбор сложности
- выбор техник

### 6. Persistence Layer
На старте:
- localStorage
Хранит:
- общую статистику
- рекорды
- историю сессий
- пользовательские настройки

## Folder Strategy

src/
- app/
- pages/
- components/
- features/
- entities/
- shared/
- services/
- utils/
- data/

## Recommended Logical Boundaries

### UI
Компоненты интерфейса без бизнес-логики.

### Business Logic
Генерация задач, расчёт результатов, правила сложности.

### Storage
Работа с localStorage через отдельные helper/service функции.

### Domain Types
Все типы и интерфейсы должны быть вынесены отдельно.

## Initial Training Domains

### Addition
Техники:
- make tens
- round numbers
- repeated numbers grouping
- split into chunks

### Subtraction
Техники:
- subtraction by complement
- split into chunks
- fast subtraction from 100 / 1000 / 10000

### Multiplication
Техники:
- multiply by 5
- multiply by 11

### Division
Техники:
- divide by 2 using groups
- divide by 5 using divide-by-10 then multiply-by-2 rule

## MVP Architecture Decision
На MVP этапе:
- без backend
- без авторизации
- без синхронизации между устройствами
- без сложного state manager

Будет использоваться:
- React state
- props
- utility functions
- localStorage services

## Future Expansion
После MVP возможно добавить:
- React Router
- Supabase/Firebase
- аккаунты
- облачный прогресс
- adaptive difficulty
- daily challenges
- achievements
- spaced repetition


текущее состояние экранов
app flow
current navigation strategy


сейчас навигация идёт через AppShell и локальный state
текущие экраны: HomePage, ModeSelectPage
ModeCard вынесен в отдельный UI-компонент
режимы хранятся в src/data/trainingModes.ts