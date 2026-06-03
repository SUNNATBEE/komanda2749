import { Link, NavLink } from 'react-router-dom'
import {
  ADDRESS,
  FOOTER_BRANDS,
  FOOTER_CREDIT_LINKS,
  MAIN_NAV,
  PHONE_MAIN,
  PHONE_SECONDARY,
  WORK_HOURS,
} from '../../constants/navigation'

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300">
      <div className="border-b border-gray-700">
        <nav className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-6 gap-y-2 px-4 py-4">
          {MAIN_NAV.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-xs font-bold uppercase tracking-wide transition hover:text-white ${
                  isActive ? 'text-red-500' : 'text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <h3 className="mb-4 text-sm font-bold uppercase text-white">Каталог авто</h3>
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm sm:grid-cols-3">
            {FOOTER_BRANDS.flat().map((brand) => (
              <Link
                key={brand}
                to="/catalog"
                className="text-gray-400 transition hover:text-white"
              >
                {brand}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase text-white">Кредит и рассрочка</h3>
          <ul className="space-y-2 text-sm">
            {FOOTER_CREDIT_LINKS.map((link) => (
              <li key={link}>
                <Link to="/credit" className="text-cyan-400/90 transition hover:text-cyan-300">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase text-white">Контакты</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={`tel:${PHONE_MAIN.replace(/\s/g, '')}`}
                className="flex items-center gap-2 font-semibold text-white hover:text-red-400"
              >
                <span className="text-red-500">☎</span>
                {PHONE_MAIN}
              </a>
            </li>
            <li>
              <a
                href={`tel:${PHONE_SECONDARY.replace(/\s/g, '')}`}
                className="flex items-center gap-2 text-gray-400 hover:text-white"
              >
                <span className="text-red-500">☎</span>
                {PHONE_SECONDARY}
              </a>
            </li>
            <li className="flex items-start gap-2 text-gray-400">
              <span className="text-red-500">🕐</span>
              {WORK_HOURS}
            </li>
            <li className="flex items-start gap-2 text-gray-400">
              <span className="text-red-500">📍</span>
              {ADDRESS}
            </li>
            <li>
              <Link to="/contacts" className="text-red-500 hover:text-red-400">
                Схема проезда
              </Link>
            </li>
            <li>
              <label className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">Город:</span>
                <select className="rounded border border-gray-600 bg-[#2a2a2a] px-2 py-1 text-white">
                  <option>Москва</option>
                  <option>Санкт-Петербург</option>
                </select>
              </label>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 text-xs text-gray-500">
          <div>
            <p>© 2021 Автосалон «ABC AUTO». Официальный дилер.</p>
            <p className="mt-1 flex flex-wrap gap-3">
              <Link to="/privacy" className="hover:text-gray-300">
                Политика конфиденциальности
              </Link>
              <Link to="/terms" className="hover:text-gray-300">
                Пользовательское соглашение
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-2 rounded bg-yellow-500/10 px-3 py-1.5">
            <span className="text-lg font-bold text-yellow-400">5.0</span>
            <span className="text-yellow-400">★★★★★</span>
            <span className="text-gray-400">Яндекс</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
