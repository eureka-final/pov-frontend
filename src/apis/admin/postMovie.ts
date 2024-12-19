import { axiosInstance } from '../axiosInstance';
import type { MovieDetailData } from '../../types/movie';
import { END_POINTS } from '../../constants/api';

export const postMovie = async ({ ...information }) => {
  const response = await axiosInstance.post<MovieDetailData>(END_POINTS.MOVIE_POST, information);
  return response.data;
};
