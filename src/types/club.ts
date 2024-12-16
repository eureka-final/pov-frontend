import { Movie } from "./movie";

export interface ClubsResponse {
    message: string;
    data: {
      clubs: Club[];
    };
}
  
export interface Club {
    clubId: string;
    clubName: string;
    clubDescription: string;
    participant: number;
    maxParticipants: number;
    clubMovieCount: number;
    clubFavorGenres: string[];
}
  

export interface ClubDetailDataResponse {
    message: string;
    data: ClubDetailData;
}

export interface ClubDetailData {
    isMember: boolean;
    clubId: string;
    clubName: string;
    clubDescription: string;
    clubImage: string;
    members: {
        memberList: ClubMember[];
    };
    participant: number;
    maxParticipants: number;
    isPublic: boolean;
    clubReviewList: ClubReviewList;
    clubFavorGenres: string[];
    movieCount: number;
    clubMovieList: ClubMovieList;
}

export interface ClubMemberDataResponse {
    message: string;
    data:  {
        clubMember: ClubMember[];
    };
}

export interface ClubMember {
    nickname: string;
    profileImage: string;
    isLeader: boolean;
    email: string;
}

export interface ClubReviewList {
    clubId: string;
    reviews: {
        size: number;
        content: ClubReview[];
    };
    reviewCount: number;
}

export interface ClubReview {
    movieId: string;
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


export interface ClubMovieList {
    clubMovies: {
        size: number;
        content: Movie[];
        number: number;
        sort: Array<{
            direction: string;
            nullHandling: string;
            ascending: boolean;
            property: string;
            ignoreCase: boolean;
        }>;
        numberOfElements: number;
        pageable: {
            offset: number;
            sort: Array<{
                direction: string;
                nullHandling: string;
                ascending: boolean;
                property: string;
                ignoreCase: boolean;
            }>;
            paged: boolean;
            pageNumber: number;
            pageSize: number;
            unpaged: boolean;
        };
        first: boolean;
        last: boolean;
        empty: boolean;
    };
}

export interface ClubFormData {
    name: string;
    description: string;
    maxParticipants: number | null;
    clubFavorGenre: string[];
    isPublic: boolean;
}

export interface LeaderData {
    newLeaderEmail: string;
}