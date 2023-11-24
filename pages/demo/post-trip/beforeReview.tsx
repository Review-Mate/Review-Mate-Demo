import Seo from '@/components/Seo';
import { BlackButton } from '@/components/global/button/BlackButton';
import WritePageTopInfo from '@/components/write/Top';
import { useRouter } from 'next/router';
import React from 'react';

export default function BeforeReview() {
  const router = useRouter();
  const reservationId = router.query.reservationId;
  const onClick = () => {
    router.push({
      pathname: '/demo/post-trip/reviewWrite',
      query: { reservationId: reservationId },
    });
  };
  return (
    <div>
      <Seo title='ReviewMate | GoReviewWrite' />
      <h1 className='text-title sm:text-heading mt-3 mb-16 font-bold animate-appear4 opacity-0'>
        구매하신 상품의 리뷰를 남겨주세요!
      </h1>
      <div className='animate-appear5 opacity-0'>
        <WritePageTopInfo />
        <BlackButton
          title='리뷰작성'
          onClick={onClick}
          className='btn-primary float-right animate-pulse'
        />
      </div>
    </div>
  );
}
