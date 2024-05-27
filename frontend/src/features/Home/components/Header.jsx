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
  ChevronDownIcon
} from '@heroicons/react/24/outline'
import { useAuthStore } from '../../../store/useAuthStore'

const navigation = {
  categories: [
    {
      name: 'Yu-Gi-Oh!',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.'
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.'
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg',
          imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.'
        },
        {
          name: 'Carry',
          href: '#',
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
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
          imageAlt: 'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.'
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg',
          imageAlt: 'Model wearing light heather gray t-shirt.'
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg',
          imageAlt:
            'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.'
        },
        {
          name: 'Carry',
          href: '#',
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
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg',
          imageAlt: 'Model wearing light heather gray t-shirt.'
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg',
          imageAlt:
            'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.'
        },
        {
          name: 'Carry',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg',
          imageAlt: 'Model putting folded cash into slim card holder olive leather wallet with hand stitching.'
        },
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
          imageAlt: 'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.'
        }
      ]
    }
  ],
  pages: [
    { name: 'Marketplace', href: '#' }
  ]
}

function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Header () {
  const [open, setOpen] = useState(false)
  const profile = useAuthStore((store) => store.profile)
  const isAuth = useAuthStore((store) => store.isAuth)
  console.log('profile', profile)
  console.log('isAuth', isAuth)

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
                <div className='flex px-4 pb-2 pt-5'>
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
                              <a href={item.href} className='mt-6 block text-sm font-medium text-gray-900'>
                                <span className='absolute inset-0 z-10' aria-hidden='true' />
                                {item.name}
                              </a>
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
                      <a href={page.href} className='-m-2 block p-2 font-medium text-gray-900'>
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className='space-y-6 border-t border-gray-200 px-4 py-6'>
                  <div className='flow-root'>
                    <a href='#' className='-m-2 block p-2 font-medium text-gray-900'>
                      {isAuth ? `Hi ${profile?.first_name}!` : 'Sign in'}
                    </a>
                  </div>
                  <div className='flow-root'>
                    <a href='#' className='-m-2 block p-2 font-medium text-gray-900'>
                      {isAuth ? 'Ver Perfil' : 'Create an account'}
                    </a>
                  </div>
                  {
                    isAuth
                      ? (
                        <div className='flow-root'>
                          <a href='#' className='-m-2 block p-2 font-medium text-gray-900'>
                            Sign out
                          </a>
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
              <div className='border-b border-gray-200'>
                <div className='flex h-16 items-center justify-center'>
                  <div className='hidden h-full lg:flex'>
                    {/* Flyout menus */}
                    <PopoverGroup className='inset-x-0 bottom-0 px-4'>
                      <div className='flex h-full justify-center space-x-8'>
                        {navigation.categories.map((category) => (
                          <Popover key={category.name} className='flex'>
                            {({ open }) => (
                              <>
                                <div className='relative flex'>
                                  <PopoverButton
                                    className={classNames(
                                      open
                                        ? 'border-indigo-600 text-indigo-600'
                                        : 'border-transparent text-gray-700 hover:text-gray-800',
                                      'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
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
                                              <a href={item.href} className='mt-4 block font-medium text-gray-900'>
                                                <span className='absolute inset-0 z-10' aria-hidden='true' />
                                                {item.name}
                                              </a>
                                              <p aria-hidden='true' className='mt-1'>
                                                Shop now
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
                          <a
                            key={page.name}
                            href={page.href}
                            className='flex items-center text-sm font-medium text-gray-700 hover:text-gray-800'
                          >
                            {page.name}
                          </a>
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
                      <span className='sr-only'>Open menu</span>
                      <Bars3Icon className='h-6 w-6' aria-hidden='true' />
                    </button>

                    {/* Search */}
                    <span className='p-1 text-gray-400 hover:text-gray-500'>Menu</span>
                  </div>

                  {/* Logo (lg-) */}
                  <a href='#' className='lg:hidden'>
                    <span className='sr-only'>Your Company</span>
                    <img
                      src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                      alt=''
                      className='h-8 w-auto'
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
