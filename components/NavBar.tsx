import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@/public/images/logo.svg';
import user from '@/public/images/user.svg';
import { signIn } from 'next-auth/react';

export default function NavBar() {
  return (
    <nav className='h-[70px] flex items-center justify-between mb-12'>
      <Link href='/'>
        <Image src={logo} alt='로고' width={115} height={40} />
      </Link>
      <div className='w-3/5 flex'>
        <div className='w-23 md:w-25 mr-[10%]'>
          <Link href='/demo/product'>리뷰 목록 체험</Link>
        </div>
        <div className='w-23 md:w-25'>
          <Link href='/demo/beforeReview'>리뷰 작성 체험</Link>
        </div>
      </div>
      <button onClick={() => signIn()}>로그인</button>
    </nav>
  );
}
