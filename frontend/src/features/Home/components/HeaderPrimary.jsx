import { Link } from 'react-router-dom'
import { MagnifyingGlassIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline'
import { authUrls } from '../../Auth/routes/authUrls'
import { useAuthStore } from '../../../store/useAuthStore'
import { ProfileDropdown } from './ProfileDropdown'
import { homeUrls } from '../routes/homeUrls'

export function HeaderPrimary () {
  const profile = useAuthStore((store) => store.profile)
  const isAuth = useAuthStore((store) => store.isAuth)

  return (
    <div className='bg-white'>
      <header className='relative bg-gray-900'>
        <nav aria-label='Top' className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-10 sm:h-12 lg:h-16 xl:h-20'>
            {/* Logo */}
            <div className='flex items-center'>
              <Link
                to={homeUrls.home}
              >
                <span className='sr-only'>Your Company</span>
                <img
                  className='h-8 w-auto'
                  src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                  alt=''
                />
              </Link>
            </div>

            {/* Search */}
            <div className='flex-1 mx-20 hidden lg:block'>
              <div className='relative'>
                <MagnifyingGlassIcon className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500' />
                <input
                  type='text'
                  placeholder='Search products'
                  className='md:py-1 lg:py-2 xl:py-2.5 w-full pl-10 pr-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500'
                />
              </div>
            </div>

            {/* User and Login */}
            <div className='flex items-center space-x-6'>
              {
                !isAuth
                  ? (
                    <Link
                      to={authUrls.login}
                      className='text-sm font-medium text-white hover:text-gray-100'
                    >
                      <div className='flex gap-2'>
                        <UserIcon className='h-5 w-5 inline-block' aria-hidden='true' />
                        <p>Login/Register</p>
                      </div>
                    </Link>
                    )
                  : (
                    <div className='ml-8'>
                      <ProfileDropdown userName={profile?.first_name} />
                    </div>
                    )
              }
              <div className='relative'>
                <a href='#' className='group -m-2 flex items-center p-2'>
                  <ShoppingCartIcon
                    className='h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
                    aria-hidden='true'
                  />
                  <span className='sr-only'>items in cart, view bag</span>
                </a>
                <span className={`absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold leading-none text-white bg-red-600 rounded-full 
                                  transform translate-x-3 -translate-y-2 md:-translate-y-3`}
                >
                  0
                </span>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
