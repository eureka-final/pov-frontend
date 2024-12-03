import axios from 'axios';
import type { ReviewFormData } from '../../types/reviews';
import { END_POINTS } from '../../constants/api';

export interface PutReviewParams extends ReviewFormData {
  movieId: string;
  reviewId: string;
}

export const putReview = async ({ movieId, reviewId,  ...information }: PutReviewParams): Promise<ReviewFormData> => {
  const response = await axios.put<ReviewFormData>(
    END_POINTS.REVIEW(movieId, reviewId),
    information
  );
  return response.data;
};