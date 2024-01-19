'use client';
import Image from 'next/image';
import React, { useRef } from 'react';
import Typography from '../shared/Typography';
import { PrimaryButton } from '../shared/Button';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const toggleRef = useRef();
  const router = useRouter();

  //     FOR NAVLIST REF
  const navRef = useRef();

  const toggleHandler = () => {
    toggleRef.current.classList.toggle('is-active');
    navRef.current.classList.toggle('translate-x-[0]');
  };
  return (
    <>
      <header className='  bg-[#202020]   custom-md:h-[105px]'>
        <div className='w-full max-w-[1400px] sm:px-6 py-[15px] sm:py-[20px] mx-auto'>
          <nav className='mx-6 sm:mx-8 custom-md:mx-14 flex justify-between items-center'>
            <div className='flex  gap-2 '>
              <div className='w-[45px] h-[45px] custom-md:w-[64px] custom-md:h-[64px] relative my-auto '>
                <Image
                  src='/mobileLogo.png'
                  alt='logo-mobile'
                  fill
                  priority
                  sizes='100%'
                  className='max-w-full max-h-full'
                />
              </div>
              <div className='w-[181px] h-[20px] relative my-auto hidden custom-md:block'>
                <Image
                  src='/logo.png'
                  alt='logo-text'
                  priority
                  fill
                  sizes='100%'
                  className='w-full h-full '
                />
              </div>
            </div>
            <ul className='hidden custom-md:flex gap-[30px]'>
              <li>
                <Typography.NavLink href={'/'}>Home</Typography.NavLink>
              </li>
              <li>
                <Typography.NavLink href='/feature'>
                  Feature V1
                </Typography.NavLink>
              </li>
              <li>
                <Typography.NavLink href='/subscribe'>
                  Zero Fees Week
                </Typography.NavLink>
              </li>
            </ul>
            <PrimaryButton
              onClick={() => router.push('/subscribe', { scroll: false })}
            >
              Get Started
            </PrimaryButton>
            {/*   HUMBERGER */}
            <div
              className='hamburger custom-md:hidden'
              id='hamburger-1'
              ref={toggleRef}
              onClick={toggleHandler}
            >
              <span className='line'></span>
              <span className='line'></span>
              <span className='line'></span>
            </div>
          </nav>
        </div>
      </header>
      {/*   MOBILE NAVBAR */}
      <nav
        className='custom-md:hidden flex flex-col  h-[50vh] items-center justify-between w-screen bg-[#000000] py-[40px] z-10 translate-x-[-100%] transition duration-400 ease-in-out
         fixed rounded-[10px] nav-shadow
        '
        ref={navRef}
      >
        <Typography.NavLink href={'/'}>Home</Typography.NavLink>
        <Typography.NavLink href={'/feature'}>Feature V1</Typography.NavLink>
        <Typography.NavLink href={'/subscribe'}>
          Zero Fees Week
        </Typography.NavLink>
      </nav>
    </>
  );
};

export default Navbar;
