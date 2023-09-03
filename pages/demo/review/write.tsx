import Seo from '@/components/Seo';
import WritePageTopInfo from '@/components/write/Top';
import { WIDGET_API } from '@/config/api';
import useMessageToChild from '@/hooks/useMessageToChild';
import React from 'react';

type Props = {};

export default function WritePage({}: Props) {
  const { iframeRef } = useMessageToChild();

  return (
    <div>
      <Seo title='ReviewMate | 리뷰작성' />
      <WritePageTopInfo />
      <iframe
        ref={iframeRef}
        src={`${WIDGET_API}/review/write`}
        className='w-full'
      />
    </div>
  );
}
