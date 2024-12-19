import { axiosInstance } from '../axiosInstance';
import type { MovieDetailData } from '../../types/movie';
import { END_POINTS } from '../../constants/api';

export interface PutMovieParams extends MovieDetailData {
  movieId: string;
}

export const putMovie = async ({ movieId, ...information }: PutMovieParams): Promise<MovieDetailData> => {
  const response = await axiosInstance.put<MovieDetailData>(END_POINTS.MOVIE_DETAIL(movieId), information);
  return response.data;
};
