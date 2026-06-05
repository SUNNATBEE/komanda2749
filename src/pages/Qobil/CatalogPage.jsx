import CarFilter from '../../components/catalogs/CarFilter';
import CarList from '../../components/catalogs/CarList';

export default function CatalogPage() {
  return (
    <div className="w-full bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-16 select-none">
        
        <nav className="flex items-center gap-2 text-[11px] font-medium text-gray-400 mb-3">
          <a href="/" className="hover:text-gray-600 transition-colors">Главная</a>
          <span>/</span>
          <span className="text-gray-500">Каталог авто</span>
        </nav>

        <h1 className="text-[36px] md:text-[44px] font-black text-gray-900 tracking-tight mb-8">
          Каталог авто
        </h1>

        <div className="mb-10">
          <CarFilter />
        </div>

        <div>
          <CarList />
        </div>

      </div>
    </div>
  );
}