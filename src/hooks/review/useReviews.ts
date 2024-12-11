import { useQueryClient } from '@tanstack/react-query';

import type { ReviewsResponse } from '../../types/reviews';

export const useReviews = () => {
  const queryClient = useQueryClient();
  const reviewsData = queryClient.getQueryData<ReviewsResponse>(['reviews']) || []; // 모든 리뷰 캐시된 데이터 설정 및 기본값 설정
  const myReviewsData = queryClient.getQueryData<ReviewsResponse>(['myReviews']) || []; // 내 리뷰 캐시된 데이터 설정 및 기본값 설정

  return { reviewsData, myReviewsData };
};
