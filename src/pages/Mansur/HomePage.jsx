import PagePlaceholder from '../../components/layout/PagePlaceholder'
import city from "../../assets/city.jpg"
import toyota from "../../assets/toyota.png"
import kia from "../../assets/kia.png"
import vol from "../../assets/vol.png"
import skoda from "../../assets/skoda.png"
import famcar from "../../assets/famcar.png"
import jour from "../../assets/jour.png"
import cicar from "../../assets/cicar.png"


export default function HomePage() {
  return (
   <>
   <section>
    <div className="relative max-w-[1440px]  border border-none mx-auto rounded-2xl border-2 bg-[#f5f5f5] p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between min-h-[400px]">
  
  
  <img  src={city} alt="City Background" className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none z-0" />

  <div className="relative z-10 flex flex-col space-y-4 max-w-md">
    <span className="self-start bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
      Осталось всего 10 авто!
    </span>
    
  
    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
      Грандиозная распродажа тестового парка!
    </h2>
    
    <p className="text-gray-500 text-lg">
      Узнай свою цену!
    </p>

    
  </div>

  <div className="relative z-10 w-full md:w-[55%] h-[280px] md:h-[320px] self-end mt-6 md:mt-0">
    
    
    <img src={vol} alt="Volvo"className="absolute bottom-[28%] right-[5%] w-[40%] z-10 h-auto object-contain" />
       
      
    <img src={toyota} alt="Toyota" className="absolute bottom-[20%] right-[25%] w-[48%] z-20 h-auto object-contain" />
    <img  src={kia}  alt="Kia"  className="absolute bottom-[5%] left-0 w-[68%] z-30 h-auto object-contain filter drop-shadow-[0_25px_15px_rgba(0,0,0,0.4)]" /> 
</div>
    
    </div>

    <div className="max-w-[1200px] m-auto bg-white rounded-2xl border border-gray-200 p-6 md:p-8 flex flex-col lg:flex-row gap-8">
        
        <div className="w-full lg:w-[60%] grid grid-cols-2 sm:grid-cols-3 gap-4 items-center opacity-80">
          <div className="flex items-center space-x-2 text-sm font-medium text-slate-700 hover:text-blue-500"><span></span> <span>Kia</span></div>
          <div className="flex items-center space-x-2 text-sm font-medium text-slate-700 hover:text-blue-500"><span></span> <span>Brilliance</span></div>
          <div className="flex items-center space-x-2 text-sm font-medium text-slate-700 hover:text-blue-500"><span></span> <span>Citroen</span></div>
          <div className="flex items-center space-x-2 text-sm font-medium text-slate-700 hover:text-blue-500"><span></span> <span>Ford</span></div>
          <div className="flex items-center space-x-2 text-sm font-medium text-slate-700 hover:text-blue-500"><span></span> <span>Haima</span></div>
          <div className="flex items-center space-x-2 text-sm font-medium text-slate-700 hover:text-blue-500"><span></span> <span>Lifan</span></div>
           <div className="flex items-center space-x-2 text-sm font-medium text-slate-700 hover:text-blue-500"><span></span> <span>Peugeot</span></div>
          <div className="flex items-center space-x-2 text-sm font-medium text-slate-700 hover:text-blue-500"><span></span> <span>UAZ</span></div>
          <div className="flex items-center space-x-2 text-sm font-medium text-slate-700 hover:text-blue-500"><span></span> <span>Hyundai</span></div>
          <div className="flex items-center space-x-2 text-sm font-medium text-slate-700 hover:text-blue-500"><span></span> <span>Changan</span></div>
          <div className="flex items-center space-x-2 text-sm font-medium text-slate-700 hover:text-blue-500"><span></span> <span>Datsun</span></div>
          <div className="flex items-center space-x-2 text-sm font-medium text-slate-700 hover:text-blue-500"><span></span> <span>Foton</span></div>
           <div className="flex items-center space-x-2 text-sm font-medium text-slate-700 hover:text-blue-500"><span></span> <span>Haval</span></div>
          <div className="flex items-center space-x-2 text-sm font-medium text-slate-700 hover:text-blue-500"><span></span> <span>Mazda</span></div>
          <div className="flex items-center space-x-2 text-sm font-medium text-slate-700 hover:text-blue-500"><span></span> <span>Ravon</span></div>
          <div className="flex items-center space-x-2 text-sm font-medium text-slate-700 hover:text-blue-500"><span></ span> <span>Zotye</span> </ div >
           <div className="flex items-center space-x-2 text-sm font-medium text-slate-700 hover:text-blue-500"><span></span> <span>Skoda</span></div>
          <div className="flex items-center space-x-2 text-sm font-medium text-slate-700 hover:text-blue-500"><span></span> <span>Chery</span></div>
          <div className="flex items-center space-x-2 text-sm font-medium text-slate-700 hover:text-blue-500"><span></span> <span>Dongfeng</span></div>
          <div className="flex items-center space-x-2 text-sm font-medium text-slate-700 hover:text-blue-500"><span></span> <span>GAC</span></div>
          <div className="flex items-center space-x-2 text-sm font-medium text-slate-700 hover:text-blue-500"><span></span> <span>Honda</span></div>
          <div className="flex items-center space-x-2 text-sm font-medium text-slate-700 hover:text-blue-500"><span></span> <span>Mitsubishi</span></div>
           <div className="flex items-center space-x-2 text-sm font-medium text-slate-700 hover:text-blue-500"><span></span> <span>Renault</span></div>
          <div className="flex items-center space-x-2 text-sm font-medium text-slate-700 hover:text-blue-500"><span></span> <span>Volkswagen</span></div>
          <div className="flex items-center space-x-2 text-sm font-medium text-slate-700 hover:text-blue-500"><span></ span > < span >DW Hower</ span > </ div >
          <div className="flex items-center space-x-2 text-sm font-medium text-slate-700 hover:text-blue-500"><span></ span > < span >Geely </ span > </ div >
          <div className="flex items-center space-x-2 text-sm font-medium text-slate-700 hover:text-blue-500"><span></span> <span>JAC</span></div>
          <div className="flex items-center space-x-2 text-sm font-medium text-slate-700 hover:text-blue-500"><span></span> <span>Nissan</span></div>
           <div className="flex items-center space-x-2 text-sm font-medium text-slate-700 hover:text-blue-500"><span></span> <span>SsangYong</span></div>
          <div className="flex items-center space-x-2 text-sm font-medium text-slate-700 hover:text-blue-500"><span></span> <span>Toyota</span></div>
          <div className="flex items-center space-x-2 text-sm font-medium text-slate-700 hover:text-blue-500"><span></span> <span>Chevrolet</span></div>
          <div className="flex items-center space-x-2 text-sm font-medium text-slate-700 hover:text-blue-500"><span></span> <span>FAW</span></div>
          <div className="flex items-center space-x-2 text-sm font-medium text-slate-700 hover:text-blue-500"><span></span> <span>Great Wall</span></div>
          <div className="flex items-center space-x-2 text-sm font-medium text-slate-700 hover:text-blue-500"><span></span> <span>Lada</span></div>
          <div className="flex items-center space-x-2 text-sm font-medium text-slate-700 hover:text-blue-500"><span></span> <span>Opel</span></div>
          <div className="flex items-center space-x-2 text-sm font-medium text-slate-700 hover:text-blue-500"><span></span> <span>Suzuki</span></div>


        </div>

        <div className="w-full lg:w-[40%] flex flex-col space-y-6">
          <h3 className="text-xl font-bold text-slate-800">Быстрый подбор авто</h3>
          
          <div>
            <div className="flex justify-between items-center mb-4 text-sm font-medium text-gray-700">
              <span>Цена</span>
              <span className="text-slate-900 font-bold">
                
              </span>
            </div>

            <div className="relative h-6 flex items-center">
              <div className="absolute inset-x-0 h-1 bg-gray-200 rounded-full" />

              <div className="absolute h-1 bg-red-600 rounded-full"/>
                    <input type="range" min="0" max="100" className="absolute pointer-events-none appearance-none w-full h-full opacity-0 z-30"/>

                    <input type="range" min="0" max="100" className="absolute pointer-events-none appearance-none w-full h-full opacity-0 z-30" />

              <div className="absolute w-4 h-4 bg-red-600 rounded-full -ml-2 z-20 pointer-events-none shadow"  />
              <div className="absolute w-4 h-4 bg-red-600 rounded-full -ml-2 z-20 pointer-events-none shadow" s />
            </div>

            
            <div className="flex justify-between text-[10px] text-gray-400 mt-2 px-1 select-none">
              <span>0</span><span>500т</span><span>800т</span><span>1,1м</span><span>1,4м</span><span>1,7м</span><span>2м</span><span>2,5м</span><span>3м</span>
            </div>
          </div>

          
          <div className="grid grid-cols-2 gap-4">
            <select className="border border-gray-300 rounded-xl p-3 text-sm bg-gray-50 outline-none text-gray-700 cursor-pointer">
              <option>Тип кузова</option>
              <option>Седан</option>
              <option>Хэтчбек</option>
              <option>Кроссовер</option>
              <option>Универсал</option>
            </select>
            <select className="border border-gray-300 rounded-xl p-3 text-sm bg-gray-50 outline-none text-gray-700 cursor-pointer">
              <option>Коробка</option>
              <option>Автомат</option>
              <option>Механика</option>
            </select>
          </div>

          
          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-sm py-4 rounded-xl transition-colors tracking-wide shadow-md">
            ПОКАЗАТЬ 73
          </button>
        </div>


    </div>
   </section>
  <section>
    <h1 className="text-2xl font-bold text-slate-800 text-center text-[40px] font-[700]">Автомобили в наличии с ПТС</h1>
    <div className="max-w-[1440px] flex flex-wrap  justify-between m-auto bg-white rounded-2xl border border-gray-200 p-6 md:p-8 mt-8">
      
      
      <div className="w-[447px] h-[447px] bg-white rounded-[24px] border border-gray-100 p-5 shadow-sm flex flex-col justify-between relative overflow-hidden select-none font-sans">
  
  <div>
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-2xl font-bold text-slate-800 leading-tight">Skoda Octavia</h3>
        <p className="text-xl font-bold text-slate-800 mt-0.5">1.6 MPI MT Active</p>
      </div>
      <div className="flex space-x-3 text-gray-400 mt-1">
        <button className="hover:text-red-500 transition-colors text-xl">♡</button>
      </div>
    </div>

    <div className="flex mt-4 relative z-10">
      <div className="flex flex-col space-y-2 w-[45%]">
        <div className="bg-red-600 text-white text-[11px] font-bold px-3 py-1.5 rounded-l-md rounded-r-[20px] max-w-max">
          Предложение дня
        </div>
        <div className="text-red-600 text-[11px] font-bold leading-tight pl-1">
          Выгода <br /> до 300 000 ₽
        </div>
      </div>

     
     
    </div>
  </div>

  <img src={skoda} alt="Skoda Octavia" className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[72%] h-auto object-contain pointer-events-none z-0" />

  <div className="relative z-10">
    <div className="flex justify-between items-end mb-3 px-1">
      <div>
        <span className="text-xs text-gray-400 block font-medium">от</span>
        <span className="text-2xl font-black text-slate-900">1 615 000 ₽</span>
      </div>
      <div className="text-right pb-0.5">
        <span className="text-[13px] text-slate-800 font-medium">Кредит <span className="font-bold">от 115 000 ₽/мес.</span></span>
      </div>
    </div>

    <div className="grid grid-cols-4 gap-1.5 text-[10px] font-semibold text-slate-700 mb-4">
      <div className="border border-gray-200 bg-gray-50/50 rounded-full py-1 px-1.5 flex items-center justify-center space-x-1 whitespace-nowrap">
        <span>⚙️</span> <span>115 л.с.</span>
      </div>
      <div className="border border-gray-200 bg-gray-50/50 rounded-full py-1 px-1.5 flex items-center justify-center space-x-1 whitespace-nowrap">
        <span>⛽</span> <span>5.3 л/км</span>
      </div>
      <div className="border border-gray-200 bg-gray-50/50 rounded-full py-1 px-1.5 flex items-center justify-center space-x-1 whitespace-nowrap">
        <span>🔄</span> <span>189 км/ч</span>
      </div>
      <div className="border border-gray-200 bg-gray-50/50 rounded-full py-1 px-1.5 flex items-center justify-center space-x-1 whitespace-nowrap">
        <span>⏱️</span> <span>10,3 с.</span>
      </div>
    </div>

    <div className="flex h-12 w-full overflow-hidden rounded-xl bg-gray-500">
      
      <button 
        className="w-[38%] bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-colors pr-2 flex items-center justify-center"
        style={{ clipPath: 'polygon(0% 0%, 85% 0%, 100% 100%, 0% 100%)' }}
      >
        Резерв онлайн
      </button>

     
      <button 
        className="w-[32%] bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold transition-colors -ml-4 pl-4 pr-2 flex items-center justify-center"
        style={{ clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)' }}
      >
        Купить
      </button>

      <button 
        className="w-[36%] bg-gray-500 hover:bg-gray-600 text-white text-xs font-bold transition-colors -ml-4 pl-4 flex items-center justify-center"
        style={{ clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
      >
        Подробнее
      </button>

    </div>
  </div>

</div>
<div className="w-[447px] h-[447px] bg-white rounded-[24px] border border-gray-100 p-5 shadow-sm flex flex-col justify-between relative overflow-hidden select-none font-sans">
  
  <div>
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-2xl font-bold text-slate-800 leading-tight">Skoda Octavia</h3>
        <p className="text-xl font-bold text-slate-800 mt-0.5">1.6 MPI MT Active</p>
      </div>
      <div className="flex space-x-3 text-gray-400 mt-1">
        <button className="hover:text-red-500 transition-colors text-xl">♡</button>
      </div>
    </div>

    <div className="flex mt-4 relative z-10">
      <div className="flex flex-col space-y-2 w-[45%]">
        <div className="bg-red-600 text-white text-[11px] font-bold px-3 py-1.5 rounded-l-md rounded-r-[20px] max-w-max">
          Предложение дня
        </div>
        <div className="text-red-600 text-[11px] font-bold leading-tight pl-1">
          Выгода <br /> до 300 000 ₽
        </div>
      </div>

     
     
    </div>
  </div>

  <img src={skoda} alt="Skoda Octavia" className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[72%] h-auto object-contain pointer-events-none z-0" />

  <div className="relative z-10">
    <div className="flex justify-between items-end mb-3 px-1">
      <div>
        <span className="text-xs text-gray-400 block font-medium">от</span>
        <span className="text-2xl font-black text-slate-900">1 615 000 ₽</span>
      </div>
      <div className="text-right pb-0.5">
        <span className="text-[13px] text-slate-800 font-medium">Кредит <span className="font-bold">от 115 000 ₽/мес.</span></span>
      </div>
    </div>

    <div className="grid grid-cols-4 gap-1.5 text-[10px] font-semibold text-slate-700 mb-4">
      <div className="border border-gray-200 bg-gray-50/50 rounded-full py-1 px-1.5 flex items-center justify-center space-x-1 whitespace-nowrap">
        <span>⚙️</span> <span>115 л.с.</span>
      </div>
      <div className="border border-gray-200 bg-gray-50/50 rounded-full py-1 px-1.5 flex items-center justify-center space-x-1 whitespace-nowrap">
        <span>⛽</span> <span>5.3 л/км</span>
      </div>
      <div className="border border-gray-200 bg-gray-50/50 rounded-full py-1 px-1.5 flex items-center justify-center space-x-1 whitespace-nowrap">
        <span>🔄</span> <span>189 км/ч</span>
      </div>
      <div className="border border-gray-200 bg-gray-50/50 rounded-full py-1 px-1.5 flex items-center justify-center space-x-1 whitespace-nowrap">
        <span>⏱️</span> <span>10,3 с.</span>
      </div>
    </div>

    <div className="flex h-12 w-full overflow-hidden rounded-xl bg-gray-500">
      
      <button 
        className="w-[38%] bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-colors pr-2 flex items-center justify-center"
        style={{ clipPath: 'polygon(0% 0%, 85% 0%, 100% 100%, 0% 100%)' }}
      >
        Резерв онлайн
      </button>

     
      <button 
        className="w-[32%] bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold transition-colors -ml-4 pl-4 pr-2 flex items-center justify-center"
        style={{ clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)' }}
      >
        Купить
      </button>

      <button 
        className="w-[36%] bg-gray-500 hover:bg-gray-600 text-white text-xs font-bold transition-colors -ml-4 pl-4 flex items-center justify-center"
        style={{ clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
      >
        Подробнее
      </button>

    </div>
  </div>

</div>
<div className="w-[447px] h-[447px] bg-white rounded-[24px] border border-gray-100 p-5 shadow-sm flex flex-col justify-between relative overflow-hidden select-none font-sans">
  
  <div>
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-2xl font-bold text-slate-800 leading-tight">Skoda Octavia</h3>
        <p className="text-xl font-bold text-slate-800 mt-0.5">1.6 MPI MT Active</p>
      </div>
      <div className="flex space-x-3 text-gray-400 mt-1">
        <button className="hover:text-red-500 transition-colors text-xl">♡</button>
      </div>
    </div>

    <div className="flex mt-4 relative z-10">
      <div className="flex flex-col space-y-2 w-[45%]">
        <div className="bg-red-600 text-white text-[11px] font-bold px-3 py-1.5 rounded-l-md rounded-r-[20px] max-w-max">
          Предложение дня
        </div>
        <div className="text-red-600 text-[11px] font-bold leading-tight pl-1">
          Выгода <br /> до 300 000 ₽
        </div>
      </div>

     
     
    </div>
  </div>

  <img src={skoda} alt="Skoda Octavia" className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[72%] h-auto object-contain pointer-events-none z-0" />

  <div className="relative z-10">
    <div className="flex justify-between items-end mb-3 px-1">
      <div>
        <span className="text-xs text-gray-400 block font-medium">от</span>
        <span className="text-2xl font-black text-slate-900">1 615 000 ₽</span>
      </div>
      <div className="text-right pb-0.5">
        <span className="text-[13px] text-slate-800 font-medium">Кредит <span className="font-bold">от 115 000 ₽/мес.</span></span>
      </div>
    </div>

    <div className="grid grid-cols-4 gap-1.5 text-[10px] font-semibold text-slate-700 mb-4">
      <div className="border border-gray-200 bg-gray-50/50 rounded-full py-1 px-1.5 flex items-center justify-center space-x-1 whitespace-nowrap">
        <span>⚙️</span> <span>115 л.с.</span>
      </div>
      <div className="border border-gray-200 bg-gray-50/50 rounded-full py-1 px-1.5 flex items-center justify-center space-x-1 whitespace-nowrap">
        <span>⛽</span> <span>5.3 л/км</span>
      </div>
      <div className="border border-gray-200 bg-gray-50/50 rounded-full py-1 px-1.5 flex items-center justify-center space-x-1 whitespace-nowrap">
        <span>🔄</span> <span>189 км/ч</span>
      </div>
      <div className="border border-gray-200 bg-gray-50/50 rounded-full py-1 px-1.5 flex items-center justify-center space-x-1 whitespace-nowrap">
        <span>⏱️</span> <span>10,3 с.</span>
      </div>
    </div>

    <div className="flex h-12 w-full overflow-hidden rounded-xl bg-gray-500">
      
      <button 
        className="w-[38%] bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-colors pr-2 flex items-center justify-center"
        style={{ clipPath: 'polygon(0% 0%, 85% 0%, 100% 100%, 0% 100%)' }}
      >
        Резерв онлайн
      </button>

     
      <button 
        className="w-[32%] bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold transition-colors -ml-4 pl-4 pr-2 flex items-center justify-center"
        style={{ clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)' }}
      >
        Купить
      </button>

      <button 
        className="w-[36%] bg-gray-500 hover:bg-gray-600 text-white text-xs font-bold transition-colors -ml-4 pl-4 flex items-center justify-center"
        style={{ clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
      >
        Подробнее
      </button>

    </div>
  </div>

</div>
<div className="w-[447px] h-[447px] bg-white rounded-[24px] border border-gray-100 p-5 shadow-sm flex flex-col justify-between relative overflow-hidden select-none font-sans">
  
  <div>
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-2xl font-bold text-slate-800 leading-tight">Skoda Octavia</h3>
        <p className="text-xl font-bold text-slate-800 mt-0.5">1.6 MPI MT Active</p>
      </div>
      <div className="flex space-x-3 text-gray-400 mt-1">
        <button className="hover:text-red-500 transition-colors text-xl">♡</button>
      </div>
    </div>

    <div className="flex mt-4 relative z-10">
      <div className="flex flex-col space-y-2 w-[45%]">
        <div className="bg-red-600 text-white text-[11px] font-bold px-3 py-1.5 rounded-l-md rounded-r-[20px] max-w-max">
          Предложение дня
        </div>
        <div className="text-red-600 text-[11px] font-bold leading-tight pl-1">
          Выгода <br /> до 300 000 ₽
        </div>
      </div>

     
     
    </div>
  </div>

  <img src={skoda} alt="Skoda Octavia" className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[72%] h-auto object-contain pointer-events-none z-0" />

  <div className="relative z-10">
    <div className="flex justify-between items-end mb-3 px-1">
      <div>
        <span className="text-xs text-gray-400 block font-medium">от</span>
        <span className="text-2xl font-black text-slate-900">1 615 000 ₽</span>
      </div>
      <div className="text-right pb-0.5">
        <span className="text-[13px] text-slate-800 font-medium">Кредит <span className="font-bold">от 115 000 ₽/мес.</span></span>
      </div>
    </div>

    <div className="grid grid-cols-4 gap-1.5 text-[10px] font-semibold text-slate-700 mb-4">
      <div className="border border-gray-200 bg-gray-50/50 rounded-full py-1 px-1.5 flex items-center justify-center space-x-1 whitespace-nowrap">
        <span>⚙️</span> <span>115 л.с.</span>
      </div>
      <div className="border border-gray-200 bg-gray-50/50 rounded-full py-1 px-1.5 flex items-center justify-center space-x-1 whitespace-nowrap">
        <span>⛽</span> <span>5.3 л/км</span>
      </div>
      <div className="border border-gray-200 bg-gray-50/50 rounded-full py-1 px-1.5 flex items-center justify-center space-x-1 whitespace-nowrap">
        <span>🔄</span> <span>189 км/ч</span>
      </div>
      <div className="border border-gray-200 bg-gray-50/50 rounded-full py-1 px-1.5 flex items-center justify-center space-x-1 whitespace-nowrap">
        <span>⏱️</span> <span>10,3 с.</span>
      </div>
    </div>

    <div className="flex h-12 w-full overflow-hidden rounded-xl bg-gray-500">
      
      <button 
        className="w-[38%] bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-colors pr-2 flex items-center justify-center"
        style={{ clipPath: 'polygon(0% 0%, 85% 0%, 100% 100%, 0% 100%)' }}
      >
        Резерв онлайн
      </button>

     
      <button 
        className="w-[32%] bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold transition-colors -ml-4 pl-4 pr-2 flex items-center justify-center"
        style={{ clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)' }}
      >
        Купить
      </button>

      <button 
        className="w-[36%] bg-gray-500 hover:bg-gray-600 text-white text-xs font-bold transition-colors -ml-4 pl-4 flex items-center justify-center"
        style={{ clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
      >
        Подробнее
      </button>

    </div>
  </div>

</div>
<div className="w-[447px] h-[447px] bg-white rounded-[24px] border border-gray-100 p-5 shadow-sm flex flex-col justify-between relative overflow-hidden select-none font-sans">
  
  <div>
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-2xl font-bold text-slate-800 leading-tight">Skoda Octavia</h3>
        <p className="text-xl font-bold text-slate-800 mt-0.5">1.6 MPI MT Active</p>
      </div>
      <div className="flex space-x-3 text-gray-400 mt-1">
        <button className="hover:text-red-500 transition-colors text-xl">♡</button>
      </div>
    </div>

    <div className="flex mt-4 relative z-10">
      <div className="flex flex-col space-y-2 w-[45%]">
        <div className="bg-red-600 text-white text-[11px] font-bold px-3 py-1.5 rounded-l-md rounded-r-[20px] max-w-max">
          Предложение дня
        </div>
        <div className="text-red-600 text-[11px] font-bold leading-tight pl-1">
          Выгода <br /> до 300 000 ₽
        </div>
      </div>

     
     
    </div>
  </div>

  <img src={skoda} alt="Skoda Octavia" className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[72%] h-auto object-contain pointer-events-none z-0" />

  <div className="relative z-10">
    <div className="flex justify-between items-end mb-3 px-1">
      <div>
        <span className="text-xs text-gray-400 block font-medium">от</span>
        <span className="text-2xl font-black text-slate-900">1 615 000 ₽</span>
      </div>
      <div className="text-right pb-0.5">
        <span className="text-[13px] text-slate-800 font-medium">Кредит <span className="font-bold">от 115 000 ₽/мес.</span></span>
      </div>
    </div>

    <div className="grid grid-cols-4 gap-1.5 text-[10px] font-semibold text-slate-700 mb-4">
      <div className="border border-gray-200 bg-gray-50/50 rounded-full py-1 px-1.5 flex items-center justify-center space-x-1 whitespace-nowrap">
        <span>⚙️</span> <span>115 л.с.</span>
      </div>
      <div className="border border-gray-200 bg-gray-50/50 rounded-full py-1 px-1.5 flex items-center justify-center space-x-1 whitespace-nowrap">
        <span>⛽</span> <span>5.3 л/км</span>
      </div>
      <div className="border border-gray-200 bg-gray-50/50 rounded-full py-1 px-1.5 flex items-center justify-center space-x-1 whitespace-nowrap">
        <span>🔄</span> <span>189 км/ч</span>
      </div>
      <div className="border border-gray-200 bg-gray-50/50 rounded-full py-1 px-1.5 flex items-center justify-center space-x-1 whitespace-nowrap">
        <span>⏱️</span> <span>10,3 с.</span>
      </div>
    </div>

    <div className="flex h-12 w-full overflow-hidden rounded-xl bg-gray-500">
      
      <button 
        className="w-[38%] bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-colors pr-2 flex items-center justify-center"
        style={{ clipPath: 'polygon(0% 0%, 85% 0%, 100% 100%, 0% 100%)' }}
      >
        Резерв онлайн
      </button>

     
      <button 
        className="w-[32%] bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold transition-colors -ml-4 pl-4 pr-2 flex items-center justify-center"
        style={{ clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)' }}
      >
        Купить
      </button>

      <button 
        className="w-[36%] bg-gray-500 hover:bg-gray-600 text-white text-xs font-bold transition-colors -ml-4 pl-4 flex items-center justify-center"
        style={{ clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
      >
        Подробнее
      </button>

    </div>
  </div>

</div>  
<div className="w-[447px] h-[447px] bg-white rounded-[24px] border border-gray-100 p-5 shadow-sm flex flex-col justify-between relative overflow-hidden select-none font-sans">
  
  <div>
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-2xl font-bold text-slate-800 leading-tight">Skoda Octavia</h3>
        <p className="text-xl font-bold text-slate-800 mt-0.5">1.6 MPI MT Active</p>
      </div>
      <div className="flex space-x-3 text-gray-400 mt-1">
        <button className="hover:text-red-500 transition-colors text-xl">♡</button>
      </div>
    </div>

    <div className="flex mt-4 relative z-10">
      <div className="flex flex-col space-y-2 w-[45%]">
        <div className="bg-red-600 text-white text-[11px] font-bold px-3 py-1.5 rounded-l-md rounded-r-[20px] max-w-max">
          Предложение дня
        </div>
        <div className="text-red-600 text-[11px] font-bold leading-tight pl-1">
          Выгода <br /> до 300 000 ₽
        </div>
      </div>

     
     
    </div>
  </div>

  <img src={skoda} alt="Skoda Octavia" className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[72%] h-auto object-contain pointer-events-none z-0" />

  <div className="relative z-10">
    <div className="flex justify-between items-end mb-3 px-1">
      <div>
        <span className="text-xs text-gray-400 block font-medium">от</span>
        <span className="text-2xl font-black text-slate-900">1 615 000 ₽</span>
      </div>
      <div className="text-right pb-0.5">
        <span className="text-[13px] text-slate-800 font-medium">Кредит <span className="font-bold">от 115 000 ₽/мес.</span></span>
      </div>
    </div>

    <div className="grid grid-cols-4 gap-1.5 text-[10px] font-semibold text-slate-700 mb-4">
      <div className="border border-gray-200 bg-gray-50/50 rounded-full py-1 px-1.5 flex items-center justify-center space-x-1 whitespace-nowrap">
        <span>⚙️</span> <span>115 л.с.</span>
      </div>
      <div className="border border-gray-200 bg-gray-50/50 rounded-full py-1 px-1.5 flex items-center justify-center space-x-1 whitespace-nowrap">
        <span>⛽</span> <span>5.3 л/км</span>
      </div>
      <div className="border border-gray-200 bg-gray-50/50 rounded-full py-1 px-1.5 flex items-center justify-center space-x-1 whitespace-nowrap">
        <span>🔄</span> <span>189 км/ч</span>
      </div>
      <div className="border border-gray-200 bg-gray-50/50 rounded-full py-1 px-1.5 flex items-center justify-center space-x-1 whitespace-nowrap">
        <span>⏱️</span> <span>10,3 с.</span>
      </div>
    </div>

    <div className="flex h-12 w-full overflow-hidden rounded-xl bg-gray-500">
      
      <button 
        className="w-[38%] bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-colors pr-2 flex items-center justify-center"
        style={{ clipPath: 'polygon(0% 0%, 85% 0%, 100% 100%, 0% 100%)' }}
      >
        Резерв онлайн
      </button>

     
      <button 
        className="w-[32%] bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold transition-colors -ml-4 pl-4 pr-2 flex items-center justify-center"
        style={{ clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)' }}
      >
        Купить
      </button>

      <button 
        className="w-[36%] bg-gray-500 hover:bg-gray-600 text-white text-xs font-bold transition-colors -ml-4 pl-4 flex items-center justify-center"
        style={{ clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
      >
        Подробнее
      </button>

    </div>
  </div>

</div>
 <button className="bg-red-600 hover:bg-[#CA0100] max-w-[312px] h-[65px] text-white font-bold py-2 px-4 rounded m-auto mt-[30px]">
        Показать еще
      </button>
      </div>
        
      
    
  </section>

  <section>
    
      
      <div className="max-w-[1440px] m-auto bg-white rounded-2xl  p-6 md:p-8 mt-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-4 ">Наши подборки</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="relative max-w-[447px] h-[320px] rounded-[24px] overflow-hidden select-none group cursor-pointer shadow-sm">
      
      <img src={famcar} alt="Семейные автомобили"  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

      <div className="absolute inset-0 z-20 flex items-end justify-between p-6">
        
        <h3 className="text-white text-2xl font-bold leading-tight max-w-[225px]">Семейные автомобили</h3>
 <button className="bg-red-600 hover:bg-red-700 active:scale-95 text-white font-medium text-sm px-6 py-3 rounded-xl transition-all duration-200 shadow-md">
          Посмотреть
        </button>
         </div>
 </div>



      <div className="relative w-[447px] h-[320px] rounded-[24px] overflow-hidden select-none group cursor-pointer shadow-sm">
      
    
      <img src={jour} alt="Для путешествий"  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

      <div className="absolute inset-0 z-20 flex items-end justify-between p-6">
        
        <h3 className="text-white text-2xl font-bold leading-tight max-w-[225px]">Для активного отдыха</h3>

        <button className="bg-red-600 hover:bg-red-700 active:scale-95 text-white font-medium text-sm px-6 py-3 rounded-xl transition-all duration-200 shadow-md">Посмотреть</button>

      </div>

    </div>



       <div className="relative w-[447px] h-[320px] rounded-[24px] overflow-hidden select-none group cursor-pointer shadow-sm">
      
    
      <img src={cicar} alt="Для путешествий"  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

      <div className="absolute inset-0 z-20 flex items-end justify-between p-6">
        
        <h3 className="text-white text-2xl font-bold leading-tight max-w-[225px]">Для активного отдыха</h3>

        <button className="bg-red-600 hover:bg-red-700 active:scale-95 text-white font-medium text-sm px-6 py-3 rounded-xl transition-all duration-200 shadow-md">Посмотреть</button>

      </div>

    </div>

      </div>
    </div>
  </section>
       

     

    </>
  );
}
    
  



                
              

                
             

            
              
   
  
  
    
     
    
   

  

  

