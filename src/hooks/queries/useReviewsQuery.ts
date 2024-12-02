import { useQuery } from '@tanstack/react-query';
import type { ReviewsData } from '../../types/reviews';
import { getReviews } from '../../apis/review/getReview';

export const useReviewsQuery = () => {
  const { data: reviewsData } = useQuery<ReviewsData[]>({
    queryKey: ['reviews'],
    queryFn: getReviews
  });

  return { reviewsData };
};
  