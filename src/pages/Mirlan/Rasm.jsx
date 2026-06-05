import React from 'react';
import Comry from './Comry';

export default function SimilarOffersAndReviews() {
  const cars = [1, 2, 3]; 
  const reviews = [1, 2, 3, 4];

  return (
    <div className="w-full bg-gray-50 py-12 font-sans antialiased text-gray-950">
      <div className="max-w-7xl mx-auto px-4">

        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Similar offers</h2>
            <div className="flex space-x-2">
              <button className="w-10 h-10 bg-white border border-gray-200 text-gray-600 rounded flex items-center justify-center hover:bg-gray-50 transition-colors">
                ‹
              </button>
              <button className="w-10 h-10 bg-red-600 text-white rounded flex items-center justify-center hover:bg-red-700 transition-colors">
                ›
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((item) => (
              <div key={item} className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 relative flex flex-col justify-between">
                
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">Skoda Octavia</h3>
                    <button className="text-gray-400 hover:text-red-500 transition-colors text-xl">
                      ♡ <span className="text-xs text-gray-400 ml-1">0<sub>D</sub></span>
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-2 items-center mb-4">
                    <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded-sm">
                      Offer of the day
                    </span>
                    <span className="text-red-600 text-xs font-semibold">
                      Benefit up to 300,000 ₽
                    </span>
                  </div>

                  <div className="grid grid-cols-12 gap-2 items-center my-4">
                    <div className="col-span-5 space-y-3">
                      <div className="flex items-center space-x-2 text-[11px] text-gray-600 font-medium">
                        <span className="w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs">🎁</span>
                        <span>Free equipment</span>
                      </div>
                      <div className="flex items-center space-x-2 text-[11px] text-gray-600 font-medium">
                        <span className="w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs">🛡️</span>
                        <span>Free CASCO</span>
                      </div>
                      <div className="flex items-center space-x-2 text-[11px] text-gray-600 font-medium">
                        <span className="w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs">🚗</span>
                        <span>Free tire set</span>
                      </div>
                    </div>

                    <div className="col-span-7 flex justify-end">
                      <img 
                        src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=400&q=80" 
                        alt="Skoda Octavia" 
                        className="w-full h-auto object-contain max-h-[120px]"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex justify-between items-baseline mb-4">
                    <span className="text-xl font-black text-black">from 1,615,000 ₽</span>
                    <span className="text-[11px] text-gray-500">Credit from 115,000 ₽/mo.</span>
                  </div>

                  <div className="flex w-full rounded-lg overflow-hidden text-xs font-bold text-center">
                    <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 transition-colors">
                      Book online
                    </button>
                    <button className="flex-1 bg-gray-800 hover:bg-gray-900 text-white py-3 transition-colors border-l border-r border-gray-700">
                      Buy
                    </button>
                    <button className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-3 transition-colors">
                      Details
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-12 py-3 rounded-md uppercase tracking-wider shadow-md transition-all">
              Show more
            </button>
          </div>
        </div>


        <div>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">They trust us</h2>
            <div className="flex space-x-2">
              <button className="w-10 h-10 bg-white border border-gray-200 text-gray-600 rounded flex items-center justify-center hover:bg-gray-50 transition-colors">
                ‹
              </button>
              <button className="w-10 h-10 bg-red-600 text-white rounded flex items-center justify-center hover:bg-red-700 transition-colors">
                ›
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {reviews.map((item) => (
              <div key={item} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-sm text-gray-900">Review website</h4>
                  <p className="text-xs text-gray-400 mt-1">Car dealership name</p>
                </div>
                <div className="flex justify-between items-center mt-4 pt-2 border-t border-gray-50">
                  <span className="text-[11px] text-gray-500">90% recommend</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-amber-400 text-xs">★★★★★</span>
                    <span className="bg-emerald-500 text-white text-[11px] font-bold px-1.5 py-0.5 rounded">4.5</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-wrap justify-between items-center gap-4">
              <div className="flex items-center space-x-3">
                <span className="text-red-600 font-black text-2xl">Y</span>
                <div>
                  <h4 className="font-bold text-base text-gray-900">Yandex Maps</h4>
                  <p className="text-xs text-gray-400">Car dealership name</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="text-right">
                  <span className="text-xs text-gray-500 block">90% recommend</span>
                  <span className="text-amber-400 text-xs">★★★★☆</span>
                </div>
                <div className="bg-emerald-500 text-white text-3xl font-black px-4 py-2 rounded-xl">
                  4.5
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-wrap justify-between items-center gap-4">
              <div className="flex items-center space-x-3">
                <span className="text-blue-600 font-black text-2xl">G</span>
                <div>
                  <h4 className="font-bold text-base text-gray-900">Google Maps</h4>
                  <p className="text-xs text-gray-400">Car dealership name</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="text-right">
                  <span className="text-xs text-gray-500 block">90% recommend</span>
                  <span className="text-amber-400 text-xs">★★★★☆</span>
                </div>
                <div className="bg-emerald-500 text-white text-3xl font-black px-4 py-2 rounded-xl">
                  4.1
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
      <Comry />
    </div>
  );
}