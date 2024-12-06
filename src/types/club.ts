export interface ClubsData {
    clubId: string;
    clubName: string;
    description: string; 
    createdAt: string; 
    participant: number;
    maxParticipant: number;
    collections: number;
    keywords: string[];
}


export interface ClubFormData {
    name: string;
    description: string;
    maxParticipants: number;
    clubFavorGenre: string[];
    isPublic: boolean;
}