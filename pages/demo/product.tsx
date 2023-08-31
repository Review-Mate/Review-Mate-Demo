import Seo from '@/components/Seo';
import Rooms from '@/components/detail/Rooms/Index';
import TopInfo from '@/components/detail/Top/Index';
import Image from 'next/image';
import React, { useEffect } from 'react';

type Props = {};

export default function Product({}: Props) {
  const iframeRef = React.useRef<HTMLIFrameElement | null>(null);

  React.useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return undefined;

    const listener = (e: MessageEvent) => {
      if (!e.data.type) return;
      if (e.data.type === 'height') {
        console.log('자식으로 부터 온 height', e.data.message);
        iframe.style.height = `${e.data.message}px`;
      }
    };

    window.addEventListener('message', listener);

    if (iframe && iframe.contentWindow) {
      iframe.contentWindow?.postMessage(
        { type: 'loaded', message: 'on loaded!' },
        '*'
      );
    }

    return () => {
      window.removeEventListener('message', listener);
    };
  }, []);

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
