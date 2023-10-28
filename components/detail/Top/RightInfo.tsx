import Image from 'next/image';
import React from 'react';
import map from '/public/images/map.svg';
import checkin from '/public/images/checkin.svg';

export default function RightInfo() {
  return (
    <div>
      <div className='flex flex-col justify-end h-full'>
        <div className='flex items-center text-body2 font-bold mb-2.5'>
          <Image src={map} alt='위치' className='m-1' />
          위치
        </div>
        <div className='flex mb-7'>
          <div className='w-[5%] m-1' />
          50 Bạch Đằng, Hải Châu 1, Hải Châu, Đà Nẵng
        </div>
        <div className='flex items-center text-body2 font-bold mb-2.5'>
          <Image src={checkin} alt='체크인/체크아웃' className='m-1' />
          체크인/체크아웃
        </div>
        <ul className='list-disc list-inside mb-7'>
          <li className='ml-[28px]'>체크인 : 오후 3:00</li>
          <li className='ml-[28px]'>체크아웃 : 오전 11:00</li>
        </ul>
        <div>
          <TagBox color='blue' title='긍정 태그' />
          <TagBox color='red' title='부정 태그' />
        </div>
      </div>
    </div>
  );
}

interface TagBoxProps {
  color: string;
  title: string;
}

const TagBox = ({ color, title }: TagBoxProps) => {
  const tags = ['청결', '위치', '서비스', '가격', '편의시설', '안전'];

  return (
    <div className='flex flex-col justify-center p-5 mt-1 bg-gray08 rounded-[10px]'>
      <div
        className={`${
          color === 'blue' ? 'text-blue' : 'text-red'
        } mb-2.5 text-body1 font-bold`}
      >
        {title}
      </div>
      <div className='flex flex-wrap gap-1'>
        {tags.map((tag, index) => (
          <div
            key={index}
            className={`${
              color === 'blue' ? 'border-blue text-blue' : 'border-red text-red'
            } border py-1 px-2.5 bg-white rounded text-body3 font-mid`}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};
