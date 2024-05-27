import { Link } from 'react-router-dom'
import { authUrls } from '../routes/authUrls'
import { useRegisterForm } from '../hooks/useRegisterForm'

const genderOptions = [
  { value: '', label: 'Seleccione su género' },
  { value: 'M', label: 'Masculino' },
  { value: 'F', label: 'Femenino' },
  { value: 'O', label: 'Otro' }
]

export function RegisterPage () {
  const { formik } = useRegisterForm()

  const getClassNames = (field) => {
    return `block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset 
            ${formik.touched[field] && formik.errors[field]
              ? 'ring-red-500'
              : 'ring-gray-300'} 
            placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
            focus:ring-indigo-600 sm:text-sm sm:leading-6`
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
            Create your account
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form
            className='space-y-6'
            noValidate
            onSubmit={formik.handleSubmit}
          >
            <div>
              <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>
                Correo electrónico
              </label>
              <div className='mt-2'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  className={getClassNames('email')}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email
                  ? (
                    <div className='text-red-500 text-sm'>{formik.errors.email}</div>
                    )
                  : null}
              </div>
            </div>

            <div>
              <label htmlFor='first_name' className='block text-sm font-medium leading-6 text-gray-900'>
                Nombre(s)
              </label>
              <div className='mt-2'>
                <input
                  id='first_name'
                  name='first_name'
                  type='text'
                  className={getClassNames('first_name')}
                  value={formik.values.first_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.first_name && formik.errors.first_name
                  ? (
                    <div className='text-red-500 text-sm'>{formik.errors.first_name}</div>
                    )
                  : null}
              </div>
            </div>

            <div>
              <label htmlFor='last_name' className='block text-sm font-medium leading-6 text-gray-900'>
                Apellidos
              </label>
              <div className='mt-2'>
                <input
                  id='last_name'
                  name='last_name'
                  type='text'
                  className={getClassNames('last_name')}
                  value={formik.values.last_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.last_name && formik.errors.last_name
                  ? (
                    <div className='text-red-500 text-sm'>{formik.errors.last_name}</div>
                    )
                  : null}
              </div>
            </div>

            <div>
              <label htmlFor='gender' className='block text-sm font-medium leading-6 text-gray-900'>
                Género
              </label>
              <div className='mt-2'>
                <select
                  id='gender'
                  name='gender'
                  className={getClassNames('gender')}
                  value={formik.values.gender}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  {genderOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {formik.touched.gender && formik.errors.gender
                  ? (
                    <div className='text-red-500 text-sm'>{formik.errors.gender}</div>
                    )
                  : null}
              </div>
            </div>

            <div>
              <label htmlFor='birth_date' className='block text-sm font-medium leading-6 text-gray-900'>
                Fecha de nacimiento
              </label>
              <div className='mt-2'>
                <input
                  id='birth_date'
                  name='birth_date'
                  type='date'
                  className={getClassNames('birth_date')}
                  value={formik.values.birth_date}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.birth_date && formik.errors.birth_date
                  ? (
                    <div className='text-red-500 text-sm'>{formik.errors.birth_date}</div>
                    )
                  : null}
              </div>
            </div>

            <div>
              <label htmlFor='password' className='block text-sm font-medium leading-6 text-gray-900'>
                Contraseña
              </label>
              <div className='mt-2'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  className={getClassNames('password')}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password
                  ? (
                    <div className='text-red-500 text-sm'>{formik.errors.password}</div>
                    )
                  : null}
              </div>
            </div>

            <div>
              <label htmlFor='password2' className='block text-sm font-medium leading-6 text-gray-900'>
                Confirmar contraseña
              </label>
              <div className='mt-2'>
                <input
                  id='password2'
                  name='password2'
                  type='password'
                  required
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
                Register
              </button>
            </div>
          </form>

          <p className='mt-10 text-center text-sm text-gray-500'>
            Already have an account?{' '}
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
