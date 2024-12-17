import { axiosInstance } from '../axiosInstance';
import { END_POINTS } from '../../constants/api';
import { MoviesResponse, MovieDetailResponse } from '../../types/movie';

export const getMovies  = async (pageParam: string | unknown) => {
  const { data } = await axiosInstance.get<MoviesResponse>(END_POINTS.MOVIE(pageParam));
  return data;
};

export const getDetailReview = async (movieId: string) => {
  const { data } = await axiosInstance.get<MovieDetailResponse>(END_POINTS.MOVIE_DETAIL(movieId));
  return data;
};

export const getSearchMovies  = async (pageParam: string | unknown, query: string) => {
  const { data } = await axiosInstance.get<MoviesResponse>(END_POINTS.MOVIE_SEARCH(pageParam, query));
  return data;
};
