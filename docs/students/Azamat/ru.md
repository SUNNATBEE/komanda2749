# Azamat — Модели Toyota

## Файл

`src/pages/Azamat/ModelsPage.jsx`

## Макеты

`figma/Azamat.jpg`, `figma/Azamat-1.jpg`

## Как открыть

Header (второй ряд): **«Модели Toyota»** → `/models`

## Что сверстать

- Hero «Грандиозная распродажа Toyota»
- Модельный ряд (сетка Corolla, Camry и т.д.)
- Архивные модели, спецпредложения
- Госпрограмма -10%, преимущества
- Отзывы, блог, SEO-текст

## На макете Azamat.jpg меню

МОДЕЛИ, АВТО В НАЛИЧИИ, СПЕЦПРЕДЛОЖЕНИЯ — реализуйте якоря `#` внутри страницы или подстраницы в `src/pages/Azamat/`.

---

## GitHub — ваша ветка: `feature/azamat`

> Полная шпаргалка: [`docs/GIT_GUIDE.ru.md`](../../GIT_GUIDE.ru.md)

```bash
git clone https://github.com/TASHKILOT/2749.git && cd 2749 && npm install
git checkout main && git pull origin main
git checkout -b feature/azamat
```

```bash
git add src/pages/Azamat/
git commit -m "feat(azamat): модельный ряд Toyota"
git push -u origin feature/azamat
```

| Команда | Что делает |
|---------|------------|
| `git checkout -b feature/azamat` | Открыть свою ветку |
| `git add src/pages/Azamat/` | Добавить только ваши файлы |
| `git commit -m "..."` | Зафиксировать изменения |
| `git push` | Отправить на GitHub |
| `git pull origin main` | Подтянуть обновления команды |
| **Merge через PR** | Объединить с `main` |
