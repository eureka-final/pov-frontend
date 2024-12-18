import { axiosInstance } from '../axiosInstance';
import type { ReviewsResponse, ReviewDetailDataResponse, JoinClubResponse, MovieReviewsResponse } from '../../types/review';
import { END_POINTS } from '../../constants/api';

export const getReviews = async (pageParam: number | unknown) => {
  const { data } = await axiosInstance.get<ReviewsResponse>(END_POINTS.REVIEWS(pageParam));
  return data;
};

export const getMyReviews = async (pageParam: number | unknown) => {
  const { data } = await axiosInstance.get<ReviewsResponse>(END_POINTS.MY_REVIEWS(pageParam));
  return data;
};

export const getClubReviews = async (clubId: string, pageParam: number | unknown) => {
  const { data } = await axiosInstance.get<ReviewsResponse>(END_POINTS.CLUB_REVIEW(clubId, pageParam));
  return data;
};

export const getJoinClub = async () => {
  const { data } = await axiosInstance.get<JoinClubResponse>(END_POINTS.CLUB_JOIN);
  return data;
};

export const getDetailReview = async (movieId: string, reviewId: string) => {
  const { data } = await axiosInstance.get<ReviewDetailDataResponse>(END_POINTS.REVIEW(movieId, reviewId));
  return data;
};

export const getMovieReviews = async (movieId: string, pageParam: number | unknown) => {
  const { data } = await axiosInstance.get<MovieReviewsResponse>(END_POINTS.MOVIE_REVIEW(movieId, pageParam));
  return data;
};