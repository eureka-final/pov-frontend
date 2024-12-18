import { axiosInstance } from '../axiosInstance';

import { END_POINTS } from '../../constants/api';

export interface putLikeParams {
  movieId: string;
}

export const postLike = ({ movieId }: putLikeParams) => {
  return axiosInstance.post(END_POINTS.LIKE_MOVIE(movieId));
};

export const postDisLike = ({ movieId }: putLikeParams) => {
  return axiosInstance.post(END_POINTS.DISLIKE_MOVIE(movieId));
};
