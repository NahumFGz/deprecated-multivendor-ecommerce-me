import { useAuthStore } from '../../../store/useAuthStore'
import { logoutAllApi } from '../../../services/api/authAPI'

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
  return { logoutAll }
}
