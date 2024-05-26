import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export function PasswordResetPage () {
  const { uid, token } = useParams()

  useEffect(() => {
    console.log('id:', uid)
    console.log('token:', token)
  }, [uid, token])

  return (
    <div>
      <h1>Password Reset Page</h1>
    </div>
  )
}
