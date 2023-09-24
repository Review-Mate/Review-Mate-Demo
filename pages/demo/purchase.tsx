import WritePageTopInfo from '@/components/write/Top';
import Link from 'next/link';
import React from 'react';

type Props = {};

export default function Purchase({}: Props) {
  return (
    <div className='flex-col'>
      <h1 className='text-title font-bold mb-7 bg-gray06 w-full p-1.5 px-3 animate-appear1 opacity-0'>
        🛒 리뷰 작성을 위해 상품 구매가 필요합니다!
      </h1>
      <div className='animate-appear2 opacity-0'>
        <WritePageTopInfo />
        <Link
          href='/demo/beforeReview'
          className='float-right bg-black text-white p-1 px-4 rounded mt-1 text-body1 animate-pulse'
        >
          구매하기
        </Link>
      </div>
    </div>
  );
}
