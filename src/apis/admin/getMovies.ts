import { axiosInstance } from '../axiosInstance';
import type { MoviesAdmin } from '../../types/admins';
import { END_POINTS } from '../../constants/api';

export const getMoviesByAdmin = async (pageParam: number | unknown): Promise<MoviesAdmin> => {
  const response = await axiosInstance.get<MoviesAdmin>(END_POINTS.ADMIN_MOVIES(pageParam));
  return response.data;
};
