export interface ReviewsData {
  review: {
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
}

export interface ReviewFormData {
    title: string;
    contents: string;
    preference: string;
    keywords: string[];
    spoiler: boolean;
}
