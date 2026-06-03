import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from '../components/layout/MainLayout'
import CarDetailPage from '../pages/Asad/CarDetailPage'
import UsedCarsPage from '../pages/Asad/UsedCarsPage'
import ModelsPage from '../pages/Azamat/ModelsPage'
import InsurancePage from '../pages/Bahodir/InsurancePage'
import CamryPage from '../pages/Behruz/CamryPage'
import HomePage from '../pages/Mansur/HomePage'
import TaxiCreditPage from '../pages/Mansur/TaxiCreditPage'
import OffersPage from '../pages/Mirlan/OffersPage'
import CreditPage from '../pages/Odil/CreditPage'
import CatalogPage from '../pages/Qobil/CatalogPage'
import SimplePage from '../pages/shared/SimplePage'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="used-cars" element={<UsedCarsPage />} />
          <Route path="used-cars/:slug" element={<CarDetailPage />} />
          <Route path="credit" element={<CreditPage />} />
          <Route path="offers" element={<OffersPage />} />
          <Route path="taxi-credit" element={<TaxiCreditPage />} />
          <Route path="insurance" element={<InsurancePage />} />
          <Route path="models" element={<ModelsPage />} />
          <Route path="camry" element={<CamryPage />} />
          <Route path="reviews" element={<SimplePage pageKey="reviews" />} />
          <Route path="contacts" element={<SimplePage pageKey="contacts" />} />
          <Route path="favorites" element={<SimplePage pageKey="favorites" />} />
          <Route path="compare" element={<SimplePage pageKey="compare" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
