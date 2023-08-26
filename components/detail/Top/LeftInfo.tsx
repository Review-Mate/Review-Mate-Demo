import Image from 'next/image';
import React from 'react';

export default function LeftInfo() {
  const nums = [2, 3, 4, 5, 6, 7];
  return (
    <div>
      <div className='flex flex-col'>
        <Image
          className='round-10 mb-[2px]'
          src={'/hotel1.png'}
          alt='hotel1'
          width={535}
          height={374}
        />
        <div className='grid grid-cols-6 gap-[2px]'>
          {nums.map((num) => (
            <Image
              key={num}
              className='round-10 flex-1'
              src={`/hotel${num}.png`}
              alt='hotel2'
              width={85}
              height={85}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
