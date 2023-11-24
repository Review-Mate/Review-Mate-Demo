import Seo from '@/components/Seo';
import { PARTNER_DOMAIN } from '@/config/constant';
import { createReservation } from 'api/reservationApi';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useLoginContext } from 'context/LoginContext';

export default function Reservation() {
  const router = useRouter();
  const destination = router.query.destination;
  console.log(router);

  const { isLogin } = useLoginContext();

  useEffect(() => {
    if (router.isReady && destination === undefined) {
      alert('잘못된 접근입니다.');
      router.push('/');
      console.log(destination, 'destination');
    } else if (isLogin !== undefined && !isLogin) {
      alert('로그인 후 이용 가능합니다.');
      router.push({
        pathname: '/login',
        query: { destination: destination, route: '/demo/reservation' },
      });
    } else {
      startReservation();
    }
  }, [router.isReady, router.query.destination]);

  const startReservation = async () => {
    // 상품구매(예약)는 데모를 위해 임시로 만들어둔 기능이기 때문에, 예약id를 랜덤으로 생성합니다.
    setTimeout(() => {
      const reservationId = getTempReservationId();
      makeReservation(reservationId);
      destination &&
        router.push({
          pathname: destination.toString(),
          query: { reservationId: reservationId },
        });
    }, 700);
  };

  const makeReservation = async (reservationId: string) => {
    try {
      const reservationData = new FormData();

      const data = getReservationData(reservationId);

      reservationData.append(
        'singleTravelReservationCreateRequest',
        new Blob([JSON.stringify(data)], { type: 'application/json' })
      );

      // 데모를 위한 예약 API일 뿐, 실제 파트너사에서는 리뷰메이트 api를 사용하지 않습니다.
      await createReservation(reservationData);
    } catch (e) {
      alert('예약에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const getReservationData = (reservationId: string) => {
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

    return data;
  };

  return (
    <div className='flex flex-col items-center pt-8'>
      <Seo title='ReviewMate | Reservation' />
      <p className='text-body1  mb-4'>상품 예약 중..</p>
      <Image
        src='/images/loading.png'
        alt='로딩'
        width={40}
        height={40}
        className='animate-spin animate-loading'
      />
    </div>
  );
}

const getTempReservationId = () => {
  const date = new Date();
  return `${PARTNER_DOMAIN}-${date.getTime().toString()}`;
};
