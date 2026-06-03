# Behruz — Toyota Camry (лендинг)

## Файл

`src/pages/Behruz/CamryPage.jsx`

## Макеты

`figma/Behruz.jpg`, `figma/Behruz-1.jpg`

## Как открыть

Header (второй ряд): **«Toyota Camry»** → `/camry`

## Что сверстать

- Hero: цена «от 1 500 000 ₽», цвета, форма заявки
- Комплектация Active (безопасность, экстерьер, интерьер)
- Промо-сетка 2×3, trade-in баннер
- Технические характеристики, список комплектаций
- Экспресс-кредит, похожие предложения, видео-отзывы

## Компоненты

`src/pages/Behruz/components/` — по одному блоку на секцию макета.

---

## GitHub — ваша ветка: `feature/behruz`

> Полная шпаргалка: [`docs/GIT_GUIDE.ru.md`](../../GIT_GUIDE.ru.md)

```bash
git clone https://github.com/TASHKILOT/2749.git && cd 2749 && npm install
git checkout main && git pull origin main
git checkout -b feature/behruz
```

```bash
git add src/pages/Behruz/
git commit -m "feat(behruz): hero Camry и комплектация"
git push -u origin feature/behruz
```

**Pull Request (merge):**
1. Push в `feature/behruz`
2. GitHub → **Pull requests** → **New pull request**
3. Base: `main` ← Compare: `feature/behruz`
4. Описание + **Create pull request**
5. После одобрения → **Merge pull request**
