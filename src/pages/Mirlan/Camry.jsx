import React from 'react';
import Camry from './Camry'; 
import Tayo from './Tayo';

const CamryInventory = () => {
  return (
    <div className="w-full max-w-[1300px] mx-auto font-sans text-gray-800 pb-20">
      
      <nav className="flex justify-center border-b border-gray-200 text-sm font-medium text-gray-500 mb-12">
        <button className="px-6 py-4 text-red-600 border-b-2 border-red-600 font-bold">
          Автомобили в наличии
        </button>
        <button className="px-6 py-4 hover:text-gray-900 transition-colors">Особенности модели</button>
        <button className="px-6 py-4 hover:text-gray-900 transition-colors">Галерея</button>
        <button className="px-6 py-4 hover:text-gray-900 transition-colors">Характеристики</button>
        <button className="px-6 py-4 hover:text-gray-900 transition-colors">Спецпредложения</button>
      </nav>

      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Автомобили Toyota Camry в наличии
      </h2>

      <div className="flex items-center gap-3 mb-6">
        <span className="text-xl font-bold text-gray-900">2.5 AT</span>
        <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded">
          -25%
        </span>
      </div>

      <div className="grid grid-cols-6 text-xs text-gray-400 font-medium px-6 mb-3">
        <div>Комплектация</div>
        <div>Двигатель</div>
        <div>Коробка передач</div>
        <div>Привод</div>
        <div className="text-right pr-4">Цена</div>
        <div>Со скидкой</div>
      </div>

      <div className="bg-gray-100 rounded-3xl overflow-hidden border border-gray-200 shadow-sm mb-6">
        
        <div className="grid grid-cols-6 items-center bg-gray-100 p-6 font-bold text-gray-900 text-sm border-b border-gray-200">
          <div>2.5 AT Стандарт 2020</div>
          <div className="font-normal text-gray-600 text-xs">2.0 - 75 л.с.</div>
          <div className="font-normal text-gray-600 text-xs">6MT</div>
          <div className="font-normal text-gray-600 text-xs">2WD</div>
          <div className="text-right pr-4 text-gray-400 line-through text-xs font-normal">2 000 000 ₽</div>
          <div className="flex items-center justify-between w-full col-span-1">
            <span className="text-base font-extrabold text-gray-900">1 615 000 ₽</span>
            <button className="w-6 h-6 bg-white rounded-full flex items-center justify-center border border-gray-300 shadow-sm">
              <span className="text-xs text-gray-600">▲</span>
            </button>
          </div>
        </div>

        <div className="bg-white p-6 grid grid-cols-12 gap-6 items-start border-b border-gray-200">
          
          <div className="col-span-3 relative flex flex-col items-center">
            <span className="absolute top-0 left-0 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
              Выгода 380 000 ₽
            </span>
            <img src="/src/assets/" alt="Toyota Camry View" className="w-full object-contain my-4" />
            <div className="flex gap-1 justify-center mt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-900"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-green-800"></span>
            </div>
          </div>

          <div className="col-span-3 space-y-4">
            <div>
              <h4 className="font-bold text-base text-gray-900">Toyota Camry</h4>
              <p className="text-xs text-red-600 font-bold mt-1">В наличии с ПТС</p>
              <p className="text-xs text-gray-500">В наличии: <strong className="text-gray-800">1 авто</strong></p>
              <p className="text-xs text-gray-500">Доступна в <strong className="text-gray-800">10 цветах</strong></p>
            </div>
            
            <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-700 font-medium">
              <div className="border border-gray-200 rounded-lg p-1.5 flex items-center gap-1.5 bg-gray-50">
                <span>⚙️</span> 115 л.с.
              </div>
              <div className="border border-gray-200 rounded-lg p-1.5 flex items-center gap-1.5 bg-gray-50">
                <span>⛽</span> 5.3 л/км
              </div>
              <div className="border border-gray-200 rounded-lg p-1.5 flex items-center gap-1.5 bg-gray-50">
                <span>⏱️</span> 10.3 с.
              </div>
              <div className="border border-gray-200 rounded-lg p-1.5 flex items-center gap-1.5 bg-gray-50">
                <span>🏎️</span> 189 км/ч
              </div>
            </div>

            <button className="w-full text-left border border-red-500 text-red-600 text-xs font-bold py-2 px-3 rounded-lg flex justify-between items-center bg-red-50/50">
              <span>📋 Полное описание</span>
              <span>▲</span>
            </button>
          </div>

          <div className="col-span-3 space-y-3 pt-2">
            <div className="flex items-start gap-2.5">
              <span className="bg-gray-800 text-white rounded-md p-1 text-xs">🛡️</span>
              <div>
                <p className="text-xs font-bold text-red-600 leading-tight">Страхование</p>
                <p className="text-[10px] text-gray-400">в подарок</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="bg-red-600 text-white rounded-md p-1 text-xs">🎁</span>
              <div>
                <p className="text-xs font-bold text-red-600 leading-tight">Оборудование</p>
                <p className="text-[10px] text-gray-400">в подарок</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="bg-gray-500 text-white rounded-md p-1 text-xs">🛞</span>
              <div>
                <p className="text-xs font-bold text-red-600 leading-tight">Комплект резины</p>
                <p className="text-[10px] text-gray-400">в подарок</p>
              </div>
            </div>
          </div>

          <div className="col-span-3 text-right space-y-4">
            <div>
              <div className="text-2xl font-extrabold text-gray-900">1 615 000 ₽</div>
              <div className="text-xs text-gray-400 line-through">1 915 000 ₽</div>
              <div className="text-xs text-gray-500 mt-2">Кредит <strong className="text-gray-800">от 10 000 ₽/мес</strong></div>
            </div>
            
            <div className="space-y-2">
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs p-3 rounded-xl transition-colors shadow-sm">
                Забронировать
              </button>
              <div className="grid grid-cols-2 gap-2">
                <button className="bg-gray-800 hover:bg-gray-900 text-white text-[11px] font-bold p-2.5 rounded-lg transition-colors">
                  В Trade-in
                </button>
                <button className="bg-gray-500 hover:bg-gray-600 text-white text-[11px] font-bold p-2.5 rounded-lg transition-colors">
                  Подробнее
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className="bg-gray-50/50 p-8 grid grid-cols-3 gap-8 border-t border-gray-100 text-xs">
          
          <div>
            <h5 className="font-bold text-sm text-gray-900 mb-3">Безопасность</h5>
            <ul className="space-y-2 text-gray-600 list-disc list-inside marker:text-red-600">
              <li>Запасное колесо неполноразмерное</li>
              <li>Передние тормоза: Дисковые</li>
              <li>Задние тормоза: Барабанные</li>
              <li>Задние колеса: 175/65R14</li>
              <li>Передние колеса: 175/65R14</li>
              <li>Передний стабилизатор</li>
              <li>Передняя подвеска: Независимая, амортизационная стойка типа МакФерсон</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-sm text-gray-900 mb-3">Экстерьер</h5>
            <ul className="space-y-2 text-gray-600 list-disc list-inside marker:text-red-600">
              <li>Задняя подвеска: Полузависимая, торсионная балка</li>
              <li>Иммобилайзер</li>
              <li>Вспомогательная система торможения (BAS)</li>
              <li>Антиблокировочная система (ABS)</li>
              <li>Система помощи при старте на подъеме (HAC)</li>
              <li>Система электронного контроля устойчивости (ESP)</li>
              <li>Система контроля давления в шинах</li>
              <li>Подушка безопасности водительская</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-sm text-gray-900 mb-3">Интерьер</h5>
            <ul className="space-y-2 text-gray-600 list-disc list-inside marker:text-red-600">
              <li>Подушка безопасности пассажира с функцией деактивации</li>
              <li>Подушка безопасности переднего пассажира</li>
              <li>Дополнительный стоп-сигнал</li>
              <li>ЭРА-ГЛОНАСС</li>
              <li>Крепление ISOFIX</li>
            </ul>
          </div>

        </div>

      </div>

      <div className="grid grid-cols-3 gap-6 mt-12">
        
        <div className="bg-white border border-gray-100 shadow-md rounded-[24px] p-6 flex justify-between items-center relative overflow-hidden group min-h-[140px]">
          <div className="max-w-[60%] z-10">
            <h5 className="font-extrabold text-sm text-gray-900 mb-1">Рассрочка от ВТБ</h5>
            <p className="text-[11px] text-gray-400 mb-4">Рассрочка 0%</p>
            <button className="bg-blue-100 hover:bg-blue-200 text-blue-600 text-xs font-bold px-4 py-2 rounded-xl transition-colors">
              Рассрочка
            </button>
          </div>
          <span className="text-6xl opacity-80 select-none transform group-hover:scale-105 transition-transform"><img src="/src/assets/beautiful-girl-broker-holding-sale-600w-242280859 1.png" alt="" /></span>
        </div>

        <div className="bg-white border border-gray-100 shadow-md rounded-[24px] p-6 flex justify-between items-center relative overflow-hidden group min-h-[140px]">
          <div className="max-w-[65%] z-10">
            <h5 className="font-extrabold text-sm text-gray-900 mb-1">Выгода по Trade-in</h5>
            <p className="text-[10px] text-gray-400 mb-4 leading-tight">Дополнительная выгода до 200 000 руб</p>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold px-4 py-2 rounded-xl transition-colors">
              Trade-in
            </button>
          </div>
          <span className="text-6xl opacity-80 select-none transform group-hover:scale-105 transition-transform"><img src="/src/assets/Mask Group.png" alt="" /></span>
        </div>

        <div className="bg-white border border-gray-100 shadow-md rounded-[24px] p-6 flex justify-between items-center relative overflow-hidden group min-h-[140px]">
          <div className="max-w-[60%] z-10">
            <h5 className="font-extrabold text-sm text-gray-900 mb-1">Первоначальный взнос 0%</h5>
            <p className="text-[11px] text-gray-400 mb-4">Кредит 1,9%</p>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold px-4 py-2 rounded-xl transition-colors">
              Скидка
            </button>
          </div>
          <span className="text-6xl opacity-80 select-none transform group-hover:scale-105 transition-transform"><img src="/src/assets/qiz.png" alt="" /></span>
        </div>

      </div>
      <Tayo  />

    </div>
  );
};

export default CamryInventory;