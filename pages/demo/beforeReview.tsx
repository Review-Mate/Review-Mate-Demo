import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type Props = {};

export default function BeforeReview({}: Props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className='flex flex-col items-center pt-8'>
      {loading && (
        <Image
          src='/images/loading.png'
          alt='로딩'
          width={40}
          height={40}
          className='animate-spin animate-loading'
        />
      )}
      <h1 className='text-heading animate-appear4 opacity-0'>
        상품을 구매해 주셔서 감사합니다.
      </h1>
      <h1 className='text-heading mt-3 font-bold animate-appear5 opacity-0'>
        상품의 리뷰를 남겨주세요!
      </h1>
      <Link
        href='/demo/review/write'
        className='bg-black text-white mt-10 p-1 px-4 rounded mt-1 text-body1 opacity-0 animate-appear6'
      >
        리뷰작성
      </Link>
    </div>
  );
}
