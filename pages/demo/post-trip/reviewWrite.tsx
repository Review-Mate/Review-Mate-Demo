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

  useEffect(() => {
    if (message === 'success') {
      router.push('/demo/pre-trip/reviewList');
    }
  }, [reservationId]);

    return (
      <div className='pb-10'>
        <Seo title='ReviewMate | Write Demo' />
        <h1 className='mb-10 font-bold text-title'>리뷰 작성</h1>
        <WritePageTopInfo />
        <iframe
          name='review-mate-write-widget'
          ref={iframeRef}
          src={`${process.env.NEXT_PUBLIC_WIDGET_URL}/review/write?partner_domain=${PARTNER_DOMAIN}&reservation_id=${reservationId}`}
          width='100%'
        />
      </div>
    );
}
