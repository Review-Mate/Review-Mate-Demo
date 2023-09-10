import { options } from '@/data/detail/roomData';
import Image from 'next/image';
import React from 'react';
import room from '@/public/images/room.png';

type Props = {};

export default function Rooms({}: Props) {
  return (
    <div className='flex flex-col'>
      <div className='text-body1 font-bold mb-6'>객실 종류 8개</div>
      <Room />
      <Room />
      <Room />
      <Room />
    </div>
  );
}

const Room = () => {
  return (
    <React.Fragment>
      <div className='flex flex-row'>
        <Image
          src={room}
          alt='객실'
          placeholder='blur'
          width={250}
          height={180}
          objectFit='contain'
        />
        <div className='flex flex-1 flex-col ml-5'>
          <div className='text-subTitle font-mid mb-2'>스탠다드 더블룸</div>
          <div className='flex justify-between'>
            <div className='flex flex-col items-start'>
              <div className='w-[94px] flex justify-center items-center text-body3 bg-lightBlue/20 text-lightBlue mb-8 rounded'>
                예약 무료 취소
              </div>
              <ul className='grid md:grid-cols-1 md:grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 list-disc list-inside ml-2'>
                {options.map((option, index) => (
                  <li
                    key={index}
                    className='w-[150px] mb-2.5 text-body3 font-mid'
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex flex-col md:flex-row items-center'>
              <div className='flex mr-7'>
                <div className='text-num3 font-bold mr-1'>127,000</div>
                <div className='text-num3 font-mid'>원</div>
              </div>
              <div className='flex flex-col'>
                <div className='flex justify-center items-center w-[143px] h-[50px] mb-1 border border-gray04 rounded font-mid'>
                  장바구니
                </div>
                <div className='flex justify-center items-center w-[143px] h-[50px] border border-gray04 rounded font-mid bg-black text-white'>
                  예약하기
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-[1px] bg-gray06 my-5' />
    </React.Fragment>
  );
};
