import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore'

export function HomeLayout ({ children }) {
  const cleanStore = useAuthStore((store) => store.cleanStore)

  return (
    <>
      <div className='flex flex-row gap-14'>
        <h1>Home Layout</h1>
        <Link to='/login'> <h1 className='text-green-400'>Login</h1> </Link>
        <h1 onClick={cleanStore} className='text-red-400 cursor-pointer'>Logout</h1>
      </div>
      <hr className='border' />
      <div>
        {children}
      </div>
    </>
  )
}
