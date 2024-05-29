import { useNavigate } from 'react-router-dom'
import { authUrls } from '../../../routes/urls/authUrls'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useAuthAPI } from '../hooks/useAuthAPI'
import { toast } from 'react-toastify'

export const usePasswordResetForm = ({ uid, token }) => {
  const { resetPasswordConfirm } = useAuthAPI()
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      password1: '',
      password2: ''
    },
    validationSchema: Yup.object({
      password1: Yup.string()
        .required('Requerido')
        .matches(/[A-Z]/, 'Debe contener al menos una letra mayúscula')
        .matches(/[a-z]/, 'Debe contener al menos una letra minúscula')
        .matches(/\d/, 'Debe contener al menos un número')
        .matches(/[@$!%*?&.]/, 'Debe contener al menos un carácter especial'),
      password2: Yup.string()
        .oneOf([Yup.ref('password1'), null], 'Las contraseñas no coinciden')
        .required('Requerido')
    }),
    onSubmit: async (values) => {
      const newValues = {
        new_password: values.password1,
        uidb64: uid,
        token
      }
      try {
        await resetPasswordConfirm(newValues)
        toast.success('Contraseña actualizada')
        navigate(authUrls.login)
      } catch (error) {
        toast.error('Token inválido, solicita un nuevo correo de recuperación')
      }
    }
  })

  return { formik }
}
