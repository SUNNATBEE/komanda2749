# Mansur — Bosh sahifa va «Taksi kreditga»

## ✅ 1-vazifa bajarildi

Bosh sahifa (`HomePage.jsx`) tayyor — qabul qilindi. Rahmat!

---

## 🆕 2-vazifa: «Taksi kreditga» sahifasi

Hozir bu sahifa **bo'sh** (faqat placeholder turibdi). Endi uni to'liq yig'ish kerak.

### Fayl

`src/pages/Mansur/TaxiCreditPage.jsx`

### Figma maketi

`figma/Mansur.jpg` — sahifaning **pastki/taksi bo'limlari**

### Sahifani ochish

Header (3-qator) yoki Footer'dagi **«ТАКСИ В КРЕДИТ»** tugmasi → `/taxi-credit`

### Nimalar yig'iladi

- **Hero** — «Таксига kreditga avto» sarlavhasi, ariza formasi (ism, telefon)
- **Shartlar bloki** — boshlang'ich to'lov, oylik to'lov, muddat (kartochkalar)
- **Mavjud avtolar** — taksi uchun modellar ro'yxati (kartochka + narx + «Ariza»)
- **Hamkor banklar** logotiplari
- **Qadamlar** — «Ariza → Tasdiq → Avtoni olish» (3-4 qadam)
- **FAQ** — tez-tez beriladigan savollar (accordion)

### Qoidalar

- **Tailwind CSS** ishlating
- Bosh sahifadagi kartochka/uslublarni qayta ishlating (bir xil ko'rinish)
- `npm run dev` bilan tekshiring — menyudagi o'tishlar ishlashi kerak

---

## GitHub — sizning branchingiz: `feature/mansur`

> To'liq qo'llanma: [`docs/GIT_GUIDE.uz.md`](../../GIT_GUIDE.uz.md)

### Har kungi ish tartibi

```bash
# 1. main ni yangilash va o'z branch'iga o'tish
git checkout main && git pull origin main
git checkout feature/mansur
git merge origin/main

# 2. TaxiCreditPage.jsx da ishlagandan keyin
git add src/pages/Mansur/
git commit -m "feat(mansur): taksi kreditga sahifasi"
git push -u origin feature/mansur

# 3. GitHub → Pull Request → feature/mansur → main → Merge
```

| Buyruq | Vazifasi |
|--------|----------|
| `git pull` | GitHubdan yangi kod olish |
| `git add .` | O'zgarishlarni tayyorlash |
| `git commit -m "..."` | Lokal saqlash |
| `git push` | GitHubga yuborish |
| **Merge (PR)** | Tekshiruvdan keyin `main` ga qo'shish |
