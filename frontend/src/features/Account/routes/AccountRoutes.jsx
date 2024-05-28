import { Routes, Route, Navigate } from 'react-router-dom'
import { accountBasePath, accountUrls } from './accountUrls'
import { AccountLayout } from '../layouts/AccountLayout'
import { DashboardPage } from '../pages/DashboardPage'
import { DirectionsPage } from '../pages/DirectionsPage'
import { ProfilePage } from '../pages/ProfilePage'
import { SellingHistoryPages } from '../pages/SellingHistoryPages'
import { ShoppingHistoryPage } from '../pages/ShoppingHistoryPage'

export function AccountRoutes () {
  return (
    <Routes>
      <Route path={accountBasePath} element={<Navigate to={accountUrls.dashboard} />} />
      <Route path={accountUrls.dashboard} element={<AccountLayout><DashboardPage /></AccountLayout>} />
      <Route path={accountUrls.directions} element={<AccountLayout><DirectionsPage /></AccountLayout>} />
      <Route path={accountUrls.profile} element={<AccountLayout><ProfilePage /></AccountLayout>} />
      <Route path={accountUrls.selling} element={<AccountLayout><SellingHistoryPages /></AccountLayout>} />
      <Route path={accountUrls.shopping} element={<AccountLayout><ShoppingHistoryPage /></AccountLayout>} />
    </Routes>
  )
}
