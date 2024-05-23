import { Navigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'

export const ProtectedRoute = ({ children }) => {
  const { token } = useAuthStore()

  return token ? children : <Navigate to='/login' />
}
