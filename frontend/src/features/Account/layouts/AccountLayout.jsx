import { useState } from 'react'
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  FolderIcon,
  HomeIcon,
  LockClosedIcon,
  UsersIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom'
import { accountUrls } from '../../../routes/urls/accountUrls'
import { homeUrls } from '../../../routes/urls/homeUrls'

function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

export function AccountLayout ({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Dashboard', to: accountUrls.dashboard, icon: HomeIcon, current: location.pathname === accountUrls.dashboard },
    { name: 'Profile', to: accountUrls.profile, icon: UsersIcon, current: location.pathname === accountUrls.profile },
    { name: 'Security', to: accountUrls.security, icon: LockClosedIcon, current: location.pathname === accountUrls.security },
    { name: 'Directions', to: accountUrls.directions, icon: FolderIcon, current: location.pathname === accountUrls.directions },
    { name: 'Ventas', to: accountUrls.selling, icon: CalendarIcon, current: location.pathname === accountUrls.selling },
    { name: 'Compras', to: accountUrls.shopping, icon: ChartPieIcon, current: location.pathname === accountUrls.shopping }
  ]
  const links = [
    { id: 1, name: 'Go Home', to: homeUrls.home, initial: 'H', current: false },
    { id: 2, name: 'Go Marketplace', to: homeUrls.marketplace, initial: 'M', current: false }
  ]

  return (
    <>
      <div className='h-screen'>
        <Transition show={sidebarOpen}>
          <Dialog className='relative z-50 lg:hidden' onClose={setSidebarOpen}>
            <TransitionChild
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-gray-900/80' />
            </TransitionChild>

            <div className='fixed inset-0 flex'>
              <TransitionChild
                enter='transition ease-in-out duration-300 transform'
                enterFrom='-translate-x-full'
                enterTo='translate-x-0'
                leave='transition ease-in-out duration-300 transform'
                leaveFrom='translate-x-0'
                leaveTo='-translate-x-full'
              >
                <DialogPanel className='relative mr-16 flex w-full max-w-xs flex-1'>
                  <TransitionChild
                    enter='ease-in-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-300'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <div className='absolute left-full top-0 flex w-16 justify-center pt-5'>
                      <button type='button' className='-m-2.5 p-2.5' onClick={() => setSidebarOpen(false)}>
                        <span className='sr-only'>Close sidebar</span>
                        <XMarkIcon className='h-6 w-6 text-white' aria-hidden='true' />
                      </button>
                    </div>
                  </TransitionChild>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10'>
                    <div className='flex h-16 shrink-0 items-center'>
                      <Link
                        to={homeUrls.home}
                      >
                        <img
                          className='h-8 w-auto'
                          src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
                          alt='Your Company'
                        />
                      </Link>
                    </div>
                    <nav className='flex flex-1 flex-col'>
                      <ul role='list' className='flex flex-1 flex-col gap-y-7'>
                        <li>
                          <ul role='list' className='-mx-2 space-y-1'>
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <Link
                                  to={item.to}
                                  className={classNames(
                                    item.current
                                      ? 'bg-gray-800 text-white'
                                      : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                  )}
                                >
                                  <item.icon className='h-6 w-6 shrink-0' aria-hidden='true' />
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <div className='text-xs font-semibold leading-6 text-gray-400'>Links</div>
                          <ul role='list' className='-mx-2 mt-2 space-y-1'>
                            {links.map((team) => (
                              <li key={team.name}>
                                <Link
                                  to={team.to}
                                  className={classNames(
                                    team.current
                                      ? 'bg-gray-800 text-white'
                                      : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                  )}
                                >
                                  <span className='flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white'>
                                    {team.initial}
                                  </span>
                                  <span className='truncate'>{team.name}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </Dialog>
        </Transition>

        {/* Static sidebar for desktop */}
        <div className='hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col'>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6'>
            <div className='flex h-16 shrink-0 items-center'>
              <Link
                to={homeUrls.home}
              >
                <img
                  className='h-8 w-auto'
                  src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
                  alt='Your Company'
                />
              </Link>
            </div>
            <nav className='flex flex-1 flex-col'>
              <ul role='list' className='flex flex-1 flex-col gap-y-7'>
                <li>
                  <ul role='list' className='-mx-2 space-y-1'>
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <Link
                          to={item.to}
                          className={classNames(
                            item.current
                              ? 'bg-gray-800 text-white'
                              : 'text-gray-400 hover:text-white hover:bg-gray-800',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                        >
                          <item.icon className='h-6 w-6 shrink-0' aria-hidden='true' />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className='text-xs font-semibold leading-6 text-gray-400'>Links</div>
                  <ul role='list' className='-mx-2 mt-2 space-y-1'>
                    {links.map((team) => (
                      <li key={team.name}>
                        <Link
                          to={team.to}
                          className={classNames(
                            team.current
                              ? 'bg-gray-800 text-white'
                              : 'text-gray-400 hover:text-white hover:bg-gray-800',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                        >
                          <span className='flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white'>
                            {team.initial}
                          </span>
                          <span className='truncate'>{team.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className='-mx-6 mt-auto'>
                  <a
                    href='#'
                    className='flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800'
                  >
                    <img
                      className='h-8 w-8 rounded-full bg-gray-800'
                      src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                      alt=''
                    />
                    <span className='sr-only'>Your profile</span>
                    <span aria-hidden='true'>Tom Cook</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className='sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden'>
          <button type='button' className='-m-2.5 p-2.5 text-gray-400 lg:hidden' onClick={() => setSidebarOpen(true)}>
            <span className='sr-only'>Open sidebar</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
          <div className='flex-1 text-sm font-semibold leading-6 text-white'>Dashboard</div>
          <a href='#'>
            <span className='sr-only'>Your profile</span>
            <img
              className='h-8 w-8 rounded-full bg-gray-800'
              src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              alt=''
            />
          </a>
        </div>

        <main className='py-10 lg:pl-72'>
          <div className='px-4 sm:px-6 lg:px-8'>
            {
              children
            }
          </div>
        </main>
      </div>
    </>
  )
}
