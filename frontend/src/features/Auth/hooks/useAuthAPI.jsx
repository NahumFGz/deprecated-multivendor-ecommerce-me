import { loginAccessApi, authMeApi, resetPasswordApi } from '../../../services/api/authAPI'
import { useAuthStore } from '../../../store/useAuthStore'

export function useAuthAPI () {
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

  const resetPassword = async (email) => {
    try {
      const response = await resetPasswordApi(email)
      return response
    } catch (error) {
      throw new Error('Error sending email')
    }
  }

  return { loginAccess, authMe, resetPassword }
}
