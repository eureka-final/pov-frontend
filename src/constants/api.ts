export const BASE_URL = import.meta.env.VITE_BASE_URL;

export const END_POINTS = {
  REVIEWS: 'https://www.point-of-views.com/api/movies/reviews',
  MY_REVIEWS: 'https://www.point-of-views.com/api/movies/reviews/my',
  REVIEW: (movieId: string, reviewId: string) =>  `https://www.point-of-views.com/api/movies/${movieId}/reviews/${reviewId}`,
  CREATE_REVIEW: (movieId: string) => `https://www.point-of-views.com/api/movies/${movieId}/reviews`,
  CLUBS: 'https://www.point-of-views.com/api/clubs',
  MY_CLUBS: 'https://www.point-of-views.com/api/clubs/myclub',
  CLUB: (clubId: string) =>  `https://www.point-of-views.com/api/clubs/${clubId}`,
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

interface HttpErrorMessage {
  HEADING: string;
  BODY: string;
  BUTTON: string;
}

export const HTTP_ERROR_MESSAGE: Record<number, HttpErrorMessage> = {
  [HTTP_STATUS_CODE.NOT_FOUND]: {
    HEADING: '페이지를 다시 탐색해주세요.',
    BODY: '요청하신 페이지를 찾을 수 없습니다.',
    BUTTON: '홈으로 가기',
  },
  [HTTP_STATUS_CODE.UNAUTHORIZED]: {
    HEADING: '인증이 만료되었습니다.',
    BODY: '로그인을 해주세요',
    BUTTON: '로그인',
  },
  [HTTP_STATUS_CODE.FORBIDDEN]: {
    HEADING: '접근 권한이 없습니다.',
    BODY: '로그인을 해주세요',
    BUTTON: '로그인',
  },
  [HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR]: {
    HEADING: '현재 페이지를 표시할 수 없습니다.',
    BODY: `잠시 후 다시 시도해주세요.`,
    BUTTON: '새로고침',
  },
} as const;

export const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN';

export const ERROR_MESSAGE = '오류가 발생했습니다. 잠시 후 다시 시도해주세요.';