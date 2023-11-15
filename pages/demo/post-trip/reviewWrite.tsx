import Seo from '@/components/Seo';
import { BlackButton } from '@/components/global/button/BasicButton';
import WritePageTopInfo from '@/components/write/Top';
import { PARTNER_DOMAIN } from '@/config/constant';
import useChildHeight from '@/hooks/useChildHeight';
import useChildMessage from '@/hooks/useChildMessage';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export default function WritePage() {
  const { iframeRef } = useChildHeight();
  const { message } = useChildMessage();

  const router = useRouter();
  const reservationId = router.query.reservationId;
  console.log('reservationId', reservationId);

  const [isReservationId, setIsReservationId] = useState(false);

  useEffect(() => {
    if (message === 'success') {
      router.push('/demo/product');
    }
    setIsReservationId(!!reservationId);
  }, [reservationId]);

  const reservationClick = () => {
    router.push({
      pathname: '/demo/reservation',
      query: { destination: '/demo/post-trip/reviewWrite' },
    });
  };

  if (isReservationId)
    return (
      <div className='pb-10'>
        <Seo title='ReviewMate | Write Demo' />
        <h1 className='text-title font-bold mb-10'>리뷰 작성</h1>
        <WritePageTopInfo />
        <iframe
          name='review-mate-write-widget'
          ref={iframeRef}
          src={`${process.env.NEXT_PUBLIC_WIDGET_URL}/review/write?partner_domain=${PARTNER_DOMAIN}&reservation_id=${reservationId}`}
          width='100%'
        />
      </div>
    );
  return (
    <div className='flex flex-col items-center'>
      <div className='text-body1 mb-5'>
        예약 아이디가 없습니다. 예약을 다시 시도해주세요.
      </div>
      <BlackButton title='예약하기' onClick={reservationClick} />
    </div>
  );
}
