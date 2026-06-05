import React, { useState } from 'react';

import brilliance from '../../assets/brilliance.svg';
import changan from '../../assets/changan.svg';
import chery from '../../assets/chery.svg';
import cheryexeed from '../../assets/cheryexeed.svg';
import chevrolet from '../../assets/chevrolet.svg';
import citroen from '../../assets/citroen.svg';
import datsun from '../../assets/datsun.svg';
import dongfeng from '../../assets/dongfeng.svg';
import dwhower from '../../assets/dw hower.svg'; 
import faw from '../../assets/faw.svg';
import ford from '../../assets/ford.svg';
import foton from '../../assets/foton.svg';
import gac from '../../assets/gac.svg';
import geely from '../../assets/geely.svg';
import greatwall from '../../assets/greatwall.svg';
import haima from '../../assets/haima.svg';
import haval from '../../assets/haval.svg';
import honda from '../../assets/honda.svg';
import hyundai from '../../assets/hyundai.svg';
import jac from '../../assets/jac.svg';
import kia from '../../assets/kia.svg';
import lada from '../../assets/lada.svg';
import lifan from '../../assets/lifan.svg';
import mazda from '../../assets/mazda.svg';
import mitsubishi from '../../assets/mitsubishi.svg';
import nissan from '../../assets/nissan.svg';
import opel from '../../assets/opel.svg';
import peugeot from '../../assets/peugeot.svg';
import ravon from '../../assets/ravon.svg';
import renault from '../../assets/renault.svg';
import skoda from '../../assets/skoda.svg';
import ssangyong from '../../assets/ssangyoung.svg'; 
import suzuki from '../../assets/suzuki.svg';
import toyota from '../../assets/toyota.svg';
import uaz from '../../assets/uaz.svg';
import volkswagen from '../../assets/volkswagen.svg';
import zotye from '../../assets/zotye.svg';

export default function CarFilter() {
  const brands = [
    { name: "Kia", logo: kia },
    { name: "Brilliance", logo: brilliance },
    { name: "Citroen", logo: citroen },
    { name: "Ford", logo: ford },
    { name: "Haima", logo: haima },
    { name: "Lifan", logo: lifan },
    { name: "Peugeot", logo: peugeot },
    { name: "UAZ", logo: uaz },
    { name: "Hyundai", logo: hyundai },
    { name: "Changan", logo: changan },
    { name: "Datsun", logo: datsun },
    { name: "Foton", logo: foton },
    { name: "Haval", logo: haval },
    { name: "Mazda", logo: mazda },
    { name: "Ravon", logo: ravon },
    { name: "Zotye", logo: zotye },
    { name: "Skoda", logo: skoda },
    { name: "Chery", logo: chery },
    { name: "Dongfeng", logo: dongfeng },
    { name: "GAC", logo: gac },
    { name: "Honda", logo: honda },
    { name: "Mitsubishi", logo: mitsubishi },
    { name: "Renault", logo: renault },
    { name: "Volkswagen", logo: volkswagen },
    { name: "CheryExeed", logo: cheryexeed },
    { name: "DW Hower", logo: dwhower },
    { name: "Geely", logo: geely },
    { name: "JAC", logo: jac },
    { name: "Nissan", logo: nissan },
    { name: "SsangYong", logo: ssangyong },
    { name: "Toyota", logo: toyota },
    { name: "Chevrolet", logo: chevrolet },
    { name: "FAW", logo: faw },
    { name: "Great Wall", logo: greatwall },
    { name: "Lada", logo: lada },
    { name: "Opel", logo: opel },
    { name: "Suzuki", logo: suzuki },
  ];

  const [price, setPrice] = useState(500);

  return (
    <div className="w-full select-none">
      <div className="bg-white rounded-[20px] p-5 md:p-6 lg:p-8 border border-gray-200 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          <div className="lg:col-span-2 w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-3">
              {brands.map((brand, idx) => (
                <button 
                  key={idx} 
                  className="flex items-center gap-2.5 py-1.5 px-2 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-all text-left group"
                >
                  <div className="w-5 h-5 flex items-center justify-center shrink-0">
                    <img 
                      src={brand.logo} 
                      alt={brand.name} 
                      className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300" 
                    />
                  </div>
                  <span className="text-[13px] font-medium text-gray-700 group-hover:text-red-600 transition-colors truncate">
                    {brand.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="w-full bg-gray-50 lg:bg-transparent p-5 lg:p-0 rounded-2xl border border-gray-100 lg:border-none">
            <h3 className="text-base lg:text-lg font-bold uppercase tracking-wider text-[#262626] mb-5">
              Быстрый подбор авто
            </h3>
            
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Цена</span>
                <span className="text-sm font-bold text-gray-900">0 - {price} т.р.</span>
              </div>
              
              <div className="relative pt-1">
                <input 
                  type="range" 
                  min="0" 
                  max="500" 
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full accent-red-600 h-1 bg-gray-200 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[9px] text-gray-400 mt-2 px-0.5 font-bold">
                  <span>0</span>
                  <span>500т</span>
                  <span>800т</span>
                  <span>1.1м</span>
                  <span>1.4м</span>
                  <span>1.7м</span>
                  <span>2м</span>
                  <span>2.3м</span>
                  <span>2.7м</span>
                  <span>3м</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              <div className="relative">
                <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-wide text-gray-700 outline-none appearance-none cursor-pointer hover:border-gray-400 transition">
                  <option>Тип кузова</option>
                  <option>Седан</option>
                  <option>Внедорожник</option>
                  <option>Хэтчбек</option>
                </select>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-[9px]">▼</span>
              </div>

              <div className="relative">
                <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-wide text-gray-700 outline-none appearance-none cursor-pointer hover:border-gray-400 transition">
                  <option>Коробка</option>
                  <option>Автомат</option>
                  <option>Механика</option>
                  <option>Вариатор</option>
                </select>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-[9px]">▼</span>
              </div>
            </div>

            <button className="w-full bg-red-600 hover:bg-red-700 active:scale-[0.99] text-white font-bold py-4 rounded-xl transition-all text-xs uppercase tracking-widest shadow-md shadow-red-600/10">
              ПОКАЗАТЬ 73
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}