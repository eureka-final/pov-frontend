import axios from 'axios';
import type { ReviewsData } from '../../types/reviews';
import { END_POINTS } from '../../constants/api';

export const getReviews = async () => {
  const { data } = await axios.get<ReviewsData[]>(END_POINTS.REVIEWS);
  return data;
};

export const getMyReviews = async () => {
  const { data } = await axios.get<ReviewsData[]>(END_POINTS.MY_REVIEWS);
  return data;
};

export const getDetailReview = async (movieId: string, reviewId: string) => {
  const { data } = await axios.get<ReviewsData[]>(END_POINTS.DETAIL_REVIEW(movieId, reviewId));
  return data;
};