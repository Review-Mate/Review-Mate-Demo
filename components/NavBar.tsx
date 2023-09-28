import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@/public/images/logo.svg';
import user from '@/public/images/user.svg';

type Props = {};

export default function NavBar({}: Props) {
  return (
    <nav className='h-[70px] flex items-center justify-between mb-12'>
      <Link href='/'>
        <Image src={logo} alt='로고' width={115} height={40} />
      </Link>
      <div className='w-3/5 flex gap-16'>
        <div className='w-25'>
          <Link href='/demo/product'>리뷰 목록 체험</Link>
        </div>
        <div className='w-25'>
          <Link href='/demo/beforeReview'>리뷰 작성 체험</Link>
        </div>
      </div>
      <Link href='/'>
        <Image src={user} alt='마이페이지' width={28} height={28} />
      </Link>
    </nav>
  );
}
