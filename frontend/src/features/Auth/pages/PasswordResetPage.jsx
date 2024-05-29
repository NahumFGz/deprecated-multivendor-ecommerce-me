import { useParams, Link } from 'react-router-dom'
import { authUrls } from '../../../routes/urls/authUrls'
import { usePasswordResetForm } from '../hooks/usePasswordResetForm'
import { useId } from 'react'

export function PasswordResetPage () {
  const { uid, token } = useParams()
  const { formik } = usePasswordResetForm({ uid, token })
  const password1Id = useId()
  const password2Id = useId()

  const getClassNames = (field) => {
    return `block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${formik.touched[field] && formik.errors[field] ? 'ring-red-500' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`
  }

  return (
    <>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <img
            className='mx-auto h-10 w-auto'
            src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
            alt='Your Company'
          />
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Reset your password
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form
            className='space-y-6'
            noValidate
            onSubmit={formik.handleSubmit}
          >
            <div>
              <label htmlFor={password1Id} className='block text-sm font-medium leading-6 text-gray-900'>
                Nueva contraseña
              </label>
              <div className='mt-2'>
                <input
                  id={password1Id}
                  name='password1'
                  type='password'
                  className={getClassNames('password1')}
                  value={formik.values.password1}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password1 && formik.errors.password1
                  ? (
                    <div className='text-red-500 text-sm'>{formik.errors.password1}</div>
                    )
                  : null}
              </div>
            </div>

            <div>
              <label htmlFor={password2Id} className='block text-sm font-medium leading-6 text-gray-900'>
                Confirmar nueva contraseña
              </label>
              <div className='mt-2'>
                <input
                  id={password2Id}
                  name='password2'
                  type='password'
                  className={getClassNames('password2')}
                  value={formik.values.password2}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password2 && formik.errors.password2
                  ? (
                    <div className='text-red-500 text-sm'>{formik.errors.password2}</div>
                    )
                  : null}
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Reset Password
              </button>
            </div>
          </form>

          <p className='mt-10 text-center text-sm text-gray-500'>
            Remembered your password?{' '}
            <Link
              className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
              to={authUrls.login}
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
