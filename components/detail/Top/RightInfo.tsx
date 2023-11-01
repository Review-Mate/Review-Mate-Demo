import Image from 'next/image';
import React from 'react';
import map from '/public/images/map.svg';
import checkin from '/public/images/checkin.svg';
import { hotelInfo } from '@/data/detail/hotelData';

interface Tag {
  category: string;
  count: number;
}

interface Props {
  positiveTags: Tag[];
  negativeTags: Tag[];
}

export default function RightInfo({ positiveTags, negativeTags }: Props) {
  return (
    <div>
      <div className='flex flex-col justify-end h-full'>
        <div className='flex items-center text-body2 font-bold mb-2.5'>
          <Image src={map} alt='위치' className='m-1' />
          위치
        </div>
        <div className='flex mb-7'>
          <div className='w-[5%] m-1' />
          {hotelInfo.address}
        </div>
        <div className='flex items-center text-body2 font-bold mb-2.5'>
          <Image src={checkin} alt='체크인/체크아웃' className='m-1' />
          체크인/체크아웃
        </div>
        <ul className='list-disc list-inside mb-7'>
          <li className='ml-[28px]'>체크인 : {hotelInfo.checkin}</li>
          <li className='ml-[28px]'>체크아웃 : {hotelInfo.checkout}</li>
        </ul>
        <div>
          <TagBox tags={positiveTags} color='blue' title='긍정 태그' />
          <TagBox tags={negativeTags} color='red' title='부정 태그' />
        </div>
      </div>
    </div>
  );
}

interface TagBoxProps {
  tags: Tag[];
  color: string;
  title: string;
}

const TagBox = ({ tags, color, title }: TagBoxProps) => {
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
        {tags.length === 0 && (
          <div className='text-caption text-gray01'>
            리뷰가 아직 충분하지 않습니다 😵
          </div>
        )}
        {tags.map((tag, index) => (
          <div
            key={index}
            className={`${
              color === 'blue' ? 'border-blue text-blue' : 'border-red text-red'
            } border py-1 px-2.5 bg-white rounded text-body3 font-mid`}
          >
            {tag.category}
          </div>
        ))}
      </div>
    </div>
  );
};
