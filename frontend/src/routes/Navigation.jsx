import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ProtectedRoutes } from './ProtectedRoutes'

import { authBasePath, authUrls } from '../features/Auth/routes/authUrls'
import { AuthLayout } from '../features/Auth/layouts/AuthLayout'
import { LoginPage } from '../features/Auth/pages/LoginPage'
import { RegisterPage } from '../features/Auth/pages/RegisterPage'
import { PasswordResetPage } from '../features/Auth/pages/PasswordResetPage'

import { accountBasePath, accountUrls } from '../features/Account/routes/accountUrls'
import { AccountLayout } from '../features/Account/layouts/AccountLayout'
import { DashboardPage } from '../features/Account/pages/DashboardPage'
import { DirectionsPage } from '../features/Account/pages/DirectionsPage'
import { ProfilePage } from '../features/Account/pages/ProfilePage'
import { SellingHistoryPage } from '../features/Account/pages/SellingHistoryPage'
import { ShoppingHistoryPage } from '../features/Account/pages/ShoppingHistoryPage'

import { homeUrls } from '../features/Home/routes/homeUrls'
import { HomeLayout } from '../features/Home/layouts/HomeLayout'
import { HomePage } from '../features/Home/pages/HomePage'
import { YugiohPage } from '../features/Home/pages/YugiohPage'
import { PokemonPage } from '../features/Home/pages/PokemonPage'
import { BoardGamesPage } from '../features/Home/pages/BoardGamesPage'
import { MarketplacePage } from '../features/Home/pages/MarketplacePage'
import { FiltersLayout } from '../features/Home/layouts/FiltersLayout'

export function Navigation () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path={homeUrls.home} element={<HomeLayout><HomePage /></HomeLayout>} />
        <Route path={homeUrls.yugioh} element={<HomeLayout><FiltersLayout><YugiohPage /></FiltersLayout></HomeLayout>} />
        <Route path={homeUrls.pokemon} element={<HomeLayout><FiltersLayout><PokemonPage /></FiltersLayout></HomeLayout>} />
        <Route path={homeUrls.boardGames} element={<HomeLayout><FiltersLayout><BoardGamesPage /></FiltersLayout></HomeLayout>} />
        <Route path={homeUrls.marketplace} element={<HomeLayout><FiltersLayout><MarketplacePage /></FiltersLayout></HomeLayout>} />

        <Route path={authBasePath} element={<Navigate to={authUrls.login} />} />
        <Route path={authUrls.login} element={<AuthLayout><LoginPage /></AuthLayout>} />
        <Route path={authUrls.register} element={<AuthLayout><RegisterPage /></AuthLayout>} />
        <Route path={authUrls.passwordReset} element={<AuthLayout><PasswordResetPage /></AuthLayout>} />

        <Route element={<ProtectedRoutes />}>
          <Route path={accountBasePath} element={<Navigate to={accountUrls.dashboard} />} />
          <Route path={accountUrls.dashboard} element={<AccountLayout><DashboardPage /></AccountLayout>} />
          <Route path={accountUrls.directions} element={<AccountLayout><DirectionsPage /></AccountLayout>} />
          <Route path={accountUrls.profile} element={<AccountLayout><ProfilePage /></AccountLayout>} />
          <Route path={accountUrls.selling} element={<AccountLayout><SellingHistoryPage /></AccountLayout>} />
          <Route path={accountUrls.shopping} element={<AccountLayout><ShoppingHistoryPage /></AccountLayout>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
