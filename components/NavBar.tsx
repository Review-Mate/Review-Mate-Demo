import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {};

export default function NavBar({}: Props) {
  return (
    <nav className='h-[70px] flex items-center justify-between'>
      <Link href='/'>
        <Image src='/logo.svg' alt='로고' width={115} height={40} />
      </Link>
      <div className='w-2/4 flex gap-16'>
        <div className='w-[45px]'>
          <Link href='/detail'>숙박</Link>
        </div>
        <div className='w-[45px]'>
          <Link href='/detail'>랜터카</Link>
        </div>
        <div className='w-[45px]'>
          <Link href='/detail'>식당</Link>
        </div>
      </div>
      <Link href='/mypage'>
        <Image src='/user.svg' alt='마이페이지' width={28} height={28} />
      </Link>
    </nav>
  );
}
