import { create } from 'zustand'
import { setItem as setLocalItem, getItem as getLocalItem, removeItem as removeLocalItem } from '../services/storage/localStorage'
import { loginAccessApi } from '../services/api/authService'

export const useAuthStore = create((set) => ({
  token: getLocalItem('token') || null,
  refreshToken: getLocalItem('refreshToken') || null,
  isLoading: false,
  error: null,

  login: async (email, password) => {
    set({ isLoading: true, error: null })
    try {
      const data = await loginAccessApi(email, password)
      setLocalItem('token', data.access)
      setLocalItem('refreshToken', data.refresh)

      set({ token: data.access, refreshToken: data.refresh, isLoading: false })
    } catch (error) {
      set({ error: error.message, isLoading: false })
    }
  },

  logout: async () => {
    set({ isLoading: true, error: null })
    try {
      removeLocalItem('token')
      removeLocalItem('refreshToken')

      set({ token: null, refreshToken: null, isLoading: false })
    } catch (error) {
      set({ error: error.message, isLoading: false })
    }
  },

  clearError: () => set({ error: null })
}))
