import axios from 'axios';
import type { reviewFormData } from '../../types/reviewItem';

import { END_POINTS } from '../../constants/api';

export interface PostReviewItemParams extends reviewFormData {
  movieId: number;
}

export const postReviewItem = ({ movieId, ...information }: PostReviewItemParams) => {
  return axios.post<reviewFormData>(END_POINTS.CREATE_REVIEW_ITEM(movieId), {
    ...information,
  });
};
