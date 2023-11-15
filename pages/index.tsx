import Seo from '@/components/Seo';
import Image from 'next/image';
import Link from 'next/link';
import arrow from '@/public/images/arrow.svg';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center w-full pt-12 lg:flex-row lg:justify-between'>
      <Seo title='ReviewMate|Home' />
      <div className='flex flex-col items-center w-auto mb-24 lg:items-start lg:w-1/2 animate-appear1 lg:mb-0'>
        <h1 className='mb-5 text-4xl font-bold'>여행의 시작은 리뷰로 부터!</h1>
        <h2 className='text-subTitle text-gray01 mb-14 w-[355px] text-center lg:text-start'>
          리뷰메이트와 함께 특별한 여행을 경험한
          <br />
          여행자들의 살아있는 이야기를 소개합니다!
        </h2>
        {/* <LinkBox
          title='리뷰 목록 위젯'
          content='상품 상세 페이지 체험하기'
          link='/demo/product'
        />
        <LinkBox
          title='리뷰 작성 위젯'
          content='리뷰 작성 페이지 체험하기'
          link='demo/reservation'
          colorBlue={false}
        /> */}
        <Image
          src='/images/luggage.svg'
          alt='여행가방 이미지'
          width={440}
          height={330}
        />
      </div>
      <div className='flex justify-center pb-10 animate-appear1 lg:justify-end lg:pb-0'>
        <div className='grid grid-cols-3 grid-rows-3 gap-x-8 place-items-center'>
          <ArrowImage rotate={'rotate-0'} />
          <MainImage
            src={'/images/circle_image_1.png'}
            alt={'키워드 분석 이미지'}
            title={'리뷰 키워드 분석'}
          />
          <ArrowImage rotate={'rotate-90'} />
          <MainImage
            src={'/images/circle_image_2.png'}
            alt={'리뷰 긍·부정 분석 이미지'}
            title='리뷰 긍·부정 분석'
          />
          <div />
          <MainImage
            src={'/images/circle_image_4.png'}
            alt={'리뷰 작성 보조 이미지'}
            title='리뷰 작성 보조'
          />
          <ArrowImage rotate={'-rotate-90'} />
          <MainImage
            src={'/images/circle_image_3.png'}
            alt={'여행객 피드백 대응 이미지'}
            title='여행객 피드백 대응'
          />
          <ArrowImage rotate={'rotate-180'} />
        </div>
      </div>
    </main>
  );
}

interface ArrowImageProps {
  rotate?: string;
}
interface MainImageProps {
  src: string;
  alt: string;
  title: string;
}
const ArrowImage = ({ rotate }: ArrowImageProps) => {
  return (
    <div className={`transform ${rotate}`}>
      <div className={`pt-6 pl-6`}>
        <Image
          src='/images/round_arrow.png'
          alt='화살표'
          width={60}
          height={30}
        />
      </div>
    </div>
  );
};

const MainImage = ({ src, alt, title }: MainImageProps) => {
  return (
    <div className='flex flex-col items-center'>
      <Image src={src} alt={alt} width={180} height={125} />
      <div className='text-body1 text-gray01'>{title}</div>
    </div>
  );
};

interface LinkBoxProps {
  title: string;
  content: string;
  link: string;
  colorBlue?: boolean;
}

const LinkBox = ({ title, content, link, colorBlue = true }: LinkBoxProps) => {
  const defaultClass =
    'w-[370px] sm:w-[420px] h-[75px] flex justify-between items-center h-25 mb-5 px-6 text-black rounded-md';
  const linkBox = colorBlue
    ? `${defaultClass} bg-lightBlue hover:bg-gradient-to-tr from-[#009AAD] to-[#00B0C7]`
    : `${defaultClass} bg-white border border-solid border-gray04 hover:bg-gradient-to-tr from-white to-[#f9f9f9]`;

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
