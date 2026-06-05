import React from 'react';

import heartIcon from '../../assets/heart.svg';
import giftIcon from '../../assets/gift.svg';
import engineIcon from '../../assets/engine.svg';
import fuelIcon from '../../assets/fuel.svg';
import speedIcon from '../../assets/speed.svg';
import accelerationIcon from '../../assets/acceleration.svg';

const CarCard = ({ car }) => {
  const iconMap = {
    engine: engineIcon,
    fuel: fuelIcon,
    speed: speedIcon,
    acceleration: accelerationIcon
  };

  return (
    <div className="w-full bg-white rounded-[20px] p-6 border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between relative group min-h-[480px] font-['Roboto'] text-left">
      
      <div>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-[27px] font-bold text-[#262626] leading-tight tracking-tight">
              {car.name}
            </h3>
            <p className="text-[27px] font-bold text-[#262626] leading-tight tracking-tight">
              {car.subName}
            </p>
          </div>
          
          <button className="text-gray-300 hover:text-red-600 transition-colors flex items-center gap-1 text-sm pt-1 shrink-0">
            <img 
              src={heartIcon} 
              alt="Favorite" 
              className="w-4 h-4 group-hover:scale-110 transition-transform object-contain" 
            />
            <span className="text-[10px] text-gray-400 font-bold">0%</span>
          </button>
        </div>

        <div className="flex items-center gap-3 mt-3 mb-4 h-[28px]">
          <span className="bg-red-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-[4px] uppercase tracking-wide">
            {car.badge}
          </span>
          <span className="text-red-600 text-xs font-bold">
            {car.benefit}
          </span>
        </div>

        <div className="flex justify-between items-center my-2 h-[140px] relative">
          <div className="space-y-2.5 z-10">
            {car.features.map((feature, idx) => {
              const words = feature.split(' ');
              const firstWord = words[0];
              const restOfWords = words.slice(1).join(' ');

              return (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-gray-900 rounded-full flex items-center justify-center shrink-0">
                    <img src={giftIcon} alt="Gift" className="w-3.5 h-3.5 object-contain" />
                  </div>
                  <div className="flex flex-col text-[11px] leading-tight font-medium">
                    <span className="text-gray-700">{firstWord}</span>
                    <span className="text-red-600 font-bold">{restOfWords}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-[210px] sm:w-[230px] h-full flex items-center justify-center pointer-events-none">
            <img 
              src={car.image} 
              alt={car.name} 
              className="max-h-full w-full object-contain group-hover:scale-[1.03] transition-transform duration-500 ease-out"
            />
          </div>
        </div>

        <div className="flex justify-between items-baseline mt-4 mb-3 pt-3 border-t border-gray-100">
          <span className="text-[22px] font-bold text-[#262626] tracking-tight">{car.price}</span>
          <span className="text-[16px] font-normal text-[#262626]">{car.credit}</span>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-5">
          {car.specs.map((spec, idx) => (
            <div 
              key={idx} 
              className="h-[32px] flex items-center justify-center gap-1.5 bg-white rounded-full border border-gray-200 px-4"
            >
              <img 
                src={iconMap[spec.type]} 
                alt={spec.label} 
                className="w-3.5 h-3.5 object-contain shrink-0" 
              />
              <span className="text-[12px] font-medium text-gray-700 whitespace-nowrap">
                {spec.label}
              </span>
            </div>
          ))}
        </div>
      </div>

  {/* BUTTONS: Pastki qiyiq kesilgan birlashgan mukammal tugmalar */}
      <div className="flex w-full items-center overflow-hidden rounded-[14px] text-[14px] font-bold text-white h-12 shadow-xs shrink-0">
        {/* Резерв онлайн */}
        <button className="bg-[#C80000] hover:bg-red-800 transition-colors w-[38%] h-full flex items-center justify-center relative after:content-[''] after:absolute after:right-[-10px] after:top-0 after:bottom-0 after:w-5 after:bg-[#C80000] after:transform after:skew-x-[-18deg] after:z-10 z-20 cursor-pointer">
          <span className="relative z-30">Резерв онлайн</span>
        </button>

        {/* Купить */}
        <button className="bg-[#23262A] hover:bg-slate-900 transition-colors w-[32%] h-full flex items-center justify-center relative after:content-[''] after:absolute after:right-[-10px] after:top-0 after:bottom-0 after:w-5 after:bg-[#23262A] after:transform after:skew-x-[-18deg] after:z-10 z-10 pl-4 cursor-pointer">
          <span className="relative z-20">Купить</span>
        </button>

        {/* Подробнее */}
        <button className="bg-[#737579] hover:bg-gray-600 transition-colors w-[30%] h-full flex items-center justify-center pl-3 cursor-pointer">
          <span>Подробнее</span>
        </button>
      </div>

    </div>
  );
};

export default CarCard;