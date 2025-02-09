import { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { token, login, isLoading, error, clearError } = useAuthStore()

  const handleLogin = async (e) => {
    e.preventDefault()
    clearError()
    await login(email, password)
  }

  console.log('token:', token)

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit' disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  )
}
