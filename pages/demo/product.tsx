import Seo from '@/components/Seo';
import Rooms from '@/components/detail/Rooms/Index';
import TopInfo from '@/components/detail/Top/Index';
import { WIDGET_API } from '@/config/api';
import useMessageToChild from '@/hooks/useMessageToChild';
import React, { useEffect } from 'react';

type Props = {};

export default function Product({}: Props) {
  const { iframeRef } = useMessageToChild();

  return (
    <div className='h-full'>
      <Seo title='ReviewMate | Product Demo' />
      <TopInfo />
      <Rooms />
      <iframe
        ref={iframeRef}
        src={`${WIDGET_API}/review/list`}
        height='0'
        width='100%'
        name='review-mate-product-reviews'
        className='w-full'
        scrolling='no'
      />
    </div>
  );
}
