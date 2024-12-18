// export interface Movie {
//   item: {
//     title: string;
//     poster: string;
//     released: string;
//     movieLikeCount: number;
//     movieReviewCount: number;
//   };
// }

export interface MovieResponse {
  message: string;
  data: MovieData;
}

export interface MoviesResponse {
  message: string;
  data: {
    movies: Movies;
  };
}

export interface TMDBMoviesResponse {
  message: string;
  data: TMDBS
}

export interface TMDBS {
  page: number;
  total_pages: number;
  total_results: number;
  results: MovieResult[];
}

export interface MovieResult {
  adult: boolean;
  genre_ids: number[];
  id: number;
  poster_path: string;
  release_date: string;
  title: string;
}

export interface Movies {
  size: number;
  content: Movie[];
  number: number;
  sort: Sort[];
  numberOfElements: number;
  pageable: Pageable;
  first: boolean;
  last: boolean;
  empty: boolean;
}

export interface Movie {
  id: number;
  title: string;
  released: string;
  poster: string;
  movieLikeCount: number;
  reviewCount: number;
}

export interface Sort {
  direction: string;
  nullHandling: string;
  ascending: boolean;
  property: string;
  ignoreCase: boolean;
}

export interface Pageable {
  offset: number;
  sort: Sort[];
  paged: boolean;
  pageNumber: number;
  pageSize: number;
  unpaged: boolean;
}

export interface MovieData {
  title: string;
  released: string;
  genre: string[];
  movieLikeCount: number;
  preferenceCounts: PreferenceCount[];
  plot: string;
  directors: Director[];
  actors: Actor[];
  poster: string;
  country: string[];
  images: string[];
  videos: string[];
  reviews: Review[];
  backdrop: string;
}

export interface PreferenceCount {
  goodCount: number;
  badCount: number;
}

export interface Director {
  id: number;
  name: string;
  profileImage: string;
  role: string;
}

export interface Actor {
  id: number;
  name: string;
  profileImage: string;
  role: string;
  order: number;
}

export interface Review {
  review: ReviewDetail;
  likeCount: number;
}

export interface ReviewDetail {
  id: number;
  title: string;
  contents: string;
  thumbnail: string;
  preference: string;
  isSpoiler: boolean;
  disabled: boolean;
  modifiedAt: string;
}

export interface TMDBMovieDetailResponse {
  message: string;
  data: MovieDetailData;
}

export interface MovieDetailData {
  tmdbId: number;
  title: string;
  plot: string;
  poster: string;
  backdrop: string;
  originCountries: string[];
  released: string;
  filmRating: string;
  genres: string[];
  peoples: Peoples;
}

export interface Peoples {
  cast: Cast[];
  crew: Crew[];
}

export interface Cast {
  gender: number;
  id: number;
  name: string;
  original_name: string;
  profile_path: string;
  cast_id: number;
  character: string;
  order: number;
}

export interface Crew {
  gender: number;
  id: number;
  name: string;
  original_name: string;
  profile_path: string;
  department: string;
  job: string;
  popularity?: number;
}
