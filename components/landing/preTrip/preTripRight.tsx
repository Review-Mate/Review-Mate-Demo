import Image from 'next/image';

export const PreTripRight = () => {
  return (
    <div className={`flex flex-col items-start  mt-[100px]`}>
      <h1 className='text-title font-bold mb-4'>
        리뷰의 효과적인 사용
      </h1>
      <h2 className='text-body2 text-gray01 mb-12'>
        원하는 키워드를 선택하여
        <br />
        관련 리뷰를 쉽고 빠르게 찾을 수 있습니다
      </h2>
      <div className='rounded-xl shadow-lg px-5 py-4 mb-16'>
        <div className='flex flex-row justify-between items-center'>
          <Image
            src='images/reviews.png'
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