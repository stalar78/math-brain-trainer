# PROJECT_CONTEXT

## Project Name
Math Brain Trainer

## Project Type
Personal web application for brain training through math practice

## Main Idea
Создать интерактивный математический тренажёр, который помогает:
- быстрее считать
- точнее решать примеры
- осваивать вычислительные техники
- развивать уверенность в работе с числами

## Motivation
Проект делается сначала для личного использования, но в будущем может быть опубликован онлайн.

## Development Style
Проект разрабатывается через GPT в пошаговом режиме:
- GPT пишет код
- GPT объясняет код
- пользователь вручную создаёт файлы в VS Code
- пользователь вставляет код и проверяет результат

## Core Product Philosophy
Это не просто тренажёр на скорость.
Это тренажёр навыков и техник.

## Initial Scope
Первая версия должна включать:
- базовые режимы по 4 операциям
- генерацию задач
- проверку ответов
- результаты сессии
- локальную статистику

## User Experience Goals
- быстро начать тренировку
- понятный интерфейс
- короткие и ясные сессии
- ощущение прогресса
- минимум лишних действий

## Initial Mathematical Scope

### Addition
- базовые примеры
- поиск десяток
- круглые числа
- разбиение на части

### Subtraction
- базовое вычитание
- дополнение
- разбиение на части
- вычитание из 100 / 1000 / 10000

### Multiplication
- базовое умножение
- умножение на 5
- умножение на 11

### Division
- базовое деление
- деление на 2 через группы
- деление на 5

## Technical Constraints
- no backend in MVP
- simple architecture
- manual file creation by user
- code must be production-clean enough, but still beginner-friendly to assemble

## Long-Term Possibilities
- adaptive difficulty
- profiles
- streaks
- achievements
- cloud sync
- online deployment
- mobile-friendly design
- daily workouts
- technique lessons

## Current Implementation Snapshot
- есть стартовая UI-оболочка
- пока без router
- навигация на state
- режимы уже описаны typed-конфигом
- следующий шаг — training session model + first playable flow