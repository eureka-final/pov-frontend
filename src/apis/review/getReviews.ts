import { axiosInstance } from '../axiosInstance';
import type { ReviewsResponse, ReviewDetailDataResponse } from '../../types/reviews';
import { END_POINTS } from '../../constants/api';

export const getReviews = async (pageParam: number | unknown) => {
  const { data } = await axiosInstance.get<ReviewsResponse>(END_POINTS.REVIEWS(pageParam));
  console.log('data Response:', data); // 구조 확인
  console.log('message Response:', data.message); // 구조 확인
  console.log('API Response:', data.data.reviews); // 구조 확인
  return data;
};

export const getMyReviews = async () => {
  const { data } = await axiosInstance.get<ReviewsResponse>(END_POINTS.MY_REVIEWS);
  return data;
};

export const getDetailReview = async (movieId: string, reviewId: string) => {
  const { data } = await axiosInstance.get<ReviewDetailDataResponse>(END_POINTS.REVIEW(movieId, reviewId));
  return data;
};