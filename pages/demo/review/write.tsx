import Seo from '@/components/Seo';
import WritePageTopInfo from '@/components/write/Top';
import { WIDGET_API } from '@/config/api';
import useMessageToChild from '@/hooks/useMessageToChild';
import { useRouter } from 'next/router';
import React from 'react';

export default function WritePage() {
  const { iframeRef } = useMessageToChild();
  const router = useRouter();
  const reservationId = router.query.reservationId;
  console.log('reservationId', reservationId);

  return (
    <div>
      <Seo title='ReviewMate | 리뷰작성' />
      <h1 className='text-title font-bold mb-10'>리뷰 작성</h1>
      <WritePageTopInfo />
      <iframe
        ref={iframeRef}
        src={`${WIDGET_API}/review/write?reservation_id=${reservationId}`}
        className='w-full'
      />
    </div>
  );
}
