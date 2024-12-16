import { axiosInstance } from '../axiosInstance';
import { END_POINTS } from '../../constants/api';
import { MoviesResponse } from '../../types/movie';

export const getMovies  = async (pageParam: string | unknown) => {
  const { data } = await axiosInstance.get<MoviesResponse>(END_POINTS.MOVIE(pageParam));
  return data;
};
