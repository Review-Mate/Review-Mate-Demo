import { BlackButton } from '@/components/global/button/BasicButton';
import { useRouter } from 'next/router';
import React from 'react';

export default function BeforeChatBot() {
  const router = useRouter();
  return (
    <div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-heading font-bold'>챗봇 체험 안내</h1>
        <div className='text-subTitle text-center mt-4'>
          리뷰메이트 챗봇을 친구 추가 하시면
          <br />
          예약한 시간으로부터 <strong>1분</strong>뒤에{' '}
          <strong>여행 시작</strong> 안내가,
          <br />
          <strong>2분</strong>뒤에 <strong>여행 종료</strong> 안내가 도착합니다.
        </div>
        <div className='w-full h-[250px] bg-gray06 mt-8'>관련 이미지</div>
        <h1 className='text-heading font-bold mt-8'>챗봇 친구 추가 하기</h1>
        <div className='text-subTitle mt-4'>
          친구추가가 완료됐다면 예약하기를 눌러주세요
        </div>
        <BlackButton
          title='예약하기'
          className='mt-10'
          onClick={() =>
            router.push({
              pathname: '/demo/reservation',
              query: { destination: '/demo/during-trip/afterChatBot' },
            })
          }
        />
      </div>
    </div>
  );
}
