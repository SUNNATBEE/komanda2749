# Mansur — Главная и «Такси в кредит»

## Ваша зона ответственности

Вы разрабатываете **контент страниц**, не Header и не Footer — они уже готовы.

## Файлы для кода

| Страница | Файл | Макет Figma |
|----------|------|-------------|
| Главная | `src/pages/Mansur/HomePage.jsx` | `figma/Mansur.jpg` |
| Такси в кредит | `src/pages/Mansur/TaxiCreditPage.jsx` | `figma/Mansur.jpg` (нижние блоки) |

## Как открыть вашу страницу из Header

1. **Главная** — нажмите логотип **ABC AUTO** (слева в шапке) или пункт **«Главная»** во втором ряду меню → маршрут `/`
2. **Такси в кредит** — нажмите **«ТАКСИ В КРЕДИТ»** в основной навигации (третий ряд Header) или в Footer → маршрут `/taxi-credit`

## Что сверстать на главной

- Hero-слайдер «Грандиозная распродажа»
- Фильтр / подбор авто по брендам
- Блок «Автомобили в наличии» (карточки)
- «Наши подборки», спецпредложения, заявка на автокредит
- Банки-партнёры, «Нам доверяют», отзывы, о компании, блог, карта

## Правила

- Используйте **Tailwind CSS**
- Не удаляйте `MainLayout`, Header, Footer
- После правок: `npm run dev` и проверьте переходы по меню

---

## GitHub — ваша ветка: `feature/mansur`

> Полная шпаргалка: [`docs/GIT_GUIDE.ru.md`](../../GIT_GUIDE.ru.md)

### Быстрый старт

```bash
git clone https://github.com/TASHKILOT/2749.git
cd 2749
npm install
git checkout main
git pull origin main
git checkout -b feature/mansur
```

### Ежедневный цикл

```bash
# 1. Обновить main и вернуться в свою ветку
git checkout main && git pull origin main
git checkout feature/mansur
git merge origin/main

# 2. После правок в HomePage.jsx / TaxiCreditPage.jsx
git status
git add src/pages/Mansur/
git commit -m "feat(mansur): сверстал hero-секцию главной"
git push -u origin feature/mansur

# 3. На GitHub → Pull Request → feature/mansur → main → Merge
```

### Что означают команды

| Команда | Действие |
|---------|----------|
| `git pull` | Скачать новые изменения с GitHub |
| `git checkout -b feature/mansur` | Создать и перейти в свою ветку |
| `git add .` | Подготовить файлы к сохранению |
| `git commit -m "..."` | Сохранить изменения локально |
| `git push` | Отправить коммиты на GitHub |
| **Merge (PR)** | Объединить вашу ветку с `main` после проверки |
