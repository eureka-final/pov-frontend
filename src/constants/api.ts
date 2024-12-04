export const END_POINTS = {
  REVIEWS: 'http://www.point-of-views.com/api/movies/reviews',
  CREATE_REVIEW_ITEM: (movieId: number) => `http://www.point-of-views.com/api/movies/${movieId}/reviews`,
} as const;

export const NETWORK = {
  RETRY_COUNT: 2,
  TIMEOUT: 10000,
} as const;