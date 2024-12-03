export const END_POINTS = {
  REVIEWS: 'http://www.point-of-views.com/api/movies/reviews',
  MY_REVIEWS: 'http://www.point-of-views.com/api/movies/reviews/my',
  REVIEW: (movieId: string, reviewId: string) =>  `http://www.point-of-views.com/api/movies/${movieId}/reviews/${reviewId}`,
  CREATE_REVIEW: (movieId: string) => `http://www.point-of-views.com/api/movies/${movieId}/reviews`,
} as const;

export const NETWORK = {
  RETRY_COUNT: 2,
  TIMEOUT: 10000,
} as const;