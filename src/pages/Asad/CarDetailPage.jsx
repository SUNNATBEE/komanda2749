import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import carImage from "../../assets/toyotoKamry2013.svg";
import girl1 from "../../assets/beautiful-girl-broker-holding-sale-600w-242280859 2.svg";
import girl2 from "../../assets/couple-hugging-laughing-near-wall 2.svg";
import girl3 from "../../assets/studio-shot-attractive-friendly-smiling-happy-caucasian-25s-woman-wearing-red-jacket-pointing-sideways-different-directions-smiling-presenting-choices-smiling-sugg 2.svg";

// ─── Reusable tiny components ───────────────────────────────────────────────

function Badge({ children }) {
  return (
    <span className="flex items-center gap-1 text-xs text-gray-600 bg-gray-100 rounded-full px-3 py-1">
      {children}
    </span>
  );
}

function RedSlider({ label, value, min, max, step, onChange, markers }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="w-full">
      <div className="flex justify-between mb-1">
        <span className="text-xs text-gray-500">{label}</span>
        <span className="text-xs font-bold text-gray-800">{value}{typeof value === "number" && label.includes("взнос") ? "%" : " мес."}</span>
      </div>
      <div className="relative h-5 flex items-center">
        <div className="w-full h-1 bg-gray-300 rounded-full">
          <div className="h-1 bg-red-600 rounded-full" style={{ width: `${pct}%` }} />
        </div>
        <input
          type="range" min={min} max={max} step={step} value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer h-5"
        />
        <div className="absolute w-4 h-4 bg-red-600 rounded-full border-2 border-white shadow-md pointer-events-none"
          style={{ left: `calc(${pct}% - 8px)` }} />
      </div>
      {markers && (
        <div className="flex justify-between mt-1">
          {markers.map((m) => <span key={m} className="text-[10px] text-gray-400">{m}</span>)}
        </div>
      )}
    </div>
  );
}

function SpecRow({ label, value }) {
  return (
    <div className="flex h-17 justify-between items-center py-3 border-b border-t border-gray-100 last:border-t-0">
      <span className="text-sm text-gray-600 max-w-[55%]">{label}</span>
      <span className="text-sm font-semibold text-gray-900">{value}</span>
    </div>
  );
}

function CarCard({ name }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="relative">
        <img src={carImage} alt={name} className="w-full h-36 object-cover" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600" />
        <div className="absolute top-2 right-2 flex gap-1">
          <button className="w-7 h-7 bg-white/90 rounded-full flex items-center justify-center shadow-sm">
            <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </button>
          <button onClick={() => setLiked(!liked)} className="w-7 h-7 bg-white/90 rounded-full flex items-center justify-center shadow-sm">
            <svg className="w-3.5 h-3.5" fill={liked ? "#dc2626" : "none"} stroke={liked ? "#dc2626" : "currentColor"} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-bold text-gray-900 text-sm mb-2">{name}</h3>
        <div className="grid grid-cols-2 gap-x-3 gap-y-0.5 text-[11px] text-gray-600 mb-2">
          <div><span className="font-semibold">Мощность:</span> <span className="text-red-600 font-bold">115 л.с.</span></div>
          <div><span className="font-semibold">Объем:</span> <span className="text-red-600 font-bold">1.2 л</span></div>
          <div><span className="font-semibold">Привод:</span> <span className="text-red-600 font-bold">передний</span></div>
          <div><span className="font-semibold">Кузов:</span> <span className="text-red-600 font-bold">внедорожник</span></div>
          <div><span className="font-semibold">КПП:</span> механика</div>
          <div><span className="font-semibold">Пробег:</span> 123456 км</div>
        </div>
        <p className="text-sm font-bold text-gray-900 mb-2">от 1 615 000 ₽ <span className="text-xs font-normal text-gray-500">от 115 000 ₽/мес</span></p>
        <div className="flex gap-1.5">
          <button className="flex-1 bg-red-600 hover:bg-red-700 text-white text-[11px] font-semibold py-1.5 rounded-lg transition-colors">Резерв онлайн</button>
          <button className="flex-1 bg-gray-800 hover:bg-gray-900 text-white text-[11px] font-semibold py-1.5 rounded-lg transition-colors">Купить</button>
          <button className="flex-1 border border-gray-300 hover:border-gray-400 text-gray-700 text-[11px] font-semibold py-1.5 rounded-lg transition-colors">Подробнее</button>
        </div>
      </div>
    </div>
  );
}

