export const BASE_URL = import.meta.env.VITE_BASE_URL;

export const END_POINTS = {
  CLUB_JOIN: '/api/clubs/reviews',
  CLUBS: '/api/clubs',
  MY_CLUBS: '/api/clubs/myclub',
  TOKEN: `/api/auth/reissue`,
  PAYMENT_TEMP: '/api/payments/temp',
  PAYMENT: `/api/payments`,
  PREMIERES: `/api/premieres`,
  PREMIERE_DETAIL: (premiereId: string) => `/api/premieres/${premiereId}`,
  PREMIERE_ENTRY: (premiereId: string) => `/api/premieres/${premiereId}/entry`,
  REVIEWS: (pageParam: number | unknown) => `/api/movies/reviews?page=${pageParam}`,
  MY_REVIEWS:  (pageParam: number | unknown) => `/api/movies/reviews/my?page=${pageParam}`,
  CLUB_REVIEW: (clubId: string, pageParam: number | unknown) => `/api/clubs/${clubId}/reviews?page=${pageParam}`,
  REVIEW: (movieId: string, reviewId: string) =>  `/api/movies/${movieId}/reviews/${reviewId}`,
  CREATE_REVIEW: (movieId: string) => `/api/movies/${movieId}/reviews`,
  CLUB: (clubId: string) =>  `/api/clubs/${clubId}`,
  JOIN_CLUB: (clubId: string) =>  `/api/clubs/${clubId}/member`,
  LEAVE_CLUB: (clubId: string) =>  `/api/clubs/${clubId}/leave`,
  LEADER_CLUB: (clubId: string) =>  `/api/clubs/${clubId}/leader`,
  LIKE: (movieId: number, reviewId: number) => `/api/movies/${movieId}/reviews/${reviewId}/like`,
  DISLIKE: (movieId: number, reviewId: number) => `/api/movies/${movieId}/reviews/${reviewId}/dislike`,
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
