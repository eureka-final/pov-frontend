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