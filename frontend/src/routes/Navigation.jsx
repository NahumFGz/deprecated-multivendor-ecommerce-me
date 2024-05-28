import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ProtectedRoutes } from './ProtectedRoutes'
import { Dashboard } from '../components/Dashboard'
import { HomeRoutes } from '../features/Home/routes/HomeRoutes'
import { AuthRoutes } from '../features/Auth/routes/AuthRoutes'

export function Navigation () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home/*' element={<HomeRoutes />} />
        <Route path='/auth/*' element={<AuthRoutes />} />

        <Route element={<ProtectedRoutes />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
