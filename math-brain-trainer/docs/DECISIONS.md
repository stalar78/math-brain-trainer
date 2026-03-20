# DECISIONS

## D-001: Web-first implementation
### Decision
Проект делаем как веб-приложение.

### Why
- удобно разрабатывать в React
- легко выложить онлайн позже
- кроссплатформенность
- быстрый доступ через браузер

## D-002: Stack = React + TypeScript + Vite
### Decision
Используем React, TypeScript и Vite.

### Why
- React удобен для экранов и интерактивности
- TypeScript помогает удерживать структуру
- Vite даёт быстрый старт и простой dev experience

## D-003: Tailwind CSS for UI
### Decision
Используем Tailwind CSS.

### Why
- быстрое создание аккуратного интерфейса
- удобно для MVP
- меньше возни со стилями на старте

## D-004: localStorage as first persistence layer
### Decision
На первом этапе храним данные в localStorage.

### Why
- не нужен backend
- быстро для MVP
- достаточно для личного тренажёра
- легко заменить на облачное хранилище позже

## D-005: No backend in MVP
### Decision
Backend не делаем на первом этапе.

### Why
- фокус на core value: тренировка задач
- меньше сложности
- быстрее получить рабочий продукт

## D-006: Step-by-step GPT-assisted development
### Decision
Разработка идёт малыми шагами через GPT.

### Why
- пользователь вручную создаёт файлы
- важно получать полный код для каждого шага
- важна прозрачность и контроль

## D-007: Project is a technique trainer, not just random quiz app
### Decision
Проект строится как тренажёр математических техник.

### Why
- источник вдохновения указывает именно на развитие приёмов
- это делает приложение полезнее
- это создаёт осмысленную прогрессию обучения

## D-008: Four foundational domains first
### Decision
Сначала реализуем 4 базовых направления:
- addition
- subtraction
- multiplication
- division

### Why
- это естественный фундамент
- соответствует исходной идее тренажёра
- упрощает MVP

## D-009: Keep architecture simple at start
### Decision
Не использовать сложный state manager и тяжёлые паттерны на старте.

### Why
- проект должен быть понятным
- MVP должен быть быстрым в реализации
- преждевременная сложность замедлит развитие
