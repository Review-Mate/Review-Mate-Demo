import { landingStyle } from '@/pages/index';
import Image from 'next/image';

export const PreTripLeft = () => {
  return (
    <div className={`flex flex-col items-start`}>
      <h1 className='text-title font-bold mb-4'>여행전 리뷰가 주는 역할</h1>
      <h2 className='text-body2 text-gray01 mb-12'>
        키워드별 긍부정 그래프를 통해 <br />
        여행상품 장/단점을 한눈에 확인할 수 있습니다
      </h2>
      <div className='rounded-xl shadow-lg px-5 py-4 mb-16'>
        <div className='flex flex-row justify-between items-center'>
          <Image
            src='images/keywordStat.png'
            className='rounded-xl'
            alt='여행 이미지'
            height={460}
            width={460}
          />
        </div>
      </div>
    </div>
  );
};
