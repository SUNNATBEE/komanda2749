import React, { useState } from 'react';
import CarCard from './CarCard';

import kiaRioImg from '../../assets/Kia Rio.png';

const INITIAL_CARS = [
  {
    id: 1,
    name: "Skoda Octavia",
    subName: "1.6 MPI MT Active",
    badge: "Предложение дня",
    benefit: "Выгода до 300 000 ₽",
    price: "от 1 615 000 ₽ ",
    credit: "Кредит от 11 500 ₽/мес.",
    image: kiaRioImg,
    specs: [
      { label: "100 л.с.", type: "engine" },
      { label: "5.7 л/км", type: "fuel" },
      { label: "185 км/ч", type: "speed" },
      { label: "12.2 с", type: "acceleration" }
    ],
    features: ["Оборудование в подарок", "КАСКО в подарок", "Комплект резины в подарок"]
  },
  {
    id: 2,
    name: "Skoda Octavia",
    subName: "1.6 MPI MT Active",
    badge: "Предложение дня",
    benefit: "Выгода до 300 000 ₽",
    price: "от 1 615 000 ₽ ",
    credit: "Кредит от 13 200 ₽/мес.",
    image: kiaRioImg,
    specs: [
      { label: "123 л.с.", type: "engine" },
      { label: "6.5 л/км", type: "fuel" },
      { label: "193 км/ч", type: "speed" },
      { label: "10.7 с", type: "acceleration" }
    ],
    features: ["Оборудование в подарок", "КАСКО в подарок", "Скидка по Trade-In"]
  },
  {
    id: 3,
    name: "Skoda Octavia",
    subName: "1.6 MPI MT Active",
    badge: "Предложение дня",
    benefit: "Выгода до 300 000 ₽",
    price: "от 1 615 000 ₽ ",
    credit: "Кредит от 12 400 ₽/мес.",
    image: kiaRioImg,
    specs: [
      { label: "123 л.с.", type: "engine" },
      { label: "6.0 л/км", type: "fuel" },
      { label: "190 км/ч", type: "speed" },
      { label: "10.3 с", type: "acceleration" }
    ],
    features: ["Комплект резины в подарок", "КАСКО в подарок", "Сигнализация в подарок"]
  },
  {
    id: 4,
    name: "Skoda Octavia",
    subName: "1.6 MPI MT Active",
    badge: "Предложение дня",
    benefit: "Выгода до 300 000 ₽",
    price: "от 1 615 000 ₽ ",
    credit: "Кредит от 14 000 ₽/мес.",
    image: kiaRioImg,
    specs: [
      { label: "123 л.с.", type: "engine" },
      { label: "6.5 л/км", type: "fuel" },
      { label: "193 км/ч", type: "speed" },
      { label: "10.7 с", type: "acceleration" }
    ],
    features: ["Комплект резины", "КАСКО в подарок"]
  },
  {
    id: 5,
    name: "Skoda Octavia",
    subName: "1.6 MPI MT Active",
    badge: "Предложение дня",
    benefit: "Выгода до 300 000 ₽",
    price: "от 1 615 000 ₽ ",
    credit: "Кредит от 15 500 ₽/мес.",
    image: kiaRioImg,
    specs: [
      { label: "123 л.с.", type: "engine" },
      { label: "6.6 л/км", type: "fuel" },
      { label: "193 км/ч", type: "speed" },
      { label: "10.7 с", type: "acceleration" }
    ],
    features: ["Все включено", "КАСКО в подарок", "Тонировка"]
  },
  {
    id: 6,
    name: "Skoda Octavia",
    subName: "1.6 MPI MT Active",
    badge: "Предложение дня",
    benefit: "Выгода до 150 000 ₽",
    price: "от 1 615 000 ₽ ",
    credit: "Кредит от 12 900 ₽/мес.",
    image: kiaRioImg,
    specs: [
      { label: "123 л.с.", type: "engine" },
      { label: "6.0 л/км", type: "fuel" },
      { label: "190 км/ч", type: "speed" },
      { label: "10.3 с", type: "acceleration" }
    ],
    features: ["Стильный обвес", "Комплект резины"]
  }
];

export default function CarList() {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <div className="mt-10 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {INITIAL_CARS.slice(0, visibleCount).map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

      {visibleCount < INITIAL_CARS.length && (
        <div className="flex justify-center mt-12 mb-16">
          <button 
            onClick={handleLoadMore}
            className="bg-red-600 hover:bg-red-700 active:scale-[0.98] text-white font-black px-12 py-4 rounded-xl text-xs uppercase tracking-widest transition-all shadow-md shadow-red-600/10"
          >
            Показать еще
          </button>
        </div>
      )}

      <div className="mt-16 pt-10 border-t border-gray-100 text-left select-none">
        <h2 className="text-[28px] md:text-[32px] font-black text-gray-900 mb-4 tracking-tight">
          Заголовок
        </h2>
        <p className="text-sm leading-relaxed text-gray-400 font-medium mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar auctor tellus, id volutpat dui dictum vitae. Sed ac mauris nisi. Maecenas quis sollicitudin dolor, eget molestie dolor. Vivamus sed magna euismod, iaculis eros vitae, vehicula justo. Ut id consequat risus, vitae accumsan ligula. Proin egestas odio sit amet laoreet vulputate. Suspendisse vitae vestibulum quam. Vivamus lectus justo, bibendum at laoreet vel, rhoncus nec sem. Phasellus at mollis magna, in bibendum massa. Praesent malesuada sit amet nibh ut vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla iaculis a orci sit amet iaculis. Nulla in magna posuere nunc pharetra faucibus. Phasellus id enim libero.
        </p>

        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-3 tracking-tight">
          Подзаголовок
        </h3>
        <p className="text-sm leading-relaxed text-gray-400 font-medium mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar auctor tellus, id volutpat dui dictum vitae. Sed ac mauris nisi. Maecenas quis sollicitudin dolor, eget molestie dolor. Vivamus sed magna euismod, iaculis eros vitae, vehicula justo. Ut id consequat risus, vitae accumsan ligula. Proin egestas odio sit amet laoreet vulputate. Suspendisse vitae vestibulum quam. Vivamus lectus justo, bibendum at laoreet vel, rhoncus nec sem. Phasellus at mollis magna, in bibendum massa. Praesent malesuada sit amet nibh ut vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla iaculis a orci sit amet iaculis. Nulla in magna posuere nunc pharetra faucibus. Phasellus id enim libero.
        </p>

        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-3 tracking-tight">
          Подзаголовок
        </h3>
        <p className="text-sm leading-relaxed text-gray-400 font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar auctor tellus, id volutpat dui dictum vitae. Sed ac mauris nisi. Maecenas quis sollicitudin dolor, eget molestie dolor. Vivamus sed magna euismod, iaculis eros vitae, vehicula justo. Ut id consequat risus, vitae accumsan ligula. Proin egestas odio sit amet laoreet vulputate. Suspendisse vitae vestibulum quam. Vivamus lectus justo, bibendum at laoreet vel, rhoncus nec sem. Phasellus at mollis magna, in bibendum massa. Praesent malesuada sit amet nibh ut vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla iaculis a orci sit amet iaculis. Nulla in magna posuere nunc pharetra faucibus. Phasellus id enim libero.
        </p>
      </div>

    </div>
  );
}   