// /Users/nahumfg/Projects/GitHubProjects/multivendor-ecommerce/frontend/src/store/authStore.js

import { create } from 'zustand'
import { setItem as setSessionItem, getItem as getSessionItem, removeItem as removeSessionItem } from '../services/storage/sessionStorage'
import { setItem as setLocalItem, getItem as getLocalItem, removeItem as removeLocalItem } from '../services/storage/localStorage'
import { loginAccessApi, authMeApi } from '../services/api/authService'

const useAuthStore = create((set) => ({
  user: getSessionItem('user') || null,
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

      const userData = await authMeApi(data.access)
      console.log(userData)
      setSessionItem('user', userData)

      set({ user: userData, token: data.access, refreshToken: data.refresh, isLoading: false })
    } catch (error) {
      set({ error: error.message, isLoading: false })
    }
  },

  logout: async () => {
    set({ isLoading: true, error: null })
    try {
      removeLocalItem('token')
      removeLocalItem('refreshToken')
      removeSessionItem('user')

      set({ user: null, token: null, refreshToken: null, isLoading: false })
    } catch (error) {
      set({ error: error.message, isLoading: false })
    }
  },

  clearError: () => set({ error: null })
}))

export default useAuthStore
