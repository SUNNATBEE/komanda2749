# Mirlan — Maxsus takliflar

## ✅ 1-vazifa bajarildi

Maxsus takliflar sahifasi (`OffersPage`) tayyor — qabul qilindi. Rahmat!

> ⚠️ **Kichik tartib:** papkangizda ortiqcha fayllar bor —
> `Camry.jsx`, `Comry.jsx`, `Rasm.jsx`, `Tayo.jsx`, `Toyota.jsx`.
> 2-vazifa bilan birga **ishlatilmayotganlarini o'chiring**, faqat kerakli fayllar qolsin
> (`OffersPage.jsx` va u import qiladigan fayllar).

---

## 🆕 2-vazifa: «Отзывы» — sharhlar sahifasi

### Yangi fayl

`src/pages/Mirlan/ReviewsPage.jsx`

> Sahifa `/reviews` route'iga ulanadi (hozir u placeholder). Komponentni yig'asiz — route'ga ulashni team lead qiladi (merge'dan keyin).

### Sahifani ochish

Footer: **«Отзывы»** → `/reviews`

### Nimalar yig'iladi

- **Sarlavha** — «Mijozlar sharhlari» + umumiy reyting (masalan ⭐ 4.8 / 5)
- **Sharh kartochkalari (grid)** — har biri: avatar, ism, yulduzcha reyting, sana, matn
- **Filtr/saralash** — «Hammasi / 5★ / 4★ …» tugmalari (oddiy `useState` bilan)
- **Sharh qoldirish formasi** — ism, reyting (yulduzchalar), matn + «Yuborish»
- Ma'lumotlar uchun oddiy `const reviews = [...]` massivi yetarli (backend shart emas)

### Qoidalar

- **Tailwind CSS** ishlating
- Offers sahifasidagi kartochka uslublarini qayta ishlating
- `npm run dev` bilan tekshiring

---

## GitHub — sizning branchingiz: `feature/mirlan`

> To'liq qo'llanma: [`docs/GIT_GUIDE.uz.md`](../../GIT_GUIDE.uz.md)

```bash
git checkout main && git pull origin main
git checkout feature/mirlan
git merge origin/main
```

```bash
git add src/pages/Mirlan/
git commit -m "feat(mirlan): sharhlar sahifasi"
git push -u origin feature/mirlan
```

**Buyruqlar jadvali:**

| Harakat | Buyruq |
|---------|--------|
| main yangilash | `git checkout main && git pull origin main` |
| Saqlash | `git add . && git commit -m "xabar"` |
| Yuborish | `git push -u origin feature/mirlan` |
| main ga qo'shish | Pull Request → Merge |
