import { Fragment, useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Transition,
  TransitionChild
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline'
import { useAuthStore } from '../../../store/useAuthStore'
import { Link } from 'react-router-dom'
import { authUrls } from '../../Auth/routes/authUrls'
import { homeUrls } from '../routes/homeUrls'
import { accountUrls } from '../../Account/routes/accountUrls'

const navigation = {
  categories: [
    {
      name: 'Yu-Gi-Oh!',
      featured: [
        {
          name: 'New Arrivals',
          to: homeUrls.yugioh,
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.'
        },
        {
          name: 'Basic Tees',
          to: homeUrls.yugioh,
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.'
        },
        {
          name: 'Accessories',
          to: homeUrls.yugioh,
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg',
          imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.'
        },
        {
          name: 'Carry',
          to: homeUrls.yugioh,
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg',
          imageAlt: 'Model opening tan leather long wallet with credit card pockets and cash pouch.'
        }
      ]
    },
    {
      name: 'Pokemon',
      featured: [
        {
          name: 'New Arrivals',
          to: homeUrls.pokemon,
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
          imageAlt: 'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.'
        },
        {
          name: 'Basic Tees',
          to: homeUrls.pokemon,
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg',
          imageAlt: 'Model wearing light heather gray t-shirt.'
        },
        {
          name: 'Accessories',
          to: homeUrls.pokemon,
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg',
          imageAlt:
            'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.'
        },
        {
          name: 'Carry',
          to: homeUrls.pokemon,
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg',
          imageAlt: 'Model putting folded cash into slim card holder olive leather wallet with hand stitching.'
        }
      ]
    },
    {
      name: 'Juegos de mesa',
      featured: [
        {
          name: 'Basic Tees',
          to: homeUrls.boardGames,
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg',
          imageAlt: 'Model wearing light heather gray t-shirt.'
        },
        {
          name: 'Accessories',
          to: homeUrls.boardGames,
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg',
          imageAlt:
            'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.'
        },
        {
          name: 'Carry',
          to: homeUrls.boardGames,
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg',
          imageAlt: 'Model putting folded cash into slim card holder olive leather wallet with hand stitching.'
        },
        {
          name: 'New Arrivals',
          to: homeUrls.boardGames,
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
          imageAlt: 'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.'
        }
      ]
    }
  ],
  pages: [
    { name: 'Marketplace', to: homeUrls.marketplace }
  ]
}

function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

export function HeaderSecondadry () {
  const [open, setOpen] = useState(false)
  const profile = useAuthStore((store) => store.profile)
  const isAuth = useAuthStore((store) => store.isAuth)
  const cleanStore = useAuthStore((store) => store.cleanStore)

  console.log('profile', profile)
  console.log('isAuth', isAuth)

  const handleLogout = () => {
    console.log('Logging out...')
    cleanStore()
    setOpen(false)
  }

  return (
    <div className='bg-white'>
      {/* Mobile menu */}
      <Transition show={open}>
        <Dialog className='relative z-40 lg:hidden' onClose={setOpen}>
          <TransitionChild
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </TransitionChild>

          <div className='fixed inset-0 z-40 flex'>
            <TransitionChild
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <DialogPanel className='relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl'>
                <div className='flex justify-between px-4 pb-2 pt-5'>
                  <button
                    type='button'
                    className='-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400'
                    onClick={() => setOpen(false)}
                  >
                    <span className='sr-only'>Close menu</span>
                    <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                  </button>
                </div>

                {/* Links */}
                <TabGroup className='mt-2'>
                  <div className='border-b border-gray-200'>
                    <TabList className='-mb-px flex space-x-8 px-4'>
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
                              'flex-1 border-b-2 px-1 py-4 text-base font-medium'
                            )}
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </TabList>
                  </div>
                  <TabPanels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <TabPanel key={category.name} className='space-y-12 px-4 py-6'>
                        <div className='grid grid-cols-2 gap-x-4 gap-y-10'>
                          {category.featured.map((item) => (
                            <div key={item.name} className='group relative'>
                              <div className='aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75'>
                                <img src={item.imageSrc} alt={item.imageAlt} className='object-cover object-center' />
                              </div>
                              <Link
                                to={item.to}
                                className='mt-6 block text-sm font-medium text-gray-900'
                                onClick={() => setOpen(false)}
                              >
                                <span className='absolute inset-0 z-10' aria-hidden='true' />
                                {item.name}
                              </Link>
                              <p aria-hidden='true' className='mt-1 text-sm text-gray-500'>
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                      </TabPanel>
                    ))}
                  </TabPanels>
                </TabGroup>

                <div className='space-y-6 border-t border-gray-200 px-4 py-6'>
                  {navigation.pages.map((page) => (
                    <div key={page.name} className='flow-root'>
                      <Link
                        to={page.to}
                        className='-m-2 block p-2 font-medium text-gray-900'
                        onClick={() => setOpen(false)}
                      >
                        {page.name}
                      </Link>
                    </div>
                  ))}
                </div>

                <div className='space-y-6 border-t border-gray-200 px-4 py-6'>
                  <div className='flow-root'>
                    <Link
                      to={isAuth ? accountUrls.dashboard : authUrls.login}
                      className='-m-2 block p-2 font-medium text-gray-900'
                    >
                      {isAuth ? 'View account' : 'Login / Register'}
                    </Link>
                  </div>
                  {
                    isAuth
                      ? (
                        <div className='flow-root'>
                          <p
                            onClick={handleLogout}
                            className='-m-2 block p-2 font-medium text-gray-900 hover:cursor-pointer'
                          >
                            Sign out
                          </p>
                        </div>
                        )
                      : null
                  }
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>

      <header className='relative'>
        <nav aria-label='Top'>
          {/* Secondary navigation */}
          <div className='bg-white'>
            <div className='mx-auto max-w-7xl px-2 sm:px-4 lg:px-6'>
              <div className='border-b border-gray-200'>dasdsadsaz
                <div className='flex h-16 items-center justify-center'>
                  <div className='hidden h-full lg:flex'>
                    {/* Flyout menus */}
                    <PopoverGroup className='inset-x-0 bottom-0 px-4'>
                      <div className='flex h-full justify-center space-x-8'>
                        {navigation.categories.map((category) => (
                          <Popover key={category.name} className='flex'>
                            {({ open, close }) => (
                              <>
                                <div className='relative flex'>
                                  <PopoverButton
                                    className={classNames(
                                      open ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-700 hover:text-gray-800',
                                      'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out focus:outline-none'
                                    )}
                                  >
                                    {category.name}
                                    <ChevronDownIcon className='m-2 h-4' aria-hidden='true' />
                                  </PopoverButton>
                                </div>

                                <Transition
                                  enter='transition ease-out duration-200'
                                  enterFrom='opacity-0'
                                  enterTo='opacity-100'
                                  leave='transition ease-in duration-150'
                                  leaveFrom='opacity-100'
                                  leaveTo='opacity-0'
                                >
                                  <PopoverPanel className='absolute inset-x-0 top-full text-sm text-gray-500'>
                                    {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                    <div className='absolute inset-0 top-1/2 bg-white shadow' aria-hidden='true' />

                                    <div className='relative bg-white'>
                                      <div className='mx-auto max-w-7xl px-8'>
                                        <div className='grid grid-cols-4 gap-x-8 gap-y-10 py-16'>
                                          {category.featured.map((item) => (
                                            <div key={item.name} className='group relative'>
                                              <div className='aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75'>
                                                <img
                                                  src={item.imageSrc}
                                                  alt={item.imageAlt}
                                                  className='object-cover object-center'
                                                />
                                              </div>
                                              <Link
                                                onClick={() => close()}
                                                to={item.to} className='mt-4 block font-medium text-gray-900'
                                              >
                                                <span className='absolute inset-0 z-10' aria-hidden='true' />
                                                {item.name}
                                              </Link>
                                              <p aria-hidden='true' className='mt-1'>
                                                Shop now -&gt;
                                              </p>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </PopoverPanel>
                                </Transition>
                              </>
                            )}
                          </Popover>
                        ))}

                        {navigation.pages.map((page) => (
                          <Link
                            key={page.name}
                            to={page.to}
                            className='flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 hover:cursor-pointer'
                          >
                            {page.name}
                          </Link>
                        ))}
                      </div>
                    </PopoverGroup>
                  </div>

                  {/* Mobile menu and search (lg-) */}
                  <div className='flex flex-1 items-center lg:hidden'>
                    <button
                      type='button'
                      className='-ml-2 rounded-md bg-white p-2 text-gray-400'
                      onClick={() => setOpen(true)}
                    >
                      <div className='flex items-center justify-center'>
                        <span className='sr-only'>Open menu</span>
                        <Bars3Icon className='h-6 w-6' aria-hidden='true' />
                        <span className='p-1 text-gray-400 hover:text-gray-500'>Menu</span>
                      </div>
                    </button>

                    {/* Search */}
                    <div className='flex-1 ml-8 sm:ml-32'>
                      <div className='relative'>
                        <MagnifyingGlassIcon className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400' />
                        <input
                          type='text'
                          placeholder='Search products'
                          className='md:py-1 lg:py-2 xl:py-2.5 w-full pl-10 pr-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-500 placeholder-gray-300'
                        />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
