# Odil — Кредит и рассрочка

## Файл

`src/pages/Odil/CreditPage.jsx`

## Макет

`figma/Odil.jpg`

## Как открыть

Header/Footer: **«КРЕДИТ И РАССРОЧКА»** → `/credit`

В Footer ссылки «Экспресс-кредит», «Trade-in» и др. тоже ведут на `/credit`.

## Что сверстать

1. Hero «Экспресс-кредит» с формой
2. «Преимущества программы» (4 иконки)
3. Секции 1–4 с макета: выбор авто, калькулятор, Trade-in, персональные данные
4. Банки-партнёры, отзывы, условия и документы

## Подсказка

Нумерованные круги 1–4 на макете — отдельные компоненты в `src/pages/Odil/components/`.

---

## GitHub — ваша ветка: `feature/odil`

> Полная шпаргалка: [`docs/GIT_GUIDE.ru.md`](../../GIT_GUIDE.ru.md)

```bash
git clone https://github.com/TASHKILOT/2749.git && cd 2749 && npm install
git checkout main && git pull origin main
git checkout -b feature/odil
```

```bash
git add src/pages/Odil/
git commit -m "feat(odil): секция экспресс-кредита"
git push -u origin feature/odil
```

| Термин | Объяснение |
|--------|------------|
| **Branch** | Ваша личная ветка `feature/odil` |
| **Push** | Загрузить код на GitHub |
| **Pull** | Скачать свежий код с GitHub |
| **Merge** | Влить ветку в `main` через Pull Request |
