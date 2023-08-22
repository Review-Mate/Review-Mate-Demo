import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {};

export default function NavBar({}: Props) {
  return (
    <div className='h-[70px] flex justify-center'>
      <nav className='w-3/5 flex items-center justify-between'>
        <Link href='/'>
          <Image src='/logo.svg' alt='로고' width={115} height={40} />
        </Link>
        <div className='w-2/4 flex gap-16'>
          <Link href='/detail'>숙박</Link>
          <Link href='/detail'>랜터카</Link>
          <Link href='/detail'>식당</Link>
        </div>
        <Link href='/mypage'>
          <Image src='/user.svg' alt='마이페이지' width={28} height={28} />
        </Link>
      </nav>
    </div>
  );
}
