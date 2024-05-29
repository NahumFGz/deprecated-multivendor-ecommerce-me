import { UserCircleIcon } from '@heroicons/react/24/solid'

export function ProfilePage () {
  return (
    <form>
      <div className='space-y-12'>
        <div className='border-b border-gray-900/10 pb-12'>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>Profile</h2>
          <p className='mt-1 text-sm leading-6 text-gray-600'>
            This information will be displayed publicly so be careful what you share.
          </p>

          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-4'>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-gray-900'
                readOnly
              >
                Email address
              </label>
              <div className='mt-2'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  readOnly
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-100'
                />
              </div>
            </div>

            <div className='col-span-full'>
              <label htmlFor='photo' className='block text-sm font-medium leading-6 text-gray-900'>
                Photo
              </label>
              <div className='mt-2 flex items-center gap-x-3'>
                <UserCircleIcon className='h-12 w-12 text-gray-300' aria-hidden='true' />
                <button
                  type='button'
                  className='rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                >
                  Change
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='border-b border-gray-900/10 pb-12'>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>Personal Information</h2>
          <p className='mt-1 text-sm leading-6 text-gray-600'>Use a permanent address where you can receive mail.</p>

          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-3'>
              <label htmlFor='first-name' className='block text-sm font-medium leading-6 text-gray-900'>
                First name
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='first-name'
                  id='first-name'
                  autoComplete='given-name'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label htmlFor='last-name' className='block text-sm font-medium leading-6 text-gray-900'>
                Last name
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='last-name'
                  id='last-name'
                  autoComplete='family-name'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label htmlFor='document-type' className='block text-sm font-medium leading-6 text-gray-900'>
                Document Type
              </label>
              <div className='mt-2'>
                <select
                  id='document-type'
                  name='document-type'
                  autoComplete='document-type'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                >
                  <option value='PA'>Pasaporte</option>
                  <option value='DNI'>Documento nacional de identidad</option>
                  <option value='CE'>Carnet de extranjería</option>
                </select>
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label htmlFor='document-number' className='block text-sm font-medium leading-6 text-gray-900'>
                Document Number
              </label>
              <div className='mt-2'>
                <input
                  type='number'
                  name='document-number'
                  id='document-number'
                  autoComplete='document-number'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label htmlFor='gender' className='block text-sm font-medium leading-6 text-gray-900'>
                Gender
              </label>
              <div className='mt-2'>
                <select
                  id='gender'
                  name='gender'
                  autoComplete='gender'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                >
                  <option value='M'>Male</option>
                  <option value='F'>Female</option>
                  <option value='O'>Other</option>
                </select>
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label htmlFor='birth-date' className='block text-sm font-medium leading-6 text-gray-900'>
                Birth Date
              </label>
              <div className='mt-2'>
                <input
                  type='date'
                  name='birth-date'
                  id='birth-date'
                  autoComplete='bday'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label htmlFor='phone-number' className='block text-sm font-medium leading-6 text-gray-900'>
                Phone Number
              </label>
              <div className='mt-2 grid grid-cols-3 gap-2'>
                <input
                  type='tel'
                  name='country-code'
                  id='country-code'
                  placeholder='+1'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
                <input
                  type='tel'
                  name='phone-number'
                  id='phone-number'
                  autoComplete='tel'
                  className='col-span-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
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
  )
}
