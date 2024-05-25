import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useAuthStore } from '../../../store/useAuthStore'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'

export const useLoginForm = () => {
  const { login, error, isLoading } = useAuthStore()
  const [loginAttempted, setLoginAttempted] = useState(false)

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required')
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoginAttempted(true)
      await login(values.email, values.password)
    }
  })

  useEffect(() => {
    // Solo reacciona cuando el estado de loading cambia a false y un login ha sido intentado
    if (!isLoading && loginAttempted) {
      if (error) {
        toast.error(error)
      } else {
        toast.success('Login successful')
      }
      // Restablece el estado para nuevos intentos
      setLoginAttempted(false)
    }
    console.log('Error: --> ', error)
  }, [isLoading, loginAttempted, error]) // Observa 'isLoading' principalmente

  return { formik }
}
