import { axiosInstance } from '../axiosInstance';
import type { MovieData } from '../../types/movie';
import { END_POINTS } from '../../constants/api';

export interface PutMovieParams extends MovieData {
  movieId: string;
}

export const putMovie = async ({ movieId, ...information }: PutMovieParams): Promise<MovieData> => {
  const response = await axiosInstance.put<MovieData>(END_POINTS.MOVIE_DETAIL(movieId), information);
  return response.data;
};
