import { Link, NavLink } from 'react-router-dom'
import {
  ADDRESS,
  MAIN_NAV,
  PHONE_MAIN,
  PHONE_SECONDARY,
  SECONDARY_NAV,
  WORK_HOURS,
} from '../../constants/navigation'

function NavItem({ to, children, end = false }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `transition-colors hover:text-red-600 ${
          isActive ? 'text-red-600' : 'text-gray-800'
        }`
      }
    >
      {children}
    </NavLink>
  )
}

function MainNavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-sm font-bold uppercase tracking-wide transition-colors hover:text-red-600 ${
          isActive
            ? 'border-b-2 border-red-600 pb-0.5 text-red-600'
            : 'text-gray-900'
        }`
      }
    >
      {children}
    </NavLink>
  )
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top info bar */}
      <div className="hidden border-b border-gray-200 bg-gray-50 text-xs text-gray-600 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          <span className="flex items-center gap-1.5">
            <svg className="h-3.5 w-3.5 shrink-0 text-red-600" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            {ADDRESS}
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="h-3.5 w-3.5 shrink-0 text-red-600" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            Время работы: {WORK_HOURS}
          </span>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 font-medium text-green-600 hover:text-green-700"
          >
            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
        </div>
      </div>

      {/* Main header row */}
      <div className="border-b border-gray-100">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-3">
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="rounded p-1 text-gray-700 hover:bg-gray-100 lg:hidden"
              aria-label="Меню"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-sm font-black text-white">
                A
              </span>
              <span>
                <span className="block text-lg font-black leading-tight tracking-tight text-gray-900">
                  ABC AUTO
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-gray-500">
                  Автосалон
                </span>
              </span>
            </Link>

            <span className="hidden rounded border border-red-200 bg-red-50 px-2 py-1 text-[10px] font-medium leading-tight text-red-700 xl:block">
              10 лет
              <br />
              превосходим ожидания
            </span>
          </div>

          <nav className="hidden flex-wrap items-center gap-x-4 gap-y-1 text-sm lg:flex">
            {SECONDARY_NAV.map((item) => (
              <NavItem key={item.path} to={item.path} end={item.path === '/'}>
                {item.label}
              </NavItem>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden flex-col text-right text-sm sm:flex">
              <a href={`tel:${PHONE_MAIN.replace(/\s/g, '')}`} className="font-bold text-gray-900 hover:text-red-600">
                {PHONE_MAIN}
              </a>
              <a
                href={`tel:${PHONE_SECONDARY.replace(/\s/g, '')}`}
                className="text-xs text-gray-500 hover:text-red-600"
              >
                {PHONE_SECONDARY}
              </a>
            </div>
            <button
              type="button"
              className="rounded bg-red-600 px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-red-700"
            >
              Обратный звонок
            </button>
          </div>
        </div>
      </div>

      {/* Category navigation */}
      <div className="border-b border-gray-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {MAIN_NAV.map((item) => (
              <MainNavItem key={item.path} to={item.path}>
                {item.label}
              </MainNavItem>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/favorites"
              className="relative rounded p-1.5 text-gray-600 hover:bg-gray-100"
              aria-label="Избранное"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white">
                0
              </span>
            </Link>
            <Link
              to="/compare"
              className="relative rounded p-1.5 text-gray-600 hover:bg-gray-100"
              aria-label="Сравнение"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white">
                0
              </span>
            </Link>
            <button
              type="button"
              className="rounded p-1.5 text-gray-600 hover:bg-gray-100"
              aria-label="Поиск"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
