import { Link } from 'react-router-dom'
import { useState } from "react";
import carImage from "../../assets/toyotoKamry2013.svg";
import blogImage from "../../assets/a139c33ae8001b69468897acd423648976d9acba.jpg";

const brands = [
  { name: "Kia" }, { name: "Hyundai" }, { name: "Skoda" }, { name: "Volkswagen" }, { name: "Toyota" },
  { name: "Brilliance" }, { name: "Changan" }, { name: "CheryExeed" }, { name: "Chevrolet" },
  { name: "Citroen" }, { name: "Datsun" }, { name: "Dongfeng" }, { name: "DW Hower" }, { name: "FAW" },
  { name: "Ford" }, { name: "Foton" }, { name: "GAC" }, { name: "Geely" }, { name: "Great Wall" },
  { name: "Haima" }, { name: "Haval" }, { name: "JAC" }, { name: "Lada" },
  { name: "Lifan" }, { name: "Mazda" }, { name: "Mitsubishi" }, { name: "Nissan" }, { name: "Opel" },
  { name: "Peugeot" }, { name: "Ravan" }, { name: "Renault" }, { name: "SsangYong" }, { name: "Suzuki" },
  { name: "UAZ" }, { name: "Zotye" },
];

const carData = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: "Toyota Camry 2013",
  power: "115 л.с.",
  engine: "1.2 л",
  drive: "передний",
  body: "внедорожник",
  transmission: "механика",
  mileage: "123456 км",
  price: "1 615 000 ₽",
  monthly: "от 115 000 ₽/мес",
}));

const blogPosts = Array.from({ length: 4 }, (_, i) => ({
  id: i + 1,
  date: "25 октября",
  title: "Тест Skoda Karoq Scout - городской карлик или настоящий скаут",
}));

