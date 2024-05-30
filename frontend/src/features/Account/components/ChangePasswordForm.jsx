import { useFormik } from 'formik'
import * as Yup from 'yup'

export function ChangePasswordForm () {
  const formik = useFormik({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      currentPassword: Yup.string().required('Current Password is required'),
      newPassword: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
        .required('New Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
        .required('Confirm Password is required')
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values)
      resetForm()
    }
  })

  return (
    <form className='mt-8' onSubmit={formik.handleSubmit}>
      <div className='space-y-12'>
        <div className='grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3'>
          <div>
            <h2 className='text-base font-semibold leading-7 text-gray-900'>Change Password</h2>
            <p className='mt-1 text-sm leading-6 text-gray-600'>Enter your current password and a new password to change your password.</p>
          </div>
          <div className='grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2'>
            <div className='sm:col-span-4'>
              <label htmlFor='current-password' className='block text-sm font-medium leading-6 text-gray-900'>
                Current Password
              </label>
              <div className='mt-2'>
                <input
                  type='password'
                  name='currentPassword'
                  id='current-password'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  placeholder='Current Password'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.currentPassword}
                />
                {formik.touched.currentPassword && formik.errors.currentPassword
                  ? (
                    <div className='text-red-500 text-sm'>{formik.errors.currentPassword}</div>
                    )
                  : null}
              </div>
            </div>

            <div className='sm:col-span-4'>
              <label htmlFor='new-password' className='block text-sm font-medium leading-6 text-gray-900'>
                New Password
              </label>
              <div className='mt-2'>
                <input
                  type='password'
                  name='newPassword'
                  id='new-password'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  placeholder='New Password'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.newPassword}
                />
                {formik.touched.newPassword && formik.errors.newPassword
                  ? (
                    <div className='text-red-500 text-sm'>{formik.errors.newPassword}</div>
                    )
                  : null}
              </div>
            </div>

            <div className='sm:col-span-4'>
              <label htmlFor='confirm-password' className='block text-sm font-medium leading-6 text-gray-900'>
                Confirm New Password
              </label>
              <div className='mt-2'>
                <input
                  type='password'
                  name='confirmPassword'
                  id='confirm-password'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  placeholder='Confirm New Password'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? (
                    <div className='text-red-500 text-sm'>{formik.errors.confirmPassword}</div>
                    )
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-6 flex items-center justify-end gap-x-6'>
        <button
          type='submit'
          className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          Save
        </button>
      </div>
    </form>
  )
}
