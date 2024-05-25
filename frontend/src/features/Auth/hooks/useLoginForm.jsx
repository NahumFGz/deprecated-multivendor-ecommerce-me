import { useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useAuthStore } from '../../../store/useAuthStore'
import { toast } from 'react-toastify'

export const useLoginForm = () => {
  const { login } = useAuthStore()
  const [loading, setLoading] = useState(false)
  const [loginError, setLoginError] = useState(null)

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
      setLoading(true)
      setLoginError(null)
      try {
        await login(values.email, values.password)
        toast.success('Logged in')
        setLoading(false)
      } catch (error) {
        setLoginError(error.message)
        toast.error(error.message)
        setLoading(false)
      }
    }
  })

  return {
    formik,
    loading,
    loginError
  }
}
