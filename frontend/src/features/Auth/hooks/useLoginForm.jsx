import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useAuthStore } from '../../../store/useAuthStore'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'

export const useLoginForm = () => {
  const { login, error } = useAuthStore()
  const [loadingLogin, setloadingLogin] = useState(false)

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
      setloadingLogin(true)
      await login(values.email, values.password)
      setloadingLogin(false)
    }
  })

  useEffect(() => {
    if (!loadingLogin) {
      if (error) {
        toast.error(error)
      } else {
        toast.success('Login successful')
      }
      setloadingLogin(false)
    }
  }, [loadingLogin])

  return { formik }
}
