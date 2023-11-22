import { landingStyle } from '@/pages/index';
import Image from 'next/image';
import React from 'react';
import { layoutPaddingStyle } from '../Layout';
import { Line } from './line';

export default function AllTrip() {
  return (
    <div
      className={`relative xl:h-[805px] w-full bg-[#f9f9f9] flex flex-col justify-center items-center ${landingStyle}  ${layoutPaddingStyle}`}
    >
      <Line
        title='여행의 모든 것'
        iconSrc='/icons/line6.svg'
        top={'top-[333px]'}
      />
      <h2 className='text-body2 text-gray01'>고객들이 알고 싶어하는 리뷰</h2>
      <h1 className='mt-4 font-bold text-title mb-12'>
        리뷰관리가 여행상품의 힘이 됩니다
      </h1>
      <div className='w-full flex flex-row justify-between items-start whitespace-pre-line px-16'>
        <Process
          title='여행 전'
          description={`리뷰를 통해\n좋은 상품을 추천하고`}
          iconSrc='/icons/bag.svg'
        />
        <div className='flex justify-center items-center w-[149px] h-[149px]'>
          <Arrow />
        </div>
        <Process
          title='여행 중'
          description={`지속적인 피드백을 통해\n고객과 소통하고`}
          iconSrc='/icons/footprint.svg'
        />
        <div className='flex justify-center items-center w-[149px] h-[149px]'>
          <Arrow />
        </div>
        <Process
          title='여행 후'
          description={`쉽고 즐겁게\n여행의 추억을 남기는`}
          iconSrc='/icons/chat_line.svg'
        />
      </div>
      <div className='mt-20 bg-primary w-full h-[150px] rounded-2xl flex justify-center items-center'>
        <p className='text-subTitle text-white font-mid text-center line leading-9'>
          리뷰메이트는 자발적인 리뷰와 분석을 통해
          <br />
          여행자들에게 즐거운 추억을 드리는 선 순환구조를 만들어갑니다
        </p>
      </div>
    </div>
  );
}

interface ProcessProps {
  title: string;
  description: string;
  iconSrc: string;
}

const Process = ({ title, description, iconSrc }: ProcessProps) => {
  return (
    <div className='flex flex-col items-center justify-center gap-5'>
      <div className='flex flex-col items-center justify-center w-[149px] h-[149px] rounded-full bg-white'>
        <Image
          src={iconSrc}
          alt='가방 아이콘'
          width={40}
          height={40}
          className='mb-3'
        />
        <p className='text-body2 text-primary font-mid'>{title}</p>
      </div>
      <p className='text-subTitle text-center font-mid'>{description}</p>
    </div>
  );
};

const Arrow = () => {
  return (
    <div className='flex justify-center items-center w-[149px] h-[149px]'>
      <Image src={'icons/right_arrow.svg'} alt='->' width={137} height={43} />
    </div>
  );
};
