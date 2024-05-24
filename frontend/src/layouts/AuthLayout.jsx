export function AuthLayout ({ children }) {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-200'>
      <div className='flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-lg'>
        {children}
      </div>
    </div>
  )
}
