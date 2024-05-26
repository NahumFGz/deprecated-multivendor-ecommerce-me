import { Routes, Route } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage'
import { AuthLayout } from '../../../layouts/AuthLayout'
import { PasswordResetConfirmPage } from '../pages/PasswordResetConfirm'

export function AuthRoutes () {
  return (
    <Routes>
      <Route path='/login' element={<AuthLayout><LoginPage /></AuthLayout>} />
      <Route path='/register' element={<AuthLayout><RegisterPage /></AuthLayout>} />
      <Route path='/forgot-password' element={<AuthLayout><ForgotPasswordPage /></AuthLayout>} />
      <Route path='/password-reset-confirm/:uid/:token' element={<AuthLayout><PasswordResetConfirmPage /></AuthLayout>} />
    </Routes>
  )
}
