import { useQuery } from '@tanstack/react-query';
import type { ReviewsData } from '../../types/reviews';
import { getDetailReview } from '../../apis/review/getReviews';

export const useEditReviewQuery = (movieId: string, reviewId: string) => {
  const { data: existingReview } = useQuery<ReviewsData[]>({
    queryKey: ['movies', movieId, 'reviews', reviewId],
    queryFn: () => getDetailReview(movieId, reviewId)
  });

  return { existingReview };
};