import Link from 'next/link';
import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex items-center flex-wrap py-3 bg-palette-blue-dark'>
        <Link href='/'>
          <a className='inline-flex items-center py-2 mr-4 '>
            <span className='text-xl tracking-wide'>
              Eddie Zhuang
            </span>
          </a>
        </Link>
        <button
          className='inline-flex md:hidden ml-auto p-3'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>

        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full md:inline-flex md:flex-grow md:w-auto`}
        >
          <div className='md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center items-start flex flex-col md:h-auto'>
            <Link href='/'>
              <a className='md:inline-flex md:w-auto w-full pl-6 py-2 items-center justify-center'>
                Home
              </a>
            </Link>
            <Link href='/projects'>
              <a className='md:inline-flex md:w-auto w-full pl-6 py-2 items-center justify-center'>
                Projects
              </a>
            </Link>
            <Link href='/experience'>
              <a className='md:inline-flex md:w-auto w-full pl-6 py-2 items-center justify-center'>
                Experience
              </a>
            </Link>
            <Link href='/'>
              <a className='md:inline-flex md:w-auto w-full pl-6 py-2 items-center justify-center'>
                Posts
              </a>
            </Link>
            <Link href='/'>
              <a className='md:inline-flex md:w-auto w-full pl-6 py-2 items-center justify-center'>
                Contact
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};