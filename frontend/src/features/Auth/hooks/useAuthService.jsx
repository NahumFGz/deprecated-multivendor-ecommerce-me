import { loginAccessApi, authMeApi } from '../../../services/api/authService'
import { useAuthStore } from '../../../store/useAuthStore'

export function useAuthService () {
  const token = useAuthStore((state) => state.token)

  const loginAccess = async (email, password) => {
    try {
      const response = await loginAccessApi(email, password)
      return response
    } catch (error) {
      throw new Error('Login failed')
    }
  }

  const authMe = async () => {
    try {
      const response = await authMeApi(token?.access)
      return response
    } catch (error) {
      throw new Error('Error getting profile')
    }
  }

  return { loginAccess, authMe }
}
