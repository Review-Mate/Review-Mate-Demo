import Seo from '@/components/Seo';
import TopInfo from '@/components/detail/Top/Index';
import Image from 'next/image';
import React from 'react';

type Props = {};

export default function detail({}: Props) {
  const nums = [2, 3, 4, 5, 6, 7];
  return (
    <div className='h-full'>
      <Seo title='ReviewMate | Home' />
      <TopInfo />
      <iframe
        src='https://main.d33vkfpm9flfhs.amplifyapp.com/review/list'
        className='w-full h-full overflow-y-hidden'
      />
    </div>
  );
}
