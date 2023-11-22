import { landingStyle } from '@/pages/index';
import React from 'react';
import { useRouter } from 'next/router';
import { GreenButton } from '@/components/global/button/GreenButton';
import { PreTripLeft } from './preTripLeft';
import { PreTripRight } from './preTripRight';
import { layoutPaddingStyle, layoutWidth } from '@/components/Layout';
import { Line } from '../line';
import { flexCol } from '@/styles/styleUtils';

export default function PreTrip() {
  const router = useRouter();

  return (
    <div
      className={`relative xl:h-[980px] w-full ${landingStyle}`}
    >
      <Line title='여행 전' iconSrc='/icons/line3.svg' top={'top-[425px]'} />

      <div className={`${layoutWidth}  ${flexCol}`}>
        <div className='w-full flex flex-row justify-between'>
          <PreTripLeft />
          <PreTripRight />
        </div>

        <GreenButton
          title='리뷰 목록 체험'
          iconSrc={'icons/list.svg'}
          onClick={() => {
            router.push('/demo/pre-trip/reviewList');
          }}
        />
      </div>
    </div>
  );
}
