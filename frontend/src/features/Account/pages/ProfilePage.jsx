import { UserCircleIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'
import { useProfileAPI } from '../hooks/useProfileAPI'

export function ProfilePage () {
  const [profile, setProfile] = useState(null)
  const [errors, setErrors] = useState({})
  const [formValues, setFormValues] = useState({
    first_name: '',
    last_name: '',
    document_type: '',
    document_number: '',
    gender: '',
    birth_date: '',
    phone_country_code: '',
    phone_number: ''
  })

  const { getProfile, patchProfile } = useProfileAPI()

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile()
        setProfile(response[0])
        setFormValues({
          first_name: response[0].first_name || '',
          last_name: response[0].last_name || '',
          document_type: response[0].document_type || '',
          document_number: response[0].document_number || '',
          gender: response[0].gender || '',
          birth_date: response[0].birth_date || '',
          phone_country_code: response[0].phone_country_code || '',
          phone_number: response[0].phone_number || ''
        })
      } catch (error) {
        console.error('Error getting profile')
      }
    }

    fetchProfile()
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }))
  }

  const validate = (fields) => {
    const newErrors = {}
    if (!fields.first_name) newErrors.first_name = true
    if (!fields.last_name) newErrors.last_name = true
    if (!fields.document_type) newErrors.document_type = true
    if (!fields.document_number) newErrors.document_number = true
    if (!fields.gender) newErrors.gender = true
    if (!fields.birth_date) newErrors.birth_date = true
    if (!fields.phone_number) newErrors.phone_number = true
    return newErrors
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const fields = Object.fromEntries(new FormData(event.target))
    const newErrors = validate(fields)
    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      const profileForm = {
        first_name: fields.first_name,
        last_name: fields.last_name,
        document_type: fields.document_type,
        document_number: fields.document_number,
        gender: fields.gender,
        birth_date: fields.birth_date,
        phone_country_code: fields.country_code,
        phone_number: fields.phone_number
      }
      console.log('sender:', profileForm)
      const response = await patchProfile(profileForm)
      console.log('response: ', response)
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
              <label htmlFor='first_name' className='block text-sm font-medium leading-6 text-gray-900'>
                First name
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='first_name'
                  id='first_name'
                  autoComplete='given-name'
                  value={formValues.first_name}
                  onChange={handleChange}
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${errors.first_name ? 'ring-red-500' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label htmlFor='last_name' className='block text-sm font-medium leading-6 text-gray-900'>
                Last name
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='last_name'
                  id='last_name'
                  autoComplete='family-name'
                  value={formValues.last_name}
                  onChange={handleChange}
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${errors.last_name ? 'ring-red-500' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label htmlFor='document_type' className='block text-sm font-medium leading-6 text-gray-900'>
                Document Type
              </label>
              <div className='mt-2'>
                <select
                  id='document_type'
                  name='document_type'
                  autoComplete='document-type'
                  value={formValues.document_type}
                  onChange={handleChange}
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${errors.document_type ? 'ring-red-500' : 'ring-gray-300'} focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6`}
                >
                  <option value=''>Select</option>
                  <option value='PA'>Pasaporte</option>
                  <option value='DNI'>Documento nacional de identidad</option>
                  <option value='CE'>Carnet de extranjería</option>
                </select>
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label htmlFor='document_number' className='block text-sm font-medium leading-6 text-gray-900'>
                Document Number
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='document_number'
                  id='document_number'
                  autoComplete='document-number'
                  value={formValues.document_number}
                  onChange={handleChange}
                  pattern='[0-9]*'
                  inputMode='numeric'
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${errors.document_number ? 'ring-red-500' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
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
                  value={formValues.gender}
                  onChange={handleChange}
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${errors.gender ? 'ring-red-500' : 'ring-gray-300'} focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6`}
                >
                  <option value='M'>Male</option>
                  <option value='F'>Female</option>
                  <option value='O'>Other</option>
                </select>
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label htmlFor='birth_date' className='block text-sm font-medium leading-6 text-gray-900'>
                Birth Date
              </label>
              <div className='mt-2'>
                <input
                  type='date'
                  name='birth_date'
                  id='birth_date'
                  autoComplete='bday'
                  value={formValues.birth_date}
                  onChange={handleChange}
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${errors.birth_date ? 'ring-red-500' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label htmlFor='phone_number' className='block text-sm font-medium leading-6 text-gray-900'>
                Phone Number
              </label>
              <div className='mt-2 grid grid-cols-3 gap-2'>
                <input
                  type='tel'
                  name='country_code'
                  id='country_code'
                  placeholder='+1'
                  value={formValues.phone_country_code}
                  onChange={handleChange}
                  pattern='\+[0-9]*'
                  inputMode='numeric'
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${errors.phone_number ? 'ring-red-500' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                />
                <input
                  type='tel'
                  name='phone_number'
                  id='phone_number'
                  autoComplete='tel'
                  value={formValues.phone_number}
                  onChange={handleChange}
                  className={`col-span-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${errors.phone_number ? 'ring-red-500' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
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
