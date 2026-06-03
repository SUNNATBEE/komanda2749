import PagePlaceholder from '../../components/layout/PagePlaceholder'

const PAGES = {
  reviews: { title: 'Отзывы', route: '/reviews' },
  contacts: { title: 'Контакты', route: '/contacts' },
  favorites: { title: 'Избранное', route: '/favorites' },
  compare: { title: 'Сравнение', route: '/compare' },
}

export default function SimplePage({ pageKey }) {
  const page = PAGES[pageKey]
  return (
    <PagePlaceholder
      student="Команда"
      title={page.title}
      figma="—"
      route={page.route}
      description="Вспомогательная страница. При необходимости распределите между участниками команды."
    />
  )
}
