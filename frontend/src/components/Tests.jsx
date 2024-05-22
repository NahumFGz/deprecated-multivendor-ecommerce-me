import { useEffect } from 'react'
import { loginApi } from '../services/api/authService'

export function Tests () {
  useEffect(() => {
    const testLogin = async () => {
      try {
        const response = await loginApi('test1@mail.com', 'qwerty123')
        console.log('Login successful:', response)
      } catch (error) {
        console.error('Error during login:', error.message)
      }
    }

    testLogin()
  }, [])

  return (
    <>
      <h1 className='text-red-300'>Hola Tests</h1>
    </>
  )
}
