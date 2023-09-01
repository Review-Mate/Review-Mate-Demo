import Seo from '@/components/Seo';
import WritePageTopInfo from '@/components/write/Top';
import { WIDGET_API } from '@/config/api';
import React from 'react';

type Props = {};

export default function WritePage({}: Props) {
  return (
    <div>
      <Seo title='ReviewMate | 리뷰작성' />
      <WritePageTopInfo />
      <iframe src={`${WIDGET_API}/review/write`} className='w-full' />
    </div>
  );
}
