export interface ReviewsData {
    reviewId: number;
    movieTitle: string;
    title: string;
    contents: string;
    reviewer: string;
    profileImge: string;
    thumbnail: string;
    createdAt: string;
    likeAmount: number;
    isLiked: boolean;
    spoiler: boolean;
}

export interface ReviewFormData {
    title: string;
    contents: string;
    preference: string;
    keywords: string[];
    spoiler: boolean;
}
