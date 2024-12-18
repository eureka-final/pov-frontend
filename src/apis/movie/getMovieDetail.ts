import { axiosInstance } from '../axiosInstance';
import { END_POINTS } from '../../constants/api';
import { MovieResponse } from '../../types/movie';

export const getMovieDetail = async (movieId: string) => {
  const { data } = await axiosInstance.get<MovieResponse>(END_POINTS.MOVIE_DETAIL(movieId));
  return data;
};
