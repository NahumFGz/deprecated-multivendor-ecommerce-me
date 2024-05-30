import { useState } from 'react'
import { SessionAlert } from '../components/SessionAlert'

export function SecurityPage () {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <form>
        <div className='space-y-12'>
          <div className='grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3'>
            <div>
              <h2 className='text-base font-semibold leading-7 text-gray-900'>Account Settings</h2>
              <p className='mt-2 text-sm leading-6 text-gray-600'>Cerrar todas las sesiones activas en todos los dispositivos.</p>
            </div>
            <div className='grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2'>
              <div className='col-span-full'>
                <button
                  type='button'
                  className='rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'
                  onClick={() => setOpen(true)}
                >
                  Cerrar todas las sesiones
                </button>
              </div>
            </div>
          </div>

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
                    name='current-password'
                    id='current-password'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    placeholder='Current Password'
                  />
                </div>
              </div>

              <div className='sm:col-span-4'>
                <label htmlFor='new-password' className='block text-sm font-medium leading-6 text-gray-900'>
                  New Password
                </label>
                <div className='mt-2'>
                  <input
                    type='password'
                    name='new-password'
                    id='new-password'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    placeholder='New Password'
                  />
                </div>
              </div>

              <div className='sm:col-span-4'>
                <label htmlFor='confirm-password' className='block text-sm font-medium leading-6 text-gray-900'>
                  Confirm New Password
                </label>
                <div className='mt-2'>
                  <input
                    type='password'
                    name='confirm-password'
                    id='confirm-password'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    placeholder='Confirm New Password'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-6 flex items-center justify-end gap-x-6'>
          <button type='button' className='text-sm font-semibold leading-6 text-gray-900'>
            Cancel
          </button>
          <button
            type='submit'
            className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Save
          </button>
        </div>
      </form>

      <SessionAlert open={open} setOpen={setOpen} />
    </div>
  )
}
