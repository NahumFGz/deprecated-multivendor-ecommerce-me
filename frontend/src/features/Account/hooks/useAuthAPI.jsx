import { useAuthStore } from '../../../store/useAuthStore'
import { changePasswordApi, logoutAllApi } from '../../../services/api/authAPI'

export function useAuthAPI () {
  const token = useAuthStore((state) => state.token)

  const logoutAll = async () => {
    try {
      const response = await logoutAllApi(token?.access)
      return response
    } catch (error) {
      throw new Error('Error logging out')
    }
  }

  const changePassword = async (changePasswordData) => {
    try {
      const response = await changePasswordApi(token?.access, changePasswordData)
      return response
    } catch (error) {
      throw new Error('Error changing password')
    }
  }

  return { logoutAll, changePassword }
}
