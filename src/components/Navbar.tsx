import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Github } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { Disclosure } from '@headlessui/react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Features', href: '/features' },
  { name: 'Demo', href: '/demo' },
  { name: 'Documentation', href: '/docs' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white dark:bg-gray-800 shadow-sm">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <NavLink to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
                    DeepFake Detect
                  </NavLink>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className={({ isActive }) =>
                        `inline-flex items-center px-1 pt-1 text-sm font-medium
                        ${isActive 
                          ? 'border-b-2 border-blue-500 text-gray-900 dark:text-white' 
                          : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
                <a
                  href="https://github.com/aaronchong888/DeepFake-Detect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  <Github className="h-6 w-6" />
                </a>
                <ThemeToggle />
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
                  {open ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={NavLink}
                  to={item.href}
                  className={({ isActive }) =>
                    `block pl-3 pr-4 py-2 text-base font-medium
                    ${isActive
                      ? 'bg-blue-50 dark:bg-blue-900/50 border-l-4 border-blue-500 text-blue-700 dark:text-blue-400'
                      : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'}`
                  }
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center px-4 space-x-4">
                <a
                  href="https://github.com/KaranSingh36752/DeepFake_Detection"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  <Github className="h-6 w-6" />
                </a>
                <ThemeToggle />
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}