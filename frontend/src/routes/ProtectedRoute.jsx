import { Navigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'

export const Protected = ({ children }) => {
  const { token } = useAuthStore()

  return token ? children : <Navigate to='/login' />
}
