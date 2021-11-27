import Link from 'next/link';
import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import Image from 'next/image'

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex flex-wrap items-center py-2'>
        <Link href='/'>
          <a>
            <Image
              src="/logo.svg"
              width={50}
              height={50}
            />
          </a>
        </Link>

        <button
          className='inline-flex sm:hidden ml-auto'
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
          }   w-full sm:inline-flex sm:flex-grow sm:w-auto`}
        >
          <div className='sm:inline-flex sm:flex-row sm:ml-auto sm:w-auto w-full sm:items-center items-start flex flex-col sm:h-auto'>
            <Link href='/projects'>
              <a className='sm:inline-flex sm:w-auto w-full sm:px-4 py-2 items-center justify-center'>
                Projects
              </a>
            </Link>
            <Link href='/resume'>
              <a className='sm:inline-flex sm:w-auto w-full sm:px-4 py-2 items-center justify-center'>
                Resume
              </a>
            </Link>
            <Link href='/posts'>
              <a className='sm:inline-flex sm:w-auto w-full sm:px-4 py-2 items-center justify-center'>
                Posts
              </a>
            </Link>
            <Link href='/contact'>
              <a className='sm:inline-flex sm:w-auto w-full sm:px-4 py-2 items-center justify-center'>
                Contact
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};