import Seo from '@/components/Seo';
import { BlackButton } from '@/components/detail/Top/global/button';
import WritePageTopInfo from '@/components/write/Top';
import { PARTNER_DOMAIN, REVIEW_MATE_URL } from '@/config/constant';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';

export default function BeforeReview() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, []);

  const makeReservation = async () => {
    // 상품구매(예약)는 데모를 위해 임시로 만들어둔 기능이기 때문에, 예약id를 랜덤으로 생성합니다.
    const reservationId = getTempReservationId();
    const reservationData = new FormData();

    const token = localStorage.getItem('loginToken');
    const name = localStorage.getItem('name');
    const phoneNum = localStorage.getItem('phoneNum');
    const kakaoId = localStorage.getItem('kakaoId');

    const day = 1000 * 60 * 60 * 24;
    const startDate = new Date(Date.now() + 10 * day); //10일 후
    const endDate = new Date(Date.now() + 13 * day); //13일 후

    const data = {
      partnerCustomId: reservationId,
      startDateTime: startDate.toISOString(),
      endDateTime: endDate.toISOString(),
      customerCreateRequest: {
        partnerCustomId: token,
        name: name,
        phoneNumber: phoneNum,
        kakaoId: kakaoId,
      },
      singleTravelProductCreateRequest: {
        partnerCustomId: 'PRODUCT-0001',
        name: '신라더스테이 호텔',
        singleTravelProductCategory: 'ACCOMMODATION',
        partnerSellerId: 1,
      },
    };
    reservationData.append(
      'singleTravelReservationCreateRequest',
      new Blob([JSON.stringify(data)], { type: 'application/json' })
    );

    // 데모를 위한 예약 API일 뿐, 실제 파트너사에서는 리뷰메이트 api를 사용하지 않습니다.
    try {
      const response = await axios.post(
        `${REVIEW_MATE_URL}/api/client/v1/${PARTNER_DOMAIN}/products/travel/single/reservations`,
        reservationData
      );
      router.push({
        pathname: `/demo/review/write`,
        query: { reservationId: reservationId },
      });
    } catch (error) {
      alert('예약에 실패했습니다. 다시 시도해주세요.');
    }

    return reservationId;
  };

  return (
    <div className='flex flex-col items-center pt-8'>
      <Seo title='ReviewMate | Reservation' />
      {loading && (
        <>
          <p className='text-body1  mb-4'>상품 예약 중..</p>
          <Image
            src='/images/loading.png'
            alt='로딩'
            width={40}
            height={40}
            className='animate-spin animate-loading'
          />
        </>
      )}
      <h1 className='text-heading mt-3 mb-16 font-bold animate-appear4 opacity-0'>
        구매하신 상품의 리뷰를 남겨주세요!
      </h1>
      <div className='animate-appear5 opacity-0'>
        <WritePageTopInfo />
        <BlackButton
          title='리뷰작성'
          onClick={makeReservation}
          className='btn-primary float-right animate-pulse'
        />
      </div>
    </div>
  );
}

const getTempReservationId = () => {
  const date = new Date();
  return `${PARTNER_DOMAIN}-${date.getTime().toString()}`;
};
