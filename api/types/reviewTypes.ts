export interface ProductDataType {
  id: number;
  partnerCustomId: string;
  thumbnailUrl: string;
  name: string;
  reviewsCount: number;
  rating: number;
  partnerSellerName: string;
  partnerSellerPhoneNumber: string;
  positiveTags: {
    category: string;
    count: number;
  }[];
  negativeTags: {
    category: string;
    count: number;
  }[];
}
