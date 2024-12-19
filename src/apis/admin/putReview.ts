import { axiosInstance } from '../axiosInstance';
import { END_POINTS } from '../../constants/api';

export interface PutReviewParams {
  movieId: string;
  reviewId: string;
}

export const putReviewBlind = async ({ movieId, reviewId }: PutReviewParams) => {
  const response = await axiosInstance.put(END_POINTS.BLIND_REVIEW(movieId, reviewId));
  return response.data;
};
