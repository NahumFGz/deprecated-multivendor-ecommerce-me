import { useEffect, useState } from 'react'
import { authMeApi, loginApi } from '../services/api/authService'

export function Tests () {
  const [token, setToken] = useState('')

  useEffect(() => {
    const testLogin = async () => {
      try {
        const response = await loginApi('test1@mail.com', 'qwerty123')
        console.log('Login successful:', response)
        setToken(response.access)
      } catch (error) {
        console.error('Error during login:', error.message)
      }
    }
    testLogin()
  }, [])

  useEffect(() => {
    const testAuthMe = async () => {
      try {
        const response = await authMeApi(token)
        console.log('Auth ME:', response)
      } catch (error) {
        console.error('Error during auth:', error.message)
      }
    }

    if (token) {
      testAuthMe()
    }
  }, [token])

  return (
    <>
      <h1 className='text-red-300'>Hola Tests</h1>
    </>
  )
}
