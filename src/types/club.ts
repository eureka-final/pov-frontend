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
    maxParticipant: number;
    clubMovieCount: number;
    clubFavorGenres: string[];
  }
  

export interface ClubFormData {
    name: string;
    description: string;
    maxParticipants: number;
    clubFavorGenre: string[];
    isPublic: boolean;
}