import { axiosInstance } from '../axiosInstance';
import type { ReviewsResponse, ReviewDetailDataResponse, JoinClubResponse } from '../../types/reviews';
import { END_POINTS } from '../../constants/api';

export const getReviews = async (pageParam: number | unknown) => {
  const { data } = await axiosInstance.get<ReviewsResponse>(END_POINTS.REVIEWS(pageParam));
  return data;
};

export const getMyReviews = async (pageParam: number | unknown) => {
  const { data } = await axiosInstance.get<ReviewsResponse>(END_POINTS.MY_REVIEWS(pageParam));
  return data;
};

export const getClubReviews = async (clubId: string) => {
  const { data } = await axiosInstance.get<ReviewsResponse>(END_POINTS.CLUB_REVIEW(clubId));
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