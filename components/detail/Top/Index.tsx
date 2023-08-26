import Image from 'next/image';
import React from 'react';
import LeftInfo from './LeftInfo';
import RightInfo from './RightInfo';

export default function TopInfo() {
  const nums = [2, 3, 4, 5, 6, 7];
  return (
    <div>
      <h1 className=''>힐튼호텔 다낭</h1>
      <div className={'flex flex-row items-center'}>
        <Image
          className='mr-[5px]'
          src={'/star.png'}
          alt='rating'
          width={15}
          height={15}
        />
        <div className='mr-[10px]'>5.0</div>
        <div className=''>1성급</div>
      </div>
      <div className='grid grid-cols-2 gap-4'>
        <LeftInfo />
        <RightInfo />
      </div>
    </div>
  );
}
