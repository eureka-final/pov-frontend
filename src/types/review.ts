export interface ReviewsResponse {
  message: string;
  data: {
    clubId: string;
    reviews: ReviewData;
  };
}

export interface ReviewData {
  size: number;
  content: Review[];
  number: number; // 현재 페이지 번호
  first: boolean; // 첫 페이지 여부
  last: boolean; // 마지막 페이지 여부
  empty: boolean; // 비어있는지 여부
}

export interface Review {
  movieId: number;
  reviewId: number;
  movieTitle: string;
  title: string;
  contents: string;
  reviewer: string;
  profileImage: string;
  thumbnail: string;
  createdAt: string;
  likeAmount: number;
  isLiked: boolean;
  spoiler: boolean;
}

export interface JoinClubResponse {
  message: string;
  data: {
    clubs: JoinClubData[];
  };
}

export interface JoinClubData {
  clubId: string;
  clubName: string;
  clubImage: string;
}


export interface ReviewDetailDataResponse {
  message: string;
  data: ReviewDetailData;
}

export interface ReviewDetailData {
  title: string;
  contents: string;
  reviewer: string;
  profileImage: string;
  thumbnail: string;
  createdAt: string;
  likeAmount: number;
  isLiked: boolean;
  spoiler: boolean;
  keywords: string[];
}

export interface ReviewFormData {
  title: string;
  contents: string;
  preference: string;
  keywords: string[];
  spoiler: boolean;
}
