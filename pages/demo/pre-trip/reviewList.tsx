import Seo from '@/components/Seo';
import Rooms from '@/components/detail/Rooms/Index';
import TopInfo from '@/components/detail/Top/Index';
import { PARTNER_DOMAIN, PRODUCT_ID } from '@/config/constant';
import useChildHeight from '@/hooks/useChildHeight';
import React from 'react';

type Props = {};

export default function Product({}: Props) {
  const { iframeRef } = useChildHeight();

  return (
    <div className='h-full'>
      <Seo title='ReviewMate | Product Demo' />
      <TopInfo />
      <Rooms />
      <iframe
        name='review-mate-list-widget'
        ref={iframeRef}
        src={`${process.env.NEXT_PUBLIC_WIDGET_URL}/review/list?partner_domain=${PARTNER_DOMAIN}&product_id=${PRODUCT_ID}`}
        width='100%'
        scrolling='no'
      />
    </div>
  );
}
