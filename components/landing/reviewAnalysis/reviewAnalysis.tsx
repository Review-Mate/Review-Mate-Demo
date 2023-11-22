import Image from 'next/image';
import React from 'react';
import Middle from './middle';
import { landingStyle } from '@/pages/index';
import { Line } from '../line';
import { layoutWidth } from '@/components/Layout';
import { flexCol } from '@/styles/styleUtils';

export default function ReviewAnalysis() {
  return (
    <div
      className={`relative xl:h-[840px] w-full ${landingStyle} bg-[#F9F9F9]`}
    >
      <Line
        title='완벽한 리뷰분석'
        iconSrc='/icons/line2.svg'
        top={'top-[355px]'}
      />
      <div className={`${layoutWidth}  ${flexCol}`}>
        <h1 className='text-title font-bold mb-4'>
          고객의 의사결정은 완벽한 분석에서 시작됩니다
        </h1>
        <h2 className='text-body2 text-gray01 mb-16 text-center'>
          리뷰메이트는 여행상품에 대한 리뷰를 분석합니다.
        </h2>
        <Middle />

        <div className='relative mt-20'>
          <Image
            src='/images/analysis_mouse_with_hand.png'
            alt='마우스'
            className='relative drop-shadow-lg'
            width={1140}
            height={200}
          />
          <div className='absolute -top-1 left-0 h-full flex flex-col justify-center ml-10'>
            <p className='text-subTitle font-bold mb-2'>고객 의사결정의 시작</p>
            <p className='text-gray01'>
              리뷰 관련 분석된 키워드를 바탕으로
              <br />
              사용자들의 리뷰를 통해 빠른 판단을 유도하고
              <br />
              상품에 대한 확신을 올려줍니다
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
