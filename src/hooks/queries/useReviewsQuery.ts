import { useQuery, useInfiniteQuery } from '@tanstack/react-query';

import type { ReviewsResponse } from '../../types/reviews';
import { getReviews, getMyReviews } from '../../apis/review/getReviews';

export const useReviewsQuery = () => {
  const {
    data,
    isFetching,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['reviews'],
    queryFn: ({ pageParam = 1 }) => getReviews(pageParam),
    getNextPageParam: (lastPage) => (lastPage.last ? undefined : lastPage.pageNumber + 1),
    initialPageParam: 1,
  });

  // 모든 페이지의 리뷰를 평탄화
  const reviewsData = data?.pages.flatMap((page) => page.reviews) || [];

  return { reviewsData, isFetching, hasNextPage, fetchNextPage };
};

export const useMyReviewsQuery = () => {
  const { data: reviewsData } = useQuery<ReviewsResponse>({
    queryKey: ['myReviews'],
    queryFn: getMyReviews
  });
  
  return { reviewsData };
};
    