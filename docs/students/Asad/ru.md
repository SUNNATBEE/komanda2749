# Asad — Авто с пробегом + карточка товара

## Файлы для кода

| Страница | Файл | Макет |
|----------|------|-------|
| Список б/у авто | `src/pages/Asad/UsedCarsPage.jsx` | `figma/Asad-2.jpg` |
| Карточка Toyota Camry | `src/pages/Asad/CarDetailPage.jsx` | `figma/Asad.jpg`, `figma/Asad-3.jpg` |
| Доп. референс (сетка брендов) | — | `figma/Asad-1.jpg` |

## Как открыть

1. **Список** — Header/Footer: **«АВТО С ПРОБЕГОМ»** → `/used-cars`
2. **Карточка авто** — с списка ссылка «Подробнее» или URL `/used-cars/toyota-camry-2013`

## Список (`UsedCarsPage`)

- Хлебные крошки: Главная / Авто с пробегом
- Фильтр по брендам, быстрый подбор
- Сетка карточек Toyota Camry 2013
- Блок «Блог», SEO-текст

## Карточка (`CarDetailPage`)

- Галерея, цена 850 000 ₽, характеристики
- «Забронировать онлайн», «Купить в кредит»
- Промо, кредитный калькулятор, описание, trade-in, похожие авто

## Роутинг

Параметр `:slug` в `AppRouter` уже настроен — используйте `useParams()` из `react-router-dom`.

---

## GitHub — ваша ветка: `feature/asad`

> Полная шпаргалка: [`docs/GIT_GUIDE.ru.md`](../../GIT_GUIDE.ru.md)

```bash
git clone https://github.com/TASHKILOT/2749.git && cd 2749 && npm install
git checkout main && git pull origin main
git checkout -b feature/asad
```

```bash
# Коммитьте только свою папку
git add src/pages/Asad/
git commit -m "feat(asad): сверстал список авто с пробегом"
git push -u origin feature/asad
```

**Pull** перед работой — чтобы не конфликтовать с командой:

```bash
git checkout main && git pull origin main
git checkout feature/asad && git merge origin/main
```

**Merge:** GitHub → New Pull Request → `feature/asad` → `main` → Review → Merge pull request.
