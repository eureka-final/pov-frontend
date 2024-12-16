import { useQuery, useInfiniteQuery } from '@tanstack/react-query';

import type { ReviewsResponse, ReviewDetailDataResponse, JoinClubResponse } from '../../types/review';
import { getReviews, getMyReviews, getClubReviews, getDetailReview, getJoinClub } from '../../apis/review/getReviews';

export const useReviewsQuery = () => {
  const {
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage
  } = useInfiniteQuery<ReviewsResponse, Error>({
    queryKey: ['reviews'],
    queryFn: async ({ pageParam = 0 }) => {
      const response = await getReviews(pageParam);
      
      // 응답 데이터 검증
      if (!response || !response.data || !response.data.reviews) {
        throw new Error('Invalid API response structure');
      }

      return response;
    },
    getNextPageParam: (lastPage) => {
      // 안전한 데이터 접근
      const reviews = lastPage?.data?.reviews;
      if (!reviews) return undefined;
      return reviews.last ? undefined : reviews.number + 1;
    },
    initialPageParam: 0,
  });

  // 모든 페이지 데이터를 평탄화 (합치기)
  const reviewsData =
    data?.pages.flatMap((page) => page?.data?.reviews?.content || []) || [];

  return { reviewsData, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage };
};

export const useMyReviewsQuery = () => {
  const {
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage
  } = useInfiniteQuery<ReviewsResponse, Error>({
    queryKey: ['myReviews'],
    queryFn: async ({ pageParam = 0 }) => {
      const response = await getMyReviews(pageParam);
      
      // 응답 데이터 검증
      if (!response || !response.data || !response.data.reviews) {
        throw new Error('Invalid API response structure');
      }

      return response;
    },
    getNextPageParam: (lastPage) => {
      // 안전한 데이터 접근
      const reviews = lastPage?.data?.reviews;
      if (!reviews) return undefined;
      return reviews.last ? undefined : reviews.number + 1;
    },
    initialPageParam: 0,
  });

  // 모든 페이지 데이터를 평탄화 (합치기)
  const reviewsData =
    data?.pages.flatMap((page) => page?.data?.reviews?.content || []) || [];

  return { reviewsData, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage };
};


export const useClubReviewsQuery = (clubId: string) => {
  const {
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage
  } = useInfiniteQuery<ReviewsResponse, Error>({
    queryKey: ['clubReviews'],
    queryFn: async ({ pageParam = 0 }) => {
      const response = await getClubReviews(clubId, pageParam);
      
      // 응답 데이터 검증
      if (!response || !response.data || !response.data.reviews) {
        throw new Error('Invalid API response structure');
      }

      return response;
    },
    getNextPageParam: (lastPage) => {
      // 안전한 데이터 접근
      const reviews = lastPage?.data?.reviews;
      if (!reviews) return undefined;
      return reviews.last ? undefined : reviews.number + 1;
    },
    initialPageParam: 0,
  });

  // 모든 페이지 데이터를 평탄화 (합치기)
  const reviewsData =
    data?.pages.flatMap((page) => page?.data?.reviews?.content || []) || [];

  return { reviewsData, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage };
};



export const useJoinClubReviewsQuery = () => {
  const { data: joinData } = useQuery<JoinClubResponse>({
    queryKey: ['joinClubReviews'],
    queryFn: getJoinClub
  });
  
  return { joinData };
};


export const useReviewDetailQuery = (movieId: string, reviewId: string) => {
  const { data: reviewData } = useQuery<ReviewDetailDataResponse>({
    queryKey: ['movies', movieId, 'reviews', reviewId],
    queryFn: () => getDetailReview(movieId, reviewId)
  });
  
  return { reviewData };
};