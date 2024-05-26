export function ForgotPasswordForm () {
  return (

    <div className='p-2'>
      <h3 className='text-base font-semibold leading-6 text-gray-900'>¿Olvidaste tu contraseña?</h3>
      <div className='mt-2 max-w-xl text-sm text-gray-500'>
        <p>Ingresa tu correo y recibirás un mensaje con el enlace de recuperación.</p>
      </div>
      <form className='mt-5 sm:flex sm:items-center'>
        <div className='w-full sm:max-w-xs'>
          <label htmlFor='email' className='sr-only'>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            placeholder='your-mail@example.com'
          />
        </div>
        <button
          type='submit'
          className='mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:mt-0 sm:w-auto'
        >
          Enviar
        </button>
      </form>
    </div>
  )
}
