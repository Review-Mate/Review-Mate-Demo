import { PARTNER_DOMAIN, REVIEW_MATE_URL } from '@/config/constant';
import axios from 'axios';

export async function createReservation(reservationData: FormData) {
  try {
    const response = await axios.post(
      `${REVIEW_MATE_URL}/api/client/v1/${PARTNER_DOMAIN}/products/travel/single/reservations`,
      reservationData
    );
    return response.data;
  } catch (error) {
    //alert('예약에 실패했습니다. 다시 시도해주세요.');
    throw error;
  }
}
