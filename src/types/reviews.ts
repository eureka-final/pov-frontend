export interface ReviewsResponse {
  message: string;
  data: {
    reviews: ReviewData;
  };
}

export interface ReviewData {
  size: number;
  content: Review[];
  number: number;
  first: boolean;
  last: boolean;
}

export interface Review {
  reviewId: string;
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
  keyword: string[];
}

export interface ReviewFormData {
  title: string;
  contents: string;
  preference: string;
  keywords: string[];
  spoiler: boolean;
}
