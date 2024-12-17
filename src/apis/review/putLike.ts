import { axiosInstance } from '../axiosInstance';

import { END_POINTS } from '../../constants/api';

export interface putLikeParams {
  movieId: string;
  reviewId: string;
}

export const putLike = ({ movieId, reviewId }: putLikeParams) => {
  return axiosInstance.put(END_POINTS.LIKE(movieId, reviewId));
};

export const putDisLike = ({ movieId, reviewId }: putLikeParams) => {
  return axiosInstance.put(END_POINTS.DISLIKE(movieId, reviewId));
};
