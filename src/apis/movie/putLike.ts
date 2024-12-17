import { axiosInstance } from '../axiosInstance';

import { END_POINTS } from '../../constants/api';

export interface putLikeParams {
  movieId: string;
}

export const putLike = ({ movieId }: putLikeParams) => {
  return axiosInstance.put(END_POINTS.LIKE_MOVIE(movieId));
};

export const putDisLike = ({ movieId }: putLikeParams) => {
  return axiosInstance.put(END_POINTS.DISLIKE_MOVIE(movieId));
};
