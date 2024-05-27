import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore'
import { useAuthAPI } from '../features/Auth/hooks/useAuthAPI'
import { TestHeader } from './TestHeader'

export function HomeLayout ({ children }) {
  const cleanStore = useAuthStore((store) => store.cleanStore)
  const isAuth = useAuthStore((store) => store.isAuth)
  const { authMe } = useAuthAPI()

  const handleLogout = () => {
    console.log('Logging out...')
    cleanStore()
  }

  const handleGetProfile = async () => {
    console.log('Getting profile...')
    const response = await authMe()
    console.log('Profile:', response)
  }

  return (
    <>
      <div className='flex flex-row gap-14'>
        <h1>Home Layout</h1>
        {
          isAuth
            ? <button onClick={handleGetProfile}> Get Profile</button>
            : <Link to='/auth/login'> <h1 className='text-green-400'>Login</h1> </Link>
        }
        <h1 onClick={handleLogout} className='text-red-400 cursor-pointer'>Logout</h1>
      </div>
      <hr className='border' />
      <TestHeader />
      <div>
        {children}
      </div>
    </>
  )
}