function CarCard({ car }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img src={carImage} alt={car.name} className="w-full scale-140 h-44 " />
        {/* Red line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600" />
        {/* Actions */}
        <div className="absolute top-2 right-2 flex gap-1">
          <button className="w-7 h-7 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-sm hover:bg-opacity-100 transition">
            <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
            </svg>
          </button>
          <button
            onClick={() => setLiked(!liked)}
            className="w-7 h-7 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-sm hover:bg-opacity-100 transition"
          >
            <svg className="w-3.5 h-3.5" fill={liked ? "#dc2626" : "none"} stroke={liked ? "#dc2626" : "currentColor"} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-gray-900 text-base mb-2">{car.name}</h3>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-600 mb-3">
          <div><span className="font-semibold">Мощность:</span> <span className="text-red-600 font-bold">{car.power}</span></div>
          <div><span className="font-semibold">Объем двигателя:</span> <span className="text-red-600 font-bold">{car.engine}</span></div>
          <div><span className="font-semibold">Привод:</span> <span className="text-red-600 font-bold">{car.drive}</span></div>
          <div><span className="font-semibold">Кузов:</span> <span className="text-red-600 font-bold">{car.body}</span></div>
          <div><span className="font-semibold">КПП:</span> {car.transmission}</div>
          <div><span className="font-semibold">Пробег:</span> {car.mileage}</div>
        </div>
        <div className="mb-3">
          <span className="text-lg font-bold text-gray-900">от {car.price} </span>
          <span className="text-xs text-gray-500">{car.monthly}</span>
        </div>
        <div className="flex flex-col items-center lg:flex-row">
          <div className="flex w-full">
            <button className="flex-1 bg-red-600 hover:bg-red-700 text-white text-xs font-medium py-2 px-2 rounded-lg transition-colors duration-150">
              Резерв онлайн
            </button>
          </div>
          <div className="flex w-full">
            <button className="flex-1 bg-gray-800 hover:bg-gray-900 text-white text-xs font-medium py-2 px-2 rounded-lg transition-colors duration-150">
              Купить
            </button>
            <Link to={`/used-cars/toyota-camry-2013`} className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-medium py-2 px-2 rounded-lg transition-colors duration-150 text-center">
              Подробнее
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function PriceSlider() {
  const [value, setValue] = useState(500000);
  const max = 3000000;
  const pct = (value / max) * 100;

  const fmt = (v) => {
    if (v >= 1000000) return (v / 1000000).toFixed(1).replace(".0","") + "М";
    if (v >= 1000) return (v / 1000).toFixed(0) + "т";
    return v;
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <label className="text-xs font-semibold text-gray-700">Цена</label>
        <span className="text-xs text-gray-500">0 - {fmt(value)}₽</span>
      </div>
      <div className="relative h-5 flex items-center">
        <div className="w-full h-1 bg-gray-200 rounded-full relative">
          <div
            className="absolute left-0 top-0 h-1 bg-red-600 rounded-full"
            style={{ width: `${pct}%` }}
          />
        </div>
        <input
          type="range"
          min={0}
          max={max}
          step={50000}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer h-5"
        />
        <div
          className="absolute w-4 h-4 bg-red-600 rounded-full border-2 border-white shadow"
          style={{ left: `calc(${pct}% - 8px)` }}
        />
      </div>
      <div className="flex justify-between text-[10px] text-gray-400 mt-1">
        {["0", "500т", "1М", "1,5М", "2М", "2,5М", "3М"].map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>
    </div>
  );
}

function Select({ placeholder }) {
  return (
    <div className="relative">
      <select className="w-full appearance-none border border-gray-300 rounded-lg text-xs text-gray-500 py-2 pl-3 pr-8 bg-white focus:outline-none focus:border-red-500 cursor-pointer">
        <option value="">{placeholder}</option>
      </select>
      <svg className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
      </svg>
    </div>
  );
}

export default function UsedCarsPage() {
  const [visibleCars, setVisibleCars] = useState(6);

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="max-w-6xl mx-auto px-4 py-8">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Авто с пробегом</h1>

        {/* Top Section: Brands + Filter */}
        <div className="flex bg-gray-50 flex-col items-center justify-center lg:flex-row lg:items-start gap-6 mb-8">
          {/* Brand Grid */}
          <div className="flex-1 rounded-xl p-4 w-full lg:w-fit">
            <div className="grid grid-cols-3 gap-2 lg:gap-y-2 lg:gap-x-2 lg:grid-cols-5">
              {brands.map((brand) => (
                <button
                  key={brand.name}
                  className="text-xs text-gray-600 hover:text-red-600 hover:font-semibold text-left transition-colors duration-150 truncate"
                >
                  {brand.name}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Filter */}
          <div className="w-72 rounded-xl p-4 flex flex-col gap-3">
            <h2 className="font-bold text-gray-900 text-sm">Быстрый подбор авто</h2>
            <PriceSlider />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <Select placeholder="Модель" />
              <Select placeholder="Год выпуска" />
              <Select placeholder="Тип кузова" />
              <Select placeholder="Коробка" />
            </div>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-sm py-2.5 rounded-lg transition-colors duration-150">
              ПОКАЗАТЬ 73
            </button>
          </div>
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {carData.slice(0, visibleCars).map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        {/* Show More */}
        {visibleCars < carData.length && (
          <div className="flex justify-center mb-12">
            <button
              onClick={() => setVisibleCars((v) => v + 6)}
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm py-3 px-12 rounded-lg transition-colors duration-150"
            >
              ПОКАЗАТЬ ЕЩЁ
            </button>
          </div>
        )}
        {visibleCars >= carData.length && (
          <div className="flex justify-center mb-12">
            <button
              onClick={() => setVisibleCars((v) => v - 6)}
              className="bg-red-600 uppercase hover:bg-red-700 text-white font-bold text-sm py-3 px-12 rounded-lg transition-colors duration-150"
            >
              свернуть
            </button>
          </div>
        )}

        {/* Blog Section */}
        <div className="mb-12 hidden md:block">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold text-gray-900">Блог</h2>
              <button className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Все статьи
              </button>
            </div>
            <div className="flex gap-2">
              <button className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:border-red-600 hover:text-red-600 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                </svg>
              </button>
              <button className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {blogPosts.map((post) => (
              <div key={post.id} className="cursor-pointer group">
                <img src={blogImage} alt={post.title} className="w-full rounded object-cover" />
                <p className="text-xs text-gray-400 mb-1">{post.date}</p>
                <p className="text-xs font-semibold text-gray-800 group-hover:text-red-600 transition-colors leading-snug">
                  {post.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Article Section */}
        <div className=" rounded-xl ">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Заголовок</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar auctor tellus, id volutpat dui dictum vitae. Sed ac mauris nisi. Maecenas quis sollicitudin dolor, eget molestie dolor. Vivamus sed magna euismod, iaculis eros vitae, vehicula justo. Ut id consequat risus, vitae accumsan ligula. Pron egestas odio sit amet laoreet vulputate. Suspendisse vitae vestibulum quam. Vivamus lectus justo, bibendum at laoreet vel, rhoncus nec sem. Phasellus at mollis magna, in bibendum massa. Praesent malesuada sit amet nibh ut malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla iaculis a orci sit amet iaculis. Nulla in magna posuere nunc pharetra faucibus. Phasellus id enim libero.
          </p>

          <h3 className="text-base font-bold text-gray-900 mb-2">Подзаголовок</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar auctor tellus, id volutpat dui dictum vitae. Sed ac mauris nisi. Maecenas quis sollicitudin dolor, eget molestie dolor. Vivamus sed magna euismod, iaculis eros vitae, vehicula justo. Ut id consequat risus, vitae accumsan ligula. Pron egestas odio sit amet laoreet vulputate. Suspendisse vitae vestibulum quam. Vivamus lectus justo, bibendum at laoreet vel, rhoncus nec sem. Phasellus at mollis magna, in bibendum massa. Praesent malesuada sit amet nibh ut malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla iaculis a orci sit amet iaculis.
          </p>

          <h3 className="text-base font-bold text-gray-900 mb-2">Подзаголовок</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar auctor tellus, id volutpat dui dictum vitae. Sed ac mauris nisi. Maecenas quis sollicitudin dolor, eget molestie dolor. Vivamus sed magna euismod, iaculis eros vitae, vehicula justo. Ut id consequat risus, vitae accumsan ligula. Pron egestas odio sit amet laoreet vulputate. Suspendisse vitae vestibulum quam. Vivamus lectus justo, bibendum at laoreet vel, rhoncus nec sem. Phasellus at mollis magna, in bibendum massa. Praesent malesuada sit amet nibh ut malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla iaculis a orci sit amet iaculis. Nulla in magna posuere nunc pharetra faucibus. Phasellus id enim libero.
          </p>
        </div>

      </div>
    </div>
  );
}