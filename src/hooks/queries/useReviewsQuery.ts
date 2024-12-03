import { useQuery } from '@tanstack/react-query';
import type { ReviewsData } from '../../types/reviews';
import { getReviews, getMyReviews } from '../../apis/review/getReviews';

export const useReviewsQuery = () => {
  const { data: reviewsData } = useQuery<ReviewsData[]>({
    queryKey: ['reviews'],
    queryFn: getReviews
  });

  return { reviewsData };
};

export const useMyReviewsQuery = () => {
  const { data: reviewsData } = useQuery<ReviewsData[]>({
    queryKey: ['myReviews'],
    queryFn: getMyReviews
  });

  return { reviewsData };
};
  