export interface MoviesResponse {
  message: string;
  data: {
      movies: MovieData;
  };
}

export interface MovieData {
  size: number;
  content: Movie[];
  number: number; // 현재 페이지 번호
  first: boolean; // 첫 페이지 여부
  last: boolean; // 마지막 페이지 여부
  empty: boolean; // 비어있는지 여부
}

export interface Movie {
  id: string;
  title: string;
  poster: string;
  released: string;
  isLiked: boolean;
  movieLikeCount: number;
  movieReviewCount: number;
}

export interface TrendingMoviesResponse {
  message: string;
  data: {
      movies: TrendingMovieData[];
  };
}

export interface TrendingMovieData {
  id: string;
  title: string;
  poster: string;
  released: string;
  isLiked: boolean;
  movieLikeCount: number;
  movieReviewCount: number;
}

export interface MovieDetailResponse {
  message: string;
  data: MovieDetailData;
}

export interface MovieDetailData {
  backdrop: string;
  title: string;
  released: string;
  genre: string[];
  movieLikeCount: number;
  preferenceCounts: MoviePrefer[];
  plot: string;
  directors: MovieDirector[];
  actors: MovieActor[];
  poster: string;
  country: string[];
  images: string[];
  videos: string[];
  reviews: MovieReview[];
  isLiked: boolean;
}

export interface MovieDirector {
  id: number;
  name: string;
  profileImage: string;
  role: string;
}

export interface MovieActor {
  id: number;
  name: string;
  profileImage: string;
  role: string;
  order: number;
}

export interface MoviePrefer {
  goodCount: number;
  badCount: number;
}

export interface MovieReview {
  reviewId: string;
  title: string;
  contents: string;
  isSpoiler: boolean;
  disabled: boolean;
  createdAt: string;
  likeAmount: number;
  profileImage: string;
  nickname: string;
  isLiked: boolean;
}