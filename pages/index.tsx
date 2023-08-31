import Seo from '@/components/Seo';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='h-full'>
      <Seo title='ReviewMate|Home' />
      <h1 className='text-5xl font-bold mb-5 w-[520px]'>여행사의</h1>
      <h1 className='text-5xl font-bold mb-10 w-[520px]'>
        구매 전환율 상승 파트너
      </h1>
      <h1 className='text-title mb-14 w-[340px]'>
        리뷰메이트는 고객의 리뷰를 통해 여행 상품의 구매 전환율을 상승시키는
        리뷰 통합 관리 플랫폼입니다.
      </h1>
      <LinkBox
        title='상품상세페이지'
        content='리뷰 목록 위젯이 삽입된 상품상세페이지 체험하기'
        link='/demo/product'
      />
      <LinkBox
        title='리뷰목록위젯'
        content='리뷰 목록 위젯 체험하기'
        link='https://main.d33vkfpm9flfhs.amplifyapp.com/review/list'
      />
      <LinkBox
        title='리뷰작성위젯'
        content='리뷰 작성 위젯 체험하기'
        link='https://main.d33vkfpm9flfhs.amplifyapp.com/review/write'
      />
    </main>
  );
}

interface LinkBoxProps {
  title: string;
  content: string;
  link: string;
}

const LinkBox = ({ title, content, link }: LinkBoxProps) => {
  return (
    <Link
      href={link}
      className='w-[420px] h-[75px] flex justify-between items-center h-25 mb-5 px-6 rounded bg-primary border border-solid border-gray04'
    >
      <div className='flex flex-col items-start'>
        <p className='text-body font-bold text-white mb-[2px]'>{title}</p>
        <p className='text-body text-white'>{content}</p>
      </div>
      <Image src='/arrow.svg' alt='화살표' width={27} height={27} />
    </Link>
  );
};
