import { landingStyle } from '@/pages/index';
import React from 'react';
import { layoutPaddingStyle, layoutWidth } from '../../Layout';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import { GreenButton } from '@/components/global/button/GreenButton';
import { useRouter } from 'next/router';
import { Line } from '../line';
import { flexCol } from '@/styles/styleUtils';

export default function DuringTrip() {
  const router = useRouter();
  return (
    <div
      className={`relative xl:h-[1020px] w-full  ${landingStyle} bg-[#EFF8FA] `}
    >
      <Line title='여행 중' iconSrc='/icons/line4.svg' top={'top-[445px]'} />
      <div className={`${layoutWidth}  ${flexCol}`}>
        <h1 className='mb-4 font-bold text-title'>
          꼼꼼한 여행관리, 챗봇메이트
        </h1>
        <h2 className='mb-16 text-center text-body2 text-gray01'>
          선택된 여행상품의 만족도 및 응대 데이터 관련하여 피드백을 주고 받을 수
          있습니다
        </h2>
        <div className='flex flex-row justify-between w-full mb-16'>
          <Step1 />
          <Step2 />
          <Step3 />
        </div>
        <GreenButton
          title='챗봇메이트 체험'
          iconSrc='/icons/chat.svg'
          onClick={() => {
            router.push('/demo/during-trip/chatBot');
          }}
        />
      </div>
    </div>
  );
}
