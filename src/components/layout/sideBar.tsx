import React from 'react';
import useAuth from '../../hooks/useAuth';

import { useLocation , Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { ChartBarIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/outline';

interface Props {
  sideBar : boolean,
  setSideBar : React.Dispatch<React.SetStateAction<boolean>>
}

const nav = [
  { 
    name: 'داشبورد', 
    icon: HomeIcon, 
    href: '/dashboard'
  },
  {
    name: 'تامین کنندگان',
    icon: UsersIcon,
    href: '/supply',
    children: [
      { name: 'مدیریت', href: '/supply' }
    ],
  },
  {
    name: 'گزارش',
    icon: ChartBarIcon,
    href: '/report',
    children: [
      { name: 'مدیریت', href: '/report' },
      { name: 'درج', href: '/report/insert' },
      { name: 'گزارش', href: '/report/report' }
    ],
  },
]

const AdminNav = [
  { 
    name: 'داشبورد', 
    icon: HomeIcon, 
    href: '/dashboard'
  },
  {
    name: 'تامین کنندگان',
    icon: UsersIcon,
    href: '/supply',
    children: [
      { name: 'مدیریت', href: '/supply' }
    ],
  },
  {
    name: 'کاربران',
    icon: InboxIcon,
    href: '/user',
    children: [
      { name: 'مدیریت', href: '/user' },
      { name: 'درج', href: '/user/insert' },
      { name: 'گزارش', href: '/user/report' }
    ],
  },
  {
    name: 'گزارش',
    icon: ChartBarIcon,
    href: '/report',
    children: [
      { name: 'مدیریت', href: '/report' },
      { name: 'درج', href: '/report/insert' },
      { name: 'گزارش', href: '/report/report' }
    ],
  },
]

function classNames(...classes : any) {
  return classes.filter(Boolean).join(' ')
}

const SideBar : React.FC<Props> = ({sideBar,setSideBar}) => {

  const { userInfo } = useAuth();
  const location = useLocation();
  const pathName = location.pathname;
  let navigation = userInfo?.is_admin == 1 ? AdminNav : nav; 

  return (
    <div className={`${sideBar ? '' : 'hidden'} fixed w-64 lg:flex h-full`}>
      <div className="h-full flex flex-col w-64 lg:inset-y-0 lg:border-r border-gray-200 pt-5 bg-gray-50 shadow">
        <button className={`${sideBar ? '' : 'hidden'} absolute z-50 -left-8 top-4`} onClick={() => {setSideBar(false)}}>
          <svg className="h-6 w-6 bg-gray-500 rounded-lg text-gray-100  p-1" x-description="Heroicon name: outline/x" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div className="flex items-center justify-center flex-shrink-0 px-4">
          <img
            className="h-16 w-auto"
            src='./img/logo.png'
            alt="hypersaz-loge"
          />
        </div>
        <div className="mt-5 flex-grow flex flex-col">
          <nav className="flex-1 px-2 space-y-1" aria-label="Sidebar">
            {
              navigation.map((item : any) =>
                !item.children ? (
                  <div key={item.name} className='mt-3'>
                    <Link
                      to={item.href}
                      className={classNames(
                        pathName == item.href
                          ? 'bg-gray-200 text-gray-900 ring-1 ring-gray-500'
                          : 'hover:bg-gray-200 text-gray-600 hover:text-gray-900',
                        'group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md'
                      )}
                    >
                      <item.icon
                        className={classNames(
                          pathName == item.href ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                          'mr-3 flex-shrink-0 h-6 w-6'
                        )}
                        aria-hidden="true"
                      />
                      <span className='mr-3'>{item.name}</span>
                    </Link>
                  </div>
                ) : (
                  <Disclosure as="div" key={item.name} className="space-y-1">
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={classNames(
                            pathName.search(item.href) !== -1
                              ? 'bg-gray-200 text-gray-900 ring-1 ring-gray-500'
                              : 'hover:bg-gray-200 text-gray-600 hover:text-gray-900',
                            'group w-full flex items-center pl-2 py-2 text-right text-sm font-medium rounded-md focus:outline-none'
                          )}
                        >
                          <item.icon
                            className="mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                          <span className="flex-1 mr-2">{item.name}</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className={classNames(
                              pathName.search(item.href) !== -1 ? 'text-gray-400 -rotate-90 mr-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150'
                              : open ? 'text-gray-400 -rotate-90' : 'text-gray-300',
                              'mr-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150'
                            )} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                          </svg>
                        </Disclosure.Button>
                        <Disclosure.Panel className="space-y-1" static={pathName.search(item.href) !== -1}>
                          {item.children.map((subItem : any) => (
                            <Disclosure.Button
                              key={subItem.name}
                              as={Link}
                              to={subItem.href}
                              className={classNames(
                                (pathName.search(subItem.href) !== -1 && pathName === subItem.href) ? 'text-gray-800 bg-gray-200' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200',
                                'group w-full flex items-center pr-11 pl-2 py-2 text-sm font-medium rounded-md'
                              )}
                            >
                              {subItem.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                )
              )
            }
          </nav>
        </div>
      </div>
    </div>
  )
}

export default SideBar;