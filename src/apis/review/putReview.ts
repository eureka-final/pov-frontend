import { axiosInstance } from '../axiosInstance';
import type { ReviewFormData } from '../../types/review';
import { END_POINTS } from '../../constants/api';

export interface PutReviewParams extends ReviewFormData {
  movieId: string;
  reviewId: string;
}

export const putReview = async ({ movieId, reviewId,  ...information }: PutReviewParams): Promise<ReviewFormData> => {
  const response = await axiosInstance.put<ReviewFormData>(
    END_POINTS.REVIEW(movieId, reviewId),
    information
  );
  return response.data;
};