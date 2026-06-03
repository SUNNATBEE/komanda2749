# Asad — Yurilgan avto + mahsulot kartochkasi

## Fayllar

| Sahifa | Fayl | Figma |
|--------|------|-------|
| Ro'yxat | `src/pages/Asad/UsedCarsPage.jsx` | `figma/Asad-2.jpg` |
| Toyota Camry detali | `src/pages/Asad/CarDetailPage.jsx` | `figma/Asad.jpg`, `Asad-3.jpg` |
| Qo'shimcha | — | `figma/Asad-1.jpg` |

## Header orqali ochish

1. **Ro'yxat** — **«АВТО С ПРОБЕГОМ»** → `/used-cars`
2. **Detal** — `/used-cars/toyota-camry-2013`

## Vazifalar

**UsedCarsPage:** breadcrumb, filtr, kartochkalar, blog, SEO.

**CarDetailPage:** galereya, narx, bron qilish, kalkulyator, trade-in, o'xshash avtolar.

`useParams()` dan `slug` oling.

---

## GitHub — sizning branchingiz: `feature/asad`

> To'liq qo'llanma: [`docs/GIT_GUIDE.uz.md`](../../GIT_GUIDE.uz.md)

```bash
git clone https://github.com/TASHKILOT/2749.git && cd 2749 && npm install
git checkout main && git pull origin main
git checkout -b feature/asad
```

```bash
git add src/pages/Asad/
git commit -m "feat(asad): yurilgan avto ro'yxati tayyorlandi"
git push -u origin feature/asad
```

**Pull** — ish boshlashdan oldin:

```bash
git checkout main && git pull origin main
git checkout feature/asad && git merge origin/main
```

**Merge:** GitHub → Pull Request → `feature/asad` → `main` → Merge.
