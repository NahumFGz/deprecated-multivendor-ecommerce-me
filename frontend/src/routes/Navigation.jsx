import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Tests } from '../components/Tests'

export function Navigation () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/test' />} />
        <Route path='/test' element={<Tests />} />
      </Routes>
    </BrowserRouter>
  )
}
