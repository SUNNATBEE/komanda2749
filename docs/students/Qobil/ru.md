# Qobil — Каталог авто

## Файл для кода

`src/pages/Qobil/CatalogPage.jsx`

## Макет

`figma/Qobil.jpg`

## Как открыть страницу

В Header или Footer нажмите **«КАТАЛОГ АВТО»** → маршрут `/catalog`

Дополнительно: **«Подбор авто»** во втором ряду меню ведёт на ту же страницу.

## Что сверстать

- Сетка логотипов брендов
- «Быстрый подбор авто»: слайдер цены, фильтры, кнопка «ПОКАЗАТЬ 73»
- Карточки автомобилей (Skoda Octavia)
- «ПОКАЗАТЬ ЕЩЁ», SEO-блоки с заголовками

## Компоненты (рекомендуется)

Создайте в `src/pages/Qobil/components/`:

- `BrandGrid.jsx`
- `CarFilter.jsx`
- `CarCard.jsx`

Импортируйте их в `CatalogPage.jsx`.

---

## GitHub — ваша ветка: `feature/qobil`

> Полная шпаргалка: [`docs/GIT_GUIDE.ru.md`](../../GIT_GUIDE.ru.md)

```bash
git clone https://github.com/TASHKILOT/2749.git && cd 2749 && npm install
git checkout main && git pull origin main
git checkout -b feature/qobil
```

```bash
# После работы над CatalogPage.jsx и components/
git add src/pages/Qobil/
git commit -m "feat(qobil): добавил сетку брендов и фильтр"
git push -u origin feature/qobil
```

| Команда | Действие |
|---------|----------|
| `git pull` | Получить обновления с GitHub |
| `git push` | Отправить ваш код на GitHub |
| `git merge origin/main` | Подтянуть изменения main в вашу ветку |
| **Pull Request → Merge** | Слить `feature/qobil` в `main` после ревью |
