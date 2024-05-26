import { Routes, Route } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage'
import { AuthLayout } from '../../../layouts/AuthLayout'
import { PasswordResetConfirmPage } from '../pages/PasswordResetConfirm'
import { authUrls as urls } from './authUrls'

export function AuthRoutes () {
  return (
    <Routes>
      <Route path={urls.login} element={<AuthLayout><LoginPage /></AuthLayout>} />
      <Route path={urls.register} element={<AuthLayout><RegisterPage /></AuthLayout>} />
      <Route path={urls.forgotPassword} element={<AuthLayout><ForgotPasswordPage /></AuthLayout>} />
      <Route path={urls.passwordResetConfirm} element={<AuthLayout><PasswordResetConfirmPage /></AuthLayout>} />
    </Routes>
  )
}
