import { axiosInstance } from '../axiosInstance';
import type { MoviesAdmin } from '../../types/admins';
import type { MoviesResponse, TMDBMoviesResponse, TMDBMovieDetailResponse } from '../../types/movie';
import { END_POINTS } from '../../constants/api';

export const getMovies = async (pageParam: number | unknown, searchKeyword: string): Promise<MoviesResponse> => {
  const response = await axiosInstance.get<MoviesResponse>(END_POINTS.MOVIES(pageParam, searchKeyword));
  return response.data;
};

export const getTMDBMovies = async (pageParam: number | unknown, searchKeyword: string): Promise<TMDBMoviesResponse> => {
  const response = await axiosInstance.get<TMDBMoviesResponse>(END_POINTS.TMDB_MOVIES(pageParam, searchKeyword));
  return response.data;
};

export const getMoviesByAdmin = async (pageParam: number | unknown, searchKeyword: string): Promise<MoviesAdmin> => {
  const response = await axiosInstance.get<MoviesAdmin>(END_POINTS.ADMIN_MOVIES(pageParam, searchKeyword));
  return response.data;
};

export const getTMDBMovieDetail = async (movieId: string) => {
  const { data } = await axiosInstance.get<TMDBMovieDetailResponse>(END_POINTS.TMDB_DETAIL(movieId));
  return data;
};
