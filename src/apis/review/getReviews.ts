import { axiosInstance } from '../axiosInstance';
import type { ReviewsData } from '../../types/reviews';
import { END_POINTS } from '../../constants/api';
import axios from 'axios';

export const getReviews = async () => {
  const { data } = await axios.get<ReviewsData[]>(END_POINTS.REVIEWS);
  return data;
};

export const getMyReviews = async () => {
  const { data } = await axios.get<ReviewsData[]>(END_POINTS.MY_REVIEWS);
  return data;
};

export const getDetailReview = async (movieId: string, reviewId: string) => {
  const { data } = await axios.get<ReviewsData[]>(END_POINTS.REVIEW(movieId, reviewId));
  return data;
};