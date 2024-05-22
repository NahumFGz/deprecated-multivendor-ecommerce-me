import { useEffect } from 'react'
import { registerApi } from '../services/api/authService'

export function Tests () {
  useEffect(() => {
    const testRegister = async () => {
      try {
        const response = await registerApi({
          email: 'td22222sds5@mail.com',
          first_name: 'Test',
          last_name: 'User',
          gender: 'M',
          birth_date: '1990-01-01',
          password: 'qwerty12345.',
          password2: 'qwerty12345.'
        })
        console.log('Register successful:', response)
      } catch (error) {
        console.log('Register failed:', error)
      }
    }

    testRegister()
  }, [])

  return (
    <>
      <h1 className='text-red-300'>Hola Tests</h1>
    </>
  )
}
