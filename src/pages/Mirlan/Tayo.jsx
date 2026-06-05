import React from 'react';
import Camry from './Camry'; 
import Rasm from './Rasm'; 


function CamryListAndOffers() {
    const CollapsedRow = () => (
        <div className="grid grid-cols-6 items-center bg-gray-100 p-4 rounded-2xl font-bold text-gray-900 text-sm border border-gray-200 shadow-sm mb-3">
            <div>2.0 AT Стандарт 2020</div>
            <div className="font-normal text-gray-500 text-xs">2.0 - 75 л.с.</div>
            <div className="font-normal text-gray-500 text-xs">6MT</div>
            <div className="font-normal text-gray-500 text-xs">2WD</div>
            <div className="text-right pr-4 text-gray-400 line-through text-xs font-normal">2 000 000 ₽</div>
            <div className="flex items-center justify-between w-full col-span-1">
                <span className="text-base font-extrabold text-gray-900">1 615 000 ₽</span>
                <button className="w-6 h-6 bg-white rounded-full flex items-center justify-center border border-gray-300 shadow-sm">
                    <span className="text-[10px] text-gray-500">▲</span>
                </button>
            </div>
        </div>
    );

    return (
        <div className="w-full max-w-[1300px] mx-auto font-sans text-gray-800 pb-20">

            <div className="mb-6">
                <CollapsedRow />
                <CollapsedRow />
            </div>

            <div className="flex items-center gap-3 mb-6 mt-8">
                <span className="text-xl font-extrabold text-gray-900">2.0 AT</span>
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

            <div className="bg-white rounded-[32px] overflow-hidden border border-gray-200 shadow-sm mb-4">

                <div className="grid grid-cols-6 items-center bg-gray-100/80 p-5 font-bold text-gray-900 text-sm border-b border-gray-200">
                    <div>2.0 AT Стандарт 2020</div>
                    <div className="font-normal text-gray-500 text-xs">2.0 - 75 л.с.</div>
                    <div className="font-normal text-gray-500 text-xs">6MT</div>
                    <div className="font-normal text-gray-500 text-xs">2WD</div>
                    <div className="text-right pr-4 text-gray-400 line-through text-xs font-normal">2 000 000 ₽</div>
                    <div className="flex items-center justify-between w-full col-span-1">
                        <span className="text-base font-extrabold text-gray-900">1 615 000 ₽</span>
                        <button className="w-6 h-6 bg-white rounded-full flex items-center justify-center border border-gray-300 shadow-sm">
                            <span className="text-[10px] text-gray-500">▲</span>
                        </button>
                    </div>
                </div>

                <div className="p-6 grid grid-cols-12 gap-6 items-start">

                    <div className="col-span-3 relative flex flex-col items-center">
                        <span className="absolute top-0 left-0 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-sm">
                            Выгода 380 000 ₽
                        </span>
                        <img src={Camry} alt="Toyota Camry Layout" className="w-full object-contain my-4" />
                        <div className="flex gap-1.5 justify-center mt-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-200"></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-200"></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-900"></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-800"></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-green-800"></span>
                        </div>
                    </div>

                    <div className="col-span-3 space-y-4">
                        <div>
                            <h4 className="font-bold text-base text-gray-900">Toyota Camry</h4>
                            <p className="text-xs text-red-600 font-bold mt-1">В наличии с ПТС</p>
                            <p className="text-xs text-gray-500 mt-0.5">В наличии: <strong className="text-gray-800">1 авто</strong></p>
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

                        <button className="w-full text-left border border-red-500 text-red-600 text-xs font-bold py-2 px-3 rounded-xl flex justify-between items-center bg-red-50/30">
                            <span>📋 Полное описание</span>
                            <span className="text-[10px]">▼</span>
                        </button>
                    </div>

                    <div className="col-span-3 space-y-3.5 pt-2">
                        <div className="flex items-center gap-2.5">
                            <span className="bg-gray-800 text-white rounded-md p-1.5 text-xs">🛡️</span>
                            <div>
                                <p className="text-xs font-bold text-red-600 leading-tight">Страхование</p>
                                <p className="text-[10px] text-gray-400">в подарок</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <span className="bg-red-600 text-white rounded-md p-1.5 text-xs">🎁</span>
                            <div>
                                <p className="text-xs font-bold text-red-600 leading-tight">Оборудование</p>
                                <p className="text-[10px] text-gray-400">в подарок</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <span className="bg-gray-500 text-white rounded-md p-1.5 text-xs">🛞</span>
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
            </div>

            <div className="mb-8 space-y-3">
                <CollapsedRow />
                <CollapsedRow />
                <CollapsedRow />
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10">

                <div className="bg-white border border-gray-200/80 shadow-md rounded-[28px] p-6 relative overflow-hidden flex flex-col justify-between min-h-[150px]">
                    <div>
                        <div className="flex justify-between items-start">
                            <div>
                                <h5 className="font-extrabold text-sm text-gray-900">Специальное предложение</h5>
                                <p className="text-[11px] text-gray-400 mt-0.5">от представительства</p>
                            </div>
                            <div className="w-10 h-6 bg-red-600 rounded-full flex items-center justify-end p-0.5 cursor-pointer">
                                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-[10px] text-red-600 font-bold">🏷️</div>
                            </div>
                        </div>
                    </div>
                    <div className="text-2xl font-black text-gray-900 mt-6">-35% ₽</div>
                </div>

                <div className="bg-white border border-gray-200/80 shadow-md rounded-[28px] p-6 relative overflow-hidden flex flex-col justify-between min-h-[150px]">
                    <div>
                        <div className="flex justify-between items-start">
                            <div>
                                <h5 className="font-extrabold text-sm text-gray-900">Скидка за наличные</h5>
                                <p className="text-[11px] text-gray-400 mt-0.5">от ABC Auto</p>
                            </div>
                            <div className="w-10 h-6 bg-red-600 rounded-full flex items-center justify-end p-0.5 cursor-pointer">
                                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-[10px] text-red-600 font-bold">👛</div>
                            </div>
                        </div>
                    </div>
                    <div className="text-2xl font-black text-gray-900 mt-6">-40 000 ₽</div>
                </div>

                <div className="bg-white border border-gray-200/80 shadow-md rounded-[28px] p-6 relative overflow-hidden flex flex-col justify-between min-h-[150px]">
                    <div>
                        <div className="flex justify-between items-start">
                            <div>
                                <h5 className="font-extrabold text-sm text-gray-900">Выгода за Trade-in</h5>
                                <p className="text-[11px] text-gray-400 mt-0.5">от ABC Auto</p>
                            </div>
                            <div className="w-10 h-6 bg-red-600 rounded-full flex items-center justify-end p-0.5 cursor-pointer">
                                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-[10px] text-red-600 font-bold">🔄</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-end mt-6">
                        <div className="text-2xl font-black text-gray-900">-120 000 ₽</div>
                        <span className="text-[10px] text-gray-400 underline cursor-pointer">Подробнее</span>
                    </div>
                </div>

            </div>
            <Rasm />      
        </div>
    );
}

export default CamryListAndOffers;