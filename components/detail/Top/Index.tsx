import Image from 'next/image';
import React from 'react';
import LeftInfo from './LeftInfo';
import RightInfo from './RightInfo';
import star from '@/public/images/star.png';
import heart from '@/public/images/heart.svg';
import { hotelInfo } from '@/data/detail/hotelData';
import { formatNumberWithCommas } from 'utils/globalUtils';

export default function TopInfo() {
  return (
    <div>
      <h1 className='text-title font-bold mb-1'>{hotelInfo.name}</h1>
      <div className={'flex flex-row items-center mb-5'}>
        <Image
          className='mr-[5px]'
          src={star}
          alt='rating'
          width={15}
          height={15}
        />
        <div className='mr-[10px] font-bold'>5.0</div>
        <div className='text-gray02'>{hotelInfo.grade}</div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>
        <LeftInfo />
        <RightInfo />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div />
        <div className='flex flex-row justify-between'>
          <div className='flex'>
            <div className='flex justify-center items-center mr-2.5 w-[50px] h-[50px] bg-gray07 rounded'>
              <Image src={heart} alt='찜하기' width={24} />
            </div>
            <div className='flex justify-center items-center mr-2.5 w-[143px] h-[50px] bg-black text-white rounded'>
              객실선택
            </div>
          </div>
          <div className='flex'>
            <div className='text-num1 font-bold mr-1'>
              {formatNumberWithCommas(hotelInfo.price)}
            </div>
            <div className='text-num1 font-bold'>원 ~</div>
          </div>
        </div>
      </div>
    </div>
  );
}
