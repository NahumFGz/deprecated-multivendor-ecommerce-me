import React from 'react'
import { useAuthStore } from '../store/authStore'

export const LogoutButton = () => {
  const { logout, isLoading } = useAuthStore()

  return (
    <button onClick={logout} disabled={isLoading}>
      {isLoading ? 'Logging out...' : 'Logout'}
    </button>
  )
}
