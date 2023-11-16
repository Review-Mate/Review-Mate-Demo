import { landingStyle } from '@/pages/index';
import Image from 'next/image';
import React from 'react';
import { GreenButton } from '../global/button/GreenButton';
import { useRouter } from 'next/router';

export default function PreTrip() {
  const router = useRouter();

  return (
    <div className={`flex flex-col items-start ${landingStyle}`}>
      <h1 className='text-title font-bold mb-4'>
        수집했던 리뷰의 효과적인 사용
      </h1>
      <h2 className='text-body2 text-gray01 mb-12'>
        여행상품의 고객으로부터 수집한 리뷰는
        <br />
        다양한 방식으로 효과적인 방식의 사용이 가능합니다.
      </h2>
      <div className='w-[423px] h-[430px] rounded-xl shadow-lg px-9 pt-11 pb-5 mb-16'>
        <div className='flex flex-row justify-between items-center mb-8'>
          <div className='flex flex-col'>
            <p className='text-subTitle font-semibold mb-2'>
              링켄리브 발칸 여행
            </p>
            <div className='flex flex-row items-center gap-3'>
              <Image src='/images/star.png' alt='별점' width={24} height={24} />
              <p className='text-title'>4.5</p>
            </div>
          </div>
          <Image
            src='images/landing_trip_image.png'
            alt='여행 이미지'
            height={98}
            width={98}
          />
        </div>
        <p className='text-gray01'>{reviewContent}</p>
        <hr className='my-8' />
        <div className='flex flex-row items-center justify-between'>
          <p className='text-subTitle'>jinny25</p>
          <p className='text-body1 text-gray01'>2023.09.28</p>
        </div>
      </div>

      <GreenButton
        title='리뷰 목록 체험'
        iconSrc={'icons/list.svg'}
        onClick={() => {
          router.push('/demo/pre-trip/reviewList');
        }}
      />
    </div>
  );
}

const reviewContent =
  '두브로니크는 설명이 필요 없을 정도로 역시나\n멋있었고 플리트비체의 자연경관은 경이롭다는\n말 밖에 안 나왔습니다. 특히나 물안개가 낀 블레드\n호수를 배 타고 들어갈 때는 참으로 신비롭더군요.\n좋은 사람들과 좋은 시간을 보낼 수 있어서 더할\n나위 없이 만족하는 여행이었습니다';
