import axios from 'axios';
import type { ReviewFormData } from '../../types/reviews';
import { END_POINTS } from '../../constants/api';

export interface PostReviewParams extends ReviewFormData {
  movieId: number;
}

export const postReview = async ({ movieId, ...information }: PostReviewParams) => {
  const response = await axios.post<ReviewFormData>(
    END_POINTS.CREATE_REVIEW_ITEM(movieId),
    information
  );
  return response.data;
};
