export function CloseAllSessions ({ setOpen }) {
  return (
    <div className='grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3'>
      <div>
        <h2 className='text-base font-semibold leading-7 text-gray-900'>Session Settings</h2>
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
  )
}
