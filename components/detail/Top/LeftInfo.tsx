import Image from 'next/image';
import React from 'react';

export default function LeftInfo() {
  const nums = [2, 3, 4, 5, 6, 7];
  return (
    <div>
      <div className='grid grid-rows-5 grid-cols-6 gap-1'>
        <Image
          className='w-full row-span-4 col-span-6'
          src={'/hotel1.png'}
          alt='hotel1'
          width={535}
          height={374}
        />

        {nums.map((num) => (
          <Image
            key={num}
            className='w-full round-10 flex flex-1'
            src={`/hotel${num}.png`}
            alt='hotel2'
            width={85}
            height={85}
          />
        ))}
      </div>
    </div>
  );
}
