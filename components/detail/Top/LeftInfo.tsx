import Image from 'next/image';
import React from 'react';
import hotel1 from '/public/images/hotel1.png';
import hotel2 from '/public/images/hotel2.png';
import hotel3 from '/public/images/hotel3.png';
import hotel4 from '/public/images/hotel4.png';
import hotel5 from '/public/images/hotel5.png';
import hotel6 from '/public/images/hotel6.png';
import hotel7 from '/public/images/hotel7.png';

export default function LeftInfo() {
  const hotelImgs = [hotel2, hotel3, hotel4, hotel5, hotel6, hotel7];
  return (
    <div>
      <div className='grid grid-rows-5 grid-cols-6 gap-1'>
        <Image
          className='w-full row-span-4 col-span-6'
          src={hotel1}
          alt='hotel1'
          placeholder='blur'
          width={535}
          height={374}
        />

        {hotelImgs.map((hotel, index) => (
          <Image
            key={index}
            className='w-full round-10 flex flex-1'
            src={hotel}
            alt='hotel2'
            placeholder='blur'
            width={85}
            height={85}
          />
        ))}
      </div>
    </div>
  );
}
