import { BlackButton } from '@/components/global/button/BasicButton';
import { useRouter } from 'next/router';
import React from 'react';
import { motion } from 'framer-motion';

export default function AfterChatBot() {
  const router = useRouter();
  const reservationId = router.query.reservationId;

  return (
    <div className='w-full flex flex-1 justify-center items-center'>
      <motion.div
        initial={{ scale: 0, rotate: 180 }}
        className='w-4/6 bg-gray06 mt-8 rounded-lg p-5'
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 20,
        }}
      >
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-heading font-bold text-center'>
            체험을 위한 예약 생성이 완료되었습니다 <br />
            카카오톡에서 확인하세요!
          </h1>
          <div className='text-subTitle mt-10'>
            이어서 리뷰 작성을 체험하고 싶다면 리뷰작성을 눌러주세요
          </div>
          <BlackButton
            title='리뷰작성'
            className='mt-8 animate-pulse'
            onClick={() =>
              router.push({
                pathname: '/demo/post-trip/reviewWrite',
                query: { reservationId: reservationId },
              })
            }
          />
        </div>
      </motion.div>
    </div>
  );
}
