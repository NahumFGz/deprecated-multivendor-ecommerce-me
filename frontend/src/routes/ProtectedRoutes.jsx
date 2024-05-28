import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore'
import { authUrls } from '../features/Auth/routes/authUrls'

export const ProtectedRoutes = () => {
  const isAuth = useAuthStore((state) => state.isAuth)

  if (!isAuth) return <Navigate to={authUrls.login} />

  return <Outlet />
}
