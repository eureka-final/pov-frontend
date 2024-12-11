import { axiosInstance } from '../axiosInstance';
import type { ReviewsResponse } from '../../types/reviews';
import { END_POINTS } from '../../constants/api';

export const getReviews = async (pageParam: number) => {
  const { data } = await axiosInstance.get(END_POINTS.REVIEWS(pageParam));
  const reviews = data.data.reviews.content;
  const pageInfo = {
    pageNumber: data.data.reviews.number,
    last: data.data.reviews.last,
  };
  return { reviews, ...pageInfo };
};

export const getMyReviews = async () => {
  const { data } = await axiosInstance.get<ReviewsResponse>(END_POINTS.MY_REVIEWS);
  return data;
};

export const getDetailReview = async (movieId: string, reviewId: string) => {
  const { data } = await axiosInstance.get<ReviewsResponse>(END_POINTS.REVIEW(movieId, reviewId));
  return data;
};