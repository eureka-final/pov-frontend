export interface Movie {
  item: {
    title: string;
    poster: string;
    released: string;
    movieLikeCount: number;
    movieReviewCount: number;
  }
}

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
  id: number;
  title: string;
  poster: string;
  released: string;
  movieLikeCount: number;
  reviewCount: number;
}

export interface MovieDetailResponse {
  message: string;
  data: MovieDetailData;
}

export interface MovieDetailData {
  backdrop: string;  // 추가 데이터
  title: string;
  released: string;
  genre: string[];
  movieLikeCount: number;
  reviewCount: number; // 추가 데이터
  percentage: number; // 추가 데이터
  goodCount: number;
  badCount: number;
  plot: string;
  directors: MovieDirector[];
  actors: MovieActor[];
  poster: string;
  country: string[];
  images: string[];
  videos: string[];
  reviews: MovieReview; // 추가 데이터 ()
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

export interface MovieReview {
  id: number;
  title: string;
  contents: string;
  isSpoiler: boolean;
  modifiedAt: string;
  likeCount: number;
  profileImage: string;
  name: string;
}