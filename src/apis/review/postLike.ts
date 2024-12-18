import { axiosInstance } from '../axiosInstance';

import { END_POINTS } from '../../constants/api';

export interface putLikeParams {
  movieId: string;
  reviewId: string;
}

export const postLike = ({ movieId, reviewId }: putLikeParams) => {
  return axiosInstance.post(END_POINTS.LIKE(movieId, reviewId));
};

export const postDisLike = ({ movieId, reviewId }: putLikeParams) => {
  return axiosInstance.post(END_POINTS.DISLIKE(movieId, reviewId));
};
