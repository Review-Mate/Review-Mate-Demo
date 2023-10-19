import Seo from '@/components/Seo';
import WritePageTopInfo from '@/components/write/Top';
import { PARTNER_DOMAIN } from '@/config/constant';
import useChildHeight from '@/hooks/useChildHeight';
import useChildMessage from '@/hooks/useChildMessage';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export default function WritePage() {
  const { iframeRef } = useChildHeight();
  const { message } = useChildMessage();

  const router = useRouter();
  const reservationId = router.query.reservationId;

  useEffect(() => {
    if (message === 'success') {
      router.push('/demo/product');
    }
  }, [message, router]);

  return (
    <div className='pb-10'>
      <Seo title='ReviewMate | Write Demo' />
      <h1 className='text-title font-bold mb-10'>리뷰 작성</h1>
      <WritePageTopInfo />
      <iframe
        ref={iframeRef}
        src={`${process.env.NEXT_PUBLIC_WIDGET_URL}/review/write?partner_domain=${PARTNER_DOMAIN}&reservation_id=${reservationId}`}
        className='w-full'
      />
    </div>
  );
}
