# Behruz — Toyota Camry landing

## ✅ 1-vazifa bajarildi

Camry landing sahifasi (`CamryPage.jsx`) tayyor — qabul qilindi. Zo'r ish!

---

## 🆕 2-vazifa: «Sравнение» — avtolarni taqqoslash sahifasi

Camry sahifasini yaxshi yig'gansiz, endi shu tajriba bilan **avto taqqoslash** sahifasini yasaysiz.

### Yangi fayl

`src/pages/Behruz/ComparePage.jsx`

> Sahifa `/compare` route'iga ulanadi (hozir u placeholder). Komponentni yig'asiz — route'ga ulashni team lead qiladi (merge'dan keyin).

### Sahifani ochish

Header/Footer: **«Сравнение»** → `/compare`

### Nimalar yig'iladi

- **Sarlavha** — «Avtolarni taqqoslash»
- **2-3 ta avto ustun** — har biri kartochka: rasm, model, narx, «O'chirish» tugmasi
- **«+ Avto qo'shish»** bo'sh ustuni
- **Xususiyatlar jadvali** — qatorlar bo'yicha taqqoslash: dvigatel, quvvat, yoqilg'i sarfi, uzatma, narx va h.k.
- **Farqlarni ajratib ko'rsatish** — bir xil bo'lmagan qatorlarni rang bilan belgilash (bonus)
- Ma'lumotlar uchun oddiy `const cars = [...]` massivi yetarli (backend shart emas)

### Qoidalar

- **Tailwind CSS**, mobil ko'rinishda jadval gorizontal scroll bo'lsin
- Camry sahifasidagi kartochka uslublarini qayta ishlating
- `npm run dev` bilan tekshiring

---

## GitHub — sizning branchingiz: `feature/behruz`

> To'liq qo'llanma: [`docs/GIT_GUIDE.uz.md`](../../GIT_GUIDE.uz.md)

```bash
git checkout main && git pull origin main
git checkout feature/behruz
git merge origin/main
```

```bash
git add src/pages/Behruz/
git commit -m "feat(behruz): avtolarni taqqoslash sahifasi"
git push -u origin feature/behruz
```

**Pull Request (merge) qadamlari:**
1. `feature/behruz` ga push qiling
2. GitHub → **Pull requests** → **New pull request**
3. Base: `main` ← Compare: `feature/behruz`
4. **Create pull request**
5. Tasdiqlangandan keyin → **Merge pull request**