function CarSvgPlaceholder() {
  return (
    <svg className="w-20 h-14 text-gray-400" fill="none" viewBox="0 0 100 60">
      <rect x="5" y="20" width="90" height="28" rx="8" fill="currentColor" opacity="0.3" />
      <rect x="20" y="10" width="55" height="22" rx="5" fill="currentColor" opacity="0.4" />
      <circle cx="22" cy="50" r="9" fill="currentColor" opacity="0.5" />
      <circle cx="78" cy="50" r="9" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────

// ─── Slide data (replace src values with real images) ────────────────────────
const SLIDES = [
  { id: 1, src: carImage, alt: "Toyota Camry 2013 — вид спереди" },
  { id: 2, src: carImage, alt: "Toyota Camry 2013 — вид сзади" },
  { id: 3, src: carImage, alt: "Toyota Camry 2013 — интерьер" },
  { id: 4, src: carImage, alt: "Toyota Camry 2013 — приборная панель" },
  { id: 5, src: carImage, alt: "Toyota Camry 2013 — вид сбоку" },
  { id: 6, src: carImage, alt: "Toyota Camry 2013 — багажник" },
  { id: 7, src: carImage, alt: "Toyota Camry 2013 — колёса" },
  { id: 8, src: carImage, alt: "Toyota Camry 2013 — двигатель" },
];

// ─── Image Slider ─────────────────────────────────────────────────────────────
function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const [liked, setLiked] = useState(false);
  const thumbsRef = useRef(null);
  const touchStartX = useRef(null);

  const goTo = (idx) => {
    const next = (idx + SLIDES.length) % SLIDES.length;
    setCurrent(next);
    // scroll thumbnail into view
    if (thumbsRef.current) {
      const thumb = thumbsRef.current.children[next];
      if (thumb) thumb.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  };

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  // touch swipe
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <div className="flex-1 select-none">
      {/* Main image */}
      <div
        className="relative rounded-xl overflow-hidden bg-gray-200 aspect-[16/9]"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Slides */}
        <div className="relative w-full h-full">
          {SLIDES.map((slide, i) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-300 ${i === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display = "none"; }}
              />
              {/* fallback placeholder shown behind img */}
              <div className="absolute inset-0 flex items-center justify-center -z-10">
                <CarSvgPlaceholder />
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all hover:scale-105 active:scale-95"
          aria-label="Предыдущее фото"
        >
          <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all hover:scale-105 active:scale-95"
          aria-label="Следующее фото"
        >
          <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Counter badge */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 bg-black/50 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
          {current + 1} / {SLIDES.length}
        </div>

        {/* Share / Like */}
        <div className="absolute top-3 right-3 z-20 flex gap-1.5">
          <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow hover:bg-white transition-colors">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </button>
          <button
            onClick={() => setLiked((l) => !l)}
            className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow hover:bg-white transition-colors"
          >
            <svg className="w-4 h-4 transition-colors" fill={liked ? "#dc2626" : "none"} stroke={liked ? "#dc2626" : "currentColor"} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Thumbnails */}
      <div ref={thumbsRef} className="flex gap-2 mt-2 overflow-x-auto pb-1 scroll-smooth">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => goTo(i)}
            className={`flex-shrink-0 w-16 h-11 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
              i === current ? "border-red-600 scale-105 shadow-md" : "border-transparent opacity-70 hover:opacity-100"
            }`}
            aria-label={slide.alt}
          >
            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-200 relative">
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display = "none"; }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-7 h-4 text-gray-400" fill="none" viewBox="0 0 40 24">
                  <rect x="2" y="6" width="36" height="14" rx="4" fill="currentColor" opacity="0.4" />
                  <circle cx="9" cy="20" r="4" fill="currentColor" opacity="0.5" />
                  <circle cx="31" cy="20" r="4" fill="currentColor" opacity="0.5" />
                </svg>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function CarDetailPage() {
  const [downPayment, setDownPayment] = useState(20);
  const [loanTerm, setLoanTerm] = useState(24);
  const [eshe, setEshe] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-4">

        {/* Breadcrumb */}
        <nav className="text-xs text-gray-400 mb-4 hidden md:block">
          <Link to="/" >
            <span className="hover:text-red-600 cursor-pointer">Главная</span>
          </Link>
          <span className="mx-1">/</span>
          <Link to="/used-cars">
            <span className="hover:text-red-600 cursor-pointer">Авто с пробегом</span>
          </Link>
          <span className="mx-1">/</span>
          <span className="text-gray-600">Toyota Camry 2013</span>
        </nav>

        {/* ── Hero: image + info ─────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row gap-6 mb-6">

          {/* Left: Gallery */}
          <div className="flex-1 flex flex-col">
            {/* Mobile title */}
            <div className="md:hidden mb-3">
              <h1 className="text-xl font-bold text-gray-900">Toyota Camry 2013</h1>
              <div className="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/></svg>
                Автомобиль сейчас смотрит 3 человека
              </div>
            </div>
            <ImageSlider />
          </div>

          {/* Right: Info panel */}
          <div className="md:w-80 flex flex-col gap-4">
            {/* Desktop title */}
            <div className="hidden md:block">
              <h1 className="text-2xl font-bold text-gray-900">Toyota Camry 2013</h1>
              <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/></svg>
                Автомобиль сейчас смотрит 3 человека
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <Badge>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3"/></svg>
                1.2 л
              </Badge>
              <Badge>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                115 л.с.
              </Badge>
              <Badge>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                Механика
              </Badge>
              <Badge>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
                Передний
              </Badge>
            </div>

            {/* Price */}
            <div>
              <p className="text-3xl font-black text-gray-900">850 000 ₽</p>
              <p className="text-xs text-gray-500 mt-0.5">В кредит от 12 000 ₽/мес</p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-2">
              <button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold text-sm py-3 rounded-xl transition-colors">
                ЗАБРОНИРОВАТЬ ОНЛАЙН
              </button>
              <button className="flex-1 bg-[#EFF0F0] text-[#737373] hover:bg-[#D1D5DB] font-semibold text-sm py-3 rounded-xl transition-colors">
                Купить в кредит
              </button>
            </div>

            {/* Perks */}
            <div className="flex flex-col gap-3">
              {[
                { icon: "🔄", text: "Зачёт вашего авто в trade-in" },
                { icon: "%", text: "Беспроцентная рассрочка 0%" },
                { icon: "🎁", text: "Доп. выгода до 200 000 ₽" },
              ].map((p) => (
                <div key={p.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center text-red-600 text-sm font-bold flex-shrink-0">
                    {p.icon}
                  </div>
                  <span className="text-xs text-gray-600">{p.text}</span>
                </div>
              ))}
            </div>

            {/* Specs grid */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 border-t border-gray-100 pt-4">
              {[
                ["Привод", "передний"],
                ["Кузов", "седан"],
                ["Год", "2013"],
                ["Пробег", "1000 км"],
              ].map(([k, v]) => (
                <div key={k}>
                  <p className="text-xs text-gray-400">{k}</p>
                  <p className="text-sm font-bold text-gray-900">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Finance offers ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          {[
            { name: "Рассрочка от ВТБ", sub: "Рассрочка 0%", btn: "Рассрочка", color: "blue", img: girl1 },
            { name: "Выгода по Trade-in", sub: "Дополнительная выгода до 350 000 руб.", btn: "Trade-in", color: "red", img: girl2 },
            { name: "Первоначальный взнос 0%", sub: "Кредит 1.9%", btn: "Скидка", color: "red", img: girl3 },
          ].map((offer) => (
            <div key={offer.name} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex items-center gap-3">
              <img src={offer.img} alt={offer.name} className="w-20 h-20 object-cover rounded " />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-gray-800 leading-tight">{offer.name}</p>
                <p className="text-[10px] text-gray-500 mt-0.5 leading-tight">{offer.sub}</p>
              </div>
              <button className="flex-shrink-0 bg-red-600 hover:bg-red-700 text-white text-[11px] font-semibold px-3 py-1.5 rounded-lg transition-colors">
                {offer.btn}
              </button>
            </div>
          ))}
        </div>

        {/* ── Credit Calculator ──────────────────────────────────────────── */}
        <div className="bg-[#262626] text-white rounded-2xl p-5 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 grid grid-cols-1 items-center justify-center sm:grid-cols-2 gap-5">
              <RedSlider
                label="Первоначальный взнос"
                value={downPayment}
                min={0} max={100} step={5}
                onChange={setDownPayment}
                markers={["0", "20", "40", "60", "80", "100"]}
              />
              <RedSlider
                label="Срок кредита"
                value={loanTerm}
                min={12} max={84} step={12}
                onChange={setLoanTerm}
                markers={["12", "24", "36", "48", "60", "72", "84"]}
              />
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-start gap-3 lg:text-left flex-shrink-0">
              <div>
                <p className="text-xs text-gray-400">Ежемесячный платёж *</p>
                <p className="text-2xl font-black text-white">12 000 ₽/мес.</p>
                <p className="text-[10px] text-gray-500">* Предварительный расчёт</p>
              </div>
            </div>
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm py-3 px-5 rounded-xl transition-colors whitespace-nowrap">
                ПОДАТЬ ЗАЯВКУ НА КРЕДИТ
              </button>
          </div>
        </div>

        {/* ── Description ────────────────────────────────────────────────── */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4">Описание Toyota Camry 2013 2.0 AT Стандарт</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et lorem elit. Nam nisi nulla, fringilla vel pharetra ac, luctus in est. Pellentesque faucibus interdum arcu, non molestie leo malesuada in. Donec quam turpis, hendrerit nec ante id, tincidunt convallis sapien. In molestie dignissim elit non mollis. Donec at dapibus nisl, sed aliquam ipsum. Mauris mi libero, congue ut feugiat sit amet, cursus eget orci. Aenean vel fermentum dui. Aenean dictum diam in augue porttitor luctus.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et lorem elit. Nam nisi nulla, fringilla vel pharetra ac, luctus in est. Pellentesque faucibus interdum arcu, non molestie leo malesuada in. Donec quam turpis, hendrerit nec ante id, tincidunt convallis sapien. In molestie dignissim elit non mollis.
          </p>
        </section>

        {/* ── Specifications ─────────────────────────────────────────────── */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4">Комплектация Toyota Camry 2013 2.0 AT Стандарт</h2>
          <div className="bg-white rounded-xl ">
            <div className="grid grid-cols-1 justify-center items-center md:grid-cols-2">
              <div className="p-4 ">
                <SpecRow label="Максимальная мощность двигателя(кВт) при об./мин." value="110 л.с." />
                <SpecRow label="Тип привода" value="Передний" />
              </div>
              <div className="p-4">
                <SpecRow label="Тип трансмиссии" value="МКПП" />
                <SpecRow label="Объем двигателя, куб.см" value="100" />
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm py-3 px-12 rounded-xl transition-colors">
              ПОКАЗАТЬ ЕЩЕ
            </button>
          </div>
        </section>
      </div>

      {/* ── Trade-in Banner ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#262626] mb-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#262626] via-[#262626]/80 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-[#262626] to-transparent" />
        {/* Car silhouette placeholder */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-0 opacity-40 hidden sm:block">
          <svg className="w-72 h-40 text-white" fill="none" viewBox="0 0 240 120">
            <rect x="10" y="40" width="220" height="60" rx="18" fill="currentColor" opacity="0.3"/>
            <rect x="50" y="15" width="140" height="50" rx="12" fill="currentColor" opacity="0.4"/>
            <circle cx="55" cy="103" r="17" fill="currentColor" opacity="0.6"/>
            <circle cx="185" cy="103" r="17" fill="currentColor" opacity="0.6"/>
          </svg>
        </div>

        <div className="relative z-20 max-w-5xl mx-auto px-4 py-10">
          <div className="max-w-lg">
            <div className="w-8 h-1 bg-red-600 mb-3 rounded-full" />
            <h2 className="text-3xl font-black text-white mb-1">Выгодный Trade-in</h2>
            <p className="text-gray-300 text-sm mb-6">Оценим вашу машину за 10 минут</p>

            <div className="grid grid-cols-2 gap-3 mb-3">
              {["Toyota", "Модель", "Год выпуска", "Тип кузова"].map((ph) => (
                <div key={ph} className="relative">
                  <select className="w-full appearance-none bg-white/10 border border-white/20 text-white text-xs rounded-lg py-2.5 pl-3 pr-8 focus:outline-none focus:border-red-500 cursor-pointer backdrop-blur-sm">
                    <option value="">{ph}</option>
                  </select>
                  <svg className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-white/60 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                </div>
              ))}
            </div>

            <div className="flex gap-3 mb-3">
              <input
                type="tel"
                placeholder="Ваш телефон"
                className="flex-1 bg-white border-0 text-gray-900 text-xs rounded-lg py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs py-2.5 px-5 rounded-lg transition-colors whitespace-nowrap">
                ОБРАТНЫЙ ЗВОНОК
              </button>
            </div>

            <p className="text-[10px] text-gray-400 leading-relaxed">
              Нажимая кнопку «Получить предложение» вы соглашаетесь с условиями конфиденциальности и обработкой персональных данных.
            </p>
          </div>
        </div>
      </section>

      {/* ── Similar Cars ─────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 pb-12">
        <h2 className="text-xl font-black text-gray-900 mb-5">Автомобили с пробегом за эти же деньги</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-6">
          {eshe ? (["Toyota Camry 2013", "Toyota Camry 2013", "Toyota Camry 2013", "Toyota Camry 2013", "Toyota Camry 2013", "Toyota Camry 2013"].map((name, i) => (
            <CarCard key={i} name={name} />
          ))) : (["Toyota Camry 2013", "Toyota Camry 2013", "Toyota Camry 2013"].map((name, i) => (
            <CarCard key={i} name={name} />
          )))}
        </div>
        <div className="flex justify-center">
          {eshe ? (
            <button 
            onClick={() => setEshe(false)}
            className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm py-3 px-12 rounded-xl transition-colors">
              СКРЫТЬ
            </button>
          ) : (
            <button 
            onClick={() => setEshe(true)}
            className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm py-3 px-12 rounded-xl transition-colors">
              ПОКАЗАТЬ ЕЩЕ
            </button>
          )}
        </div>
      </section>
    </div>
  );
}