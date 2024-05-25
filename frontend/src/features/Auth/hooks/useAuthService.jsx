import { loginAccessApi } from '../../../services/api/authService'

export function useAuthService () {
  const loginAccess = async (email, password) => {
    try {
      const response = await loginAccessApi(email, password)
      return response
    } catch (error) {
      throw new Error('Login failed')
    }
  }

  return { loginAccess }
}
