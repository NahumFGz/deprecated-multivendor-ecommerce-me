import { useEffect } from 'react'
import Login from './Login'
import LogoutButton from './LogoutButton'
import { getItem } from '../services/storage/sessionStorage'

export function Tests () {
  useEffect(() => {
    const userData = getItem('user')

    console.log(userData)
  }, [])

  return (
    <>
      <Login />
      <p>---</p>
      <LogoutButton />
    </>
  )
}
