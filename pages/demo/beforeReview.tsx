import WritePageTopInfo from '@/components/write/Top';
import { PARTNER_DOMAIN, REVIEW_MATE_URL } from '@/config/constant';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

type Props = {};

export default function BeforeReview({}: Props) {
  const router = useRouter();
  const reservationId = router.query;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    makeReservation();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className='flex flex-col items-center pt-8'>
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
        <Link
          href={{ pathname: '/demo/review/write', query: reservationId }}
          className='btn-primary float-right animate-pulse'
        >
          리뷰작성
        </Link>
      </div>
    </div>
  );
}

const makeReservation = async () => {
  // 상품구매(예약)는 데모를 위해 임시로 만들어둔 기능이기 때문에, 예약id를 랜덤으로 생성합니다.
  const reservationId = getTempReservationId();
  const reservationData = new FormData();

  const data = {
    partnerCustomId: reservationId,
    startDateTime: '2023-10-13T06:26:18.994Z',
    endDateTime: '2023-10-14T06:26:18.994Z',
    customerCreateRequest: {
      partnerCustomId: 'CUST-1235',
      name: '소현진',
      phoneNumber: '01012345679',
      kakaoId: 'hjhj2525',
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
    console.log('예약성공', response.data);
  } catch (error) {
    console.log('예약실패', error);
  }

  return reservationId;
};

const getTempReservationId = () => {
  const date = new Date();
  return `${PARTNER_DOMAIN}-${date.getTime().toString()}`;
};
