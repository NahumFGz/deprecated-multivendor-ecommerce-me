import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      setToken: (token) => set({ token })
    }),
    {
      name: 'auth',
      // eslint-disable-next-line no-undef
      getStorage: () => localStorage
    }
  )
)
