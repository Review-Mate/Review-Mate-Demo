import Seo from '@/components/Seo';
import WritePageTopInfo from '@/components/write/Top';
import { WIDGET_API } from '@/config/api';
import useMessageToChild from '@/hooks/useMessageToChild';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { reservationIdState } from 'state/reservationState';

type Props = {};

export default function WritePage({}: Props) {
  const { iframeRef } = useMessageToChild();
  const reservationId = useRecoilValue(reservationIdState);

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
