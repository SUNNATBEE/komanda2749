import React, { useState } from 'react';

const InsurancePage = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, phone });
  };

  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] text-gray-800 antialiased font-sans pb-20">
      
      <section className="relative pt-8 pb-44 md:pb-36 px-4 md:px-12 lg:px-24 text-white rounded-b-[40px] overflow-hidden">
        
        <img 
          src="/image.png" 
          alt="Fon rasmi" 
          className="absolute inset-0 w-full h-full object-cover z-0" 
        />
        
        <div className="absolute inset-0 bg-gradient-to-b  z-0"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-xs opacity-60 flex gap-2 items-center mb-8">
            <span>Главная</span> <span>/</span> <span>Каталог авто</span> <span>/</span> <span className="opacity-100 font-medium">Тарифы</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight max-w-3xl mb-4">
            Страховые полисы <br /> без комиссий и надбавок
          </h1>
          <p className="text-sm md:text-lg opacity-90 max-w-xl mb-10 font-light">
            Расчет сразу в нескольких компаниях и официальное оформление страхового полиса
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8 max-w-3xl mb-16 text-sm font-medium">
            <div className="flex items-center gap-3"><span className="text-[#E53E3E] text-lg shrink-0"><img src="/true.png" alt="check" /> </span>Осаго для <br /> такси</div>
            <div className="flex items-center gap-3"><span className="text-[#E53E3E] text-lg shrink-0"><img src="/true.png" alt="check" /></span>Гарантия самой низкой цены полиса </div>
            <div className="flex items-center gap-3"><span className="text-[#E53E3E] text-lg shrink-0"><img src="/true.png" alt="check" /></span> Официальный полис</div>
            <div className="flex items-center gap-3"><span className="text-[#E53E3E] text-lg shrink-0"><img src="/true.png" alt="check" /></span> Оплата напрямую в СК</div>
            <div className="flex items-center gap-3"><span className="text-[#E53E3E] text-lg shrink-0"><img src="/true.png" alt="check" /></span> На базе партнеров АВТО СЕТЬ</div>
            <div className="flex items-center gap-3"><span className="text-[#E53E3E] text-lg shrink-0"><img src="/true.png" alt="check" /></span>Возможен безналичный расчет </div>
          </div>

          <div className="absolute  left-4 right-4 md:left-0 md:right-0 bg-white rounded-2xl shadow-xl p-6 text-gray-950 border border-gray-100 z-20 max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="w-full lg:w-auto text-center lg:text-left">
                <h4 className="text-lg font-bold text-gray-900 mb-1">Получите специальную <br className="hidden sm:inline" /> цену</h4>
                <span className="inline-block bg-[#D32F2F] text-white text-[10px] px-2.5 py-0.5 rounded font-bold tracking-wider">
                  ТОЛЬКО ДО 19.05.21
                </span>
              </div>

              <form onSubmit={handleSubmit} className="w-full lg:flex-1 flex flex-col sm:flex-row gap-4 justify-end items-center">
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full sm:w-64 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:bg-white transition"
                  required
                />
                <input 
                  type="tel" 
                  placeholder="Ваш телефон" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full sm:w-64 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:bg-white transition"
                  required
                />
                <button 
                  type="submit" 
                  className="w-full sm:w-auto bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-md transition whitespace-nowrap"
                >
                  Получить предложение
                </button>
              </form>
            </div>
            <p className="text-[10px] text-gray-400 mt-3 text-center lg:text-center">
              Нажимая кнопку "Получить предложение" Вы соглашаетесь на обработку персональных данных
            </p>
          </div>
        </div>
      </section>

      <div className="h-36 md:h-28"></div>

      <section className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-6 lg:gap-12">
          
          <div className="bg-white w-full rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <img src="/kasko.png" className="w-32 sm:w-40 object-contain" alt="Kasko" />
              <div>
                <h3 className="font-bold text-lg text-gray-900">КАСКО</h3>
                <p className="text-xs text-gray-500 max-w-[200px]">Страхование транспортного средства от ущерба, хищения и угона</p>
              </div>
            </div>
            <button className="w-full sm:w-auto bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl transition shrink-0">
              Рассчитать
            </button>
          </div>

          <div className="bg-white w-full rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <img src="/kasko2.png" className="w-32 sm:w-40 object-contain" alt="Osago" />
              <div>
                <h3 className="font-bold text-lg text-gray-900">ОСАГО</h3>
                <p className="text-xs text-gray-500 max-w-[200px]">Обязательное страхование автогражданской ответственности</p>
              </div>
            </div>
            <button className="w-full sm:w-auto bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl transition shrink-0">
              Рассчитать
            </button>
          </div>
          
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24 mb-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 text-center lg:text-left">Оформить ОСАГО легко и удобно</h2>
            <p className="text-xs text-gray-500 leading-relaxed mb-6 max-w-xl text-center lg:text-left">
              Полис ОСАГО – это обязательное страхование автогражданской ответственности за причинение вреда жизни, здоровью и имуществу третьих лиц при эксплуатации автомобиля.
            </p>
            
            <h4 className="font-bold text-sm text-gray-900 mb-4 text-center lg:text-left">Преимущества электронного полиса:</h4>
            <ul className="space-y-3 mb-8 max-w-xl">
              <li className="flex items-start gap-3 text-xs text-gray-600">
                <span className="text-[#D32F2F] mt-0.5 shrink-0">➔</span>
                <span>Нет необходимости посещать офис для оформления или продления полиса ОСАГО</span>
              </li>
              <li className="flex items-start gap-3 text-xs text-gray-600">
                <span className="text-[#D32F2F] mt-0.5 shrink-0">➔</span>
                <span>Отсутствует риск потерять бумажный экземпляр (данные всегда в почтовом ящике клиента)</span>
              </li>
              <li className="flex items-start gap-3 text-xs text-gray-600">
                <span className="text-[#D32F2F] mt-0.5 shrink-0">➔</span>
                <span>100% гарантия достоверности полиса (аналог бумажного экземпляра)</span>
              </li>
              <li className="flex items-start gap-3 text-xs text-gray-600">
                <span className="text-[#D32F2F] mt-0.5 shrink-0">➔</span>
                <span>Надежная защита личного капитала и интересов правообладателя и оплата страховки. Отсутствует риск мошенничества (только одобренные страховщики)</span>
              </li>
            </ul>

            <div className="text-center lg:text-left">
              <button className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-xl shadow-md transition">
                Оформить полис
              </button>
            </div>
          </div>

          <div className="flex-1 flex justify-center order-1 lg:order-2 relative w-full">
            <img src="/qogoz.png" className="w-full max-w-md object-contain" alt="Policy Mockup" />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24 mb-24">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8 text-center lg:text-left">
          Выбрать свое КАСКО просто и выгодно
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-extrabold text-base text-gray-900 mb-6">Доступное КАСКО</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-2.5 text-xs text-gray-600 leading-normal">
                  <img src="/true.png" className="mt-0.5 shrink-0" alt="check" />
                  <span>Единый тариф независимо от стажа и возраста - 1.9%</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs text-gray-600 leading-normal">
                  <img src="/true.png" className="mt-0.5 shrink-0" alt="check" />
                  <span>Защита по основным рискам: угон, полная гибель, ДТП с участием третьих лиц, в которых установлен виновник</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs text-gray-600 leading-normal">
                  <img src="/true.png" className="mt-0.5 shrink-0" alt="check" />
                  <span>Необходимый уровень защиты по доступной цене</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs text-gray-600 leading-normal">
                  <img src="/true.png" className="mt-0.5 shrink-0" alt="check" />
                  <span>Нет ограничений по допущенным к управлению</span>
                </li>
              </ul>
            </div>
            <button className="w-full bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl transition mt-auto">
              Оформить полис
            </button>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-extrabold text-base text-gray-900 mb-6">Оптимальное КАСКО</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-2.5 text-xs text-gray-600 leading-normal">
                  <img src="/true.png" className="mt-0.5 shrink-0" alt="check" />
                  <span>Полноценная защита по рискам "Угон" и "Ущерб"</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs text-gray-600 leading-normal">
                  <img src="/true.png" className="mt-0.5 shrink-0" alt="check" />
                  <span>Первый страховой случай покрывается без ограничений</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs text-gray-600 leading-normal">
                  <img src="/true.png" className="mt-0.5 shrink-0" alt="check" />
                  <span>Со 2-го страхового случая применяется безусловная франшиза</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs text-gray-600 leading-normal">
                  <img src="/true.png" className="mt-0.5 shrink-0" alt="check" />
                  <span>Индивидуальный выгодный тариф для каждого клиента</span>
                </li>
              </ul>
            </div>
            <button className="w-full bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl transition mt-auto">
              Оформить полис
            </button>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between md:col-span-2 lg:col-span-1">
            <div>
              <h3 className="font-extrabold text-base text-gray-900 mb-6">Полное КАСКО</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-2.5 text-xs text-gray-600 leading-normal">
                  <img src="/true.png" className="mt-0.5 shrink-0" alt="check" />
                  <span>Полная защита по рискам "Угон" и "Ущерб"</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs text-gray-600 leading-normal">
                  <img src="/true.png" className="mt-0.5 shrink-0" alt="check" />
                  <span>Возможность выбора франшизы при покупке в наличные</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs text-gray-600 leading-normal">
                  <img src="/true.png" className="mt-0.5 shrink-0" alt="check" />
                  <span>Индивидуальный выгодный тариф для каждого клиента</span>
                </li>
              </ul>
            </div>
            <button className="w-full bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl transition mt-auto">
              Оформить полис
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900">Наши партнеры</h2>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-lg bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-400 hover:text-gray-600 transition text-xs">
              &lt;
            </button>
            <button className="w-8 h-8 rounded-lg bg-[#D32F2F] flex items-center justify-center text-white shadow-sm hover:bg-[#B71C1C] transition text-xs">
              &gt;
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-100 hover:bg-white border border-transparent hover:border-gray-100 rounded-2xl h-20 p-4 flex items-center justify-center transition shadow-sm">
            <img src="/alfa.png"  className="max-h-full object-contain" />
          </div>
          <div className="bg-gray-100 hover:bg-white border border-transparent hover:border-gray-100 rounded-2xl h-20 p-4 flex items-center justify-center transition shadow-sm">
            <img src="/bck.png" alt="VSK" className="max-h-full object-contain" />
          </div>
          <div className="bg-gray-100 hover:bg-white border border-transparent hover:border-gray-100 rounded-2xl h-20 p-4 flex items-center justify-center transition shadow-sm">
            <img src="/3rasm.png" alt="Partner 3" className="max-h-full object-contain" />
          </div>
          <div className="bg-gray-100 hover:bg-white border border-transparent hover:border-gray-100 rounded-2xl h-20 p-4 flex items-center justify-center transition shadow-sm">
            <img src="/strax.png" alt="Rosgosstrakh" className="max-h-full object-contain" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default InsurancePage;