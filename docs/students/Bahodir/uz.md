# Bahodir — Sug'urta (KASKO / OSAGO)

## ✅ 1-vazifa bajarildi

Sug'urta sahifasi (`InsurancePage.jsx`) tayyor — qabul qilindi. Rahmat!

---

## 🆕 2-vazifa: «Контакты» — kontaktlar sahifasi

Formalar bilan yaxshi ishladingiz, endi **kontaktlar** sahifasini yasaysiz.

### Yangi fayl

`src/pages/Bahodir/ContactsPage.jsx`

> Sahifa `/contacts` route'iga ulanadi (hozir u placeholder). Komponentni yig'asiz — route'ga ulashni team lead qiladi (merge'dan keyin).

### Sahifani ochish

Footer: **«Контакты»** → `/contacts`

### Nimalar yig'iladi

- **Hero/sarlavha** — «Biz bilan bog'laning»
- **Kontakt kartochkalari** — telefon, email, manzil, ish vaqti (ikonka + matn)
- **Aloqa formasi** — ism, telefon, xabar + «Yuborish» tugmasi
- **Xarita bloki** — oddiy placeholder yoki Google Maps `<iframe>` (manzil)
- **Ijtimoiy tarmoqlar** — Telegram, Instagram, YouTube ikonkalari
- **Filiallar** — bir nechta ofis manzili (kartochkalar)

### Qoidalar

- **Tailwind CSS** ishlating
- Forma `onSubmit` da `e.preventDefault()` qiling (backend shart emas)
- Sug'urta sahifasidagi forma/kartochka uslublarini qayta ishlating
- `npm run dev` bilan tekshiring

---

## GitHub — sizning branchingiz: `feature/bahodir`

> To'liq qo'llanma: [`docs/GIT_GUIDE.uz.md`](../../GIT_GUIDE.uz.md)

```bash
git checkout main && git pull origin main
git checkout feature/bahodir
git merge origin/main
```

```bash
git add src/pages/Bahodir/
git commit -m "feat(bahodir): kontaktlar sahifasi"
git push -u origin feature/bahodir
```

**Jamoada ishlash:**
1. `git pull` — har safar `main` ni yangilang
2. Faqat `feature/bahodir` da ishlang
3. `git push` — GitHubga yuboring
4. **Pull Request** oching → tekshiruvdan keyin **Merge**
