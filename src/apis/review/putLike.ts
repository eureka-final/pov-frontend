import { axiosInstance } from '../axiosInstance';

import { END_POINTS } from '../../constants/api';

interface putLikeParams {
  movieId: number;
  reviewId: number;
  isLike: boolean;
}

export const putLike = ({ movieId, reviewId, isLike }: putLikeParams) => {
  return axiosInstance.put(END_POINTS.LIKE(movieId, reviewId), { isLike });
};
