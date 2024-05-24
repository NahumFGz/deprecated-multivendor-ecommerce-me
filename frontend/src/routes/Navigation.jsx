import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Tests } from '../components/Tests'
import { Protected } from './ProtectedRoute'
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
        <Route path='/dashboard' element={<Protected> <Dashboard /> </Protected>} />
      </Routes>
    </BrowserRouter>
  )
}
