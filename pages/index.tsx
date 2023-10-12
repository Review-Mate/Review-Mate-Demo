import Seo from '@/components/Seo';
import Image from 'next/image';
import Link from 'next/link';
import arrow from '@/public/images/arrow.svg';
import { useEffect, useState } from 'react';

export default function Home() {
  const [loginToken, setLoginToken] = useState<string | null>('');

  useEffect(() => {
    const token = localStorage.getItem('loginToken');
    setLoginToken(token);
  }, []);

  return (
    <main className='flex w-full flex-col lg:flex-row justify-center lg:justify-between items-center pt-12'>
      <Seo title='ReviewMate|Home' />
      <div className='flex flex-col items-center lg:items-start w-auto lg:w-1/2 animate-appear1 mb-10 lg:mb-0'>
        <h1 className='text-5xl font-bold mb-5'>여행사의</h1>
        <div className='flex flex-wrap justify-center lg:justify-start'>
          <h1 className='text-5xl font-bold mb-5'>구매 전환율 상승</h1>
          <h1 className='text-5xl font-bold mb-10'>파트너</h1>
        </div>
        <h3 className='text-body1 mb-14 w-[300px] text-center lg:text-start'>
          리뷰메이트는 고객의 리뷰를 통해 여행 상품의 구매 전환율을 상승시키는
          리뷰 통합 관리 플랫폼입니다.
        </h3>
        <LinkBox
          title='리뷰 목록 위젯'
          content='상품 상세 페이지 체험하기'
          link='/demo/product'
        />
        <LinkBox
          title='리뷰 작성 위젯'
          content='리뷰 작성 페이지 체험하기'
          link={loginToken ? 'demo/beforeReview' : '/demo/login'}
          colorBlue={false}
        />
      </div>
      <div className='w-full md:w-[550px] animate-appear1 flex justify-center lg:justify-end pb-10 lg:pb-0'>
        <Image
          src='/images/landing.png'
          alt='리뷰메이트 소개 이미지'
          width={550}
          height={500}
        />
      </div>
    </main>
  );
}

interface LinkBoxProps {
  title: string;
  content: string;
  link: string;
  colorBlue?: boolean;
}

const LinkBox = ({ title, content, link, colorBlue = true }: LinkBoxProps) => {
  const defaultClass =
    'w-[420px] h-[75px] flex justify-between items-center h-25 mb-5 px-6 rounded-md';
  const linkBox = colorBlue
    ? `${defaultClass} bg-lightBlue text-white hover:bg-gradient-to-tr from-[#009AAD] to-[#00B0C7]`
    : `${defaultClass} bg-white text-black border border-solid border-gray04 hover:bg-gradient-to-tr from-white to-[#f9f9f9]`;

  return (
    <Link href={link} className={linkBox}>
      <div className='flex flex-col items-start'>
        <p className='text-body font-bold mb-[2px]'>{title}</p>
        <p className='text-body'>{content}</p>
      </div>
      <Image src={arrow} alt='화살표' width={27} height={27} />
    </Link>
  );
};
