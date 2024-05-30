import { useState } from 'react'
import { CloseAllSessionsAlert } from '../components/CloseAllSessionsAlert'
import { CloseAllSessions } from '../components/CloseAllSessions'
import { ChangePasswordForm } from '../components/ChangePasswordForm'

export function SecurityPage () {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <CloseAllSessions setOpen={setOpen} />
      <ChangePasswordForm />
      <CloseAllSessionsAlert open={open} setOpen={setOpen} />
    </div>
  )
}
