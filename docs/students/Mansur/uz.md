# Mansur — Bosh sahifa va «Taksi kreditga»

## Sizning mas'uliyatingiz

Siz **sahifa kontentini** yozasiz. Header va Footer tayyor — ularni jamoa kelishuvisiz o'zgartirmang.

## Kod yozish fayllari

| Sahifa | Fayl | Figma maketi |
|--------|------|--------------|
| Bosh sahifa | `src/pages/Mansur/HomePage.jsx` | `figma/Mansur.jpg` |
| Taksi kreditga | `src/pages/Mansur/TaxiCreditPage.jsx` | `figma/Mansur.jpg` (pastki qismlar) |

## Header orqali sahifangizni ochish

1. **Bosh sahifa** — Header chapidagi **ABC AUTO** logotipini yoki ikkinchi qatordagi **«Главная»** ni bosing → `/`
2. **Taksi kreditga** — Header/Footer dagi **«ТАКСИ В КРЕДИТ»** tugmasini bosing → `/taxi-credit`

## Bosh sahifada nima qilish kerak

- Hero-slayder, avto filtri, «наличиида» kartochkalar
- «Bizning tanlovlar», maxsus takliflar, avtokredit arizasi
- Hamkor banklar, ishonch, sharhlar, kompaniya haqida, blog, xarita

## Qoidalar

- **Tailwind CSS** ishlating
- `npm run dev` bilan tekshiring

---

## GitHub — sizning branchingiz: `feature/mansur`

> To'liq qo'llanma: [`docs/GIT_GUIDE.uz.md`](../../GIT_GUIDE.uz.md)

### Tez boshlash

```bash
git clone https://github.com/TASHKILOT/2749.git
cd 2749
npm install
git checkout main
git pull origin main
git checkout -b feature/mansur
```

### Har kungi ish tartibi

```bash
# 1. main ni yangilash va o'z branch'iga qaytish
git checkout main && git pull origin main
git checkout feature/mansur
git merge origin/main

# 2. HomePage.jsx / TaxiCreditPage.jsx da ishlagandan keyin
git status
git add src/pages/Mansur/
git commit -m "feat(mansur): bosh sahifa hero qo'shildi"
git push -u origin feature/mansur

# 3. GitHub → Pull Request → feature/mansur → main → Merge
```

### Buyruqlar ma'nosi

| Buyruq | Vazifasi |
|--------|----------|
| `git pull` | GitHubdan yangi kod olish |
| `git checkout -b feature/mansur` | O'z branch'ingizni yaratish |
| `git add .` | O'zgarishlarni tayyorlash |
| `git commit -m "..."` | Lokal saqlash |
| `git push` | GitHubga yuborish |
| **Merge (PR)** | Tekshiruvdan keyin `main` ga qo'shish |
