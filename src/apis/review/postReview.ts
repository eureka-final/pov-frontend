import axios from 'axios';
import type { reviewFormData } from '../../types/reviews';
import { END_POINTS } from '../../constants/api';

export interface PostReviewParams extends reviewFormData {
  movieId: number;
}

export const postReview = async ({ movieId, ...information }: PostReviewParams) => {
  const response = await axios.post<reviewFormData>(
    END_POINTS.CREATE_REVIEW_ITEM(movieId),
    information
  );
  return response.data;
};
