import { Routes, Route } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage'
import { AuthLayout } from '../../../layouts/AuthLayout'
import { PasswordResetConfirmPage } from '../pages/PasswordResetConfirm'
import { authPaths } from './AuthUrls'

export function AuthRoutes () {
  return (
    <Routes>
      <Route path={authPaths.login} element={<AuthLayout><LoginPage /></AuthLayout>} />
      <Route path={authPaths.register} element={<AuthLayout><RegisterPage /></AuthLayout>} />
      <Route path={authPaths.forgotPassword} element={<AuthLayout><ForgotPasswordPage /></AuthLayout>} />
      <Route path={authPaths.passwordResetConfirm} element={<AuthLayout><PasswordResetConfirmPage /></AuthLayout>} />
    </Routes>
  )
}
