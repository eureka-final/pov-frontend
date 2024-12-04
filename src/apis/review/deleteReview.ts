import { axiosInstance } from '../axiosInstance';
import { END_POINTS } from '../../constants/api';

interface DeleteReviewParams {
    movieId: string;
    reviewId: string;
}

export const deleteReview = async ({ movieId, reviewId }: DeleteReviewParams) => {
  return await axiosInstance.delete(END_POINTS.REVIEW(movieId, reviewId));
};