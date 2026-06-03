import { Link } from 'react-router-dom'
import PagePlaceholder from '../../components/layout/PagePlaceholder'

export default function UsedCarsPage() {
  return (
    <div>
      <PagePlaceholder
        student="Asad"
        title="Авто с пробегом"
        figma="figma/Asad-2.jpg"
        route="/used-cars"
        description="Хлебные крошки, фильтр по брендам, сетка карточек Toyota Camry 2013, блок блога, SEO-текст."
      />
      <p className="pb-12 text-center text-sm text-gray-500">
        Карточка авто ведёт на страницу товара:{' '}
        <Link to="/used-cars/toyota-camry-2013" className="font-medium text-red-600 hover:underline">
          /used-cars/toyota-camry-2013
        </Link>
      </p>
    </div>
  )
}
