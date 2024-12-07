import { axiosInstance } from '../axiosInstance';
import type { ReviewFormData } from '../../types/reviews';
import { END_POINTS } from '../../constants/api';
import axios from 'axios';

export interface PostReviewParams extends ReviewFormData {
  movieId: string;
}

export const postReview = async ({ movieId, ...information }: PostReviewParams) => {
  const response = await axios.post<ReviewFormData>(
    END_POINTS.CREATE_REVIEW(movieId),
    information
  );
  return response.data;
};
