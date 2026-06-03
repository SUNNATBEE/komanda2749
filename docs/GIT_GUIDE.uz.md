# GitHub — jamoa uchun qo'llanma (umumiy)

> Bu fayl har bir o'quvchi hujjatida **sizning branch nomingiz** bilan takrorlanadi.

## Asosiy tushunchalar

| Atama | Ma'nosi |
|-------|---------|
| **Repository (repo)** | GitHubdagi loyiha — barcha fayllar va o'zgarishlar tarixi |
| **Branch (tarmoq)** | Alohida ish yo'li. Har bir o'quvchi o'z branch'ida ishlaydi |
| **main** | Asosiy tarmoq — faqat tekshirilgan kod kiradi |
| **commit** | O'zgarishlarni saqlash (izoh bilan) |
| **push** | Commitlarni GitHubga yuborish |
| **pull** | GitHubdan yangi o'zgarishlarni olish |
| **merge** | Branch'ingizni `main` bilan birlashtirish (Pull Request orqali) |
| **Pull Request (PR)** | «Kodimni ko'rib chiqing va main ga qo'shing» so'rovi |

---

## 1. Birinchi marta — loyihani yuklab olish

```bash
git clone https://github.com/TASHKILOT/2749.git
cd 2749
npm install
npm run dev
```

## 2. Ish boshlashdan oldin — main ni yangilash

```bash
git checkout main
git pull origin main
```

**Nima uchun:** jamoadoshlarning oxirgi o'zgarishlarini olish, eski kodda ishlamaslik.

## 3. O'z branchingizni ochish

```bash
git checkout -b feature/SIZNING-ISMINGIZ
```

Misol: `git checkout -b feature/mansur`

**Nima uchun:** o'zgarishlaringiz boshqalarga xalaqit bermaydi.

## 4. Ishlash va saqlash (commit)

```bash
git status
git add .
git commit -m "feat: bosh sahifaga hero qo'shdim"
```

**Commit xabarlari:**
- `feat:` — yangi funksiya
- `fix:` — xato tuzatish
- `style:` — dizayn/CSS

## 5. GitHubga yuborish (push)

```bash
git push -u origin feature/SIZNING-ISMINGIZ
```

Keyingi safarlar:

```bash
git push
```

## 6. Pull Request — merge so'rovi

1. GitHubda repoga kiring
2. **Compare & pull request** tugmasini bosing
3. Nima qilganingizni yozing
4. Tekshiruvchi (o'qituvchi / team lead) tayinlang
5. Tasdiqlangandan keyin **Merge pull request**

**Merge** = kodingiz `main` ga tushadi.

## 7. Merge dan keyin

```bash
git checkout main
git pull origin main
git branch -d feature/SIZNING-ISMINGIZ
```

## 8. main yangilangan bo'lsa — o'z branch'ingizga olish

```bash
git checkout feature/SIZNING-ISMINGIZ
git fetch origin
git merge origin/main
```

**Conflict** chiqsa — faylni ochib, `<<<<<<<` belgilarini to'g'rilang:

```bash
git add .
git commit -m "fix: main bilan conflict hal qilindi"
git push
```

---

## Qilmaslik kerak

- `main` ga to'g'ridan-to'g'ri push qilmang
- `Header.jsx`, `Footer.jsx`, `AppRouter.jsx` ni ruxsatsiz o'zgartirmang
- `git push --force` umumiy branchlarda ishlatmang
- `.env`, parollar commit qilmang

## Foydali buyruqlar

```bash
git branch
git log --oneline -5
git diff
git stash
git stash pop
```
