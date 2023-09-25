import WritePageTopInfo from '@/components/write/Top';
import { PARTNER_DOMAIN, REVIEW_MATE_URL } from '@/config/constant';
import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { reservationIdState } from 'state/reservationState';

type Props = {};

//
// 상품 구매 페이지는 데모를 위해 임시로 만들어둔 페이지입니다.
//
export default function Purchase({}: Props) {
  const setReservationId = useSetRecoilState(reservationIdState);

  const onClick = async () => {
    const reservationId = await makeReservation();
    setReservationId(reservationId);
  };

  return (
    <div className='flex-col'>
      <h1 className='text-title font-bold mb-7 bg-gray06 w-full p-1.5 px-3 animate-appear1 opacity-0'>
        🛒 리뷰 작성을 위해 상품 구매가 필요합니다!
      </h1>
      <div className='animate-appear2 opacity-0'>
        <WritePageTopInfo />
        <Link
          onClick={() => onClick()}
          href='/demo/beforeReview'
          className='float-right bg-black text-white p-1 px-4 rounded mt-1 text-body1 animate-pulse'
        >
          구매하기
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
