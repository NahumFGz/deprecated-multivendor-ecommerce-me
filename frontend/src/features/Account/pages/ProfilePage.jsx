import { UserCircleIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'
import { useProfileAPI } from '../hooks/useProfileAPI'

export function ProfilePage () {
  const [profile, setProfile] = useState(null)
  const [errors, setErrors] = useState({}) // Estado para almacenar errores
  const { getProfile } = useProfileAPI()

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile()
        setProfile(response[0])
      } catch (error) {
        console.error('Error getting profile')
      }
    }

    fetchProfile()
  }, [])

  useEffect(() => {
    console.log(profile)
  }, [profile])

  const validate = (fields) => {
    const newErrors = {}
    if (!fields['first-name']) newErrors['first-name'] = true
    if (!fields['last-name']) newErrors['last-name'] = true
    if (!fields['document-type']) newErrors['document-type'] = true
    if (!fields['document-number']) newErrors['document-number'] = true
    if (!fields.gender) newErrors.gender = true
    if (!fields['birth-date']) newErrors['birth-date'] = true
    if (!fields['phone-number']) newErrors['phone-number'] = true
    return newErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const fields = Object.fromEntries(new FormData(event.target))
    const newErrors = validate(fields)
    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      console.log(fields)
      console.log('--->', fields.email)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='space-y-12'>
        <div className='border-b border-gray-900/10 pb-12'>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>Profile</h2>
          <p className='mt-1 text-sm leading-6 text-gray-600'>
            This information will be displayed publicly so be careful what you share.
          </p>

          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-4'>
              <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>
                Email address
              </label>
              <div className='mt-2'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  readOnly
                  defaultValue={profile?.email || ''}
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-100'
                />
              </div>
            </div>

            <div className='col-span-full'>
              <label className='block text-sm font-medium leading-6 text-gray-900'>
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
                  defaultValue={profile?.first_name || ''}
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${errors['first-name'] ? 'ring-red-500' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
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
                  defaultValue={profile?.last_name || ''}
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${errors['last-name'] ? 'ring-red-500' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
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
                  defaultValue={profile?.document_type || ''}
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${errors['document-type'] ? 'ring-red-500' : 'ring-gray-300'} focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6`}
                >
                  <option value=''>Select</option>
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
                  defaultValue={profile?.document_number || ''}
                  pattern='[0-9]*'
                  inputMode='numeric'
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${errors['document-number'] ? 'ring-red-500' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
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
                  defaultValue={profile?.gender || ''}
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${errors.gender ? 'ring-red-500' : 'ring-gray-300'} focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6`}
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
                  defaultValue={profile?.birth_date || ''}
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${errors['birth-date'] ? 'ring-red-500' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
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
                  defaultValue={profile?.phone_number || '+51'}
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${errors['phone-number'] ? 'ring-red-500' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                />
                <input
                  type='tel'
                  name='phone-number'
                  id='phone-number'
                  autoComplete='tel'
                  defaultValue={profile?.phone_number || ''}
                  className={`col-span-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${errors['phone-number'] ? 'ring-red-500' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                />
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
