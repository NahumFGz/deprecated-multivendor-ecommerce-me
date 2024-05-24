import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Tests } from '../components/Tests'
import { Protected } from './ProtectedRoute'
import { Dashboard } from '../components/Dashboard'

export function Navigation () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/login' element={<Tests />} />
        <Route path='/dashboard' element={<Protected> <Dashboard /> </Protected>} />
      </Routes>
    </BrowserRouter>
  )
}
