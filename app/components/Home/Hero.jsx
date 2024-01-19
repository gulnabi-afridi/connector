'use client';
import { PrimaryButton } from '@/app/shared/Button';
import Typography from '@/app/shared/Typography';
import Wrapper from '@/app/shared/Wrapper';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';

const Hero = () => {
  const router = useRouter();
  return (
    <section className='mt-[30px] custom-md:mt-[60px] mb-[40px] relative'>
      <Wrapper styles='px-0 sm:px-8 custom-md:px-14  image-glow '>
        {/*   BG IMAGE  ===========> */}

        <div className='hero-bg -z-[10] w-[200px] h-[200px] sm:w-[340px] sm:h-[340px] custom-xl:w-[455px] custom-xl:h-[455px] custom-xL:max-w-[455px] mt-0 lg:-mt-8  max-w-[480px] -top-[60px] sm:-top-[104px]'>
          <Image
            src={'/home/hero-bg.png'}
            alt='hero-bg'
            fill
            sizes='100%'
            priority
            className='w-full object-cover'
          />
        </div>
        <div className='flex flex-col justify-center items-center gap-8'>
          <Typography.H1
            style={{
              marginTop: '15px',
              paddingBottom: '15px',
            }}
          >
            Connecting you to financial tools that you control, anywhere, at
            anytime- it&rsquo;s never been easier.
          </Typography.H1>
          <div className=' flex flex-col gap-6 items-center mt-[20px] '>
            {' '}
            <PrimaryButton
              onClick={() => router.push('/subscribe', { scroll: false })}
              styles={'  custom-md:h-[43px] custom-md:w-[187px]'}
            >
              Get Started
            </PrimaryButton>
            <div className='custom-xl:w-[665px] custom-xl:h-[602px]  w-[323px] h-[330px]   sm:w-[550px] sm:h-[498px]  max-w-full relative '>
              <Image
                src={'/home/hero.png'}
                alt='hero'
                fill
                sizes='100%'
                priority
                className='w-full h-full '
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
