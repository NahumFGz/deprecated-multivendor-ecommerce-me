import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useAuthStore } from '../../../store/useAuthStore'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useAuthAPI } from './useAuthAPI'

export const useLoginForm = () => {
  const { loginAccess } = useAuthAPI()
  const setToken = useAuthStore((store) => store.setToken)
  const isAuth = useAuthStore((store) => store.isAuth)
  const navigate = useNavigate()

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
        const response = await loginAccess(values.email, values.password)
        setToken(response)
        navigate('/home')
      } catch (error) {
        toast.error(error.message)
      }
    }
  })

  return { formik, navigate, isAuth }
}
