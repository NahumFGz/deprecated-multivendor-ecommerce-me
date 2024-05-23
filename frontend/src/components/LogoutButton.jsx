import React from 'react'
import useAuthStore from '../store/authStore'

const LogoutButton = () => {
  const { logout, isLoading } = useAuthStore()

  return (
    <button onClick={logout} disabled={isLoading}>
      {isLoading ? 'Logging out...' : 'Logout'}
    </button>
  )
}

export default LogoutButton
