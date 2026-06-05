# Bahodir — Страхование (КАСКО / ОСАГО)

## ✅ Задача 1 выполнена

Страница страхования (`InsurancePage.jsx`) готова — принята. Спасибо!

---

## 🆕 Задача 2: страница «Контакты»

С формами вы поработали хорошо — теперь сверстаете страницу **контактов**.

### Новый файл

`src/pages/Bahodir/ContactsPage.jsx`

> Страница подключается к маршруту `/contacts` (сейчас там заглушка). Вы собираете компонент — подключение к маршруту сделает team lead после merge.

### Как открыть

Footer: **«Контакты»** → `/contacts`

### Что сверстать

- **Hero/заголовок** — «Свяжитесь с нами»
- **Карточки контактов** — телефон, email, адрес, часы работы (иконка + текст)
- **Форма обратной связи** — имя, телефон, сообщение + кнопка «Отправить»
- **Блок карты** — простая заглушка или Google Maps `<iframe>` (адрес)
- **Соцсети** — иконки Telegram, Instagram, YouTube
- **Филиалы** — несколько адресов офисов (карточки)

### Правила

- Используйте **Tailwind CSS**
- В форме на `onSubmit` вызывайте `e.preventDefault()` (бэкенд не нужен)
- Переиспользуйте стили форм/карточек со страницы страхования
- Проверьте через `npm run dev`

---

## GitHub — ваша ветка: `feature/bahodir`

> Полная шпаргалка: [`docs/GIT_GUIDE.ru.md`](../../GIT_GUIDE.ru.md)

```bash
git checkout main && git pull origin main
git checkout feature/bahodir
git merge origin/main
```

```bash
git add src/pages/Bahodir/
git commit -m "feat(bahodir): страница контактов"
git push -u origin feature/bahodir
```

**Как работать в команде:**
1. `git pull` — перед каждым сеансом обновляйте `main`
2. Работайте только в `feature/bahodir`
3. `git push` — отправляйте изменения на GitHub
4. Создайте **Pull Request** → после проверки **Merge** в `main`
