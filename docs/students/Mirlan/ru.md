# Mirlan — Спецпредложения

## Файл

`src/pages/Mirlan/OffersPage.jsx`

## Макеты

`figma/Mirlan.jpg`, `figma/Mirlan-1.jpg`

## Как открыть

Header/Footer: **«СПЕЦПРЕДЛОЖЕНИЯ»** → `/offers`

## Что сверстать

- Hero Toyota Camry, цена от 4 790 000 ₽
- «Автомобили Toyota Camry в наличии» (список с кнопками «Забронировать»)
- Акция «Станьте владельцем…» с формой
- Интерьер (галерея), похожие предложения
- «Нам доверяют», отзывы, блог, SEO

## Sticky-меню с макета

«О модели», «Комплектации», «Характеристики» — якорная навигация внутри страницы (`id` + `scrollIntoView`).

---

## GitHub — ваша ветка: `feature/mirlan`

> Полная шпаргалка: [`docs/GIT_GUIDE.ru.md`](../../GIT_GUIDE.ru.md)

```bash
git clone https://github.com/TASHKILOT/2749.git && cd 2749 && npm install
git checkout main && git pull origin main
git checkout -b feature/mirlan
```

```bash
git add src/pages/Mirlan/
git commit -m "feat(mirlan): спецпредложения Camry"
git push -u origin feature/mirlan
```

**Все команды одной шпаргалкой:**

| Действие | Команда |
|----------|---------|
| Клонировать | `git clone URL` |
| Обновить main | `git checkout main && git pull origin main` |
| Новая ветка | `git checkout -b feature/mirlan` |
| Сохранить | `git add . && git commit -m "сообщение"` |
| Отправить | `git push -u origin feature/mirlan` |
| Слить в main | Pull Request → Merge на GitHub |
