import { Routes, Route } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage'
import { AuthLayout } from '../../../layouts/AuthLayout'

export function AuthRoutes () {
  return (
    <Routes>
      <Route path='/login' element={<AuthLayout><LoginPage /> </AuthLayout>} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/forgot-password' element={<ForgotPasswordPage />} />
    </Routes>
  )
}
