import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useAuthStore } from '../../../store/useAuthStore'
import { toast } from 'react-toastify'

export const useLoginForm = () => {
  const { login } = useAuthStore()

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
      try {
        await login(values.email, values.password)
        toast.success('Logged in')
      } catch (error) {
        toast.error(error.message)
      }
    }
  })

  return { formik }
}
