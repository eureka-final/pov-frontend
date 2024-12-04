import axios from 'axios';
import type { ReviewsData } from '../../types/reviews';
import { END_POINTS } from '../../constants/api';

export const getReviews = async () => {
  const { data } = await axios.get<ReviewsData[]>(END_POINTS.REVIEWS);
  return data;
};