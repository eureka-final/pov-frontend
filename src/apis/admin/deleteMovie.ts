import { axiosInstance } from '../axiosInstance';
import { END_POINTS } from '../../constants/api';

export interface DeleteMovieParams {
  movieId: string;
}

export const deleteMovie = async ({ movieId }: DeleteMovieParams) => {
  return await axiosInstance.delete(END_POINTS.MOVIE_DETAIL(movieId));
};
