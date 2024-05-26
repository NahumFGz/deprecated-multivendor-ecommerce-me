import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Tests } from '../components/Tests'
import { ProtectedRoutes } from './ProtectedRoutes'
import { Dashboard } from '../components/Dashboard'
import { HomePage } from '../features/Home/pages/HomePage'
import { AuthRoutes } from '../features/Auth/routes/AuthRoutes'

export function Navigation () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/tests' element={<Tests />} />
        <Route path='/auth/*' element={<AuthRoutes />} />

        <Route element={<ProtectedRoutes />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
