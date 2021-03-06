import React, { useState } from 'react';
import { Transition } from "@headlessui/react";
import { Link, NavLink} from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import logo from '../../Images/logo.png'
const Header = () => {
  const [user,] = useAuthState(auth);
  console.log(user)
  const logout = () => {
    signOut(auth);
  };
  const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center w-full">
                <div className="flex-shrink-0">
                  <Link to='/'>
                  <img
                    className="h-8 w-8"
                    src={logo}
                    alt="Men's Perfume"
                  />
                  </Link>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <NavLink
                      // className={({isActive})=>isActive?"active-link":"link"}
                      to='/'
                      className={({isActive})=>isActive?" hover:bg-gray-700  px-1 py-2 hover:rounded-md text-sm font-bold text-blue-700":"text-gray-300 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-sm font-medium"}
                    >
                      Home
                    </NavLink>
                    {user&& <> <NavLink
                      to='/managesitem'
                      className={({isActive})=>isActive?" hover:bg-gray-700  px-1 py-2 hover:rounded-md text-sm font-bold text-blue-700":"text-gray-300 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-sm font-medium"}
                    >
                      Manages Item
                    </NavLink>
                    <NavLink
                      to='/myitem'
                      className={({isActive})=>isActive?" hover:bg-gray-700  px-1 py-2 hover:rounded-md text-sm font-bold text-blue-700":"text-gray-300 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-sm font-medium"}
                    >
                      My Item
                      </NavLink>
                      <NavLink
                      to='/addItem'
                      className={({isActive})=>isActive?" hover:bg-gray-700  px-1 py-2 hover:rounded-md text-sm font-bold text-blue-700":"text-gray-300 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-sm font-medium"}
                    >
                      Add Item
                    </NavLink>
                    </>
                    }
                     <NavLink
                      to='/blog'
                      className={({isActive})=>isActive?" hover:bg-gray-700  px-1 py-2 hover:rounded-md text-sm font-bold text-blue-700":"text-gray-300 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-sm font-medium"}
                    >
                      Blog
                    </NavLink>
                  </div>
                </div>
                <div className='d-block ml-auto'>
                  {
                    user ?<div className='flex'> <Link
                      to='/login'
                     onClick={logout}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md text-sm font-medium cursor-pointer"
                  >
                    logout
                    </Link >
                      <p className="text-blue-700 uppercase hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md text-sm font-medium cursor-pointer">{user?.displayName}</p>
                    </div> : <Link
                    to='/login'
                    className="text-gray-300 mr-2 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-sm font-medium"
                  >
                    login
                  </Link>
                }
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
              
            </div>
          </div>
  
          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="md:hidden" id="mobile-menu">
                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-1">
                  <NavLink
                   to='/'
                   className={({isActive})=>isActive?" hover:bg-gray-700  px-1 py-2 hover:rounded-md text-sm font-bold text-blue-700":"text-gray-300 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-sm font-medium"}
                  >
                    Home
                  </NavLink>
  
                  {user&& <div> <NavLink
                      to='/managesitem'
                      className={({isActive})=>isActive?" hover:bg-gray-700  px-1 py-2 hover:rounded-md text-sm font-bold text-blue-700 block":"text-gray-300 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-sm font-medium block"}
                    >
                      Manages Item
                    </NavLink>
                    <NavLink
                      to='/myitem'
                      className={({isActive})=>isActive?" hover:bg-gray-700  px-1 py-2 hover:rounded-md text-sm font-bold text-blue-700 block":"text-gray-300 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-sm font-medium block"}
                    >
                      My Item
                      </NavLink>
                      <NavLink
                      to='/addItem'
                      className={({isActive})=>isActive?" hover:bg-gray-700  px-1 py-2 hover:rounded-md text-sm font-bold text-blue-700 block":"text-gray-300 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-sm font-medium block"}
                    >
                      Add Item
                    </NavLink>
                    </div>
                  }
                  <NavLink
                    to='/blog'
                    className={({isActive})=>isActive?" hover:bg-gray-700  px-1 py-2 hover:rounded-md text-sm font-bold text-blue-700 block":"text-gray-300 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-sm font-medium block"}
                  >
                   Blog
                  </NavLink>
                 
                </div>
              </div>
            )}
          </Transition>
        </nav>     
      </div>
    )

};

export default Header;