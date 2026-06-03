# ABC AUTO — командный проект

React + Vite + Tailwind CSS + React Router DOM.

## Структура

| Папка | Назначение |
|-------|------------|
| `src/components/header/` | Header (готово — не менять без согласования) |
| `src/components/footer/` | Footer (готово) |
| `src/pages/{Имя}/` | Страница каждого студента |
| `figma/` | Макеты JPG по именам |
| `docs/students/{Имя}/` | Инструкции `ru.md` и `uz.md` |

## Запуск

```bash
npm install
npm run dev
```

## Навигация (Header → страница)

| Кнопка в Header/Footer | Маршрут | Студент |
|------------------------|---------|---------|
| Логотип ABC AUTO | `/` | Mansur |
| КАТАЛОГ АВТО | `/catalog` | Qobil |
| АВТО С ПРОБЕГОМ | `/used-cars` | Asad |
| КРЕДИТ И РАССРОЧКА | `/credit` | Odil |
| СПЕЦПРЕДЛОЖЕНИЯ | `/offers` | Mirlan |
| ТАКСИ В КРЕДИТ | `/taxi-credit` | Mansur |
| Страхование (втор. меню) | `/insurance` | Bahodir |
| Модели Toyota | `/models` | Azamat |
| Toyota Camry | `/camry` | Behruz |

## Git и GitHub

Подробные инструкции для каждого студента — в `docs/students/{Имя}/ru.md` и `uz.md`.

Общая шпаргалка:
- [`docs/GIT_GUIDE.ru.md`](GIT_GUIDE.ru.md)
- [`docs/GIT_GUIDE.uz.md`](GIT_GUIDE.uz.md)

**Имена веток команды:**

| Студент | Ветка |
|---------|-------|
| Mansur | `feature/mansur` |
| Qobil | `feature/qobil` |
| Asad | `feature/asad` |
| Odil | `feature/odil` |
| Bahodir | `feature/bahodir` |
| Azamat | `feature/azamat` |
| Behruz | `feature/behruz` |
| Mirlan | `feature/mirlan` |
