import { Link } from 'react-router-dom'

export function HomeLayout ({ children }) {
  return (
    <>
      <div className='flex flex-row gap-14'>
        <h1>Home Layout</h1>
        <Link to='/login'> <h1 className='text-red-400'>Login</h1> </Link>
      </div>
      <hr className='border' />
      <div>
        {children}
      </div>
    </>
  )
}
