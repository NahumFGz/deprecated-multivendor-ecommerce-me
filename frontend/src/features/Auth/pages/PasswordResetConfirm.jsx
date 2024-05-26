import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export function PasswordResetConfirmPage () {
  const { uid, token } = useParams()

  useEffect(() => {
    console.log('id:', uid)
    console.log('token:', token)
  }, [uid, token])

  return (
    <div>
      <h1>Password Reset Confirm Page</h1>
    </div>
  )
}
