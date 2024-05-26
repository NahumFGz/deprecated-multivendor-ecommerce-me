import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Tests } from '../components/Tests'
import { ProtectedRoutes } from './ProtectedRoutes'
import { Dashboard } from '../components/Dashboard'
import { HomePage } from '../features/Home/pages/HomePage'
import { LoginPage } from '../features/Auth/pages/LoginPage'

export function Navigation () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/tests' element={<Tests />} />

        <Route element={<ProtectedRoutes />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
