import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@/public/images/logo.svg';
import user from '@/public/images/user.svg';

export default function NavBar() {
  return (
    <nav className='flex flex-row items-center justify-between mt-5 mb-12'>
      <div className='flex flex-col sm:flex-row sm:items-center'>
        <Link href='/' className='mr-7'>
          <Image src={logo} alt='로고' width={115} height={40} />
        </Link>
        <div className='flex flex-row mt-5 sm:mt-0'>
          <div className='mr-7'>
            <Link href='/demo/product'>리뷰 목록 체험</Link>
          </div>
          <div>
            <Link href='/demo/beforeReview'>리뷰 작성 체험</Link>
          </div>
        </div>
      </div>
      <Link href='/'>
        <Image src={user} alt='마이페이지' width={28} height={28} />
        <div className='sm:hidden w-1 h-[40px]'></div>
      </Link>
    </nav>
  );
}
