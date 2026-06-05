# Mirlan — Спецпредложения

## ✅ Задача 1 выполнена

Страница спецпредложений (`OffersPage`) готова — принята. Спасибо!

> ⚠️ **Небольшая уборка:** в вашей папке есть лишние файлы —
> `Camry.jsx`, `Comry.jsx`, `Rasm.jsx`, `Tayo.jsx`, `Toyota.jsx`.
> Вместе с задачей 2 **удалите неиспользуемые**, оставьте только нужные
> (`OffersPage.jsx` и файлы, которые он импортирует).

---

## 🆕 Задача 2: страница «Отзывы»

### Новый файл

`src/pages/Mirlan/ReviewsPage.jsx`

> Страница подключается к маршруту `/reviews` (сейчас там заглушка). Вы собираете компонент — подключение к маршруту сделает team lead после merge.

### Как открыть

Footer: **«Отзывы»** → `/reviews`

### Что сверстать

- **Заголовок** — «Отзывы клиентов» + общий рейтинг (например ⭐ 4.8 / 5)
- **Сетка карточек отзывов** — в каждой: аватар, имя, звёздный рейтинг, дата, текст
- **Фильтр/сортировка** — кнопки «Все / 5★ / 4★ …» (через простой `useState`)
- **Форма отзыва** — имя, рейтинг (звёзды), текст + кнопка «Отправить»
- Данные можно держать в простом массиве `const reviews = [...]` (бэкенд не нужен)

### Правила

- Используйте **Tailwind CSS**
- Переиспользуйте стили карточек со страницы спецпредложений
- Проверьте через `npm run dev`

---

## GitHub — ваша ветка: `feature/mirlan`

> Полная шпаргалка: [`docs/GIT_GUIDE.ru.md`](../../GIT_GUIDE.ru.md)

```bash
git checkout main && git pull origin main
git checkout feature/mirlan
git merge origin/main
```

```bash
git add src/pages/Mirlan/
git commit -m "feat(mirlan): страница отзывов"
git push -u origin feature/mirlan
```

**Все команды одной шпаргалкой:**

| Действие | Команда |
|----------|---------|
| Обновить main | `git checkout main && git pull origin main` |
| Сохранить | `git add . && git commit -m "сообщение"` |
| Отправить | `git push -u origin feature/mirlan` |
| Слить в main | Pull Request → Merge на GitHub |
