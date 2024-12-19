import { axiosInstance } from '../axiosInstance';
import type { ReviewFormData, ReviewImageForm } from '../../types/review';
import { END_POINTS } from '../../constants/api';

export interface PostReviewParams extends ReviewFormData {
  movieId: string;
}

export interface PostReviewImageParams extends ReviewImageForm {
  movieId: string;
}

export const postReview = async ({ movieId, ...information }: PostReviewParams) => {
  const response = await axiosInstance.post<ReviewFormData>(
    END_POINTS.CREATE_REVIEW(movieId),
    information
  );
  return response.data;
};

export const postReviewImage = async ({ movieId, ...information }: PostReviewImageParams) => {
  const response = await axiosInstance.post(
    END_POINTS.REVIEW_IMAGE(movieId),
    information,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
  return response.data;
};
