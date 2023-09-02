import Seo from '@/components/Seo';
import Rooms from '@/components/detail/Rooms/Index';
import TopInfo from '@/components/detail/Top/Index';
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
        src='http://localhost:3001/review/list'
        height='0'
        width='100%'
        name='review-mate-product-reviews'
        className='w-full'
      />
    </div>
  );
}
