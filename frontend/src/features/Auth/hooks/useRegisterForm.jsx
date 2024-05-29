import { useNavigate } from 'react-router-dom'
import { authUrls } from '../../../routes/urls/authUrls'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useAuthAPI } from '../hooks/useAuthAPI'
import { toast } from 'react-toastify'

export const useRegisterForm = () => {
  const { registerUser } = useAuthAPI()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: '',
      first_name: '',
      last_name: '',
      gender: '',
      birth_date: '',
      password: '',
      password2: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Correo inválido').required('Requerido'),
      first_name: Yup.string().required('Requerido'),
      last_name: Yup.string().required('Requerido'),
      gender: Yup.string().required('Requerido'),
      birth_date: Yup.date()
        .required('Requerido')
        .max(new Date(), 'Fecha no valida')
        .min(1900, 'Debes tener al menos 10 años de edad'),
      password: Yup.string()
        .required('Requerido')
        .matches(/[A-Z]/, 'Debe contener al menos una letra mayúscula')
        .matches(/[a-z]/, 'Debe contener al menos una letra minúscula')
        .matches(/\d/, 'Debe contener al menos un número')
        .matches(/[@$!%*?&.]/, 'Debe contener al menos un carácter especial'),
      password2: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
        .required('Requerido')
    }),
    onSubmit: async (values) => {
      try {
        const { detail } = await registerUser(values)
        if (detail.includes('ya está registrado')) {
          toast.info(detail)
        } else {
          toast.success('Usuario registrado')
        }
      } catch (error) {
        toast.info(error.message)
      }
      navigate(authUrls.login)
    }
  })

  return { formik }
}
