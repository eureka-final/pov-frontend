import { axiosInstance } from '../axiosInstance';
import type { MoviesAdmin } from '../../types/admins';
import { END_POINTS } from '../../constants/api';

export const getMoviesByAdmin = async (): Promise<MoviesAdmin> => {
  const response = await axiosInstance.get<MoviesAdmin>(END_POINTS.ADMIN_MOVIES);
  return response.data;
};
