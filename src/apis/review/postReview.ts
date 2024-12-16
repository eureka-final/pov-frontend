import { axiosInstance } from '../axiosInstance';
import type { ReviewFormData } from '../../types/review';
import { END_POINTS } from '../../constants/api';

export interface PostReviewParams extends ReviewFormData {
  movieId: string;
}

export const postReview = async ({ movieId, ...information }: PostReviewParams) => {
  const response = await axiosInstance.post<ReviewFormData>(
    END_POINTS.CREATE_REVIEW(movieId),
    information
  );
  return response.data;
};
