import { Routes, Route } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'
import { AuthLayout } from '../../../layouts/AuthLayout'
import { PasswordResetPage } from '../pages/PasswordResetPage'
import { authUrls as urls } from './authUrls'

export function AuthRoutes () {
  return (
    <Routes>
      <Route path={urls.login} element={<AuthLayout><LoginPage /></AuthLayout>} />
      <Route path={urls.register} element={<AuthLayout><RegisterPage /></AuthLayout>} />
      <Route path={urls.passwordReset} element={<AuthLayout><PasswordResetPage /></AuthLayout>} />
    </Routes>
  )
}
