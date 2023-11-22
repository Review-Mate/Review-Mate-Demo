import { landingStyle } from '@/pages/index';
import React from 'react';
import { useRouter } from 'next/router';
import { GreenButton } from '@/components/global/button/GreenButton';
import { PreTripLeft } from './preTripLeft';
import { PreTripRight } from './preTripRight';
import { layoutPaddingStyle } from '@/components/Layout';

export default function PreTrip() {
  const router = useRouter();

  return (
    <div
      className={`w-full flex flex-col items-center ${landingStyle} ${layoutPaddingStyle}`}
    >
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
  );
}
