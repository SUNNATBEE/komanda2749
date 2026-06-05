// import React from 'react'
// import Camry from './Camry'

// const Toyota = () => {
//   return (
//     <div>
//    <section className='bg-gray-200 w-[1300px] h-[600px] rounded-2xl flex items-center justify-center mx-auto mt-10'>

//     <div className='container mx-auto max-w-7xl'>
             
//      <h1 className='text-4xl  mt-[-200px] ml-10'>
//         Toyota Camry
//         </h1>  
//         <div className='flex items-center gap-[20px] mt-7 ml-10'>
//            <h2 className='text-2xl font-bold '>от 700 000 ₽</h2>
//            <button className='bg-red-700 text-white py-2 px-4 rounded'>Выгода до 100 000₽</button>

//             </div>   
//             <div>
                
                
                
//                 </div>   

//     </div>
    
    
//     </section>       
//     </div>
//   )
// }

// export default Toyota











import React from 'react'
import Camry from './Camry' 

const Toyota = () => {
  return (
    <div className="min-h-screen bg-white py-10">
      <section className='bg-gray-100 w-[1300px] h-[550px] rounded-[30px] mx-auto relative px-16 pt-12 shadow-sm border border-gray-200 overflow-visible'>
        
        <div className="text-xs text-gray-400 flex gap-2 mb-6">
          <span>Главная</span> <span>&gt;</span>
          <span>Каталог авто</span> <span>&gt;</span>
          <span>Toyota</span> <span>&gt;</span>
          <span className="text-gray-600">Toyota Camry</span>
        </div>

        <div className='grid grid-cols-2 w-full'>
          
          <div>
            <h1 className='text-5xl font-bold text-gray-900 tracking-tight'>
              Toyota Camry
            </h1>  
            
            <div className='flex items-baseline gap-4 mt-4 mb-8'>
              <span className='text-xs text-gray-400 line-through'>800 000 ₽</span>
              <h2 className='text-3xl font-extrabold text-gray-900'>от 700 000 ₽</h2>
              <span className='bg-red-600 text-white text-xs font-bold py-1.5 px-3 rounded-md'>
                Выгода до 100 000 ₽
              </span>
            </div>   

            <div className='space-y-3 max-w-[280px]'>
              <div className='flex items-center gap-3 bg-white/60 p-2 rounded-xl backdrop-blur-sm'>
                <span className='text-red-600 text-lg'>🎁</span>
                <p className='text-xs font-semibold text-gray-800 leading-tight'>Улучшим любое предложение</p>
              </div>
              <div className='flex items-center gap-3 bg-white/60 p-2 rounded-xl backdrop-blur-sm'>
                <span className='text-red-600 text-lg'>0%</span>
                <p className='text-xs font-semibold text-gray-800 leading-tight'>Без первоначального взноса</p>
              </div>
              <div className='flex items-center gap-3 bg-white/60 p-2 rounded-xl backdrop-blur-sm'>
                <span className='text-red-600 text-lg'>₽</span>
                <p className='text-xs font-semibold text-gray-800 leading-tight'>Кредит от 1,9%</p>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col items-end">
            <div className="flex flex-col items-end mb-4">
              <span className="text-xs text-gray-500 mb-2">Цвет: <strong className="text-gray-900">Night Black</strong></span>
              <div className="flex gap-1.5">
                <span className="w-4 h-4 rounded-full bg-blue-600 cursor-pointer"></span>
                <span className="w-4 h-4 rounded-full bg-red-600 cursor-pointer"></span>
                <span className="w-4 h-4 rounded-full bg-blue-100 cursor-pointer"></span>
                <span className="w-4 h-4 rounded-full bg-white border border-gray-300 cursor-pointer"></span>
                <span className="w-4 h-4 rounded-full bg-gray-400 cursor-pointer"></span>
                <span className="w-4 h-4 rounded-full bg-gray-800 ring-2 ring-red-600 ring-offset-1 cursor-pointer"></span>
                <span className="w-4 h-4 rounded-full bg-amber-900 cursor-pointer"></span>
                <span className="w-4 h-4 rounded-full bg-stone-500 cursor-pointer"></span>
              </div>
            </div>

            <div className="w-[650px] mt-4 mr--10">
              <img src="/src/assets/kamry.png" alt="Toyota Camry" className="w-full object-contain" />
            </div>
          </div>

        </div>

        <div className='absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 w-[1160px] bg-white rounded-2xl shadow-xl border border-gray-100 p-6 grid grid-cols-12 items-center gap-4 z-10'>
          
          <div className="col-span-4">
            <h3 className="text-lg font-bold text-gray-900 leading-snug">Получите специальную цену</h3>
            <span className="inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded mt-1">
              Только до 10.10.21
            </span>
          </div>

          <div className="col-span-8 flex gap-3 items-end">
            <div className="flex-1">
              <input 
                type="text" 
                placeholder="Ваше имя" 
                className="w-full bg-gray-100 border-none rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500" 
              />
            </div>
            <div className="flex-1">
              <input 
                type="text" 
                placeholder="Ваш телефон" 
                className="w-full bg-gray-100 border-none rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500" 
              />
            </div>
            <div className="flex-1">
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider p-3 rounded-lg transition-colors">
                Получить предложение
              </button>
            </div>
          </div>

          <div className="col-span-12 text-[10px] text-gray-400 text-right mt-1">
            Нажимая кнопку "Получить скидку" Вы даете согласие на обработку своих <span className="underline cursor-pointer">персональных данных</span>
          </div>

        </div>
        
      </section>  
          <Camry />
 
    </div>
  )
}

export default Toyota





