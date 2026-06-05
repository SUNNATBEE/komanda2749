# Behruz — Toyota Camry (лендинг)

## ✅ Задача 1 выполнена

Лендинг Camry (`CamryPage.jsx`) готов — принят. Отличная работа!

---

## 🆕 Задача 2: страница «Сравнение» автомобилей

Camry вы собрали отлично — теперь с этим опытом сверстаете страницу **сравнения авто**.

### Новый файл

`src/pages/Behruz/ComparePage.jsx`

> Страница подключается к маршруту `/compare` (сейчас там заглушка). Вы собираете компонент — подключение к маршруту сделает team lead после merge.

### Как открыть

Header/Footer: **«Сравнение»** → `/compare`

### Что сверстать

- **Заголовок** — «Сравнение автомобилей»
- **2-3 колонки авто** — в каждой карточка: фото, модель, цена, кнопка «Удалить»
- **Пустая колонка «+ Добавить авто»**
- **Таблица характеристик** — построчное сравнение: двигатель, мощность, расход, КПП, цена и т.д.
- **Подсветка различий** — выделять цветом строки, где значения отличаются (бонус)
- Данные можно держать в простом массиве `const cars = [...]` (бэкенд не нужен)

### Правила

- **Tailwind CSS**, на мобильном таблица — с горизонтальным скроллом
- Переиспользуйте стили карточек со страницы Camry
- Проверьте через `npm run dev`

---

## GitHub — ваша ветка: `feature/behruz`

> Полная шпаргалка: [`docs/GIT_GUIDE.ru.md`](../../GIT_GUIDE.ru.md)

```bash
git checkout main && git pull origin main
git checkout feature/behruz
git merge origin/main
```

```bash
git add src/pages/Behruz/
git commit -m "feat(behruz): страница сравнения авто"
git push -u origin feature/behruz
```

**Pull Request (merge):**
1. Push в `feature/behruz`
2. GitHub → **Pull requests** → **New pull request**
3. Base: `main` ← Compare: `feature/behruz`
4. Описание + **Create pull request**
5. После одобрения → **Merge pull request**
