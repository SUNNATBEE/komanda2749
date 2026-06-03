# Qobil — Avto katalogi

## Kod fayli

`src/pages/Qobil/CatalogPage.jsx`

## Figma

`figma/Qobil.jpg`

## Sahifani ochish

Header yoki Footer da **«КАТАЛОГ АВТО»** tugmasini bosing → `/catalog`

## Vazifa

- Brendlar logotiplari gridi
- Tez tanlash: narx slideri, filtrlar, «ПОКАЗАТЬ» tugmasi
- Avto kartochkalari, «yana ko'rsatish», SEO matn

## Tavsiya

Komponentlarni `src/pages/Qobil/components/` ichida ajrating.

---

## GitHub — sizning branchingiz: `feature/qobil`

> To'liq qo'llanma: [`docs/GIT_GUIDE.uz.md`](../../GIT_GUIDE.uz.md)

```bash
git clone https://github.com/TASHKILOT/2749.git && cd 2749 && npm install
git checkout main && git pull origin main
git checkout -b feature/qobil
```

```bash
git add src/pages/Qobil/
git commit -m "feat(qobil): brend grid va filtr qo'shildi"
git push -u origin feature/qobil
```

| Buyruq | Vazifasi |
|--------|----------|
| `git pull` | GitHubdan yangilanish olish |
| `git push` | O'z kodingizni yuborish |
| `git merge origin/main` | main dagi yangiliklarni branch'ga olish |
| **Pull Request → Merge** | `feature/qobil` ni `main` ga qo'shish |
