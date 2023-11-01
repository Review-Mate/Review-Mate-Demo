import { PARTNER_DOMAIN, REVIEW_MATE_URL } from '@/config/constant';
import axios from 'axios';
import { ProductDataType } from './types/reviewTypes';

export async function fetchProductData(
  productPartnerCustomId: string
): Promise<ProductDataType> {
  try {
    const response = await axios.get(
      `${REVIEW_MATE_URL}/api/console/v1/${PARTNER_DOMAIN}/products/travel/single/${productPartnerCustomId}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
