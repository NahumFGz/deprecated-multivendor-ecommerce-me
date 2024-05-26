import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore'

export const ProtectedRoutes = () => {
  const isAuth = useAuthStore((state) => state.isAuth)

  if (!isAuth) return <Navigate to='/login' />

  return <Outlet />
}
