import { Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { homeUrls } from './homeUrls'
import { HomeLayout } from '../layouts/HomeLayout'

export function HomeRoutes () {
  return (
    <Routes>
      <Route path={homeUrls.home} element={<HomeLayout><HomePage /></HomeLayout>} />
    </Routes>
  )
}
