import { landingStyle } from '@/pages/index';
import Image from 'next/image';
import React from 'react';
import { layoutWidth } from '../Layout';
import { GreenButton } from '../global/button/GreenButton';
import { useRouter } from 'next/router';
import { Line } from './line';
import { flexCol } from '@/styles/styleUtils';

export default function PostTrip() {
  const router = useRouter();
  return (
    <div className={`relative xl:h-[1225px] w-full ${landingStyle}`}>
      <Line title='여행 후' iconSrc='/icons/line5.svg' top={'top-[540px]'} />
      <div className={`${layoutWidth}  ${flexCol}`}>
        <div className='flex flex-row items-center justify-center gap-16'>
          <div>
            <h1 className='mb-4 font-bold text-title'>
              여행이 종료되었을때 리뷰 작성 알림
            </h1>
            <h2 className='text-left text-body2 '>
              여행이 종료되고나서 여행의 달콤함을 기억할 수 있도록 <br />
              리뷰 작성 알림을 보내드립니다.
            </h2>
          </div>
          <div className='flex flex-row items-center gap-8 px-8 py-5 shadow-lg rounded-3xl'>
            <Image
              src='images/bell.png'
              alt='벨 아이콘'
              width={110}
              height={110}
            />
            <p className='mt-2 text-left whitespace-pre-line font-mid text-subTitle'>
              {alertMessage}
            </p>
          </div>
        </div>
        <h1 className='mt-16 mb-4 font-bold text-title'>
          쉽고 편리한 AI 리뷰 작성 도우미
        </h1>
        <h2 className='mb-12 text-center text-body2 text-gray01'>
          여행을 길고 자세하게 기록할 수 있도록 돕습니다.
        </h2>
        <Image
          src='/images/reviewWriteView.png'
          alt='리뷰메이트 리뷰 작성 화면'
          width={950}
          height={643}
          className='mb-8'
        />
        <GreenButton
          title='리뷰 작성 체험'
          iconSrc='/icons/pencil.svg'
          onClick={() => {
            router.push({
              pathname: '/demo/reservation',
              query: { destination: '/demo/post-trip/reviewWrite' },
            });
          }}
        />
      </div>
    </div>
  );
}

const alertMessage = `상품을 잘 이용하고 계신가요?
만족도를 남겨주시면 서비스 품질
향상에 큰 도움이 됩니다.`;
