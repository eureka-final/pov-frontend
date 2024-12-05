export const BASE_URL = import.meta.env.VITE_BASE_URL;

export const END_POINTS = {
  REVIEWS: '/api/movies/reviews',
  MY_REVIEWS: '/api/movies/reviews/my',
  REVIEW: (movieId: string, reviewId: string) =>  `/api/movies/${movieId}/reviews/${reviewId}`,
  CREATE_REVIEW: (movieId: string) => `/api/movies/${movieId}/reviews`,
  CLUB: '/clubs',
  TOKEN: `/api/auth/reissue`,
} as const;

export const NETWORK = {
  RETRY_COUNT: 2,
  TIMEOUT: 5000,
} as const;

export const HTTP_STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_LOGIC_ERROR: 500,
  INTERNAL_SERVER_ERROR: 502,
} as const;


export const HTTP_ERROR_MESSAGE = {
  [HTTP_STATUS_CODE.NOT_FOUND]: {
    HEADING: '페이지를 다시 탐색해주세요.',
    BODY: '요청하신 페이지를 찾을 수 없습니다.',
    BUTTON: '홈으로 가기',
  },
  [HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR]: {
    HEADING: '현재 페이지를 표시할 수 없습니다.',
    BODY: `잠시 후 다시 시도해주세요.`,
    BUTTON: '새로고침',
  },
  [HTTP_STATUS_CODE.BAD_REQUEST]: {
    HEADING: '잘못된 요청입니다.',
    BODY: '확인 후 다시 시도해주세요.',
    BUTTON: '홈으로 가기',
  },
} as const;

export const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN';

export const ERROR_MESSAGE = '오류가 발생했습니다. 잠시 후 다시 시도해주세요.';