import React, { useState } from 'react';
import { Gift, Percent, CreditCard, Heart, Check } from 'lucide-react';

export default function ToyotaCamryPage() {
  const [selectedColor, setSelectedColor] = useState('Night Black');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [showAllFeatures, setShowAllFeatures] = useState(false);
const trimsData20 = [
    { id: 1, name: '2.0 AT Стандарт 2020', discount: '-25%', engine: '2.0 - 75 л.с.', transmission: '6MT', drive: '2WD', price: '2 000 000 ₽', promoPrice: '1 615 000 ₽' },
    { id: 2, name: '2.0 AT Стандарт 2020', discount: '-25%', engine: '2.0 - 75 л.с.', transmission: '6MT', drive: '2WD', price: '2 000 000 ₽', promoPrice: '1 615 000 ₽' },
    { id: 3, name: '2.0 AT Стандарт 2020', discount: '-25%', engine: '2.0 - 75 л.с.', transmission: '6MT', drive: '2WD', price: '2 000 000 ₽', promoPrice: '1 615 000 ₽' },
  ];
const reviews = Array(3).fill({
    name: "Сергей Васильев",
    text: "«Я нахожусь в салоне ALTERA, всем советую, хороший коллектив, добрые люди, приветствуют, это не обман, вам гарантия 100 % точно, чисто от меня, приезжайте! Мы приехали приобрести автомобиль в салон ALTERA...",
    buttonText: "Подробнее",
    image: "/src/assets/youyube.png" 
  });
const reviewSites = [
    { id: 1, title: 'Сайт отзовик', subtitle: 'Название автосалона', rating: '4.5' },
    { id: 2, title: 'Сайт отзовик', subtitle: 'Название автосалона', rating: '4.5' },
    { id: 3, title: 'Сайт отзовик', subtitle: 'Название автосалона', rating: '4.5' },
    { id: 4, title: 'Сайт отзовик', subtitle: 'Название автосалона', rating: '4.5' },
  ];
  const trimsData25 = [
    { id: 1, name: '2.0 AT Стандарт 2020', discount: '-25%', engine: '2.0 - 75 л.с.', transmission: '6MT', drive: '2WD', price: '2 000 000 ₽', promoPrice: '1 615 000 ₽' },
    { id: 2, name: '2.0 AT Стандарт 2020', discount: '-25%', engine: '2.0 - 75 л.с.', transmission: '6MT', drive: '2WD', price: '2 000 000 ₽', promoPrice: '1 615 000 ₽' },
  ];
  const [discounts, setDiscounts] = useState([
    { id: 1, title: 'Специальное предложение', desc: 'от представительства', value: '-35% ₽', active: true },
    { id: 2, title: 'Скидка за наличные', desc: 'от ABC Auto', value: '-40 000 ₽', active: true },
    { id: 3, title: 'Выгода за Trade-in', desc: 'от ABC Auto', value: '-120 000 ₽', active: true },
    { id: 4, title: 'Выгода за утилизацию', desc: 'от ABC Auto', value: '-60 000 ₽', active: false },
    { id: 5, title: 'Скидка при оформлении', desc: 'Авто в кредит 1,9%', value: '-40 000 ₽', active: false },
    { id: 6, title: 'Госпрограмма', desc: 'Семейный автомобиль, Первый автомобиль, Работникам медицины, Госпрограмма Trade-in', value: '10% от цены авто', active: true },
  ]);
const features = [
    {
      id: 1,
      title: 'Кредит от 1.9%',
      desc: '30 банков партнеров',
    },
    {
      id: 2,
      title: 'Первый взнос 0%',
      desc: 'Возможность рассрочки',
    },
    {
      id: 3,
      title: 'Госпрограммы льготного автокредитования',
      desc: '-10% от стоимости авто',
    },
    {
      id: 4,
      title: 'Trade in как первый взнос',
      desc: '+ дополнительная скидка',
    },
  ];
  const toggleDiscount = (id) => {
    setDiscounts(discounts.map(d => d.id === id ? { ...d, active: !d.active } : d));
  };
const sich = Array(4).fill({
    date: "25 октября",
    title: "Тест Skoda Karoq Scout - городской карлик или настоящий скаут",
    image: "/src/assets/Oila.png"
  });
  const colors = [
    { 
      name: 'Blue', 
      class: 'bg-blue-600',
      img: '/src/assets/319706_2018_Toyota_Camry-removebg-preview.png'
    },
    { 
      name: 'Red', 
      class: 'bg-red-600',
      img: '/src/assets/tx7cp9b_1800105-removebg-preview.png'
    },
    { 
      name: 'White', 
      class: 'bg-white border border-gray-300',
      img: '/src/assets/ChatGPT_Image_4_июн._2026_г.__16_35_05-removebg-preview.png' 
    },
    { 
      name: 'Silver', 
      class: 'bg-gray-300',
      img: '/src/assets/ChatGPT_Image_4_июн._2026_г.__16_35_05-removebg-preview.png'
    },
    { 
      name: 'Graphite', 
      class: 'bg-gray-500',
      img: '/src/assets/ChatGPT_Image_4_июн._2026_г.__16_32_00-removebg-preview.png'
    },
    { 
      name: 'Night Black', 
      class: 'bg-zinc-950',
      img: '/src/assets/b9ncp9b_1800107-removebg-preview.png'
    }, 
    { 
      name: 'Dark Red', 
      class: 'bg-red-950',
      img: '/src/assets/tx7cp9b_1800105-removebg-preview.png'
    },
    { 
      name: 'Bronze', 
      class: 'bg-amber-900',
      img: '/src/assets/ChatGPT_Image_4_июн._2026_г.__16_26_04-removebg-preview.png'
    },
  ];

 
const sp = [
    {
      img1: '/src/assets/Frame.png',
      img2: '/src/assets/Frame (1).png',
      img3: '/src/assets/Frame (2).png',
    }
  ];

  const specsData = [
    { label: 'Длина кузова, мм', value: '4400' },
    { label: 'Ширина кузова, мм', value: '1740' },
    { label: 'Высота кузова, мм', value: '1470' },
    { label: 'Колесная база, мм', value: '2600' },
    { label: 'Дорожный просвет, мм', value: '160' },
  ];
  const currentColorObj = colors.find(c => c.name === selectedColor) || colors[5];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Rahmat! Arizangiz qabul qilindi. Ism: ${name}, Telefon: ${phone}`);
  };

  const featuresData = [
    {
      title: "Безопасность",
      items: [
        "Запасное колесо неполноразмерное",
        "Передние тормоза: Дисковые",
        "Задние тормоза: Барабанные",
        "Задние колеса: 175/65R14",
        "Передние колеса: 175/65R14",
        "Передний стабилизатор"
      ]
    },
    {
      title: "Экстерьер",
      items: [
        "Задняя подвеска: Полузависимая, торсионная балка",
        "Иммобилайзер",
        "Вспомогательная система торможения (BAS)",
        "Антиблокировочная система (ABS)",
        "Система помощи при старте на подъеме (HAC)"
      ]
    },
    {
      title: "Интерьер",
      items: [
        "Подушка безопасности пассажира с функцией деактивации",
        "Подушка безопасности переднего пассажира",
        "Дополнительный стоп-сигнал",
        "ЭРА-ГЛОНАСС",
        "Крепление ISOFIX"
      ]
    }
  ];
const bot = [
  {
    img: '/src/assets/ka.png'
  }
];
const duck = [
    {
      title: "Заголовок",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar auctor tellus, id volutpat dui dictum vitae. Sed ac mauris nisi. Maecenas quis sollicitudin dolor, eget molestie dolor. Vivamus sed magna euismod, iaculis eros vitae, vehicula justo. Ut id consequat risus, vitae accumsan ligula. Proin egestas odio sit amet laoreet vulputate. Suspendisse vitae vestibulum quam. Vivamus lectus justo, bibendum at laoreet vel, rhoncus nec sem. Phasellus at mollis magna, in bibendum massa. Praesent malesuada sit amet nibh ut vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla iaculis a orci sit amet iaculis. Nulla in magna posuere nunc pharetra faucibus. Phasellus id enim libero."
    },
    {
      title: "Подзаголовок",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar auctor tellus, id volutpat dui dictum vitae. Sed ac mauris nisi. Maecenas quis sollicitudin dolor, eget molestie dolor. Vivamus sed magna euismod, iaculis eros vitae, vehicula justo. Ut id consequat risus, vitae accumsan ligula. Proin egestas odio sit amet laoreet vulputate. Suspendisse vitae vestibulum quam. Vivamus lectus justo, bibendum at laoreet vel, rhoncus nec sem. Phasellus at mollis magna, in bibendum massa. Praesent malesuada sit amet nibh ut vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla iaculis a orci sit amet iaculis. Nulla in magna posuere nunc pharetra faucibus. Phasellus id enim libero."
    },
    {
      title: "Подзаголовок",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar auctor tellus, id volutpat dui dictum vitae. Sed ac mauris nisi. Maecenas quis sollicitudin dolor, eget molestie dolor. Vivamus sed magna euismod, iaculis eros vitae, vehicula justo. Ut id consequat risus, vitae accumsan ligula. Proin egestas odio sit amet laoreet vulputate. Suspendisse vitae vestibulum quam. Vivamus lectus justo, bibendum at laoreet vel, rhoncus nec sem. Phasellus at mollis magna, in bibendum massa. Praesent malesuada sit amet nibh ut vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla iaculis a orci sit amet iaculis. Nulla in magna posuere nunc pharetra faucibus. Phasellus id enim libero."
    }
  ];
  
  return (
    <div className="w-full min-h-screen p-2 sm:p-4 md:p-8 flex flex-col items-center justify-center font-sans antialiased select-none gap-8 bg-gray-50">
      
      <style>{`
        @keyframes driveIn {
          0% {
            transform: scale(0.2) translateX(400px) translateY(-30px) rotate(2deg);
            opacity: 0;
            filter: blur(6px);
          }
          40% {
            opacity: 0.6;
          }
          100% {
            transform: scale(1) translateX(0) translateY(0) rotate(0deg);
            opacity: 1;
            filter: blur(0);
          }
        }
        .animate-drive {
          animation: driveIn 0.85s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
      `}</style>

      <div 
        className="w-full max-w-7xl rounded-[32px] bg-gradient-to-b from-[#f9fafb] via-[#f3f4f6] to-[#e5e7eb] shadow-2xl overflow-hidden p-4 sm:p-8 md:p-12 relative border border-white/60 bg-no-repeat bg-bottom bg-cover"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1600&auto=format&fit=crop')`,
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(245, 246, 248, 0.94)'
        }}
      >
        
        <div className="flex justify-between items-center text-[11px] md:text-xs text-gray-400 mb-6 md:mb-10 uppercase tracking-wider">
          <div className="flex flex-wrap gap-1.5 items-center">
            <span className="hover:text-gray-600 cursor-pointer">Главная</span> <span>/</span>
            <span className="hover:text-gray-600 cursor-pointer">Каталог авто</span> <span>/</span>
            <span className="hover:text-gray-600 cursor-pointer">Toyota</span> <span>/</span>
            <span className="hover:text-gray-600 cursor-pointer">Toyota Camry</span> <span>/</span>
            <span className="text-gray-500 font-bold">Toyota Camry 2.0 AT Стандарт 2020</span>
          </div>
          <button className="flex items-center gap-1 hover:text-red-600 transition-colors group">
            <Heart size={16} className="text-gray-400 group-hover:fill-red-500 group-hover:text-red-500 transition-all" />
            <span className="font-bold text-gray-600 text-sm">00</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
          
          <div className="lg:col-span-5 space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Toyota Camry 2.0 AT Стандарт 2020
            </h1>
            
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <span className="text-gray-400 line-through text-base md:text-lg font-medium">800 000 ₽</span>
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900">
                от <span className="text-slate-900">700 000 ₽</span>
              </div>
              <div className="bg-[#cc0000] text-white text-[11px] md:text-xs font-bold uppercase px-3 py-2 rounded-[4px] tracking-wide shadow-sm">
                Выгода до 100 000 ₽
              </div>
            </div>

            <div className="space-y-2 max-w-xs pt-4">
              <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-100/50">
                <Gift size={18} className="text-[#cc0000]" />
                <span className="text-xs md:text-sm font-bold text-slate-800">Улучшим любое предложение</span>
              </div>

              <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-100/50">
                <Percent size={18} className="text-[#cc0000]" />
                <span className="text-xs md:text-sm font-bold text-slate-800">Без первоначального взноса</span>
              </div>

              <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-100/50">
                <CreditCard size={18} className="text-[#cc0000]" />
                <span className="text-xs md:text-sm font-bold text-slate-800">Кредит от 1,9%</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col items-center lg:items-end relative w-full mt-6 lg:mt-0 min-h-[360px] justify-center overflow-hidden lg:overflow-visible">
            
            <div className="flex flex-col items-center lg:items-end gap-1.5 mb-4 lg:absolute lg:top-0 lg:right-0 z-20">
              <span className="text-[11px] text-gray-400 font-medium uppercase tracking-wider">
                Цвет: <span className="text-slate-900 font-bold">{selectedColor}</span>
              </span>
              <div className="flex gap-3 p-2 bg-white/80 backdrop-blur-md rounded-full border border-gray-200/50 shadow-sm">
                {colors.map((color) => {
                  const isSelected = selectedColor === color.name;
                  return (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-all relative ${color.class} hover:scale-110 active:scale-95 shadow-md`}
                      title={color.name}
                    >
                      {isSelected && (
                        <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#cc0000] border-2 border-white rounded-full flex items-center justify-center shadow-md z-10">
                          <Check size={10} className="text-white stroke-[4]" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div 
              key={selectedColor} 
              className="w-full max-w-2xl pt-12 md:pt-16 lg:pt-20 animate-drive will-change-transform"
            >
              <img
                src={currentColorObj.img} 
                alt={`Toyota Camry ${selectedColor}`}
                className="w-[2000px] h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.2)] max-h-[260px] mx-auto"
                onError={(e) => {
                  e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREZGwCgXr1LKItVAOrpc5I1nga97qweUJmow&s";
                }}
              />
              <div className="w-[80%] h-4 bg-gradient-to-r from-transparent via-black/25 to-transparent mx-auto blur-md rounded-full -mt-3"></div>
            </div>

          </div>
        </div>

        <div className="mt-12 bg-white rounded-2xl md:rounded-full shadow-xl border border-gray-100 p-5 md:p-3 flex flex-col md:flex-row justify-between items-center gap-4 max-w-5xl mx-auto">
          
          <div className="text-center md:text-left md:pl-6 space-y-1">
            <h3 className="text-lg md:text-xl font-black text-slate-900 tracking-tight">Получите специальную цену</h3>
            <span className="inline-block px-3 py-1 bg-[#cc0000] text-white font-bold text-[10px] rounded-full uppercase tracking-widest">
              Только до 10.10.21
            </span>
          </div>

          <form onSubmit={handleSubmit} className="w-full md:w-auto flex flex-col md:flex-row items-center gap-2.5 flex-1 justify-end">
            <input
              type="text"
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full md:w-48 bg-gray-50 border border-gray-200/80 rounded-xl md:rounded-full px-5 py-3.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-red-500 transition-all text-slate-800 text-center md:text-left"
            />
            <input
              type="tel"
              placeholder="Ваш телефон"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full md:w-48 bg-gray-50 border border-gray-200/80 rounded-xl md:rounded-full px-5 py-3.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-red-500 transition-all text-slate-800 text-center md:text-left"
            />
            <button
              type="submit"
              className="w-full md:w-auto bg-[#cc0000] hover:bg-red-700 text-white font-extrabold uppercase text-[11px] tracking-wider px-8 py-4 rounded-xl md:rounded-full shadow-md hover:shadow-red-600/30 transition-all transform active:scale-95 whitespace-nowrap"
            >
              Получить предложение
            </button>
          </form>

        </div>
        
        <p className="text-[10px] text-gray-400 text-center mt-4 max-w-md mx-auto leading-normal">
          Нажимая кнопку "Получить скидку" Вы даете согласие на обработку своих <span className="underline cursor-pointer hover:text-slate-600 transition-colors">персональных данных</span>
        </p>

      </div>

      <div className="w-full max-w-7xl bg-white rounded-[32px] p-6 sm:p-10 md:p-14 text-slate-800 border border-gray-100">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-slate-900 mb-10 tracking-tight">
          Что входит в комплектацию Active
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
          {featuresData.map((category, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-base font-bold text-slate-900 border-b border-gray-200 pb-3 uppercase tracking-wider text-sm">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.items
                  .slice(0, showAllFeatures ? category.items.length : 4) 
                  .map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#cc0000] mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setShowAllFeatures(!showAllFeatures)}
            className="bg-[#cc0000] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-10 py-4 rounded-lg transition-all shadow-md active:scale-98"
          >
            {showAllFeatures ? "Скрыть" : "Показать еще"}
          </button>
        </div>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {discounts.map((discount) => (
          <div 
            key={discount.id}
            className={`bg-white rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between relative overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] border ${
              discount.active ? 'border-red-500/20 shadow-[0_15px_35px_rgba(204,0,0,0.06)]' : 'border-gray-100 opacity-75'
            }`}
          >
            <div className="flex justify-between items-start z-10">
              <div className="max-w-[70%]">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base tracking-tight leading-tight">{discount.title}</h4>
                <p className="text-[11px] sm:text-xs text-gray-400 mt-1 leading-snug">{discount.desc}</p>
              </div>
              
              <button
                onClick={() => toggleDiscount(discount.id)}
                className={`w-12 h-6 rounded-full p-0.5 transition-colors duration-300 focus:outline-none flex-shrink-0 ${
                  discount.active ? 'bg-[#cc0000]' : 'bg-gray-200'
                }`}
              >
                <div className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 flex items-center justify-center ${
                  discount.active ? 'translate-x-6' : 'translate-x-0'
                }`}>
                  {discount.active && <div className="w-1.5 h-1.5 rounded-full bg-[#cc0000]" />}
                </div>
              </button>
            </div>

            <div className="mt-8 flex justify-between items-end z-10">
              <span className={`text-xl sm:text-2xl font-black tracking-tight ${discount.active ? 'text-slate-900' : 'text-gray-400'}`}>
                {discount.value}
              </span>
              <span className="text-[11px] text-gray-400 underline cursor-pointer hover:text-slate-600 transition-colors">
                Подробнее
              </span>
            </div>
            
            <div className="absolute right-4 bottom-2 text-gray-100 font-black text-7xl select-none pointer-events-none z-0 opacity-40">
              %
            </div>
          </div>
        ))}
      </div>

      <div className="w-full max-w-7xl rounded-2xl overflow-hidden flex flex-col sm:flex-row shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-gray-100 bg-[#f8f9fa]">
        <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center items-center sm:items-start text-center sm:text-left">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Максимальная скидка</span>
          <span className="text-2xl sm:text-3xl font-black text-gray-400 mt-1">до 500 000 ₽</span>
        </div>
        <div className="bg-[#cc0000] p-6 sm:p-8 flex-1 flex flex-col justify-center items-center text-center">
          <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">Ваша скидка</span>
          <span className="text-3xl sm:text-4xl font-black text-white mt-1">до 500 000 ₽</span>
        </div>
        <div className="bg-[#cc0000] p-6 sm:p-8 flex items-center justify-center border-t sm:border-t-0 sm:border-l border-white/10">
          <button className="w-full sm:w-auto bg-white hover:bg-gray-50 text-[#cc0000] font-black text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-lg transition-all active:scale-95 whitespace-nowrap">
            Зафиксировать условия
          </button>
        </div>
      </div>
