import { useQueryClient } from '@tanstack/react-query';

import type { ReviewsData } from '../../types/reviews';

export const useReviews = () => {
  const queryClient = useQueryClient();
  const reviewsData = queryClient.getQueryData<ReviewsData[]>(['reviews']) || []; // 캐시된 데이터 설정 및 기본값 설정

  return { reviewsData };
};