<div className="w-full px-4 py-8">
  <div
    className="
      relative
      mx-auto
      max-w-[1229px]
      min-h-[328px]
      rounded-[25px]
      overflow-hidden
      bg-gradient-to-r
      from-[#6f2323]
      via-[#2a2222]
      to-[#1c1c1c]
    "
  >
    <div className="absolute left-[20%] top-[-100px] w-[500px] h-[500px] bg-red-600/20 rounded-full blur-3xl" />

    <div className="hidden lg:block">
      <img
        src={bot?.[0]?.img}
        alt="car"
        className="
          absolute
          left-0
          bottom-0
          h-[320px]
          object-contain
          z-20
        "
      />

      <div
        className="
          absolute
          right-12
          top-1/2
          -translate-y-1/2
          w-[520px]
          z-30
        "
      >
        <div className="flex items-center gap-4">
          <div>
            <h2 className="text-white text-3xl font-bold uppercase">
              Выгодный Trade-In
            </h2>

            <p className="text-gray-300 text-sm mt-2">
              Обменяйте свой автомобиль на новый
              <br />
              с максимальной скидкой
            </p>
          </div>

          <div className="flex items-start">
            <span className="text-white text-6xl font-extrabold">
              от 1,9%
            </span>

            <span className="text-gray-300 text-xs ml-2 mt-2">
              По льготной
              <br />
              ставке
            </span>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <input
            type="text"
            placeholder="Ваш телефон"
            className="
              flex-1
              h-[52px]
              rounded-md
              px-4
              bg-white
              text-black
              outline-none
            "
          />

          <button
            className="
              px-8
              h-[52px]
              bg-red-600
              hover:bg-red-700
              rounded-md
              text-white
              font-semibold
            "
          >
            ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ
          </button>
        </div>

        <p className="text-[10px] text-gray-400 mt-3">
          Нажимая кнопку «Отправить», Вы даете согласие на обработку персональных данных
        </p>
      </div>
    </div>

    <div className="lg:hidden p-5">
      <img
        src={bot?.[0]?.img}
        alt="car"
        className="
          w-full
          max-w-[500px]
          mx-auto
          object-contain
        "
      />

      <div className="mt-4 text-center">
        <h2 className="text-white text-2xl font-bold uppercase">
          Выгодный Trade-In
        </h2>

        <div className="flex justify-center items-start mt-3">
          <span className="text-white text-5xl font-extrabold">
            от 1,9%
          </span>

          <span className="text-gray-300 text-xs ml-2 mt-2">
            По льготной
            <br />
            ставке
          </span>
        </div>

        <p className="text-gray-300 text-sm mt-3">
          Обменяйте свой автомобиль на новый
          <br />
          с максимальной скидкой
        </p>

        <div className="flex flex-col gap-3 mt-5">
          <input
            type="text"
            placeholder="Ваш телефон"
            className="
              h-[50px]
              rounded-md
              px-4
              bg-white
              text-black
              outline-none
            "
          />

          <button
            className="
              h-[50px]
              bg-red-600
              rounded-md
              text-white
              font-semibold
            "
          >
            ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="w-full max-w-7xl bg-white rounded-[32px] p-6 sm:p-10 md:p-12 border border-gray-100 shadow-sm font-sans select-none">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mb-10 tracking-tight text-center md:text-left">
        Технические характеристики Toyota Camry 2.0 AT Стандарт 2020
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 grid grid-cols-3 gap-2 sm:gap-6 items-end border-b border-gray-100 pb-6 lg:border-none lg:pb-0">
          
          <div className="flex flex-col items-center gap-3">
            <img src={sp[0].img1} alt="Camry side view" className="w-full h-auto object-contain max-h-[140px]" />
            <div className="w-full border-t border-gray-300 relative pt-1.5 text-center">
              <span className="text-[11px] font-bold text-gray-500">4400</span>
              <div className="absolute top-0 left-0 bottom-0 w-[1px] bg-gray-300 h-1.5"></div>
              <div className="absolute top-0 right-0 bottom-0 w-[1px] bg-gray-300 h-1.5"></div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <img src={sp[0].img2} alt="Camry back view" className="w-[85%] h-auto object-contain max-h-[140px]" />
            <div className="w-[85%] border-t border-gray-300 relative pt-1.5 text-center">
              <span className="text-[11px] font-bold text-gray-500">1740</span>
              <div className="absolute top-0 left-0 bottom-0 w-[1px] bg-gray-300 h-1.5"></div>
              <div className="absolute top-0 right-0 bottom-0 w-[1px] bg-gray-300 h-1.5"></div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 relative">
            <div className="flex flex-col items-center gap-3 flex-1">
              <img src={sp[0].img3} alt="Camry front view" className="w-[85%] h-auto object-contain max-h-[140px]" />
              <div className="w-[85%] border-t border-gray-300 relative pt-1.5 text-center">
                <span className="text-[11px] font-bold text-gray-500">1740</span>
                <div className="absolute top-0 left-0 bottom-0 w-[1px] bg-gray-300 h-1.5"></div>
                <div className="absolute top-0 right-0 bottom-0 w-[1px] bg-gray-300 h-1.5"></div>
              </div>
            </div>
            
            <div className="h-[120px] border-l border-gray-300 relative pl-2 flex items-center mb-5">
              <span className="text-[11px] font-bold text-gray-500 whitespace-nowrap">1470</span>
              <div className="absolute top-0 left-0 w-1.5 h-[1px] bg-gray-300"></div>
              <div className="absolute bottom-0 left-0 w-1.5 h-[1px] bg-gray-300"></div>
            </div>
          </div>

        </div>

        <div className="lg:col-span-4 bg-gray-50/50 rounded-2xl p-6 sm:p-8 border border-gray-100/80">
          <div className="space-y-4">
            {specsData.map((spec, i) => (
              <div key={i} className="flex justify-between items-baseline gap-4 text-xs sm:text-sm">
                <span className="text-gray-500 font-medium">{spec.label}</span>
                <div className="flex-1 border-b border-dotted border-gray-200 min-w-[20px]"></div>
                <span className="text-slate-900 font-black tracking-tight text-right">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
      <div className="max-w-5xl mx-auto bg-white p-8">
      <div className="border-b border-gray-200 pb-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-sm">Двигатель</h3>
          <span>⌃</span>
        </div>

        <div className="text-xs">
          <div className="flex mb-4">
            <div className="w-64 font-semibold">
              Рабочий объем
            </div>
            <div>1368 см3</div>
          </div>

          <div className="flex mb-4">
            <div className="w-64 font-semibold">
              Диаметр цилиндра / Ход поршня
            </div>
            <div>72.0 / 84.0 мм</div>
          </div>

          <div className="flex mb-4">
            <div className="w-64 font-semibold">
              Степень сжатия
            </div>
            <div>10.5</div>
          </div>

          <div className="flex mb-4">
            <div className="w-64 font-semibold">
              Максимальная мощность
            </div>
            <div>
              100 л.с. (73.3 кВт) при 6000 об/мин
            </div>
          </div>

          <div className="flex">
            <div className="w-64 font-semibold">
              Максимальный крутящий момент
            </div>
            <div>
              132 Н*м при 4000 об/мин
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200 py-5 flex justify-between">
        <span className="font-bold text-sm">
          Трансмиссия
        </span>
        <span>⌄</span>
      </div>

      <div className="border-b border-gray-200 py-5 flex justify-between">
        <span className="font-bold text-sm">
          Рулевое управление
        </span>
        <span>⌄</span>
      </div>

      <div className="border-b border-gray-200 py-5 flex justify-between">
        <span className="font-bold text-sm">
          Подвеска
        </span>
        <span>⌄</span>
      </div>

      <div className="border-b border-gray-200 py-5 flex justify-between">
        <span className="font-bold text-sm">
          Масса
        </span>
        <span>⌄</span>
      </div>

      <div className="border-b border-gray-200 py-5 flex justify-between">
        <span className="font-bold text-sm">
          Кузов
        </span>
        <span>⌄</span>
      </div>

      <div className="border-b border-gray-200 py-5 flex justify-between">
        <span className="font-bold text-sm">
          Динамика
        </span>
        <span>⌄</span>
      </div>

      <div className="flex justify-center mt-10">
        <button className="bg-red-600 text-white px-10 py-3 text-xs rounded">
          ПОКАЗАТЬ ЕЩЕ
        </button>
      </div>
    </div>
    <div className="w-full max-w-5xl mx-auto p-6 bg-white font-sans text-gray-800">
      {/* Asosiy Sarlavha */}
      <div className="text-center text-2xl font-bold mb-8">Другие комплектации</div>

      {/* --- 2.0 AT BÖLIMI --- */}
      <div className="mb-10">
        {/* Kategoriya Sarlavhasi */}
        <div className="flex justify-center items-center gap-2 mb-6">
          <span className="font-bold text-lg">2.0 AT</span>
          <span className="bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">-25%</span>
        </div>

        {/* Jadval Sarlavhalari (Faqat katta ekranlarda ko'rinadi) */}
        <div className="hidden md:grid grid-cols-6 px-6 mb-2 text-xs text-gray-400 font-medium">
          <div>Комплектация</div>
          <div>Двигатель</div>
          <div>Коробка передач</div>
          <div>Привод</div>
          <div>Цена</div>
          <div>Со скидкой</div>
        </div>

        {/* Qatorlar ro'yxati */}
        <div className="space-y-3">
          {trimsData20.map((trim) => (
            <div key={trim.id} className="grid grid-cols-1 md:grid-cols-6 items-center bg-gray-50 rounded-2xl p-4 md:px-6 md:py-4 gap-4 md:gap-0 shadow-sm">
              <div className="flex items-center gap-2 font-semibold text-sm">
                <span>{trim.name}</span>
                <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md">{trim.discount}</span>
              </div>
              <div className="text-sm text-gray-600 md:text-gray-800"><span className="inline md:hidden text-gray-400 text-xs block">Двигатель:</span>{trim.engine}</div>
              <div className="text-sm text-gray-600 md:text-gray-800"><span className="inline md:hidden text-gray-400 text-xs block">Коробка:</span>{trim.transmission}</div>
              <div className="text-sm text-gray-600 md:text-gray-800"><span className="inline md:hidden text-gray-400 text-xs block">Привод:</span>{trim.drive}</div>
              <div className="text-sm text-gray-400 line-through"><span className="inline md:hidden text-gray-400 text-xs block no-underline">Цена:</span>{trim.price}</div>
              <div className="text-base font-bold text-gray-900"><span className="inline md:hidden text-gray-400 text-xs font-normal block">Со скидкой:</span>{trim.promoPrice}</div>
            </div>
          ))}
        </div>
      </div>

      {/* --- 2.5 AT BÖLIMI --- */}
      <div>
        {/* Kategoriya Sarlavhasi */}
        <div className="flex justify-center items-center gap-2 mb-6">
          <span className="font-bold text-lg">2.5 AT</span>
          <span className="bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">-25%</span>
        </div>

        {/* Jadval Sarlavhalari */}
        <div className="hidden md:grid grid-cols-6 px-6 mb-2 text-xs text-gray-400 font-medium">
          <div>Комплектация</div>
          <div>Двигатель</div>
          <div>Коробка передач</div>
          <div>Привод</div>
          <div>Цена</div>
          <div>Со скидкой</div>
        </div>

        <div className="space-y-3">
          {trimsData25.map((trim) => (
            <div key={trim.id} className="grid grid-cols-1 md:grid-cols-6 items-center bg-gray-50 rounded-2xl p-4 md:px-6 md:py-4 gap-4 md:gap-0 shadow-sm">
              <div className="flex items-center gap-2 font-semibold text-sm">
                <span>{trim.name}</span>
                <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md">{trim.discount}</span>
              </div>
              <div className="text-sm text-gray-600 md:text-gray-800"><span className="inline md:hidden text-gray-400 text-xs block">Двигатель:</span>{trim.engine}</div>
              <div className="text-sm text-gray-600 md:text-gray-800"><span className="inline md:hidden text-gray-400 text-xs block">Коробка:</span>{trim.transmission}</div>
              <div className="text-sm text-gray-600 md:text-gray-800"><span className="inline md:hidden text-gray-400 text-xs block">Привод:</span>{trim.drive}</div>
              <div className="text-sm text-gray-400 line-through"><span className="inline md:hidden text-gray-400 text-xs block no-underline">Цена:</span>{trim.price}</div>
              <div className="text-base font-bold text-gray-900"><span className="inline md:hidden text-gray-400 text-xs font-normal block">Со скидкой:</span>{trim.promoPrice}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="w-full max-w-6xl mx-auto my-6 bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden relative min-h-[380px] flex items-center">
      
      <div className="w-full lg:w-2/3 p-8 sm:p-12 z-10">
        
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
          Экспресс-заявка на кредит
        </h2>
        <p className="text-gray-500 text-sm sm:text-base font-medium mb-8">
          Узнай предварительное решение банков не выходя из дома!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-8">
          {features.map((item) => (
            <div key={item.id} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-600 flex items-center justify-center mt-1 shadow-sm shadow-red-200">
                <svg className="w-3 h-3 text-white stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 leading-tight">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-400 mt-0.5">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 items-stretch max-w-2xl mb-4">
          <input 
            type="text" 
            placeholder="Ваше имя" 
            className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-red-500 transition-colors"
          />
          <input 
            type="tel" 
            placeholder="Ваш телефон" 
            className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-red-500 transition-colors"
          />
          <button className="flex-1 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-md shadow-red-200 active:scale-98 transform">
            Обратный звонок
          </button>
        </div>

        <p className="text-[10px] text-gray-400 max-w-xl leading-normal">
          Нажимая кнопку «Получить предложение», Вы соглашаетесь с{' '}
          <span className="underline cursor-pointer hover:text-gray-600">политикой конфиденциальности</span>{' '}
          и правилами обработки персональных данных.
        </p>
      </div>

      <div className="hidden lg:block absolute right-0 bottom-0 top-0 w-1/3">
        <img 
          src="/src/assets/stock-photo-business-woman-in-glasses-112659731 2.png"
          alt="Express Credit" 
          className="w-full h-full object-cover object-top filter contrast-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent pointer-events-none" />
      </div>

    </div>
    <h2 className='font-bold text-[30px] ml-[-180px]'>Аналоги за те же деньги</h2>
<div className="flex flex-col md:flex-row gap-4 items-stretch justify-center p-4 ">
   
  <div className="flex-1 min-w-[280px] bg-white rounded-xl shadow-md p-4 flex flex-col justify-between">
    <div>
      <div className="flex items-center justify-between mt-2">
        <div className="bg-red-600 text-white text-[10px] px-3 py-1 rounded-r-full">
          Taklif kuni
        </div>
        <div className="text-[10px] leading-[11px] text-red-600 font-semibold text-right">
          Foyda
          <br />
          300 000 so'm
        </div>
      </div>

      <div className="relative h-[130px] mt-2">
        <img
          src="/city.png"
          alt=""
          className="absolute right-0 top-2 w-[140px] opacity-20"
        />

        <div className="absolute left-0 top-1 z-10 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#2e2e2e] flex items-center justify-center text-white text-[10px]">
              🎁
            </div>
            <div className="text-[10px] leading-[11px]">
              Jihozlar
              <br />
              <span className="text-red-500 font-semibold">sovg'a</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#2e2e2e] flex items-center justify-center text-white text-[10px]">
              🛡
            </div>
            <div className="text-[10px] leading-[11px]">
              KASKO
              <br />
              <span className="text-red-500 font-semibold">sovg'a</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#2e2e2e] flex items-center justify-center text-white text-[10px]">
              🛞
            </div>
            <div className="text-[10px] leading-[11px]">
              Shinalar
              <br />
              <span className="text-red-500 font-semibold">sovg'a</span>
            </div>
          </div>
        </div>

        <img
          src="/src/assets/pp.png"
          alt="Toyota"
          className="absolute right-0 bottom-0 w-[185px]"
        />
      </div>

      <div className="flex justify-between items-end mt-3">
        <div className="text-[15px] font-bold text-[#2d2d2d]">
          от 1 615 000 ₽
        </div>
        <div className="text-[11px] text-gray-500">
          Кредит от 115 000 ₽/мес.
        </div>
      </div>
    </div>

    <div className="flex mt-4 rounded-md overflow-hidden">
      <button className="flex-1 bg-red-600 text-white text-[11px] py-2 font-semibold hover:bg-red-700 transition">
        Резерв онлайн
      </button>
      <button className="flex-1 bg-[#202020] text-white text-[11px] py-2 font-semibold hover:bg-black transition">
        Купить
      </button>
      <button className="flex-1 bg-[#808080] text-white text-[11px] py-2 font-semibold hover:bg-gray-600 transition">
        Подробнее
      </button>
    </div>
  </div>

  <div className="flex-1 min-w-[280px] bg-white rounded-xl shadow-md p-4 flex flex-col justify-between">
    <div>
      <div className="flex items-center justify-between mt-2">
        <div className="bg-red-600 text-white text-[10px] px-3 py-1 rounded-r-full">
          Taklif kuni
        </div>
        <div className="text-[10px] leading-[11px] text-red-600 font-semibold text-right">
          Foyda
          <br />
          300 000 so'm
        </div>
      </div>

      <div className="relative h-[130px] mt-2">
        <img
          src="/city.png"
          alt=""
          className="absolute right-0 top-2 w-[140px] opacity-20"
        />

        <div className="absolute left-0 top-1 z-10 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#2e2e2e] flex items-center justify-center text-white text-[10px]">
              🎁
            </div>
            <div className="text-[10px] leading-[11px]">
              Jihozlar
              <br />
              <span className="text-red-500 font-semibold">sovg'a</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#2e2e2e] flex items-center justify-center text-white text-[10px]">
              🛡
            </div>
            <div className="text-[10px] leading-[11px]">
              KASKO
              <br />
              <span className="text-red-500 font-semibold">sovg'a</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#2e2e2e] flex items-center justify-center text-white text-[10px]">
              🛞
            </div>
            <div className="text-[10px] leading-[11px]">
              Shinalar
              <br />
              <span className="text-red-500 font-semibold">sovg'a</span>
            </div>
          </div>
        </div>

        <img
          src="/src/assets/pp.png"
          alt="Toyota"
          className="absolute right-0 bottom-0 w-[185px]"
        />
      </div>

      <div className="flex justify-between items-end mt-3">
        <div className="text-[15px] font-bold text-[#2d2d2d]">
          от 1 615 000 ₽
        </div>
        <div className="text-[11px] text-gray-500">
          Кредит от 115 000 ₽/мес.
        </div>
      </div>
    </div>

    <div className="flex mt-4 rounded-md overflow-hidden">
      <button className="flex-1 bg-red-600 text-white text-[11px] py-2 font-semibold hover:bg-red-700 transition">
        Резерв онлайн
      </button>
      <button className="flex-1 bg-[#202020] text-white text-[11px] py-2 font-semibold hover:bg-black transition">
        Купить
      </button>
      <button className="flex-1 bg-[#808080] text-white text-[11px] py-2 font-semibold hover:bg-gray-600 transition">
        Подробнее
      </button>
    </div>
  </div>

  <div className="flex-1 min-w-[280px] bg-white rounded-xl shadow-md p-4 flex flex-col justify-between">
    <div>
      <div className="flex items-center justify-between mt-2">
        <div className="bg-red-600 text-white text-[10px] px-3 py-1 rounded-r-full">
          Taklif kuni
        </div>
        <div className="text-[10px] leading-[11px] text-red-600 font-semibold text-right">
          Foyda
          <br />
          300 000 so'm
        </div>
      </div>

      <div className="relative h-[130px] mt-2">
        <img
          src="/city.png"
          alt=""
          className="absolute right-0 top-2 w-[140px] opacity-20"
        />

        <div className="absolute left-0 top-1 z-10 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#2e2e2e] flex items-center justify-center text-white text-[10px]">
              🎁
            </div>
            <div className="text-[10px] leading-[11px]">
              Jihozlar
              <br />
              <span className="text-red-500 font-semibold">sovg'a</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#2e2e2e] flex items-center justify-center text-white text-[10px]">
              🛡
            </div>
            <div className="text-[10px] leading-[11px]">
              KASKO
              <br />
              <span className="text-red-500 font-semibold">sovg'a</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#2e2e2e] flex items-center justify-center text-white text-[10px]">
              🛞
            </div>
            <div className="text-[10px] leading-[11px]">
              Shinalar
              <br />
              <span className="text-red-500 font-semibold">sovg'a</span>
            </div>
          </div>
        </div>

        <img
          src="/src/assets/pp.png"
          alt="Toyota"
          className="absolute right-0 bottom-0 w-[185px]"
        />
      </div>

      <div className="flex justify-between items-end mt-3">
        <div className="text-[15px] font-bold text-[#2d2d2d]">
          от 1 615 000 ₽
        </div>
        <div className="text-[11px] text-gray-500">
          Кредит от 115 000 ₽/мес.
        </div>
      </div>
    </div>

    <div className="flex mt-4 rounded-md overflow-hidden">
      <button className="flex-1 bg-red-600 text-white text-[11px] py-2 font-semibold hover:bg-red-700 transition">
        Резерв онлайн
      </button>
      <button className="flex-1 bg-[#202020] text-white text-[11px] py-2 font-semibold hover:bg-black transition">
        Купить
      </button>
      <button className="flex-1 bg-[#808080] text-white text-[11px] py-2 font-semibold hover:bg-gray-600 transition">
        Подробнее
      </button>
    </div>
  </div>
</div>
   <button className='w-[220px] h-[65px] text-white bg-red-700'>Показать еще</button>
   <div className="relative max-w-[1240px] mx-auto px-4 py-12 font-sans text-[#2d2d2d]">
      
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[32px] font-bold tracking-tight">Нам доверяют</h2>
        
        <div className="flex gap-2">
          <button className="w-10 h-10 border border-gray-200 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-50 transition shadow-sm">
            <span className="text-lg">‹</span>
          </button>
          <button className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white hover:bg-red-700 transition shadow-sm">
            <span className="text-lg">›</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
        {reviewSites.map((site) => (
          <div key={site.id} className="bg-white p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-50 flex flex-col justify-between h-[110px]">
            <div>
              <h4 className="text-[14px] font-bold leading-tight">{site.title}</h4>
              <p className="text-[11px] text-gray-400 mt-0.5">{site.subtitle}</p>
            </div>
            
            <div className="flex items-center justify-between mt-2">
              <div className="flex flex-col gap-0.5">
                <span className="text-[9px] text-gray-400 leading-none">Рекомендуют 90%</span>
                <div className="flex text-amber-400 text-[11px]">
                  ★★★★<span className="text-gray-200">★</span>
                </div>
              </div>
              <div className="bg-[#4CD170] text-white text-[12px] font-bold px-2 py-0.5 rounded-md">
                {site.rating}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        <div className="bg-[#F6F6F6] p-6 rounded-2xl flex items-center justify-between h-[120px]">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">Я</span>
              <div className="flex flex-col">
                <span className="text-[18px] font-bold tracking-tight leading-none text-black">Яндекс <span className="font-normal text-gray-600">Карты</span></span>
                <span className="text-[11px] text-gray-400 mt-1">Название автосалона</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="text-right">
              <span className="text-[10px] text-gray-400 block">Рекомендуют 90%</span>
              <div className="flex text-amber-400 text-[12px] justify-end mt-0.5">
                ★★★★<span className="text-gray-300">★</span>
              </div>
            </div>
            <div className="bg-[#4CD170] text-white text-[28px] font-bold px-6 py-2 rounded-2xl min-w-[90px] text-center shadow-sm">
              4.5
            </div>
          </div>
        </div>

        <div className="bg-[#F6F6F6] p-6 rounded-2xl flex items-center justify-between h-[120px]">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <svg className="w-7 h-7" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <div className="flex flex-col">
                <span className="text-[18px] font-bold tracking-tight leading-none text-gray-700">Google <span className="font-normal text-gray-500">Maps</span></span>
                <span className="text-[11px] text-gray-400 mt-1">Название автосалона</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="text-right">
              <span className="text-[10px] text-gray-400 block">Рекомендуют 90%</span>
              <div className="flex text-amber-400 text-[12px] justify-end mt-0.5">
                ★★★★<span className="text-gray-300">★</span>
              </div>
            </div>
            <div className="bg-[#4CD170] text-white text-[28px] font-bold px-6 py-2 rounded-2xl min-w-[90px] text-center shadow-sm">
              4.1
            </div>
          </div>
        </div>

      </div>

    </div>
   <div className="w-full min-h-screen bg-gray-50 py-10 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto mb-8 text-center md:text-left md:pl-[260px]">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Отзывы</h2>
      </div>

      <div className="flex flex-wrap gap-6 justify-center items-center opacity-100">
        {reviews.map((review, index) => (
          <div 
            key={index}
            className="w-full sm:max-w-[447px] h-auto min-h-[550px] md:h-[585px] bg-white rounded-[24px] shadow-sm overflow-hidden flex flex-col p-5 md:p-6 border border-gray-100"
          >
            <div className="w-full h-[200px] sm:h-[250px] md:h-[280px] rounded-[18px] overflow-hidden relative group cursor-pointer">
              <img 
                src={review.image} 
                alt={`${review.name}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              
              <div className="absolute inset-0 flex items-center justify-center">
              
              </div>
            </div>

            <div className="flex flex-col flex-1 justify-between mt-5 md:mt-6">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-4">
                  {review.name}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed line-clamp-4 md:line-clamp-5">
                  {review.text}
                </p>
              </div>

              <button className="w-fit flex items-center gap-2 bg-[#EAEAEA] hover:bg-gray-300 text-gray-800 font-medium py-2.5 px-5 md:py-3 md:px-6 rounded-xl transition-colors text-xs md:text-sm mt-4">
                <span>{review.buttonText}</span>
                <svg 
                  className="w-4 h-4 text-gray-600" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button> 
            </div>
          </div>
        ))}
      </div>
    </div>
        <div className="w-full flex justify-center px-4 py-10 mt-[-500px]">
  <div
    className="
      relative
      w-full
      max-w-[1400px]
      min-h-[389px]
      rounded-[25px]
      bg-[#efefef]/60
      overflow-hidden
      flex
      flex-col
      lg:flex-row
      items-center
      justify-between
      px-6
      sm:px-8
      md:px-12
      lg:px-16
      py-8
    "
  >
    <div className="w-full lg:w-[60%] z-10">
      <h2
        className="
          text-[24px]
          sm:text-[32px]
          md:text-[42px]
          font-bold
          leading-tight
          text-[#222]
        "
      >
        Получите спецпредложение
        <br />
        с максимальной скидкой!
      </h2>

      <p
        className="
          mt-4
          text-[12px]
          sm:text-[14px]
          text-gray-600
          leading-6
          max-w-[650px]
        "
      >
        Воспользуйтесь спецпредложением, которое откроет Вам простой путь
        покупки автомобиля с максимальной скидкой, а также упростит
        оформление всех документов за 1 день.
      </p>

      <div className="mt-8 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Ваше имя"
          className="
            h-[55px]
            w-full
            md:w-[220px]
            rounded-lg
            border
            border-gray-300
            bg-white
            px-4
            outline-none
          "
        />

        <input
          type="text"
          placeholder="Ваш телефон"
          className="
            h-[55px]
            w-full
            md:w-[260px]
            rounded-lg
            border
            border-gray-300
            bg-white
            px-4
            outline-none
          "
        />

        <button
          className="
            h-[55px]
            w-full
            md:w-[220px]
            rounded-lg
            bg-red-600
            text-white
            font-semibold
            hover:bg-red-700
            transition
          "
        >
          ЗАКАЗАТЬ ЗВОНОК
        </button>
      </div>

      <p
        className="
          mt-5
          text-[10px]
          sm:text-[11px]
          text-gray-400
          max-w-[700px]
        "
      >
        Нажимая кнопку «Получить предложение», Вы соглашаетесь с политикой
        конфиденциальности и правилами обработки персональных данных.
      </p>
    </div>

    <div
      className="
        relative
        w-full
        lg:w-[40%]
        flex
        justify-center
        mt-8
        lg:mt-0
      "
    >
      <img
        src="/src/assets/qiz.png"
        alt=""
        className="
          max-h-[350px]
          sm:max-h-[380px]
          object-contain
        "
      />
    </div>
  </div>
</div>
    <div className="w-full  min-h-screen bg-white py-12 px-4 md:px-16 lg:px-24">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
        <div className="flex items-center gap-4 justify-center md:justify-start">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Блог</h2>
          <button className="bg-[#D90000] hover:bg-red-700 text-white font-medium text-sm py-2 px-6 rounded-full transition-colors">
            Все статьи
          </button>
        </div>

        <div className="flex items-center justify-center gap-2">
          <button className="w-12 h-12 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="w-12 h-12 rounded-xl bg-[#D90000] text-white flex items-center justify-center hover:bg-red-700 transition-colors shadow-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sich.map((item, index) => (
          <div key={index} className="w-full flex flex-col group cursor-pointer">
            <div className="w-full aspect-[4/3] rounded-[24px] overflow-hidden mb-4">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="text-gray-400 text-xs font-normal">
                {item.date}
              </span>
              <h3 className="text-gray-900 font-bold text-base leading-snug line-clamp-2 group-hover:text-red-600 transition-colors">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full mt-[-400px] min-h-screen bg-white py-16 px-4 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="w-full max-w-[1400px] flex flex-col gap-10">
        {duck.map((block, index) => (
          <div
            key={index}
            className="w-full lg:h-[110px] flex flex-col gap-2 opacity-100"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#111111] text-left">
              {block.title}
            </h2>
            <p className="text-[#555555] text-xs md:text-sm leading-relaxed text-justify lg:line-clamp-3">
              {block.text}
            </p>
          </div>
        ))}
      </div>
    </div>

    </div>
  );
}